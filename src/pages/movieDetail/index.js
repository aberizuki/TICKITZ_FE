import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function MovieDetail() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="movieDetail">
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
        <div className="showtime"></div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
