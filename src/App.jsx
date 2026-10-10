import Student from "./components/Student";
import PropsExample from "./components/PropsExample";
import Destructuring from "./components/Destructuring";
import Counter from "./components/UseState";
import Input from "./components/Input";
import Login from "./components/Login_Form";
import UseEffectBasic from "./components/UseEffectbasic";
import UseEffectAPI from "./components/UseEffectAPI";
import FocusInput from "./components/UseRef";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
    <div>
      <h1>Welcome to React Class</h1>
      <Student />
      <PropsExample name="Shakeera" address="dfbdfg" age="19" />
      <Destructuring name="Shreya" address="fjsdgfshjg" age="20" />
      <Counter />
      <Input />
      <UseEffectBasic />
      <Login />
      <UseEffectAPI />
      {/* <FocusInput /> */}

      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>


    </div>
  )
}

export default App;