import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function Employee(data){
//   return <div>
//       <p>Name: {data.name}</p>
// <p>Salary: {data.salary}</p>
//   </div>;
// }

//A function can also be created using Arrow function. Lets modify the same code using Arrow function.

// const Employee=(data)=>{
// return <div>
//   <h2>Employee Details</h2>
//   <p>Name: {data.name}</p>
// <p>Salary: {data.salary}</p>
// <Department deptname={data.deptname} deptheadname={data.deptheadname}/>
// </div>;
// }

// const Department=(deptInfo)=>{
//   return<div>
//     <h2>Department Details</h2>
//     <p>Dept name is: {deptInfo.deptname}</p>
//     <p>Dept Head is: {deptInfo.deptheadname}</p>
//   </div>;
// }
// const employee=<Employee name="Shiv" salary="210001" deptname="IT" deptheadname="Rishikesh"/>

// ReactDOM.render(employee,document.getElementById('root'));
/////////////End of Function Components and Start Class Components Demo
class Employee extends React.Component{
  constructor(props){
    super(props)
    console.log(this.props);     
  }
  render(){
      return<div>
        <h2>Employee Details</h2>
        <p>
          <label>Name: <b>{this.props.name}</b></label>
          <br/>
          <label>Salary: <b>{this.props.salary}</b></label>          
        </p>
        <Department deptname={this.props.deptname} deptheadname={this.props.deptheadname}/>
      </div>;
  }
}

class Department extends React.Component{
  render(){
    return<div>
      <h2>Department Details</h2>
      <p>
  <label>Dept Name: <b>{this.props.deptname}</b></label><br/>
  <label>Dept Head: <b>{this.props.deptheadname}</b></label>
      </p>
    </div>;
  }
}

const employee1=<Employee name="Shiv" salary="210001" deptname="IT" deptheadname="Rishikesh"/>

ReactDOM.render(employee1,document.getElementById('root'));
/////////////End of Class Components and Start State in React Demo
class Employee1 extends React.Component{
  state={count:0};
  addEmployee=()=>{
    this.setState({count:this.state.count+1});
    //alert(this.count);
  }
  render(){
      return<div>
        <h2>Employee Details</h2>
        <button onClick={this.addEmployee}>Add Employee</button>
        <p>
  <label>Count is incremented by: <b>{this.state.count}</b></label>
        </p>
      </div>;
  }
}

const element=<Employee1 />
ReactDOM.render(element,document.getElementById('root'));

class CountCharacters extends React.Component{
  
  constructor(props){
    super(props);
    this.state={message:'',
    counter:10
    };
  }
  onMessageChange(text){
    this.setState({message:'Message has '+text.length+" Characters"
    });
  }

  render(){
    return<div>
    <p><label>Enter Message: <input type="text" onChange={e=>this.onMessageChange(e.target.value)}>
      </input></label></p>
    <p>
      <label>Number of characters are: <b>{this.state.message}</b></label>
    </p>
    <p>
                <label>{this.state.counter}</label>
            </p>
    </div>;
  }
}

const element1=<CountCharacters/>
ReactDOM.render(element1,document.getElementById('root'));