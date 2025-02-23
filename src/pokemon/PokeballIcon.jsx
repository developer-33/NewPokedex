import { FaCircle } from "react-icons/fa";

const PokeballIcon = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <FaCircle className="text-red-500" size={24} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-3 h-3 border-2 border-black"></div>
    </div>
  );
};

export default PokeballIcon;