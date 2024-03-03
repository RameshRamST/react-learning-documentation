import Header from './header';
import Body from './body';
// import store from './app/store'
import store from './store';
import { Provider } from 'react-redux';
export default function Redux() {
    
    return ( <Provider store={store}>

        <Header/>
        <Body/>
    
     </Provider >
     )
  

}