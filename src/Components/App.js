import "./App.css";
//import Addinfo from "./Addinfo";
//import Address from "./Address";
//import Reset from "./Reset";
//import City from "./City";
import Country from "./Country";
//import Cv from "./Cv";
//import Designation from "./Designation";
import Fname from "./Fname";
//import Gender from "./Gender";
import Header from "./Header";
import Phone from "./Phone";
//import Courses from "./Courses";
import Submit from "./Submit";

function App() {
  function handlesubmit(){
    console.log("form sunmitted")
  }
  return (
    <div className="container">
      <div className="main  ">
       <Header/>
<form onSubmit={handlesubmit}>
        <Fname />
        <Phone />
        <Country/>
        <Submit/>
        </form>
       
      </div>
    </div>
  );
}

export default App;
