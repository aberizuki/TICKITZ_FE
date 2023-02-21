import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import { Link } from "react-router-dom";
import "flowbite";

import axios from "axios";
import { useEffect, useState } from "react";

export default function AdminPage() {
  // const [addMovie, setAddMovie] = useState({
  //   movie_names: "",
  //   category: "",
  //   image: "",
  //   releasedate: "",
  //   duration: "",
  //   director: "",
  //   casts: "",
  //   synopsis: "",
  //   theaters: "",
  //   times: "",
  //   cities: "",
  // });

  // const [validate, setValidate] = useState({ error: false, message: "" });

  // const handleMovie = (event) => {
  //   const Swal = require("sweetalert2");

  //   event.preventDefault();
  //   console.log(addMovie);
  //   axios({
  //     url: "http://localhost:5000/api/v1/movies/",
  //     method: "POST",
  //     data: addMovie,
  //   })
  //     .then((res) => {
  //       // console.log(res.data.data);

  //       Swal.fire({
  //         title: res.data.message,
  //         showClass: {
  //           popup: "animate__animated animate__fadeInDown",
  //         },
  //         hideClass: {
  //           popup: "animate__animated animate__fadeOutUp",
  //         },
  //       });
  //     })
  //     .catch((err) => {
  //       setValidate({ error: true, message: err.response.data.errors });
  //     });
  // };

  const [movie_names, setMovie] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [releasedate, setRelease] = useState("");
  const [duration, setDuration] = useState("");
  const [director, setDirector] = useState("");
  const [casts, setCasts] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [theaters, setTheaters] = useState("");
  const [times, setTimes] = useState("");
  const [cities, setCities] = useState("");

  const [imagePreview, setImagePreview] = useState(null);

  const handleMovie = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    data.append("movie_names", movie_names);
    data.append("category", category);
    data.append("image", image);
    data.append("releasedate", releasedate);
    data.append("duration", duration);
    data.append("director", director);
    data.append("casts", casts);
    data.append("synopsis", synopsis);
    data.append("theaters", theaters);
    data.append("times", times);
    data.append("cities", cities);

    axios
      .post(`http://localhost:5000/api/v1/movies`, data, {
        headers: {
          "content-type": "multipart/form-data",
          // token : userLogin,
        },
      })
      .then((res) => {
        console.log("post success:", res);
      })
      .catch((err) => console.log("err:", err));
  };

  const onImageUpload = (e) => {
    const file = e.target.file;
    setImage(file);
    // setImagePreview(URL.createObjectURL(file));
  };

  return (
    <>
      <Navbar />
      <main className="py-5 bg-[#F5F6F8]">
        <form onSubmit={handleMovie}>
          <section className="block lg:flex m-10 justify-evenly">
            <section className="lg:ml-10 w-full lg:w-[44vw]">
              <div className="font-bold">Movie Description</div>
              <div className="rounded-xl my-5 bg-white p-10">
                {/* {validate.error && (
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
                )} */}
                <div className="lg:flex mb-4">
                  <div className="mb-10 lg:mb-[0px] flex justify-center w-full border-[1px] rounded-xl lg:w-[65%]">
                    <div className="w-full h-full">
                      <div className="p-[50px] w-full h-full">
                        <div className="flex items-center justify-center w-full">
                          <label
                            htmlFor="dropzone-file"
                            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                          >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <svg
                                aria-hidden="true"
                                className="w-10 h-10 mb-3 text-gray-400 w-full"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                ></path>
                              </svg>
                            </div>
                            <input
                              onChange={(e) => onImageUpload(e)}
                              id="dropzone-file"
                              type="file"
                              className="hidden"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:pl-5">
                    <div className="mb-4">
                      <span className=" block text-[16px] text-[#858D96] mb-3">
                        Movie Name
                      </span>
                      <input
                        onChange={(e) => setMovie(e.target.value)}
                        className="h-[50px] appearance-none border h-[65px] rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                        id="email"
                        type="text"
                        placeholder="Enter movie name"
                      />
                    </div>
                    <div className="mb-4">
                      <span className=" block text-[16px] text-[#858D96] mb-3">
                        Category
                      </span>
                      <input
                        onChange={(e) => setCategory(e.target.value)}
                        className="h-[50px] appearance-none border h-[65px] rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                        id="email"
                        type="text"
                        placeholder="Enter category"
                      />
                    </div>
                    <div className="flex w-full justify-between">
                      <div className="mb-4 mr-2">
                        <span className=" block text-[16px] text-[#858D96] mb-3">
                          Release Date
                        </span>
                        <input
                          onChange={(e) => setRelease(e.target.value)}
                          className="h-[50px] appearance-none border h-[65px] rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                          id="email"
                          type="text"
                          placeholder="Enter release date"
                        />
                      </div>
                      <div className="mb-4">
                        <span className="ml-1 block text-[16px] text-[#858D96] mb-3">
                          Duration
                        </span>
                        <input
                          onChange={(e) => setDuration(e.target.value)}
                          className="h-[50px] appearance-none border h-[65px] rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                          id="email"
                          type="text"
                          placeholder="Enter duration"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="mb-4 w-[65%]">
                    <span className="ml-1 block text-[16px] text-[#858D96] mb-3">
                      Director
                    </span>
                    <input
                      onChange={(e) => setDirector(e.target.value)}
                      className="h-[50px] appearance-none border h-[65px] rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                      id="email"
                      type="text"
                      placeholder="Enter Director"
                    />
                  </div>
                  <div className="mb-4 ml-4 w-full">
                    <span className="ml-1 block text-[16px] text-[#858D96] mb-3">
                      Casts
                    </span>
                    <input
                      onChange={(e) => setCasts(e.target.value)}
                      className="h-[50px] appearance-none border h-[65px] rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                      id="email"
                      type="text"
                      placeholder="Enter casts"
                    />
                  </div>
                </div>
                <div className="mb-4 w-full">
                  <span className="ml-1 block text-[16px] text-[#858D96] mb-3">
                    Synopsis
                  </span>
                  <input
                    onChange={(e) => setSynopsis(e.target.value)}
                    className="h-[120px] appearance-none border h-[65px] rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                    id="email"
                    type="text"
                    placeholder="Enter Synopsis"
                  />
                </div>
              </div>
            </section>
            <div>
              <section className=" w-full mr-10 lg:w-[25vw] mb-10">
                <div className="font-bold">Premiere Location</div>
                <div className="rounded-xl my-5 bg-white">
                  <div className="p-5">
                    <div className="w-full">
                      <div className="py-5 w-full">
                        <div>
                          <div className="p-3 rounded-lg">
                            <select
                              onChange={(e) => setCities(e.target.value)}
                              className="rounded-lg p-3 select w-[50%] bg-[#EFF0F6]"
                            >
                              <option disabled selected>
                                Location
                              </option>
                              <option value="Jakarta">Jakarta</option>
                              <option value="Bogor">Bogor</option>
                              <option value="Depok">Depok</option>
                              <option value="Tanggerang">Tanggerang</option>
                            </select>
                          </div>
                        </div>
                        <div className="my-5 block items-center lg:flex">
                          <ul className="grid w-full gap-6 md:grid-cols-3">
                            <li>
                              <input
                                onChange={(e) => setTheaters(e.target.value)}
                                type="checkbox"
                                id="react-option"
                                value="EBV"
                                className="hidden peer"
                                required=""
                              />
                              <label
                                htmlFor="react-option"
                                className="flex items-center items-center justify-between w-full p-5 rounded-lg cursor-pointer peer-checked:border-2 peer-checked:border-[#5F2EEA]  shadow-lg h-full w-full"
                              >
                                <div className="flex items-center">
                                  <div>
                                    <img
                                      className=""
                                      src={require("src/assets/img/ebv.png")}
                                    />
                                  </div>
                                </div>
                              </label>
                            </li>
                            <li>
                              <input
                                onChange={(e) => setTheaters(e.target.value)}
                                type="checkbox"
                                id="flowbite-option"
                                value="HIFLIX"
                                className="hidden peer"
                              />
                              <label
                                htmlFor="flowbite-option"
                                className="flex items-center items-center justify-between w-full p-5 rounded-lg cursor-pointer peer-checked:border-2 peer-checked:border-[#5F2EEA]  shadow-lg h-full w-full"
                              >
                                <div className="flex items-center">
                                  <div>
                                    <img
                                      className=""
                                      src={require("src/assets/img/hiflix.png")}
                                    />
                                  </div>
                                </div>
                              </label>
                            </li>
                            <li>
                              <input
                                onChange={(e) => setTheaters(e.target.value)}
                                type="checkbox"
                                id="angular-option"
                                value="CINEONE21"
                                className="hidden peer"
                              />
                              <label
                                htmlFor="angular-option"
                                className="flex items-center items-center justify-between w-full p-5 rounded-lg cursor-pointer peer-checked:border-2 peer-checked:border-[#5F2EEA]  shadow-lg h-full w-full"
                              >
                                <div className="flex items-center">
                                  <div>
                                    <img
                                      className=""
                                      src={require("src/assets/img/cione.png")}
                                    />
                                  </div>
                                </div>
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="w-full mr-10 lg:w-[25vw]">
                <div className="font-bold">Premiere Location</div>
                <div className="rounded-xl my-5 bg-white">
                  <div className="p-5">
                    <div className="w-full">
                      <div className="py-5 w-full">
                        <div>
                          <div className="">
                            <span className=" block text-[16px] text-[#858D96] mb-3">
                              Date
                            </span>
                            <input
                              className="h-[50px] appearance-none border h-[65px] rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                              id="email"
                              type="text"
                              placeholder="Enter date"
                            />
                          </div>
                          <div className="">
                            <span className=" block text-[16px] text-[#858D96] mb-3">
                              Time
                            </span>
                            <input
                              onChange={(e) => setTimes(e.target.value)}
                              className="h-[50px] appearance-none border h-[65px] rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                              id="email"
                              type="text"
                              placeholder="Enter time"
                            />
                          </div>
                        </div>
                        {/* <div className="my-5 block items-center lg:flex">
                          <button className="mx-3 rounded h-[35px] w-[15%] border border-[#5F2EEA] text-[#5F2EEA]">
                            +
                          </button>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="flex justify-center my-5">
                <button
                  type="submit"
                  className="bg-[#5F2EEA] text-white font-bold py-2 w-[343px] h-[65px] w-[40%] rounded-xl"
                >
                  Submit
                </button>
              </div>
            </div>
          </section>
        </form>
        <section className="flex justify-center"></section>

        <section className="flex m-10 justify-center">
          <section className="lg:ml-10 w-[83%]">
            <div className="font-bold">Sales Chart</div>
            <div className="rounded-xl my-5 bg-white p-10">
              <div className="flex mb-4 pb-10 border-b-2">
                <div className="pr-10 font-semibold">Based on movie</div>
                <div className="pl-10 font-semibold">Based on location</div>
              </div>
              <div className="md:flex lg:flex flex-wrap justify-evenly">
                <div className="lg:p-10">
                  <img src={require("../../assets/img/chart.png")} />
                </div>
                <div className="lg:p-10">
                  <img src={require("../../assets/img/chart.png")} />
                </div>
                <div className="lg:p-10">
                  <img src={require("../../assets/img/chart.png")} />
                </div>
                <div className="lg:p-10">
                  <img src={require("../../assets/img/chart.png")} />
                </div>
                <div className="lg:p-10">
                  <img src={require("../../assets/img/chart.png")} />
                </div>
                <div className="lg:p-10">
                  <img src={require("../../assets/img/chart.png")} />
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
      <Footer />
      <script src="../path/to/flowbite/dist/datepicker.js"></script>
    </>
  );
}
