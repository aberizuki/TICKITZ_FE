export default function ProfileEdit() {
  return (
    <>
      <div>
        <div className="my-[30px]">
          <h1>Detail Information</h1>
          <hr />
        </div>
        <div className="flex justify-between my-[20px]">
          <div className="mr-[30px]">
            <label>FirstName</label>
            <input
              className="block px-[50px] py-[10px] border-[1px]"
              placeholder="Jonas"
            ></input>
          </div>
          <div className="ml-[30px]">
            <label>LastName</label>
            <input
              className="block px-[50px] py-[10px] border-[1px]"
              placeholder="El Rodriguez"
            ></input>
          </div>
        </div>
        <div className="flex justify-between my-[20px]">
          <div className="mr-[30px]">
            <label>Email</label>
            <input
              className="block px-[50px] py-[10px] border-[1px]"
              placeholder="Jjonasrodrigu123@gmail.com"
            ></input>
          </div>
          <div className="ml-[30px]">
            <label>Phone number</label>
            <input
              className="block px-[50px] py-[10px] border-[1px]"
              placeholder="81445687121"
            ></input>
          </div>
        </div>
        <div className="my-[30px]">
          <h1>Account and Privacy</h1>
          <hr />
        </div>
        <div className="flex justify-between">
          <div className="mr-[30px]">
            <label>Email</label>
            <input
              className="block px-[50px] py-[10px] border-[1px]"
              placeholder="Jjonasrodrigu123@gmail.com"
            ></input>
          </div>
          <div className="ml-[30px]">
            <label>Phone number</label>
            <input
              className="block px-[50px] py-[10px] border-[1px]"
              placeholder="81445687121"
            ></input>
          </div>
        </div>
        <div className="p-[30px]">
          <button className="bg-[#5F2EEA] w-[100%] text-[#FFFFFF] rounded py-[10px]">
            Update Change
          </button>
        </div>
        <hr />
      </div>
    </>
  );
}
