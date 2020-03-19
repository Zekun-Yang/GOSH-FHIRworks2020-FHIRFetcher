import React from "react"
import { Grid, Paper, Typography, Link, Button, Card, CardContent, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import Choices from '../components/Choices'
import DisplayPatients from '../components/displayPatients'
import DisplayObservations from '../components/displayObservations'
import CircularProgress from '@material-ui/core/CircularProgress';





class Main extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            isSubmit: false,
            display: null,

        }
        this.setDisplay = this.setDisplay.bind(this)
        this.setDataTye = this.setDataTye.bind(this)
        this.setSubmit = this.setSubmit.bind(this)

    }

    setSubmit(){
        this.setState(
            {
                isSubmit:true
            }
        )
    }



    setDisplay(data) {
        this.setState(
            {
                display: data,
            }
        )
    }

    setDataTye(type) {
        this.setState(
            {
                dataType: type,
                isSubmit: false
            }
        )
    }



    render() {
        console.log(this.state.isSubmit)
        console.log(this.state.display)
        if (this.state.isSubmit && this.state.display === null){
            console.log("HJHJ")
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
                            <Choices setDisplay={this.setDisplay} setDataTye={this.setDataTye} setSubmit={this.setSubmit}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={9} >

                        {
                            this.state.isSubmit && this.state.display === null && <CircularProgress/>
                        }

                        {this.state.isSubmit && this.state.display && this.state.dataType === "Patients" && <DisplayPatients display={this.state.display} />}

                        {this.state.isSubmit && this.state.display && this.state.dataType === "Observations" && <DisplayObservations display={this.state.display} />}

                    </Grid>
                </Grid>
            </Paper>

        )
    }


}
export default Main