import React from "react";

const Header = () => {
  return (
    <div className="w-full h-[100px] flex items-center justify-between fixed top-0 left-0 px-20">
      <div className="flex items-center">
        <i className="fa-solid fa-bars text-white text-[28px]"></i>
        <h4 className="text-white text-[32px] font-semibold ml-8 -mt-[3px]">
          Xplore
        </h4>
      </div>
      <div className="flex items-center">
        <div className="flex items-center px-5 h-[45px] border rounded-full">
          <i className="fa-solid fa-plus text-white"></i>
          <span className="text-white text-[16px] font-semibold ml-3 -mt-[3px]">
            Get your products
          </span>
        </div>
        <div className="flex items-center rounded-full bg-white h-[45px] px-2 ml-5">
          <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center border border-slate-800">
            <i className="fa-solid fa-globe"></i>
          </div>
          <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center border border-slate-800 ml-2">
            <i className="fa-solid fa-user"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
