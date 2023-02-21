import { useEffect, useState } from "react";
import Data from "src/section/SeatSelection/data.json";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SeatSelection({ id }) {
  const navigate = useNavigate();

  // const [check, setCheck] = useState([]);
  // const handleOnCheck = (e) => {
  //   console.log("check", check);
  //   if (check.length != 0) {
  //     for (let i = 0; i < check.length + 1; i++) {
  //       if (check[i] == e) {
  //         console.log("delete", e);
  //         delete check[i];
  //         let data = check.filter((item) => item != undefined);
  //         setCheck(data);
  //         i = check.length + 1;
  //       } else {
  //         console.log("add", e);
  //         setCheck([...check, e]);
  //       }
  //     }
  //   } else {
  //     setCheck([e]);
  //   }
  // };

  // useEffect(() => {
  //   console.log("data");
  // }, [check]);
  const [movieDetail, setMovieDetail] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/movies/${id}`)
      .then((res) => {
        setMovieDetail(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err.message));
  });

  const [check, setCheck] = useState({
    user_id: JSON.parse(localStorage.getItem("@userLogin")).user.user_id,
    movies_id: id,
    movies_name: "",
    date: "Feb 22, 2023",
    time: "08.00 pm",
    theater: "CGV",
    seats: "",
    total_seats: 1,
    price: 50000,
  });

  const handleOnCheck = async (e) => {
    e.preventDefault();

    console.log("check", check);
    if (check.length !== 0) {
      for (let i = 0; i < check.length + 1; i++) {
        if (check[i] == e) {
          console.log("delete", e);
          delete check[i];
          let data = check.filter((item) => item !== undefined);
          setCheck(data);
          i = check.length + 1;
        } else {
          console.log("add", e);
          setCheck([...check, e]);
        }
      }
    } else {
      setCheck([e]);
    }

    try {
      await axios({
        url: "http://localhost:5000/api/v1/order",
        method: "POST",
        data: check,
      });
    } catch (error) {
      console.log(error.message);
    }

    localStorage.setItem("@order", check.order_id);
    navigate(`/payment/${id}`);
  };

  useEffect(() => {
    console.log(check);
  }, [check]);

  return (
    <>
      <form
        onSubmit={handleOnCheck}
        className="lg:ml-10 w-full md:w-[80vw] lg:w-[44vw]"
      >
        <div className="font-bold">Choose your seat</div>
        <div className="rounded-xl my-5 bg-white p-10">
          <div>
            <p className="w-full text-center mb-10 text-[#4E4B66]">Screen</p>
            <div className="flex w-full justify-between">
              <div className="hidden md:mr-6 md:flex md:flex-col text-xl w-[5%] font-semibold">
                <p className="mb-2">A</p>
                <p className="mb-2">B</p>
                <p className="mb-2">C</p>
                <p className="mb-2">D</p>
                <p className="mb-2">E</p>
                <p className="mb-2">F</p>
                <p className="mb-2">G</p>
              </div>
              <div className="flex w-full justify-between">
                <div className="flex flex-wrap justify-center w-[45%]">
                  {Data.data.map((item, i) => (
                    <input
                      key={i}
                      type="checkbox"
                      className="bg-[#D6D8E7] appearance-none checked:bg-[#5F2EEA] w-[10%] md:w-[10%] h-5 md:h-7 md:mr-2 mr-1 mb-2 rounded"
                      disabled={item.status ? true : false}
                      value={item.site}
                      onChange={(e) =>
                        setCheck({
                          ...check,
                          seats: e.target.value,
                          movies_name: movieDetail.movies_name,
                        })
                      }
                    />
                  ))}
                  <div className="text-[12px] md:text-[18px] lg:text-[20px] flex w-[80%]  justify-between text-lg font-semibold">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                  </div>
                </div>
                <div className="flex justify-center flex-wrap w-[45%]">
                  {Data.data2.map((item, i) => (
                    <input
                      key={i}
                      type="checkbox"
                      className="bg-[#D6D8E7] appearance-none checked:bg-[#5F2EEA] w-[10%] md:w-[10%] h-5 md:h-7 md:mr-2 mr-1 mb-2 rounded"
                      value={item.site}
                      onChange={(e) =>
                        setCheck({
                          ...check,
                          seats: e.target.value,
                        })
                      }
                    />
                  ))}
                  <div className="text-[12px] md:text-[18px] lg:text-[20px] flex w-[80%]  justify-between text-lg font-semibold">
                    <p className="">8</p>
                    <p className="">9</p>
                    <p className="">10</p>
                    <p className="">11</p>
                    <p className="">12</p>
                    <p className="">13</p>
                    <p className="">14</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex w-full justify-between pl-16 pr-10 mt-8 mb-5"></div>
            <div className="w-full text-start my-6 text-lg font-semibold">
              Seating key
            </div>
            <div className="flex flex-wrap items-center w-[90%] h-6 justify-between mb-4 md:hidden">
              <div className="flex w-1/2">
                {/* <Image
                  src={require("@/assets/Forward-Arrow.png")}
                  className="w-6 mr-4"
                  alt=""
                /> */}
                <p className="font-semibold">A - G</p>
              </div>
              <div className="flex w-1/2">
                {/* <Image
                  src={require("@/assets/Forward-Arrow.png")}
                  alt=""
                  className="w-6 mr-4 rotate-[-90deg]"
                /> */}
                <p className="font-semibold">1 - 14</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center w-[90%] h-6 justify-between md:m-0 mb-12">
              <div className="flex w-1/2 md:w-1/4 mb-5 md:m-0">
                <div className="w-6 h-6 bg-[#D6D8E7] rounded mr-4"></div>
                <p>Selected</p>
              </div>
              <div className="flex w-1/2 md:w-1/4 mb-5 md:m-0">
                <div className="w-6 h-6 bg-[#5F2EEA] rounded mr-4"></div>
                <p>Selected</p>
              </div>
              <div className="flex w-1/2 md:w-1/4">
                <div className="w-6 h-6 bg-[#F589D7] rounded mr-4"></div>
                <p>Love nest</p>
              </div>
              <div className="flex w-1/2 md:w-1/4">
                <div className="w-6 h-6 bg-[#6E7191] rounded mr-4"></div>
                <p>Sold</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10">
          <div className="flex justify-between">
            <button className="h-[50px] w-[300px] border-2 rounded-xl font-bold text-[#5F2EEA] p-2 border-[#5F2EEA]">
              Change your movie
            </button>
            {/* <Link to={`/payment/${id}`}> */}
            <button
              type="submit"
              className="shadow-xl h-[50px] w-[300px] border-2 rounded-xl font-bold text-white p-2 bg-[#5F2EEA]"
            >
              Checkout now
            </button>
            {/* </Link> */}
          </div>
        </div>
      </form>
    </>
  );
}
