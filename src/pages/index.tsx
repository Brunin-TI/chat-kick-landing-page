import Image from "next/image";
import React from "react";
import videoTranscription from "../assets/video-transcription.svg";
import Button from "../components/atoms/button";
import Text from "../components/atoms/text";
import TextInput from "../components/atoms/text-input";
import Header from "../components/organisms/header";
interface HomeProps {}
const Home: React.FC<HomeProps> = () => {
  const [email, setEmail] = React.useState("");
  return (
    <>
      <div className="justify-center flex flex-col  px-10 lg:px-20 py-11 ">
        <Header />
      </div>
      <div
        className="flex flex-col items-center justify-center  lg:pt-24 
   "
      >
        <Text
          placeholder="Make Every Interview Matter"
          className="font-bold text-primary-50 text-4xl lg:text-6xl text-center  w-[360px] h-[139] lg:w-[538px] lg:h-[130px] 
        
     "
        />
        <Text
          placeholder="Chatkick helpers recruiter make batter hiring decisions up to 3X faster"
          className=" w-[320px] h-[60px] lg:w-[536px] lg:h-[87px] text-sm lg:text-2xl  text-center text-primary-50 font-normal  "
        />
        <div className="flex lg:mt-3 mb-5 lg:mb-20 ">
          <TextInput
            placeholder="user@chatkick.com"
            value={email}
            onChange={setEmail}
            type="email"
            className="flex text-xs lg:text-sm w-[158px] h-[36px] lg:w-[280px] lg:h-[44px]  rounded lg:rounded-lg  bg-white  focus:outline-none  px-3 border focus:border-pink-600"
          />
          <div className="px-1" />
          <Button
            placeholder="get early access"
            onClick={() => {}}
            className="flex bg-button-Teal w-[126px] lg:w-[140px] h-[36px] lg:h-[44px] rounded lg:rounded-md items-center justify-center uppercase font-bold text-[10px] lg:text-xs text-white shadow"
          />
        </div>
        <div className=" flex-col px-3 lg:px-24  mb-12 lg:mb-24 z-20">
          <Image src={videoTranscription} alt="chatkick-video-transcription" />
        </div>
      </div>
      <div className=" flex flex-col w-full h-[100px] lg:h-[169px] justify-center items-center bg-background-bluePigment   ">
        <Text
          placeholder="The average job gets 250 applications..."
          className="font-bold text-base lg:text-5xl text-white"
        />
        <div className="py-0 lg:py-1" />
        <Text
          placeholder="A 108% increase in the last decade alone."
          className="font-normal text-sm lg:text-2xl text-white"
        />
      </div>
      <div className=" py-16 lg:py-28" />
    </>
  );
};

export default Home;
