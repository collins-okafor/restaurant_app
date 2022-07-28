import Navbar from "./components/navbar/navbar";
import ImageRow from "./components/ImageRow/ImageRow";
import ImageRow2 from "./components/ImageRow2/ImageRow2";
import Pager from "./components/Pager/Pager";
import Chef from "./components/Chef/Chef";
import Footer from "./components/Footer/Footer";

function App() {
 
  return (
    <div>
      <Navbar />
      <ImageRow />
      <ImageRow2 />
      <Pager />
      <Chef />
      <Footer />
    </div>
  )
}

export default App;
