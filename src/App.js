
import './style/header.css';
import './style/main.css';
import './style/footer.css';

import Footer from './components/Footer';
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
