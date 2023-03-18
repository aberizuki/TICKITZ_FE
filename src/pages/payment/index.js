import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Payment() {
  const { id } = useParams();

  const [movieDetail, setMovieDetail] = useState([]);
  const [order, setOrder] = useState();
  useEffect(() => {
    axios
      // .get(`http://localhost:5000/api/v1/movies/${id}`)
      .get(`https://tickitzbe-production.up.railway.app/api/v1/movies/${id}`)
      .then((res) => setMovieDetail(res.data.data))
      .catch((err) => console.log(err.message));
  });
  useEffect(() => {
    axios
      // .get(`http://localhost:5000/api/v1/order/${id}`)
      .get(`https://tickitzbe-production.up.railway.app/api/v1/order/${id}`)
      .then((res) => setOrder(res.data.data))
      .catch((err) => console.log(err.message));
  });

  return (
    <>
      <Navbar />
      <div className="p-[50px] block sm:flex justify-evenly">
        <div className="w-[100%] sm:w-[50%]">
          <h1 className="py-[20px] font-bold text-[20px]">Payment info</h1>
          <div className="border-[1px] rounded-xl p-[5px] sm:p-[30px]">
            <div className="flex justify-between py-[20px]">
              <h1>Date & Time</h1>
              <h2 className="font-bold">{movieDetail.release_date}</h2>
            </div>
            <hr />
            <div className="flex justify-between py-[20px]">
              <h1>Movie Title</h1>
              <h2 className="font-bold">{movieDetail.movies_name}</h2>
            </div>
            <hr />
            <div className="flex justify-between py-[20px]">
              <h1>Cinema Name</h1>
              <h2 className="font-bold">Cinema 21 Cinema</h2>
            </div>
            <hr />
            <div className="flex justify-between py-[20px]">
              <h1>Number of Tickets</h1>
              <h2 className="font-bold">1 ticket</h2>
            </div>
            <hr />
            <div className="flex justify-between py-[20px]">
              <h1>Total Payment</h1>
              <h2 className="font-bold">{movieDetail.price}</h2>
            </div>
          </div>
          <h1 className="py-[20px] font-bold text-[20px]">
            Choose Payment Method
          </h1>
          <div>
            <div className="border-[1px] rounded-xl p-[30px] ">
              <div className="flex flex-wrap">
                <div className="border-[1px] rounded-xl p-[10px] m-[10px]">
                  <img src={require("../../assets/img/LogoDANA.png")} />
                </div>
                <div className="border-[1px] rounded-xl p-[10px] m-[10px]">
                  <img src={require("../../assets/img/LogoDANA.png")} />
                </div>
                <div className="border-[1px] rounded-xl p-[10px] m-[10px]">
                  <img src={require("../../assets/img/LogoDANA.png")} />
                </div>
              </div>
              <h1 className="text-center py-[5px]">Or</h1>
              <h2 className="text-center py-[5px]">
                Pay via Cash. <a className="text-[#5F2EEA]">See how it works</a>
              </h2>
            </div>
          </div>
          <div className="block sm:flex justify-between py-[30px]">
            <button className="m-[10px] w-[100%] sm:w-[40%] sm:m-[0px] px-[30px] py-[10px] border-[2px] border-[#5F2EEA] text-[#5F2EEA] font-bold rounded-xl">
              Previous Step
            </button>
            <div className="flex justify-center m-[10px] w-[100%] sm:w-[40%] sm:m-[0px] px-[30px] py-[10px] border-[2px] bg-[#5F2EEA] border-[#5F2EEA] text-[#FFFFFF] font-bold rounded-xl">
              <Link to={`/ticketResult/${id}`}>
                <button>Pay your order</button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h1 className="py-[20px] font-bold text-[20px]">Personal info</h1>
          <div className="border-[1px] rounded-xl p-[5px] sm:p-[20px]">
            <div className="py-[20px]">
              <label>Full Name</label>
              <input
                className="block font-bold px-[30px] py-[10px]"
                placeholder="jonas El Rodriguez"
              />
            </div>
            <div className="py-[20px]">
              <label>Email</label>
              <input
                className="block font-bold px-[30px] py-[10px]"
                placeholder="jonasrodri123@gmail.com"
              />
            </div>
            <div className="py-[20px]">
              <label>Full Name</label>
              <input
                className="block font-bold px-[30px] py-[10px]"
                placeholder="81445687121"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
