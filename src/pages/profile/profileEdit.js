import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProfileEdit() {
  //get user profile detail
  const [dataProfile, setDataProfile] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/users/${id}`)
      .then((res) => setDataProfile(res.data.data))
      .catch((err) => console.log(err.message));
  });

  //patch profile
  const [fullname, setFullname] = useState("");
  const [Email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [profile_image, setProfile_Image] = useState("");

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setProfile_Image(file);
  };

  const handleUpdate = (event) => {
    // console.log(fullname);
    // console.log(Email);
    // console.log(phone);
    // console.log(password);
    // console.log(profile_image);
    event.preventDefault();
    const data = new FormData(event.target);
    data.append("fullname", fullname);
    data.append("Email", Email);
    data.append("phone", phone);
    data.append("password", password);
    data.append("profile_image", profile_image);
    axios
      .patch(`http://localhost:5000/api/v1/users/${id}`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <form onSubmit={handleUpdate}>
        <div className="my-[30px]">
          <h1 className="font-bold">Detail Information</h1>
          <hr />
        </div>
        <div className="flex justify-between my-[20px]">
          <div className="mr-[30px]">
            <label>FullName</label>
            <input
              className="block px-[50px] py-[10px] border-[1px]"
              placeholder={dataProfile.fullname}
              onChange={(e) => setFullname(e.target.value)}
            ></input>
          </div>
          <div className="ml-[30px]">
            <label>Change Profile Picture</label>
            <input
              type="file"
              className="block my-[10px]"
              // {...rest}
              onChange={(e) => onImageUpload(e)}
            />
          </div>
        </div>
        <div className="flex justify-between my-[20px]">
          <div className="mr-[30px]">
            <label>Email</label>
            <input
              className="block px-[50px] py-[10px] border-[1px]"
              placeholder={dataProfile.email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="ml-[30px]">
            <label>Phone number</label>
            <input
              className="block px-[50px] py-[10px] border-[1px]"
              placeholder={dataProfile.phone}
              onChange={(e) => setPhone(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="my-[30px]">
          <h1>Account and Privacy</h1>
          <hr />
        </div>
        <div className="flex justify-between">
          <div className="mr-[30px]">
            <label>Password</label>
            <input
              type="password"
              className="block px-[50px] py-[10px] border-[1px]"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="ml-[30px]">
            <label>Confirm password</label>
            <input
              type="password"
              className="block px-[50px] py-[10px] border-[1px]"
            ></input>
          </div>
        </div>
        <div className="p-[30px]">
          <button
            className="bg-[#5F2EEA] w-[100%] text-[#FFFFFF] rounded py-[10px]"
            type="submit"
          >
            Update Change
          </button>
        </div>
        <hr />
      </form>
    </>
  );
}
