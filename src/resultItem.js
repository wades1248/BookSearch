import React from 'react';


class ResultItem extends React.Component {

    render(){
        return(
            <li>{this.props.title} by {this.props.author}</li>
        )
    }
}

export default ResultItem;