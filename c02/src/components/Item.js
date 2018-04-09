import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(id){
        this.props.onClickDelete(id);
    }
    render() {
        const {item} = this.props;
        const index = this.props.index;
        
        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td>{item.name}</td>
                <td className="text-center">{this.showElmLevel(item.level)}</td>
                <td>
                    <button type="button" className="btn btn-warning">Edit</button>
                    <button onClick={()=>this.handleDelete(item.id)} type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
    showElmLevel(level){
        let elmLevel = <span className="label label-info">Small</span>;
        if (level === 0) {
            elmLevel = <span className="label label-danger">Hight</span>;
        } else if (level === 1) {
            elmLevel = <span className="label label-success">Medium</span>;
        } 
        return elmLevel;
    }
}

export default Item;
