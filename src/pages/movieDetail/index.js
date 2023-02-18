import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import LocationDropdown from "./locationDropdown";
import DateDropdown from "./dateDropdown";

export default function MovieDetail() {
  return (
    <>
      <Navbar />
      <div className="movieDetail p-[30px]">
        <div className="w-[100%] object-center sm:flex justify-center w-[100%]">
          <div className="border-[1px] rounded-xl ">
            <div className="p-[50px]">
              <img src={require("../../assets/img/movieDetail.png")} />
            </div>
          </div>
          <div>
            <div className="px-[50px]">
              <div className="pb-[30px]">
                <h1 className="font-bold text-[32px] my-[30px] sm:my-[0px]">
                  Spider-Man: Homecoming
                </h1>
                <h2>Adventure, Action, Sci-Fi</h2>
              </div>

              <div className="flex mb-[30px]">
                <div className="mr-[70px]">
                  <h1 className="text-[#8692A6]">Release Date</h1>
                  <h2>June 28 1999</h2>
                </div>
                <div>
                  <h1 className="text-[#8692A6]">Directed by</h1>
                  <h2>Jon Watss</h2>
                </div>
              </div>
              <div className="flex mb-[30px]">
                <div className="mr-[30px]">
                  <h1 className="text-[#8692A6]">Duration</h1>
                  <h2>2 Hour 13 Minutes</h2>
                </div>
                <div>
                  <h1 className="text-[#8692A6]">Cast</h1>
                  <h2>Tom Holland, Michael Keaton, Robert Downey Jr., ...</h2>
                </div>
              </div>
              <hr className="mb-[30px]" />
              <div>
                <div className="w-[100%] sm:w-[50%]">
                  <h1 className="font-[20px] mb-[10px]">Synopsis</h1>
                  <h2 className="w-[100%] sm:w-[50vw]">
                    Thrilled by his experience with the Avengers, Peter returns
                    home, where he lives with his Aunt May, under the watchful
                    eye of his new mentor Tony Stark, Peter tries to fall back
                    into his normal daily routine - distracted by thoughts of
                    proving himself to be more than just your friendly
                    neighborhood Spider-Man - but when the Vulture emerges as a
                    new villain, everything that Peter holds most important will
                    be threatened.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="showtime">
          <h1 className="text-[24px] font-bold text-center my-[30px] sm:my-[0px]">
            Showtime and Tickets
          </h1>
          <div className="flex justify-center my-[30px]">
            <div className="mx-[5px]">
              <DateDropdown />
            </div>
            <div className="mx-[5px]">
              <LocationDropdown />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap w-[100%]">
          <div className="rounded-xl shadow-xl p-[30px] w-[30%] m-[20px]">
            <div className="flex w-[100%]">
              <div>
                <img src={require("../../assets/img/ebv_id.png")} />
              </div>
              <div className="px-[20px]">
                <h1>ebv_id</h1>
                <h2 className=" text-[#6E7191]">
                  Whatever street No.12, South Purwokerto
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap w-[100%]">
              <h1 className="p-[10px]">08:30am</h1>
              <h1 className="p-[10px]">08:30am</h1>
              <h1 className="p-[10px]">08:30am</h1>
              <h1 className="p-[10px]">08:30am</h1>
              <h1 className="p-[10px]">08:30am</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="font-bold">price</h1>
              <h2 className="font-bold">$10.00/Seat</h2>
            </div>
            <div className="flex justify-between mt-[30px]">
              <button className="px-[30px] py-[10px] rounded font-bold bg-[#5F2EEA] text-[#FFFFFF]">
                Book now
              </button>
              <button className="px-[30px] py-[10px] rounded font-bold text-[#5F2EEA]">
                Add to cart
              </button>
            </div>
          </div>
          <div className="rounded-xl shadow-xl p-[30px] w-[30%] m-[20px]">
            <div className="flex w-[100%]">
              <div>
                <img src={require("../../assets/img/ebv_id.png")} />
              </div>
              <div className="px-[20px]">
                <h1>ebv_id</h1>
                <h2 className=" text-[#6E7191]">
                  Whatever street No.12, South Purwokerto
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap w-[100%]">
              <h1 className="p-[10px]">08:30am</h1>
              <h1 className="p-[10px]">08:30am</h1>
              <h1 className="p-[10px]">08:30am</h1>
              <h1 className="p-[10px]">08:30am</h1>
              <h1 className="p-[10px]">08:30am</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="font-bold">price</h1>
              <h2 className="font-bold">$10.00/Seat</h2>
            </div>
            <div className="flex justify-between mt-[30px]">
              <button className="px-[30px] py-[10px] rounded font-bold bg-[#5F2EEA] text-[#FFFFFF]">
                Book now
              </button>
              <button className="px-[30px] py-[10px] rounded font-bold text-[#5F2EEA]">
                Add to cart
              </button>
            </div>
          </div>
          <div className="rounded-xl shadow-xl p-[30px] w-[30%] m-[20px]">
            <div className="flex w-[100%]">
              <div>
                <img src={require("../../assets/img/ebv_id.png")} />
              </div>
              <div className="px-[20px]">
                <h1>ebv_id</h1>
                <h2 className=" text-[#6E7191]">
                  Whatever street No.12, South Purwokerto
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap w-[100%]">
              <h1 className="p-[10px]">08:30am</h1>
              <h1 className="p-[10px]">08:30am</h1>
              <h1 className="p-[10px]">08:30am</h1>
              <h1 className="p-[10px]">08:30am</h1>
              <h1 className="p-[10px]">08:30am</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="font-bold">price</h1>
              <h2 className="font-bold">$10.00/Seat</h2>
            </div>
            <div className="flex justify-between mt-[30px]">
              <button className="px-[30px] py-[10px] rounded font-bold bg-[#5F2EEA] text-[#FFFFFF]">
                Book now
              </button>
              <button className="px-[30px] py-[10px] rounded font-bold text-[#5F2EEA]">
                Add to cart
              </button>
            </div>
          </div>
          <div className="rounded-xl shadow-xl p-[30px] w-[30%] m-[20px]">
            <div className="flex w-[100%]">
              <div>
                <img src={require("../../assets/img/ebv_id.png")} />
              </div>
              <div className="px-[20px]">
                <h1>ebv_id</h1>
                <h2 className=" text-[#6E7191]">
                  Whatever street No.12, South Purwokerto
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap w-[100%]">
              <h1 className="p-[10px]">08:30am</h1>
              <h1 className="p-[10px]">08:30am</h1>
              <h1 className="p-[10px]">08:30am</h1>
              <h1 className="p-[10px]">08:30am</h1>
              <h1 className="p-[10px]">08:30am</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="font-bold">price</h1>
              <h2 className="font-bold">$10.00/Seat</h2>
            </div>
            <div className="flex justify-between mt-[30px]">
              <button className="px-[30px] py-[10px] rounded font-bold bg-[#5F2EEA] text-[#FFFFFF]">
                Book now
              </button>
              <button className="px-[30px] py-[10px] rounded font-bold text-[#5F2EEA]">
                Add to cart
              </button>
            </div>
          </div>
          <div className="rounded-xl shadow-xl p-[30px] w-[30%] m-[20px]">
            <div className="flex w-[100%]">
              <div>
                <img src={require("../../assets/img/ebv_id.png")} />
              </div>
              <div className="px-[20px]">
                <h1>ebv_id</h1>
                <h2 className=" text-[#6E7191]">
                  Whatever street No.12, South Purwokerto
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap w-[100%]">
              <h1 className="p-[10px]">08:30am</h1>
              <h1 className="p-[10px]">08:30am</h1>
              <h1 className="p-[10px]">08:30am</h1>
              <h1 className="p-[10px]">08:30am</h1>
              <h1 className="p-[10px]">08:30am</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="font-bold">price</h1>
              <h2 className="font-bold">$10.00/Seat</h2>
            </div>
            <div className="flex justify-between mt-[30px]">
              <button className="px-[30px] py-[10px] rounded font-bold bg-[#5F2EEA] text-[#FFFFFF]">
                Book now
              </button>
              <button className="px-[30px] py-[10px] rounded font-bold text-[#5F2EEA]">
                Add to cart
              </button>
            </div>
          </div>
          <div className="rounded-xl shadow-xl p-[30px] w-[30%] m-[20px]">
            <div className="flex w-[100%]">
              <div>
                <img src={require("../../assets/img/ebv_id.png")} />
              </div>
              <div className="px-[20px]">
                <h1>ebv_id</h1>
                <h2 className=" text-[#6E7191]">
                  Whatever street No.12, South Purwokerto
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap w-[100%]">
              <h1 className="p-[10px]">08:30am</h1>
              <h1 className="p-[10px]">08:30am</h1>
              <h1 className="p-[10px]">08:30am</h1>
              <h1 className="p-[10px]">08:30am</h1>
              <h1 className="p-[10px]">08:30am</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="font-bold">price</h1>
              <h2 className="font-bold">$10.00/Seat</h2>
            </div>
            <div className="flex justify-between mt-[30px]">
              <button className="px-[30px] py-[10px] rounded font-bold bg-[#5F2EEA] text-[#FFFFFF]">
                Book now
              </button>
              <button className="px-[30px] py-[10px] rounded font-bold text-[#5F2EEA]">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
