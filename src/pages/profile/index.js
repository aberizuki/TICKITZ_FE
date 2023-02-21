import Navbar from "../../components/Navbar/";
import Footer from "../../components/Footer/";
import OrderHistory from "./orderHistory";
import ProfileEdit from "./profileEdit";

import { useEffect, useState } from "react";

export default function Profile() {
  return (
    <>
      <Navbar />
      <div>
        <div className="flex justify-center bg-[#E5E5E5] p-[50px]">
          <div>
            <div className="px-[30px] py-[10px] bg-[#FFFFFF] mx-[10px] rounded-xl">
              <div className="flex justify-between">
                <h1>INFO</h1>
                <button>
                  <img src={require("../../assets/img/tripleDotButton.png")} />
                </button>
              </div>
              <img src={require("../../assets/img/profileExp.png")} />
              <h1 className="text-center text-[20px]">Jonas El Rodriguez</h1>
              <h2 className="text-center text-[14px]">Moviegoers</h2>
              <hr className="my-[30px]" />
            </div>
          </div>
          <div className="px-[30px] py-[10px] bg-[#FFFFFF] mx-[10px] rounded-xl">
            <div className="flex">
              <button
                className="mx-[10px] hover:border-b-[1px] border-black"
                // onClick={setIsProfile(())}
              >
                Account Setting
              </button>
              <button
                className="mx-[10px] hover:border-b-[1px] border-black"
                // onClick={setIsProfile((klik = false))}
              >
                Order History
              </button>
            </div>
            <hr />
            <div>
              <ProfileEdit />
            </div>
            <div>
              <OrderHistory />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
