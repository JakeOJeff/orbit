import Image from "next/image";
export default function Home() {
  return (
    <>
      <main className="bg-[#010C15] flex flex-col items-center justify-center min-h-screen w-full">
                <div className="absolute top-0 left-0 z-20">
          <img 
            src="https://assets.hackclub.com/flag-orpheus-left.svg" 
            alt="Hack Club" 
            className="w-60 h-auto"
          />
        </div>

        <div className=" items-center justify-center">
          <div className="flex items-center justify-center">
            <h4 className="text-xl text-[#EBDFCE]">simulate gravity, get gravity defied back on your desk</h4>
          </div>
          <div className="flex items-center justify-center">      {/* Temporary placeholder */}
            {/* <h1 className="text-9xl">Orbit</h1> */}
            <Image alt="orbit-logo" src="/logo.png" width={0} height={0} sizes="100vw" className="w-auto h-auto" />          </div>

          <div className="flex flex-col items-center justify-center">
            <h4 className="text-xl text-[#EBDFCE] mb-3">from june 4th till 29th, 2026</h4>

            <a className="bg-[#006898] hover:bg-[#204B65] font-(family-name:--font-lora) transition-all duration-300 ease-in-out rounded-4xl p-6 py-4 text-3xl" href="fillout.com">Submit</a>
            <a className="text-[#EBDFCE] text- xl my-3" href="#about">..learn more?</a>

          </div>
        </div>
      </main>
      <section id="about" className="bg-[#204B65] flex flex-col items-center justify-center min-h-screen w-full">
        <div className="mx-70 items-center justify-center flex flex-col">
          <h3 className="text-8xl font-(family-name:--font-baumans) font-bold text-white ">what is orbit?</h3>
          <p className="text-2xl font-(family-name:--font-lora) text-center">Orbit is a You Ship, We Ship where highschoolers can create a
            software application, web application or a game which is a gravity
            or space simulation where physics is the core mechanic and drives everything.
            In return, they get a magnetic levitation globe shipped to them!</p>
        </div>
        <div className="grid grid-cols-2 my-10 gap-10">
          <div className="border-4 transition-all duration-300 rounded-4xl p-10 hover:border-[#EBDFCE]">
            <h1 className="text-3xl mb-4 font-(family-name:--font-baumans) font-semibold ">Valid Examples</h1>
            <ul className="space-y-2 text-xl font-(family-name:--font-lora)">
              <li className="flex items-center gap-2">
                <span className="">✓</span> N-body gravity simulator where planets orbit each other
              </li>
              <li className="flex items-center gap-2">
                <span className="">✓</span> Black hole simulation and object spaghettification
              </li>
              <li className="flex items-center gap-2">
                <span className="">✓</span> Solar System sandboxes
              </li>
              <li className="flex items-center gap-2">
                <span className="">✓</span> Fluid Simulation driven by gravitational pressure
              </li>
              <li className="flex items-center gap-2">
                <span className="">✓</span> Game where core mechanic is gravity manipulation
              </li>
            </ul>
          </div>
          <div className="border-4 transition-all duration-300 rounded-4xl p-10 hover:border-[#EBDFCE]">
            <h1 className="text-3xl mb-4 font-(family-name:--font-baumans) font-semibold ">Invalid Examples</h1>
            <ul className="space-y-2 text-xl font-(family-name:--font-lora)">
              <li className="flex items-center gap-2">
                <span className="">χ</span> Platformer with gravity
              </li>
              <li className="flex items-center gap-2">
                <span className="">χ</span> Game/Software where removing gravity won’t break the core mechanic
              </li>
              <li className="flex items-center gap-2">
                <span className="">χ</span> Space themed software/games which no actual physics simulation
              </li>

            </ul>
          </div>
        </div>
      </section>

      <section id="rewards" className="bg-[#EBDFCE] flex flex-col items-center justify-center min-h-screen w-full">
        <div className="mx-70 items-center justify-center flex flex-col">
          <h3 className="text-8xl text-[#CE1921] font-(family-name:--font-baumans) font-bold ">rewards!</h3>
         <p className="text-2xl text-[#CE1921] font-(family-name:--font-lora) text-center">
  Prizes are given out for creative and polished projects which hit the minimum time requirement. Really creative and innovative projects are heavily appreciated and are great for validating 
  your work!</p>  
        </div>
        <div className="grid grid-cols-2 my-10 gap-10">
          <div className="bg-[#63A7B2] px-5 py-30 rounded-4xl rotate-3 transition-all duration-300 hover:rotate-0 justify-center items-center flex flex-col">
            <Image alt="globe-prize" src="/prize.png" width={300} height={300} />
            <h3 className="text-5xl font-(family-name:--font-baumans) font-semibold">Levitating Globe</h3>
                        <h2 className="text-xl font-(family-name:--font-lora) text-[#">{`well polished tier`}</h2>

            <h2 className="text-xl font-(family-name:--font-lora) text-[#">{`>= 10 hackatime hours`}</h2>

          </div>
          <div className="bg-[#63A7B2] px-5 py-30 rounded-4xl -rotate-3 transition-all duration-300 hover:rotate-0 justify-center items-center flex flex-col">
            <Image alt="globe-prize" src="/bonus.png" width={300} height={300} />
            <h3 className="text-5xl font-(family-name:--font-baumans) font-semibold">Mechanical Fidget Toy</h3>
                        <h2 className="text-xl font-(family-name:--font-lora) text-[#">{`Bonus Tier`}</h2>

            <h2 className="text-xl font-(family-name:--font-lora) text-[#">{`>= 3 hackatime hours`}</h2>

          </div>
        </div>
      </section>
    </>

  );
}
