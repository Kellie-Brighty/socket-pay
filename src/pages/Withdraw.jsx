import React from "react";
import { useNavigate } from "react-router-dom";

const Withdrawal = () => {
  const navigate = useNavigate();

  return (
    <div
      className={`bg-[#cccccc67] h-[100vh] flex justify-center items-center font-poppins`}
    >
      <div className={`space-y-[20px]`}>
        <div className={`bg-[#fff] rounded-[8px] p-[20px]`}>
          <p className={`text-center text-[30px] font-[600] text-[]`}>
            Socket Pay Withdrawal
          </p>
          <p className={`text-center text-[#8e8e8eed] my-[20px]`}>
            Withdraw your ETH with Sockey Pay
          </p>
          <div className={`space-y-[20px] mt-[40px]`}>
            <div>
              <input
                type="text"
                className={`outline-none bg-[#cccccc93] p-[20px] rounded-[6px] w-full`}
              />
            </div>
            <div
              className={`w-full flex justify-center bg-sky-300 p-[20px] rounded-[8px] cursor-pointer text-white`}
            >
              <p className={`text-[18px] font-[600]`}>Withdraw</p>
            </div>
          </div>
        </div>
        <p className={`text-center text-[20px]`}>Or</p>

        <div
          className={`border border-sky-300 text-sky-300 
          flex justify-center p-[20px] rounded-[8px] cursor-pointer`}
          onClick={() => navigate("/deposit")}
        >
          <p className={`text-[18px] font-[600]`}>Deposit</p>
        </div>
      </div>
    </div>
  );
};

export default Withdrawal;
