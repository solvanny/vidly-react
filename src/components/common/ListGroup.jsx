import React, { Component } from 'react';

class ListGroup extends Component {
  render() {
    const { 
      items, 
      textProperty, 
      valueProperty, 
      onItemSelect, 
      selectedItem 
    } = this.props;
    return (
      <ul className="list-group ">
      {items.map(item => 
        <li 
          style={{cursor: 'pointer'}}
          onClick={() => onItemSelect(item)}
          className={selectedItem === item ? "list-group-item active" : "list-group-item"} 
          key={item[valueProperty]} 
          >
          {item[textProperty]}
        </li>
      )}
        
      </ul>
    )
  }
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
}


export default ListGroup;