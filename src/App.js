// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Footer from "./components/Footer";

function App() {
    return (
        < >
            <Navbar heading="Text-utils" />
            <Textarea placeholder='Enter Your Text Here:' />
            <Footer />
        </>

    );
}

export default App;