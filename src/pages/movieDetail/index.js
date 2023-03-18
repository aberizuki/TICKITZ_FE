import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import LocationDropdown from "./locationDropdown";
import DateDropdown from "./dateDropdown";
import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function MovieDetail() {
  const [movies, setMovies] = React.useState([]);
  // const [image, setImage] = React.useState(null);

  const { id } = useParams();
  // const navigate = useNavigate();

  // const changePage = () => {
  //   navigate(`order/${id}`);
  // };

  const getMoviesById = (id) => {
    return axios.get(
      // `http://localhost:5000/api/v1/movies/${id}`
      `https://tickitzbe-production.up.railway.app/api/v1/movies/${id}`
    );
  };

  React.useEffect(() => {
    getMoviesById(id)
      .then((response) => {
        // data yang diterima dari server
        setMovies(response.data.data);
        console.log(response.data.data);
        // setImage(response.data.data.images[0].filename);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <>
      <Navbar />
      <div className="movieDetail p-[30px]">
        <div className="w-[100%] object-center sm:flex justify-center w-[100%]">
          <div className="border-[1px] rounded-xl h-[500px] w-[300px]">
            <div className="p-[50px]">
              <img
                // src={`http://localhost:5000/public/uploads/images/${movies.image}`}
                src={`https://tickitzbe-production.up.railway.app/public/uploads/images/${movies.image}`}
                className="rounded-xl"
              />
            </div>
          </div>
          <div>
            <div className="px-[50px]">
              <div className="pb-[30px]">
                <h1 className="font-bold text-[32px] my-[30px] sm:my-[0px]">
                  {movies.movies_name}
                </h1>
                <h2>{movies.category}</h2>
              </div>

              <div className="flex mb-[30px]">
                <div className="mr-[70px]">
                  <h1 className="text-[#8692A6]">Release Date</h1>
                  <h2>{movies.release_date}</h2>
                </div>
                <div>
                  <h1 className="text-[#8692A6]">Directed by</h1>
                  <h2>{movies.director}</h2>
                </div>
              </div>
              <div className="flex mb-[30px]">
                <div className="mr-[30px]">
                  <h1 className="text-[#8692A6]">Duration</h1>
                  <h2>{movies.duration}</h2>
                </div>
                <div>
                  <h1 className="text-[#8692A6]">Cast</h1>
                  <h2>{movies.casts}</h2>
                </div>
              </div>
              <hr className="mb-[30px]" />
              <div>
                <div className="w-[100%] sm:w-[50%]">
                  <h1 className="font-[20px] mb-[10px]">Synopsis</h1>
                  <h2 className="w-[100%] sm:w-[50vw]">{movies.synopsis}</h2>
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
        <div className="block sm:flex flex-wrap w-[100%]">
          <div className="w-[100%] rounded-xl shadow-xl p-[30px] sm:w-[30%] m-[20px]">
            <div className="block sm:flex w-[100%]">
              <div>
                <img src={require("../../assets/img/ebv_id.png")} />
              </div>
              <div className="sm:px-[20px]">
                <h1>ebv_id</h1>
                <h2 className=" text-[#6E7191]">
                  Whatever street No.12, South Purwokerto
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap w-[100%]">
              <h1 className="p-[5px] sm:p-[10px]">08:30am</h1>
              <h1 className="p-[5px] sm:p-[10px]">08:30am</h1>
              <h1 className="p-[5px] sm:p-[10px]">08:30am</h1>
              <h1 className="p-[5px] sm:p-[10px]">08:30am</h1>
              <h1 className="p-[5px] sm:p-[10px]">08:30am</h1>
            </div>
            <div className="block sm:flex justify-between">
              <h1 className="font-bold">price</h1>
              <h2 className="font-bold">{movies.price}/Seat</h2>
            </div>
            <div className="block sm:flex justify-between mt-[30px]">
              <Link to={`/order/${movies.movies_id}`}>
                <button
                  // onClick={changePage}
                  className="px-[30px] py-[10px] rounded font-bold bg-[#5F2EEA] text-[#FFFFFF]"
                >
                  Book now
                </button>
              </Link>

              <button className="px-[30px] py-[10px] rounded font-bold text-[#5F2EEA]">
                Add to cart
              </button>
            </div>
          </div>
          <div className="w-[100%] rounded-xl shadow-xl p-[30px] sm:w-[30%] m-[20px]">
            <div className="block sm:flex w-[100%]">
              <div>
                <img src={require("../../assets/img/ebv_id.png")} />
              </div>
              <div className="sm:px-[20px]">
                <h1>ebv_id</h1>
                <h2 className=" text-[#6E7191]">
                  Whatever street No.12, South Purwokerto
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap w-[100%]">
              <h1 className="p-[5px] sm:p-[10px]">08:30am</h1>
              <h1 className="p-[5px] sm:p-[10px]">08:30am</h1>
              <h1 className="p-[5px] sm:p-[10px]">08:30am</h1>
              <h1 className="p-[5px] sm:p-[10px]">08:30am</h1>
              <h1 className="p-[5px] sm:p-[10px]">08:30am</h1>
            </div>
            <div className="block sm:flex justify-between">
              <h1 className="font-bold">price</h1>
              <h2 className="font-bold">{movies.price}/Seat</h2>
            </div>
            <div className="block sm:flex justify-between mt-[30px]">
              <button className="px-[30px] py-[10px] rounded font-bold bg-[#5F2EEA] text-[#FFFFFF]">
                Book now
              </button>
              <button className="px-[30px] py-[10px] rounded font-bold text-[#5F2EEA]">
                Add to cart
              </button>
            </div>
          </div>
          <div className="w-[100%] rounded-xl shadow-xl p-[30px] sm:w-[30%] m-[20px]">
            <div className="block sm:flex w-[100%]">
              <div>
                <img src={require("../../assets/img/ebv_id.png")} />
              </div>
              <div className="sm:px-[20px]">
                <h1>ebv_id</h1>
                <h2 className=" text-[#6E7191]">
                  Whatever street No.12, South Purwokerto
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap w-[100%]">
              <h1 className="p-[5px] sm:p-[10px]">08:30am</h1>
              <h1 className="p-[5px] sm:p-[10px]">08:30am</h1>
              <h1 className="p-[5px] sm:p-[10px]">08:30am</h1>
              <h1 className="p-[5px] sm:p-[10px]">08:30am</h1>
              <h1 className="p-[5px] sm:p-[10px]">08:30am</h1>
            </div>
            <div className="block sm:flex justify-between">
              <h1 className="font-bold">price</h1>
              <h2 className="font-bold">{movies.price}/Seat</h2>
            </div>
            <div className="block sm:flex justify-between mt-[30px]">
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
