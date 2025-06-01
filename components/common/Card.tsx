import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ image, name, price, rating }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
    <img src={image} alt={name} className="h-40 w-full object-cover" />
    <div className="p-4 flex-1 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <div className="flex items-center mb-2">
          <span className="text-yellow-400 mr-1">★</span>
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>
      <div className="mt-2">
        <span className="text-blue-600 font-bold text-lg">${price.toLocaleString()}</span>
        <span className="text-gray-500 text-sm ml-1">/night</span>
      </div>
    </div>
  </div>
);

export default Card;