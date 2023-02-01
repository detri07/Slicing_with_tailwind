import Header from "./component/header";
import Spoilers from "./component/spoilers";
import Navbar from "./component/navbar";

function App() {
  return (
    <div className='container bg-[#E4F2FF] h-[812px] w-[375px] mx-auto'>
      <Header />
      {/* <Spoilers/> */}
      <Navbar/>
    </div>
  );
}

export default App;