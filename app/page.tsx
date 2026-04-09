import Image from "next/image";
export default function Home() {
  return (
    <>
      <main className="bg-[#010C15] flex flex-col items-center justify-center min-h-screen w-full">
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
        <div className="mx-50 items-center justify-center flex flex-col">
          <h3 className="text-7xl font-(family-name:--font-baumans) font-bold ">what is orbit?</h3>
          <p className="text-2xl font-(family-name:--font-">Orbit is a You Ship, We Ship where highschoolers can create a 
            software application, web application or a game which is a gravity 
            or space simulation where physics is the core mechanic and drives everything. 
            In return, they get a magnetic levitation globe shipped to them!</p>
        </div>
        <div className="flex">
          <div className="border">
            yes
          </div>
          <div className="border">
            yes
          </div>
        </div>
      </section>
    </>

  );
}
