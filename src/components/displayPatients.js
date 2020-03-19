import React from "react"
import { Grid, Paper, Typography, Link, Button,List, Card, CardContent, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, ListItem, ListItemText } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class DisplayPatients extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

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

        const cardStyles = {
            minWidth: 275,
            backgroundColor: "rgb(241, 241, 241)",
            padding: "10px"
        }
        return (
            <Grid container spacing={3}>
                {
                    this.props.display.value.map(
                        (item) => (
                            <Grid item xs={6} key={item.id}>
                                <Card style={cardStyles}>
                                    <CardContent>

                                        {
                                            item.name.length <= 1 ?
                                                <Typography variant="h5">
                                                    {item.name}
                                                </Typography> :

                                                <ExpansionPanel style={cardStyles}>
                                                    <ExpansionPanelSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                    >
                                                        <Typography variant="h5">{item.name[0]}</Typography>
                                                    </ExpansionPanelSummary>
                                                    <ExpansionPanelDetails>
                                                        <Typography>
                                                            {item.name.map(
                                                                (name, index) => {
                                                                    if (index !== 0) {
                                                                        return name
                                                                    }
                                                                }
                                                            )}
                                                        </Typography>
                                                    </ExpansionPanelDetails>
                                                </ExpansionPanel>

                                        }

                                        <br />
                                        <br />

                                        <Typography variant="h6">
                                            {"maritalStatus: " + item.maritalStatus}
                                        </Typography>

                                        {
                                            item.telecom.length <= 1 ?
                                                <Typography variant="h6">
                                                    {"telecom: " + item.telecom[0].use + " " + item.telecom[0].system + ": " + item.telecom[0].value}
                                                </Typography> :

                                                <ExpansionPanel style={cardStyles}>
                                                    <ExpansionPanelSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                    >
                                                        <Typography variant="h5">{"telecoms: " + item.telecom[0].use + " " + item.telecom[0].system + ": " + item.telecom[0].value}</Typography>
                                                    </ExpansionPanelSummary>
                                                    <ExpansionPanelDetails>
                                                        <Typography>
                                                            {item.telecom.map(
                                                                (telecom, index) => {
                                                                    if (index !== 0) {
                                                                        return telecom
                                                                    }
                                                                }
                                                            )}
                                                        </Typography>
                                                    </ExpansionPanelDetails>
                                                </ExpansionPanel>


                                        }

                                        <Typography variant="h6">
                                            {"gender: " + item.gender}
                                        </Typography>

                                        <Typography variant="h6">
                                            {"birthDate: " + item.birthDate}
                                        </Typography>


                                        <ExpansionPanel style={cardStyles}>
                                            <ExpansionPanelSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography variant="h6"> identifier </Typography>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>

                                                Medical Record Number: {item.identifier[0]["Medical Record Number"]} <br />
                                                            Social Security Number: {item.identifier[1]["Social Security Number"]} <br />

                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>

                                        {
                                            item.address.length <= 1 ?
                                                <Typography variant="h6">
                                                    {"Addreess: " + item.address[0].city + ", " + item.address[0].country + ", " + item.address[0].line + ", " + item.address[0].postalCode + ", " + item.address[0].state}
                                                </Typography> :

                                                <ExpansionPanel style={cardStyles}>
                                                    <ExpansionPanelSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                    >
                                                        <Typography variant="h6">{"Addreess: " + item.address[0].city + ", " + item.address[0].country + ", " + item.address[0].line + ", " + item.address[0].postalCode + ", " + item.address[0].state}</Typography>
                                                    </ExpansionPanelSummary>
                                                    <ExpansionPanelDetails>
                                                        <Typography>
                                                            {item.address.map(
                                                                (address, index) => {
                                                                    if (index !== 0) {
                                                                        return "Addreess: " + address.city + ", " + address.country + ", " + address.line + ", " + address.postalCode + ", " + address.state
                                                                    }
                                                                }
                                                            )}
                                                        </Typography>
                                                    </ExpansionPanelDetails>
                                                </ExpansionPanel>
                                        }


                                        <Typography variant="h6">Language: {item.communication[0].language}</Typography>

                                        <br />
                                        <br />

                                        <ExpansionPanel style={cardStyles}>
                                            <ExpansionPanelSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography variant="h6">Observations</Typography>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                <List>
                                                    {item.observation.map(
                                                        (ob, index) => {
                                                            let display = ob.resource.code.text + ": "
                                                            if (ob.resource.valueQuantity){
                                                                display = display + ob.resource.valueQuantity.value + " " + ob.resource.valueQuantity.unit
                                                            }else if(ob.resource.valueCodeableConcept){
                                                                display = display + ob.resource.valueCodeableConcept.text
                                                            }else if(ob.resource.component){
                                                                display = display + ob.resource.component[0].valueQuantity.value + ob.resource.component[0].valueQuantity.unit + " - " + ob.resource.component[1].valueQuantity.value + ob.resource.component[1].valueQuantity.unit
                                                            }
                                                            return (
                                                                <ListItem key={index}>
                                                                    <ListItemText>
                                                                        {display}
                                                                    </ListItemText>
                                                                </ListItem>


                                                            )

                                                        }
                                                    )}
                                                </List>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>






                                    </CardContent>

                                </Card>
                            </Grid>

                        )
                    )

                }
            </Grid>

        )
    }

}

export default DisplayPatients