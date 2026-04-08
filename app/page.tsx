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
            <Image alt="orbit-logo " width={800} height={300} src="/logo.png"/>
          </div>
          <div className="flex items-center justify-center">
            <a className="bg-[#006898] hover:bg-[#204B65] transition-all duration-200 ease-in-out rounded-2xl p-3 py-2 text-3xl" href="fillout.com">Submit</a>
          </div>
        </div>
      </main>
    </>

  );
}
