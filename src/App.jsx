import BestSellingProducts from "./components/BestSellingProducts";
import Header from "./components/Header";
import HeroArea from "./components/HeroArea";
import WhyChoose from "./components/WhyChoose";

const App = () => {
  return (
    <div className="w-full">

      <Header />

      <HeroArea />

      <WhyChoose />

      <BestSellingProducts />

    </div>
  );
}

export default App;
