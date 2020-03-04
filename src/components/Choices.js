import React from "react"

import Select from 'react-select';
import { Typography, Button } from "@material-ui/core";
import RandomChoices from './RandomChoices'

class Choices extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectType: { value: "All", label: "All" }

        }

        this.handleSelectType = this.handleSelectType.bind(this)


    }

    handleSelectType(e) {
        this.setState(
            {
                selectType: e
            }
        )
    }


    render() {
        return (
            <div>
                <Typography variant="h6" display="block" color="textPrimary" align="left">
                    Data Type
                </Typography>
                <Select defaultValue={{ value: "Patients", label: "Patients" }} options={[{ value: "Patients", label: "Patients" }, { value: "Observations", label: "Observations" }]} label="Single select" />
                <br />
                <Typography variant="h6" display="block" color="textPrimary" align="left">
                    Select Type
                </Typography>
                <Select defaultValue={this.state.selectType} options={[{ value: "All", label: "All" }, { value: "Random", label: "Random" }, { value: "Specific Info", label: "Specific Info" }]} label="Single select" onChange={this.handleSelectType} />
                <br />

                {
                    this.state.selectType.value === "Random" && <RandomChoices />
                }

                <Button variant="contained" color="primary" onClick={()=>{this.props.setChoices("Hello")}}>
                    Get
                </Button>

            </div>
        )
    }

}

export default Choices