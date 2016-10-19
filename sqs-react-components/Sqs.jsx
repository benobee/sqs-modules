import React from 'react';
import HTTP from '../core/http/ajax';
import Site from '../core/data/data.js';

class Sqs extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Sqs';
        this.state = {
        	data: undefined
        }
        console.log(this);
    }
    componentDidMount() {
    	this.setState({data: HTTP.get(Site.host + "/", {format: "json"} ) });
    }
    render() {
    	let html = {__html: '<div>HTML</div>'};

    	if(this.state.data !== undefined){
     		let html2 = {__html: this.state.data._result}; 
     		
			console.log(html2);
    	}
    	
        return <div dangerouslySetInnerHTML={html} />;
    }
}

export default Sqs;

