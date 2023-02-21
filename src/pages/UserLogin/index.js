import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



export default function UserLogin() {

  const Swal = require("sweetalert2");


  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [validate, setValidate] = useState({ error: false, message: "" });
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(loginForm);
    axios({
      url: "http://localhost:5000/api/v1/auth/login",
      method: "POST",
      data: loginForm,
    })
      .then((res) => {
        console.log(res.data.data);
        localStorage.setItem("@userLogin", JSON.stringify(res.data.data));
        Swal.fire({

          position: "top-end",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        });

        // alert(res.data.message);
        navigate("/");
      })
      .catch((err) => {
        setValidate({ error: true, message: err.response.data.message });
      });
  };

  // console.log(localStorage.getItem("@userLogin"));
  useEffect(() => {
    if (localStorage.getItem("@userLogin")) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <main className="flex">
        <section className="hidden h-[1100px] lg:block lg:w-[60%] bg-hero bg-no-repeat bg-cover">
          <div className="m-[50px]  from-violet-500 to-fuchsia-500 flex items-center justify-center">
            <div className="">
              {/* <img
                className="pl-10 pt-10 invisible lg:visible"
                src={require("src/assets/img/logo-white.png")}
              /> */}
            </div>
            <div className="">
              <div>
                <img
                  className="pl-10 pt-10 invisible lg:visible"
                  src={require("src/assets/img/tickitzlogo.png")}
                />
              </div>
              <div>
                <img
                  className="pl-10 pt-10 invisible lg:visible"
                  src={require("src/assets/img/www.png")}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-screen md:w-screen lg:w-[80vh]">
          <div className=" lg:m-[50px]">
            <div>
              <img
                className="pl-5 pt-10 flex lg:hidden"
                src={require("src/assets/img/tickitzpurple.png")}
              />
            </div>
            <div className="visible pl-5 pt-10 text-[32px] font-bold text-[#121212] lg:invisible">
              Sign in
            </div>
            <div className=" invisible lg:visible lg:pl-5 lg:text-[48px] font-bold text-[#121212]">
              Sign in
            </div>

            <div className="pl-5 pt-2 text-[18px] text-[#858D96]">
              Sign in with your data that you entered during <br /> your
              registration
            </div>
            <form onSubmit={handleLogin} className=" mt-10 ml-5 mr-5">
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
                    setLoginForm({
                      ...loginForm,
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
                    setLoginForm({
                      ...loginForm,
                      password: e.target.value,
                    })
                  }
                  className="h-[50px] appearance-none border h-[65px] rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                  id="email"
                  type="password"
                  placeholder="Insert your Password"
                />
              </div>
              <Link to="/user-reset">
                <div className="flex justify-end m-5 text-[14px]">
                  Forgot Passsword?
                </div>
              </Link>
              <div className="flex justify-center my-5">
                <button
                  type="submit"
                  className="bg-[#5F2EEA] text-white font-bold py-2 w-[343px] h-[65px] w-full rounded-xl"
                >
                  Sign in
                </button>
              </div>
              <div className="flex justify-center m-7">
                <div className="text-[14px]">Don't have an account?</div>
                <Link to="/user-regist">
                  <button className="text-[14px] ml-1 text-[#5F2EEA] font-semibold">
                    Click here
                  </button>
                </Link>
              </div>
              <div className="text-center text-[#AAAAAA] py-6">Or</div>
              <div className="">
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

// export default Login;
