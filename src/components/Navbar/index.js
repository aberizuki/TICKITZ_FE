import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <header className="w-screen h-[100px]">
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
          <section>
            <div className="flex items-center justify-between  border-gray-400 py-8">
              <nav>
                <section className="MOBILE-MENU flex lg:hidden mr-5">
                  <div
                    className="HAMBURGER-ICON space-y-2"
                    onClick={() => setIsNavOpen((prev) => !prev)}
                  >
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                  </div>

                  <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                    <div
                      className="absolute top-0 right-0 px-8 py-8"
                      onClick={() => setIsNavOpen(false)}
                    >
                      <svg
                        className="h-8 w-8 text-gray-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </div>
                    <ul className="flex flex-col items-center justify-between min-h-[250px]">
                      <li className=" border-gray-400 my-8 font-semibold">
                        <a href="/about">Movies</a>
                      </li>
                      <li className=" border-gray-400 my-8 font-semibold">
                        <a href="/portfolio">Cinemas</a>
                      </li>
                      <li className=" border-gray-400 my-8 font-semibold">
                        <a href="/contact">Buy Ticket</a>
                      </li>
                    </ul>
                  </div>
                </section>
              </nav>
              <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
            </div>
          </section>

          <section className="hidden md:hidden lg:flex items-center justify-evenly mr-[80px]">
            <div className="m-2 hidden md:hidden lg:flex">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                    Location
                    <ChevronDownIcon
                      className="-mr-1 ml-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Jakarta
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Bogor
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Depok
                          </a>
                        )}
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              Tanggerang
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <div className="m-2 hidden md:hidden lg:flex">
              <img
                className="mx-10"
                src={require("src/assets/img/search.png")}
              />
            </div>
            <div className="m-2 hidden md:hidden lg:flex">
              <Link to="/user-login">
                <button
                  type="submit"
                  className="bg-[#5F2EEA] text-white font-bold py-2 w-[130px] h-[50px] w-[150px] rounded-xl mx-2"
                >
                  Sign in
                </button>
              </Link>
            </div>
          </section>
        </div>
      </header>
    </>
  );
}
