import Image from "next/image";
import DotGrid from '@/components/DotGrid';

export default function Home() {
  return (
    <>
      <main className="bg-[#010C15] flex flex-col items-center justify-center min-h-screen w-full">
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
          <DotGrid
            dotSize={21}
            gap={20}
            baseColor="#010b13"
            activeColor="#f0eeeb"
            proximity={150}
            shockRadius={170}
            shockStrength={5}
            resistance={1150}
            returnDuration={1.1}
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
            <a className="bg-[#006898] hover:bg-[#204B65] font-(family-name:--font-lora) transition-all duration-300 ease-in-out rounded-4xl p-6 py-4 text-3xl" href="fillout.com">Submit</a>
            <a className="text-[#EBDFCE] text- xl my-3" href="#about">..learn more?</a>

          </div>
        </div>
      </main>
      <section id="about" className="bg-[#204B65] flex flex-col items-center justify-center min-h-screen w-full">

      </section>
    </>

  );
}
