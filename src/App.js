import './App.css';
import Businesspage from './Component/businesspage';
import Overview from './Component/overview';
import Features from './Component/features'
import Technology from './Component/technology';
import Stayfocus from './Component/stayfocus';
import Contact from './Component/contact';
import Footer from './Component/footer';
function App() {
  return (
    <div className="wholeContainer">
      <meta name="viewport" content="width=device-width"></meta>
        <Businesspage/>
        <Overview/>
        <Features/>
        <Technology/>
        <Stayfocus/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
