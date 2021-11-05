import { useState, useEffect } from 'react';

const Hero = () => {
  const [color, setColor] = useState('');

  useEffect(() => {
    if (!color) {
      return;
    }

    const classList = document.getElementById("hero-name").classList;
    if (color.includes("remove")) {
      classList.remove(color.split(":")[1])
      return
    }

    classList.add(color);
  }, [color]);

  return (
    <div className="flex-1 flex-col content-center min-h-screen">
      <div className="flex flex-col p-4 pt-80 md:px-16">
        <h1 id="hero-name" className="text-heroH1Sm md:text-heroH1Md">
          <span className="block md:inline-block font-bold leading-none">Bethany </span>
          <span className="block md:inline-block font-thin tracking-widest leading-none">Janos</span>
        </h1>
        <h2 className="text-heroH2Sm md:text-heroH2Md text-gray-500 dark:text-gray-400">Software engineer.</h2>
        <div className="flex flex-row justify-between pt-20">
          <a href="#" className="font-medium hover:text-red-400" onMouseEnter={() => setColor("text-red-400")} onMouseLeave={() => setColor("remove:text-red-400")}>About</a>
          <a href="#" className="font-medium hover:text-yellow-400" onMouseEnter={() => setColor("text-yellow-400")} onMouseLeave={() => setColor("remove:text-yellow-400")}>Experience</a>
          <a href="#" className="font-medium hover:text-green-400" onMouseEnter={() => setColor("text-green-400")} onMouseLeave={() => setColor("remove:text-green-400")}>Contact</a>
        </div>
      </div>
    </div>
  )
};

export default Hero;
