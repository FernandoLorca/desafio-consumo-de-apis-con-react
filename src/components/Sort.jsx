import { BarsArrowDownIcon } from "@heroicons/react/24/outline";

const Sort = ({ onSort }) => {
  return (
    <div
      onClick={() => onSort()}
      className="flex justify-center items-center h-6 w-6 cursor-pointer hover:opacity-75 transition-all duration-200"
    >
      <BarsArrowDownIcon className="h-full text-blue-500" />
    </div>
  );
};

export default Sort;
