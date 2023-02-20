import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function UserReset() {
  return (
    <>
      <main className="flex">
        <section className="hidden h-[1100px] lg:block lg:w-[60%] bg-hero bg-no-repeat bg-cover">
          <div className="m-[50px] h-[85%]  from-violet-500 to-fuchsia-500 flex ">
            <div className="">
              {/* <img
                className="pl-10 pt-10 invisible lg:visible"
                src={require("src/assets/img/logo-white.png")}
              /> */}
            </div>
            <div className="">
              <div>
                <img
                  className="pl-10 pt-10 mb-[10] md:mb-[10] lg:mb-[50px]  invisible lg:visible"
                  src={require("src/assets/img/tickitz-small.png")}
                />
              </div>
              <div className="pl-10 pt-10 invisible lg:visible text-white font-semibold text-[26px] md:text-[38px] lg:text-[48px]">
                Lets reset your password
              </div>
              <div className="pl-10 pt-10 mb-10 invisible lg:visible text-[#FFFFFFB2] text-[24px]">
                To be able to use your account again, please <br />
                complete the following steps.
              </div>
              <div>
                <img
                  className="pl-10 pt-10 invisible lg:visible"
                  src={require("src/assets/img/123.png")}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-screen md:w-screen lg:w-[80vh]">
          <div className="h-[85%] lg:m-[50px]">
            <div>
              <img
                className="pl-5 pt-10 flex lg:hidden"
                src={require("src/assets/img/tickitzpurple.png")}
              />
            </div>
            <div className="visible pl-5 pt-10 text-[32px] font-bold text-[#121212] lg:invisible lg:h-[0%] ">
              Reset Password
            </div>
            <div className=" invisible lg:visible lg:pl-5 lg:text-[48px] font-semibold text-[#121212]">
              Fill your complete email
            </div>
            <div className="hidden lg:flex lg:pl-5 text-[#8692A6] text-[18px]">
              we'll send a link to your email shortly{" "}
            </div>

            {/* <div className="pl-5 pt-2 text-[18px] text-[#858D96]">
              Sign in with your data that you entered during <br /> your
              registration
            </div> */}
            <form className=" mt-10 ml-5 mr-5">
              <div className="mb-4">
                <span className="ml-1 block text-[16px] text-[#858D96] mb-3">
                  Email
                </span>
                <input
                  className="h-[50px] appearance-none border h-[65px] rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                  id="email"
                  type="text"
                  placeholder="Insert your Email"
                />
              </div>

              <div className="flex justify-center my-5">
                <button
                  type="submit"
                  className="bg-[#5F2EEA] text-white font-bold py-2 w-[343px] h-[65px] w-full rounded-xl"
                >
                  Activate now
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

// export default Signup;
