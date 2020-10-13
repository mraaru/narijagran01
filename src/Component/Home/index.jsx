import React, { Component } from "react";
import Top from "../../Pages/Component/Layout/Top";
import Menu from "../../Pages/Component/Layout/Menu";
import Footer from "../../Pages/Component/Layout/Footer";
import Homexx from "../../Pages/Component/Container/Homex/Homexx";
import Newsx from "../../Pages/Component/Container/News/Common-news-a";
export class Home extends Component {
  render() {
    return (
      <>
        <br />
        <br />
        <br />
        <Homexx />
        <Newsx />
        <Top />
        <Footer />
        <Menu />
      </>
    );
  }
}

export default Home;
