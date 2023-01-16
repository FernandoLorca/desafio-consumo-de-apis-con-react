import { BarsArrowDownIcon } from "@heroicons/react/24/outline";

const Sort = ({ nameUsers, onSort }) => {
  return (
    <div
      onClick={() => onSort()}
      className="flex justify-center items-center h-7 w-7 mb-5 cursor-pointer hover:opacity-75 transition-all duration-200"
    >
      <BarsArrowDownIcon className="h-full text-blue-500" />
    </div>
  );
};

export default Sort;
