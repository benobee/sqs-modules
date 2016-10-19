import React from 'react';
import { Image, Price } from './index';
import ReactDOM from 'react-dom';
import $ from 'properjs-hobo';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Item ' + this.props.item.title;
        this.state = {
            data:{
                tags: this.props.item.tags,
                categories : this.props.item.categories
            }
        }
    }
    componentDidMount() {
        this.animate();
    }
    animate(){
        setTimeout(()=> {
            const item = ReactDOM.findDOMNode(this);
            $(item).addClass('is-rendered');
        }, 0);
    }
    dataInject(){
        const data = this.state.data;
    }
    validateHTML(content){

        if( (content !== undefined) || (content.length > 0) ){
            return {__html: content};
        }

    }
    render() {
        if (this.props.item.assetUrl.length > 0) {
            this.image = <Image src={this.props.item.assetUrl} />;
        }

        if (this.props.item.variants !== undefined) {
            this.price = <Price price={this.props.item.variants[0].price} />;
        }

        const excerpt = this.validateHTML(this.props.item.excerpt);

        return(
            <div className="item" 

                data-title={this.props.item.title} 
                data-price={this.price}
                data-url={this.props.item.fullUrl}
                data-collection={this.props.item.collectionId}>

                <div className="content">
            
                    <Image src={this.props.item.assetUrl} />
           
                    <div className="header">
                        <div className="title">
                            {this.props.item.title}
                        </div>

                        {this.price}

                    </div>
                    <div className="excerpt">
                        <div dangerouslySetInnerHTML={excerpt} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Item;