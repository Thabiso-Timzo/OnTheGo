import React, {createContext, useReducer} from "react";

import auth from "./reducers/auth";
import authInitialState from "./initialStates/authState";

const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
    const [authState, authDispatch] = useReducer(auth, authInitialState);

    return <GlobalContext.Provider value={{authState, authDispatch, }}>{children}</GlobalContext.Provider>
};

export default GlobalProvider;