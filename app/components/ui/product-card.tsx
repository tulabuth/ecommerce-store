"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import PreviewModal from "../preview-modal";
import usePreviewModal from "@/app/hooks/use-preview-modal";
import useCart from "@/app/hooks/use-cart";

interface ProductCardProps {
    data: Product;
}
const ProductCard:React.FC<ProductCardProps> =({data})=>{
    const route = useRouter();
    const cart = useCart();
    const handleClick =()=>{
        route.push(`/products/${data.id}`)
    }

    const previewModal = usePreviewModal()
    const onPreview: MouseEventHandler<HTMLButtonElement> = (event)=>{
        event.stopPropagation();
        previewModal.onOpen(data);
    }

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event)=>{
        event.stopPropagation();
        cart.addItem(data);
    }
    return (
        <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            {/* Images and Action */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
            <Image src={data?.images?.[0]?.url} fill alt="Image"/>
            <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                <div className="flex gap-x-6 justify-center">
                    <IconButton onClick={onPreview} icon={<Expand size={20} className="text-gray-600"/>}/>
                    <IconButton onClick={onAddToCart} icon={<ShoppingCart size={20} className="text-gray-600"/>}/>
                </div>
            </div>
            </div>

            {/* Description */}
            <div className="">
            <p className="font-semibold text-lg">
                {data.name}
            </p>
            <p className="font-sm text-gray-500">
                {data.category?.name}
            </p>
            </div>

            {/* price */}
            <div className="flex items-center justify-between">
                <Currency value={data?.price}/>
            </div>
        </div>
    )
}

export default ProductCard;