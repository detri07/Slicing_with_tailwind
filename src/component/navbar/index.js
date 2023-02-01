import React from "react";
import { BiUserCircle} from "react-icons/bi";
import { RxRocket } from "react-icons/rx";
import { BsChatLeftDots, BsTrophy,} from "react-icons/bs";
import {MdOutlineTask} from "react-icons/md"

export default function Navbar() {
    return (
        <div className="bg-white w-[375px] h-[74px] p-3 bottom-0 fixed">
            <div className="justify-evenly gap-12 px-2 m-2 flex flex-row text-xl">
                <div class="basis-1/4"><RxRocket className="hover:text-[#FB9600]"/></div>
                <div class="basis-1/4"><BsChatLeftDots className="hover:text-[#FB9600]"/></div>
                <div class="basis-1/4"><MdOutlineTask className="hover:text-[#FB9600]"/></div>
                <div class="basis-1/4"><BsTrophy className="hover:text-[#FB9600]"/></div>
                <div class="basis-1/4"><BiUserCircle className="hover:text-[#FB9600]"/></div>
            </div>
        </div>
    )
}