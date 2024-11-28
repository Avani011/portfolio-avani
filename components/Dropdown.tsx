"use client";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { isClose } from "@/store";

const Dropdown = () => {
    const dispatch = useDispatch();

    return (
        <div className='dropdown'>
            <div className="flex flex-end">
                <Image 
                    src="/close.svg"
                    alt='close-icon'
                    width={30}
                    height={20}
                    onClick={() => dispatch(isClose())}
                    className='flex-end mr-5 mt-3 sm:max-md:w-6'  
                />
            </div>

            <div className="flex flex-col items-center justify-center gap-24 sm:max-md:gap-10">
                <Link href="#about"
                    className="text-white text-8xl sm:max-md:text-3xl"
                    onClick={() => dispatch(isClose())}
                >
                    ABOUT
                </Link>
                <Link href="#project"
                    className="text-white text-8xl sm:max-md:text-3xl"
                    onClick={() => dispatch(isClose())}
                >
                    MY WORK
                </Link>
                <Link href="#contact"
                    className="text-white text-8xl sm:max-md:text-3xl"
                    onClick={() => dispatch(isClose())}
                >
                    CONTACTS
                </Link>
            </div>
          
        </div>
    );
}

export default Dropdown;
