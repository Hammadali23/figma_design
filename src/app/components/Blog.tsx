export default function Blog(){
  return (
      <main>
      <div className="bg-[#F4E2E2]  pt-20 justify-center  px-24 pb-12">
          <div className="flex justify-evenly gap-[700px] font-bold ml-8  items-center  ">
              <div>Recent Post </div>
              <div className="text-red-400 font-bold">View All</div>
          </div>
          <div className="flex items-center justify-center pl-4">
            <div className="bg-white m-8 p-8 ml-16   ">
               <p className="font-semibold text-xl">Making a design system from <br /> scratch </p>
               <br />
               <p >12 Feb 2022 &nbsp; &nbsp; | &nbsp; &nbsp; Design Pattern </p>
               <br />
               <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Praesentium itaque non reiciendis quod laboriosam magnam, modi <br /> perferendis minima sint minus!</p>
            </div>
            <div className="bg-white m-8 p-8 ">
               <p className="font-semibold text-xl">Making a design system from <br /> scratch </p>
               <br />
               <p>12 Feb 2022 &nbsp; &nbsp; | &nbsp; &nbsp; Design Pattern </p>
               <br />
               <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Praesentium itaque non reiciendis quod laboriosam magnam, modi <br /> perferendis minima sint minus!</p>
            </div>
          </div>
      </div>
   </main>
  )

}