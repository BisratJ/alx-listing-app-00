import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ label, selected, onClick }) => (
  <button
    className={`px-4 py-1 rounded-full border text-sm font-medium mr-2 mb-2 transition-colors duration-150 ${
      selected
        ? "bg-blue-500 text-white border-blue-500"
        : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
    }`}
    onClick={onClick}
    type="button"
  >
    {label}
  </button>
);

export default Pill;
