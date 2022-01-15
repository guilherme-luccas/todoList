import React, {createContext, useState} from 'react';

type MonitorContextProps = {
  monitor: boolean;
  setMonitor: (monitor: boolean) => void;
};
export const MonitorContext = createContext({} as MonitorContextProps);

export function ContextProvider({children}: any) {
  const [monitor, setMonitor] = useState<boolean>(false);

  return (
    <MonitorContext.Provider value={{monitor, setMonitor}}>
      {children}
    </MonitorContext.Provider>
  );
}
