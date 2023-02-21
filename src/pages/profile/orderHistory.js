export default function OrderHistory() {
  return (
    <>
      <div>
        <div>
          <h1 className="p-[30px]">Order History</h1>
          <div className="border-[1px] rounded m-[20px]">
            <div className="flex justify-between px-[10px] py-[50px]">
              <div>
                <h1 className="text-[14px]">Tuesday, 07 July 2020 - 04:30pm</h1>
                <h2 className="font-bold text-[24px]">
                  Spider-Man: Homecoming
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
