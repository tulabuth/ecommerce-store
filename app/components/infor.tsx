"use client";

import { Product } from "@/types";
import Currency from "./ui/currency";
import Button from "./ui/Button";
import { ShoppingCart } from "lucide-react";

interface InforProps {
  data: Product;
}
const Infor: React.FC<InforProps> = ({ data }) => {
  return (
    <div>
      <p className="text-3xl font-bold text-gray-900">{data.name}</p>
      <div className="flex mt-3 items-end justify-between">
        <p className="text-2xl text-gray-800">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className="my-4" />

      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color.value }}
          ></div>
        </div>
        <div className="mt-10 flex items-center gap-x-3">
            <Button className="flex items-center gap-x-2">
                Add To Cart 
                <ShoppingCart/>
            </Button>
        </div>

      </div>
    </div>
  );
};

export default Infor;
