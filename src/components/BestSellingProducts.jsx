import { useState } from "react";

const BestSellingProducts = () => {

    // states
    const [activeTab, setActiveTab] = useState(0);

    const tabs = ['Chair', 'Beds', 'Sofa', 'Lamp'];

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
            </div>
        </section>
    );
}

export default BestSellingProducts;
