import React, { Component } from 'react';
import './App.css';
import Educt from './Components/education.js';
import Exp from './Components/experience.js';
import ImgName from './Components/img&name.js';
import BasicInf from './Components/infosbasic.js';
import image from './image.PNG';

const nomdesc ={
  name:"Iyadh Khalfallah", 
  desc:"Software engineering student", 
  pic:image
};
const GroupNom=[nomdesc];
const infba={ 
  titreadrs:"Address", adrs:"Lac2, Tunis", 
  titrephone:"Phone", phone:"+216 92 455 453", 
  titireemail:"E-mail", email:"iyadhkhalfallah@ieee.org", 
  titrelink:"LinkedIn", link:"linkedin.com/in/iyadh-khalfallah-486685154/"};
const GroupInfba=[infba];
const exper1={
  an_de:"2017-10",
  an_à:"",
  role:"Contestant",
  place:"IEEEXtreme, Tunisia",
  event:"24-Hour Programming Competition"
};
const exper2={
  an_de:"2017-12",
  an_à:"",
  role:"Trainer",
  place:"Hour of Code, Tunisia",
  event:"Training sessions to primary school students"
};
const exper3={
  an_de:"2018-01",
  an_à:"2018-04",
  role:"Trainer",
  place:"TUNIROBOTS",
  event:"Training sessions to 7-17 aged students in microcontroller programming"
};
const exper4={
  an_de:"2018-01",
  an_à:"",
  role:"Contestant",
  place:"INSAT Collegiate Programming Contest",
  event:"5-Hour Programming Competition, promoted to the Tunisian Collegiate Programming Contest(TCPC)"
};
const exper5={
  an_de:"2018-01",
  an_à:"",
  role:"Web Developer",
  place:"",
  event:"Started a journey in web development, created a website aiming to manage tasks in a hospital"
};
const exper6={
  an_de:"2018-07",
  an_à:"",
  role:"Contestant",
  place:"Tunisian Collegiate Programming Contest(TCPC)",
  event:"A national programming competition, ranked 30/100"
};
const exper7={
  an_de:"2018-07",
  an_à:"",
  role:"Intern",
  place:"BFI Group",
  event:"A website that manage bank clients using a Linear Discriminant Analysis algorithm, and J2EE frameworks and APIs"
};
const exper8={
  an_de:"2018-05",
  an_à:"2019-05",
  role:"Chairman",
  place:"",
  event:"IEEE Computer Sociely Chapter of INSAT Student Branch"
};
const exper9={
  an_de:"2018-05",
  an_à:"2019-05",
  role:"Community Manager",
  place:"",
  event:"ACM INSAT Collegiate Programming Contest"
};
const exper10={
  an_de:"2015-03",
  an_à:"present",
  role:"Freelance Guitarist",
  place:"",
  event:""
};
const Groupexper=[exper1, exper2, exper3, exper4, exper5, exper6, exper7, exper8, exper9, exper10];
const edu1={
  an_de:"2011-09",
  an_à:"2016-06",
  place:"Carthage Byrsa High School",
  event:"Graduated with honors"
};
const edu2={
  an_de:"2016-09",
  an_à:"2021-06",
  place:"National Institute of Applied Sciences and Technology (INSAT)",
  event:"Software engineering field"
};
const GroupEdu=[edu1, edu2];
class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="infoetname">
        <div className="namedescpic">
          {GroupNom.map((el,i)=>{
          return <ImgName 
          name={el.name} 
          desc={el.desc} 
          pic={el.pic}/>})}
        </div>
        <div>
          <h4 className="titreskills">
            Personal Info
          </h4>
          {GroupInfba.map((el,i)=>{
          return <BasicInf  
          titreadrs={el.titreadrs} 
          adrs={el.adrs} 
          titrephone={el.titrephone}
          phone={el.phone}
          titireemail={el.titireemail}
          email={el.email}
          titrelink={el.titrelink}
          link={el.link}/>})}
        </div>
        <div className="skills">
          <h4 className="titreskills">
            Skills
          </h4>
          <div className="les skills">
            <div>
              C/C++
            </div>
            <div className="spans">
              <span className="span">aaaaaaaaaaaaaaaaaaaaaaaa</span>
              <span className="span1">aaaaaa</span>
            </div>
            <div>
              JAVA
            </div>
            <div className="spans">
              <span className="span">aaaaaaaaaaaa</span>
              <span className="span1">aaaaaaaaaaaaaaaaaa</span>
            </div>
            <div>
              J2EE
            </div>
            <div className="spans">
              <span className="span">aaaaaaaaaaaa</span>
              <span className="span1">aaaaaaaaaaaaaaaaaa</span>
            </div>
            <div>
              HTML5
            </div>
            <div className="spans">
              <span className="span">aaaaaaaaaaaaaaaaaaaaaaaa</span>
              <span className="span1">aaaaaa</span>
            </div>
            <div>
              CSS3
            </div>
            <div className="spans">
              <span className="span">aaaaaaaaaaaaaaaaa</span>
              <span className="span1">aaaaaaaaaaaaa</span>
            </div>
            <div>
              Javascript
            </div>
            <div className="spans">
              <span className="span">aaaaaaaaaaaaaaaaa</span>
              <span className="span1">aaaaaaaaaaaaa</span>
            </div>
            <div>
              PHP5
            </div>
            <div className="spans">
              <span className="span">aaaaaaaaaaaa</span>
              <span className="span1">aaaaaaaaaaaaaaaaaa</span>
            </div>
            <div>
              SQL
            </div>
            <div className="spans">
              <span className="span">aaaaaaaaaaaaaaaaaaaa</span>
              <span className="span1">aaaaaaaaaa</span>
            </div>
            <div>
              Symphony
            </div>
            <div className="spans">
              <span className="span">aaaaaaaaaaaa</span>
              <span className="span1">aaaaaaaaaaaaaaaaaa</span>
            </div>
            <div>
              Hibernate
            </div>
            <div className="spans">
              <span className="span">aaaaaaaaaaaa</span>
              <span className="span1">aaaaaaaaaaaaaaaaaa</span>
            </div>
            <div>
              LDA (Linear Discriminant Analysis)
            </div>
            <div className="spans">
              <span className="span">aaaaaaaaaaaa</span>
              <span className="span1">aaaaaaaaaaaaaaaaaa</span>
            </div>
            </div>
        </div>
        </div>
        <div className="experetedu">
        <div className="quality">
          <h6>
            Ambitious, sociable and creative student in 2nd year of software engineering, aiming to build a solid technical profile in a professional envoronment.
          </h6>
          <h6>
            Active member in both Institute of Electrical and Electronics Engineers Computer. 
          </h6>
          <h6>
          Society Chapter and ACM club (Problem Solving) of the National Institute of Applied Sciences and Technology.
          </h6>
          <h6>
            Organizational member in INSAT radio club.
          </h6>
        </div>
        <div>
        <hr className="hr"></hr>
          <h3 className="experience">
            Experience
          </h3>
          <hr className="hr"></hr>
         {Groupexper.map((el,i)=>{
          return <Exp 
          an_de={el.an_de} 
          an_à={el.an_à} 
          role={el.role} 
          place={el.place} 
          event={el.event}/>})}
        </div>
        <div>
        <hr className="hr"></hr>
          <h3 className="experience">
            Education
          </h3>
          <hr className="hr"></hr>
          {GroupEdu.map((el,i)=>{
          return <Educt 
          an_de={el.an_de} 
          an_à={el.an_à} 
          place={el.place} 
          event={el.event}/>})}
        </div>  
        </div>
      </div>
    );
  }
}

export default App;
