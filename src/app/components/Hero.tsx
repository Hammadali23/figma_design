export default function Hero(){
  return (
      <section className=" bg-[#FAF5F5] min-h-96 p-12 flex items-centre justify-evenly max-md:flex-col max-md:justify-center  ">
    <div className="max-md:order-2 mb-8 md:mb-0 max-md:text-center space-y-7">
      <h1 className="text-3xl font-extrabold ">
        Hi, I am John, <br />Creative Technologist
      </h1>
      <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit odio <br /> blanditiis itaque iusto? Sunt, nam. Non distinctio expedita sunt sit <br /> pariatur  repellat ipsa quod aliquid.</p>

      <button className="  text-sm font-semibold bg-red-400 py-2 px-4 text-white rounded hover:bg-red-500 drop-shadow-xl  ">
        <a className="" href="#">Download Resume</a>
      </button>
      
    </div>
  
    <div className="max-md:order-1 max-md:mb-10 max-md:w-full"><img className="w-52 h-52 m-auto rounded-full" src="john.jpeg"alt="profile" /></div>
      
     
   
  </section>
  )
}