import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {

    const data = [
        {
            "name": "John Doe",
            "image": "https://picsum.photos/200/300?image=100",
            "backgroundImage": "https://picsum.photos/800/600?image=200",
            "jobTitle": "Software Engineer",
            "content": "I've been using this product for the past few months and I'm absolutely in love with it. It's made my life so much easier and I can't imagine going back to my old way of doing things. The product's intuitive interface and powerful features have streamlined my workflow and enabled me to complete tasks more efficiently. I highly recommend this product to any software engineer looking to boost their productivity."
        },
        {
            "name": "Jane Doe",
            "image": "https://picsum.photos/200/300?image=201",
            "backgroundImage": "https://picsum.photos/800/600?image=300",
            "jobTitle": "Marketing Manager",
            "content": "This product has been a game-changer for our team. It's helped us to improve our productivity and efficiency, and we're all so much happier with the results. The product's comprehensive features and user-friendly design have enabled us to create and manage marketing campaigns more effectively. We've seen a significant increase in engagement and conversions since adopting this product, and we're confident that it will continue to play a vital role in our marketing success."
        },
        {
            "name": "Peter Jones",
            "image": "https://picsum.photos/200/300?image=302",
            "backgroundImage": "https://picsum.photos/800/600?image=400",
            "jobTitle": "Product Manager",
            "content": "I'm so glad we chose this product. It's the perfect solution for our needs and it's been a great investment in our business. The product's flexibility and scalability have enabled us to adapt to our changing needs and grow our business. We've been able to launch new products and services more quickly and efficiently, and we're confident that this product will continue to support our growth in the years to come."
        },
        {
            "name": "Sarah Smith",
            "image": "https://picsum.photos/200/300?image=403",
            "backgroundImage": "https://picsum.photos/800/600?image=500",
            "jobTitle": "Customer Service Representative",
            "content": "This product has made my job so much easier. I'm able to help customers more quickly and efficiently, and they're all so much happier with the service they receive. The product's comprehensive knowledge base and easy-to-use interface have enabled me to resolve customer issues quickly and effectively. I've received numerous compliments from customers about the quality of service I've provided since using this product, and I'm grateful for the positive impact it has had on my job satisfaction."
        },
        {
            "name": "Michael Brown",
            "image": "https://picsum.photos/200/300?image=504",
            "backgroundImage": "https://picsum.photos/800/600?image=600",
            "jobTitle": "Accountant",
            "content": "This product has helped me to save so much time and money. It's made my job so much easier and I'm able to get more done in less time. The product's automation features and error-checking capabilities have streamlined my workflow and reduced the risk of errors. I've been able to close my books more quickly and accurately, and I'm confident that this product will help me to continue to improve my efficiency."
        }
    ];

    return (
        <section className="bg-white">
            <div className="container mx-auto px-5 max-sm:px-3 pt-10 pb-28 ">
                <div className="flex flex-col items-center gap-4">
                    <span className="text-sm font-Gilroy-Medium text-secondary uppercase tracking-widest">Testimonial</span>
                    <h1 className="font-Gilroy-Bold max-sm:text-3xl text-4xl leading-tight text-[#1E1E1E]">Our Client Reviews</h1>
                </div>
                <div className="mt-16">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        speed={1000}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4
                            }
                        }}
                    >
                        {data.map(({ backgroundImage, content, image, jobTitle, name }, index) => <SwiperSlide key={index} className="">
                            <div className="relative aspect-[11/16] rounded-2xl overflow-hidden cursor-pointer">
                                <img draggable={false} src={backgroundImage} alt={'Testimonial Background Image'} className="w-full h-full object-cover" />
                                <div className="absolute bottom-0 left-0 w-full h-full p-3 flex flex-col justify-end bg-[#1E1E1E] bg-opacity-20 duration-300 hover:bg-opacity-10">
                                    <div className="bg-white shadow-2xl px-3 pb-5 pt-9 rounded-xl relative">
                                        <div className="p-2 w-[70px] bg-white rounded-full absolute -top-[35px] left-1/2 -translate-x-1/2">
                                            <img src={image} alt={name} className="w-full aspect-square object-cover rounded-full shadow-xl" />
                                            <span className="absolute w-6 aspect-square block bg-white bottom-1/2 left-full -translate-x-1" style={{ WebkitMaskImage: `radial-gradient(circle 10px at 20px 4px, transparent 0, transparent 20px, black 0px)` }}></span>
                                            <span className="absolute w-6 aspect-square block bg-white bottom-1/2 right-full translate-x-1" style={{ WebkitMaskImage: `radial-gradient(circle 10px at 4px 4px, transparent 0, transparent 20px, black 0px)` }}></span>
                                        </div>
                                        <div className="flex flex-col items-center gap-0 text-[#1E1E1E] text-center">
                                            <h4 className="font-Rowdies text-lg">{name}</h4>
                                            <p className="font-Gilroy-Medium text-sm">{jobTitle}</p>
                                        </div>
                                        <p className="text-sm font-Gilroy-Light text-[#1E1E1E] text-center mt-4">{content.split('').splice(0, 120).join('')}</p>
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

export default Testimonial;
