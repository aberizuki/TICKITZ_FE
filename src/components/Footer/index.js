export default function Footer() {
  return (
    <>
      <footer>
        <div className=" lg:flex w-screen  justify-evenly">
          <section className="m-5">
            <div className="m-2">
              <img
                className=""
                src={require("src/assets/img/tickitz-footer.png")}
              />
            </div>
            <div className="m-2">
              Stop waiting in line. Buy tickets <br /> conveniently, watch
              movies quietly.
            </div>
          </section>
          <section className="m-5">
            <div className="m-2 font-semibold">Explore</div>
            <div className="flex lg:block">
              <div className="">
                <div className="m-2">Cinemas</div>
                <div className="m-2">Movie List</div>
              </div>
              <div className="">
                <div className="m-2">Notification</div>
                <div className="m-2">My Ticket</div>
              </div>
            </div>
          </section>
          <section className="m-5">
            <div className="m-2 font-semibold">Our Sponsor</div>
            <div className="my-5 flex items-center lg:block">
              <div className="m-2">
                <img className="" src={require("src/assets/img/ebv.png")} />
              </div>
              <div className="m-2">
                <img className="" src={require("src/assets/img/cione.png")} />
              </div>
              <div className="m-2">
                <img className="" src={require("src/assets/img/hiflix.png")} />
              </div>
            </div>
          </section>
          <section className="m-5">
            <div className="m-2 font-semibold">Follow us</div>
            <div className="my-5 flex items-center lg:block">
              <div className="m-2 flex">
                <img
                  className="lg:ml-2"
                  src={require("src/assets/img/fb.png")}
                />
                <div className="hidden lg:flex mx-5">Tickitz cinema id</div>
              </div>
              <div className="m-2 flex">
                <img className="" src={require("src/assets/img/ig.png")} />
                <div className="hidden lg:flex mx-5">tickitz.id</div>
              </div>
              <div className="m-2 flex">
                <img className="" src={require("src/assets/img/tw.png")} />
                <div className="hidden lg:flex mx-5">tickitz.id</div>
              </div>
              <div className="m-2 flex">
                <img className="" src={require("src/assets/img/yt.png")} />
                <div className="hidden lg:flex mx-5">Tickitz cinema id</div>
              </div>
            </div>
          </section>
        </div>
        <div className="m-5 flex lg:justify-center">
          <div>© 2020 Tickitz. All Rights Reserved.</div>
        </div>
      </footer>
    </>
  );
}
