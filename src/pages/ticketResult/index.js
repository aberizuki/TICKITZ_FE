import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function TicketResult() {
  const { id } = useParams();

  const [dataTicket, setDataTicket] = useState([]);

  // const url = "http://localhost:5000/api/v1/order/movies";
  const url = `https://tickitzbe-production.up.railway.app/api/v1/order/movies`;

  useEffect(() => {
    axios
      .get(`${url}/${id}`)
      .then((res) => {
        console.log(res.data.data);
        setDataTicket(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <div className="flex justify-center items-center bg-[#E5E5E5]">
          <div className="p-[50px] bg-[#FFFFFF] m-[30px] w-[80vw] rounded-md">
            <h1 className="text-center my-[10px] pb-5 font-bold text-2xl">
              Proof of Payment
            </h1>
            <div className="border-[1px] rounded-xl flex">
              <div className="w-[70%]">
                <div className="flex justify-around bg-[#5F2EEA] rounded-tl-xl h-[20%]">
                  <img src={require("../../assets/img/tickitz-small.png")} />
                  <h1 className="text-[#FFFFFF] text-[10px] flex items-center text-lg">
                    Admit One
                  </h1>
                </div>
                <div className="px-[30px] py-[10px]">
                  <h1>Movie</h1>
                  <h2 className="font-bold text-lg">
                    {dataTicket.movies_name}
                  </h2>
                </div>
                <div className="flex justify-between px-[30px] py-[10px]">
                  <div>
                    <h1>Date</h1>
                    <h2 className="font-bold text-lg">{dataTicket.date}</h2>
                  </div>
                  <div>
                    <h1>Time</h1>
                    <h2 className="font-bold text-lg">{dataTicket.time}</h2>
                  </div>
                  <div className="mr-[30px]">
                    <h1>Category</h1>
                    <h2 className="font-bold text-lg">pg-13</h2>
                  </div>
                </div>
                <div className="flex justify-between px-[30px] py-[10px]">
                  <div>
                    <h1>Count</h1>
                    <h2 className="font-bold text-lg">
                      {dataTicket.total_seats} Pieces
                    </h2>
                  </div>
                  <div>
                    <h1>Seats</h1>
                    <h2 className="font-bold text-lg">{dataTicket.seats}</h2>
                  </div>
                  <div>
                    <h1>Price</h1>
                    <h2 className="font-bold text-lg">Rp {dataTicket.price}</h2>
                  </div>
                </div>
              </div>
              <div className="border-l-[1px] border-dotted border-black">
                <div className="flex justify-center bg-[#5F2EEA] rounded-tr-xl h-[20%] w-[25vw]">
                  <img src={require("../../assets/img/tickitz-small.png")} />
                </div>
                <div className="px-[20px] py-[5px] mt-5">
                  <h1>Movie</h1>
                  <h2 className="font-bold text-lg">
                    {dataTicket.movies_name}
                  </h2>
                </div>
                <div className="flex justify-between px-[20px] py-[5px]">
                  <div>
                    <h1>Date</h1>
                    <h2 className="font-bold text-lg">{dataTicket.date}</h2>
                  </div>
                  <div>
                    <h1>Time</h1>
                    <h2 className="font-bold text-lg"> {dataTicket.time} </h2>
                  </div>
                </div>
                <div className="flex justify-between px-[20px] py-[5px]">
                  <div>
                    <h1>Count</h1>
                    <h2 className="font-bold text-lg">
                      {" "}
                      {dataTicket.total_seats} Pieces
                    </h2>
                  </div>
                  <div className="mr-[3vw]">
                    <h1>Seats</h1>
                    <h2 className="font-bold text-lg"> {dataTicket.seats} </h2>
                  </div>
                </div>
                <div className="ml-[18vw] mt-2">
                  <h1>Category</h1>
                  <h2 className="font-bold text-lg">pg-13</h2>
                </div>
              </div>
            </div>
            <div className="flex justify-around p-[30px]">
              <button className="px-[30px] py-[10px] border-[1px] border-[#4E4B66] rounded">
                Download
              </button>
              <button className="px-[30px] py-[10px] border-[1px] border-[#4E4B66] rounded">
                Print
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
