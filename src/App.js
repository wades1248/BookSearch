import React from 'react';
import SearchBar from './searchBar';
import FilterBar from './filterBar';
import ResultList from './resultList';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      query: '',
      printType:'all',
      bookType: null,
      results:[],
    }
  }

  handlePrint = (selected) => {
    this.setState({
      printType: selected
    },
    () => console.log(this.state.printType));
  }

  handleType = (selected) => {
    if(selected === 'null'){
      this.setState({
        bookType:null
      })
    }else{
    this.setState({
      bookType: selected
    });}
  }

  handleSearchTerm = (term) => {
    this.setState({
      query: term
    }, () => console.log(this.state.query));
  }

  formatQuery= () => { 
   if(this.state.bookType === null){
      return(
        'https://www.googleapis.com/books/v1/volumes?q='+this.state.query+'&printType='+this.state.printType+'&key=AIzaSyAFw9GX0yi0FkKRsmSH57JUzeQRhT7cGmE'
      );
    }else{
      return(
        'https://www.googleapis.com/books/v1/volumes?q='+this.state.query+'&filter='+this.state.bookType+'&printType='+this.state.printType+'&key=AIzaSyAFw9GX0yi0FkKRsmSH57JUzeQRhT7cGmE'
      );
    }
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    fetch(this.formatQuery())
      .then(response => {
        if(response.ok){
          return(response.json())
          .then(data => {
            this.setState({
              results: data.items
            });
            console.log(this.state.results);
          })
        }else{
          throw new Error();
        }
      })
        
          .catch(err =>{
        console.log(err.message);

      })
      
    

  }

  render(){
    return (
      <div className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <SearchBar 
          onQuery= {this.handleSearchTerm} 
          query={this.state.query}
          onSubmit={this.handleSubmit} />
        <FilterBar
          onPrintSelect= {this.handlePrint}
          onTypeSelect= {this.handleType} />
        <ResultList data={this.state.results} />
      </div>
    );
  }
}

export default App;
