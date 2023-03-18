import Navbar from "../../components/Navbar/";
import Footer from "../../components/Footer/";
import OrderHistory from "./orderHistory";
import ProfileEdit from "./profileEdit";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  //get user profile detail
  const [dataProfile, setDataProfile] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      // .get(`http://localhost:5000/api/v1/users/${id}`)
      .get(`https://tickitzbe-production.up.railway.app/api/v1/users/${id}`)
      .then((res) => setDataProfile(res.data.data))
      .catch((err) => console.log(err.message));
  });

  // const [profile_image, setProfile_Image] = useState("");
  // // const [imagePreview, setImagePreview] = useState(null);
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const data = new FormData(e.target);
  //   data.append("profile_image", profile_image);

  //   axios
  //     .patch(`http://localhost:5000/api/v1/users/${id}`, data, {
  //       headers: {
  //         "content-type": "multipart/form-data",
  //       },
  //     })
  //     .then((res) => {
  //       alert("post success:", res);
  //       window.location.reload();
  //     })
  //     .catch((err) => console.log("err:", err));
  // };

  // const onImageUpload = (e) => {
  //   const file = e.target.files[0];
  //   setProfile_Image(file);
  // setImagePreview(URL.createObjectURL(file));
  // };

  return (
    <>
      <Navbar />
      <div>
        <div className="flex justify-center bg-[#E5E5E5] p-[50px]">
          <div>
            <div className="px-[30px] py-[10px] bg-[#FFFFFF] mx-[10px] rounded-xl">
              <div className="flex justify-between">
                <h1>INFO</h1>
                <button>
                  <img src={require("../../assets/img/tripleDotButton.png")} />
                </button>
              </div>
              <div className="flex justify-center">
                <img
                  // src={`http://localhost:5000/uploads/images/${dataProfile.profile_image}`}
                  src={`https://tickitzbe-production.up.railway.app/uploads/images/${dataProfile.profile_image}`}
                  className="rounded-full w-[200px] h-[210px] object-center"
                />
              </div>
              <div className="flex justify-center my-[20px]">
                {/* {profile_image && (
                  <img className="preview" src={profile_image} alt="preview" />
                )} */}
                {/* <input
                  type="file"
                  className="block"
                  // {...rest}
                  onChange={(e) => onImageUpload(e)}
                  // profile_image={imagePreview}
                /> */}
                {/* <button
                  type="submit"
                  className="bg-[#5F2EEA] text-[#FFFFFF] rounded px-[20px]"
                >
                  Change Picture
                </button> */}
              </div>
              <h1 className="text-center text-[20px]">
                {dataProfile.fullname}
              </h1>
              <h2 className="text-center text-[14px]">Moviegoers</h2>
              <hr className="my-[30px]" />
            </div>
          </div>
          <div className="px-[30px] py-[10px] bg-[#FFFFFF] mx-[10px] rounded-xl">
            <div className="flex">
              <button
                className="mx-[10px] hover:border-b-[1px] border-black"
                // onClick={setIsProfile(())}
              >
                Account Setting
              </button>
              <button
                className="mx-[10px] hover:border-b-[1px] border-black"
                // onClick={setIsProfile((klik = false))}
              >
                Order History
              </button>
            </div>
            <hr />
            <div>
              <ProfileEdit />
            </div>
            <div>
              <OrderHistory />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
