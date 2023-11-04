import bgImg from '../assets/hero-bg.webp';
import { BiSearch } from 'react-icons/bi';

const HeroArea = () => {
    return (
        <div className="w-full h-screen relative">
            <div className='w-full h-full'>
                <img src={bgImg} alt='Hero BG' className='w-full h-full object-cover' />
            </div>

            <div className='mx-auto px-5 absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[700px]'>
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
