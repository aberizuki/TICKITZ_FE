import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function OrderHistory() {
  const { id } = useParams();

  const [orderHistory, setOrderHistory] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/order/user/${id}`)
      .then((res) => setOrderHistory(res.data.data))
      .catch((err) => console.log(err.message));
  });

  return (
    <>
      <div>
        <div>
          <h1 className="p-[30px]">Order History</h1>
          <div className="border-[1px] rounded m-[20px]">
            <div className="flex justify-between px-[10px] py-[50px]">
              <div>
                <h1 className="text-[14px]">{orderHistory.date}</h1>
                <h2 className="font-bold text-[24px]">
                  {orderHistory.movies_name}
                </h2>
              </div>
              <div className="flex items-center">
                <img src={require("../../assets/img/cione.png")} />
              </div>
            </div>
            <hr className="my-[30px]" />
            <h1 className="px-[30px] py-[10px] bg-[#00BA88] w-[50%] rounded m-[30px] text-[#FFFFFF] text-center">
              Ticket Active
            </h1>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
