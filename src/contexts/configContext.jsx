import { createContext, useState } from 'react';

// project import
import config from '../config/config';
// import useLocalStorage from 'hooks/useLocalStorage';


const initialState = {
    ...config,
    onReset: () => {},
};

const ConfigContext = createContext(initialState);

function ConfigProvider({ children }) {
    const [dataConfig, setDataConfig] = useState({
        ...config
    })
    // const [config, setConfig] = useLocalStorage('app', {
    //     layout: initialState.layout,
    //     drawerType: initialState.drawerType,
    //     fontFamily: initialState.fontFamily,
    //     borderRadius: initialState.borderRadius,
    //     outlinedFilled: initialState.outlinedFilled,
    //     navType: initialState.navType,
    //     presetColor: initialState.presetColor,
    //     locale: initialState.locale,
    //     rtlLayout: initialState.rtlLayout,
    //     appLocale: initialState.appLocale
    // });

    const onReset = () => {
        setDataConfig({ ...config });
    };

    return (
        <ConfigContext.Provider
            value={{
                ...config,
                onReset,
            }}
        >
            {children}
        </ConfigContext.Provider>
    );
}

export { ConfigProvider, ConfigContext };
