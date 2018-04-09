import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import items from './mock/Task';
import {filter, includes, orderBy as funcOrderBy, remove} from 'lodash';
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: items,
            isShowForm: false,
            strSearch: '',
            orderBy: 'name',
            orderDir: 'desc'
        };
        this.handleToggleForm = this.handleToggleForm.bind(this);
        this.closeForm = this.closeForm.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleSubmit(item){
        console.log(item);
    }
    handleToggleForm(){
        this.setState({
            isShowForm: !this.state.isShowForm
        });
    }
    handleSearch(value){
        this.setState({
            strSearch: value
        });
    }
    handleSort(orderBy, orderDir){
        this.setState({
            orderBy: orderBy,
            orderDir: orderDir
        });
    }
    handleDelete(id){
        let items = this.state.items;
        remove(items, (item)=>{
            return item.id === id;
        })
        this.setState({
            items: items 
        })
    }
    closeForm(){
        this.setState({
            isShowForm: false
        });
    }
    render() {
        let itemsOrigin = this.state.items;
        let items       = [];
        let isShowForm  = this.state.isShowForm;
        let elmForm     = null;
        let orderBy     = this.state.orderBy;
        let orderDir    = this.state.orderDir;
        const search    = this.state.strSearch;
        items = filter(itemsOrigin, (item) => {
            return includes(item.name.toLowerCase(), search.toLowerCase());
        })

        items = funcOrderBy(items, [orderBy], [orderDir] );

        if (isShowForm) {
            elmForm = <Form 
                        onClickSubmit={this.handleSubmit}
                        handleCancel={this.closeForm}
                        />;
        }
        return (
            <div className="row">
                {/* TITLE START */}
                <Title />
                {/* TITLE END */}
                {/* CONTROL (SEARCH + SORT + ADD) : START */}
                <Control 
                    orderBy={orderBy}
                    orderDir={orderDir}
                    onClickSort={this.handleSort}
                    onClickSearchGo={this.handleSearch} 
                    strSearch={this.props.strSearch} 
                    onClickAdd = {this.handleToggleForm}  
                    isShowForm={isShowForm}
                />
                {/* CONTROL (SEARCH + SORT + ADD) : END */}
                {/* FORM : START */}
                {elmForm}
                {/* FORM : END */}
                {/* LIST : START */}
                <List 
                onClickDelete={this.handleDelete}
                items={items}/>
            {/* LIST : END */}
            </div>
        );
    }
}

export default App;
