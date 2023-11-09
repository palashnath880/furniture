import { useState } from 'react';
import { BsChevronDown, BsFillHandbagFill } from 'react-icons/bs';


const Header = () => {

    // states
    const [isOpen, setIsOpen] = useState(true);

    return (
        <header className="w-full absolute top-0 left-0 h-auto z-50">
            <div className="container mx-auto px-5 py-4">
                <div className="flex justify-between items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className={`w-8 overflow-hidden aspect-square flex flex-col justify-between group ${isOpen && 'active'} md:hidden`}>
                        <span className='h-1 w-full rounded-full block bg-white duration-200 origin-top-right transform group-[.active]:-rotate-45 group-[.active]:w-[-110%]' />
                        <span className='h-1 w-full rounded-full block bg-white duration-200 group-[.active]:opacity-0 group-[.active]:translate-x-full' />
                        <span className='h-1 w-full rounded-full block bg-white duration-200 origin-bottom-right transform group-[.active]:rotate-45 group-[.active]:w-[-110%]' />
                    </button>

                    <h2 className="tracking-widest text-transparent text-2xl font-Rowdies" style={{ WebkitTextStrokeWidth: '0.5px', WebkitTextStrokeColor: 'white' }}>Furniture</h2>

                    <div className={`max-md:absolute max-md:top-full max-md:bg-white max-md:bg-opacity-80  max-md:py-6 max-md:rounded-2xl max-md:w-11/12 max-md:h-auto max-md:-translate-x-1/2 max-md:left-1/2 max-md:duration-200 origin-top ${isOpen ? 'max-md:scale-y-0' : 'max-md:scale-y-100'}`}>
                        <ul className="flex max-md:flex-col items-center font-Gilroy-Medium text-white max-md:text-black max-md:gap-3 gap-12 text-base">
                            <li className="relative cursor-pointer after:content-[''] after:absolute after:h-[2px] after:duration-200 hover:after:w-full after:w-0 after:bg-white after:bottom-0 after:left-0">
                                Furniture
                                {/* <BsChevronDown /> */}
                            </li>
                            <li className="relative cursor-pointer after:content-[''] after:absolute after:h-[2px] after:duration-200 hover:after:w-full after:w-0 after:bg-white after:bottom-0 after:left-0">Shop</li>
                            <li className="relative cursor-pointer after:content-[''] after:absolute after:h-[2px] after:duration-200 hover:after:w-full after:w-0 after:bg-white after:bottom-0 after:left-0">About Us</li>
                            <li className="relative cursor-pointer after:content-[''] after:absolute after:h-[2px] after:duration-200 hover:after:w-full after:w-0 after:bg-white after:bottom-0 after:left-0">Contact</li>
                        </ul>
                    </div>
                    <button className='text-white relative'>
                        <BsFillHandbagFill className='w-6 h-6' />
                        <span className='absolute top-0 right-0 translate-x-3 -translate-y-1 text-sm bg-secondary w-6 rounded-full aspect-square grid place-items-center font-Gilroy-Medium'>
                            0
                        </span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
