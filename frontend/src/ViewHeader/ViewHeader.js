import React from 'react'
import { Location } from './Location'
import './ViewHeader.css'
import {Dropdown} from "./Dropdown";

export class ViewHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            yearList: [
                {
                    id: 0,
                    title: '1971'
                },
                {
                    id: 1,
                    title: '1972'
                },
                {
                    id: 2,
                    title: '1973'
                }
            ]
        }
    }

    render() {
        return (
            <div className="view-header">
                <Location />
                <Dropdown title="select year" list={this.state.yearList}/>
            </div>
        )
    }
}