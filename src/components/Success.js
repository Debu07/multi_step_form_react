import React, { Component } from 'react'
import { MuiThemeProvider } from 'material-ui/styles'
import { AppBar } from 'material-ui'

export class Success extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <AppBar title="SUCCESS"/>
                <h2> Your Details Have Been Successfully Submitted. </h2>
                </MuiThemeProvider>
        )
    }
}

export default Success
