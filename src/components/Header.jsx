import { BsChevronDown, BsFillHandbagFill } from 'react-icons/bs';


const Header = () => {



    return (
        <header className="w-full absolute top-0 left-0 h-auto z-50">
            <div className="container mx-auto px-5 py-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-white text-xl font-medium">Furniture</h2>
                    <div>
                        <ul className="flex items-center font-Gilroy-Medium text-white gap-12 text-base">
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
