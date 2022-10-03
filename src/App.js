import { BrowserRouter } from "react-router-dom";
import Footer from "./My Technology/component/footer";
import Navbar from "./My Technology/component/navbar";
import Home from "./My Technology/pages/Home";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
