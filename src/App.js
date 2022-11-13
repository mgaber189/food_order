import { useState } from 'react';
import Header from './components/layout/Header';
import Landing from './components/layout/Landing';
import Mealscard from './components/layout/Mealscard';
import Overlay from './components/ui/Overlay';
import Cartprovider from './context/Cartprovider';
import Order from './components/ui/Order';
function App() {
  const [overlayshow,setoverlay]=useState(false);
  const hideoverlay=()=>{
    setoverlay(false)
  }
  const showoverlay=()=>{
    setoverlay(true)
  }
  return (
    <Cartprovider>
      {overlayshow&&<Overlay overlay={hideoverlay} show={showoverlay}><Order onclose={hideoverlay}></Order></Overlay>}
      <Header overlay={showoverlay} />
      <Landing/>
      <Mealscard/>
    </Cartprovider>  
    
  );
}

export default App;
