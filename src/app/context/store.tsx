import React, { createContext, useState, Dispatch, SetStateAction} from 'react';

interface Store {
    searchTerm: string;
    setSearchTerm: Dispatch<SetStateAction<string>>;
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    toggle: boolean,
    setToggle: Dispatch<SetStateAction<boolean>>;
}

export const StoreContext = createContext({} as Store);

const StoreProvider: React.FC = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [toggle, setToggle] = useState(false)
    

    const value = {
        searchTerm,
        setSearchTerm,
        isLoading,
        setIsLoading,
        toggle,
        setToggle
    }


    return <StoreContext.Provider value={value}>{props.children}</StoreContext.Provider>;
}

export default StoreProvider