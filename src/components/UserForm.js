import React, { Component } from 'react'
import UserDetailsForm from './UserDetailsForm'
import PersonalDetailsForm from './PersonalDetailsForm'
import Success from './Success';
import Confirm from './Confirm';

export class UserForm extends Component {
    state={
        step:1,
        firstName:'',
        lastName:'',
        email:'',
        occupation:'',
        city:'',
        bio:''
        }
        //proceed to next step
        nextStep =()=>{
            const {step } =this.state; //destructuring
            this.setState({
                step:step+1
            });
        }
        // go back to previous step
        previousStep=()=>{
            const {step } =this.state; //destructuring
            this.setState({
                step:step-1
            });
        }
        //handle fields change 
        handleChange=input=>e=>{
            this.setState({[input]:e.target.value});
        }

    render() {
        const{step}=this.state;
        const{firstName,lastName,email,occupation,city,bio}=this.state;

        const values={ firstName,lastName,email,occupation,city,bio }
        switch(step){
            case 1:
                return(
                    <UserDetailsForm 
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}>

                    </UserDetailsForm>     
                )
            case 2:
                return(
                    <PersonalDetailsForm
                    nextStep={this.nextStep}
                    previousStep={this.previousStep}
                    handleChange={this.handleChange}
                    values={values}>

                    </PersonalDetailsForm>
                )
            case 3:
                return(
                    <Confirm
                    nextStep={this.nextStep}
                    previousStep={this.previousStep}
                    handleChange={this.handleChange}
                    values={values}/>
                )
            case 4:
                return(
                    <Success></Success>
                )
        }
    }
}

export default UserForm
