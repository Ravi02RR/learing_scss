
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "../src/styles/footer.scss"
import "../src/styles/contact.scss"

import "../src/styles/mediaquery.scss"
import Footer from "./components/Footer";

function App() {


  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  )
}

export default App
