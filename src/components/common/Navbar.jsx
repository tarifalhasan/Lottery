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
    <div className="w-full hidden lg:block bg-[#0085FF] ">
      <div className="main-container py-5">
        <div className="flex justify-between">
          <div className="flex self-center">
            <Link href={'/'}>Logo</Link>
          </div>
          <div className="flex self-center gap-x-16">
            <Link href={'/'}>
              <span className="nav-link">Home</span>
            </Link>
            <Link href={'/'}>
              <span className="nav-link">Campaigns</span>
            </Link>
            <Link href={'/'}>
              <span className="nav-link">Winners</span>
            </Link>
            <Link href={'/'}>
              <span className="nav-link"> Why Us</span>
            </Link>
            <Link href={'/'}>
              <span className="nav-link">Blog</span>
            </Link>
          </div>
          <div className="flex self-center gap-x-4">
            <div className="flex gap-x-3.5">
              <Image
                src="/images/cartwhite.svg"
                alt=""
                width={27}
                height={27}
              />
              <Image src="/images/insta.svg" alt="" width={27} height={27} />
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
