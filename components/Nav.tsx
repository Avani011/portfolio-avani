"use client";
import Link from 'next/link';
import Image from 'next/image';

import { useDispatch, useSelector } from 'react-redux';
import Dropdown from './Dropdown';
import { RootState } from '@/store';
import { isOpen } from '@/store';

const Nav = () => {

  const dispatch = useDispatch();
  const showDropdown = useSelector((state: RootState)  => state.dropdown.showDropdown);

  return (
    <>
      {showDropdown ? (
        <Dropdown />
      ) : (
        <nav className='nav-div'>
          <Link href="/">
            <Image 
              src="/nav-icon.svg"
              alt='nav-icon'
              width={25}
              height={25}
              className='nav-img1'     
              />
            </Link>

            <Image 
              src="/menu.svg"
              alt='menu-icon'
              width={30}
              height={20}
              onClick={() => dispatch(isOpen())}
              className='nav-img2'  
            />  
        </nav>
      )}
    </>
  );
}

export default Nav;
