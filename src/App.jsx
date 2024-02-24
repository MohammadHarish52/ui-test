import "./app.scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Wrapper />
      <Footer />
    </div>
  );
}

export default App;
