import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import deviceStore from "./store/deviceStore";

export const Context = createContext<any|null>(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        device: new deviceStore()
    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);

