import React from 'react';
import ResultItem from './resultItem';

class ResultList extends React.Component {

    

    render(){
        return(
            <div>
                <h2>Here are some books</h2>
                <ul>
                    {this.props.data.map((book,i)=>{
                        return(
                        <ResultItem
                            key={i}
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors}
                        />);
                    })}
                    
                </ul>
            </div>
        )
    }
}

export default ResultList;