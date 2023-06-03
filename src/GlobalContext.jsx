import { createContext } from "react";

export const GlobalContext = createContext(null);

export const GlobalProvider = ({children}) => {

    const accessToken = import.meta.env.VITE_GITHUB_TOKEN

    return (
        <GlobalContext.Provider value={ {accessToken} }> {children} </GlobalContext.Provider>
    );
};;

export default GlobalProvider