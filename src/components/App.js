import React, { Component } from 'react';
import Pagination from './Pagination';
import Page from './Page';
import logo from '../assets/logo.svg';
import '../styles/styles.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      currentPage: 1
    };
  };

  componentWillMount() {
    fetch('./data/ads.json')
      .then((result) => result.json())
      .then((data) => {
        this.setState(() => ({
          data
        }));
      });
  };

  /**
   * @description when the pagination link is clicked, set the clicked page as current
   * @param {number} currentPage the pagination page number clicked
   */
  handleClick = (currentPage) => {
    this.setState(() => ({
      currentPage
    }));
  };

  render() {
    let { data, currentPage } = this.state;
    let filteredData = data.filter((ad) => ad.page === currentPage);
    
    return (
      <div>
        <div className="container">
          <header>
            <img src={logo} className="logo" alt="logo" />
          </header>
          <main>
            <Page filteredData={filteredData} />
            <Pagination 
              currentPage={currentPage}
              data={data} 
              filteredData={filteredData}
              handleClick={this.handleClick}
            />
          </main>
        </div>
        <footer className="footer">
        </footer>
      </div>
    );
  }
}

export default App;
