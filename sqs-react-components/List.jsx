import { Item } from './index';
import React from 'react';
import { Session } from '../core/index';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'List';
        this.classNames = this.props.display + ' items';
    }
    render() {
        var itemNodes = this.props.data.items.map(function( item, index ){
            return( 
                <Item item={item} key={index} />
            );
        });

        return(
            <div className={this.classNames}>
                {itemNodes}
            </div>
        )
    }
}

export default List;