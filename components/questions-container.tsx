import type { NextPage } from "next";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const QuestionsContainer: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-center">
      <form
        className="w-[544px] flex flex-col items-center justify-center gap-[45px]"
        method="post"
        id="question-form"
      >
        <div className="self-stretch relative text-13xl font-kaisei-decol text-dimgray text-center">
          Any questions? Ask us!
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
          <div className="self-stretch h-14 flex flex-col items-center justify-between">
            <div className="self-stretch relative text-xs font-inter text-gray-200 text-left">
              NAME
            </div>
            <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-black" />
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[53px]">
            <div className="flex-1 h-14 flex flex-col items-start justify-between">
              <div className="relative text-xs font-inter text-gray-200 text-left">
                PHONE
              </div>
              <div className="relative box-border w-[246px] h-px border-t-[1px] border-solid border-black" />
            </div>
            <div className="flex-1 h-14 flex flex-col items-start justify-between">
              <div className="relative text-xs font-inter text-gray-200 text-left">
                POSTAL CODE
              </div>
              <div className="relative box-border w-[246px] h-px border-t-[1px] border-solid border-black" />
            </div>
          </div>
          <div className="self-stretch h-14 flex flex-col items-center justify-between">
            <div className="self-stretch relative text-xs font-inter text-gray-200 text-left">
              MESSAGE
            </div>
            <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-black" />
          </div>
        </div>
        <div className="rounded-70xl bg-khaki box-border w-[207px] flex flex-col py-2 px-10 items-center justify-center cursor-pointer border-[1px] border-solid border-gray-100 hover:animate-[0.1s_ease_0s_1_reverse_forwards_shadow-pop-tr] hover:opacity-[1] lg:hover:cursor-pointer">
          <Button
            className="self-stretch relative"
            variant="solid"
            colorScheme="jemyellow"
            rightIcon={<ArrowForwardIcon />}
          >
            Contact Us
          </Button>
        </div>
      </form>
    </div>
  );
};

export default QuestionsContainer;
