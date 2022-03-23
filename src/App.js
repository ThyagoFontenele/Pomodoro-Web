import { AppContainer } from './AppStyle';
import { Display } from './components/Display';
import { Header } from './components/Header';


import { useContext } from 'react';
import {GlobalContext} from './Context/GlobalContext';
import { ModalSettings } from './components/ModalSettings';
import { ModalProvider } from './Context/ModalContext';
import { GlobalStyle } from './styles/global';
import { MusicContainer } from './components/MusicContainer';


function App() {
  
  const {type} = useContext(GlobalContext);

  return (
    <ModalProvider>

      <AppContainer>
        <ModalSettings />
        <Header />
        <Display/>
        <MusicContainer/>
        <GlobalStyle type={type}/>
      </AppContainer>

    </ModalProvider>
  );
}

export default App;
