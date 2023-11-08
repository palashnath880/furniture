import { FaFacebookF, FaGithub, FaGlobe, FaInstagram, FaLinkedin } from 'react-icons/fa';
import woodImg from '../assets/wood-bg.webp';

const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto px-5 max-sm:px-3 pt-10 pb-10">
                <div className="grid grid-cols-2 sm:grid-cols-3 max-lg:gap-y-10 lg:grid-cols-5 gap-5">
                    <div className="col-span-2 sm:col-span-3 lg:col-span-2">
                        <h2
                            className="text-5xl font-Rowdies bg-repeat w-fit text-transparent"
                            style={{
                                backgroundImage: `url(${woodImg})`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Furniture
                        </h2>
                        <p className="mt-5 text-sm font-Gilroy-Medium max-w-[300px]">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                    </div>
                    <div className="col-span-1">
                        <p className="text-secondary font-Gilroy-Medium tracking-wide">Services</p>
                        <ul className="mt-3 space-y-3 text-sm font-Gilroy-Light">
                            <li className='overflow-hidden w-fit cursor-pointer flex items-center group gap-0 hover:gap-3 duration-200'>
                                {/* <BsArrowRight className='w-5 h-5 -ml-5 group-hover:ml-0 duration-200' strokeWidth={0.5} /> */}
                                Email Marketing
                            </li>
                            <li className='overflow-hidden w-fit cursor-pointer flex items-center group gap-0 hover:gap-3 duration-200'>
                                {/* <BsArrowRight className='w-5 h-5 -ml-5 group-hover:ml-0 duration-200' strokeWidth={0.5} /> */}
                                Campaigns
                            </li>
                            <li className='overflow-hidden w-fit cursor-pointer flex items-center group gap-0 hover:gap-3 duration-200'>
                                {/* <BsArrowRight className='w-5 h-5 -ml-5 group-hover:ml-0 duration-200' strokeWidth={0.5} /> */}
                                Branding
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <p className="text-secondary font-Gilroy-Medium tracking-wide">Furniture</p>
                        <ul className="mt-3 space-y-3 text-sm font-Gilroy-Light">
                            <li className='overflow-hidden w-fit cursor-pointer flex items-center group gap-0 hover:gap-3 duration-200'>
                                {/* <BsArrowRight className='w-5 h-5 -ml-5 group-hover:ml-0 duration-200' strokeWidth={0.5} /> */}
                                Beds
                            </li>
                            <li className='overflow-hidden w-fit cursor-pointer flex items-center group gap-0 hover:gap-3 duration-200'>
                                {/* <BsArrowRight className='w-5 h-5 -ml-5 group-hover:ml-0 duration-200' strokeWidth={0.5} /> */}
                                Sofa
                            </li>
                            <li className='overflow-hidden w-fit cursor-pointer flex items-center group gap-0 hover:gap-3 duration-200'>
                                {/* <BsArrowRight className='w-5 h-5 -ml-5 group-hover:ml-0 duration-200' strokeWidth={0.5} /> */}
                                Chair
                            </li>
                            <li className='overflow-hidden w-fit cursor-pointer flex items-center group gap-0 hover:gap-3 duration-200'>
                                {/* <BsArrowRight className='w-5 h-5 -ml-5 group-hover:ml-0 duration-200' strokeWidth={0.5} /> */}
                                Lamp
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <p className="text-secondary font-Gilroy-Medium tracking-wide">Follow Us</p>
                        <ul className="mt-5 pl-3 space-y-4 text-sm font-Gilroy-Medium">
                            <li>
                                <a href='https://web.facebook.com/palashnath880/' target='_blank' rel='noreferrer' className='overflow-hidden w-fit cursor-pointer flex items-center group gap-3'>
                                    <FaFacebookF className='w-4 h-4' />
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com/palashnath880/' target='_blank' rel='noreferrer' className='overflow-hidden w-fit cursor-pointer flex items-center group gap-3'>
                                    <FaInstagram className='w-4 h-4' />
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href='https://www.linkedin.com/in/palashnath880/' target='_blank' rel='noreferrer' className='overflow-hidden w-fit cursor-pointer flex items-center group gap-3'>
                                    <FaLinkedin className='w-4 h-4' />
                                    Linkedin
                                </a>
                            </li>
                            <li>
                                <a href='https://github.com/palashnath880' target='_blank' rel='noreferrer' className='overflow-hidden w-fit cursor-pointer flex items-center group gap-3'>
                                    <FaGithub className='w-4 h-4' />
                                    Github
                                </a>
                            </li>
                            <li>
                                <a href='https://palashnath.netlify.app/' target='_blank' rel='noreferrer' className='overflow-hidden w-fit cursor-pointer flex items-center group gap-3'>
                                    <FaGlobe className='w-4 h-4' />
                                    palashnath.netlify.app
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-5 py-7 border-t">
                <div className="flex max-sm:flex-col max-sm:gap-5 items-center sm:justify-between">
                    <p className="font-Gilroy-Medium text-[#1E2833] text-sm">
                        Copyright © {new Date().getFullYear()} | Developed by
                        <a className="underline hover:no-underline duration-200" href='https://palashnath.netlify.app' target='_blank' rel='noreferrer'>Palash Nath</a>
                    </p>
                    <div className="justify-center flex gap-10 text-sm">
                        <span className="font-Gilroy-Medium text-[#1E2833]">Terms & Conditions</span>
                        <span className="font-Gilroy-Medium text-[#1E2833]">Privacy Policy</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
