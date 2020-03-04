import React from "react"
import { Grid, Paper, Typography, Link, Button } from '@material-ui/core';
import Choices from '../components/Choices'



class Main extends React.Component {


    constructor(props) {
        super(props)
        this.state = {

        }

        this.handleClick = this.handleClick.bind(this)
        this.setChoices = this.setChoices.bind(this)

    }

    handleClick(){
        
    }

    setChoices(data){
        this.setState(
            {
                choices: data,
            }
        )

    }

    componentDidUpdate(){
        

    }


    render() {

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

        return (
            <Paper style={paperStyles}>
                <Grid container>
                    <Grid item xs={3}>
                        <Paper style={paperStyles_Choices}>
                            <Choices setChoices={this.setChoices}/>
                            <br />
                            
                        </Paper>
                    </Grid>
                    <Grid item xs={9}>

                    </Grid>
                </Grid>
            </Paper>

        )
    }


}
export default Main