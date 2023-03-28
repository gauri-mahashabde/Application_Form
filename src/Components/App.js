import "./App.css";
import Addinfo from "./Addinfo";
import Address from "./Address";
import Button from "./Button";
import City from "./City";
import Country from "./Country";
import Cv from "./Cv";
import Designation from "./Designation";
import Email from "./Email";
import Fname from "./Fname";
import Gender from "./Gender";
import Header from "./Header";
import Lname from "./Lname";
import Phone from "./Phone";
import Courses from "./Courses";

function App() {
  return (
    <div className="App">
      <Header />
      <Fname />
      <Lname />
      <Email />
      <Phone />
      <Gender />
      <Country />
      <City />
      <Address />
      <Designation />
      <Courses />
      <Addinfo />
      <Cv />
      <Button />
      <Button />
    </div>
  );
}

export default App;
