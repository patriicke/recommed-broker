import { NextPage } from "next";
import { createContext, ReactNode, useEffect, useState } from "react";
import { brokers } from "../../../../../data";
import { IBroker } from "../../../../types";

export const CompareContext: any = createContext<any>(null);

export type ICompareContext = {
  topBarBrokers: IBroker[];
  setTopBarBrokers: Function;
  displayBrokers: IBroker[];
  setDisplayBrokers: Function;
  startingBrokerIndex: number;
  setStartingBrokerIndex: Function;
};

export const CompareContextProvider: NextPage<{ children: ReactNode }> = ({
  children
}) => {
  const [topBarBrokers, setTopBarBrokers] = useState<IBroker[]>([]);
  const [displayBrokers, setDisplayBrokers] = useState<IBroker[]>([]);
  const [startingBrokerIndex, setStartingBrokerIndex] = useState<number>(0);

  useEffect(() => {
    topBarBrokers.length === 0 &&
      setTopBarBrokers(brokers as unknown as IBroker[]);
  }, [topBarBrokers]);

  return (
    <CompareContext.Provider
      value={{
        topBarBrokers,
        setTopBarBrokers,
        displayBrokers,
        setDisplayBrokers,
        startingBrokerIndex,
        setStartingBrokerIndex
      }}
    >
      {children}
    </CompareContext.Provider>
  );
};
