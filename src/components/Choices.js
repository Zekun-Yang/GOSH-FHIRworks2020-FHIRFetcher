import React from "react"

import Select from 'react-select';
import { Typography, Button } from "@material-ui/core";
import RandomChoices from './RandomChoices'
import axios from 'axios'

class Choices extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataType: { value: "Patients", label: "Patients" },
            selectType: { value: "All", label: "All" },

        }

        this.handleSelectType = this.handleSelectType.bind(this)
        this.handleDataType = this.handleDataType.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlerandomChoices = this.handlerandomChoices.bind(this)
    }

    handleSelectType(e) {
        this.setState(
            {
                selectType: e,
                
            }
        )
       
    }

    handleDataType(e) {
        this.setState(
            {
                dataType: e, 
            }
        )
        
        this.props.setDataTye(e.value)
    }

    handleSubmit() {
        this.props.setDisplay(null)
        this.props.setSubmit()
        if (this.state.dataType.value === "Patients" && this.state.selectType.value === "All") {
            axios.get('api/patients/').then(
                res => (
                    this.props.setDisplay(res.data)
                )
            )

        }

        if (this.state.dataType.value === "Patients" && this.state.selectType.value === "Random") {
            axios.get('api/patients/' + this.state.numOfInstance).then(
                res => (
                    this.props.setDisplay(res.data)
                )
            )

        }

        if (this.state.dataType.value === "Observations" && this.state.selectType.value === "All") {
            axios.get('api/observations/').then(
                res => (
                    this.props.setDisplay(res.data)
                )
            )
        }

        if (this.state.dataType.value === "Observations" && this.state.selectType.value === "Random") {
            axios.get('api/observations/' + this.state.numOfInstance).then(
                res => (
                    this.props.setDisplay(res.data)
                )
            )

        }

        

    }

    handlerandomChoices(num){
        this.setState(
            {
                numOfInstance:num
            }
        )
        
        
    }


    render() {
        return (
            <div>
                <Typography variant="h6" display="block" color="textPrimary" align="left">
                    Data Type
                </Typography>
                <Select options={[{ value: "Patients", label: "Patients" }, { value: "Observations", label: "Observations" }]} label="Single select" onChange={this.handleDataType} />
                <br />
                <Typography variant="h6" display="block" color="textPrimary" align="left">
                    Select Type
                </Typography>
                <Select options={[{ value: "All", label: "All" }, { value: "Random", label: "Random" }, { value: "Specific Info", label: "Specific Info" }]} label="Single select" onChange={this.handleSelectType} />
                <br />

                {
                    this.state.selectType.value === "Random" && <RandomChoices handlerandomChoices={this.handlerandomChoices}/>
                }

                <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                    Get
                </Button>

            </div>
        )
    }

}

export default Choices