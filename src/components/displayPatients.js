import React from "react"
import { Grid, Paper, Typography, Link, Button, List, Card, CardContent, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, ListItem, ListItemText } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class DisplayPatients extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }

    render() {


        const cardStyles = {
            minWidth: 275,
            padding: "10px"
        }
        return (
            <Grid container spacing={3}>
                {
                    this.props.display.value.map(
                        (item) => (
                            <Grid item xs={6} key={item.id}>
                                <Card style={cardStyles} variant="outlined">
                                    <CardContent>
                                        <List>
                                            <ListItem>
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
                                            </ListItem>


                                            <ListItem>
                                                <ListItemText>
                                                    {"maritalStatus: " + item.maritalStatus}
                                                </ListItemText>
                                            </ListItem>

                                            <ListItem>
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
                                            </ListItem>


                                            <ListItem>
                                                <Typography variant="h6">
                                                    {"gender: " + item.gender}
                                                </Typography>
                                            </ListItem>

                                            <ListItem>
                                                <Typography variant="h6">
                                                    {"birthDate: " + item.birthDate}
                                                </Typography>
                                            </ListItem>

                                            <ListItem>
                                                <ExpansionPanel style={cardStyles}>
                                                    <ExpansionPanelSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                    >
                                                        <Typography variant="h6"> identifier </Typography>
                                                    </ExpansionPanelSummary>
                                                    <ExpansionPanelDetails>
                                                        <List>
                                                            {item.identifier[0] &&
                                                                <ListItem>
                                                                    <ListItemText>
                                                                        Medical Record Number: {item.identifier[0]["Medical Record Number"]}
                                                                    </ListItemText>
                                                                </ListItem>}

                                                            {item.identifier[1] &&
                                                                <ListItem>
                                                                    <ListItemText>
                                                                        Social Security Number: {item.identifier[1]["Social Security Number"]}
                                                                    </ListItemText>
                                                                </ListItem>}

                                                            {item.identifier[2] &&
                                                                <ListItem>
                                                                    <ListItemText>
                                                                        Driver's License: {item.identifier[2]["Driver's License"]}
                                                                    </ListItemText>
                                                                </ListItem>}

                                                            {item.identifier[3] &&
                                                                <ListItem>
                                                                    <ListItemText>
                                                                        Passport Number: {item.identifier[3]["Passport Number"]}
                                                                    </ListItemText>
                                                                </ListItem>}
                                                        </List>




                                                    </ExpansionPanelDetails>
                                                </ExpansionPanel>
                                            </ListItem>

                                            <ListItem>
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
                                            </ListItem>

                                            <ListItem>
                                                <Typography variant="h6">Language: {item.communication[0].language}</Typography>

                                            </ListItem>
                                            <ListItem>
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
                                                                    if (ob.resource.valueQuantity) {
                                                                        display = display + ob.resource.valueQuantity.value + " " + ob.resource.valueQuantity.unit
                                                                    } else if (ob.resource.valueCodeableConcept) {
                                                                        display = display + ob.resource.valueCodeableConcept.text
                                                                    } else if (ob.resource.component) {
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
                                            </ListItem>

                                        </List>
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