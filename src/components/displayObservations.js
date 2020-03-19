

import React from "react"
import { Grid, Paper, Typography, Link, Button, List, Card, CardContent, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, ListItem, ListItemText } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PatirntSummary from './patientSummary'

class DisplayObservations extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }

    render() {
        console.log(this.props.display.value)

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

        }
        return (
            <Grid container spacing={3}>
                {
                    this.props.display.value.map(
                        (item, index) => (
                            <Grid item xs={6} key={index}>
                                <Card style={cardStyles}>
                                    <CardContent>
                                        <List>
                                            <ListItem>
                                                <ListItemText>
                                                    {item["observation-category"]}
                                                </ListItemText>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText>
                                                    {item.code + ": "}
                                                </ListItemText>
                                            </ListItem>



                                            {
                                                item.valueQuantity &&
                                                <ListItem>
                                                    <ListItemText>
                                                        {item.valueQuantity.value + " " + item.valueQuantity.unit}
                                                    </ListItemText>
                                                </ListItem>
                                            }

                                            {
                                                item.valueCodeableConcept &&
                                                <ListItem>
                                                    <ListItemText>
                                                        {item.valueCodeableConcept.text}
                                                    </ListItemText>
                                                </ListItem>

                                            }

                                            {
                                                item.component &&
                                                <ListItem>
                                                    <ListItemText>
                                                        {item.component[0].valueQuantity.value + item.component[0].valueQuantity.unit + " - " + item.component[1].valueQuantity.value + item.component[1].valueQuantity.unit}
                                                    </ListItemText>
                                                </ListItem>
                                            }

                                            {
                                                item.patients &&
                                                <ExpansionPanel style={cardStyles}>
                                                    <ExpansionPanelSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"

                                                    >
                                                        <Typography variant="h6"> Patients </Typography>
                                                    </ExpansionPanelSummary>
                                                    <ExpansionPanelDetails >

                                                        {
                                                            item.patients.map(
                                                                (p, index) => (
                                                                    <PatirntSummary key={index} patient={p} />
                                                                )
                                                            )
                                                        }

                                                    </ExpansionPanelDetails>
                                                </ExpansionPanel>
                                            }


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

export default DisplayObservations