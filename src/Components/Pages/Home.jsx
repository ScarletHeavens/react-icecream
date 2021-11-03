import React from 'react'
import {Categories, SortPopup,ItemBlock, Loader, Footer} from '../index'
import {useSelector, useDispatch} from 'react-redux'
import {setCategory, setSortBy} from '../Redux/actions/filterActionCreator';
import {fetchItems} from '../Redux/actions/itemActionCreator';
import {addItemCart} from '../Redux/actions/cartActionCreator'
import LastPage from './LastPage';

const itemNames = [
  "vegetarian",
  "evil",
  "our specials",
  "misc-usi"
 ];

 const filterNames =[
  {name: 'popularity', type: "popular", order: 'desc'},
  {name: 'price', type: "price", order: 'asc'},
  {name: 'a-z', type: "name", order: 'desc'}];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({items}) => items.items);
  const cartItems = useSelector(({cart}) => cart.items);
  const isPaid = useSelector(({cart}) => cart.isPaid);
  const isFetched = useSelector(({items}) => items.isFetched);
  const {category, sortBy} = useSelector(({filters}) => filters);
  
  
  const onCategorySet = React.useCallback(
    (index) => {
    dispatch(setCategory(index));
    },[]);
  
    React.useEffect(()=> {
      dispatch(fetchItems(sortBy, category));
    }, [sortBy, category]);

    const onSelectSet = React.useCallback(
      (name) => {
        dispatch(setSortBy(name));
      },[]);

    const handleAddToCart = (obj) => {
    dispatch(addItemCart(obj))
    }

    //the reason we use useCallback is because we don't want the f to rerender everytime the component changes. 
    //this memorises the component and doesnt rerender it.

    if (isPaid) return (<div className="container"><LastPage items={cartItems}/></div> )

    return (
        <div>
           <div className="container">
          <div className="content__top">
           <Categories activeCategory = {category} onSelectItem= {onCategorySet} className = "categories"
           items ={itemNames}/>
           <SortPopup activeSortType= {sortBy} items = {filterNames} onSelectSort = {onSelectSet}/>
            </div>
          </div> 
          <div className="content">
          <h2 className="content__title">All ice-creams</h2>
          <div className="content__items">

          {isFetched 
          ? items.map(obj => <ItemBlock cartTotal = {cartItems[obj.id] && cartItems[obj.id].items.length} onAddCart = {handleAddToCart} key = {obj.id} {...obj} />)
          : Array(8).fill(0).map((_,index) => <Loader key = {index} />)
          }
     
          </div>
          < Footer />
        </div>
       
      </div>
      
    )
};

export default Home;