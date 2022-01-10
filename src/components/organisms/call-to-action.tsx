import React from "react";
import Button from "../atoms/button";
import Separator from "../atoms/separator";
import Text from "../atoms/text";
import TextInput from "../atoms/text-input";

interface CallToAction {}
const CallToAction: React.FC<CallToAction> = () => {
  const [email, setEmail] = React.useState("");
  return (
    <div
      className="flex flex-col items-center justify-center  lg:pt-24 
    "
    >
      <Text
        className="font-bold text-primary-50 text-4xl lg:text-6xl text-center  w-[360px] h-[139] lg:w-[538px] lg:h-[130px] 
    
    "
      >
        Make Every Interview Matter
      </Text>
      <Text className=" w-[320px] h-[60px] lg:w-[536px] lg:h-[87px] text-sm lg:text-2xl  text-center text-primary-50 font-normal  ">
        Chatkick helpers recruiter make batter hiring decisions up to 3X faster
      </Text>
      <div className="flex lg:mt-3 mb-5 lg:mb-20 ">
        <TextInput
          placeholder="user@chatkick.com"
          value={email}
          onChange={setEmail}
          type="email"
          className="flex text-xs lg:text-sm w-[158px] h-[36px] lg:w-[280px] lg:h-[44px]  rounded lg:rounded-lg  bg-white  focus:outline-none  px-3 border focus:border-pink-600"
        />
        <Separator className="px-1" />
        <Button
          onClick={() => {}}
          className="flex bg-button-Teal w-[126px] lg:w-[140px] h-[36px] lg:h-[44px] rounded lg:rounded-md items-center justify-center uppercase font-bold text-[10px] lg:text-xs text-white shadow"
        >
          get early access
        </Button>
      </div>
    </div>
  );
};
export default CallToAction;
