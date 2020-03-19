import React from "react"
import { Grid, Paper, Typography, Link, Button, Card, CardContent, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import Choices from '../components/Choices'
import DisplayPatients from '../components/displayPatients'





class Main extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            isSubmit: false,
            display: { value: [] }

        }
        this.setDisplay = this.setDisplay.bind(this)

    }



    setDisplay(data) {
        this.setState(
            {
                display: data,
                isSubmit: true
            }
        )
    }



    render() {
        console.log(this.state.display.value)

        if (this.state.isSubmit) {
            console.log(this.state.display)
        }

        const paperStyles_Choices = {
            margin: "20px",
            padding: "20px",
            borderRadius: 5,
            backgroundColor: "rgb(241, 241, 241)"
        }
        const paperStyles = {
            margin: "30px",
            padding: "20px",
            borderRadius: 10,
        }

        const cardStyles = {
            minWidth: 275,
            backgroundColor: "rgb(241, 241, 241)",
            padding: "10px"
        }

        return (
            <Paper style={paperStyles}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Paper style={paperStyles_Choices}>
                            <Choices setDisplay={this.setDisplay} />
                            <br />

                        </Paper>
                    </Grid>
                    <Grid item xs={9}>

                        {this.state.isSubmit && <DisplayPatients display={this.state.display}></DisplayPatients>} 

                    </Grid>
                </Grid>
            </Paper>

        )
    }


}
export default Main