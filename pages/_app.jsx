import { useState } from 'react';
import Loading from '../components/Loading';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="grid-background">
      {isLoading ? (
        <Loading onComplete={handleLoadingComplete} />
      ) : (
        <Component {...pageProps} />
      )}
    </div>
  );
}