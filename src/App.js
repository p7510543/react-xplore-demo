import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Index from "./pages/index";

function App() {
  return (
    <div id="wrap">
      <Header/>
      <Index/>
      <Footer/>
    </div>
  );
}

export default App;
