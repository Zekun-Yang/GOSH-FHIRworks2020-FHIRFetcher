import React from "react"
import { Grid, Paper, Typography, Link, Button, List, Card, CardContent, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, ListItem, ListItemText } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class PatientSummary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }

    render() {
        return (
            <List>
                <ListItem>
                    <ListItemText>
                        {this.props.patient.id}
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        {this.props.patient.name}
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        {this.props.patient.birthDate}
                    </ListItemText>
                </ListItem>
            </List>

        )
    }

}

export default PatientSummary