import { BsArrowRight } from "react-icons/bs";
import BestSellingProducts from "./components/BestSellingProducts";
import Header from "./components/Header";
import HeroArea from "./components/HeroArea";
import WhyChoose from "./components/WhyChoose";

// assets
import experienceImg from './assets/experience.webp';
import verticalChair from './assets/vertical-chair.webp';
import verticalSofa from './assets/vertical-sofa.webp';
import horizontalBed from './assets/horizontal-bed.webp';
import horizontalSofa from './assets/horizontal-sofa.webp';
import lamp1 from './assets/lamp-1.webp';
import lamp2 from './assets/lamp-2.webp';

const App = () => {
  return (
    <div className="w-full">

      <Header />

      <HeroArea />

      <WhyChoose />

      <BestSellingProducts />

      {/* experiences */}
      <section className="py-36 bg-white">
        <div className="flex items-center gap-20">
          <div className="w-1/2">
            <div className="relative z-10 w-[80%]">
              <div className="overflow-hidden aspect-[16/12] rounded-r-2xl shadow-2xl">
                <img src={experienceImg} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-9 rounded-2xl bg-[#F7F7F7] w-full h-2/3 -z-10" />
              <div className="absolute -top-9 right-1/3 rounded-2xl bg-[#F7F7F7] w-full h-2/3 -z-10" />
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col gap-y-4 lg:w-[450px]">
              <span className="text-sm font-Gilroy-Medium text-secondary uppercase tracking-widest">Experiences</span>
              <h1 className="font-Gilroy-Bold text-4xl leading-tight text-[#1E1E1E]">we provide you the <br /> best experience</h1>
              <p className="font-Gilroy-Light text-sm text-[#1E1E1E] leading-relaxed">
                You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials
              </p>
              <button className="text-secondary flex text-sm duration-300 hover:gap-5 gap-3 font-Gilroy-Regular items-center w-fit">
                More info
                <BsArrowRight className='w-6 h-6' />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* materials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5 max-sm:px-3">
          <div className="flex items-center gap-20">
            <div className="w-1/2">
              <div className="flex flex-col gap-y-4 lg:w-[450px]">
                <span className="text-sm font-Gilroy-Medium text-secondary uppercase tracking-widest">Materials</span>
                <h1 className="font-Gilroy-Bold text-4xl leading-tight text-[#1E1E1E]">Very serious <br /> materials for making <br /> furniture</h1>
                <p className="font-Gilroy-Light text-sm text-[#1E1E1E] leading-relaxed">
                  Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price
                </p>
                <button className="text-secondary flex text-sm duration-300 hover:gap-5 gap-3 font-Gilroy-Regular items-center w-fit">
                  More info
                  <BsArrowRight className='w-6 h-6' />
                </button>
              </div>
            </div>
            <div className="w-1/2">
              <div className="w-full aspect-square grid grid-cols-3 gap-4">
                <div className="col-span-1 flex flex-col gap-4">
                  <div className="flex-1 rounded-lg shadow-lg overflow-hidden">
                    <img draggable={false} src={verticalChair} alt='' className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 rounded-lg shadow-lg overflow-hidden">
                    <img draggable={false} src={verticalSofa} alt='' className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="col-span-2 flex flex-col gap-4">
                  <div className="aspect-video rounded-lg shadow-lg overflow-hidden">
                    <img draggable={false} src={horizontalBed} alt='' className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-video rounded-lg shadow-lg overflow-hidden">
                    <img draggable={false} src={horizontalSofa} alt='' className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex gap-4">
                    <div className="flex-1 rounded-lg shadow-lg overflow-hidden">
                      <img draggable={false} src={lamp1} alt='' className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 rounded-lg shadow-lg overflow-hidden">
                      <img draggable={false} src={lamp2} alt='' className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
