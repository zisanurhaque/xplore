"use client";
import RootLayout from "./layout";
import WorldMap from "./assets/images/world-map.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <RootLayout>
      <div className="w-full h-screen bg-slate-800 p-20">
        <div className="w-full h-full relative">
          <Image src={WorldMap} alt="map" fill objectFit="fill" />
        </div>
        <div className="w-full h-screen bg-transparent absolute top-0 left-0 flex items-center justify-center">
          <div className="w-[600px] p-10 bg-white rounded-lg">
            <h5 className="text-slate-800 font-semibold text-[24px] -mt-2 mb-6">
              Find what you are looking for
            </h5>
            <form className="border rounded w-full flex items-center h-[60px] overflow-hidden">
              <button className="h-[60px] w-[80px] border-r bg-slate-800 text-white">
                Filter
              </button>
              <input
                type="text"
                className="outline-none px-5 flex-1 h-[60px]"
                placeholder="Search here..."
              />
              <button className="h-[60px] w-[60px] border-l">
                <i className="fa-solid fa-arrow-right text-slate-800"></i>
              </button>
            </form>
            <div className="mt-6">
              <p className="text-center text-slate-800">
                {`Don't have an account?`}{" "}
                <Link href={"/"} className="text-green-500">
                  Create an account.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
