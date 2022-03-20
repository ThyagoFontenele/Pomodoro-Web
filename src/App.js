
import { AppContainer } from './AppStyle';
import { Display } from './components/Display';
import { Header } from './components/Header';


import { useContext } from 'react';
import {GlobalContext} from './Context/GlobalContext';

function App() {
  
  const {type} = useContext(GlobalContext);

  return (
      <AppContainer type={type}>
        <Header />
        <Display/>
      </AppContainer>
  );
}

export default App;
