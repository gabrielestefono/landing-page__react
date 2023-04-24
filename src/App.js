import Header from "./components/Header";
import Main from "./components/Main";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import Footer from "./components/Footer";
import './styles/style.css';

function App() {
  return (
    <>
      <Header/>
        <Main>
          <LeftSide/>
          <RightSide/>
        </Main>
        <Footer/>
    </>
  );
}

export default App;

const estilo = {

}
