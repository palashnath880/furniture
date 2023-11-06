import { useState } from "react";
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css';

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
    };

    return (
        <section>
            <div className="container mx-auto px-5 max-sm:px-3 py-20">
                <div className="flex flex-col items-center gap-10">
                    <h1 className="font-Gilroy-Bold text-4xl text-[#1E1E1E]">Best Selling Products</h1>
                    <div className="p-2 rounded-full w-fit bg-[#EEEEEE]">
                        {tabs.map((tab, index) => <button onClick={() => setActiveTab(index)} key={index} className={`font-Gilroy-Regular rounded-full px-4 py-2 text-sm duration-300 ${activeTab === index && 'bg-white'}`}>
                            {tab}
                        </button>)}
                    </div>
                </div>
                <div className="mt-10">
                    <Swiper
                        speed={1000}
                        slidesPerView={4}
                        spaceBetween={10}
                        loop={true}
                    >
                        {activeTab === 0 && [chairImg1, chairImg2, chairImg3, chairImg4].map((img, index) => <SwiperSlide key={index}>
                            <div className="">
                                <div>
                                    <img src={img} alt={img} className="" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="">{index + 1}</h3>
                                </div>
                            </div>
                        </SwiperSlide>)}
                        {activeTab === 1 && [bedImg1, bedImg2, bedImg3, bedImg4].map((img, index) => <SwiperSlide key={index}>
                            <div className="">
                                <div>
                                    <img src={img} alt={img} className="" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="">{index + 1}</h3>
                                </div>
                            </div>
                        </SwiperSlide>)}
                        {activeTab === 2 && [sofaImg1, sofaImg2, sofaImg3, sofaImg4].map((img, index) => <SwiperSlide key={index}>
                            <div className="">
                                <div>
                                    <img src={img} alt={img} className="" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="">{index + 1}</h3>
                                </div>
                            </div>
                        </SwiperSlide>)}
                        {activeTab === 3 && [lampImg1, lampImg2, lampImg3, lampImg4].map((img, index) => <SwiperSlide key={index}>
                            <div className="">
                                <div>
                                    <img src={img} alt={img} className="" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="">{index + 1}</h3>
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
