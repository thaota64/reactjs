import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task_name: '',
            task_level: ''
        };
        this.handdleCancel = this.handdleCancel.bind(this);
        this.handdleChange = this.handdleChange.bind(this);
        this.handdleSubmit = this.handdleSubmit.bind(this);
    }
    handdleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handdleSubmit(event){
        let item = {
            name: this.state.task_name,
            level: this.state.task_level
        }
        this.props.onClickSubmit(item);
        event.preventDefault(event);
    }
    handdleCancel(){
        this.props.handleCancel();
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-offset-7 col-md-5">
                    <form onSubmit={this.handdleSubmit} method="POST" className="form-inline">
                        <div className="form-group">
                            <label className="sr-only" htmlFor>label</label>
                            <input value={this.state.task_name} onChange={this.handdleChange} name="task_name" type="text" className="form-control" placeholder="Task Name" ref="task_name" />
                        </div>
                        <div className="form-group">
                            <label className="sr-only" htmlFor>label</label>
                            <select value={this.state.task_level} onChange={this.handdleChange} name="task_level" id="inputDs" className="form-control" required="required" ref="task_level">
                              <option value={0}>Small</option>
                              <option value={1}>Medium</option>
                              <option value={2}>High</option>
                            </select>
                        </div>
                        <button type="Submit" className="btn btn-primary">Submit</button>
                        <button type="button" onClick={this.handdleCancel} className="btn btn-default">Cancel</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;
