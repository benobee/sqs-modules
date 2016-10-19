import React from 'react';

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Image';
    }
    render() {
        return (
        	<div className="thumbnail-container">
                <div className="thumbnail">
                    <img src={this.props.src} />
                </div>
            </div> 
        )
    }
}

export default Image;
