import React from 'react';
import './App.css';
import Index from "./component/header";
import Busines from "./component/busines/busines";
import Service from "./component/service/service";
import Project from "./component/project/project";
import Team from "./component/team/team";
import Search from "./component/search/search";
import Footer from "./component/footer/footer";

function App() {
  return (
    <div className="App">
<div className="container">
  <Index/>
    <Busines/>
    <Service/>
  <Project/>
 <Team/>
    <Search/>
    <Footer/>
</div>
    </div>
  );
}

export default App;
