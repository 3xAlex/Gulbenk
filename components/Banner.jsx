import React from "react";

const Banner = () => {
  return <section className="relative px-5 sm:px-16 py-20 w-full">
    <div className="relative bg-[#dfdfdf] w-full lg:h-[60vh] bg-hold bg-cover rounded-xl px-5 lg:px-[250px]">
      <div className="w-full flex justify-center text-[20px] text-center sm:text-[30px] font-medium pt-20">
        <p>You took your decision?</p>
      </div>
      <div className="w-full flex justify-center text-[15px] text-center sm:text-[15px] pt-5">
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas? </h1>
      </div>
      <div className="w-full h-[100px] flex justify-center items-center rounded-xl">
        <button className="bg-black py-3 sm:py-4 sm:px-8 px-4 text-white font-bold text-[15px] sm:text-[17px] rounded-xl hover:bg-[#D3D3D3] hover:text-black hover:border-[1px] hover:border-black hover:duration-700">Call To Action</button>
      </div>
    </div>
  </section>
};

export default Banner;