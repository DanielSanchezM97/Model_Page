import "./App.scss";
import React from "react";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import AboutMe from "./Components/AboutMe";
import MyWork from "./Components/MyWork";
import Footer from "./Components/Footer";
import "./styles/NavBar.scss";
import "./styles/HeroSection.scss";
import "./styles/MyWork.scss";
import "./styles/AboutMe.scss";
import "./styles/Footer.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <HeroSection />
        <MyWork />
        <AboutMe />
        <Footer />
      </div>
    );
  }
}
export default App;

// <Router>
//  <button className="btn btn-primary m-2 ">
//    <Link to="Post" className="text-light text-decoration-none">
//      Post
//     </Link>
//   </button>
//
//   <button className="btn btn-primary m-2">
//     <Link to="TestCP" className="text-light text-decoration-none">
//       Image Test
//     </Link>
//   </button>
//   <Routes>
//     <Route path="/TestCP" element={<TestCP />} />
//     <Route path="/Post" element={<Dogs />}></Route>
//   </Routes>
// </Router>;
