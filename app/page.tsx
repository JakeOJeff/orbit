"use client"
import Image from "next/image";

import OrbitImages from '@/components/OrbitImages'

const images = [
  "https://raw.githubusercontent.com/hidoya/ap-physics-simulation/master/screenshot/grav-sim-screenshot.png",
  "https://testtubegames.com/Images/OGImages/Gravity_OG.png",
  "https://external-preview.redd.it/i-made-a-gravity-field-visualization-mode-for-my-v0-dGUwMnVwZzl6eGJnMcwRfYxX085qFrFsn6gApmqa7Od_dP2NJrTvOmEELMx_.png?width=1080&crop=smart&format=pjpg&auto=webp&s=c374910f668269b821f0d6eec99d7711d3771516",
  "https://www.testtubegames.com/gsim101/images/fullpage2/GravitySimulator_142.png",
  "https://www.gravitasim.com/img/pict1.png",
  "https://raw.githubusercontent.com/DylanCope/Gravity-Simulator/master/screenshot.png",
];
export default function Home() {
  return (
    <>
      <main className="bg-[#010C15] flex flex-col items-center justify-center min-h-screen w-full px-4">
        <div className="items-center justify-center w-full max-w-4xl">
          <div className="flex items-center justify-center">
            <h4 className="text-base sm:text-xl text-[#EBDFCE] text-center">simulate gravity, get a levitating globe</h4>
          </div>
          <div className="flex items-center justify-center">
            <Image alt="orbit-logo" src="/logo.png" width={0} height={0} sizes="100vw" className="w-auto h-auto max-w-xs sm:max-w-md md:max-w-lg" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-base sm:text-xl text-[#EBDFCE] mb-3 text-center">from june 4th till 29th, 2026</h4>
            <a className="bg-[#006898] hover:bg-[#204B65] font-(family-name:--font-lora) transition-all duration-300 ease-in-out rounded-4xl p-6 py-4 text-xl sm:text-3xl" href="fillout.com">Submit</a>
            <a className="text-[#EBDFCE] text-base sm:text-xl my-3" href="#about">..learn more?</a>
          </div>
          <div className="absolute bottom-0 right-0 z-20">
            <Image
              src="/border-circles-1.png"
              alt="Hack Club"
              width = {0}
              height = {0}
              sizes="100vw"
              className="w-100 h-auto max-w-xs sm:max-w-md md:max-w-lg"
            />
          </div>
        </div>
      </main>

      <section id="about" className="bg-[#204B65] flex flex-col items-center justify-center min-h-screen w-full px-4 py-16">
        <div className="w-full max-w-4xl items-center justify-center flex flex-col">
          <h3 className="text-5xl text-[#EBDFCE] sm:text-7xl md:text-8xl font-(family-name:--font-baumans) font-bold  text-center">what is orbit?
          </h3>
          <p className="text-base text-white sm:text-xl md:text-2xl font-(family-name:--font-lora) text-center mt-6">
            Orbit is a You Ship, We Ship where highschoolers create a
            software, webapp or a game which simulates gravity
            or space where physics is the core mechanic that drives everything.
            In return, they get a magnetic levitation globe shipped to them!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 my-10 gap-10 w-full max-w-4xl">
          <div className="border-4 transition-all duration-300 rounded-4xl p-6 sm:p-10 hover:border-[#EBDFCE]">
            <h1 className="text-2xl text-[#EBDFCE] sm:text-3xl mb-4 font-(family-name:--font-baumans) font-semibold">Valid Examples</h1>
            <ul className="space-y-2 text-white text-base sm:text-xl font-(family-name:--font-lora)">
              <li className="flex items-start gap-2">
                <span className="mt-1">✓</span> N-body gravity simulator where planets orbit each other
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">✓</span> Black hole simulation and object spaghettification
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">✓</span> Solar System sandboxes
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">✓</span> Fluid Simulation driven by gravitational pressure
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">✓</span> Game where core mechanic is gravity manipulation
              </li>
            </ul>
          </div>
          <div className="border-4 transition-all duration-300 rounded-4xl p-6 sm:p-10 hover:border-[#EBDFCE]">
            <h1 className="text-2xl text-[#EBDFCE] sm:text-3xl mb-4 font-(family-name:--font-baumans) font-semibold">Invalid Examples</h1>
            <ul className="space-y-2 text-base text-white sm:text-xl font-(family-name:--font-lora)">
              <li className="flex items-start  gap-2">
                <span className="mt-1">✗</span> Platformer with gravity
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">✗</span> Game/Software where removing gravity won't break the core mechanic
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">✗</span> Space themed software/games with no actual physics simulation
              </li>
            </ul>
          </div>

        </div>
        <div className="w-full max-w-4xl">
          <div className="relative h-[200px] flex items-center justify-center">
            <OrbitImages
              images={images}
              shape="ellipse"
              radiusX={300}
              radiusY={80}
              rotation={-10}
              duration={40}
              itemSize={80}
              responsive={true}
              direction="normal"
              fill
              showPath
              paused={false}
            />
          </div>
        </div>
      </section>

      <section id="rewards" className="bg-[#EBDFCE] flex flex-col items-center justify-center min-h-screen w-full px-4 py-16">
        <div className="w-full max-w-4xl items-center justify-center flex flex-col">
          <h3 className="text-5xl sm:text-7xl md:text-8xl text-[#CE1921] font-(family-name:--font-baumans) font-bold">rewards!</h3>
          <p className="text-base sm:text-xl md:text-2xl text-[#CE1921] font-(family-name:--font-lora) text-center mt-4">
            Prizes are given out for creative and polished projects which hit the minimum time requirement. Really creative and innovative projects are heavily appreciated and are great for validating your work!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 my-10 gap-10 w-full max-w-4xl">
          <div className="bg-[#63A7B2] px-5 py-16 sm:py-20 rounded-4xl rotate-2 transition-all duration-300 hover:rotate-0 justify-center items-center flex flex-col">
            <Image alt="globe-prize" src="/prize.png" width={300} height={300} className="w-40 sm:w-64 md:w-72 h-auto" />
            <h3 className="text-3xl sm:text-5xl font-(family-name:--font-baumans) font-semibold text-center mt-4">Levitating Globe</h3>
            <h2 className="text-base sm:text-xl font-(family-name:--font-lora) mt-2">well polished tier</h2>
            <h2 className="text-base sm:text-xl font-(family-name:--font-lora)">{`>= 10 hackatime hours`}</h2>
          </div>
          <div className="bg-[#63A7B2] px-5 py-16 sm:py-20 rounded-4xl -rotate-2 transition-all duration-300 hover:rotate-0 justify-center items-center flex flex-col">
            <Image alt="bonus-prize" src="/bonus.png" width={300} height={300} className="w-40 sm:w-64 md:w-72 h-auto" />
            <h3 className="text-3xl sm:text-5xl font-(family-name:--font-baumans) font-semibold text-center mt-4">Mechanical Fidget Toy</h3>
            <h2 className="text-base sm:text-xl font-(family-name:--font-lora) mt-2">Bonus Tier</h2>
            <h2 className=" text-base sm:text-xl font-(family-name:--font-lora)">{`>= 3 hackatime hours`}</h2>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#204B65] flex flex-col items-center justify-center min-h-screen w-full px-4 py-16">
        <div className="w-full max-w-4xl items-center justify-center flex flex-col">
          <h3 className="text-5xl sm:text-7xl md:text-8xl text-[#EBDFCE] font-(family-name:--font-baumans) font-bold">faq</h3>
          <p className="text-base sm:text-xl md:text-2xl text-white font-(family-name:--font-lora) text-center mt-4">
            Some commonly asked questions. Please read this before further checking out new stuff. Ping or message in the help channel for anything
            not answered here!
          </p>
        </div>


        <div className="grid grid-cols-2 sm:grid-cols-3 my-10 gap-2 w-full max-w-4xl">
          <div className="border-4 transition-all duration-300 rounded-4xl p-6 sm:p-10 hover:border-[#EBDFCE]">
            <h1 className="text-2xl text-[#EBDFCE] sm:text-3xl mb-4 font-(family-name:--font-baumans) font-semibold">whats the cost?</h1>
            <p className="text-white font-(family-name:--font-lora)">it is completely free to participate and get prizes!</p>
          </div>
          <div className="border-4 transition-all duration-300 rounded-4xl p-6 sm:p-10 hover:border-[#EBDFCE]">
            <h1 className="text-2xl text-[#EBDFCE] sm:text-3xl mb-4 font-(family-name:--font-baumans) font-semibold">what counts as a ship?</h1>
            <p className="text-white font-(family-name:--font-lora)">your Ship should have a public github repo, a live playable link, downloadable binary, etc</p>
          </div>
          <div className="border-4 transition-all duration-300 rounded-4xl p-6 sm:p-10 hover:border-[#EBDFCE]">
            <h1 className="text-2xl text-[#EBDFCE] sm:text-3xl mb-4 font-(family-name:--font-baumans) font-semibold">who can participate?</h1>
            <p className="text-white font-(family-name:--font-lora)">students and teenagers aged 13-18 can participate!</p>
          </div>
          <div className="border-4 transition-all duration-300 rounded-4xl p-6 sm:p-10 hover:border-[#EBDFCE]">
            <h1 className="text-2xl text-[#EBDFCE] sm:text-3xl mb-4 font-(family-name:--font-baumans) font-semibold">what can i make?</h1>
            <p className="text-white font-(family-name:--font-lora)">you can make any project that you like as long as gravity is the core mechanic, cc: <a className="underline hover:text-[#EBDFCE] transition-all duration-300" href="/#about">examples</a></p>
          </div>
          <div className="border-4 transition-all duration-300 rounded-4xl p-6 sm:p-10 hover:border-[#EBDFCE]">
            <h1 className="text-2xl text-[#EBDFCE] sm:text-3xl mb-4 font-(family-name:--font-baumans) font-semibold">how to get the bonus prize?</h1>
            <p className="text-white font-(family-name:--font-lora)">work for an extra three hours and get the bonus prize {`(and maaaaybe a sticker too)`}</p>
          </div>
          <div className="border-4 transition-all duration-300 rounded-4xl p-6 sm:p-10 hover:border-[#EBDFCE]">
            <h1 className="text-2xl text-[#EBDFCE] sm:text-3xl mb-4 font-(family-name:--font-baumans) font-semibold">how do i track hours?</h1>
            <p className="text-white font-(family-name:--font-lora)">you can track hours in your IDE using <a className="underline hover:text-[#EBDFCE] duration-300 transition-all" href="https://hackatime.hackclub.com">hackatime</a></p>
          </div>


        </div>
      </section>

      <div className="w-full h-[50px] bg-[#EBDFCE] items-center justify-center text-center">
        <h4 className="font-(family-name:--font-baumans) text-[#010C15]">made with love by <a>JakeOJeff</a></h4>
        <h4 className="font-(family-name:--font-baumans) text-[#010C15]">fellowship '26 | 80's nasa <a href="https://archive.org/details/C-1984-5793" className="underline hover:text-[#204B65] transition-all duration-300" >program</a> palette</h4>
      </div>

    </>
  );
}