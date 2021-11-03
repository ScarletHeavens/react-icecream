import React from 'react';

const LastPage = ({items}) => { 
  const addedItems = Object.keys(items).map(key => {
    return items[key].items[0];
  });

    return(
      <div className = 'container__cart'>
      <div className = 'container__inner'>
       {addedItems.map(obj => <div className="container__items"><img src = {obj.imageUrl} /></div> )}
     </div>
     <h1>Your order is <br/> on the way🍦</h1>
     <img src='https://i.postimg.cc/FK80fr00/cone.png'/>
     </div>
    
  )
};


export default LastPage;