import {Header, Footer} from './Components';
import {Home, Cart, LastPage} from './Components/Pages';
import {Route} from 'react-router-dom';
import React from 'react';
import LoaderMain from './Components/Loadermain';


const App = () => {
  const [loading, setLoading] = React.useState(false);
  
  React.useEffect(()=> {
  setLoading(true)
  setTimeout(()=> {
    setLoading(false)
  },2000)
  }, []);

  if (loading) return (<LoaderMain/>)
  
  return (
  <div className="wrapper">

  <Header />
   <Route path = '/' component = {Home} exact/>
   <Route path = '/cart' component= {Cart} exact/>
   <Route path = '/order' component= {LastPage} exact/>
   <Footer />
   </div>

  )
}


export default App;