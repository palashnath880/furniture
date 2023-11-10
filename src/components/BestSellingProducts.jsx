import { useState } from "react";
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css';
import { FaCartPlus } from 'react-icons/fa';

//assets
import bedImg1 from '../assets/product/bed-1.webp';
import bedImg2 from '../assets/product/bed-2.webp';
import bedImg3 from '../assets/product/bed-3.webp';
import bedImg4 from '../assets/product/bed-4.webp';
import sofaImg1 from '../assets/product/sofa-1.webp';
import sofaImg2 from '../assets/product/sofa-2.webp';
import sofaImg3 from '../assets/product/sofa-3.webp';
import sofaImg4 from '../assets/product/sofa-4.webp';
import chairImg1 from '../assets/product/chair-1.webp';
import chairImg2 from '../assets/product/chair-2.webp';
import chairImg3 from '../assets/product/chair-3.webp';
import chairImg4 from '../assets/product/chair-4.webp';
import lampImg1 from '../assets/product/lamp-1.webp';
import lampImg2 from '../assets/product/lamp-2.webp';
import lampImg3 from '../assets/product/lamp-3.webp';
import lampImg4 from '../assets/product/lamp-4.webp';

const BestSellingProducts = () => {

    // states
    const [activeTab, setActiveTab] = useState(0);

    const tabs = ['Chair', 'Bed', 'Sofa', 'Lamp'];

    const data = {
        chair: [
            {
                title: "Eames Lounge Chair",
                price: 5000,
                img: chairImg1
            },
            {
                title: "Aeron Chair",
                price: 1000,
                img: chairImg2
            },
            {
                title: "Wishbone Chair",
                price: 500,
                img: chairImg3
            },
            {
                title: "Tolix Chair",
                price: 200,
                img: chairImg1
            },
            {
                title: "IKEA Poäng Chair",
                price: 100,
                img: chairImg4
            }
        ],
        bed: [
            {
                title: "Bed One",
                price: 5000,
                img: bedImg1
            },
            {
                title: "Bed Two",
                price: 1000,
                img: bedImg2
            },
            {
                title: "Bed Three",
                price: 500,
                img: bedImg3
            },
            {
                title: "Bed Four",
                price: 200,
                img: bedImg1
            },
            {
                title: "Bed Five",
                price: 100,
                img: bedImg4
            }
        ],
        sofa: [
            {
                title: "Sofa One",
                price: 5000,
                img: sofaImg1
            },
            {
                title: "Sofa Two",
                price: 1000,
                img: sofaImg2
            },
            {
                title: "Sofa Three",
                price: 500,
                img: sofaImg3
            },
            {
                title: "Sofa Four",
                price: 200,
                img: sofaImg1
            },
            {
                title: "Sofa Five",
                price: 100,
                img: sofaImg4
            }
        ],
        lamp: [
            {
                title: "Lamp One",
                price: 5000,
                img: lampImg1
            },
            {
                title: "Lamp Two",
                price: 1000,
                img: lampImg2
            },
            {
                title: "Lamp Three",
                price: 500,
                img: lampImg3
            },
            {
                title: "Lamp Four",
                price: 200,
                img: lampImg1
            },
            {
                title: "Lamp Five",
                price: 100,
                img: lampImg4
            }
        ],
    };

    console.log(data[tabs[activeTab]])

    return (
        <section>
            <div className="container mx-auto px-5 max-sm:px-3 py-20">
                <div className="flex flex-col items-center gap-10">
                    <h1 className="font-Gilroy-Bold text-4xl text-[#1E1E1E] max-md:text-center max-md:text-3xl">Best Selling Products</h1>
                    <div className="p-2 rounded-full w-fit bg-[#EEEEEE]">
                        {tabs.map((tab, index) => <button onClick={() => setActiveTab(index)} key={index} className={`font-Gilroy-Regular rounded-full px-4 py-2 text-sm duration-300 ${activeTab === index && 'bg-white'}`}>
                            {tab}
                        </button>)}
                    </div>
                </div>
                <div className="mt-10">
                    <Swiper
                        speed={1000}
                        slidesPerView={2}
                        spaceBetween={10}
                        loop={true}
                        autoplay={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3
                            },
                            1024: {
                                slidesPerView: 4,
                            }
                        }}
                    >
                        {Array.isArray(data[tabs[activeTab].toLowerCase()]) && data[tabs[activeTab].toLowerCase()].map(({ img, title, price }, index) => <SwiperSlide key={index} className="!py-5 !h-auto">
                            <div className="flex flex-col h-full">
                                <div className="aspect-square">
                                    <img src={img} alt={img} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 flex flex-col bg-white max-sm:px-2 px-4 py-5 shadow-lg">
                                    <p className="font-Gilroy-Light text-[#8D8D8D] max-sm:text-sm">{tabs[activeTab]}</p>
                                    <h3 className="flex-1 font-Gilroy-Medium text-xl max-sm:text-base">{title}</h3>
                                    <div className="flex justify-between mt-4">
                                        <p className="font-Gilroy-Bold flex gap-1 items-start">
                                            <span>$</span>
                                            <span className="text-xl max-sm:text-base">{price}</span>
                                        </p>
                                        <button className="duration-200 hover:text-secondary">
                                            <FaCartPlus className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default BestSellingProducts;
