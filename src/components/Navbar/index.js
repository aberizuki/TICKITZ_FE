import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Authenticated from "./authenticated";
import Unauthenticated from "./unauthenticated";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [isLogin, setIsLogin] = useState(false);

  // const RenderMenu = ()=> {
  //   if(isLogin) {
  //     return(<Authenticated setIsLogin={setIsLogin} />)
  //   }
  //   return <Unauthenticated />
  // }

  //similar with componentDidmount() but use hooks
  useEffect(() => {
    //akan berjalan ketika awal pertama kali user load page, dan hanya 1x
    if (localStorage.getItem("@userLogin")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <>
      <header className="w-screen h-[100%]">
        <div className="w-full p-2 flex items-center justify-between">
          <section className="flex lg:items-center lg:justify-evenly lg:ml-[80px]">
            <Link to="/">
              <div className="flex">
                <img
                  className="m-10"
                  src={require("src/assets/img/tickitzpurple.png")}
                />
              </div>
            </Link>
            <div className="hidden md:hidden lg:flex">
              <div className="mx-5 font-semibold text-[#414141]">Movies</div>
              <div className="mx-5 font-semibold text-[#414141]">Cinemas</div>
              <div className="mx-5 font-semibold text-[#414141]">
                Buy Ticket
              </div>
            </div>
          </section>
          {isLogin ? (
            <Authenticated setIsLogin={setIsLogin} />
          ) : (
            <Unauthenticated />
          )}
          {/* <Authenticated /> */}
        </div>
      </header>
    </>
  );
}
