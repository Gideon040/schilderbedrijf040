import React, { useState, useEffect } from 'react';

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 mb-4 md:mb-0">
            Wij gebruiken cookies om uw ervaring op onze website te verbeteren.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={acceptCookies}
              className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors"
            >
              Accepteren
            </button>
            <button
              onClick={() => setShow(false)}
              className="border border-gray-300 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors"
            >
              Weigeren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}