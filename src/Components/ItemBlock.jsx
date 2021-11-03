import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {Buttongen} from './index';


const ItemBlock = ({id, name, imageUrl, price, types, sugar, onAddCart, cartTotal}) => { 
const [ activeType, setActiveType] = React.useState(types[0])
const [ activeSugar, setActiveSugar] = React.useState(0)

const availableType = ['dairy', 'alternative 🌱'];
const addSugar = ['regular', 'sugar-free','sugar bomb'];

const onSelectType = (index) => {
    setActiveType(index);
};
const onSelectSugar = (index) => {
    setActiveSugar(index);
};

const onAddItem = () => {
let obj = {
  id, 
  name,
  imageUrl,
  price, 
  sugar: addSugar[activeSugar],
  type: availableType[activeType],
}
onAddCart(obj);
}

return (
 
    <div className="pizza-block">
<img
  className="pizza-block__image"
  src = {imageUrl}
  alt="Item"
/>
<h4 className="pizza-block__title">{name}</h4>
<div className="pizza-block__selector">
  <ul>
      {availableType.map((type, index) => (<li key = {type} className = {classNames({
          'active': activeType === index,
          'disabled': !types.includes(index),
      })}
      onClick = {() => {onSelectType(index)}}>{type}</li>))} 
  </ul>
  <ul>
  {addSugar.map((name, index) => (<li onClick = {()=> {onSelectSugar(index)}} key = {index} className = {classNames({
      'active': activeSugar === index, 
      'disabled': !sugar.includes(name),
  })} >{name}</li>))}
  </ul>
</div>
<div className="pizza-block__bottom">
  <div className="pizza-block__price">{price}$</div>
  <Buttongen onClick = {onAddItem} className="button--add" outline>
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
        fill="white"
      />
    </svg>
    <span>Add</span>
   { cartTotal && <i>{cartTotal}</i>}
  </Buttongen>
</div>
</div>
)
}

ItemBlock.propTypes = {
name: PropTypes.string,
imageUrl: PropTypes.string, 
price: PropTypes.number,
sugar: PropTypes.arrayOf(PropTypes.string).isRequired,
types: PropTypes.arrayOf(PropTypes.number).isRequired,
onAddCart: PropTypes.func,
cartTotal: PropTypes.number,

};

ItemBlock.defaultProps = {
    name: 'Ice-cream name',
    imageUrl: " ",
    price: 0,
    sugar: [],
    types: [],
  
}

export default ItemBlock;