import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import SeatSelection from "src/section/SeatSelection";
import SeatSelectionMobile from "src/section/SeatSelelctionMobile";
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

export default function Order() {
  return (
    <>
      <Navbar />
      <main className=" bg-[#F5F6F8]">
        <header className="w-screen h-[100px]">
          <div className="w-full p-2 flex items-center justify-between bg-[#5F2EEA] rounded-b-[22px]">
            <section className="flex lg:items-center lg:justify-evenly lg:ml-[80px]">
              <div className="mx-10 font-semibold text-white">
                Spiderman : Homecoming
              </div>
            </section>

            <section className="hidden md:hidden lg:flex items-center justify-evenly mr-[80px]">
              <div className="m-2 hidden md:hidden lg:flex">
                <Link to="/">
                  <button
                    type="submit"
                    className="bg-white text-[#5F2EEA] font-semibold  py-2 w-[130px] h-[50px] w-[150px] rounded-full mx-2"
                  >
                    Change Movie
                  </button>
                </Link>
              </div>
            </section>
          </div>
        </header>
        <section className="flex m-10 justify-evenly">
          <SeatSelection />
          <section className="hidden md:hidden lg:block mr-10 w-[25vw]">
            <div className="font-bold">Order info</div>
            <div className="rounded-xl my-5 bg-white">
              <div className="p-5">
                <div className="w-full">
                  <div className="py-5 w-full">
                    <div className="flex justify-center mb-10">
                      <div className="">
                        {/* <img
                          className="flex justify-center"
                          src={require("src/assets/img/cione.png")}
                        /> */}
                        <div className="text-[24px] font-semibold">
                          CineOne21 Cinema
                        </div>
                      </div>
                    </div>
                    <div className="my-5 border-b-2">
                      <div className="flex justify-between my-5">
                        <div className="text-[#6B6B6B]">Movie Selected</div>
                        <div className="font-semibold">
                          Spiderman : Homecoming
                        </div>
                      </div>
                      <div className="flex justify-between my-5">
                        <div className="text-[#6B6B6B]">
                          Tuesday, 07 July 2020
                        </div>
                        <div className="font-semibold">02:00pm</div>
                      </div>
                      <div className="flex justify-between my-5">
                        <div className="text-[#6B6B6B]">One ticket price</div>
                        <div className="font-semibold">$10</div>
                      </div>
                      <div className="flex justify-between my-5">
                        <div className="text-[#6B6B6B]">Choosen seat</div>
                        <div className="font-semibold">C4, C5, C6</div>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex justify-between mt-8">
                        <div className="font-semibold text-[20px]">
                          Total payment
                        </div>
                        <div className="font-semibold text-[20px] text-[#5F2EEA]">
                          $30
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="flex justify-center">
          <SeatSelectionMobile />
        </section>
      </main>
      <Footer />
    </>
  );
}
