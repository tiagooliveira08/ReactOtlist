import React, { Component } from 'react';
import AppContent from "./components/appcontent";
class App extends Component {
  constructor(){
    super();
    this.state = {
      password: null,
      checkSixCaracters:["ball gray",0],
      checkOneValue: ["ball gray",0],
      checkOneUppercase: ["ball gray",0],
      barOne: "bar gray",
      barTwo: "bar gray",
      BarThree: "bar gray",
      borderPassword: "border-default"
    }
    this.handlechange = this.handlechange.bind(this);
   
  }
  render() {
    return (
      <div className="App">
          <AppContent 
            handlechange={this.handlechange}
            classvalue={this.state.classValue}
            checksixcaracters={this.state.checkSixCaracters[0]}
            checkonevalue={this.state.checkOneValue[0]}
            checkoneuppercase={this.state.checkOneUppercase[0]}
            barone={this.state.barOne}
            bartwo={this.state.barTwo}
            barthree={this.state.BarThree}
            classborderpass={this.state.borderPassword}
            />
      </div>
    );
  }
  
   handlechange(e){    
        this.checkonevalue(e)
        this.checkoneuppercase(e)
        this.checksixcaracters(e)
          setTimeout(() => {
            this.accepts();
          }, 100);
     
  }


  checksixcaracters(e){
    console.log("FUNCAO CHECKAR ",this.state.checkSixCaracters)
    let regexOne = new RegExp("(?:\\w|\\s){5,}.+");
    let verificador = regexOne.test(e.target.value);
      if(verificador){
        return this.setState({checkSixCaracters:["ball green",1]})
      }

      if(e.target.value === "")
        return this.setState({checkSixCaracters: ["ball gray",0]})

            return this.setState({checkSixCaracters: ["ball red",0] })
      
    }


    

    checkonevalue(e){
      let regexTwo = new RegExp("\\d");
      let verificador = regexTwo.test(e.target.value);
      if(verificador)
      return this.setState({checkOneValue:["ball green",1]})

    if(e.target.value === "")
      return this.setState({checkOneValue: ["ball gray",0]})

          return this.setState({checkOneValue: ["ball red",0] })
      }

      checkoneuppercase(e){
        let regexthree = new RegExp("[A-Z]");
        let verificador = regexthree.test(e.target.value);
          if(verificador)
            return this.setState({checkOneUppercase:["ball green",1]},console.log("setou uppercase",this.state.checkOneUppercase[1]))

          if(e.target.value === "")
            return this.setState({checkOneUppercase: ["ball gray",0]})

              return this.setState({checkOneUppercase: ["ball red",0] })
        }
      

      accepts(){
          console.log("uppercase",this.state.checkOneUppercase[1]);
          if(this.state.checkSixCaracters[1] === 1 || this.state.checkOneValue[1] === 1 || this.state.checkOneUppercase[1] === 1){
             this.setState({barOne: "bar red",borderPassword:"border-red"},);
             console.log("acendeu barra",this.state.checkOneUppercase[1]);
          }
          else{
             this.setState({barOne: "bar gray",borderPassword:"border-default"});
          }

          if(this.state.checkSixCaracters[1] === 1 && this.state.checkOneValue[1] === 1 || this.state.checkSixCaracters[1] === 1 && this.state.checkOneUppercase[1] === 1
              || this.state.checkOneUppercase[1] === 1 &&  this.state.checkOneValue[1] === 1)
            {
              this.setState({barOne: "bar yellow",barTwo:"bar yellow"});
            }
            else{
              this.setState({barTwo:"bar gray"});
            }

            if(this.state.checkSixCaracters[1] === 1 && this.state.checkOneValue[1] === 1 && this.state.checkOneUppercase[1] === 1){
              this.setState({barOne: "bar green",barTwo:"bar green",BarThree: "bar green",borderPassword:"border-green"});
            }
            else{
              this.setState({BarThree: "bar gray"});
            }

          
      }
      
    





}


  



export default App;
