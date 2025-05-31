import tweepy
import json
import schedule
import time
import os
import random
import requests
from googleapiclient.discovery import build
from google.oauth2 import service_account

# Twitter (X) API configuration
API_KEY = "ZOPP6IXYvKNmb2Oud7pKl6Uyv"
API_SECRET = "AbVNqy12neZF816WqFb1TBVt4pPCZroeUyZMdrxIU5A3jkq7pR"
ACCESS_TOKEN = "1928028289416974340-xxX9g7fr8Pj9VWLj4yk75MxxlQ6qS8"
ACCESS_TOKEN_SECRET = "qBDa7r0lcb7yZnfzVu4F3hxHb2W5kHqxQXZtAjY3CTtae"

# Grok API configuration
GROK_API_KEY = "xai-MrFDdaILEDDORlbGBmnsT9yog8dH9yV7DVwWZzb4mk36OdjtjSTh53t3pCGslwLigxq8Ran1UiQB5AWj"  # Replace with your xAI API key
GROK_API_URL = "https://api.x.ai/v1/chat/completions"

# Initialize Tweepy client for API v2
client = tweepy.Client(
    consumer_key=API_KEY,
    consumer_secret=API_SECRET,
    access_token=ACCESS_TOKEN,
    access_token_secret=ACCESS_TOKEN_SECRET
)

# Initialize Tweepy API for media upload (v1.1)
auth = tweepy.OAuth1UserHandler(API_KEY, API_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
api = tweepy.API(auth)

# Google Sheets configuration
SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
CREDENTIALS_FILE = 'credentials.json'
SPREADSHEET_ID = '1i_L8sZ-CfrEdDUCpvOA7h1Qkul8W-N2N76Zg-xwyEsk'
RANGE_NAME = 'Sheet1!A2:B'
POSTED_TWEETS_FILE = 'posted_tweets.json'
HANDLES_FILE = 'handles.json'
IMAGE_DIR = 'images'

# Verify Twitter API authentication
try:
    user = client.get_me()
    print(f"Twitter API v2 authentication successful! Account: {user.data.username}")
except tweepy.errors.TweepyException as e:
    print(f"Twitter API v2 authentication error: {e}")
    exit(1)

# Initialize Google Sheets API
def get_sheets_service():
    try:
        creds = service_account.Credentials.from_service_account_file(CREDENTIALS_FILE, scopes=SCOPES)
        service = build('sheets', 'v4', credentials=creds)
        print("Google Sheets API initialized successfully!")
        return service
    except Exception as e:
        print(f"Error initializing Google Sheets API: {e}")
        return None

# Generate tweet text using Grok API
def generate_tweet_text(handle):
    try:
        headers = {
            "Authorization": f"Bearer {GROK_API_KEY}",
            "Content-Type": "application/json"
        }
        prompt = (
            f"Write a short, exciting tweet (under 280 characters) to welcome a new member to the CHAOS adventure , only use hastag #CHAO , #NFT "
            f"Include the Twitter handle {handle} in the text. Use a positive, epic tone similar to: "
            f"'The air is moving stronger, it seems like something is coming, that is {handle} has joined the adventure of CHAOS. Congratulations!'"
        )
        data = {
            "model": "grok-3",
            "messages": [{"role": "user", "content": prompt}],
            "max_tokens": 100,
            "temperature": 0.7
        }
        response = requests.post(GROK_API_URL, headers=headers, json=data)
        response.raise_for_status()
        tweet_text = response.json()['choices'][0]['message']['content'].strip()
        if handle not in tweet_text:
            tweet_text = f"{tweet_text} Welcome {handle}!"
        if len(tweet_text) > 280:
            tweet_text = tweet_text[:277] + "..."
        return tweet_text
    except Exception as e:
        print(f"Error generating tweet with Grok API: {e}")
        return f"Welcome {handle} to the CHAOS adventure! The journey begins now. Congratulations!"

# Load data from Google Sheets and update handles.json
def update_handles_from_sheets():
    try:
        service = get_sheets_service()
        if service is None:
            print("Cannot update handles.json due to Google Sheets API error.")
            return
        result = service.spreadsheets().values().get(spreadsheetId=SPREADSHEET_ID, range=RANGE_NAME).execute()
        values = result.get('values', [])
        print(f"Data from Google Sheet: {values}")

        # Load existing handles
        existing_data = load_data_from_handles()
        existing_handles = {item['TwitterHandles']: item['Posted'] for item in existing_data}

        # Create new data, preserving Posted status
        data = []
        for row in values:
            if row and row[0].strip():
                handle = row[0].strip()
                posted = existing_handles.get(handle, False)
                if len(row) > 1 and row[1].strip().upper() == 'TRUE':
                    posted = True
                data.append({'TwitterHandles': handle, 'Posted': posted})

        with open(HANDLES_FILE, 'w', encoding='utf-8') as file:
            json.dump(data, file, ensure_ascii=False, indent=4)
        print(f"Updated {HANDLES_FILE} with {len(data)} handles.")
    except Exception as e:
        print(f"Error updating handles.json from Google Sheet: {e}")

# Load data from handles.json
def load_data_from_handles():
    try:
        if os.path.exists(HANDLES_FILE):
            with open(HANDLES_FILE, 'r', encoding='utf-8') as file:
                data = json.load(file)
                print(f"Data from handles.json: {data}")
                return data
        print("handles.json not found")
        return []
    except Exception as e:
        print(f"Error reading handles.json: {e}")
        return []

# Update Posted status in handles.json
def update_posted_status(row_index, value='TRUE'):
    try:
        data = load_data_from_handles()
        if row_index < len(data):
            data[row_index]['Posted'] = value.upper() == 'TRUE'
            with open(HANDLES_FILE, 'w', encoding='utf-8') as file:
                json.dump(data, file, ensure_ascii=False, indent=4)
            print(f"Updated Posted status for row {row_index} to {value}")
        else:
            print(f"Error: Row {row_index} does not exist in handles.json")
    except Exception as e:
        print(f"Error updating handles.json: {e}")

# Save posted tweet data
def save_posted_tweet(handle):
    posted_tweets = load_posted_tweets()
    posted_tweets.append({
        'TwitterHandles': handle,
        'posted_at': time.strftime("%Y-%m-%d %H:%M:%S")
    })
    with open(POSTED_TWEETS_FILE, 'w', encoding='utf-8') as file:
        json.dump(posted_tweets, file, ensure_ascii=False, indent=4)
    print(f"Saved tweet to {POSTED_TWEETS_FILE}: {handle}")

# Load list of posted tweets
def load_posted_tweets():
    try:
        if os.path.exists(POSTED_TWEETS_FILE):
            with open(POSTED_TWEETS_FILE, 'r', encoding='utf-8') as file:
                data = json.load(file)
                print(f"Data from posted_tweets.json: {data}")
                return data
        return []
    except Exception as e:
        print(f"Error reading posted_tweets.json: {e}")
        return []

# Get random image from images directory
def get_random_image():
    try:
        images = [f for f in os.listdir(IMAGE_DIR) if f.lower().endswith(('.jpg', '.jpeg', '.png'))]
        if not images:
            print("No images found in images directory.")
            return None
        return os.path.join(IMAGE_DIR, random.choice(images))
    except Exception as e:
        print(f"Error selecting random image: {e}")
        return None

# Post a tweet with image
def post_tweet():
    print(f"Checking for new tweet at {time.strftime('%Y-%m-%d %H:%M:%S')}...")
    data = load_data_from_handles()
    posted_tweets = load_posted_tweets()
    posted_handles = [tweet['TwitterHandles'] for tweet in posted_tweets]
    print(f"Posted handles: {posted_handles}")

    new_handles = [item for item in data if item['TwitterHandles'] not in posted_handles and not item['Posted']]
    print(f"New handles to post: {new_handles}")

    if not new_handles:
        print("No new Twitter handles to post.")
        return

    handle = new_handles[0]['TwitterHandles']
    # Generate tweet text using Grok API
    tweet_text = generate_tweet_text(handle)

    try:
        # Upload image
        image_path = get_random_image()
        if image_path:
            media = api.media_upload(image_path)
            media_id = media.media_id
            print(f"Uploaded image: {image_path}")
            client.create_tweet(text=tweet_text, media_ids=[media_id])
        else:
            print("No image available, posting text only.")
            client.create_tweet(text=tweet_text)

        print(f"Posted tweet at {time.strftime('%Y-%m-%d %H:%M:%S')}: {tweet_text}")

        for idx, item in enumerate(data):
            if item['TwitterHandles'] == handle:
                update_posted_status(idx, 'TRUE')
                break

        save_posted_tweet(handle)

    except tweepy.errors.TweepyException as e:
        print(f"Error posting tweet: {e}")

# Schedule tweet with random delay
def schedule_random_tweet():
    delay = random.randint(3600, 5400)  # Random delay between 1 to 1.5 hours
    print(f"Scheduling tweet in {delay // 60} minutes...")
    time.sleep(delay)
    post_tweet()
    return schedule.CancelJob  # Cancel this job to avoid overlap

# Run the bot
def run_bot():
    print("Starting tweet check immediately...")
    update_handles_from_sheets()  # Update handles.json initially
    post_tweet()  # Post first tweet immediately

    while True:
        schedule.every(1).hours.do(update_handles_from_sheets)  # Update handles.json hourly
        schedule.run_pending()
        schedule_random_tweet()  # Schedule next tweet with random delay
        time.sleep(60)

if __name__ == "__main__":
    if not os.path.exists(POSTED_TWEETS_FILE):
        with open(POSTED_TWEETS_FILE, 'w', encoding='utf-8') as file:
            json.dump([], file)
    
    if not os.path.exists(IMAGE_DIR):
        os.makedirs(IMAGE_DIR)
    
    print(f"Twitter bot started at: {time.strftime('%Y-%m-%d %H:%M:%S')}")
    run_bot()