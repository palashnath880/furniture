import { BiSearch } from 'react-icons/bi';

// assets
import img1 from '../assets/hero-slide-1.jpg';
import img2 from '../assets/hero-slide-2.jpg';
import { useEffect, useRef } from 'react';

const HeroArea = () => {

    // states
    const ref = useRef();

    // slider images array
    const images = [img1, img2,];

    useEffect(() => {
        const wrapper = ref.current;
        const slides = wrapper.children;
        let activeIndex = 0;
        let interval;

        const __change_slide = (index) => {
            //  add opacity
            for (let slide of slides) {
                const slide_index = parseInt(slide.getAttribute('data-index'));
                slide.classList.remove('opacity-100');
                slide.classList.add('opacity-0');

                if (slide_index === index) {
                    slide.classList.add('opacity-100');
                }
            }
        }

        __change_slide(activeIndex);

        interval = setInterval(() => {

            if (activeIndex === slides.length - 1) {
                activeIndex = 0;
            } else {
                activeIndex++;
            }

            __change_slide(activeIndex);
        }, 5000);

        return () => clearInterval(interval);

    }, []);

    return (
        <div className="w-full h-screen relative">

            <div className='w-full h-full relative' ref={ref}>
                {images.map((image, index) => <div key={index} data-index={index} className='absolute top-0 left-0 w-full h-full slide opacity-0 duration-1000'>
                    <img src={image} alt='Hero BG' className='w-full h-full object-cover' draggable={false} />
                </div>)}
            </div>
            <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-30' />

            <div className='mx-auto px-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[700px]'>
                <div className='flex flex-col items-center gap-7'>
                    <h1 className='text-6xl font-Gilroy-Bold text-center text-white leading-tight'>
                        Make your interior more minimalistic & modern
                    </h1>
                    <p className='text-base text-white font-Gilroy-Light text-center'>
                        Turn your room with panto into a lot more minimalist <br />
                        and modern with ease and speed
                    </p>
                    <div className='w-[400px] mx-auto font-Gilroy-Light flex items-center rounded-full p-2 overflow-hidden bg-[#FFFFFF26] border border-[#FFFFFF99]'>
                        <input type='text' placeholder='Search furniture' className='flex-1 px-2 bg-transparent outline-none border-none text-white' />
                        <button className='w-8 aspect-square grid place-items-center rounded-full bg-secondary text-white'>
                            <BiSearch className='w-5 h-5' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroArea;
