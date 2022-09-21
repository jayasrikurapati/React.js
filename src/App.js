import React,{Component} from 'react';
class MyApp extends Component{
  constructor(props){
    super(props);
    this.sayhello=this.sayhello.bind(this);
  }
  sayhello(){
    alert('hello');
  }
  render(){
    return(
      <div><button onClick={this.sayhello}>
        click
        </button>
        </div>
    );
  }
};
export default MyApp;