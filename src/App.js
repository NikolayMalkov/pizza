import mainstyles from './css/main.module.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { store } from './store/store';
import { Provider } from 'react-redux'
import { Container } from '@material-ui/core';


function App() {
  return (

    <Container>
      <Provider store={store}>
        <Router>
          <div className={mainstyles.wrap}>
            <Header />
            <Main />
            <Footer />
          </div>
        </Router>
      </Provider>
    </Container>


  );
}

export default App;
