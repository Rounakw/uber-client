import React from 'react';

export const CaptainDataContext = React.createContext();

function CaptainContext({ children }) {
    const [captain, setCaptain] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const [isError, setIsError] = React.useState(false);

    const values = {
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        isError,
        setIsError,
    };

    return (
        <CaptainDataContext.Provider value={values}>
            {children}
        </CaptainDataContext.Provider>
    );
}

export default CaptainContext;
