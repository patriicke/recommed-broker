/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Score from "../../common/components/score/Score";
import { BrokerReviewType } from "../../common/types/broker_review.type";
import { brokers, brokerReviews } from "../../data";

export const ProsConsMapper: React.FC<{ pros: string[]; cons: string[] }> = ({
  pros,
  cons
}): JSX.Element => {
  let prosConsTable: { pro: string; con: string }[] = [];
  if (pros.length > cons.length) {
    prosConsTable = pros.map((pro, index) => ({
      pro: pro,
      con: cons[index]
    }));
  } else if (cons.length > pros.length) {
    prosConsTable = cons.map((con, index) => ({
      pro: pros[index],
      con: con
    }));
  } else {
    prosConsTable = pros.map((pro, index) => ({
      pro: pro,
      con: cons[index]
    }));
  }

  return (
    <React.Fragment>
      {prosConsTable.map(({ pro, con }, index) => (
        <tr key={index}>
          <td className='pro_cell'>
            {pro ? (
              <>
                <span className='pro_bullet'>•</span>
                {pro}
              </>
            ) : null}
          </td>
          <td className='con_cell'>
            {con ? (
              <>
                <span className='con_bullet'>•</span> {con}
              </>
            ) : null}
          </td>
        </tr>
      ))}
    </React.Fragment>
  );
};

export const ReadMoreReadLessButton: React.FC<{
  value: number;
  currentValue: number;
  setState: Function;
}> = ({ value, currentValue, setState }): JSX.Element => {
  const click = () => {
    if (value === currentValue) setState(0);
    else setState(value);
  };
  return (
    <a
      className='chapterToggleBtn cursor-pointer'
      data-chapter-id='review-part-fees'
      data-state='false'
      onClick={click}
      href='#'
    >
      {value === currentValue ? "Read less" : "Read more..."}
    </a>
  );
};

const BrokerReview = () => {
  const router = useRouter();
  const { bname } = router.query;
  const [foundBroker, setFoundBroker] = useState<BrokerReviewType>();
  const [loading, setLoading] = React.useState(true);
  const [currentDisplay, setCurrentDisplay] = useState<number>(0);

  useEffect(() => {
    if (bname) {
      const broker = brokerReviews.find((b) =>
        b.broker_details.name
          .toLowerCase()
          .includes(bname.toString().toLowerCase())
      );
      if (broker) setFoundBroker(broker as unknown as BrokerReviewType);

      setLoading(false);
    }
  }, [bname]);

  if (loading) return <div className='p-6'>Loading...</div>;

  if (!foundBroker) return <div>not found!</div>;

  return (
    <div className='bc_broker_page h-full relative'>
      <div className='bg-slate-100'>
        <div className='bc_padded_row_wide'>
          <div className='flex justify-between items-center h-9'>
            <ol className='breadcrumbs '>
              <li className='breadcrumb-item  mobile_hidden'>
                <span className='no-targetblank cursor-pointer'>
                  <Link href='/'>Home</Link>
                </span>
              </li>
              <li className='breadcrumb-item  '>
                <span className='svg_icon bx-right-arrow-alt mobile_hidden' />
                <span className='svg_icon bx-arrow-back mobile_only' />
                <a
                  href='https://brokerchooser.com/broker-reviews'
                  className='no-targetblank'
                >
                  Broker reviews
                </a>
              </li>
              <li className='breadcrumb-item   mobile_hidden'>
                <span className='svg_icon bx-right-arrow-alt mobile_hidden' />
                <span>{foundBroker.broker_details.name} review</span>
              </li>
            </ol>
            <a
              id='advertiser-disclosure--link'
              href='https://top5broker.com/advertiser-disclosure'
              target='_blank'
              rel='nofollow noreferrer'
            >
              ⓘ Advertiser disclosure
            </a>
          </div>
        </div>
      </div>

      <a id='review-part-summary' />

      <div className='w-full overflow-x-hidden'>
        <div className='bc_padded_row_wide'>
          <div className='bc_broker_review_header_section'>
            <div className='logo_section'>
              <div className='bc_broker_review_logo_section'>
                <a
                  rel='nofollow noreferrer'
                  href='https://brokerchooser.com/go-to-broker/avatrade/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=header-logo'
                  target='_blank'
                  className='openAccountBtn bc-link-no-decor broker-logo-cta'
                >
                  <img
                    className='bc_broker_icon no-gallery'
                    alt={foundBroker?.broker_details.name}
                    src={foundBroker?.broker_details.broker_logo}
                  />
                </a>
                <div className='bc_article_infos'>
                  <h1>
                    <a
                      rel='nofollow noreferrer'
                      href={foundBroker?.broker_details?.broker_link}
                      target='_blank'
                      className='openAccountBtn '
                    >
                      {foundBroker?.broker_details.name} Review{" "}
                      {new Date().getFullYear()}
                    </a>
                  </h1>
                  <div className='hidden sm:flex sm:mt-2'>
                    <div className='flex items-center cursor-default'>
                      <a
                        href='https://top5broker.com/team/adam-nasli'
                        target='_blank'
                        rel='noreferrer'
                        onClick={(e) => e.preventDefault()}
                      >
                        <div className='bg-gray-500 w-10 h-10 rounded-full'>
                          <div
                            className='bg-[length:5rem_5rem] bg-top bg-no-repeat w-10 h-10 mr-4 rounded-full'
                            style={{
                              backgroundImage: `url(${foundBroker?.author?.profile_pic})`,
                              backgroundSize: "40px"
                            }}
                          ></div>
                        </div>
                      </a>
                      <div className='flex flex-col sm:flex-row sm:items-center ml-3 text-sm sm:text-base'>
                        <span>
                          <span>
                            Written by:{" "}
                            <span
                              className='font-semibold ml mr-2'
                              data-toggle='tooltip'
                            >
                              <a
                                href='https://brokerchooser.com/team/adam-nasli'
                                target='_blank'
                                rel='noreferrer'
                              >
                                {foundBroker?.author?.name}
                              </a>
                            </span>
                          </span>
                          <span>
                            Updated:{" "}
                            <span className='font-semibold ml mr-3'>
                              {foundBroker?.updated_at}
                            </span>
                          </span>
                        </span>
                        {foundBroker?.expert_verified && (
                          <span
                            className='border-2 border-gray-100 rounded-lg flex items-center text-xs font-semibold pr-3 pl-1 w-fit mt-1 sm:mt-0'
                            data-toggle='tooltip'
                          >
                            <span
                              className='svg_icon green-check-white-bg '
                              style={{ width: "20px", height: "20px" }}
                            />
                            <div className='ml'>Expert verified</div>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className='flex sm:hidden mt-3'>
              <div className='flex items-center cursor-default'>
                <a
                  href='https://brokerchooser.com/team/adam-nasli'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='bg-gray-500 w-10 h-10 rounded-full'>
                    <div
                      className='bg-[length:5rem_5rem] bg-top bg-no-repeat w-10 h-10 mr-4 rounded-full'
                      style={{
                        backgroundImage: `url(${foundBroker?.author?.profile_pic}})`
                      }}
                    ></div>
                  </div>
                </a>
                <div className='flex flex-col sm:flex-row sm:items-center ml-3 text-sm sm:text-base'>
                  <span>
                    <span>
                      Written by:
                      <span
                        className='font-semibold ml mr-2'
                        data-toggle='tooltip'
                      >
                        <a href='#' target='_blank' rel='noreferrer'>
                          {foundBroker?.author?.name}
                        </a>
                      </span>
                    </span>
                    <span>
                      Updated:{" "}
                      <span className='font-semibold ml mr-3'>
                        {foundBroker?.updated_at}
                      </span>
                    </span>
                  </span>
                  {foundBroker?.expert_verified && (
                    <span
                      className='border-2 border-gray-100 rounded-lg flex items-center text-xs font-semibold pr-3 pl-1 w-fit mt-1 sm:mt-0'
                      data-toggle='tooltip'
                    >
                      <span
                        className='svg_icon green-check-white-bg '
                        style={{ width: "20px", height: "20px" }}
                      />
                      <span className='ml'>Expert verified</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-wrap justify-between shrink-0 gap-4 sm:my-8 my-7'>
            {foundBroker?.features?.map((feature, index) => {
              return (
                <div
                  key={index}
                  className='flex-1 flex-col border-2 w-full md:min-w-0 min-w-full rounded-lg p-4 pr-12 sm:pr-10 max-w-sm grow'
                >
                  <div className='flex text-secondary-500 font-semibold'>
                    <span
                      className={`svg_icon ${feature.icon} mt-1 md:mt-1.5 mr-1`}
                      style={{ width: "15px", height: "15px" }}
                    />
                    {feature?.name}
                  </div>
                  <div className='leading-tight'>
                    <div>
                      {feature?.list?.map((item, index) => {
                        return (
                          <ul key={index} className='list-disc list-inside'>
                            <li>{item}</li>
                          </ul>
                        );
                      })}
                      {feature?.text}
                      {feature?.rating && (
                        <>
                          <span className='text-2xl font-bold'>
                            {feature.rating.a}
                          </span>
                          <span className='text-gray-500'>
                            /{feature.rating.b}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className='bc_body my-4'>
        <article className='relative'>
          <div className='flex justify-center relative'>
            <div className='flex max-w-[1200px] w-full px-4 sm:px-10 justify-start relative'>
              <div className='w-full lg:w-2/3 lg:mr-8'>
                <div data-chapter-id='review-part-summary'>
                  <h2>{foundBroker?.broker_details.name} review summary</h2>

                  <div className='summary_section'>
                    <div>
                      <div className='bc_custom_html'>
                        <p>{foundBroker?.broker_review_summary}</p>
                      </div>
                      <div className='bc_custom_html'>
                        <blockquote className='mb-0'>
                          <p>{foundBroker?.review_summary_blockquote}</p>
                        </blockquote>
                      </div>
                    </div>
                  </div>

                  <div className='my-10'>
                    <div className='flex flex-col sm:flex-row sm:items-stretch gap-4 my-4'>
                      <div className='border border-secondary-100 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:space-x-4 grow shrink-0 basis-0'>
                        <div className='flex flex-row space-x-4 mb-0'>
                          <span
                            className='flex-shrink-0 relative'
                            style={{ width: "40px", height: "40px" }}
                          >
                            <span
                              className='svg_icon world flex-shrink-0'
                              style={{ width: "40px", height: "40px" }}
                            />
                            <span
                              className='svg_icon round_success absolute right-0 bottom-0'
                              style={{ width: "20px", height: "20px" }}
                            />
                          </span>
                          <p>
                            <strong className='font-semibold'>
                              {foundBroker?.broker_details.name} is available in
                              Nigeria!
                            </strong>
                          </p>
                        </div>
                        <div className='flex-1' />
                        <div>
                          <a
                            className='bc_button bc_button__secondary openAccountBtn w-full'
                            href={foundBroker?.broker_details?.broker_link}
                            rel='nofollow noreferrer'
                            target='_blank'
                          >
                            Visit broker
                          </a>
                          <br />
                          <span className='bc-cta-cfd-warning '>
                            <strong>{foundBroker?.loose_money}</strong>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='grid grid-cols-2 md:grid-cols-4 justify-evenly gap-3 md:w-10/12 my-8'>
                    <div className='flex flex-col justify-between md:w-full ml-4 pr-4 md:border-r-2  border-r-2'>
                      <div className='text-xs text-gray-700'>
                        S&amp;P 500 CFD benchmark fee
                      </div>
                      <div className='font-semibold text-base'>
                        ${foundBroker.s_and_p_cfd_benchmark_fee?.fee}
                      </div>
                    </div>
                    <div className='flex flex-col justify-between md:w-full ml-4 pr-4 md:border-r-2  '>
                      <div className='text-xs text-gray-700'>
                        Credit/debit card deposit
                      </div>
                      <div className='font-semibold text-base'>
                        {foundBroker.credit_debit_card_deposit.isAvaliable
                          ? "Yes"
                          : "No"}
                      </div>
                    </div>
                    <div className='flex flex-col justify-between md:w-full ml-4 pr-4 md:border-r-2  border-r-2'>
                      <div className='text-xs text-gray-700'>
                        Minimum deposit
                      </div>
                      <div className='font-semibold text-base'>
                        ${foundBroker.minimum_deposit.fee}
                      </div>
                    </div>
                    <div className='flex flex-col justify-between md:w-full ml-4 pr-4   '>
                      <div className='text-xs text-gray-700'>
                        Negative balance protection
                      </div>
                      <div className='font-semibold text-base'>
                        {foundBroker.negative_balance_protection.isAvaliable
                          ? "Yes"
                          : "No"}
                      </div>
                    </div>
                  </div>
                  <div>
                    <table className='bc_procon_table'>
                      <tbody>
                        <tr>
                          <th className='pro_header'>
                            <div className='pro_header_icon' />
                            Pros
                          </th>
                          <th className='con_header'>
                            <div className='con_header_icon' />
                            Cons
                          </th>
                        </tr>
                        <ProsConsMapper
                          pros={foundBroker.pros}
                          cons={foundBroker.cons}
                        />
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className='flex flex-col gap-1 my-8 bg-secondary-50 bg-opacity-70 p-8'>
                  <div className='font-bold text-2xl mb-2'>Expert opinion</div>
                  <div>{foundBroker?.expert_opinion}</div>
                  <div className='flex flex-col md:flex-row justify-between md:items-center mt-4'>
                    <div className='flex'>
                      <div
                        className={`bg-[length:5rem_5rem] bg-top bg-no-repeat w-12 h-12 mr-2 rounded-full`}
                        style={{
                          backgroundImage: `url(${foundBroker?.expert?.profile_pic})`
                        }}
                      ></div>
                      <div className='flex flex-col gap-0'>
                        <div className='font-semibold'>
                          {foundBroker?.expert?.name}
                        </div>
                        <div className='text-xs text-gray-500'>
                          {foundBroker?.expert?.role}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`bg-no-repeat w-36 h-3 mr-4 mt-4 bg-[url(/favicon/favicon-gray.png)] backdrop-grayscale bg-contain`}
                    ></div>
                  </div>
                </div>
                <div className='bgcol'>
                  <h3>{foundBroker?.broker_details?.name} main highlights</h3>
                  <div className='bc_table_features_and_highlights'>
                    <div className='table-responsive'>
                      <table>
                        <tbody>
                          <tr>
                            <td>🗺️ Country of regulation</td>
                            <td>
                              {foundBroker.broker_main_highlights.country_of_regulation.map(
                                (country, index) =>
                                  `${country} ${
                                    index <
                                    foundBroker.broker_main_highlights
                                      .country_of_regulation.length -
                                      1
                                      ? ","
                                      : ""
                                  } 
                                  `
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>💰 Trading fees class</td>
                            <td>
                              {
                                foundBroker.broker_main_highlights
                                  .trading_fees_class
                              }
                            </td>
                          </tr>
                          <tr>
                            <td>💰 Inactivity fee charged</td>
                            <td>
                              {foundBroker.broker_main_highlights
                                .inactivity_fee_charged
                                ? "Yes"
                                : "No"}
                            </td>
                          </tr>
                          <tr>
                            <td>💰 Withdrawal fee amount</td>
                            <td>
                              $
                              {
                                foundBroker.broker_main_highlights
                                  .withdrawal_fee_amount
                              }
                            </td>
                          </tr>
                          <tr>
                            <td>💰 Minimum deposit</td>
                            <td>
                              <a href='#' target='_blank' rel='noreferrer'>
                                $
                                {
                                  foundBroker.broker_main_highlights
                                    .minimum_deposit
                                }
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>🕖 Time to open an account</td>
                            <td>
                              {
                                foundBroker.broker_main_highlights
                                  .time_to_open_account
                              }{" "}
                              day
                            </td>
                          </tr>
                          <tr>
                            <td>💳 Deposit with bank card</td>
                            <td>
                              {foundBroker.broker_main_highlights
                                .deposit_with_bank_card
                                ? "Available"
                                : "Not Available"}
                            </td>
                          </tr>
                          <tr>
                            <td>👛 Depositing with electronic wallet</td>
                            <td>
                              {foundBroker.broker_main_highlights
                                .deposit_with_electronic_wallet
                                ? "Available"
                                : "Not Available"}
                            </td>
                          </tr>
                          <tr>
                            <td>💱 Number of base currencies supported</td>
                            <td>
                              {
                                foundBroker.broker_main_highlights
                                  .number_of_base_currencies
                              }
                            </td>
                          </tr>
                          <tr>
                            <td>🎮 Demo account provided</td>
                            <td>
                              {foundBroker.broker_main_highlights
                                .demo_account_provided
                                ? "Yes"
                                : "No"}
                            </td>
                          </tr>
                          <tr>
                            <td>🛍️ Products offered</td>
                            <td>
                              {foundBroker.broker_main_highlights.products_offered.map(
                                (country, index) =>
                                  `${country} ${
                                    index <
                                    foundBroker.broker_main_highlights
                                      .products_offered.length -
                                      1
                                      ? ","
                                      : ""
                                  } 
                                  `
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                To read much more details about the broker's services and
                features, expand on the sections below.
                <div className='mt-8 justify-center block lg:hidden'>
                  <div className='top-5-box top-5 sticky bg-white flex flex-col w-full max-w-md rounded shadow-lg p-6 border-2 border-success-500'>
                    <div className='absolute top-0 left-0 w-full flex justify-center'>
                      <div className='rounded-b -mt-0.5 flex items-center bg-success-500 pl-1 pr-2 ml-2 text-white text-xs font-semibold cursor-default'>
                        <span
                          className='svg_icon green-check '
                          style={{ width: "20px", height: "20px" }}
                        />
                        <span className='whitespace-nowrap ml-1'>
                          Recommended for you
                        </span>
                      </div>
                    </div>
                    <div className='flex items-center font-semibold text-2xl mb-2 mt-2'>
                      <span
                        className='svg_icon green-check mr-2 '
                        style={{ width: "20px", height: "20px" }}
                      />
                      Top 5 brokers for you
                    </div>
                    <div className='mb-2'>
                      Based on your{" "}
                      <a href='/find-my-broker' target='_blank'>
                        earlier answers
                      </a>
                      , these brokers are great matches for you.
                    </div>
                    <div className='w-full'>
                      <div
                        data-tab-content-label='FMB results'
                        className='tab-content '
                      >
                        <div className='top-5-box-broker-list pb-13'>
                          <div className='top-5-box-broker-list pb-13'>
                            {brokers.slice(0, 5).map((broker, index) => (
                              <div
                                className='w-full border-b last:border-none border-secondary-50'
                                key={broker.broker_id}
                              >
                                <a
                                  rel='nofollow noreferrer'
                                  href={broker.broker_details.broker_link}
                                  data-broker-label='Interactive Brokers'
                                  data-broker-logo-url='/images/broker_logos/interactive-brokers-review.png'
                                  data-broker-id={5}
                                  data-custom-event-action
                                  data-measurement-brand='Stock broker'
                                  data-measurement-list='desktop-top5-box-tab1'
                                  data-report-special-affiliate-event='true'
                                  target='_blank'
                                  className='openAccountBtn '
                                  data-ga-event-category='CRO'
                                  data-ga-event-element-id='top-5-box-broker-cta-link_Interactive Brokers'
                                  data-ga-event-click={1}
                                >
                                  <div className='hover:bg-secondary-50 py-3'>
                                    <div className='flex items-center justify-between'>
                                      <div className='flex items-center justify-start w-7 pl-1 font-semibold'>
                                        {index + 1}.
                                      </div>
                                      <div className='w-full'>
                                        <div className='flex items-center text-sm font-semibold'>
                                          <div className='flex items-center pr-1.5'>
                                            <span
                                              className='w-8 h-8 bg-cover no-gallery'
                                              style={{
                                                backgroundImage: `url(${broker.broker_details.broker_logo})`
                                              }}
                                            />
                                          </div>
                                          <div>
                                            {broker.broker_details.name}
                                          </div>
                                        </div>
                                      </div>
                                      <span className='svg_icon top-5-box-arrow ' />
                                    </div>
                                  </div>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Fees */}
                <div>
                  <div
                    className='bc_broker_review_body_section_title'
                    id='review-part-fees'
                  >
                    <h2>
                      <span className='bc-article-chapter-title'>
                        Broker review
                      </span>
                      <br />
                      Fees
                    </h2>
                    <div className='flex'>
                      <Score
                        score={foundBroker?.broker_summary.fees.score ?? 0}
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-chapter-id='review-part-fees'
                  id='review-part-fees-one-liner'
                >
                  <div className='bc_custom_html'>
                    <a
                      rel='nofollow noreferrer'
                      href={foundBroker.broker_details.broker_link}
                      target='_blank'
                    >
                      Broker
                    </a>{" "}
                    {foundBroker.broker_summary.fees.summary}
                  </div>
                </div>
                <ReadMoreReadLessButton
                  value={1}
                  setState={setCurrentDisplay}
                  currentValue={currentDisplay}
                />
                <div
                  className={`${currentDisplay === 1 ? "" : "hidden"}`}
                  data-chapter-id='review-part-fees'
                  id='review-part-fees-content'
                >
                  <div className='bc_custom_html'>
                    <blockquote>
                      <a
                        rel='nofollow noreferrer'
                        href={foundBroker.broker_details.broker_link}
                        target='_blank'
                      >
                        Broker
                      </a>{" "}
                      {foundBroker.broker_summary.fees.summary}
                    </blockquote>
                    <table className='bc_procon_table'>
                      <tbody>
                        <tr>
                          <th className='pro_header'>Pros</th>
                          <th className='con_header'>Cons</th>
                        </tr>
                        <ProsConsMapper
                          pros={foundBroker.broker_summary.fees.pros}
                          cons={foundBroker.broker_summary.fees.cons}
                        />
                      </tbody>
                    </table>
                    <div className='table-responsive'>
                      <table>
                        <caption>AvaTrade fees snapshot</caption>
                        <thead>
                          <tr>
                            <th>Assets</th>
                            <th>Fee level</th>
                            <th>Fee terms</th>
                          </tr>
                        </thead>
                        <tbody>
                          {foundBroker.broker_summary.fees.fees_snapshot.map(
                            (snapshot, index) => {
                              return (
                                <tr key={index}>
                                  <td>{snapshot.assets}</td>
                                  <td>{snapshot.fee_level}</td>
                                  <td>{snapshot.fee_terms}</td>
                                </tr>
                              );
                            }
                          )}
                        </tbody>
                      </table>
                    </div>
                    {/* <iframe
                      data-src='https://datawrapper.dwcdn.net/4rf9x'
                      title='Datawrapper interactive chart'
                      aria-label='Datawrapper interactive chart'
                      id='datawrapper-chart-4rf9x'
                      style={{
                        width: 0,
                        minWidth: "100% !important",
                        border: "none"
                      }}
                      height={400}
                      src='https://datawrapper.dwcdn.net/4rf9x'
                    ></iframe> */}
                    <h3>How we ranked fees</h3>
                    <p>
                      {
                        foundBroker.broker_summary.fees.how_we_ranked_fees
                          .description
                      }
                    </p>
                    <p>
                      {
                        foundBroker.broker_summary.fees.how_we_ranked_fees
                          .basic_terms_related_to_broker_fees.description
                      }
                    </p>
                    <ul>
                      {foundBroker.broker_summary.fees.how_we_ranked_fees.basic_terms_related_to_broker_fees.terms.map(
                        (term, index) => {
                          return <li key={index}>{term}</li>;
                        }
                      )}
                    </ul>
                    <p>
                      <strong>
                        {
                          foundBroker.broker_summary.fees.how_we_ranked_fees
                            .most_relevant_fees.description
                        }
                        .
                      </strong>{" "}
                      {
                        foundBroker.broker_summary.fees.how_we_ranked_fees
                          .most_relevant_fees.data
                      }
                    </p>
                    <p>
                      {
                        foundBroker.broker_summary.fees.how_we_ranked_fees
                          .similar_ones.data
                      }
                    </p>
                    <p>
                      To have a clear overview of Broker, let's start with the
                      trading fees.
                    </p>
                    <h3>
                      <a id='trading-fees' target='_blank' />
                      Broker trading fees
                    </h3>
                    <p>
                      {
                        foundBroker.broker_summary.fees.how_we_ranked_fees
                          .broker_trading_fees.low_or_high
                      }
                    </p>
                    <p>
                      {
                        foundBroker.broker_summary.fees.how_we_ranked_fees
                          .broker_trading_fees.description
                      }
                    </p>
                    <p>
                      We have chosen popular instruments within each asset
                      class:
                    </p>
                    <ul>
                      {foundBroker.broker_summary.fees.how_we_ranked_fees.popular_instruments.map(
                        ({ name, elements }, index) => {
                          return (
                            <li key={index}>
                              <strong>{name}:</strong>{" "}
                              {elements.map((element, index) => {
                                if (index === elements.length - 1) {
                                  return element;
                                } else if (index === elements.length - 2) {
                                  return `${element} and `;
                                } else {
                                  return `${element},`;
                                }
                              })}
                            </li>
                          );
                        }
                      )}
                    </ul>
                    <p>
                      {
                        foundBroker.broker_summary.fees.how_we_ranked_fees
                          .leverages.description
                      }
                    </p>
                    <ul>
                      {foundBroker.broker_summary.fees.how_we_ranked_fees.leverages.data.map(
                        (dt, i) => {
                          return <li key={i}>{dt}</li>;
                        }
                      )}
                    </ul>
                    <p>
                      {
                        foundBroker.broker_summary.fees.how_we_ranked_fees
                          .leverages.end_description_1
                      }{" "}
                    </p>
                    <h4>CFD fees</h4>
                    <p>
                      Broker has{" "}
                      <strong>
                        {
                          foundBroker.broker_summary.fees.how_we_ranked_fees
                            .cfd_fees.description
                        }
                      </strong>
                      .
                    </p>
                    <div className='table-responsive'>
                      <table
                        className='bc-article-gen-table bc-table-collapsable'
                        data-open-rows={2}
                      >
                        <caption>
                          {
                            foundBroker.broker_summary.fees.how_we_ranked_fees
                              .cfd_fees.title
                          }
                        </caption>
                        <thead>
                          <tr>
                            <th scope='col'>&nbsp;</th>
                            <th
                              className='bc-article-gen-table-broker-header bc-article-gen-table-cell-selected-vertical'
                              data-broker-id={104}
                              data-toggle='tooltip'
                              scope='col'
                            >
                              <a
                                rel='nofollow noreferrer'
                                href='https://brokerchooser.com/go-to-broker/avatrade/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=TableNameLinkClick'
                                data-broker-label='AvaTrade'
                                data-broker-logo-url='/images/broker_logos/avatrade-review.png'
                                data-broker-id={104}
                                data-custom-event-action
                                data-measurement-brand='CFD and forex broker'
                                data-measurement-list='TableNameLinkClick'
                                data-report-special-affiliate-event='false'
                                target='_blank'
                                className='openAccountBtn '
                              >
                                Broker
                              </a>
                            </th>
                            <th
                              className='bc-article-gen-table-broker-header'
                              data-broker-id={96}
                              data-toggle='tooltip'
                              scope='col'
                            >
                              <a
                                rel='nofollow noreferrer'
                                href='https://brokerchooser.com/go-to-broker/xm/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=TableNameLinkClick'
                                data-broker-label='XM'
                                data-broker-logo-url='/images/broker_logos/xm-review.png'
                                data-broker-id={96}
                                data-custom-event-action
                                data-measurement-brand='CFD and forex broker'
                                data-measurement-list='TableNameLinkClick'
                                data-report-special-affiliate-event='false'
                                target='_blank'
                                className='openAccountBtn '
                              >
                                XM
                              </a>
                            </th>
                            <th
                              className='bc-article-gen-table-broker-header'
                              data-broker-id={184}
                              data-toggle='tooltip'
                              scope='col'
                            >
                              <a
                                rel='nofollow noreferrer'
                                href='https://brokerchooser.com/go-to-broker/admirals-admiral-markets/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=TableNameLinkClick'
                                data-broker-label='Admirals (Admiral Markets)'
                                data-broker-logo-url='/images/broker_logos/admirals-admiral-markets-review.png'
                                data-broker-id={184}
                                data-custom-event-action
                                data-measurement-brand='CFD and forex broker'
                                data-measurement-list='TableNameLinkClick'
                                data-report-special-affiliate-event='false'
                                target='_blank'
                                className='openAccountBtn '
                              >
                                Admirals (Admiral Markets)
                              </a>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {foundBroker.broker_summary.fees.how_we_ranked_fees.cfd_fees.table.map(
                            (vl) => (
                              <tr
                                className='bc-article-gen-table-tr'
                                data-param-id={344}
                                key={vl.name_of_fee}
                              >
                                <th data-toggle='tooltip'>{vl.name_of_fee}</th>
                                <td className='bc-article-gen-table-td bc-article-gen-table-cell-selected-vertical'>
                                  <span
                                    className='bc-broker-data-field'
                                    data-broker-id={104}
                                    data-param-id={344}
                                  >
                                    {vl.broker_fee}
                                  </span>
                                </td>
                                <td className='bc-article-gen-table-td'>
                                  <span
                                    className='bc-broker-data-field'
                                    data-broker-id={96}
                                    data-param-id={344}
                                  >
                                    {vl.xm_fee}
                                  </span>
                                </td>
                                <td className='bc-article-gen-table-td'>
                                  <span
                                    className='bc-broker-data-field'
                                    data-broker-id={184}
                                    data-param-id={344}
                                  >
                                    {vl.admiral}
                                  </span>
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                      {/* <button className='bc_button--rounded'>See more</button> */}
                    </div>
                    <h4>Forex fees</h4>
                    <p>
                      {
                        foundBroker.broker_summary.fees.how_we_ranked_fees
                          .forex_fees.description
                      }
                    </p>
                    <div className='table-responsive'>
                      <table
                        className='bc-article-gen-table bc-table-collapsable'
                        data-open-rows={3}
                      >
                        <caption>
                          {
                            foundBroker.broker_summary.fees.how_we_ranked_fees
                              .forex_fees.title
                          }
                        </caption>
                        <thead>
                          <tr>
                            <th scope='col'>&nbsp;</th>
                            <th
                              className='bc-article-gen-table-broker-header bc-article-gen-table-cell-selected-vertical'
                              data-broker-id={104}
                              data-toggle='tooltip'
                              scope='col'
                            >
                              <a
                                rel='nofollow noreferrer'
                                href='https://brokerchooser.com/go-to-broker/avatrade/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=TableNameLinkClick'
                                data-broker-label='AvaTrade'
                                data-broker-logo-url='/images/broker_logos/avatrade-review.png'
                                data-broker-id={104}
                                data-custom-event-action
                                data-measurement-brand='CFD and forex broker'
                                data-measurement-list='TableNameLinkClick'
                                data-report-special-affiliate-event='false'
                                target='_blank'
                                className='openAccountBtn '
                              >
                                Broker
                              </a>
                            </th>
                            <th
                              className='bc-article-gen-table-broker-header'
                              data-broker-id={96}
                              data-toggle='tooltip'
                              scope='col'
                            >
                              <a
                                rel='nofollow noreferrer'
                                href='https://brokerchooser.com/go-to-broker/xm/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=TableNameLinkClick'
                                data-broker-label='XM'
                                data-broker-logo-url='/images/broker_logos/xm-review.png'
                                data-broker-id={96}
                                data-custom-event-action
                                data-measurement-brand='CFD and forex broker'
                                data-measurement-list='TableNameLinkClick'
                                data-report-special-affiliate-event='false'
                                target='_blank'
                                className='openAccountBtn '
                              >
                                XM
                              </a>
                            </th>
                            <th
                              className='bc-article-gen-table-broker-header'
                              data-broker-id={184}
                              data-toggle='tooltip'
                              scope='col'
                            >
                              <a
                                rel='nofollow noreferrer'
                                href='https://brokerchooser.com/go-to-broker/admirals-admiral-markets/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=TableNameLinkClick'
                                data-broker-label='Admirals (Admiral Markets)'
                                data-broker-logo-url='/images/broker_logos/admirals-admiral-markets-review.png'
                                data-broker-id={184}
                                data-custom-event-action
                                data-measurement-brand='CFD and forex broker'
                                data-measurement-list='TableNameLinkClick'
                                data-report-special-affiliate-event='false'
                                target='_blank'
                                className='openAccountBtn '
                              >
                                Admirals (Admiral Markets)
                              </a>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {foundBroker.broker_summary.fees.how_we_ranked_fees.forex_fees.table.map(
                            (vl) => (
                              <tr
                                className='bc-article-gen-table-tr'
                                data-param-id={164}
                                key={vl.name_of_fee}
                              >
                                <th data-toggle='tooltip'>{vl.name_of_fee}</th>
                                <td className='bc-article-gen-table-td bc-article-gen-table-cell-selected-vertical'>
                                  <span
                                    className='bc-broker-data-field'
                                    data-broker-id={104}
                                    data-param-id={164}
                                  >
                                    {vl.broker_fee}
                                  </span>
                                </td>
                                <td className='bc-article-gen-table-td'>
                                  <span
                                    className='bc-broker-data-field'
                                    data-broker-id={96}
                                    data-param-id={164}
                                  >
                                    {vl.xm_fee}
                                  </span>
                                </td>
                                <td className='bc-article-gen-table-td'>
                                  <span
                                    className='bc-broker-data-field'
                                    data-broker-id={184}
                                    data-param-id={164}
                                  >
                                    {vl.admiral}
                                  </span>
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                    <p>
                      Forex trading fees at Broker are built into the spreads.
                    </p>
                    <p>
                      forex_trading_fees_spreads
                      {
                        foundBroker.broker_summary.fees.how_we_ranked_fees
                          .forex_trading_fees_spreads.description
                      }
                    </p>
                    <ol>
                      {foundBroker.broker_summary.fees.how_we_ranked_fees.forex_trading_fees_spreads.steps.map(
                        (val) => {
                          return <li key={val}>{val}</li>;
                        }
                      )}
                    </ol>
                    {/* <div className=' ratio-box' style={{ maxWidth: "821px" }}>
                      <picture style={{ paddingBottom: "93.422655298417%" }}>
                        <a
                          href='https://brokerchooser.com/uploads/images/broker-reviews/avatrade-review/avatrade-review-forex-calculator-2.png'
                          target='_blank'
                          rel='noreferrer'
                        >
                          <img
                            alt='AvaTrade review - Forex calculator'
                            className='lazyload'
                            data-src='https://brokerchooser.com/uploads/images/broker-reviews/avatrade-review/avatrade-review-forex-calculator-2.png'
                            height={767}
                            src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
                            width={821}
                          />
                        </a>
                      </picture>
                    </div> */}
                    <span className='bc-article-image-caption'>
                      Broker review - Forex calculator
                    </span>
                    <p />
                    <h3>
                      <a id='non-trading-fees' target='_blank' />
                      Non-trading fees
                    </h3>
                    <p>
                      {
                        foundBroker.broker_summary.fees.how_we_ranked_fees
                          .non_trading_fees.description1
                      }
                    </p>
                    <p>
                      {
                        foundBroker.broker_summary.fees.how_we_ranked_fees
                          .non_trading_fees.description2
                      }
                    </p>
                    <div className='table-responsive'>
                      <table className='bc-article-gen-table'>
                        <caption>
                          {
                            foundBroker.broker_summary.fees.how_we_ranked_fees
                              .non_trading_fees.title
                          }
                        </caption>
                        <thead>
                          <tr>
                            <th scope='col'>&nbsp;</th>
                            <th
                              className='bc-article-gen-table-broker-header bc-article-gen-table-cell-selected-vertical'
                              data-broker-id={104}
                              data-toggle='tooltip'
                              scope='col'
                            >
                              <a
                                rel='nofollow noreferrer'
                                href='https://brokerchooser.com/go-to-broker/avatrade/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=TableNameLinkClick'
                                data-broker-label='AvaTrade'
                                data-broker-logo-url='/images/broker_logos/avatrade-review.png'
                                data-broker-id={104}
                                data-custom-event-action
                                data-measurement-brand='CFD and forex broker'
                                data-measurement-list='TableNameLinkClick'
                                data-report-special-affiliate-event='false'
                                target='_blank'
                                className='openAccountBtn '
                              >
                                Broker
                              </a>
                            </th>
                            <th
                              className='bc-article-gen-table-broker-header'
                              data-broker-id={96}
                              data-toggle='tooltip'
                              scope='col'
                            >
                              <a
                                rel='nofollow noreferrer'
                                href='https://brokerchooser.com/go-to-broker/xm/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=TableNameLinkClick'
                                data-broker-label='XM'
                                data-broker-logo-url='/images/broker_logos/xm-review.png'
                                data-broker-id={96}
                                data-custom-event-action
                                data-measurement-brand='CFD and forex broker'
                                data-measurement-list='TableNameLinkClick'
                                data-report-special-affiliate-event='false'
                                target='_blank'
                                className='openAccountBtn '
                              >
                                XM
                              </a>
                            </th>
                            <th
                              className='bc-article-gen-table-broker-header'
                              data-broker-id={184}
                              data-toggle='tooltip'
                              scope='col'
                            >
                              <a
                                rel='nofollow noreferrer'
                                href='https://brokerchooser.com/go-to-broker/admirals-admiral-markets/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=TableNameLinkClick'
                                data-broker-label='Admirals (Admiral Markets)'
                                data-broker-logo-url='/images/broker_logos/admirals-admiral-markets-review.png'
                                data-broker-id={184}
                                data-custom-event-action
                                data-measurement-brand='CFD and forex broker'
                                data-measurement-list='TableNameLinkClick'
                                data-report-special-affiliate-event='false'
                                target='_blank'
                                className='openAccountBtn '
                              >
                                Admirals (Admiral Markets)
                              </a>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {foundBroker.broker_summary.fees.how_we_ranked_fees.non_trading_fees.table.map(
                            (row) => {
                              return (
                                <tr
                                  className='bc-article-gen-table-tr'
                                  data-param-id={98}
                                  key={row.admiral}
                                >
                                  <th data-toggle='tooltip'>
                                    {row.name_of_fee}
                                  </th>
                                  <td
                                    className='bc-article-gen-table-td bc-article-gen-table-cell-selected-vertical'
                                    data-toggle='tooltip'
                                  >
                                    <span
                                      className='bc-broker-data-field'
                                      data-broker-id={104}
                                      data-param-id={98}
                                    >
                                      {" "}
                                      <span className='bc-ilbp-no bc-inverse-logic-boolean-param'>
                                        {row.broker_fee}
                                      </span>{" "}
                                      <span className='tooltip-icon' />{" "}
                                    </span>
                                  </td>
                                  <td
                                    className='bc-article-gen-table-td'
                                    data-toggle='tooltip'
                                  >
                                    <span
                                      className='bc-broker-data-field'
                                      data-broker-id={96}
                                      data-param-id={98}
                                    >
                                      {" "}
                                      <span className='bc-ilbp-no bc-inverse-logic-boolean-param'>
                                        {row.xm_fee}
                                      </span>{" "}
                                      <span className='tooltip-icon' />{" "}
                                    </span>
                                  </td>
                                  <td
                                    className='bc-article-gen-table-td'
                                    data-toggle='tooltip'
                                  >
                                    <span
                                      className='bc-broker-data-field'
                                      data-broker-id={184}
                                      data-param-id={98}
                                    >
                                      {" "}
                                      <span className='bc-ilbp-no bc-inverse-logic-boolean-param'>
                                        {row.admiral}
                                      </span>{" "}
                                      <span className='tooltip-icon' />{" "}
                                    </span>
                                  </td>
                                </tr>
                              );
                            }
                          )}
                        </tbody>
                      </table>
                    </div>
                    <p>&nbsp;</p>
                  </div>
                </div>
                {/* Account Opening */}
                <div>
                  <div
                    className='bc_broker_review_body_section_title'
                    id='review-part-account-opening'
                    data-gtm-vis-first-on-screen-6792802_289={6151}
                    data-gtm-vis-first-on-screen-6792802_287={6154}
                    data-gtm-vis-first-on-screen-6792802_288={6155}
                  >
                    <h2>
                      <span className='bc-article-chapter-title'>
                        Broker review
                      </span>
                      <br />
                      Account opening
                    </h2>
                    <div className='flex'>
                      <Score
                        score={
                          foundBroker?.broker_summary.account_opening.score ?? 0
                        }
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-chapter-id='review-part-account-opening'
                  id='review-part-account-opening-one-liner'
                >
                  <div className='bc_custom_html'>
                    Account opening at{" "}
                    <a
                      rel='nofollow noreferrer'
                      href={foundBroker.broker_details.broker_link}
                      target='_blank'
                    >
                      Broker
                    </a>{" "}
                    {foundBroker.broker_summary.account_opening.summary}
                  </div>
                </div>
                <ReadMoreReadLessButton
                  currentValue={currentDisplay}
                  setState={setCurrentDisplay}
                  value={2}
                />
                <div
                  className={`${currentDisplay === 2 ? "" : "hidden"}`}
                  data-chapter-id='review-part-account-opening'
                  id='review-part-account-opening-content'
                >
                  <div className='bc_custom_html'>
                    <blockquote>
                      Account opening at{" "}
                      <a
                        rel='nofollow noreferrer'
                        href='https://brokerchooser.com/go-to-broker/avatrade/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=brokername-link'
                        target='_blank'
                      >
                        Broker
                      </a>{" "}
                      is smooth and fully digital. You can start trading
                      literally in minutes.
                    </blockquote>
                    <table className='bc_procon_table'>
                      <tbody>
                        <tr>
                          <th className='pro_header'>Pros</th>
                          <th className='con_header'>Cons</th>
                        </tr>
                        <ProsConsMapper
                          pros={foundBroker.broker_summary.account_opening.pros}
                          cons={foundBroker.broker_summary.account_opening.cons}
                        />
                      </tbody>
                    </table>
                    <h3>Can you open an account?</h3>
                    <div
                      className='bc_geochecker'
                      data-broker-id={104}
                      data-broker-name='AvaTrade'
                    >
                      <div className='geochecker_image'>
                        <span className='svg_icon world ' />
                        <span className='svg_icon bc_geochecker_status round_success' />
                      </div>
                      <div>
                        <p className='bc_status_text'>
                          Yes, you can open an account at{" "}
                          <span className='bc_status_highlight'>
                            {foundBroker.broker_details.name}
                          </span>{" "}
                          if you live in Nigeria!!
                        </p>
                        <select
                          name='country'
                          className='bc_geochecker_country_selector'
                        >
                          <option value={153} data-country-name='Nigeria'>
                            Nigeria
                          </option>
                        </select>
                      </div>
                    </div>
                    <p className='text-center bc-article-button-container'>
                      <a
                        className='bc_button bc_button__secondary openAccountBtn'
                        href='https://brokerchooser.com/go-to-broker/avatrade/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=chapter-ao-button%2Faccount-opening'
                        data-broker-label='AvaTrade'
                        data-broker-logo-url='/images/broker_logos/avatrade-review.png'
                        data-broker-id={104}
                        data-custom-event-action
                        data-report-special-affiliate-event='false'
                        data-skip-country-check='false'
                        data-measurement-brand='CFD and forex broker'
                        data-measurement-list='chapter-ao-button/account-opening'
                        rel='nofollow noreferrer'
                        target='_blank'
                      >
                        {foundBroker?.broker_details.name} Visit broker
                      </a>
                      <br />
                      <span className='bc-cta-cfd-warning '>
                        <strong>{foundBroker.loose_money}</strong>
                      </span>
                    </p>
                    <p>
                      <strong>
                        {
                          foundBroker.broker_summary.account_opening.acceptance
                            .strong_heading
                        }
                      </strong>
                      {
                        foundBroker.broker_summary.account_opening.acceptance
                          .strong_heading
                      }
                    </p>
                    <h3>What is the minimum deposit at Broker?</h3>
                    <p>
                      The required <strong>Broker minimum deposit is</strong>{" "}
                      <strong>
                        <span
                          className='bc-broker-data-field'
                          data-broker-id={104}
                          data-param-id={216}
                        >
                          $
                          {
                            foundBroker.broker_summary.account_opening
                              .minimum_deposit.amount
                          }
                        </span>
                      </strong>
                      &nbsp;via credit/debit cards, wire transfers
                      or&nbsp;e-wallets.
                    </p>
                    <h3>Account types</h3>
                    <p>
                      The <strong>types of accounts </strong>available at Broker
                      are:
                    </p>
                    <ul>
                      {foundBroker.broker_summary.account_opening.account_types.map(
                        (acc_type) => {
                          return (
                            <li key={acc_type.name}>
                              {acc_type.name}- {acc_type.description}
                            </li>
                          );
                        }
                      )}
                    </ul>
                    <p>
                      {
                        foundBroker.broker_summary.account_opening
                          .professional_trading_account
                      }
                    </p>
                    {foundBroker.broker_summary.account_opening
                      .demo_account && <p>A demo account is also offered.</p>}
                    <p>{foundBroker.broker_summary.account_opening?.testing}</p>
                    <h3>How to open your account</h3>
                    <p>
                      <strong>
                        {
                          foundBroker.broker_summary.account_opening
                            .how_to_open_account.strong_header
                        }
                      </strong>
                      ,
                      {
                        foundBroker.broker_summary.account_opening
                          .how_to_open_account.description
                      }
                    </p>
                    <ol>
                      {foundBroker.broker_summary.account_opening.how_to_open_account.steps.map(
                        (step) => (
                          <li key={step}>{step}</li>
                        )
                      )}
                    </ol>
                    <p />

                    {/* <div className=' ratio-box' style={{ maxWidth: "1777px" }}>
                      <picture style={{ paddingBottom: "71.468767585819%" }}>
                        <a
                          href='https://brokerchooser.com/uploads/images/broker-reviews/avatrade-review/avatrade-review-account-opening-1.png'
                          target='_blank'
                          rel='noreferrer'
                        >
                          <img
                            alt='AvaTrade Review - Account opening'
                            className=' lazyload'
                            data-src='https://brokerchooser.com/uploads/images/broker-reviews/avatrade-review/avatrade-review-account-opening-1.png'
                            height={1270}
                            src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
                            width={1777}
                          />
                        </a>
                      </picture>
                    </div> */}

                    <span className='bc-article-image-caption'>
                      Broker Review - Account opening
                    </span>
                    <p />
                    <div className="z-auto relative rounded-lg after:content-[''] after:absolute after:top-0 after:bottom-0 after:rounded-lg after:w-1 after:h-full bg-secondary-50 after:bg-secondary-200">
                      <div className='mx-4 my-4'>
                        <h3 className='text-xl sm:text-2xl'>
                          Our best alternatives to Broker are:
                        </h3>
                        <p className='text-xs sm:text-sm'>
                          The highest ranking competitors are:
                        </p>
                        <ol className='list-disc list-inside'>
                          {foundBroker.broker_summary.account_opening.best_alternative?.map(
                            (best_alternative, index) => {
                              return (
                                <li key={index}>
                                  <a
                                    className='cursor-pointer'
                                    href={`${window.location.origin}/broker-reviews${best_alternative.broker_link}`}
                                    target='_blank'
                                    rel='noreferrer'
                                  >
                                    {best_alternative.broker_name}
                                  </a>
                                </li>
                              );
                            }
                          )}
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Deposit and Withdrawal */}
                <div>
                  <div
                    className='bc_broker_review_body_section_title'
                    id='review-part-deposit-and-withdrawal'
                  >
                    <h2>
                      <span className='bc-article-chapter-title'>
                        Broker review
                      </span>
                      <br />
                      Deposit and withdrawal
                    </h2>
                    <div className='flex'>
                      <Score
                        score={
                          foundBroker?.broker_summary.deposit_and_withdrawal
                            .score ?? 0
                        }
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-chapter-id='review-part-deposit-and-withdrawal'
                  id='review-part-deposit-and-withdrawal-one-liner'
                >
                  <div className='bc_custom_html'>
                    <a
                      rel='nofollow noreferrer'
                      href={foundBroker.broker_details.broker_link}
                      target='_blank'
                    >
                      Broker
                    </a>{" "}
                    {foundBroker.broker_summary.deposit_and_withdrawal.summary}
                  </div>
                </div>
                <ReadMoreReadLessButton
                  value={3}
                  currentValue={currentDisplay}
                  setState={setCurrentDisplay}
                />
                <div
                  className={`${currentDisplay === 3 ? "" : "hidden"}`}
                  data-chapter-id='review-part-deposit-and-withdrawal'
                  id='review-part-deposit-and-withdrawal-content'
                >
                  <div className='bc_custom_html'>
                    <blockquote>
                      {
                        foundBroker.broker_summary.deposit_and_withdrawal
                          .summary
                      }
                    </blockquote>
                    <table className='bc_procon_table'>
                      <tbody>
                        <tr>
                          <th className='pro_header'>Pros</th>
                          <th className='con_header'>Cons</th>
                        </tr>
                        <ProsConsMapper
                          pros={
                            foundBroker.broker_summary.deposit_and_withdrawal
                              .pros
                          }
                          cons={
                            foundBroker.broker_summary.deposit_and_withdrawal
                              .cons
                          }
                        />
                      </tbody>
                    </table>
                    <h3>
                      <a id='base-currencies' target='_blank' />
                      Account base currencies
                    </h3>
                    <p>
                      At Broker , you can choose from the following base
                      currencies:{" "}
                      <strong>
                        {foundBroker.broker_summary.deposit_and_withdrawal.account_base_currency.base_currencies.map(
                          (cur) => {
                            return cur;
                          }
                        )}
                      </strong>
                      .{" "}
                      {
                        foundBroker.broker_summary.deposit_and_withdrawal
                          .account_base_currency.given_note
                      }
                    </p>
                    <div className='table-responsive'>
                      <table className='bc-article-gen-table'>
                        <caption>
                          Base currencies at Broker vs similar brokers
                        </caption>
                        <thead>
                          <tr>
                            <th scope='col'>&nbsp;</th>
                            <th
                              className='bc-article-gen-table-broker-header bc-article-gen-table-cell-selected-vertical'
                              data-broker-id={104}
                              data-toggle='tooltip'
                              scope='col'
                            >
                              <a
                                rel='nofollow noreferrer'
                                href='https://brokerchooser.com/go-to-broker/avatrade/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=TableNameLinkClick'
                                data-broker-label='AvaTrade'
                                data-broker-logo-url='/images/broker_logos/avatrade-review.png'
                                data-broker-id={104}
                                data-custom-event-action
                                data-measurement-brand='CFD and forex broker'
                                data-measurement-list='TableNameLinkClick'
                                data-report-special-affiliate-event='false'
                                target='_blank'
                                className='openAccountBtn '
                              >
                                Broker
                              </a>
                            </th>
                            <th
                              className='bc-article-gen-table-broker-header'
                              data-broker-id={96}
                              data-toggle='tooltip'
                              scope='col'
                            >
                              <a
                                rel='nofollow noreferrer'
                                href='https://brokerchooser.com/go-to-broker/xm/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=TableNameLinkClick'
                                data-broker-label='XM'
                                data-broker-logo-url='/images/broker_logos/xm-review.png'
                                data-broker-id={96}
                                data-custom-event-action
                                data-measurement-brand='CFD and forex broker'
                                data-measurement-list='TableNameLinkClick'
                                data-report-special-affiliate-event='false'
                                target='_blank'
                                className='openAccountBtn '
                              >
                                XM
                              </a>
                            </th>
                            <th
                              className='bc-article-gen-table-broker-header'
                              data-broker-id={184}
                              data-toggle='tooltip'
                              scope='col'
                            >
                              <a
                                rel='nofollow noreferrer'
                                href='https://brokerchooser.com/go-to-broker/admirals-admiral-markets/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=TableNameLinkClick'
                                data-broker-label='Admirals (Admiral Markets)'
                                data-broker-logo-url='/images/broker_logos/admirals-admiral-markets-review.png'
                                data-broker-id={184}
                                data-custom-event-action
                                data-measurement-brand='CFD and forex broker'
                                data-measurement-list='TableNameLinkClick'
                                data-report-special-affiliate-event='false'
                                target='_blank'
                                className='openAccountBtn '
                              >
                                Admirals (Admiral Markets)
                              </a>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {foundBroker.broker_summary.deposit_and_withdrawal.account_base_currency.table.map(
                            (row, index) => {
                              return (
                                <tr
                                  className='bc-article-gen-table-tr'
                                  data-param-id={190}
                                  key={index}
                                >
                                  <th data-toggle='tooltip'>
                                    {row.name_of_fee}
                                  </th>
                                  <td className='bc-article-gen-table-td bc-article-gen-table-cell-selected-vertical'>
                                    <span
                                      className='bc-broker-data-field'
                                      data-broker-id={104}
                                      data-param-id={190}
                                    >
                                      {row.broker_fee}
                                    </span>
                                  </td>
                                  <td className='bc-article-gen-table-td'>
                                    <span
                                      className='bc-broker-data-field'
                                      data-broker-id={96}
                                      data-param-id={190}
                                    >
                                      {row.xm_fee}
                                    </span>
                                  </td>
                                  <td className='bc-article-gen-table-td'>
                                    <span
                                      className='bc-broker-data-field'
                                      data-broker-id={184}
                                      data-param-id={190}
                                    >
                                      {row.admiral}
                                    </span>
                                  </td>
                                </tr>
                              );
                            }
                          )}
                        </tbody>
                      </table>
                    </div>
                    <p>
                      This selection is similar when compared with rival
                      brokers.
                    </p>
                    {foundBroker.broker_summary.deposit_and_withdrawal.rival_competion.description.map(
                      (comp, index) => {
                        return <p key={index}>{comp}</p>;
                      }
                    )}
                    <p className='text-center'>
                      <a
                        className='btn btn-primary'
                        href='https://brokerchooser.com/digital-banks/comparison'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Compare digital banks
                      </a>
                    </p>
                    <h3>Deposit fees and options</h3>
                    <p>
                      {
                        foundBroker.broker_summary.deposit_and_withdrawal
                          .deposit_fees_and_options.description
                      }
                    </p>
                    <ul>
                      {foundBroker.broker_summary.deposit_and_withdrawal.deposit_fees_and_options.fees_and_options.map(
                        (li, index) => {
                          return <li key={index}>{li}</li>;
                        }
                      )}
                    </ul>
                    <p>
                      <strong>
                        The minimum amount you can deposit is{" "}
                        <span
                          className='bc-broker-data-field'
                          data-broker-id={104}
                          data-param-id={216}
                        >
                          $
                          {
                            foundBroker.broker_summary.deposit_and_withdrawal
                              .minimum_deposit.value
                          }
                        </span>
                      </strong>{" "}
                      or{" "}
                      {
                        foundBroker.broker_summary.deposit_and_withdrawal
                          .minimum_deposit.value
                      }{" "}
                      units in any of the other base currencies.
                    </p>
                    <div className='table-responsive'>
                      <table className='bc-article-gen-table'>
                        <caption>
                          {foundBroker.broker_details.name} deposit options
                        </caption>
                        <thead>
                          <tr>
                            <th scope='col'>&nbsp;</th>
                            <th
                              className='bc-article-gen-table-broker-header bc-article-gen-table-cell-selected-vertical'
                              data-broker-id={104}
                              data-toggle='tooltip'
                              scope='col'
                            >
                              <a
                                rel='nofollow noreferrer'
                                href='https://brokerchooser.com/go-to-broker/avatrade/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=TableNameLinkClick'
                                data-broker-label='AvaTrade'
                                data-broker-logo-url='/images/broker_logos/avatrade-review.png'
                                data-broker-id={104}
                                data-custom-event-action
                                data-measurement-brand='CFD and forex broker'
                                data-measurement-list='TableNameLinkClick'
                                data-report-special-affiliate-event='false'
                                target='_blank'
                                className='openAccountBtn '
                              >
                                Broker
                              </a>
                            </th>
                            <th
                              className='bc-article-gen-table-broker-header'
                              data-broker-id={96}
                              data-toggle='tooltip'
                              scope='col'
                            >
                              <a
                                rel='nofollow noreferrer'
                                href='https://brokerchooser.com/go-to-broker/xm/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=TableNameLinkClick'
                                data-broker-label='XM'
                                data-broker-logo-url='/images/broker_logos/xm-review.png'
                                data-broker-id={96}
                                data-custom-event-action
                                data-measurement-brand='CFD and forex broker'
                                data-measurement-list='TableNameLinkClick'
                                data-report-special-affiliate-event='false'
                                target='_blank'
                                className='openAccountBtn '
                              >
                                XM
                              </a>
                            </th>
                            <th
                              className='bc-article-gen-table-broker-header'
                              data-broker-id={184}
                              data-toggle='tooltip'
                              scope='col'
                            >
                              <a
                                rel='nofollow noreferrer'
                                href='https://brokerchooser.com/go-to-broker/admirals-admiral-markets/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=TableNameLinkClick'
                                data-broker-label='Admirals (Admiral Markets)'
                                data-broker-logo-url='/images/broker_logos/admirals-admiral-markets-review.png'
                                data-broker-id={184}
                                data-custom-event-action
                                data-measurement-brand='CFD and forex broker'
                                data-measurement-list='TableNameLinkClick'
                                data-report-special-affiliate-event='false'
                                target='_blank'
                                className='openAccountBtn '
                              >
                                Admirals (Admiral Markets)
                              </a>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {foundBroker.broker_summary.deposit_and_withdrawal.minimum_deposit.deposit_options_table.map(
                            (cur, index) => {
                              return (
                                <tr
                                  className='bc-article-gen-table-tr'
                                  data-param-id={150}
                                  key={index}
                                >
                                  <th data-toggle='tooltip'>
                                    {cur.name_of_fee}
                                  </th>
                                  <td className='bc-article-gen-table-td bc-article-gen-table-cell-selected-vertical'>
                                    <span
                                      className='bc-broker-data-field'
                                      data-broker-id={104}
                                      data-param-id={150}
                                    >
                                      {" "}
                                      <span
                                        aria-hidden='true'
                                        className='glyphicon glyphicon-ok text-success'
                                      />{" "}
                                      <span className='sr-only'>
                                        {cur.broker_fee}
                                      </span>{" "}
                                    </span>
                                  </td>
                                  <td className='bc-article-gen-table-td'>
                                    <span
                                      className='bc-broker-data-field'
                                      data-broker-id={96}
                                      data-param-id={150}
                                    >
                                      {" "}
                                      <span
                                        aria-hidden='true'
                                        className='glyphicon glyphicon-ok text-success'
                                      />{" "}
                                      <span className='sr-only'>
                                        {cur.xm_fee}
                                      </span>{" "}
                                    </span>
                                  </td>
                                  <td className='bc-article-gen-table-td'>
                                    <span
                                      className='bc-broker-data-field'
                                      data-broker-id={184}
                                      data-param-id={150}
                                    >
                                      {" "}
                                      <span
                                        aria-hidden='true'
                                        className='glyphicon glyphicon-ok text-success'
                                      />{" "}
                                      <span className='sr-only'>
                                        {cur.admiral}
                                      </span>{" "}
                                    </span>
                                  </td>
                                </tr>
                              );
                            }
                          )}
                        </tbody>
                      </table>
                    </div>
                    <p>
                      {
                        foundBroker.broker_summary.deposit_and_withdrawal
                          .minimum_deposit.description_1
                      }
                    </p>
                    <p>
                      {
                        foundBroker.broker_summary.deposit_and_withdrawal
                          .minimum_deposit.description_2
                      }
                    </p>

                    {/* <div className=' ratio-box' style={{ maxWidth: "1419px" }}>
                      <picture style={{ paddingBottom: "64.975334742777%" }}>
                        <a
                          href='https://brokerchooser.com/uploads/images/broker-reviews/avatrade-review/avatrade-review-deposit-2.png'
                          target='_blank'
                          rel='noreferrer'
                        >
                          <img
                            alt='AvaTrade review - Deposit and withdrawal - Deposit'
                            className=' lazyload'
                            data-src='https://brokerchooser.com/uploads/images/broker-reviews/avatrade-review/avatrade-review-deposit-2.png'
                            height={922}
                            src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
                            width={1419}
                          />
                        </a>
                      </picture>
                    </div> */}
                    <span className='bc-article-image-caption'>
                      Broker review - Deposit and withdrawal - Deposit
                    </span>
                    <p />
                    <h3>
                      {foundBroker.broker_details.name} withdrawal fees and
                      options
                    </h3>
                    <p>
                      {
                        foundBroker.broker_summary.deposit_and_withdrawal
                          .withdrawal_fees_and_options.description
                      }
                    </p>
                    <div className='table-responsive'>
                      <table className='bc-article-gen-table'>
                        <caption>AvaTrade withdrawal fees and options</caption>
                        <thead>
                          <tr>
                            <th scope='col'>&nbsp;</th>
                            <th
                              className='bc-article-gen-table-broker-header bc-article-gen-table-cell-selected-vertical'
                              data-broker-id={104}
                              data-toggle='tooltip'
                              scope='col'
                            >
                              <a
                                rel='nofollow noreferrer'
                                href='https://brokerchooser.com/go-to-broker/avatrade/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=TableNameLinkClick'
                                data-broker-label='AvaTrade'
                                data-broker-logo-url='/images/broker_logos/avatrade-review.png'
                                data-broker-id={104}
                                data-custom-event-action
                                data-measurement-brand='CFD and forex broker'
                                data-measurement-list='TableNameLinkClick'
                                data-report-special-affiliate-event='false'
                                target='_blank'
                                className='openAccountBtn '
                              >
                                Broker
                              </a>
                            </th>
                            <th
                              className='bc-article-gen-table-broker-header'
                              data-broker-id={96}
                              data-toggle='tooltip'
                              scope='col'
                            >
                              <a
                                rel='nofollow noreferrer'
                                href='https://brokerchooser.com/go-to-broker/xm/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=TableNameLinkClick'
                                data-broker-label='XM'
                                data-broker-logo-url='/images/broker_logos/xm-review.png'
                                data-broker-id={96}
                                data-custom-event-action
                                data-measurement-brand='CFD and forex broker'
                                data-measurement-list='TableNameLinkClick'
                                data-report-special-affiliate-event='false'
                                target='_blank'
                                className='openAccountBtn '
                              >
                                XM
                              </a>
                            </th>
                            <th
                              className='bc-article-gen-table-broker-header'
                              data-broker-id={184}
                              data-toggle='tooltip'
                              scope='col'
                            >
                              <a
                                rel='nofollow noreferrer'
                                href='https://brokerchooser.com/go-to-broker/admirals-admiral-markets/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=TableNameLinkClick'
                                data-broker-label='Admirals (Admiral Markets)'
                                data-broker-logo-url='/images/broker_logos/admirals-admiral-markets-review.png'
                                data-broker-id={184}
                                data-custom-event-action
                                data-measurement-brand='CFD and forex broker'
                                data-measurement-list='TableNameLinkClick'
                                data-report-special-affiliate-event='false'
                                target='_blank'
                                className='openAccountBtn '
                              >
                                Admirals (Admiral Markets)
                              </a>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {foundBroker.broker_summary.deposit_and_withdrawal.withdrawal_fees_and_options.table.map(
                            (row, index) => {
                              return (
                                <tr
                                  className='bc-article-gen-table-tr'
                                  data-param-id={155}
                                  key={index}
                                >
                                  <th data-toggle='tooltip'>
                                    {row.name_of_fee}
                                  </th>
                                  <td className='bc-article-gen-table-td bc-article-gen-table-cell-selected-vertical'>
                                    <span
                                      className='bc-broker-data-field'
                                      data-broker-id={104}
                                      data-param-id={155}
                                    >
                                      {" "}
                                      <span
                                        aria-hidden='true'
                                        className='glyphicon glyphicon-ok text-success'
                                      />{" "}
                                      <span className='sr-only'>
                                        {row.broker_fee}
                                      </span>{" "}
                                    </span>
                                  </td>
                                  <td className='bc-article-gen-table-td'>
                                    <span
                                      className='bc-broker-data-field'
                                      data-broker-id={96}
                                      data-param-id={155}
                                    >
                                      {" "}
                                      <span
                                        aria-hidden='true'
                                        className='glyphicon glyphicon-ok text-success'
                                      />{" "}
                                      <span className='sr-only'>
                                        {row.xm_fee}
                                      </span>{" "}
                                    </span>
                                  </td>
                                  <td className='bc-article-gen-table-td'>
                                    <span
                                      className='bc-broker-data-field'
                                      data-broker-id={184}
                                      data-param-id={155}
                                    >
                                      {" "}
                                      <span
                                        aria-hidden='true'
                                        className='glyphicon glyphicon-ok text-success'
                                      />{" "}
                                      <span className='sr-only'>
                                        {row.admiral}
                                      </span>{" "}
                                    </span>
                                  </td>
                                </tr>
                              );
                            }
                          )}
                        </tbody>
                      </table>
                    </div>

                    {foundBroker.broker_summary.deposit_and_withdrawal.withdrawal_fees_and_options.other_description.map(
                      (p, i) => {
                        return <p key={i}>{p}</p>;
                      }
                    )}

                    <p>
                      How do you withdraw money from Broker? You can withdraw
                      money from Broker by following these steps:
                    </p>
                    <ul>
                      {foundBroker.broker_summary.deposit_and_withdrawal.withdrawal_fees_and_options.steps_to_withdraw_money.map(
                        (li, i) => {
                          return <li key={i}>{li}</li>;
                        }
                      )}
                    </ul>
                    <h3>&nbsp;</h3>
                  </div>
                </div>
                {/* Web Trading Platform */}
                <div>
                  <div
                    className='bc_broker_review_body_section_title'
                    id='review-part-web-trading-platform'
                  >
                    <h2>
                      <span className='bc-article-chapter-title'>
                        Broker review
                      </span>
                      <br />
                      Web trading platform
                    </h2>
                    <div className='flex'>
                      <Score
                        score={
                          foundBroker?.broker_summary.web_trading_platform
                            .score ?? 0
                        }
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-chapter-id='review-part-web-trading-platform'
                  id='review-part-web-trading-platform-one-liner'
                >
                  <div className='bc_custom_html'>
                    <a
                      rel='nofollow noreferrer'
                      href={foundBroker.broker_details.broker_link}
                      target='_blank'
                    >
                      Broker
                    </a>
                    {foundBroker.broker_summary.web_trading_platform.summary}
                  </div>
                </div>
                <ReadMoreReadLessButton
                  value={4}
                  currentValue={currentDisplay}
                  setState={setCurrentDisplay}
                />
                <div
                  className={`${currentDisplay === 4 ? "" : "hidden"}`}
                  data-chapter-id='review-part-web-trading-platform'
                  id='review-part-web-trading-platform-content'
                >
                  <div className='bc_custom_html'>
                    <blockquote>
                      {foundBroker.broker_summary.web_trading_platform.summary}
                    </blockquote>
                    <table className='bc_procon_table'>
                      <tbody>
                        <tr>
                          <th className='pro_header'>Pros</th>
                          <th className='con_header'>Cons</th>
                        </tr>
                        <ProsConsMapper
                          pros={
                            foundBroker.broker_summary.web_trading_platform.pros
                          }
                          cons={
                            foundBroker.broker_summary.web_trading_platform.cons
                          }
                        />
                      </tbody>
                    </table>
                    <div className='table-responsive'>
                      <table>
                        <caption>AvaTrade platforms to choose from</caption>
                        <thead>
                          <tr>
                            <th>Trading platform</th>
                            <th>Score</th>
                            <th>Available</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Web</td>
                            <td>
                              <span className='rounded_score-green'>
                                <span>
                                  {
                                    foundBroker.broker_summary
                                      .web_trading_platform.platforms_to_use.web
                                      .score
                                  }
                                </span>
                                <span className='sr-only'>stars</span>
                              </span>
                            </td>
                            <td>
                              {
                                foundBroker.broker_summary.web_trading_platform
                                  .platforms_to_use.web.isAvailable
                              }
                            </td>
                          </tr>
                          <tr>
                            <td>Mobile</td>
                            <td>
                              <span className='rounded_score-green'>
                                <span>
                                  {
                                    foundBroker.broker_summary
                                      .web_trading_platform.platforms_to_use
                                      .mobile.score
                                  }
                                </span>
                                <span className='sr-only'>stars</span>
                              </span>
                            </td>
                            <td>
                              {
                                foundBroker.broker_summary.web_trading_platform
                                  .platforms_to_use.mobile.isAvailable
                              }
                            </td>
                          </tr>
                          <tr>
                            <td>Desktop</td>
                            <td>
                              <span className='rounded_score-yellow'>
                                <span>
                                  {
                                    foundBroker.broker_summary
                                      .web_trading_platform.platforms_to_use
                                      .desktop.score
                                  }
                                </span>
                                <span className='sr-only'>stars</span>
                              </span>
                            </td>
                            <td>
                              {
                                foundBroker.broker_summary.web_trading_platform
                                  .platforms_to_use.desktop.isAvailable
                              }
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>
                      <a
                        rel='nofollow noreferrer'
                        href='https://brokerchooser.com/go-to-broker/avatrade/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=brokername-link'
                        target='_blank'
                      >
                        Broker
                      </a>{" "}
                      offers several trading platforms to choose from:
                    </p>
                    <ul>
                      {foundBroker.broker_summary.web_trading_platform.trading_platforms_to_use.map(
                        (platform, index) => {
                          return (
                            <li key={index}>
                              {platform.name}, {platform.short_description}
                            </li>
                          );
                        }
                      )}
                    </ul>
                    <p>
                      {
                        foundBroker.broker_summary.web_trading_platform
                          .trading_platforms_to_use_descriptions_1
                      }
                    </p>
                    <p>
                      {
                        foundBroker.broker_summary.web_trading_platform
                          .trading_platforms_to_use_descriptions_2
                      }
                    </p>

                    {foundBroker.broker_summary.web_trading_platform.trading_platforms_to_use.map(
                      (platform, index) => {
                        return (
                          <React.Fragment key={index}>
                            <h2>
                              <a id='webtrader' target='_blank' />
                              {platform.name}
                            </h2>
                            <p>
                              <a id='webtrader-languages' target='_blank' />
                              Webtrader is available in{" "}
                              {platform.used_languages.length > 1
                                ? "many"
                                : "one"}{" "}
                              languages:{" "}
                              {platform.used_languages.map((lang) => lang)}
                            </p>
                            <h3>Look and feel</h3>
                            <p>{platform.look_and_feel}</p>
                            <p />
                            {/* <div className=' ratio-box' style={{ maxWidth: "1919px" }}>
                      <picture style={{ paddingBottom: "55.39343408025%" }}>
                        <a
                          href='https://brokerchooser.com/uploads/images/broker-reviews/avatrade-review/avatrade-review-web-trading-platform-2.png'
                          target='_blank'
                          rel='noreferrer'
                        >
                          <img
                            alt='AvaTrade review - Web trading platform'
                            className=' lazyload'
                            data-src='https://brokerchooser.com/uploads/images/broker-reviews/avatrade-review/avatrade-review-web-trading-platform-2.png'
                            height={1063}
                            src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
                            width={1919}
                          />
                        </a>
                      </picture>
                    </div> */}
                            {/* <span className='bc-article-image-caption'>
                      Broker review - Web trading platform
                    </span> */}
                            <p />
                            <h3>
                              {platform.login_and_security &&
                                "Login and security"}
                            </h3>
                            <p>{platform.login_and_security}</p>
                            <h3>
                              {platform.search_functions && "Search functions"}
                            </h3>
                            <p>{platform.search_functions}</p>
                            {/* <div className=' ratio-box' style={{ maxWidth: "236px" }}>
                      <picture style={{ paddingBottom: "214.83050847458%" }}>
                        <a
                          href='https://brokerchooser.com/uploads/images/broker-reviews/avatrade-review/avatrade-review-web-trading-platform-search-2.png'
                          target='_blank'
                          rel='noreferrer'
                        >
                          <img
                            alt='AvaTrade review - Web trading platform - Search'
                            className=' lazyload'
                            data-src='https://brokerchooser.com/uploads/images/broker-reviews/avatrade-review/avatrade-review-web-trading-platform-search-2.png'
                            height={507}
                            src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
                            width={236}
                          />
                        </a>
                      </picture>
                    </div>
                    <span className='bc-article-image-caption'>
                      Broker review - Web trading platform - Search
                    </span> */}
                            {platform.placing_orders.length > 0 && (
                              <>
                                <h3>Placing orders</h3>
                                <p>You can use only basic order types:</p>
                                <ul>
                                  {platform.placing_orders.map((li, index) => {
                                    return <li key={index}>{li}</li>;
                                  })}
                                </ul>
                              </>
                            )}
                            <p>{platform.placing_orders_description_1}</p>
                            <p>{platform.placing_orders_description_1}</p>
                            {/* <div
                      className='bc-mobile ratio-box'
                      style={{ maxWidth: "400px" }}
                    >
                      <picture style={{ paddingBottom: "179.23627684964%" }}>
                        <a
                          href='https://brokerchooser.com/uploads/images/broker-reviews/avatrade-review/avatrade-review-web-trading-platform-order-panel-2.png'
                          target='_blank'
                          rel='noreferrer'
                        >
                          <img
                            alt='AvaTrade review - Web trading platform - Order panel'
                            className=' lazyload'
                            data-src='https://brokerchooser.com/uploads/images/broker-reviews/avatrade-review/avatrade-review-web-trading-platform-order-panel-2.png'
                            height={1502}
                            src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
                            width={838}
                          />
                        </a>
                      </picture>
                    </div>
                    <span className='bc-article-image-caption'>
                      Broker review - Web trading platform - Order panel
                    </span> */}
                            <h3>
                              {platform.alerts_and_notifications &&
                                "Alerts and notifications"}
                            </h3>
                            <p>{platform.alerts_and_notifications}</p>
                            <h3>
                              {platform.portfolio_and_fee_reports &&
                                "Portfolio and fee reports"}
                            </h3>
                            <p>{platform.portfolio_and_fee_reports}</p>
                          </React.Fragment>
                        );
                      }
                    )}
                    <p className='text-center bc-article-button-container'>
                      <a
                        className='bc_button bc_button__secondary openAccountBtn'
                        href='https://brokerchooser.com/go-to-broker/avatrade/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=chapter-tracked-link-button%2Fweb-trading-platform'
                        data-broker-label='AvaTrade'
                        data-broker-logo-url='/images/broker_logos/avatrade-review.png'
                        data-broker-id={104}
                        data-custom-event-action
                        data-report-special-affiliate-event='false'
                        data-skip-country-check='false'
                        data-measurement-brand='CFD and forex broker'
                        data-measurement-list='chapter-tracked-link-button/web-trading-platform'
                        rel='nofollow noreferrer'
                        target='_blank'
                      >
                        {foundBroker?.broker_details.name}
                        Visit broker
                      </a>
                      <br />
                      <span className='bc-cta-cfd-warning '>
                        <strong>{foundBroker.loose_money}</strong>
                      </span>
                    </p>
                  </div>
                </div>
                {/* Top 5 Brokers Shower */}
                <div
                  className='mt-8 justify-center block lg:hidden'
                  data-ga-event-element-id='mobile-top-5-box'
                  data-ga-event-category='CRO'
                  data-ga-event-impression={1}
                >
                  <div className='top-5-box top-5 sticky bg-white flex flex-col w-full max-w-md rounded shadow-lg p-6 border-2 border-success-500'>
                    <div className='absolute top-0 left-0 w-full flex justify-center'>
                      <div className='rounded-b -mt-0.5 flex items-center bg-success-500 pl-1 pr-2 ml-2 text-white text-xs font-semibold cursor-default'>
                        <span
                          className='svg_icon green-check '
                          style={{ width: "20px", height: "20px" }}
                        />
                        <span className='whitespace-nowrap ml-1'>
                          Recommended for you
                        </span>
                      </div>
                    </div>
                    <div className='flex items-center font-semibold text-2xl mb-2 mt-2'>
                      <span
                        className='svg_icon green-check mr-2 '
                        style={{ width: "20px", height: "20px" }}
                      />
                      Top 5 brokers for you
                    </div>
                    <div className='mb-2'>
                      Based on your{" "}
                      <a href='/find-my-broker' target='_blank'>
                        earlier answers
                      </a>
                      , these brokers are great matches for you.
                    </div>
                    <div className='w-full'>
                      <div
                        data-tab-content-label='FMB results'
                        className='tab-content '
                      >
                        <div className='top-5-box-broker-list pb-13'>
                          {brokers.slice(0, 5).map((broker, index) => (
                            <div
                              className='w-full border-b last:border-none border-secondary-50'
                              key={broker.broker_id}
                            >
                              <a
                                rel='nofollow noreferrer'
                                href={broker.broker_details.broker_link}
                                data-broker-label='Interactive Brokers'
                                data-broker-logo-url='/images/broker_logos/interactive-brokers-review.png'
                                data-broker-id={5}
                                data-custom-event-action
                                data-measurement-brand='Stock broker'
                                data-measurement-list='desktop-top5-box-tab1'
                                data-report-special-affiliate-event='true'
                                target='_blank'
                                className='openAccountBtn '
                                data-ga-event-category='CRO'
                                data-ga-event-element-id='top-5-box-broker-cta-link_Interactive Brokers'
                                data-ga-event-click={1}
                              >
                                <div className='hover:bg-secondary-50 py-3'>
                                  <div className='flex items-center justify-between'>
                                    <div className='flex items-center justify-start w-7 pl-1 font-semibold'>
                                      {index + 1}.
                                    </div>
                                    <div className='w-full'>
                                      <div className='flex items-center text-sm font-semibold'>
                                        <div className='flex items-center pr-1.5'>
                                          <span
                                            className='w-8 h-8 bg-cover no-gallery'
                                            style={{
                                              backgroundImage: `url(${broker.broker_details.broker_logo})`
                                            }}
                                          />
                                        </div>
                                        <div>{broker.broker_details.name}</div>
                                      </div>
                                    </div>
                                    <span className='svg_icon top-5-box-arrow ' />
                                  </div>
                                </div>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Mobile Trading Platform */}
                <div>
                  <div
                    className='bc_broker_review_body_section_title'
                    id='review-part-mobile-trading-platform'
                  >
                    <h2>
                      <span className='bc-article-chapter-title'>
                        Broker review
                      </span>
                      <br />
                      Mobile trading platform
                    </h2>
                    <div className='flex'>
                      <Score
                        score={
                          foundBroker?.broker_summary.mobile_trading_platform
                            .score ?? 0
                        }
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-chapter-id='review-part-mobile-trading-platform'
                  id='review-part-mobile-trading-platform-one-liner'
                >
                  <div className='bc_custom_html'>
                    <a
                      rel='nofollow noreferrer'
                      href={foundBroker.broker_details.broker_link}
                      target='_blank'
                    >
                      Broker
                    </a>
                    {foundBroker.broker_summary.mobile_trading_platform.summary}
                  </div>
                </div>
                <ReadMoreReadLessButton
                  value={5}
                  currentValue={currentDisplay}
                  setState={setCurrentDisplay}
                />
                <div
                  className={`${currentDisplay === 5 ? "" : "hidden"}`}
                  data-chapter-id='review-part-mobile-trading-platform'
                  id='review-part-mobile-trading-platform-content'
                >
                  <div className='bc_custom_html'>
                    <blockquote>
                      {
                        foundBroker.broker_summary.mobile_trading_platform
                          .summary
                      }
                    </blockquote>
                    <table className='bc_procon_table'>
                      <tbody>
                        <tr>
                          <th className='pro_header'>Pros</th>
                          <th className='con_header'>Cons</th>
                        </tr>
                        <ProsConsMapper
                          pros={
                            foundBroker.broker_summary.mobile_trading_platform
                              .pros
                          }
                          cons={
                            foundBroker.broker_summary.mobile_trading_platform
                              .cons
                          }
                        />
                      </tbody>
                    </table>
                    <p>
                      <a
                        rel='nofollow noreferrer'
                        href='https://brokerchooser.com/go-to-broker/avatrade/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=brokername-link'
                        target='_blank'
                      >
                        Broker
                      </a>{" "}
                      offers these mobile trading platforms:
                    </p>
                    <ul>
                      {foundBroker.broker_summary.mobile_trading_platform.trading_platforms_to_use?.map(
                        (platform, index) => {
                          return (
                            <li key={index}>
                              {platform.name}, {platform.short_description}
                            </li>
                          );
                        }
                      )}
                    </ul>
                    <p>
                      {
                        foundBroker.broker_summary.mobile_trading_platform
                          .trading_platforms_to_use_description_1
                      }
                    </p>
                    <p>
                      {
                        foundBroker.broker_summary.mobile_trading_platform
                          .trading_platforms_to_use_description_2
                      }
                    </p>
                    {foundBroker.broker_summary.mobile_trading_platform.trading_platforms_to_use.map(
                      (platform, index) => {
                        return (
                          <React.Fragment key={index}>
                            <h2>
                              <a id='webtrader' target='_blank' />
                              {platform.name}
                            </h2>
                            <h3>{platform.look_and_feel && "Look and feel"}</h3>
                            <p>{platform.look_and_feel}</p>
                            <h3>
                              {platform.login_and_security &&
                                "Login and security"}
                            </h3>
                            <p>{platform.login_and_security}</p>
                            <h3>
                              {platform.search_functions && "Search functions"}
                            </h3>
                            <p>{platform.search_functions}</p>
                            {platform.placing_orders.length > 0 && (
                              <>
                                <h3>Placing orders</h3>
                                <p>You can use only basic order types:</p>
                                <ul>
                                  {platform.placing_orders.map((li, index) => {
                                    return <li key={index}>{li}</li>;
                                  })}
                                </ul>
                              </>
                            )}
                            <p>{platform.placing_orders_description_1}</p>
                            <p>{platform.placing_orders_description_1}</p>
                            <h3>
                              {platform.alerts_and_notifications &&
                                "Alerts and notifications"}
                            </h3>
                            <p>{platform.alerts_and_notifications}</p>
                            <h3>
                              {platform.portfolio_and_fee_reports &&
                                "Portfolio and fee reports"}
                            </h3>
                            <p>{platform.portfolio_and_fee_reports}</p>
                          </React.Fragment>
                        );
                      }
                    )}
                    <p className='text-center bc-article-button-container'>
                      <a
                        className='bc_button bc_button__secondary openAccountBtn'
                        href='https://brokerchooser.com/go-to-broker/avatrade/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=chapter-ao-button%2Fmobile-trading-platform'
                        data-broker-label='AvaTrade'
                        data-broker-logo-url='/images/broker_logos/avatrade-review.png'
                        data-broker-id={104}
                        data-custom-event-action
                        data-report-special-affiliate-event='false'
                        data-skip-country-check='false'
                        data-measurement-brand='CFD and forex broker'
                        data-measurement-list='chapter-ao-button/mobile-trading-platform'
                        rel='nofollow noreferrer'
                        target='_blank'
                      >
                        Visit broker
                      </a>
                      <br />
                      <span className='bc-cta-cfd-warning '>
                        <strong>{foundBroker.loose_money}</strong>
                      </span>
                    </p>
                  </div>
                </div>
                {/* Desktop trading platform */}
                <div>
                  <div
                    className='bc_broker_review_body_section_title'
                    id='review-part-desktop-trading-platform'
                  >
                    <h2>
                      <span className='bc-article-chapter-title'>
                        Broker review
                      </span>
                      <br />
                      Desktop trading platform
                    </h2>
                    <div className='flex'>
                      <Score
                        score={
                          foundBroker?.broker_summary.desktop_trading_platform
                            .score ?? 0
                        }
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-chapter-id='review-part-desktop-trading-platform'
                  id='review-part-desktop-trading-platform-one-liner'
                >
                  <div className='bc_custom_html'>
                    In design and function,{" "}
                    <a
                      rel='nofollow noreferrer'
                      href={foundBroker.broker_details.broker_link}
                      target='_blank'
                    >
                      Broker
                    </a>
                    {
                      foundBroker.broker_summary.desktop_trading_platform
                        .summary
                    }
                  </div>
                </div>
                <ReadMoreReadLessButton
                  value={6}
                  currentValue={currentDisplay}
                  setState={setCurrentDisplay}
                />
                <div
                  className={`${currentDisplay === 6 ? "" : "hidden"}`}
                  data-chapter-id='review-part-desktop-trading-platform'
                  id='review-part-desktop-trading-platform-content'
                >
                  <div className='bc_custom_html'>
                    <blockquote>
                      {
                        foundBroker.broker_summary.desktop_trading_platform
                          .summary
                      }
                    </blockquote>
                    <table className='bc_procon_table'>
                      <tbody>
                        <tr>
                          <th className='pro_header'>Pros</th>
                          <th className='con_header'>Cons</th>
                        </tr>
                        <ProsConsMapper
                          pros={
                            foundBroker.broker_summary.desktop_trading_platform
                              .pros
                          }
                          cons={
                            foundBroker.broker_summary.desktop_trading_platform
                              .cons
                          }
                        />
                      </tbody>
                    </table>
                    {foundBroker.broker_summary.desktop_trading_platform.descriptions.map(
                      (desc, index) => {
                        return <p key={index}>{desc}</p>;
                      }
                    )}
                    {/* <div className=' ratio-box' style={{ maxWidth: "1920px" }}>
                      <picture style={{ paddingBottom: "64.166666666667%" }}>
                        <a
                          href='https://brokerchooser.com/uploads/images/broker-reviews/avatrade-review/avatrade-review-desktop-trading-platform-1.png'
                          target='_blank'
                          rel='noreferrer'
                        >
                          <img
                            alt='AvaTrade review - Desktop trading platform'
                            className=' lazyload'
                            data-src='https://brokerchooser.com/uploads/images/broker-reviews/avatrade-review/avatrade-review-desktop-trading-platform-1.png'
                            height={1232}
                            src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
                            width={1920}
                          />
                        </a>
                      </picture>
                    </div>
                    <span className='bc-article-image-caption'>
                      <a
                        rel='nofollow noreferrer'
                        href='https://brokerchooser.com/go-to-broker/avatrade/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=brokername-link'
                        target='_blank'
                      >
                        Broker
                      </a>{" "}
                      review - Desktop trading platform
                    </span> */}
                    <p className='text-center bc-article-button-container'>
                      <a
                        className='bc_button bc_button__secondary openAccountBtn'
                        href='https://brokerchooser.com/go-to-broker/avatrade/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=chapter-ao-button%2Fdesktop-trading-platform'
                        data-broker-label='AvaTrade'
                        data-broker-logo-url='/images/broker_logos/avatrade-review.png'
                        data-broker-id={104}
                        data-custom-event-action
                        data-report-special-affiliate-event='false'
                        data-skip-country-check='false'
                        data-measurement-brand='CFD and forex broker'
                        data-measurement-list='chapter-ao-button/desktop-trading-platform'
                        rel='nofollow noreferrer'
                        target='_blank'
                      >
                        Visit broker
                      </a>
                      <br />
                      <span className='bc-cta-cfd-warning '>
                        <strong>{foundBroker.loose_money}</strong>
                      </span>
                    </p>
                  </div>
                </div>
                {/* Markets and products */}
                <div>
                  <div
                    className='bc_broker_review_body_section_title'
                    id='review-part-markets-and-products'
                  >
                    <h2>
                      <span className='bc-article-chapter-title'>
                        Broker review
                      </span>
                      <br />
                      Markets and products
                    </h2>
                    <div className='flex'>
                      <Score
                        score={
                          foundBroker?.broker_summary.markets_and_products
                            .score ?? 0
                        }
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-chapter-id='review-part-markets-and-products'
                  id='review-part-markets-and-products-one-liner'
                >
                  <div className='bc_custom_html'>
                    <a
                      rel='nofollow noreferrer'
                      href={foundBroker.broker_details.broker_link}
                      target='_blank'
                    >
                      Broker
                    </a>{" "}
                    {foundBroker.broker_summary.markets_and_products.summary}
                  </div>
                </div>
                <ReadMoreReadLessButton
                  value={7}
                  currentValue={currentDisplay}
                  setState={setCurrentDisplay}
                />
                <div
                  className={`${currentDisplay === 7 ? "" : "hidden"}`}
                  data-chapter-id='review-part-markets-and-products'
                  id='review-part-markets-and-products-content'
                >
                  <div className='bc_custom_html'>
                    <blockquote>
                      {foundBroker.broker_summary.markets_and_products.summary}
                    </blockquote>
                    <p>
                      <span
                        className='bc-broker-data-field'
                        data-broker-id={104}
                        data-param-id={277}
                      >
                        <strong>Disclaimer:</strong>{" "}
                        {
                          foundBroker.broker_summary.markets_and_products
                            .disclaimer
                        }
                      </span>
                    </p>
                    {foundBroker.broker_summary.markets_and_products.descriptions.map(
                      (desc, index) => {
                        return <p key={index}>{desc}</p>;
                      }
                    )}

                    <div className='table-responsive'>
                      <table className='bc-article-gen-table'>
                        <caption>
                          {
                            foundBroker.broker_summary.markets_and_products
                              .product_selection_table.title
                          }
                        </caption>
                        <thead>
                          <tr>
                            <th scope='col'>&nbsp;</th>
                            <th
                              className='bc-article-gen-table-broker-header bc-article-gen-table-cell-selected-vertical'
                              data-broker-id={104}
                              data-toggle='tooltip'
                              scope='col'
                            >
                              <a
                                rel='nofollow noreferrer'
                                href='https://brokerchooser.com/go-to-broker/avatrade/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=TableNameLinkClick'
                                data-broker-label='AvaTrade'
                                data-broker-logo-url='/images/broker_logos/avatrade-review.png'
                                data-broker-id={104}
                                data-custom-event-action
                                data-measurement-brand='CFD and forex broker'
                                data-measurement-list='TableNameLinkClick'
                                data-report-special-affiliate-event='false'
                                target='_blank'
                                className='openAccountBtn '
                              >
                                Broker
                              </a>
                            </th>
                            <th
                              className='bc-article-gen-table-broker-header'
                              data-broker-id={96}
                              data-toggle='tooltip'
                              scope='col'
                            >
                              <a
                                rel='nofollow noreferrer'
                                href='https://brokerchooser.com/go-to-broker/xm/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=TableNameLinkClick'
                                data-broker-label='XM'
                                data-broker-logo-url='/images/broker_logos/xm-review.png'
                                data-broker-id={96}
                                data-custom-event-action
                                data-measurement-brand='CFD and forex broker'
                                data-measurement-list='TableNameLinkClick'
                                data-report-special-affiliate-event='false'
                                target='_blank'
                                className='openAccountBtn '
                              >
                                XM
                              </a>
                            </th>
                            <th
                              className='bc-article-gen-table-broker-header'
                              data-broker-id={184}
                              data-toggle='tooltip'
                              scope='col'
                            >
                              <a
                                rel='nofollow noreferrer'
                                href='https://brokerchooser.com/go-to-broker/admirals-admiral-markets/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=TableNameLinkClick'
                                data-broker-label='Admirals (Admiral Markets)'
                                data-broker-logo-url='/images/broker_logos/admirals-admiral-markets-review.png'
                                data-broker-id={184}
                                data-custom-event-action
                                data-measurement-brand='CFD and forex broker'
                                data-measurement-list='TableNameLinkClick'
                                data-report-special-affiliate-event='false'
                                target='_blank'
                                className='openAccountBtn '
                              >
                                Admirals (Admiral Markets)
                              </a>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {foundBroker.broker_summary.markets_and_products.product_selection_table.table.map(
                            (row, index) => {
                              return (
                                <tr
                                  className='bc-article-gen-table-tr'
                                  data-param-id={169}
                                  key={index}
                                >
                                  <th>{row.name_of_fee} (#)</th>
                                  <td className='bc-article-gen-table-td bc-article-gen-table-cell-selected-vertical'>
                                    <span
                                      className='bc-broker-data-field'
                                      data-broker-id={104}
                                      data-param-id={169}
                                    >
                                      {" "}
                                      {row.broker_fee}{" "}
                                    </span>
                                  </td>
                                  <td className='bc-article-gen-table-td'>
                                    <span
                                      className='bc-broker-data-field'
                                      data-broker-id={96}
                                      data-param-id={169}
                                    >
                                      {" "}
                                      {row.xm_fee}{" "}
                                    </span>
                                  </td>
                                  <td className='bc-article-gen-table-td'>
                                    <span
                                      className='bc-broker-data-field'
                                      data-broker-id={184}
                                      data-param-id={169}
                                    >
                                      {" "}
                                      {row.admiral}{" "}
                                    </span>
                                  </td>
                                </tr>
                              );
                            }
                          )}
                        </tbody>
                      </table>
                    </div>
                    <h3>Automated Trading</h3>
                    <p>
                      {
                        foundBroker.broker_summary.markets_and_products
                          .automated_trading
                      }
                    </p>
                  </div>
                </div>
                {/* Research */}
                <div>
                  <div
                    className='bc_broker_review_body_section_title'
                    id='review-part-research'
                  >
                    <h2>
                      <span className='bc-article-chapter-title'>
                        Broker review
                      </span>
                      <br />
                      Research
                    </h2>
                    <div className='flex'>
                      <Score
                        score={foundBroker?.broker_summary.research.score ?? 0}
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-chapter-id='review-part-research'
                  id='review-part-research-one-liner'
                >
                  <div className='bc_custom_html'>
                    <a
                      rel='nofollow noreferrer'
                      href={foundBroker.broker_details.broker_link}
                      target='_blank'
                    >
                      Broker
                    </a>{" "}
                    {foundBroker.broker_summary.research.summary}
                  </div>
                </div>
                <ReadMoreReadLessButton
                  value={8}
                  currentValue={currentDisplay}
                  setState={setCurrentDisplay}
                />
                <div
                  className={`${currentDisplay === 8 ? "" : "hidden"}`}
                  data-chapter-id='review-part-research'
                  id='review-part-research-content'
                >
                  <div className='bc_custom_html'>
                    <blockquote>
                      {foundBroker.broker_summary.research.summary}
                    </blockquote>
                    <table className='bc_procon_table'>
                      <tbody>
                        <tr>
                          <th className='pro_header'>Pros</th>
                          <th className='con_header'>Cons</th>
                        </tr>
                        <ProsConsMapper
                          pros={foundBroker.broker_summary.research.pros}
                          cons={foundBroker.broker_summary.research.cons}
                        />
                      </tbody>
                    </table>
                    <p>
                      <a
                        rel='nofollow noreferrer'
                        href='https://brokerchooser.com/go-to-broker/avatrade/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=brokername-link'
                        target='_blank'
                      >
                        Broker
                      </a>{" "}
                      provides research tools in different places:
                    </p>
                    <ul>
                      {foundBroker.broker_summary.research.research_tools.map(
                        (li, i) => {
                          return <li key={i}>{li}</li>;
                        }
                      )}
                    </ul>
                    <p>
                      {
                        foundBroker.broker_summary.research
                          .tested_brokers_research_tools_description
                      }
                    </p>
                    <h3>Trading ideas</h3>
                    <p>{foundBroker.broker_summary.research.trading_ideas}</p>
                    <p />
                    {/* <div className=' ratio-box' style={{ maxWidth: "2698px" }}>
                      <picture style={{ paddingBottom: "65.455893254262%" }}>
                        <a
                          href='https://brokerchooser.com/uploads/images/broker-reviews/avatrade-review/avatrade-review-research-recommendations-2.png'
                          target='_blank'
                          rel='noreferrer'
                        >
                          <img
                            alt='AvaTrade review - Research - Recommendations'
                            className=' lazyload'
                            data-src='https://brokerchooser.com/uploads/images/broker-reviews/avatrade-review/avatrade-review-research-recommendations-2.png'
                            height={1766}
                            src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
                            width={2698}
                          />
                        </a>
                      </picture>
                    </div> */}
                    {/* <span className='bc-article-image-caption'>
                      Broker review - Research - Recommendations
                    </span> */}
                    <p />
                    <h3>Fundamental data</h3>
                    <p>
                      {foundBroker.broker_summary.research.fundamental_data}
                    </p>
                    {/* <div className=' ratio-box' style={{ maxWidth: "1780px" }}>
                      <picture style={{ paddingBottom: "52.247191011236%" }}>
                        <a
                          href='https://brokerchooser.com/uploads/images/broker-reviews/avatrade-review/avatrade-review-research-fundamental-data-2.png'
                          target='_blank'
                          rel='noreferrer'
                        >
                          <img
                            alt='AvaTrade review - Research - Fundamental data'
                            className=' lazyload'
                            data-src='https://brokerchooser.com/uploads/images/broker-reviews/avatrade-review/avatrade-review-research-fundamental-data-2.png'
                            height={930}
                            src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
                            width={1780}
                          />
                        </a>
                      </picture>
                    </div>
                    <span className='bc-article-image-caption'>
                      Broker review - Research - Fundamental data
                    </span> */}
                    <p />
                    <h3>Charting</h3>
                    <p>{foundBroker.broker_summary.research.charting}</p>
                    {/* <div className=' ratio-box' style={{ maxWidth: "1813px" }}>
                      <picture style={{ paddingBottom: "54.605626034197%" }}>
                        <a
                          href='https://brokerchooser.com/uploads/images/broker-reviews/avatrade-review/avatrade-review-research-charting-2.png'
                          target='_blank'
                          rel='noreferrer'
                        >
                          <img
                            alt='AvaTrade review - Research - Charting'
                            className=' lazyload'
                            data-src='https://brokerchooser.com/uploads/images/broker-reviews/avatrade-review/avatrade-review-research-charting-2.png'
                            height={990}
                            src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
                            width={1813}
                          />
                        </a>
                      </picture>
                    </div>
                    <span className='bc-article-image-caption'>
                      Broker review - Research - Charting
                    </span> */}
                    <p />
                    <h3>News feed</h3>
                    {foundBroker.broker_summary.research.news_feed.map(
                      (p, i) => {
                        return <p key={i}>{p}</p>;
                      }
                    )}
                    {/* <div className=' ratio-box' style={{ maxWidth: "2700px" }}>
                      <picture style={{ paddingBottom: "63.407407407407%" }}>
                        <a
                          href='https://brokerchooser.com/uploads/images/broker-reviews/avatrade-review/avatrade-review-news-2.png'
                          target='_blank'
                          rel='noreferrer'
                        >
                          <img
                            alt='AvaTrade review - Research - News feeds'
                            className=' lazyload'
                            data-src='https://brokerchooser.com/uploads/images/broker-reviews/avatrade-review/avatrade-review-news-2.png'
                            height={1712}
                            src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
                            width={2700}
                          />
                        </a>
                      </picture>
                    </div>
                    <span className='bc-article-image-caption'>
                      Broker review - Research - News feeds
                    </span> */}
                    <p className='bc-article-button-container text-center'>
                      <a
                        className='bc_button bc_button__primary'
                        href='https://brokerchooser.com/compare/avatrade-vs-xm'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Compare research pros and cons
                      </a>
                    </p>
                  </div>
                </div>
                {/* Customer Service */}
                <div>
                  <div
                    className='bc_broker_review_body_section_title'
                    id='review-part-customer-service'
                  >
                    <h2>
                      <span className='bc-article-chapter-title'>
                        Broker review
                      </span>
                      <br />
                      Customer service
                    </h2>
                    <div className='flex'>
                      <Score
                        score={
                          foundBroker?.broker_summary.customer_service.score ??
                          0
                        }
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-chapter-id='review-part-customer-service'
                  id='review-part-customer-service-one-liner'
                >
                  <div className='bc_custom_html'>
                    <a
                      rel='nofollow noreferrer'
                      href={foundBroker.broker_details.broker_link}
                      target='_blank'
                    >
                      Broker
                    </a>{" "}
                    {foundBroker.broker_summary.customer_service.summary}
                  </div>
                </div>
                <ReadMoreReadLessButton
                  value={9}
                  currentValue={currentDisplay}
                  setState={setCurrentDisplay}
                />
                <div
                  className={`${currentDisplay === 9 ? "" : "hidden"}`}
                  data-chapter-id='review-part-customer-service'
                  id='review-part-customer-service-content'
                >
                  <div className='bc_custom_html'>
                    <blockquote>
                      <a
                        rel='nofollow noreferrer'
                        href='https://brokerchooser.com/go-to-broker/avatrade/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=brokername-link'
                        target='_blank'
                      >
                        Broker
                      </a>{" "}
                      has great customer support, giving fast and relevant
                      answers in many local languages. On the negative side,
                      support is not available 24/7, only 24/5.
                    </blockquote>
                    <table className='bc_procon_table'>
                      <tbody>
                        <tr>
                          <th className='pro_header'>Pros</th>
                          <th className='con_header'>Cons</th>
                        </tr>
                        <ProsConsMapper
                          pros={
                            foundBroker.broker_summary.customer_service.pros
                          }
                          cons={
                            foundBroker.broker_summary.customer_service.cons
                          }
                        />
                      </tbody>
                    </table>
                    <p>
                      You can contact{" "}
                      <a
                        rel='nofollow noreferrer'
                        href='https://brokerchooser.com/go-to-broker/avatrade/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=brokername-link'
                        target='_blank'
                      >
                        Broker
                      </a>{" "}
                      via:
                    </p>
                    <ul>
                      {foundBroker.broker_summary.customer_service.contact_broker_via.map(
                        (li, i) => {
                          return <li key={i}>{li}</li>;
                        }
                      )}
                    </ul>
                    {foundBroker.broker_summary.customer_service.descriptions.map(
                      (p, i) => {
                        return <p key={i}>{p}</p>;
                      }
                    )}
                    {/* <div className=' ratio-box' style={{ maxWidth: "1209px" }}>
                      <picture style={{ paddingBottom: "74.607113316791%" }}>
                        <a
                          href='https://brokerchooser.com/uploads/images/broker-reviews/avatrade-review/avatrade-review-customer-service-1.png'
                          target='_blank'
                          rel='noreferrer'
                        >
                          <img
                            alt='AvaTrade review - Customer Service'
                            className=' lazyload'
                            data-src='https://brokerchooser.com/uploads/images/broker-reviews/avatrade-review/avatrade-review-customer-service-1.png'
                            height={902}
                            src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
                            width={1209}
                          />
                        </a>
                      </picture>
                    </div>
                    <span className='bc-article-image-caption'>
                      Broker review - Customer Service
                    </span> */}
                    <p className='text-center bc-article-button-container'>
                      <a
                        className='bc_button bc_button__secondary openAccountBtn'
                        href='https://brokerchooser.com/go-to-broker/avatrade/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=chapter-ao-button%2Fcustomer-service'
                        data-broker-label='AvaTrade'
                        data-broker-logo-url='/images/broker_logos/avatrade-review.png'
                        data-broker-id={104}
                        data-custom-event-action
                        data-report-special-affiliate-event='false'
                        data-skip-country-check='false'
                        data-measurement-brand='CFD and forex broker'
                        data-measurement-list='chapter-ao-button/customer-service'
                        rel='nofollow noreferrer'
                        target='_blank'
                      >
                        Visit broker
                      </a>
                      <br />
                      <span className='bc-cta-cfd-warning '>
                        <strong>{foundBroker.loose_money}</strong>
                      </span>
                    </p>
                  </div>
                </div>
                {/* Education */}
                <div>
                  <div
                    className='bc_broker_review_body_section_title'
                    id='review-part-education'
                  >
                    <h2>
                      <span className='bc-article-chapter-title'>
                        Broker review
                      </span>
                      <br />
                      Education
                    </h2>
                    <div className='flex'>
                      <Score
                        score={foundBroker?.broker_summary.education.score ?? 0}
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-chapter-id='review-part-education'
                  id='review-part-education-one-liner'
                >
                  <div className='bc_custom_html'>
                    <a
                      rel='nofollow noreferrer'
                      href={foundBroker.broker_details.broker_link}
                      target='_blank'
                    >
                      Broker
                    </a>{" "}
                    {foundBroker.broker_summary.education.summary}
                  </div>
                </div>
                <ReadMoreReadLessButton
                  value={10}
                  currentValue={currentDisplay}
                  setState={setCurrentDisplay}
                />
                <div
                  className={`${currentDisplay === 10 ? "" : "hidden"}`}
                  data-chapter-id='review-part-education'
                  id='review-part-education-content'
                >
                  <div className='bc_custom_html'>
                    <blockquote>
                      {foundBroker.broker_summary.education.summary}
                    </blockquote>
                    <table className='bc_procon_table'>
                      <tbody>
                        <tr>
                          <th className='pro_header'>Pros</th>
                          <th className='con_header'>Cons</th>
                        </tr>
                        <ProsConsMapper
                          pros={foundBroker.broker_summary.education.pros}
                          cons={foundBroker.broker_summary.education.cons}
                        />
                      </tbody>
                    </table>
                    <p>{foundBroker.broker_summary.education.description}</p>
                    <p>You can learn in the following ways:</p>
                    <ul>
                      {foundBroker.broker_summary.education.learn_ways.map(
                        (li, i) => {
                          return <li key={i}>{li}</li>;
                        }
                      )}
                    </ul>
                    <p>{foundBroker.broker_summary.education.video_library}</p>
                    {/* <div className=' ratio-box' style={{ maxWidth: "844px" }}>
                      <picture style={{ paddingBottom: "90.047393364929%" }}>
                        <a
                          href='https://brokerchooser.com/uploads/images/broker-reviews/avatrade-review/avatrade-review-education-2.png'
                          target='_blank'
                          rel='noreferrer'
                        >
                          <img
                            alt='AvaTrade Review - Education'
                            className=' lazyload'
                            data-src='https://brokerchooser.com/uploads/images/broker-reviews/avatrade-review/avatrade-review-education-2.png'
                            height={760}
                            src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
                            width={844}
                          />
                        </a>
                      </picture>
                    </div>
                    <span className='bc-article-image-caption'>
                      Broker Review - Education
                    </span> */}
                    <p className='text-center bc-article-button-container'>
                      <a
                        className='bc_button bc_button__secondary openAccountBtn'
                        href='https://brokerchooser.com/go-to-broker/avatrade/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=chapter-ao-button%2Feducation'
                        data-broker-label='AvaTrade'
                        data-broker-logo-url='/images/broker_logos/avatrade-review.png'
                        data-broker-id={104}
                        data-custom-event-action
                        data-report-special-affiliate-event='false'
                        data-skip-country-check='false'
                        data-measurement-brand='CFD and forex broker'
                        data-measurement-list='chapter-ao-button/education'
                        rel='nofollow noreferrer'
                        target='_blank'
                      >
                        Visit broker
                      </a>
                      <br />
                      <span className='bc-cta-cfd-warning '>
                        <strong>{foundBroker.loose_money}</strong>
                      </span>
                    </p>
                  </div>
                </div>
                {/* Safety */}
                <div>
                  <div
                    className='bc_broker_review_body_section_title'
                    id='review-part-safety'
                  >
                    <h2>
                      <span className='bc-article-chapter-title'>
                        Broker review
                      </span>
                      <br />
                      Safety
                    </h2>
                  </div>
                </div>
                <div
                  data-chapter-id='review-part-safety'
                  id='review-part-safety-one-liner'
                >
                  <div className='bc_custom_html'>
                    <a
                      rel='nofollow noreferrer'
                      href={foundBroker.broker_details.broker_link}
                      target='_blank'
                    >
                      Broker
                    </a>{" "}
                    {foundBroker.broker_summary.safety.summary}
                  </div>
                </div>
                <ReadMoreReadLessButton
                  value={11}
                  currentValue={currentDisplay}
                  setState={setCurrentDisplay}
                />
                <div
                  className={`${currentDisplay === 11 ? "" : "hidden"}`}
                  data-chapter-id='review-part-safety'
                  id='review-part-safety-content'
                >
                  <div className='bc_custom_html'>
                    <blockquote>
                      Broker
                      {foundBroker.broker_summary.safety.summary}
                    </blockquote>
                    <table className='bc_procon_table'>
                      <tbody>
                        <tr>
                          <th className='pro_header'>Pros</th>
                          <th className='con_header'>Cons</th>
                        </tr>
                        <ProsConsMapper
                          pros={foundBroker.broker_summary.safety.pros}
                          cons={foundBroker.broker_summary.safety.cons}
                        />
                      </tbody>
                    </table>
                    <h3>Is Broker regulated?</h3>
                    <p>
                      {
                        foundBroker.broker_summary.safety.is_broker_regulated
                          .answer
                      }
                    </p>
                    <ul>
                      {foundBroker.broker_summary.safety.is_broker_regulated.data.map(
                        (li, i) => {
                          return <li key={i}>{li}</li>;
                        }
                      )}
                    </ul>
                    <p>
                      {
                        foundBroker.broker_summary.safety.is_broker_regulated
                          .other_description
                      }
                    </p>
                    <p>
                      {foundBroker.broker_summary.safety.based_in_description}
                    </p>
                    <h3>Is Broker safe?</h3>
                    <p>
                      {foundBroker.broker_summary.safety.is_broker_safe.answer}
                    </p>
                    <ul>
                      {foundBroker.broker_summary.safety.is_broker_safe.data.map(
                        (li, i) => {
                          return <li key={i}>{li}</li>;
                        }
                      )}
                    </ul>
                    <h3>How you are protected</h3>
                    <p>
                      {foundBroker.broker_summary.safety.how_you_are_protected}
                    </p>
                    <div className='table-responsive'>
                      <table>
                        <caption>
                          {
                            foundBroker.broker_summary.safety.legal_entities
                              .title
                          }
                        </caption>
                        <thead>
                          <tr>
                            <th scope='col'>Country of clients</th>
                            <th scope='col'>Protection amount</th>
                            <th scope='col'>Regulator</th>
                            <th scope='col'>Legal entity</th>
                          </tr>
                        </thead>
                        <tbody>
                          {foundBroker.broker_summary.safety.legal_entities.table.map(
                            (row, i) => {
                              return (
                                <tr key={i}>
                                  <td>{row.country}</td>
                                  <td>{row.protection_amount}</td>
                                  <td>{row.regulator}</td>
                                  <td>{row.legal_entity}</td>
                                </tr>
                              );
                            }
                          )}
                        </tbody>
                      </table>
                    </div>
                    <p>{foundBroker.broker_summary.safety.negative_balance}</p>
                    <h3>Background</h3>
                    {foundBroker.broker_summary.safety.background.map(
                      (p, i) => {
                        return <p key={i}>{p}</p>;
                      }
                    )}
                    <p className='text-center bc-article-button-container'>
                      <a
                        className='bc_button bc_button__primary '
                        href='https://brokerchooser.com/find-my-broker'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Find your safe broker
                      </a>
                    </p>
                  </div>
                </div>
                {/* Bottom Line */}
                <div>
                  <div
                    className='bc_broker_review_body_section_title'
                    id='review-part-bottom_line'
                  >
                    <h2>
                      <span className='bc-article-chapter-title'>
                        Broker review
                      </span>
                      <br />
                      Bottom line
                    </h2>
                  </div>
                </div>
                <div
                  data-chapter-id='review-part-bottom_line'
                  id='review-part-bottom_line-one-liner'
                ></div>
                <ReadMoreReadLessButton
                  value={12}
                  currentValue={currentDisplay}
                  setState={setCurrentDisplay}
                />
                <div
                  className={`${currentDisplay === 12 ? "" : "hidden"}`}
                  data-chapter-id='review-part-bottom_line'
                  id='review-part-bottom_line-content'
                >
                  <div className='bc_custom_html'>
                    <p>{foundBroker.broker_summary.bottom_line.summary}</p>
                    {foundBroker.broker_summary.bottom_line.description.map(
                      (p, i) => {
                        return <p key={i}>{p}</p>;
                      }
                    )}
                    <p className='text-center bc-article-button-container'>
                      <a
                        className='bc_button bc_button__secondary openAccountBtn'
                        href='https://brokerchooser.com/go-to-broker/avatrade/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=chapter-ao-button%2Fbottom-line'
                        data-broker-label='AvaTrade'
                        data-broker-logo-url='/images/broker_logos/avatrade-review.png'
                        data-broker-id={104}
                        data-custom-event-action
                        data-report-special-affiliate-event='false'
                        data-skip-country-check='false'
                        data-measurement-brand='CFD and forex broker'
                        data-measurement-list='chapter-ao-button/bottom-line'
                        rel='nofollow noreferrer'
                        target='_blank'
                      >
                        Visit broker
                      </a>
                      <br />
                      <span className='bc-cta-cfd-warning '>
                        <strong>{foundBroker.loose_money}</strong>
                      </span>
                    </p>
                  </div>
                </div>
                {/* FAQ */}
                <div>
                  <div
                    className='bc_broker_review_body_section_title'
                    id='review-part-faq'
                  >
                    <h2>
                      <span className='bc-article-chapter-title'>
                        Broker review
                      </span>
                      <br />
                      FAQ
                    </h2>
                  </div>
                </div>
                <div
                  data-chapter-id='review-part-faq'
                  id='review-part-faq-one-liner'
                ></div>
                <ReadMoreReadLessButton
                  value={13}
                  currentValue={currentDisplay}
                  setState={setCurrentDisplay}
                />
                <div
                  className={`${currentDisplay === 13 ? "" : "hidden"}`}
                  data-chapter-id='review-part-faq'
                  id='review-part-faq-content'
                >
                  <div className='bc_custom_html'>
                    <p>{foundBroker.broker_summary.faq.summary}</p>
                    <p>{foundBroker.broker_summary.faq.description}</p>
                    <h3>Lower fees, lower costs?</h3>
                    <p>
                      {foundBroker.broker_summary.faq.lower_fees_lower_cost}
                    </p>
                    <h3>What about the minimum deposit?</h3>
                    <p>{foundBroker.broker_summary.faq.minimum_deposit}</p>
                    <h3>How to start your Broker account?</h3>
                    <p>{foundBroker.broker_summary.faq.start_broker_account}</p>
                    <h3>How's their trading app?</h3>
                    <p>{foundBroker.broker_summary.faq.trading_app}</p>
                    <h3>Is the quality of customer service satisfactory?</h3>
                    <p>
                      {
                        foundBroker.broker_summary.faq
                          .quality_of_customer_service_satisfactory
                      }
                    </p>
                    <h3>Legit or scam?</h3>
                    <p>{foundBroker.broker_summary.faq.legit_scam}</p>
                    <h3>Free or premium? Or both?</h3>
                    <p>
                      {foundBroker.broker_summary.faq.free_or_premium_or_both}
                    </p>
                    <h3>Is this broker good for beginners?</h3>
                    <p>{foundBroker.broker_summary.faq.good_for_beginners}</p>
                    <h3>Should you buy your silver bullets on Broker?</h3>
                    <p>
                      {
                        foundBroker.broker_summary.faq
                          .should_you_buy_silver_bullet
                      }
                    </p>
                    <h3>
                      I want to trade options, are they available at Broker?
                    </h3>
                    <p>{foundBroker.broker_summary.faq.trade_options}</p>
                    <h3>What is the minimum account balance at Broker?</h3>
                    <p>
                      {foundBroker.broker_summary.faq.minimum_account_balance}
                    </p>
                    <h3>Looking for commission and fees data for Broker?</h3>
                    <p>
                      {foundBroker.broker_summary.faq.looking_for_commission}
                    </p>
                    <h3>How do you withdraw money from Broker?</h3>
                    <p>{foundBroker.broker_summary.faq.withdraw_money}</p>
                    <h3>How to use Broker?</h3>
                    <p>{foundBroker.broker_summary.faq.use_broker}</p>
                  </div>
                </div>
              </div>
              <div className='w-1/3 hidden lg:block sticky top-5'>
                <div
                  className='flex justify-center sticky top-20 mt-4'
                  data-ga-event-element-id='desktop-top-5-box'
                  data-ga-event-category='CRO'
                  data-ga-event-impression={1}
                >
                  <div className='top-5-box top-5 sticky bg-white flex flex-col w-full max-w-md rounded shadow-lg p-6 border-2 border-success-500'>
                    <div className='absolute top-0 left-0 w-full flex justify-center'>
                      <div className='rounded-b -mt-0.5 flex items-center bg-success-500 pl-1 pr-2 ml-2 text-white text-xs font-semibold cursor-default'>
                        <span
                          className='svg_icon green-check '
                          style={{ width: "20px", height: "20px" }}
                        />
                        <span className='whitespace-nowrap ml-1'>
                          Recommended for you
                        </span>
                      </div>
                    </div>
                    <div className='flex items-center font-semibold text-2xl mb-2 mt-2'>
                      <span
                        className='svg_icon green-check mr-2 '
                        style={{ width: "20px", height: "20px" }}
                      />
                      Top 5 brokers for you
                    </div>
                    <div className='mb-2'>
                      Based on your{" "}
                      <a href='/find-my-broker' target='_blank'>
                        earlier answers
                      </a>
                      , these brokers are great matches for you.
                    </div>
                    <div className='w-full'>
                      <div
                        data-tab-content-label='FMB results'
                        className='tab-content '
                      >
                        <div className='top-5-box-broker-list pb-13'>
                          {brokers.slice(0, 5).map((broker, index) => (
                            <div
                              className='w-full border-b last:border-none border-secondary-50'
                              key={broker.broker_id}
                            >
                              <a
                                rel='nofollow noreferrer'
                                href={broker.broker_details.broker_link}
                                data-broker-label='Interactive Brokers'
                                data-broker-logo-url='/images/broker_logos/interactive-brokers-review.png'
                                data-broker-id={5}
                                data-custom-event-action
                                data-measurement-brand='Stock broker'
                                data-measurement-list='desktop-top5-box-tab1'
                                data-report-special-affiliate-event='true'
                                target='_blank'
                                className='openAccountBtn '
                                data-ga-event-category='CRO'
                                data-ga-event-element-id='top-5-box-broker-cta-link_Interactive Brokers'
                                data-ga-event-click={1}
                              >
                                <div className='hover:bg-secondary-50 py-3'>
                                  <div className='flex items-center justify-between'>
                                    <div className='flex items-center justify-start w-7 pl-1 font-semibold'>
                                      {index + 1}.
                                    </div>
                                    <div className='w-full'>
                                      <div className='flex items-center text-sm font-semibold'>
                                        <div className='flex items-center pr-1.5'>
                                          <span
                                            className='w-8 h-8 bg-cover no-gallery'
                                            style={{
                                              backgroundImage: `url(${broker.broker_details.broker_logo})`
                                            }}
                                          />
                                        </div>
                                        <div>{broker.broker_details.name}</div>
                                      </div>
                                    </div>
                                    <span className='svg_icon top-5-box-arrow ' />
                                  </div>
                                </div>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className='bc_padded_row_wide'>
          <div className='bc-author-section '>
            <h3 className='author-of-review-title mobile'>
              Author of this review
            </h3>
            <div className='primary-section'>
              <div className='author-image' style={{ position: "relative" }}>
                <div className='ratio-box' style={{ maxWidth: "300px" }}>
                  <picture style={{ paddingBottom: "100%" }}>
                    <img
                      alt='Sofie Nasle'
                      className='no-gallery ls-is-cached lazyloaded'
                      data-src='/images/team_members_cropped/22.png'
                      height={300}
                      src='/images/team_members_cropped/22.png'
                      width={300}
                    />
                  </picture>
                </div>
              </div>
              <div className='author-statement-text desktop'>
                <h3 className='author-of-review-title desktop'>
                  Author of this review
                </h3>
                Ádám worked in banking and investment, and holds a professional
                degree in this field. He is a motivated finance expert, having
                joined Top5Brokers in 2018. He's also eager to help people find
                the best investment provider for them, and to make the
                investment sector as transparent as possible. In his spare time,
                he loves learning new things, especially data science, algo
                trading, programming and trading.
              </div>
            </div>
            <div className='secondary-section'>
              <div className='author-details'>
                <h4 className='author-name'>
                  <a
                    data-ga-event-element-id='author-section-link_Ádám Nasli'
                    data-ga-event-category='author'
                    data-ga-event-click='data-ga-event-click'
                    href='https://brokerchooser.com/team/adam-nasli'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Adeyemi Abolaji
                  </a>
                </h4>
                <p className='author-job-description'>Analyst Head</p>
              </div>
              <div className='author-statement-text mobile'>
                {foundBroker.author.author_review}
              </div>
              <p className='author-disclaimer'>
                Everything you find on Top5Brokers is based on reliable data and
                unbiased information.
              </p>
            </div>
          </div>
        </div>

        <div className='fixed w-full bottom-0 z-[100] pointer-events-none'>
          <div className='w-full flex justify-end pr-3'>
            <a
              className='back-to-top-button bc-link-no-decor block cursor-pointer pointer-events-auto'
              data-toc-id='nav-bar'
              data-ga-event-element-id='BackToTopButton'
              data-ga-event-category='Navigation'
              data-ga-event-impression={1}
              data-ga-event-click={1}
              target='_blank'
            >
              <span
                className='svg_icon back-to-top-button-light-gray '
                style={{ width: "40px", height: "40px" }}
              />
            </a>
          </div>
          <div className='pointer-events-auto'>
            <div className='bc_mobile_bottom_popup relative'>
              <div className='button-container'>
                <div className='bc_mobile_bottom_popup_box flex'>
                  <a
                    className='bc_button bc_button__secondary bg-primary-500 openAccountBtn'
                    href='https://brokerchooser.com/go-to-broker/avatrade/open-account?measurementCategory=01review%2F02notrel%2F03review&measurementList=bottom-ribbon'
                    data-broker-label='AvaTrade'
                    data-broker-logo-url='/images/broker_logos/avatrade-review.png'
                    data-broker-id={104}
                    data-custom-event-action
                    data-report-special-affiliate-event='false'
                    data-skip-country-check='false'
                    data-measurement-brand='CFD and forex broker'
                    data-measurement-list='bottom-ribbon'
                    rel='nofollow noreferrer'
                    target='_blank'
                  >
                    Visit Broker
                  </a>
                  <br />
                  <span className='bc-cta-cfd-warning '>
                    <strong>{foundBroker.loose_money}</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrokerReview;
