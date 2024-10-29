export default function Hero(){
  return (
      <section className=" bg-[#FAF5F5] p-12 pl-40 justify-center  ">
    <div className="max-w-lg mb-8 md:mb-0 ml-28">
      <h1 className="text-4xl font-extrabold  ">
        Hi, I am John, <br />Creative Technologist
      </h1>
      <p className="pt-6 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit odio <br /> blanditiis itaque iusto? Sunt, nam. Non distinctio expedita sunt sit <br /> pariatur  repellat ipsa quod aliquid.</p>
    </div>
    <div className="pb-20">
    <div className="mt-8 ml-28">
      <button className=" text-sm font-semibold bg-red-400 py-2 px-4 text-white rounded hover:bg-red-600 drop-shadow-xl z-10 ">
        <a className="" href="#">Download Resume</a>
      </button>

    </div>
    <div className="  flex justify-end items-center"><img className="w-52 h-52 rounded-full -mt-60 mr-32 static" src="john.jpeg"alt="porfile" /></div>
    </div>
   
  </section>
  )
}