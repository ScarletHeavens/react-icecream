import React from 'react';
import PropTypes from 'prop-types';


const Categories = React.memo(function Categories({activeCategory, items, onSelectItem, className}){

    return (
        <div className={className}>
        <ul>
          <li onClick = {() => onSelectItem(null)} className = {activeCategory === null? 'active' : ' '}>All</li>
          {items && items.map((name, index) => <li className = {activeCategory === index? 'active' : ' '}key={`${name}_${index}`} onClick = {() => onSelectItem(index)}>{name}</li>)}
        </ul>
      </div>

    )
})

Categories.propTypes = {
  activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelectItem: PropTypes.func.isRequired,
  };
  
  Categories.defaultProps = {
    activeCategory: null,
    items: [ ], 
    }

export default Categories;