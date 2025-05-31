import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ChapterModal({ isOpen, onClose }) {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Ngăn cuộn trang nền
    } else {
      document.body.style.overflow = ''; // Khôi phục cuộn khi đóng modal
    }
    return () => {
      document.body.style.overflow = ''; // Dọn dẹp khi component unmount
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const introText = "Chapter 1: The Genesis - Awakening of the Elements";
  const longText = `
In the primordial dawn of existence, when the cosmos was a swirling maelstrom of chaos and void, a singular event birthed the universe of CHAOS. From the heart of an ancient star, a radiant orb known as the Eternal Core, six elemental spirits were forged, each embodying a fundamental aspect of life and nature. These were not mere forces but sentient beings, each with a distinct soul, personality, and purpose, destined to shape the fabric of reality. Their names were Ignis (Fire), Glacia (Ice), Zephyr (Wind), Terran (Earth), Sylva (Tree), and Aqua (Water). Together, they formed a delicate balance that sustained the universe, yet their differences would soon spark a conflict threatening to unravel it all.
  `.trim();

  const longText1 = `
* Ignis - the Flame of Fury, was born in a blaze of molten light, his essence a roaring inferno that illuminated the darkness. His towering figure was wreathed in crimson and gold flames, his eyes like burning embers that never dimmed. Ignis was a warrior at heart, driven by an unyielding passion to lead and conquer. His voice boomed like a volcano, commanding attention, but his temper was a double-edged sword—capable of inspiring courage or igniting destruction. Ignis ruled the Scorched Plains, a land of volcanic peaks and rivers of lava, where his fiery subjects thrived in the heat of his presence. Yet, his relentless need to dominate often blinded him to the needs of others, making him both a beacon of strength and a source of discord.
  `.trim();

  const longText2 = `
* Glacia - The Frost Sage, emerged from the star’s icy breath, his form sculpted from crystalline frost that shimmered like a frozen galaxy. His silver-blue eyes held the weight of eons, as if he could peer through the veils of time itself. Glacia was the embodiment of wisdom and restraint, his calm demeanor a stark contrast to Ignis’s volatility. He presided over the Frostspire Mountains, a serene expanse of ice-covered peaks and shimmering glaciers, where silence was his ally. Glacia’s analytical mind sought answers in patterns and prophecies, but his aloofness often made him seem distant, his heart encased in ice that few could thaw. He valued logic above all, distrusting the chaos of emotions.
  `.trim();

  const longText3 = `
* Zephyr - The Spirit of the Gale, was born from a gust of cosmic wind, his form ethereal and ever-shifting, like a breeze that could never be caught. His laughter was the sound of rustling leaves, and his eyes sparkled with the mischief of a storm. Zephyr ruled the Skydance Expanse, a boundless realm of floating islands and swirling tempests, where his people danced with the winds. Freedom was his creed, and he reveled in exploration, darting from one adventure to the next. However, his restless nature made him unreliable, his refusal to be tethered causing friction with those who craved stability. Zephyr was a whirlwind of joy and unpredictability, but his fleeting presence left others longing for his commitment.
  `.trim();

  const longText4 = `
* Terran - The Stone Warden, was forged from the star’s molten core, his massive form resembling a mountain given life. His skin was rough like granite, etched with veins of glowing minerals, and his deep, rumbling voice carried the weight of the earth itself. Terran governed the Ironcrag Valleys, a realm of towering cliffs and fertile plains, where his people built enduring cities from stone. He was the steadfast protector, valuing tradition and order above all. Terran’s unyielding resolve made him a pillar of strength, but his stubborn refusal to embrace change often put him at odds with the more dynamic elements. To him, the world was a foundation to be preserved, not reshaped.
  `.trim();

  const longText5 = `
* Sylva - The Verdant Healer, sprouted from the star’s nurturing essence, her form a delicate blend of vine and flower, with emerald eyes that glowed with life. Her voice was a soft melody, like the rustle of leaves in a forest breeze. Sylva reigned over the Emerald Canopy, a lush jungle teeming with vibrant flora and fauna, where her gentle touch could mend any wound. She was the heart of the elements, her empathy connecting all living things. Yet, her tenderness made her vulnerable, her desire to nurture often leaving her exposed to harm. Sylva dreamed of unity, but her fragility made her fear the harshness of conflict.
  `.trim();

  const longText6 = `
* Aqua - The Tideweaver, flowed from the star’s liquid core, his form a shimmering cascade of water that shifted between serene pools and raging torrents. His sapphire eyes reflected the depths of emotion, and his voice was a soothing current that could calm or overwhelm. Aqua ruled the Azure Depths, a vast ocean dotted with coral kingdoms and tranquil lagoons, where his people thrived in harmony with the tides. His adaptability made him a natural diplomat, able to navigate any situation with grace. However, his sensitivity often left him swayed by the emotions of others, his heart a turbulent sea of empathy and doubt.
  `.trim();

  const longText7 = `
For millennia, the six elements maintained a precarious harmony, each governing their domain within the universe of CHAOS. Their realms flourished in isolation, their powers complementing one another in a cosmic dance. Ignis’s flames warmed the earth for Terran’s crops to grow. Glacia’s ice preserved Sylva’s forests during harsh seasons. Zephyr’s winds carried Aqua’s rains across the lands, and Sylva’s roots anchored Terran’s soil. Yet, beneath this equilibrium lay simmering tensions, as each element’s pride in their domain bred rivalry and mistrust.
The heart of their universe was the Eternal Core, a pulsating orb of pure energy housed in the Sacred Temple, a floating citadel of crystal and stone suspended at the center of CHAOS. The Core was the source of their power, a relic of the ancient star that birthed them. It glowed with a radiant light, its energy binding the elements together. Every century, the elements would gather at the Sacred Temple for the Rite of Concord, a ceremony to renew their pact and ensure the Core’s stability. These gatherings were often tense, with Ignis’s bold declarations clashing with Glacia’s measured critiques, and Zephyr’s absences frustrating Terran’s calls for unity.
  `.trim();
  const longText71 = `
The heart of their universe was the Eternal Core, a pulsating orb of pure energy housed in the Sacred Temple, a floating citadel of crystal and stone suspended at the center of CHAOS. The Core was the source of their power, a relic of the ancient star that birthed them. It glowed with a radiant light, its energy binding the elements together. Every century, the elements would gather at the Sacred Temple for the Rite of Concord, a ceremony to renew their pact and ensure the Core’s stability. These gatherings were often tense, with Ignis’s bold declarations clashing with Glacia’s measured critiques, and Zephyr’s absences frustrating Terran’s calls for unity.
  `.trim();

  const longText8 = `
One fateful day, as the elements prepared for the Rite of Concord, the Eternal Core began to tremble. Its radiant glow flickered, and strange, discordant waves of energy pulsed through the universe. The ground shook in Terran’s valleys, storms raged in Zephyr’s skies, and Sylva’s forests withered under an unseen blight. Whispers of an ancient prophecy surfaced, spoken of in Glacia’s tomes: a force known as the Void, a malevolent entity born from the universe’s forgotten shadows, would awaken to consume all creation if the elements failed to unite.

The Void’s presence was palpable, a creeping darkness that seeped into the edges of each realm. It whispered promises of power to Ignis, sowed doubt in Aqua’s heart, and stirred restlessness in Zephyr’s winds. The elements, sensing the threat, abandoned their domains and converged at the Sacred Temple. The citadel, once a beacon of light, now stood shrouded in an eerie mist, its crystal walls reflecting the Core’s faltering glow.
  `.trim();
  const longText81 = `
The Void’s presence was palpable, a creeping darkness that seeped into the edges of each realm. It whispered promises of power to Ignis, sowed doubt in Aqua’s heart, and stirred restlessness in Zephyr’s winds. The elements, sensing the threat, abandoned their domains and converged at the Sacred Temple. The citadel, once a beacon of light, now stood shrouded in an eerie mist, its crystal walls reflecting the Core’s faltering glow.
  `.trim();

  const longText9 = `
Within the temple’s grand hall, adorned with murals depicting the elements’ creation, the air crackled with tension. Ignis strode forward, his flames casting long shadows across the stone floor. “The Void is a foe that only strength can vanquish!” he roared, slamming his fist against a pillar, sending sparks flying. “We must strike now, with fire and fury, before it grows stronger!” His voice echoed, but his words ignited unease among the others.
  `.trim();
  const longText91 = `
Glacia, seated on a throne of ice, fixed Ignis with a piercing gaze. “Brute force will not unravel the Void’s mystery,” he countered, his voice as cold as the frost that clung to his robes. “The Eternal Core holds secrets we must decipher. Only knowledge will guide us.” He gestured to a glowing rune on the temple’s floor, pulsing in sync with the Core. His words, though logical, felt dismissive to Ignis, who bristled at his calm demeanor.
  `.trim();
  const longText92 = `
Zephyr, perched on a ledge high above, laughed bitterly. “You both argue while the winds of change blow past you,” he said, his form flickering like a mirage. “I won’t be chained to your plans. The Void can’t catch what it can’t see.” With a gust, he vanished, leaving only a swirl of dust in his wake. His departure stung Sylva, who had hoped Zephyr’s free spirit could inspire unity.
  `.trim();
  const longText93 = `
Terran stepped forward, his heavy footsteps shaking the ground. “Enough!” he bellowed, his voice like an earthquake. “We are the foundation of this universe. We must stand together, not scatter like leaves.” His words were meant to unite, but his rigid tone only deepened the rift. Sylva, her vines trembling, pleaded softly, “We must heal, not fight. The Core needs us all.” Aqua, standing by a pool of reflective water, nodded in agreement, his voice a gentle tide. “We can find balance if we listen to each other.”
  `.trim();
  const longText94 = `
But the Void was cunning. As the elements argued, tendrils of shadow slithered through the temple’s cracks, whispering doubts into their minds. To Ignis, it promised dominion over all realms. To Glacia, it hinted at forbidden knowledge. To Aqua, it amplified his fears of failure. The temple trembled, its walls groaning under the weight of their discord. A crack split the floor, and the Eternal Core’s light dimmed further, casting the hall into twilight.
  `.trim();

  const longText10 = `
As the elements stood divided, the Void grew stronger, its shadows coiling around the Eternal Core. Ignis’s flames flickered, Glacia’s ice began to melt, and Sylva’s vines wilted. Aqua’s waters grew murky, Terran’s stone crumbled, and Zephyr’s absence left an unsettling calm. The realization dawned upon them: their disunity was the Void’s greatest weapon. To survive, they would need to overcome their flaws and forge a bond stronger than their differences. But with the Sacred Temple on the brink of collapse and the Void’s whispers growing louder, could they find the strength to unite before it was too late?
  `.trim();

  const textSegments = [
    { type: 'text', content: longText },
    { type: 'highlight', content: '- The Birth and Essence of the Elements:' },
    { type: 'text', content: longText1 },
    { type: 'text', content: longText2 },
    { type: 'text', content: longText3 },
    { type: 'text', content: longText4 },
    { type: 'text', content: longText5 },
    { type: 'text', content: longText6 },
    { type: 'highlight', content: '- The Fragile Balance:' },
    { type: 'text', content: longText7 },
    { type: 'text', content: longText71 },
    { type: 'highlight', content: '- The Stirring of the Void:' },
    { type: 'text', content: longText8 },
    { type: 'text', content: longText81 },
    { type: 'highlight', content: '- The Clash at the Sacred Temple:' },
    { type: 'text', content: longText9 },
    { type: 'text', content: longText91 },
    { type: 'text', content: longText92 },
    { type: 'text', content: longText93 },
    { type: 'text', content: longText94 },
    { type: 'highlight', content: '- Conclusion of Chapter 1:' },
    { type: 'text', content: longText10 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-ivory flex items-center justify-center z-50"
    >
      <motion.button
        onClick={onClose}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute top-4 right-4 bg-red-600 text-ivory text-lg sm:text-xl font-bold uppercase px-4 py-2 border-2 border-black rounded-lg shadow-cartoon hover:brightness-90 transition-all duration-300 z-30"
      >
        Close
      </motion.button>
      <div className="relative w-[95vw] h-[85vh] bg-ivory border-4 border-black rounded-2xl shadow-cartoon p-6 mt-12 sm:p-8">
        <Image
          src="/images/background.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-10 pointer-events-none rounded-xl"
        />
        <div
          className="relative mx-1 sm:mx-4 mb-4 max-h-[calc(100%)] min-h-0 overflow-y-auto bg-ivory/80 rounded-lg p-4 z-20 pointer-events-auto overscroll-contain scroll-smooth hide-scrollbar"
          onMouseEnter={() => console.log('Hovering over scrollable text area')}
        >
          <h1 className="text-navy-black text-xl sm:text-3xl md:text-4xl font-bold text-center mt-10 mb-8 uppercase">
            {introText}
          </h1>
          {textSegments.map((segment, index) => (
            <p
              key={index}
              className={`text-navy-black mb-8 ${
                segment.type === 'highlight'
                  ? 'text-xl sm:text-2xl font-bold uppercase mt-16'
                  : 'text-sm sm:text-lg md:text-xl leading-relaxed'
              }`}
            >
              {segment.content}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}