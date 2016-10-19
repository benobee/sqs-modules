import React from 'react';
import $ from 'properjs-hobo';
import _ from 'lodash';
import Site from '../core/data/data.js';
import ReactDOM from 'react-dom';

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MenuItem';
        this.html = {__html: this.props.item.innerHTML}
    }
    render() {
        return <li className={this.props.className} dangerouslySetInnerHTML={this.html} />;
    }
}

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.target = $("#main-navigation");
        this.displayName = 'Navbar';
        this.state = {
        	data:{
        		html: undefined
        	}
        }
        this.convertMenuItems();
    }
    convertMenuItems(){
    	
		const current = $("#main-navigation > ul > li");
    	//find li elements in menu and covert to array
		let menu = $(current).clone();

		menu = _.map(menu, (i) => {
			return i;
		});

		this.menu = menu;

    }
    animate(){
    	$(".horizontal-navigation-bar").addClass("is-ready");
    	$(".app-module.navbar").addClass("is-rendered");
    }
    componentWillMount(){
    	setTimeout(() => {
    		this.animate();
    	}, 100)
    }
    render() {
    	const itemNodes = this.menu.map((item, index)=>{
    		return <MenuItem key={index} className={item.className} item={item}/>
    	});

        return (
        	<nav id="main-navigation" className="main-nav sqs-frontend-overlay-editor-widget-host" data-content-field="navigation">
	        	<ul className="app-module navbar">
	        		{itemNodes}
	        	</ul>
        	</nav>
        );
    }
}

export default Navbar;
