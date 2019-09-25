import React from 'react'
import FontAwesome from 'react-fontawesome'

export class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            dropdownLabel: this.props.title
        }
    }

    handleClick() {
        this.setState(previousState => ({
            dropdownOpen: !previousState.dropdownOpen
        })
        )
    }

    render() {
        return (
            <div className="dd-header" onClick={() => this.handleClick()}>
                <div className="dd-header-title">{this.state.dropdownLabel}</div>
                {this.state.dropdownOpen
                    ? <FontAwesome name="angle-up" size="2x"/>
                    : <FontAwesome name="angle-down" size="2x"/>
                }
                {this.state.dropdownOpen && <ul className="dd-list">
                    {this.props.list.map((item) => (
                        <li className="dd-list-item" key={item.id} >{item.title}</li>
                    ))}
                </ul>}
            </div>
        )
    }
}