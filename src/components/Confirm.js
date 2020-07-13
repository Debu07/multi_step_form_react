import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { RaisedButton } from 'material-ui'

export class Confirm extends Component {
    continue =e=>{
        e.preventDefault();
        this.props.nextStep();
    }
    back=e=>{
        e.preventDefault();
        this.props.previousStep();
    }
    render() {
        return (
            <MuiThemeProvider>
                <AppBar title="Confirmation Page"/>
                <h1> Do you Want To Submit Your Details??
                </h1>
                <RaisedButton
                style={style.button}
                primary={true}
                onClick={this.continue}
                label="Continue"
                 />
                 <RaisedButton
                 style={style.button}
                 primary={false}
                 onClick={this.back}
                  label="Back"/>
            </MuiThemeProvider>
        
        )
    }
}

const style={
    button:{
        margin:15
    }
}

export default Confirm