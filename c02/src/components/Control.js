import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';
class Control extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleAdd(){
        this.props.onClickAdd();
    }
    render() {
        let {orderBy, orderDir} = this.props;
        let elmControl = <button type="button" onClick={this.handleAdd} className="btn btn-info btn-block">Add Task</button>;
        if (this.props.isShowForm === true) {
            elmControl = <button type="button" onClick={this.handleAdd} className="btn btn-success btn-block">Close Form</button>;
        }
        return (
            <div className="row">
            {/* SEARCH : START */}
                <Search onClickGo={this.props.onClickSearchGo}/>
                {/* SEARCH : END */}
                {/* SORT : START */}
                <Sort 
                    orderBy={orderBy}
                    orderDir={orderDir}
                    onClickSort={this.props.onClickSort}
                />
                {/* SORT : END */}
                {/* ADD : START */}
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    {elmControl}
                </div>
                {/* ADD : END */}
            </div>
        );
    }
}

export default Control;
