import React, {Component} from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        
        this.state = {
                      fname: "",
                      lname: "",
                      email: "",
                      gender: "Male",
                      phonenum: ""
                     }
        
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(
        "Name:", this.state.fname, this.state.lname + "\n" + 
        "Eamil:", this.state.email +"\n"+
        "Gender:", this.state.gender +"\n"+
        "Number:", this.state.phonenum    
        );
        this.setState({
                      fname: "",
                      lname: "",
                      email: "",
                      gender: "Male",
                      phonenum: ""
                     });
        
    }
    
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
        
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="fname" value={this.state.fname} onChange={this.handleChange} placeholder=" please enter first name"/>
                <input type="text" name="lname" value={this.state.lname} onChange={this.handleChange} placeholder=" please enter last name"/>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder=" please enter email"/>
                <select name="gender" value={this.state.gender} onChange={this.handleChange}>
                    <option value="male" >Male</option>
                    <option value="female" >Female</option>
                </select>
                <input type="phone" name="phonenum" value={this.state.phonenum} onChange={this.handleChange} placeholder=" please enter phone number"/>
                <input type="submit"  value="Submit"/>
            </form>
        );
    }


}
    
export default Form;