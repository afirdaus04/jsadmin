import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext ();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const[activeMenu, setActiveMenu] = useState(true); // initial state of menu set to true
    const [isClicked, setIsClicked] = useState(initialState); 
    const [screenSize, setScreenSize] = useState(undefined) //mobile ScreenSize, function creation
    const [currentColor, setCurrentColor] = useState ('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false); //Sidebar for theme iniitially closed or open

    const setMode = (e) =>{
        setCurrentMode(e.target.value); 
        
           
        localStorage.setItem('themeMode',e.target.value);

        setThemeSettings(false);
    }

    // Values to passover to context
    const setColor = (color) =>{
       
        setCurrentColor(color); 
        

        localStorage.setItem('colorMode',color);

        setThemeSettings(false);
    }

    const handleClick = (clicked) => { setIsClicked ({ ...initialState, [clicked]:true});
}

    return (
        <StateContext.Provider
            value = {{ 
                activeMenu, 
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize, 
                setScreenSize,
                currentColor, currentMode,
                themeSettings,setThemeSettings,
                setMode, setColor
            }}
        >
            { children }
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);