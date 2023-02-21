export default function Moviegoers() {
  return (
    <>
      <section className=" w-screen p-10">
        <div className="h-full shadow-xl rounded">
          <div className="flex justify-center items-center">
            <div className="p-5 lg:w-[50%]">
              <div className="text-[#4E4B66] text-center">
                Be the vanguard of the
              </div>
              <div className="text-[#5F2EEA] text-center font-bold text-[38px] mb-8">
                Moviegoers
              </div>
              <form className="justify-center lg:flex">
                <input
                  className="h-[50px] appearance-none border h-[65px] rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                  id="email"
                  type="email"
                  placeholder="Insert your email"
                />
                <div className="flex justify-center lg:mx-5 w-full ">
                  <button
                    type="submit"
                    className="bg-[#5F2EEA] text-white font-bold py-2 lg:w-[50%]  h-[65px] w-full rounded-md"
                  >
                    Join now
                  </button>
                </div>
              </form>
              <div className="text-center m-5 text-[#6E7191]">
                By joining you as a Tickitz member, <br /> we will always send
                you the <br /> latest updates via email .
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
