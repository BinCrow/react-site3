import React, { useEffect, useState } from "react"
import Header from "../layout/Header"
import Title from "../layout/Title"
import Contact from "../layout/Contact"
import Footer from "../layout/Footer"
import Contents from "../layout/Contents"
import PortCont from "../includes/PortCont"
import axios from "axios";

// 컴포넌트 (함수 / 클래스)
// 함수형(클래스의 장점을 합쳐 만든것이 리액트 훅)

// 함수 (실행문)
// 클래스(실행문)

// function Portfolio() {
//   return (
//     <>
//       <Header />
//       <Contents>
//         <PortCont />
//       </Contents>
//       <Footer />
//     </>
//   )
// }

class Portfolio extends React.Component {
  state = {
    ports: [],
  };

  getPorts = async () => {
    //배열구조 분해 할당
    const {
      data:{
        data:{ports}
      },
    } = await axios.get( //패치함수
      "https://webstoryboy.github.io/react5001/src/assets/json/portfolio.json"
    );
    //console.log(data.data.data.ports);
    this.setState({ports})
  }

  componentDidMount() {
    this.getPorts()
  }

  render() {
    //객체구조 분해할당
    const {ports} = this.state;
    return (
      <>
        <Header />
        <Contents>
          <PortCont ports={ports} />
        </Contents>
        <Footer />
      </>
    )
  }
}


// function Portfolio() {
//   // 리액트훅
//   const [ports, setPorts] = useState([]);

//   useEffect(() => {
//     const requsetOption = {
//       method:"GET",
//       redirect: "follow",
//     };
//     fetch (
//       "https://webstoryboy.github.io/react5001/src/assets/json/portfolio.json",
//       requsetOption
//     )
//     .then((response) => response.json())
//     // .then((result) => console.log(result.data.ports))
//     .then((result) => setPorts(result.data.ports))
//     .then((error)=>console.log("error", error));
//   },[]);

//   return (
//     <>
//       <Header />
//       <Contents>
//         <Title title={["Portfolio", "site"]}/>
//         <PortCont ports={ports}/>
//         <Contact />
//       </Contents>
//       <Footer />
//     </>
//   )
// }

export default Portfolio
