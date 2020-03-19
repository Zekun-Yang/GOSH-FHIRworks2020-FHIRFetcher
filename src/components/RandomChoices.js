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
                <Select  options={[{ value: 1, label: "1" },{ value: 2, label: "2" },{ value: 3, label: "3" },{ value: 4, label: "4" },{ value: 5, label: "5" },{ value: 100, label: "100" }, { value: 500, label: "500" }, { value: 1000, label: "1000" }]} label="Single select" onChange={e => this.props.handlerandomChoices(e.value)}/>
                <br/>

            </div>
        )
    }

}

export default RandomChoices