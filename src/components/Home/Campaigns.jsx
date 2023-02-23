import { useDispatch } from 'react-redux';
import addToCart from '../../redux/cart/CartAction';

import DesktopImage from '../../../public/images/desktop.jpg';
import Image from 'next/image';

const Campaigns = () => {
  const dispatch = useDispatch();

  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };

  return (
    <div className="w-full" id="compaigns">
      <div className="main-container pt-20 pb-32">
        <h1 className="text-[#434648] text-[32px] md:text-[48px] font-semibold text-center mb-6">
          Campaigns Ending Soon
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {data.map((item, index) => {
            return (
              <div key={index} className="card-shoadow p-4 rounded-lg">
                <div className="bg-[#F6F7F9] relative mb-5 p-4 flex rounded-lg justify-center">
                  <div className="absolute -top-[25px] -left-4  lg:block">
                    <span className="lg:w-16 lg:h-16 w-16 h-16 mr-8 rounded-full sold-bg flex flex-col justify-center p-3 lg:p-4 items-start </span>">
                      25/
                      <br /> <span className="font-light text-xs">Sold</span>
                    </span>
                    <div className=" w-14 h-14 lg:w-10 lg:h-10 absolute right-0 top-6 rounded-full stock-bg flex flex-col justify-center text-[#464848] text-xs lg:text-base font-bold  ">
                      <div className="flex flex-col space-y-2 justify-center items-center">
                        <span className="font-bold block leading-[5px] text-[8px]">
                          OUT OF
                        </span>
                        <span className="block text-[8px] leading-[5px]">
                          45
                        </span>
                      </div>
                    </div>
                  </div>
                  <Image src={item.pic} alt="" />
                </div>
                <div className="flex justify-between mb-5">
                  <Image src="/images/win.svg" alt="" width={25} height={20} />
                  <span className="flex justify-center items-center bg-[#FFEDF4] rounded-full text-xs text-[#FF508F] px-6 py-0.5">
                    Ends Today
                  </span>
                </div>
                <span className="text-xl text-[#464848] font-medium mb-4 block">
                  {item.title}
                </span>
                <h3 className="text-2xl text-center text-[#464848] font-semibold mb-8">
                  {item.price}
                </h3>
                <div className="flex w-full cursor-pointer justify-center bg-[#01FF0B] py-2.5 rounded-full">
                  <button onClick={() => handleAddToCart(item)}>
                    <span className="flex gap-x-2 w-full">
                      <Image
                        src="/images/cart.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <span>{item.buttonTitle}</span>
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Campaigns;

const data = [
  {
    title: 'Apple macbook pro m2',
    price: '$65.35',
    buttonTitle: 'Add to Cart',
    pic: DesktopImage,
  },
  {
    title: 'Apple macbook pro m2',
    price: '$65.35',
    buttonTitle: 'Add to Cart',
    pic: DesktopImage,
  },
  {
    title: 'Apple macbook pro m2',
    price: '$65.35',
    buttonTitle: 'Add to Cart',
    pic: DesktopImage,
  },
  {
    title: 'Apple macbook pro m2',
    price: '$65.35',
    buttonTitle: 'Add to Cart',
    pic: DesktopImage,
  },
];