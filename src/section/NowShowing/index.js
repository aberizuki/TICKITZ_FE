export default function NowShowing() {
  return (
    <>
      <section className="h-[80vh] w-screen p-5 bg-[#F5F6F8]">
        <div className="flex m-5 justify-between">
          <div className="py-2 hover:text-[#5F2EEA] hover:border-b-2 border-[#5F2EEA]">
            <a className="m-2 font-bold lg:mx-10 lg:text-[24px] ">
              Now Showing
            </a>
          </div>
          <a className="m-2 text-[#5F2EEA] font-semibold lg:mx-10">View All</a>
        </div>

        <div className="p-2 h-full">
          <div className="flex px-10 justify-evenly">
            <div className="INI CARD">
              <div className="p-2 w-[200px] md:w-[300px] lg:md:w-[300px] bg-white border border-gray-200 rounded-lg shadow ">
                <div className="flex items-center justify-center">
                  <img
                    className="rounded-lg"
                    src={require("src/assets/img/movie1.jpg")}
                  />
                </div>
                <div className="font-bold text-center pt-5">
                  Spiderman : No Way Home
                </div>
                <div className="px-5 pt-3 text-center">
                  Action, Adventure, Sci-fi
                </div>
                <div className="flex justify-center my-5">
                  <button className="p-3 border border-[#5F2EEA] text-[#5F2EEA] font-semibold rounded-lg w-full">
                    Details
                  </button>
                </div>
              </div>
            </div>
            <div className="INI CARD">
              <div className="p-2 w-[200px] md:w-[300px] lg:md:w-[300px] bg-white border border-gray-200 rounded-lg shadow ">
                <div className="flex items-center justify-center">
                  <img
                    className="rounded-lg"
                    src={require("src/assets/img/movie1.jpg")}
                  />
                </div>
                <div className="font-bold text-center pt-5">
                  Spiderman : No Way Home
                </div>
                <div className="px-5 pt-3 text-center">
                  Action, Adventure, Sci-fi
                </div>
                <div className="flex justify-center my-5">
                  <button className="p-3 border border-[#5F2EEA] text-[#5F2EEA] font-semibold rounded-lg w-full">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
