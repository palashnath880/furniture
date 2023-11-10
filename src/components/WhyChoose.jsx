import { BsArrowRight } from 'react-icons/bs';


const WhyChoose = () => {

    const data = [
        {
            title: 'Luxury facilities',
            content: `The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.`,
        },
        {
            title: 'Affordable Price',
            content: `You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.`,
        },
        {
            title: 'Many Choices',
            content: `We provide many unique work space choices so that you can choose the workspace to your liking.`,
        },
    ];

    return (
        <section className="bg-white">
            <div className="container mx-auto px-5 max-sm:px-3 py-20">
                <div className="flex max-md:flex-col gap-10">
                    <div className="w-full md:w-1/5">
                        <h1 className="font-Gilroy-Bold max-md:text-center max-sm:text-3xl text-4xl leading-tight">
                            Why <br className='max-md:hidden' /> Choosing Us
                        </h1>
                    </div>
                    <div className="w-full md:w-4/5">
                        <div className="grid max-sm:grid-cols-1 grid-cols-3 gap-5">
                            {data.map(({ content, title }, index) => <div key={index} className="flex flex-col gap-4">
                                <h3 className="text-xl font-Gilroy-Bold">{title}</h3>
                                <p className="font-Gilroy-Regular text-[#1E1E1E]">{content}</p>
                                <button className="text-secondary flex text-sm duration-300 hover:gap-5 gap-3 font-Gilroy-Regular items-center">
                                    More info
                                    <BsArrowRight className='w-6 h-6' />
                                </button>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChoose;
