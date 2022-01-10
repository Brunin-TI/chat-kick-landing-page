import Image from "next/image";
import React from "react";
import feedbackSVG from "../assets/feedback.svg";
import greenHouseSVG from "../assets/green-house.svg";
import { AddIcon } from "../assets/icons/Icon";
import interviewPlan from "../assets/interview-plan.svg";
import leverSVG from "../assets/lever.svg";
import meetingStartSVG from "../assets/meeting-start.svg";
import pipelineGroupSVG from "../assets/pipeline-group.svg";
import pipelineSVG from "../assets/pipeline.svg";
import recruiteeSVG from "../assets/recruitee.svg";
import saveHoursSVG from "../assets/save-hours.svg";
import slackSVG from "../assets/slack.svg";
import smartRecruitersSVG from "../assets/smart-recruiters.svg";
import successFactorSVG from "../assets/success-factors.svg";
import teamScheduleSVF from "../assets/team-schedule.svg";
import toCheckSVG from "../assets/toCheck.svg";
import videoTranscriptionSVG from "../assets/video-transcription.svg";
import workableSVG from "../assets/workable.svg";
import Button from "../components/atoms/button";
import Separator from "../components/atoms/separator";
import Text from "../components/atoms/text";
import TextInput from "../components/atoms/text-input";
import CallToAction from "../components/organisms/call-to-action";
import Header from "../components/organisms/header";
import SectionSeparator from "../components/organisms/section-separator";

interface HomeProps {}
const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <div className="justify-center flex flex-col  px-10 lg:px-20 py-11 ">
        <Header />
      </div>
      <CallToAction />
      <div className=" flex items-center justify-center px-3 lg:px-24 mb-12 lg:mb-24 z-40">
        <Image src={videoTranscriptionSVG} alt="chatkick-video-transcription" />
      </div>
      <SectionSeparator />
      <Separator className="py-4 lg:py-24" />
      <div className="  grid grid-rows-4 grid-flow-col gap-1 ">
        <div
          className="flex flex-col lg:flex-row
        "
        >
          <div className=" flex  flex-col lg:flex-1   items-center lg:pl-32 lg:justify-center    ">
            <div className=" flex  w-[250px] h-[20] lg:w-[350px] lg:h-[90px] items-center  ">
              <text className="font-bold  text-lg lg:text-4xl  text-bluePigment uppercase text-center lg:text-left">
                Create interview plans
              </text>
            </div>
            <div className="pt-3 pb-7  w-[326px] lg:w-[350px] h-[51px]  ">
              <text className=" flex items-center text-xs  font-normal text-center  lg:text-left lg:text-lg">
                Use one of our hundreds of pre-built plan templates or customize
                your own to easily share and collaborate on your company’s
                hiring process.
              </text>
            </div>
          </div>
          <div className="flex flex-1 items-center lg:justify-end px-5 pt-7 lg:pr-28">
            <Image src={pipelineSVG} alt="pipeline" />
            <Image src={pipelineSVG} alt="pipeline" />
            <Image src={pipelineSVG} alt="pipeline" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse lg:px-16 ">
          <div className="flex flex-col items-center  lg:justify-center ">
            <div className="flex   py-2 lg:w-[400px]">
              <Text className="font-bold  text-lg lg:text-4xl  text-bluePigment uppercase">
                Ask the right questions
              </Text>
            </div>
            <div className=" flex   justify-center px-10 h-[51px] lg:h-[124px] text-center lg:text-left  lg:w-[479px]   ">
              <Text className=" flex font-normal text-xs lg:text-xl">
                Trust our video interview platform to help interviewers ask the
                right questions, and share interview recordings with team
                members to safeguard against hiring bias.
              </Text>
            </div>
          </div>
          <div className=" px-8 lg:pl-40 pt-5 flex-1 ">
            <Image src={meetingStartSVG} alt="chatkick-meeting-start" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row ">
          <div className="flex flex-col items-center  lg:justify-center lg:px-32 ">
            <div className="flex flex-col items-center py-2 lg:w-[448px]  lg:h-[100px] ">
              <Text className="font-bold  text-lg lg:text-4xl  text-bluePigment uppercase">
                Save hundreds of hours per hire
              </Text>
            </div>
            <div className=" flex  items-center justify-center px-10 h-[51px] text-center lg:w-[448px] h lg:h-[100px] lg:px-0 lg:items-start lg:justify-start lg:text-left ">
              <Text className="font-normal text-xs lg:text-lg  ">
                Share interview recordings with hiring stakeholders to increase
                alignment reduce the need for extra interviews or steps.
              </Text>
            </div>
          </div>
          <div className="pt-5 px-16 lg:px-14">
            <Image src={saveHoursSVG} alt="chatkick-save-hours" />
          </div>
        </div>
        <div className="flex  flex-col pt-16 lg:pt-24 px-8 lg:px-32  lg:items-center">
          <div className="flex flex-col items-center py-2 lg:w-[715px]   ">
            <Text className="font-bold  text-center text-lg lg:text-4xl  text-bluePigment uppercase">
              Recruiting is all about connections, so are we
            </Text>
          </div>
          <div className="flex flex-col lg:pt-20 ">
            <div className="flex flex-row py-2 items-center ">
              <Image src={recruiteeSVG} alt="chatkick-" />
              <Separator className="px-4 lg:px-16" />
              <Image src={greenHouseSVG} alt="chatkick-" />
              <Separator className="px-4 lg:px-16" />
              <Image src={leverSVG} alt="chatkick-" />
              <Separator className="px-4 lg:px-16" />
              <div className="hidden lg:flex">
                <Image src={slackSVG} alt="chatkick-" />
              </div>
            </div>
            <div className="flex  flex-row py-2 ">
              <div className="flex lg:hidden">
                <Image src={slackSVG} alt="chatkick-" />
              </div>
              <Separator className="px-4 lg:px-16" />
              <Image src={workableSVG} alt="chatkick-" />
              <Separator className="px-4 lg:px-16" />
              <Image src={smartRecruitersSVG} alt="chatkick-" />
              <Separator className="px-4 lg:px-16" />
              <div className="hidden lg:flex">
                <Image src={successFactorSVG} alt="chatkick-" />
              </div>
            </div>
            <div className="flex py-2 lg:flex-col  ">
              <div className="w-[172px] h-[21px] flex lg:hidden">
                <Image src={successFactorSVG} alt="chatkick-" />
              </div>
              <Separator className="px-4 lg:px-16" />
              <div className="flex lg:justify-center  lg:py-20">
                <Button
                  leftIcon={<AddIcon className=" lg:w-[40px] h-[40px] " />}
                  className="w-[90px] lg:w-[216px] h-[26px] lg:h-[64px] px-3 lg:px-5 rounded-3xl lg:rounded-full text-sm lg:text-4xl flex items-center hover:cursor-pointer justify-between bg-button-darkTurquoise50  text-button-darkTurquoise100"
                >
                  & more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row bg-background-50">
        <div className=""></div>
        <div className="flex flex-col">
          <div className="flex flex-col pt-12">
            <div className="pr-48 ">
              <Text className="text-lg font-bold text-primary-50">
                1. Sync your ATS
              </Text>
            </div>
            <div className="pr-9">
              <Text className="text-xs font-normal ">
                Don’t have one? We’ve got you covered with a fully customized
                job board and candidate pipeline.
              </Text>
            </div>
            <div className="px-20 pt-3">
              <Image src={pipelineGroupSVG} alt="chatkick-pipeline-group" />
            </div>
          </div>
          <div className="flex flex-col pt-12">
            <div className="pr-48 ">
              <Text className="text-lg font-bold text-primary-50">
                2. Create your structured interview plan
              </Text>
            </div>

            <div className="flex px-20 pt-8 items-center">
              <Image src={interviewPlan} alt="chatkick-pipeline-group" />
            </div>
          </div>
          <div className="flex flex-col pt-12">
            <div className="pr-48 ">
              <Text className="text-lg font-bold text-primary-50">
                3. Easily coordinate team schedules
              </Text>
            </div>

            <div className="flex px-20 pt-8 items-center">
              <Image src={teamScheduleSVF} alt="chatkick-pipeline-group" />
            </div>
          </div>
          <div className="flex flex-col pt-12">
            <div className="pr-48 ">
              <Text className="text-lg font-bold text-primary-50">
                4. Collaborate on interviews and feedback
              </Text>
            </div>

            <div className="flex px-20 pt-8 items-center">
              <Image src={feedbackSVG} alt="chatkick-pipeline-group" />
            </div>
          </div>
          <div className="flex flex-col pt-12">
            <div className="pr-48 ">
              <Text className="text-lg font-bold text-primary-50">
                5. Improve with every interview
              </Text>
            </div>
            <div className="pr-9">
              <Text className="text-xs font-normal ">
                Analyze interviews to improve habits and share best practices to
                hire better candidates, faster.
              </Text>
            </div>
            <div className="px-28 pt-9">
              <Image src={toCheckSVG} alt="chatkick-pipeline-group" />
            </div>
          </div>
          <div className="flex items-center justify-center py-20 px-28">
            <div className=" border-[1.7px] border-primary-50 w-[231px] h-[51px] rounded-xl items-center justify-center flex  ">
              <Button className="uppercase bg-button-darkTurquoise  w-[215px] h-[35px]  shadow-sm  p-2 rounded-md flex items-center justify-center font-bold text-white text-xs ">
                Start a free trial
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-button-darkTurquoise">
        <div className="flex flex-col items-center justify-center pt-10 ">
          <div className="w-[211px] h-[36px] ">
            <Text className="text-center font-normal text-[18px] text-white">
              75% of recruiters say the job is harder than ever.
            </Text>
          </div>
          <div className="pt-[6px] w-[303px] h-[12px]">
            <Text className="text-xs text-white font-normal ">
              Chatkick turns hiring into your competitive advantage.
            </Text>
          </div>
        </div>
        <div className="flex items-center justify-center  pt-3 px-52">
          <div
            className="flex w-[225px] h-[38px] rounded-md bg-bluePigment50 px-1 py-2 cursor-pointer items-center justify-center "
            onClick={() => {}}
          >
            <TextInput
              placeholder="user@chatkick.com"
              value={""}
              onChange={() => {}}
              className="w-[134px] h-[24px] rounded text-[8px] items-center justify-center flex px-1 py-2"
            />
            <Separator className="px-[2px]" />
            <Button className="w-[76px] h-[23px] rounded-[3px] bg-button-green100 font-bold text-[8px] flex items-center justify-center uppercase">
              Stay In Touch
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
