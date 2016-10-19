import React from 'react';
import { Module } from "./index";

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Layout';
    }
    render() {
        return (
        	<div id="siteWrapper">
	        	<header id="header"></header>
	        		<div id="content">
	        			<Module />
	        		</div>
	        	<footer id="footer"></footer>
        	</div>
       	)
    }
}

export default Layout;
