import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function TicketResult() {
  return (
    <>
      <Navbar />
      <div>
        <div className="flex justify-center items-center bg-[#F5F6F8]">
          <div className="p-[50px] bg-[#FFFFFF] m-[30px]">
            <h1 className="text-center my-[10px] font-bold">
              Proof of Payment
            </h1>
            <div className="border-[1px] rounded-xl flex">
              <div className="w-[70%]">
                <div className="flex justify-around bg-[#5F2EEA] rounded-tl-xl h-[20%]">
                  <img src={require("../../assets/img/tickitz-small.png")} />
                  <h1 className="text-[#FFFFFF] text-[10px] flex items-center">
                    Admit One
                  </h1>
                </div>
                <div className="px-[30px] py-[10px]">
                  <h1>Movie</h1>
                  <h2>Spiderman: Homecoming</h2>
                </div>
                <div className="flex justify-between px-[30px] py-[10px]">
                  <div>
                    <h1>Date</h1>
                    <h2>07 july</h2>
                  </div>
                  <div>
                    <h1>Time</h1>
                    <h2>02:00pm</h2>
                  </div>
                  <div>
                    <h1>Category</h1>
                    <h2>pg-13</h2>
                  </div>
                </div>
                <div className="flex justify-between px-[30px] py-[10px]">
                  <div>
                    <h1>Count</h1>
                    <h2>3 Pieces</h2>
                  </div>
                  <div>
                    <h1>Seats</h1>
                    <h2>C4, C5, C6</h2>
                  </div>
                </div>
              </div>
              <div className="border-l-[1px] border-dotted border-black">
                <div className="flex justify-center bg-[#5F2EEA] rounded-tr-xl h-[20%] ">
                  <img src={require("../../assets/img/tickitz-small.png")} />
                </div>
                <div className="px-[20px] py-[5px]">
                  <h1>Movie</h1>
                  <h2>Spiderman: Homecoming</h2>
                </div>
                <div className="flex justify-between px-[20px] py-[5px]">
                  <div>
                    <h1>Date</h1>
                    <h2>07 jul</h2>
                  </div>
                  <div>
                    <h1>Time</h1>
                    <h2>02:00pm</h2>
                  </div>
                </div>
                <div className="flex justify-between px-[20px] py-[5px]">
                  <div>
                    <h1>Count</h1>
                    <h2>3 Pieces</h2>
                  </div>
                  <div>
                    <h1>Seats</h1>
                    <h2>C4,C5,C6</h2>
                  </div>
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
