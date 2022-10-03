import { Route, Routes } from 'react-router-dom';

import Header from './Page/Header/Header';
import Products from './Page/ProductList/Products';
import NotFound from './NotFound/NotFound'
import Greeting from './Page/Greetings/Greeting';

function App() {
  
  return (
    <div className="App">
        <Header/>
        
        <Routes>
          <Route path='/' element={ <Products/>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
          <Route path='/checkout' element={<Greeting></Greeting>}></Route>
        </Routes>
    </div>
  );
}

export default App;
