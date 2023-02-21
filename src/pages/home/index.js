import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import HomeHeader from "src/section/HomeHeader";
import NowShowing from "src/section/NowShowing";
import UpcomingMovies from "src/section/UpcomingMovie";
import Moviegoers from "src/section/Moviegoers";

import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  return (
    <>
      <main className="">
        <div>
          <Navbar />
          <HomeHeader />
          <NowShowing />
          <UpcomingMovies />
          <Moviegoers />
          <Footer />
        </div>
      </main>
    </>
  );
}
