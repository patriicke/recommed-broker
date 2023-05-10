import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react';
import { FormChange } from '../../functions/CommonFunctionalites';

interface resultDataType {
  [key: string]: any,
  searchInformation: any
};

const SearchComponent = () => {
  const [searchContent, setSearchContent] = useState<string>('');
  const [error, setError] = useState('');
  const [resultData, setResultData] = useState<resultDataType | null>();
  const [resultItems, setResultItems] = useState<any>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchContent) {
      const key = 'AIzaSyB-kwXSPCeG8zRdtUEBEUpWmvI0iFVemo8';
      // const cx = '702aa96dca8f640fc';
      const cx = 'f1cf0428b03754e03';
      const url = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${searchContent}`;
      // console.log(url);

      const res = await fetch(url)
        .then((response) => response.json())
        .then((response) => response);
      if (res?.items?.length > 0) {
        console.log(res.items);
        setResultData(res);
        setResultItems(res.items);
      } else {
        setError('Nothing found, try searching for brokers');
      }
    }
  };

  return (
    <>
      <div className="h-[62px] lg:mt-0 px-4 lg:px-1 bg-gray-100 w-full flex items-center justify-center">
        <form
          className="h-full lg:mx-auto flex items-center gap-2 py-[0.1rem] justify-center w-[1220px]"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center justify-center border-2 border-slate-400 rounded-md p-1 py-[0.4rem] gap-2 w-full">
            <input
              type="text"
              className="h-full w-full outline-none text-[17px] placeholder:text-[16px] placeholder:text-slate-500 placeholder:italic bg-inherit"
              placeholder="Search by broker names or topics..."
              value={searchContent}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                FormChange(e, setSearchContent);
                setResultData(null);
                setResultItems([]);
              }}
            />
            {searchContent && (
              <FontAwesomeIcon
                icon={faClose}
                onClick={() => {
                  setSearchContent('');
                  setResultData(null);
                  setResultItems([]);
                }}
                className="text-[20px] text-blue-300 hover:text-blue-color cursor-pointer mx-1"
              />
            )}
          </div>
          <button
            className="bg-blue-color px-[0.9rem] h-3/5 rounded-md flex items-center justify-center"
            type="submit"
          >
            <FontAwesomeIcon
              icon={faSearch}
              className="text-white text-[11px]"
            />
          </button>
        </form>
      </div>

      {resultItems?.length > 0 && (
        <ul className="bg-white text-black px-4 lg:px-1 z-50 w-[1220px] mx-auto">
          <div id="___gcse_1">
            <div className="gsc-control-cse gsc-control-cse-en">
              <div className="gsc-control-wrapper-cse" dir="ltr">
                <div className="gsc-results-wrapper-nooverlay gsc-results-wrapper-visible">
                  <div className="gsc-above-wrapper-area">
                    <table
                      cellSpacing={0}
                      cellPadding={0}
                      role="presentation"
                      className="gsc-above-wrapper-area-container"
                    >
                      <tbody>
                        <tr>
                          <td className="gsc-result-info-container">
                            <div className="text-xs mb-2" id="resInfo-0">
                              About{' '}
                              {
                                resultData?.searchInformation
                                  ?.formattedTotalResults
                              }{' '}
                              results (
                              {
                                resultData?.searchInformation
                                  ?.formattedSearchTime
                              }{' '}
                              seconds)
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="gsc-adBlockNoHeight" style={{ height: 0 }} />

                  <div className="gsc-wrapper">
                    <div className="gsc-resultsbox-visible">
                      <div className="gsc-resultsRoot gsc-tabData gsc-tabdActive">
                        <div className="gsc-results gsc-webResult">
                          <div className="flex flex-col gap-4">
                            {resultItems?.map((item:any) => {
                              return (
                                <div
                                  key={item.cacheId}
                                  className="gsc-webResult gsc-result pb-4"
                                >
                                  <div className="gs-webResult gs-result">
                                    <div className="gsc-thumbnail-inside">
                                      <div className="gs-title">
                                        <a
                                          className="gs-title"
                                          href={`https://top5brokers.com/broker-reviews/${searchContent}`}
                                          target="_blank"
                                          dir="ltr"
                                          rel="noreferrer"
                                        >
                                          {item.title}
                                        </a>
                                      </div>
                                    </div>
                                    <div className="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-breadcrumb">
                                      <span>top5brokers.com</span>
                                      <span> › Broker Reviews</span>
                                    </div>
                                  </div>

                                  <p className="gs-watermark font-italic text-xs">
                                    {item.pagemap.metatags[0]['og:description']}
                                  </p>
                                </div>
                              );
                            })}
                            <div
                              className="gsc-adBlockNoHeight"
                              style={{ height: 0 }}
                            />
                          </div>

                          <div className="mt-6">
                            <a
                              href={`https://www.google.com/search?client=ms-google-coop&q=${searchContent}&cx=b4ab495b96f2ca4b3`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <div className="flex gap-4 items-center">
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 13 13"
                                  className="gcsc-find-more-on-google-magnifier"
                                >
                                  <title>search</title>
                                  <path d="m4.8495 7.8226c0.82666 0 1.5262-0.29146 2.0985-0.87438 0.57232-0.58292 0.86378-1.2877 0.87438-2.1144 0.010599-0.82666-0.28086-1.5262-0.87438-2.0985-0.59352-0.57232-1.293-0.86378-2.0985-0.87438-0.8055-0.010599-1.5103 0.28086-2.1144 0.87438-0.60414 0.59352-0.8956 1.293-0.87438 2.0985 0.021197 0.8055 0.31266 1.5103 0.87438 2.1144 0.56172 0.60414 1.2665 0.8956 2.1144 0.87438zm4.4695 0.2115 3.681 3.6819-1.259 1.284-3.6817-3.7 0.0019784-0.69479-0.090043-0.098846c-0.87973 0.76087-1.92 1.1413-3.1207 1.1413-1.3553 0-2.5025-0.46363-3.4417-1.3909s-1.4088-2.0686-1.4088-3.4239c0-1.3553 0.4696-2.4966 1.4088-3.4239 0.9392-0.92727 2.0864-1.3969 3.4417-1.4088 1.3553-0.011889 2.4906 0.45771 3.406 1.4088 0.9154 0.95107 1.379 2.0924 1.3909 3.4239 0 1.2126-0.38043 2.2588-1.1413 3.1385l0.098834 0.090049z" />
                                </svg>
                                <span className="gcsc-find-more-on-google-text">
                                  Search for
                                </span>
                                <span className="text-[rgb(36,192,39)]">
                                  {searchContent}
                                </span>
                                <span className="gcsc-find-more-on-google-text">
                                  on Google
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
      )}

      {error && (
        <>
          <h1 className="px-4">{error}</h1>
        </>
      )}
    </>
  );
};

export default SearchComponent;
