import React from 'react';
import HTTP from '../core/http/ajax';
import $ from 'properjs-hobo';
import { List } from './index';
import ReactDOM from 'react-dom';
import Site from '../core/data/data.js';
import { Router } from '../core/index';
import _ from 'lodash';

class Collection extends React.Component {
    constructor(props) {
        super(props);
        this.target = this.props.target;
        this.displayName = 'Collection';
        this.url = $(this.target).data("url");
        this.displayType = $(this.target).data("display");
        this.state = {
            data: false
        }
    }
    update(data){
        this.setState({ data });
    }
    componentWillMount() {
        $(this.target).addClass("element");
        this.fetchData();
    }
    componentDidMount() {
        if(this.state.data) {          
            if(this.props.options.constant ){
                this.watchData();           
            }
        }
    }
    fetchData(){
        if(Site.isActive) {
            const request = HTTP.get(Site.host + this.url, {format: "json"});

            $.when(request).done((data) => {
                this.update(data);
            });
        }
    }
    watchData(){
        setInterval(() => { this.fetchData() }, this.props.options.interval);
    }
    validateRender(){

        if(this.state.data) {
            return(
                <List url={this.url} data={this.state.data} display={this.displayType} />
            )
        } else {
            return (
                <div className="error"></div>
            )
        }      
    }
    render() {
        return this.validateRender();
    }
};

export default Collection;
