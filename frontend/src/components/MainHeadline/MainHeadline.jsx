const MainHeadline = () => {
   return (
      <section className="z-50 flex flex-col items-center gap-5 absolute inset-0 mx-auto top-[40%] lg:top-[35%]">
         <img src="/assets/images/header-title-mobile.png" alt="" className="w-52 mb-2 lg:w-64" />
         <img src="/assets/images/names.png" alt="" className="w-72 lg:w-96"/>
         <hr className="w-44 border-3 border-mustard " />
         <h3 className="text-center text-white text-[22px] mt-2 drop-shadow-lg lg:text-[24px]">
            8th of March, 2025
         </h3>
         <h1 className="text-center text-white text-[22px] mt-2 drop-shadow-lg lg:text-[14px]">
         "I have found the one whom my soul loves."
         <br /> Song of Solomon 3:4
         </h1>
      </section>
   )
}

export default MainHeadline