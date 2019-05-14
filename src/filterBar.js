import React from 'react';

class FilterBar extends React.Component{

    render(){
        return(
            <div>
                <label>Print Type
                    <select 
                    id="print-type"
                    onChange={e => {this.props.onPrintSelect(e.target.value)}}>
                        <option value="all">All</option>
                        <option value='books'>Books</option>
                        <option value='magazines'>Magazines</option>
                    </select>
                </label>
                <label>Book Type
                    <select id="book-type"
                    onChange={e => {this.props.onTypeSelect(e.target.value)}}>
                        <option value= 'null' >None</option>
                        <option value='partial'>Partial Preview</option>
                        <option value='full'>Full Text</option>
                        <option value='free-ebooks'>Free eBooks</option>
                        <option value='paid-ebooks'>Paid eBooks</option>
                        <option value='ebooks'>All ebooks</option>
                    </select>
                </label>
            </div>
        )
    }
}

export default FilterBar;