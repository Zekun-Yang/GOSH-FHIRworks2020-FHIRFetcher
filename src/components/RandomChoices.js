import React from "react"

import Select from 'react-select';
import { Typography } from "@material-ui/core";

class RandomChoices extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }


    render() {
        return (
            <div>
                <Typography variant="subtitle1" display="block" color="textPrimary" align="left">
                    How many instances ?
                </Typography>
                <Select defaultValue={{ value: "100", label: "100" }} options={[{ value: "1", label: "1" },{ value: "100", label: "100" }, { value: "500", label: "500" }, { value: "1000", label: "1000" }]} label="Single select" />
                <br/>

            </div>
        )
    }

}

export default RandomChoices