//import logo from "./logo.svg";
import "./App.css";
import Title from "./component/Title";
//import Home from "./pages/Home";
//import MyForm from "./component/LoginForm";
import Header from "./component/Header";
import RegistrationForm from "./component/RegistrationForm";

function App() {
  return (
    <div className="App">
      <Title />
      <Header />
      <RegistrationForm />
    </div>
  );
}

export default App;
