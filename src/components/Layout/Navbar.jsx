import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BsCart3, BsInstagram } from 'react-icons/bs';
import { useSelector } from 'react-redux';
const Navbar = () => {
  let Carts = useSelector(cart => cart.cart.length);
  let totalCart = 0;
  if (Carts <= 9) {
    totalCart = '0' + Carts;
  } else {
    totalCart = Carts;
  }
  return (
    <div className="w-full hidden  z-50 lg:block bg-[#0085FF] ">
      <div className="main-container py-5">
        <div className="flex justify-between">
          <div className="flex self-center">
            <Link href={'/'}>Logo</Link>
          </div>
          <div className="flex self-center space-x-10">
            <Link href={'/'}>
              <span className="nav-link">Home</span>
            </Link>
            <Link href={'/#compaigns'}>
              <span className="nav-link">Campaigns</span>
            </Link>
            <Link href={'/#winners'}>
              <span className="nav-link">Winners</span>
            </Link>
            <Link href={'/#why_us'}>
              <span className="nav-link"> Why Us</span>
            </Link>

            <Link href={'/#blog'}>
              <span className="nav-link">Blog</span>
            </Link>
          </div>
          <div className="flex self-center gap-x-4">
            <div className="flex items-center gap-x-6">
              <button className="block relative w-[45px] ">
                <BsInstagram size={30} className="text-white" />
                <span className="flex justify-center items-center left-[23px] right-0 -top-[10px] absolute w-7 h-7 text-[#111] rounded-full bg-[#01FF0B]">
                  <samp> 03</samp>
                </span>
              </button>
              <button type="button" className="block relative w-[45px] ">
                <BsCart3 size={30} className="text-white" />
                <span className="flex justify-center items-center left-[23px] right-0 -top-[10px] absolute w-7 h-7 text-[#111] rounded-full bg-[#01FF0B]">
                  <samp> {totalCart}</samp>
                </span>
              </button>
            </div>
            <div className="flex gap-x-1">
              <Link href={'/'}>
                <span className="bg-[#010567] flex self-center border border-transparent px-7 py-2.5 text-white ">
                  Register
                </span>
              </Link>
              <Link href={'/'}>
                <span className="text-white flex self-center border border-white px-7 py-2.5">
                  Sign In
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
