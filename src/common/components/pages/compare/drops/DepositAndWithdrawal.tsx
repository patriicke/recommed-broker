import React, { useContext } from "react";
import { CompareContext, ICompareContext } from "../context";
import { TextWithIconTitle } from "./FeesComponent";

const DepositAndWithdrawal = () => {
  const { topBarBrokers, startingBrokerIndex } =
    useContext<ICompareContext>(CompareContext);

  return (
    <div className='flex'>
      <div className='pt-3 flex flex-row gap-3'>
        {topBarBrokers.slice(startingBrokerIndex).map((broker, _index) => {
          return (
            <div
              className='min-h-16 w-[300px] z-50 flex flex-col relative py-2 '
              key={_index}
            >
              <TextWithIconTitle
                text='Fees summary'
                title="Top5Brokers' qualitative summary on the broker's prices"
              />
              <p className='overflow-hidden text-ellipsis text-center font-light text-xs sm:text-sm leading-snug mt-4'>
                {broker.broker_deposit_and_withdrawal.base_currencies}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DepositAndWithdrawal;
