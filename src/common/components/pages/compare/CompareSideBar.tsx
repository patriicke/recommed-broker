/* eslint-disable react-hooks/exhaustive-deps */
import { faChevronDown, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconButton,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  TextField
} from "@mui/material";
import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import { brokers } from "../../../../data";

const CompareSideBar = () => {
  const optionsCheckBox: string[] = [
    "Show",
    "Stock",
    "ETF",
    "Forex",
    "Fund",
    "Bond",
    "Options",
    "Futures",
    "Crypto",
    "CFD",
    "Same",
    "Instantly"
  ];

  const otherCheckBox: string[] = [
    "day account open",
    "deposit with credit card"
  ];

  const orderBy: string[] = [
    "Overall Score",
    "Fees",
    "Markets and Products",
    "Web trading platform"
  ];

  const router = useRouter();

  const { brokers: queryString } = router.query;

  const [selectedBrokers, setSelectedBrokers] = useState<string[]>([]);

  const handleChooseBroker = (event: ChangeEvent<HTMLInputElement>) => {
    const updateSelectedBrokers = [
      ...selectedBrokers.filter((s: string) => s !== event.target.value),
      event.target.value
    ];
    
    setSelectedBrokers(updateSelectedBrokers);
    handleChangeRoute(updateSelectedBrokers);
  };

  const removeBrokerFromSelected = (broker: string) => {
    const updated = selectedBrokers.filter((b: string) => b !== broker);
    setSelectedBrokers(updated);
    handleChangeRoute(updated);
  };

  const handleClearRouter = () => {
    setSelectedBrokers([]);
    router.push("/compare");
  };

  const changeToString = (arg: string[]): string =>
    arg.toString().split(",").join("%2C");

  const handleChangeRoute = (a: string[]) => {
    if (a.length > 0) {
      const chooseBrokers = a.map((a: string) => {
        return (
          brokers
            .find((b) => b.broker_details.name === a)
            ?.broker_id.toString() ?? ""
        );
      });
      router.push(`/compare?brokers=${changeToString(chooseBrokers)}`);
    }
  };
  const handleFilterBrokers = () => {
    if (queryString) {
      const queryArray = queryString.toString().split(",");
      const brokerNames = queryArray.map(
        (str) =>
          brokers.find((b) => b.broker_id === str)?.broker_details.name ?? ""
      );
      setSelectedBrokers(brokerNames);
    }
  };

  useEffect(() => {
    handleFilterBrokers();
  }, [queryString]);

  return (
    <div className='hidden lg:block box-border pt-8 px-4 min-w-[240px]'>
      <div className='pb-8'>
        <div className='space-y-6'>
          <div>
            <div className='flex items-center pb-2'>
              <p className='text-base sm:text-lg font-semibold'>You live in</p>
            </div>
            <div>
              <div className=' css-b62m3t-container' id='kAhuBHCtqvIdAmjsVXoe'>
                <OutlinedInput
                  size='small'
                  value={"Nigeria"}
                  inputProps={{ readOnly:true }}
                  endAdornment={
                    <InputAdornment position='end'>
                      |
                      <IconButton edge='end'>
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className='text-xs'
                        />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </div>
            </div>
          </div>
          <div>
            <div className='flex items-center pb-2'>
              <p className='text-base sm:text-lg font-semibold'>
                Select brokers
              </p>
            </div>
            <div className='flex flex-col w-full'>
              <TextField
                id='outlined-choose-broker'
                select
                defaultValue=''
                className='w-full'
                size='small'
                SelectProps={{
                  displayEmpty: true
                }}
                placeholder='Select Broker'
                onChange={handleChooseBroker}
              >
                <MenuItem disabled value=''>
                  Select ...
                </MenuItem>
                {brokers.map((broker) => (
                  <MenuItem
                    key={Number(broker.broker_id) * Math.random()}
                    value={broker.broker_details.name}
                  >
                    {broker.broker_details.name}
                  </MenuItem>
                ))}
              </TextField>
              <div className='w-full flex flex-col py-2 relative gap-2'>
                {selectedBrokers?.map((selected: string) => (
                  <span
                    className='bg-gray-200 px-4 py-2 flex gap-2 w-fit items-center rounded-md'
                    key={selected}
                  >
                    <span>{selected}</span>
                    <FontAwesomeIcon
                      icon={faClose}
                      className='text-md hover:text-red-400 cursor-pointer'
                      onClick={() => {
                        removeBrokerFromSelected(selected);
                      }}
                    />
                  </span>
                ))}
                {selectedBrokers.length !== 0 && (
                  <FontAwesomeIcon
                    icon={faClose}
                    className='absolute top-1/3 right-2 tetext-md hover:text-red-400 cursor-pointer'
                    onClick={handleClearRouter}
                  />
                )}
              </div>
            </div>
          </div>
          <div className='hidden sm:block'>
            <div className='flex items-center pb-2'>
              <p className='text-base sm:text-lg font-semibold'>Order By</p>
            </div>
            <div className='hidden sm:block'>
              <div>
                <TextField
                  id='outlined-select-currency'
                  select
                  defaultValue=''
                  className='w-full'
                  size='small'
                  SelectProps={{
                    displayEmpty: true
                  }}
                  placeholder='Select Order By'
                >
                  <MenuItem disabled value=''>
                    Select Order By
                  </MenuItem>
                  {orderBy.map((order) => (
                    <MenuItem key={order} value={order}>
                      {order}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='pb-8'>
        <div>
          <p className='pb-2 text-lg font-semibold'>Products</p>
          {optionsCheckBox.map((option) => {
            return (
              <div className='flex items-center' key={option}>
                <input type='checkbox' id={`cxb_${option}`} className='border-secondary-500' />
                <div className='ml-4'>
                  <label htmlFor={`cxb_${option}`} className='-ml-2 cursor-pointer'>{option}</label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='pb-8'>
        <div>
          <p className='pb-2 text-lg font-semibold'>Other</p>
          {otherCheckBox.map((other) => {
            return (
              <div className='flex items-center' key={other}>
                <input type='checkbox' id={`cxb_${other}`} className='border-secondary-500' />
                <div className='ml-4'>
                  <label htmlFor={`cxb_${other}`} className='-ml-2'>{other}</label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CompareSideBar;
