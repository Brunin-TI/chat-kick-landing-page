import Separator from "../atoms/separator";
import Text from "../atoms/text";

interface SectionSeparator {
  className?: string;
}
const SectionSeparator: React.FC<SectionSeparator> = () => {
  return (
    <div className=" flex flex-col w-full h-[100px] lg:h-[169px] justify-center items-center bg-bluePigment   ">
      <Text className="font-bold text-base lg:text-5xl text-white">
        The average job gets 250 applications...
      </Text>
      <Separator className="py-0 lg:py-1" />
      <Text className="font-normal text-sm lg:text-2xl text-white">
        A 108% increase in the last decade alone.
      </Text>
    </div>
  );
};
export default SectionSeparator;
