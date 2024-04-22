import "./App.css";
import ProductDetails from "./components/ProductDetails";
import ProductDescription from "./components/ProductsDescription";
import Ratings from "./components/Ratings";
import Related from "./components/Related";

const App = () => {
  return (
    <div className="App">
    <h3>Headphones : The best one out there</h3>
    <ProductDetails />
    <ProductDescription />
    <div class="additional">
      <Related />
      <Ratings />
    </div>
    </div>
  );
};

export default App;
