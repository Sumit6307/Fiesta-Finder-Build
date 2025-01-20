import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypingEffect = () => {
  return (
    <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
      <Typewriter
        words={[
            'Dream Weddings',
          'Timeless Love',
          'Elegant Celebrations',
          'Cherished Memories',
          'Perfect Vows',
          'Pure Bliss',
          'Everlasting Joy',
          'Love in Bloom',
        ]}
        loop
        cursor
        cursorStyle="|"
        typeSpeed={120}
        deleteSpeed={140}
        delaySpeed={2000}
      />
    </span>
  );
};

export default TypingEffect;
