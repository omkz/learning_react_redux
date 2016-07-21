/**
 * Created by omz on 20/07/16.
 */
import React, { Component, PropTypes } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <li>
                {this.props.text}
            </li>
        )
    }
}