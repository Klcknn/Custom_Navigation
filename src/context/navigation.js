import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({children}) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    
    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener("popstate", handler);

        return () => {
            window.removeEventListener("popstate", handler);    

        };
    }, []);

    const navigate = (to) => { 
        window.history.pushState({}, "", to);
        setCurrentPath(to);
    };

    return (
        <NavigationContext.Provider value={{ currentPath, navigate }}>
            {/* 
            <div>
                <button onClick={ () => navigate("/accordion") }>Go to Accordion Web Page</button>
                <button onClick={ () => navigate("/dropdown") } >Go to Dropdown Web Page</button>
            </div> 
            */}
            {/* {currentPath} */}
            {children}
        </NavigationContext.Provider> 
    );
};

export {NavigationContext};
export default NavigationProvider;