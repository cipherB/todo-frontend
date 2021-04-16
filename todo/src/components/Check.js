import React, { Component } from 'react';
import axios from 'axios';
import {API} from '../backend';
import ConfirmRemoval from './ConfirmRemoval';

export default class Check extends Component {
    state = {
        id: 0,
        archive: false,
        completed: false,
        isOpen: false
    };

    componentDidMount() {
        if (this.props.todo) {
            const { id, archive, completed } = this.props.todo;
            this.setState({ id, archive, completed });
        }
    }

    openModal = () => {
        this.setState({
            isOpen: true
        })
    };

    closeModal = () => {
        this.setState({
            isOpen: false
        })
    };



    archTodo = e => {
        e.preventDefault();
        axios.put(`${API}arch/${this.state.id}/`, this.state).then(() => {
           console.log('done')
        });
    };

    compTodo = e => {
        e.preventDefault();
        axios.put(`${API}comp/${this.state.id}/`, this.state).then(() => {
           console.log('done')
        });
    };

    archClass = archive => {
        if (archive === false) {
            return (
                <div className="check_form_group">
                    <button className="btn btn-info check_btn" onClick={this.archTodo} >Archive</button>
                </div>
            )
        }
        else {
            return (
                <div className="check_form_group">
                    <button className="btn btn-light text-info check_btn" onClick={this.archTodo} >UnArchive</button>
                </div>
            )
        }
    }

    compClass = completed => {
        if (completed === false) {
            return (
                <div className="check_form_group">
                    <button className="btn btn-success check_btn" onClick={this.compTodo} >Completed</button>
                </div>
            )
        }
        else {
            return (
                <div className="check_form_group">
                    <button className="btn btn-light text-success check_btn" onClick={this.compTodo} >UnCompleted</button>
                </div>
            )
        }
    } 


    render() {
        return (
            <div className="check" >
                {this.archClass(this.state.archive)}
                {this.compClass(this.state.completed)}
                <button onClick={this.openModal} className="btn btn-danger check_btn" >delete</button>
                <ConfirmRemoval id={this.state.id} open={this.state.isOpen} onClose={this.closeModal} />
            </div>
        )
    }
}
