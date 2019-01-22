import React, { Component } from 'react';
import _ from 'lodash';

export default class Pagination extends Component {

  onPageChange = (page) => {
    this.props.setState({currentPage: page})
  }

  render() {
    const pagesCount = Math.ceil(this.props.itemCount / this.props.pageSize);
    if(pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);

    return (
      <nav>
        <ul className="pagination">
        {pages.map( page => 
          <li key={page} className={ page === this.props.currentPage ? 'page-item active' : 'page-item'}>
            <a className="page-link" onClick={() => this.onPageChange(page)}>{page}</a>
          </li>
        )}
        </ul>
      </nav>
    )
  }
}
;