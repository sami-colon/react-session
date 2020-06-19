import React, { useState } from "react";
import { render } from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { title: "My React App", isOpen: false };
//   }

//   componentDidMount() {
//     console.log("I am App component");
//   }

//   componentDidUpdate() {
//     console.log("I am App and I am updated");
//   }

//   handleClick = () => {
//     this.setState({ isOpen: !this.state.isOpen });
//   };

//   //  Component LifeCycle

//   render() {
//     console.log("I am inside render");
//     return (
//       <>
//         <Header title={this.state.title} />
//         <div className="h-screen">
//           <div className="flex justify-center">
//             <div className="w-1/2">
//               <button
//                 className="bg-pink-600 p-2 rounded shadow text-white"
//                 onClick={this.handleClick}
//               >
//                 Toggle Me
//               </button>
//               {this.state.isOpen ? <Content /> : null}
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </>
//     );
//   }
// }

function App() {
  const [title] = useState("My React App");
  const [isOpen, setisOpen] = useState(null);

  // React.useEffect(() => {
  //   console.log("I am App Component");
  // }, []); //componentDidMount

  // React.useEffect(() => {
  //   if (isOpen) {
  //     console.log("Div is showing");
  //   }
  // }, [isOpen]); // componentWillUpdate

  // React.useEffect(() => {
  //   console.log("Title is changed");
  // }, [title]); // componentWillUpdate

  return (
    <>
      <Header title={title} />
      <div className="h-screen">
        <div className="flex justify-center">
          <div className="w-1/2 text-center">
            <button
              className="bg-pink-600 p-2 rounded shadow text-white"
              onClick={() => setisOpen(!isOpen)}
            >
              Toggle Me
            </button>
            {isOpen ? <Content /> : null}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
