import React from "react";
import { FaAngleDown, FaBell} from 'react-icons/fa'
import { BsCircleFill } from "react-icons/bs";

export default function Header() {
    return (
        <>
        <div className='h-[192px] w-[375px] rounded-b-3xl border font-semibold font-inter mx-auto bg-[#4085F3] text-slate-50 relative px-5 pt-12'>
            <div className='flex justify-between mt-1'>
                <div className='flex items-center gap-2'>Refactory<FaAngleDown /></div>
                <FaBell />
            </div>
            <p className="text-2xl font-bold mt-3">DETRI</p>
            <div className="flex justify-between">
                <p className="font-normal font-xs">Frontend Engineer</p>
                <div className="bg-[#EDFDF84D] rounded-lg px-2 py-1 flex gap-2 items-center text-[10px]">
                <span className="text-[#08875D]"><BsCircleFill /></span>
                <span className="font-semibold">T43215</span>
                </div>
            </div>
                <div className="bg-white rounded-t-lg mt-2">
                    <div className="flex justify-evenly text-blue p-6">
                        <span>1</span>
                        <span>1</span>
                        <span>1</span>
                        <span>1</span>
                    </div>
                </div>
        </div>
        </>
    )
}