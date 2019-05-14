import React from 'react';

class SearchBar extends React.Component{

    render(){
        return(
            <div>
                <form>
                    <label>Search:
                        <input type="text" 
                        name="search"
                        placeholder="title,author, etc.." 
                        value={this.props.query}
                        onChange={e => {this.props.onQuery(e.target.value)}}
                        ></input>
                        <button 
                        type="submit"
                        onClick={e => {this.props.onSubmit(e)}}>Book Look</button>
                    </label>
                </form>
            </div>
        )
    }
}
export default SearchBar;