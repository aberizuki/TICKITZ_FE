import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function UserRegist() {
  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
  });
  const [validate, setValidate] = useState({ error: false, message: "" });
  const navigate = useNavigate();

  const handleSignup = (event) => {
    const Swal = require("sweetalert2");

    event.preventDefault();
    console.log(signupForm);
    axios({
      url: "http://localhost:5000/api/v1/auth/register",
      method: "POST",
      data: signupForm,
    })
      .then((res) => {
        // console.log(res.data.data);
        Swal.fire({
          title: res.data.message,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        // alert(res.data.message);
        navigate("/user-login");
      })
      .catch((err) => {
        setValidate({ error: true, message: err.response.data.errors });
      });
  };

  return (
    <>
      <main className="flex">
        <section className="hidden h-[1100px] lg:block lg:w-[60%] bg-hero bg-no-repeat bg-cover">
          <div className="m-[50px]  from-violet-500 to-fuchsia-500 flex ">
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
                Lets build your account
              </div>
              <div className="pl-10 pt-10 mb-10 invisible lg:visible text-[#FFFFFFB2] text-[24px]">
                To be a loyal moviegoer and access all of features, <br /> your
                details are required.
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
                className="pl-5 pt-10 lg:invisible"
                src={require("src/assets/img/tickitzpurple.png")}
              />
            </div>
            <div className="visible pl-5 pt-10 text-[32px] font-bold text-[#121212] lg:invisible lg:h-[0%] ">
              Sign up
            </div>
            <div className=" invisible lg:visible lg:pl-5 lg:text-[48px] font-semibold text-[#121212]">
              Fill your additional details
            </div>

            {/* <div className="pl-5 pt-2 text-[18px] text-[#858D96]">
              Sign in with your data that you entered during <br /> your
              registration
            </div> */}
            <form onSubmit={handleSignup} className=" mt-10 ml-5 mr-5">
              {validate.error && (
                <div className="alert alert-error shadow-lg my-3 bg-red-400 p-5 rounded">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current flex-shrink-0 h-6 w-6 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{validate.message}</span>
                  </div>
                </div>
              )}
              <div className="mb-4">
                <span className="ml-1 block text-[16px] text-[#858D96] mb-3">
                  Email
                </span>
                <input
                  onChange={(e) =>
                    setSignupForm({
                      ...signupForm,
                      email: e.target.value,
                    })
                  }
                  className="h-[50px] appearance-none border h-[65px] rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                  id="email"
                  type="text"
                  placeholder="Insert your Email"
                />
              </div>
              <div className="mb-4">
                <span className="ml-1 block text-[16px] text-[#858D96] mb-3">
                  Password
                </span>
                <input
                  onChange={(e) =>
                    setSignupForm({
                      ...signupForm,
                      password: e.target.value,
                    })
                  }
                  className="h-[50px] appearance-none border h-[65px] rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                  id="email"
                  type="password"
                  placeholder="Insert your Password"
                />
              </div>
              <div className="mx-1">
                <div className="flex items-center">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-[#5F2EEA] bg-gray-100 border-gray-300 rounded "
                  />
                  <label
                    htmlFor="link-checkbox"
                    className="ml-2 text-sm font-medium "
                  >
                    I agree with the terms and conditions
                  </label>
                </div>
              </div>

              <div className="flex justify-center my-5">
                <button
                  type="submit"
                  className="bg-[#5F2EEA] text-white font-bold py-2 w-[343px] h-[65px] w-full rounded-xl"
                >
                  Join for free now
                </button>
              </div>
              <div className="flex justify-center m-7">
                <div className="text-[14px]">Already have an account?</div>
                <Link to="/user-login">
                  <button className="text-[14px] ml-1 text-[#5F2EEA] font-semibold">
                    Log in
                  </button>
                </Link>
              </div>
              <div className="text-center text-[#AAAAAA] py-6">Or</div>
              <div className="flex">
                <div className="flex justify-center w-full my-5">
                  <button
                    type="submit"
                    className="flex justify-center items-center bg-white drop-shadow-xl text-white font-semibold py-2 w-[343px] h-[65px] w-[80px] md:w-full lg:w-full rounded-xl mx-5 text-[#AAAAAA]"
                  >
                    <img
                      className="md:mr-5 lg:mr-5"
                      src={require("src/assets/img/google.png")}
                    />
                    <div className="hidden md:flex lg:flex  text-black">
                      Google
                    </div>
                  </button>

                  <button
                    type="submit"
                    className="flex justify-center items-center bg-white drop-shadow-xl text-white font-semibold py-2 w-[343px] h-[65px] w-[80px] md:w-full lg:w-full rounded-xl mx-5 text-[#AAAAAA]"
                  >
                    <img
                      className="md:mr-5 lg:mr-5"
                      src={require("src/assets/img/facebook.png")}
                    />
                    <div className="hidden md:flex lg:flex  text-black">
                      Facebook
                    </div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

// export default Signup;
