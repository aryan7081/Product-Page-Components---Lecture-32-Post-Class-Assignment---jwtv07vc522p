import "./App.css";
import ProductDetails from "./components/ProductDetails";
import ProductDescription from "./components/ProductsDescription";
import Ratings from "./components/Ratings";
import Related from "./components/Related";

const App = () => {
  return (
    <h3>Headphones : The best one out there</h3>
    <ProductDetails />
    <ProductDescription />
    <div class="additional">
      <Related />
      <Ratings />
    </div>
  );
};

export default App;
