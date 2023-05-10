/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { brokers } from '../../../data';

export default function ForexTrading() {
  return (
    <div className="bc_broker_page mb-10">
      <div className="bg-slate-100">
        <div className="bc_padded_row_wide">
          <div className="flex justify-between items-center h-9">
            <ol className="breadcrumbs ">
              <Link href="/">
                <a className="breadcrumb-item mobile_hidden">Home</a>
              </Link>
              <Link href="/best-broker-awards">
                <a className="breadcrumb-item mobile_hidden"><span className="svg_icon bx-right-arrow-alt mobile_hidden" /> Best brokers</a>
              </Link>
              <Link href="/best-brokers/best-forex-brokers">
                <a className="breadcrumb-item">
                  <span className="svg_icon bx-right-arrow-alt mobile_hidden" />
                  <span className="svg_icon bx-arrow-back mobile_only" />
                  Best forex brokers
                </a>
              </Link>
              <li className="breadcrumb-item mobile_hidden">
                <span className="svg_icon bx-right-arrow-alt mobile_hidden" />
                <span>Forex trading</span>
              </li>
            </ol>
            <a id="advertiser-disclosure--link" href="/#advertiser-disclosure" target="_blank" rel="nofollow noreferrer">
              ⓘ Advertiser disclosure
            </a>
          </div>
        </div>
      </div>
      <div className="promo-bar broker" style={{ backgroundColor: '#e0e0e0' }}>
        <a href="https://www.interactivebrokers.com/mkt/?src=brkrc3f&url=%2Fen%2Findex.php%3Ff%3D46942" target="_blank" className="promo-bar-link broker-promo-bar" data-broker-id={5} data-broker-label="Interactive Brokers" data-report-special-affiliate-event="true" data-tooltip-value="Investing involves a risk to your capital." data-ga-event-element-id="PromoBar_Interactive Brokers" data-ga-event-category="Paid Placements" data-ga-event-click={1} data-ga-event-impression={1} rel="noreferrer">
          <div className="bc_padded_row_narrow">
            <div className="disclosure  ">
              Advertisement
            </div>
            <span className="broker-logo" style={{ backgroundImage: 'url(/images/promotion/interactive_brokers_logo.png)' }} />
            <div className="promo-bar-text">
              Simple. Worldwide. Stock trading.
            </div>
            <div className="link-to-broker">
              <span className="link-icon">
                <svg width={14} height={14} viewBox="0 0 980 980">
                  <path fillRule="evenodd" clipRule="evenodd" d="M490 980C760.62 980 980 760.62 980 490C980 219.38 760.62 0 490 0C219.38 0 0 219.38 0 490C0 760.62 219.38 980 490 980ZM786 490.007L785.985 490.007L384.572 891L265 771.554L546.841 490.007L265 208.445L384.58 89L786 490.007Z" fill="currentColor" />
                </svg>
              </span>
              <span>Learn more</span>
            </div>
          </div>
        </a>
      </div>
      <div className="bc_padded_row_wide">
        <div className="bc_broker_review_header_section">
          <div className="logo_section">
            <h1>What is forex trading? A guide to the basics of FX trading</h1>
            <div className="bc_article_info_row mt-2">
              <div className="flex items-center ml-2">
                <div className="bg-contain bg-center bg-no-repeat w-5 h-5" style={{ backgroundImage: 'url(/images/icons/pencil_black.png)' }} />
                <div className="ml-1 text-sm text-gray-500 w-max link-container"><a href="/#team/Ahmed-balazs" target="_blank" rel="noreferrer">
                  Ahmed S.
                </a></div>
              </div>
              <div className="flex items-center ml-2">
                <div className="bg-contain bg-center bg-no-repeat w-5 h-5" style={{ backgroundImage: 'url(/images/icons/calendar.svg)' }} />
                <div className="ml-1 text-sm text-gray-500 w-max link-container">Jan 2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bc_body mt-4">
        <article>
          <div className="flex justify-center">
            <div className="flex max-w-[1200px] w-full px-4 sm:px-10 justify-start">
              <div className="w-full lg:w-2/3 lg:mr-8">
                <h2 className="hidden" />
                <div className="bc_custom_html">
                  <p>Forex trading, also known as foreign exchange trading, is the process of<strong> buying one currency while selling another at the same time i</strong>n the hopes of making a profit. Forex transactions always involve a currency pair, never a single currency.&nbsp; Forex trading takes place in the forex market, one of the largest markets in the world. Here’s a guide to help you get started and understand the basics of forex trading.</p>
                  <p>In the forex market, currencies are always traded in pairs. For example, if you buy the EUR/USD pair, you are buying euros and selling US dollars. Staying with this example, when we talk about the EUR/USD pair, the euro is called the base currency and the dollar is the quote currency. The price of a forex pair is essentially how much one unit of the base currency is worth in the quote currency. This is called the <strong>exchange rate</strong> and this rate changes constantly in line with market demand for the currencies in question.</p>
                </div>
                <div className="lg:hidden mt-4 mb-4">
                  <div className="table-of-content-mobile bg-slate-100 border border-slate-300 rounded-lg p-6 relative">
                    <div id="toc" className="absolute block top-0 pt-8 -mt-20" />
                    <div className="text-2xl font-semibold">Table of contents</div>
                    <div className="mt-4 flex flex-col pl-2">
                      <a className="group bc-link-no-decor hover:text-secondary-500" href="#the-essence">
                        <div className="anchor-link-content" data-chapter-title="The essence" data-ga-event-element-id="ToC mobile - The essence" data-ga-event-category="Navigation" data-ga-event-click={1}>
                          <span className="hidden group-hover:text-secondary-500 group-hover:inline absolute"> &gt; </span>
                          <span className="ml-4 block">1.  The essence</span>
                        </div>
                      </a>
                      <a className="group bc-link-no-decor hover:text-secondary-500" href="#the-basics-of-forex-trading">
                        <div className="anchor-link-content" data-chapter-title="The basics of forex trading" data-ga-event-element-id="ToC mobile - The basics of forex trading" data-ga-event-category="Navigation" data-ga-event-click={1}>
                          <span className="hidden group-hover:text-secondary-500 group-hover:inline absolute"> &gt; </span>
                          <span className="ml-4 block">2.  The basics of forex trading</span>
                        </div>
                      </a>
                      <a className="group bc-link-no-decor hover:text-secondary-500" href="#understanding-the-forex-market">
                        <div className="anchor-link-content" data-chapter-title="Understanding the forex market" data-ga-event-element-id="ToC mobile - Understanding the forex market" data-ga-event-category="Navigation" data-ga-event-click={1}>
                          <span className="hidden group-hover:text-secondary-500 group-hover:inline absolute"> &gt; </span>
                          <span className="ml-4 block">3.  Understanding the forex market</span>
                        </div>
                      </a>
                      <a className="group bc-link-no-decor hover:text-secondary-500" href="#key-factors-in-forex-trading">
                        <div className="anchor-link-content" data-chapter-title="Key factors in forex trading" data-ga-event-element-id="ToC mobile - Key factors in forex trading" data-ga-event-category="Navigation" data-ga-event-click={1}>
                          <span className="hidden group-hover:text-secondary-500 group-hover:inline absolute"> &gt; </span>
                          <span className="ml-4 block">4.  Key factors in forex trading</span>
                        </div>
                      </a>
                      <a className="group bc-link-no-decor hover:text-secondary-500" href="#faq">
                        <div className="anchor-link-content" data-chapter-title="FAQ" data-ga-event-element-id="ToC mobile - FAQ" data-ga-event-category="Navigation" data-ga-event-click={1}>
                          <span className="hidden group-hover:text-secondary-500 group-hover:inline absolute"> &gt; </span>
                          <span className="ml-4 block">5.  FAQ</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-center lg:hidden" data-ga-event-element-id="mobile-top-5-box" data-ga-event-category="CRO" data-ga-event-impression={1}>
                  <Top5Table />
                </div>
                <h2 id="the-essence" className="pt-14 mb-5">
                  <span className="bc-article-chapter-title">
                    Forex trading explained in detail with real life examples.
                  </span>
                  <br />
                  The essence
                </h2>
                <div data-chapter-id="the-essence">
                  <div className="bc_custom_html">
                    <blockquote>
                      <ul>
                        <li>
                          <p>Forex trading is the process of buying one currency while selling another at the same time</p>
                        </li>
                        <li>
                          <p>Forex transactions always involve a currency pair and are carried out in the forex market</p>
                        </li>
                        <li>
                          <p>The exchange rate is the price of a currency pair</p>
                        </li>
                        <li>
                          <p>Forex trades are executed in the forex market&nbsp;</p>
                        </li>
                        <li>
                          <p>Demand and market sentiment dictate the short-term price movements in currency markets</p>
                        </li>
                        <li>
                          <p>Economic and political fundamentals shape longer-term trends</p>
                        </li>
                        <li>
                          <p>If you want to trade forex, you should open a trading account at a forex broker</p>
                        </li>
                      </ul>
                    </blockquote>
                  </div>
                </div>
                <h2 id="the-basics-of-forex-trading" className="pt-14 mb-5">
                  <span className="bc-article-chapter-title">
                    Forex trading explained in detail with real life examples.
                  </span>
                  <br />
                  The basics of forex trading
                </h2>
                <div data-chapter-id="the-basics-of-forex-trading">
                  <div className="bc_custom_html">
                    <p>Forex trading is conducted through a network of brokers, banks, and financial institutions. These entities facilitate the buying and selling of currencies in the foreign exchange market. The vast majority of currency transactions are conducted on so-called OTC (over-the-counter) markets. The forex market is open continuously, seven days a week in different parts of the world.</p>
                    <p><a href="images/Learn/forex-trading-explained-forex-market-trading-hours.png" download={true} target="_blank" rel="noreferrer"><img alt="" height={298} src="/images/forex-trading-explained-forex-market-trading-hours.png" width={804} /></a></p>
                    <p>If you want to trade currencies, you will need to open an account at a forex broker so that you can gain access to an app or a trading platform where you can trade currencies. Our analysts annually update the list of <a href="/#best-brokers/best-forex-brokers" target="_blank" rel="noreferrer">the highest-rated forex brokers</a> in the world, using more than 500 data points and checking the brokers with live accounts and real money.&nbsp;</p>
                    <p>We recommend using a demo account if you’re about to explore how to start forex trading. Using a demo account can be the best way to learn forex trading. Most of the brokers featured in our top list of <a href="/#best-brokers/best-forex-brokers" target="_blank" rel="noreferrer">best forex </a>brokers provide a demo account where you can practice with virtual money.<br />
                      <br />
                      See the<a href="#glossary"> FAQ section</a> at the end of this article to familiarize yourself with the most common concepts used in forex trading.</p>
                  </div>
                </div>
                <h2 id="understanding-the-forex-market" className="pt-14 mb-5">
                  <span className="bc-article-chapter-title">
                    Forex trading explained in detail with real life examples.
                  </span>
                  <br />
                  Understanding the forex market
                </h2>
                <div data-chapter-id="understanding-the-forex-market">
                  <div className="bc_custom_html">
                    <p>Understanding how the forex market works is vital before you begin trading. Forex markets <strong>are <a href="/#best-brokers/best-forex-brokers/what-is-volatility" target="_blank" rel="noreferrer">volatile </a>and highly unpredictable </strong>so there are a lot of risks involved and you need to have a clear <a href="/#best-brokers/best-forex-brokers/top-forex-trading-strategies" target="_blank" rel="noreferrer">strategy </a>before you start trading.</p>
                    <p>In addition to demand, there is a wide range of factors that affect the price of a currency. These include economic data, political events, and market sentiment. On a fundamental level, the economic data of individual countries (i.e. inflation and interest rate changes by <a href="/#best-brokers/best-forex-brokers/central-banks-in-forex" target="_blank" rel="noreferrer">central banks</a>) are crucial to understand the exchange rate moves of a certain currency pair. Global events like wars or pandemics can also have a huge impact.</p>
                    <p>In general, it can be said that demand and market sentiment dictate the short-term price movements in currency markets, while economic and political fundamentals shape longer-term trends.</p>
                    <p>A carefully crafted strategy and trading plan will address most of these factors and help you manage the risk of your trade.&nbsp;</p>
                    <h2>&nbsp;</h2>
                  </div>
                </div>
                <h2 id="key-factors-in-forex-trading" className="pt-14 mb-5">
                  <span className="bc-article-chapter-title">
                    Forex trading explained in detail with real life examples.
                  </span>
                  <br />
                  Key factors in forex trading
                </h2>
                <div data-chapter-id="key-factors-in-forex-trading">
                  <div className="bc_custom_html">
                    <p>Before you dive into forex trading, you need to decide a few things. The most important is your <strong>risk appetite.</strong> In other words, you need to consider how much risk you are willing to take and how much money you can afford to lose. This will be a basic feature of your forex trading strategy.&nbsp;</p>
                    <p>There are different <a href="/#education/forex/top-forex-trading-strategies" target="_blank" rel="noreferrer">forex trading strategies</a> used by traders and each involves different levels of risk. The majority of forex strategies focus on the short term: most forex trades are closed within a few days or weeks at most, but day trading (the opening and closing of positions within the same day) is also common in the forex universe.&nbsp;</p>
                    <p>The most common forex trading strategies are:&nbsp;</p>
                    <ul>
                      <li>Day trading</li>
                      <li>Swing trading</li>
                      <li>Position trading&nbsp;</li>
                      <li><a href="/#best-brokers/best-forex-brokers/what-is-scalping" target="_blank" rel="noreferrer">Scalping&nbsp;</a></li>
                    </ul>
                    <p>Two additional factors to consider before you start trading currencies:<br />
                      &nbsp;</p>
                    <ol>
                      <li>the amount of time you are willing to dedicate to trading and</li>
                      <li>the amount of capital you have available for trading</li>
                    </ol>
                    <p>If you are a beginner, you should start with a slower, more conservative strategy and you should only invest what you can afford to lose.</p>
                  </div>
                </div>
                <h2 id="faq" className="pt-14 mb-5">
                  <span className="bc-article-chapter-title">
                    Forex trading explained in detail with real life examples.
                  </span>
                  <br />
                  FAQ
                </h2>
                <div data-chapter-id="faq">
                  <div className="bc_custom_html">
                    <p><strong>What is the difference between currency conversion and forex trading?</strong></p>
                    <p>Currency conversion and forex trading are two distinct activities. Currency conversion is the process of exchanging one currency for another. Let’s say you converted your euros to pound sterling. At the beginning of the transaction you had euros and at the end, you will have pounds.<br />
                      On the other hand, forex trading is the buying and selling of currencies in order to make a profit. If you trade the GBP/EUR forex pair, you’ll either make a profit or a loss on your trade&nbsp; without necessarily having pounds or euros sitting in your account, just will only have an exposure to their price action.</p>
                    <p><strong>What is the most profitable forex trading strategy?</strong></p>
                    <p>There is no single {`"best"`} forex trading strategy that works for everyone. You will need to adjust your forex strategy to your level of expertise, experience and commitment, which may involve combining various aspects of several different strategies. Do not expect to close all your forex trades with a profit. Even a successful forex strategy has a profit-to-loss ratio of 65%, meaning that 35% of the trades will make a loss.&nbsp;</p>
                    <p><strong>Is forex good for beginners?</strong><br />
                      Forex trading is a complex form of investment involving a high degree of risk. It is not suitable for absolute beginners. Make sure you learn the basics of forex trading and understand a few forex strategies before you start trading. Opening a demo account at a forex broker where you can practice with virtual money is highly recommended for beginners. Having a demo account is free of charge, you will not have to deposit real money into your account.&nbsp;</p>
                    <p><strong><a id="glossary" title="glossary" target="_blank" />What is ATR?</strong></p>
                    <p>This is an indicator called Average True Range. It measures the volatility of a price based on the 14 most recent periods of time, which is typically 14 days.&nbsp;</p>
                    <p><strong>What is a base currency?</strong></p>
                    <p>The first currency which is shown in a foreign exchange quotation, or currency pair. For example, in the case of USDEUR, USD is the base currency and EUR is the quote currency.</p>
                    <p><strong>What are candles?</strong></p>
                    <p>Candles are a type of bar chart used in technical analysis that display the high, low, open and closing prices for a specific period.</p>
                    <p><strong>What is a correction?</strong></p>
                    <p>A correction is a price movement that goes against the prevailing main trend.</p>
                    <p><strong>What is a counter-trend?</strong></p>
                    <p>A counter-trend is a trend moving against the main trend.</p>
                    <p><strong>What is a currency pair?</strong></p>
                    <p>Forex trading involves exchanging one currency for another, therefore currencies come in twos, in so-called trading currency pairs. A pair is the quotation of two different currencies, with the value of one currency being quoted against the other. For instance, when one refers to the exchange rate of the EUR to the USD, one quotes the relationship, or exchange rate, as EUR/USD. The first listed currency is called the base currency, and the second currency is called the quote currency.&nbsp;</p>
                    <p><strong>What is a currency swap?</strong></p>
                    <p>A currency swap is an agreement between two parties to exchange their periodic interest-rate payments based on a set amount of money, for a set amount of time, but in different currencies.</p>
                    <p><strong>What is a financing rate?</strong></p>
                    <p>A financing rate or overnight rate is charged when you hold a leveraged position for more than a day, as for example in a forex trade. A leveraged position means you borrow money from the broker to trade. For this borrowed money, you have to pay interest (or in certain cases, can also receive interest). This is the financing rate.</p>
                    <p><strong>What is a gap in forex?</strong></p>
                    <p>These are sharp breaks in price between periods of trading. For example, if a opening trading price in the morning is much lower than the previous {`day's`} closing price, the difference is the gap.&nbsp;</p>
                    <p><strong>What are forex indicators?</strong></p>
                    <p>A mathematical calculation that allows you to analyze a currency pair.</p>
                    <p><strong>What is leverage?</strong></p>
                    <p>Leverage is an investment strategy of using borrowed money, or debt, rather than fresh equity, to increase the potential return of an investment. lt is a loan that the broker gives the trader, which works as a multiplier not just for your gains, but losses as well.&nbsp;</p>
                    <p><strong>What is a lot in forex?</strong></p>
                    <p>A lot is the number of units of a financial instrument that is traded on an exchange. For stocks, a round lot is 100 share units, while forex is traded in micro, mini, and standard lots.</p>
                    <p><strong>What is going long in forex?</strong></p>
                    <p>When you go long in forex trading, you are buying the base currency and selling the quote currency.</p>
                    <p><strong>What is margin?</strong></p>
                    <p>The margin is a portion of your funds that your forex broker sets aside from your account balance to keep your trade open and to ensure that you can cover the potential loss of the trade. Buying on margin is the act of borrowing money to buy securities. The practice includes buying an asset where the buyer pays only a percentage of the {`asset's`} value and borrows the rest from the bank or broker. The broker acts as a lender and the securities in the {`investor's`} account act as collateral.</p>
                    <p><strong>What is a margin call?</strong></p>
                    <p>A margin call is when your broker notifies you that your margin level has fallen below the required minimum. Brokers use a margin level to determine whether a forex trader can take a new position or not. A margin level of 0% means that the account currently has no open positions, and a margin level of 100% means that account equity is equal to the used margin.</p>
                    <p><strong>What is a market maker?</strong></p>
                    <p>A financial intermediary that stands ready to buy or sell assets. This is done by continuously quoting bid and ask prices that are accessible to other traders or registered participants of a trading platform.</p>
                    <p><strong>What is a pip in forex?</strong></p>
                    <p>The pip is a unit of measurement for price movements in forex.</p>
                    <p><strong>What is position sizing in forex?</strong></p>
                    <p>This concerns setting the number of units to buy or sell a currency pair.</p>
                    <p><strong>What is a quote currency?</strong></p>
                    <p>The second currency of a currency pair. For example, in the case of USD/EUR, EUR is the quote currency and USD is the base currency.&nbsp;</p>
                    <p><strong>What is going short in forex?</strong></p>
                    <p>When you go short buy, you are selling the base currency and buying the quote currency.</p>
                    <p><strong>What is a stop-loss in forex?</strong></p>
                    <p>The stop-loss in an order type designed to minimize your losses. With a stop-loss order, you will automatically close your trading position once the exchange rate reaches a predetermined level.&nbsp;</p>
                    <p><strong>What is a swap?</strong></p>
                    <p>Swap is the interest that you either earn or pay for a trade that you keep open overnight.</p>
                    <p><strong>What is slippage in forex?</strong></p>
                    <p>Forex slippage occurs when a market order is executed or a stop-loss closes the position at a different rate than set in the order.</p>
                    <p><strong>What is a target price?</strong></p>
                    <p>This is the price you set as a target that you expect the instrument will reach.</p>
                    <p><strong>What are time frames in forex?</strong></p>
                    <p>Any designated unit of time in which trading takes place. One candle can involve for example one month of information, or one day, one minute (MN, W1, D1, M1), etc.</p>
                    <p><strong>What is a trailing stop?</strong></p>
                    <p>Trailing stop is an order type designed to lock in profits or limit losses as a trade moves in a favorable direction. Trailing stops only move if the price moves favorably.</p>
                    <p><strong>What is volatility?</strong></p>
                    <p>A measure of the frequency and extent of changes in a {`currency's`} value.</p>
                    <h3><strong>Further reading</strong></h3>
                    <p><strong><a href="/#education/forex/forex-trading-for-beginners" target="_blank" rel="noreferrer">Forex trading for beginners</a></strong></p>
                    <p><strong><a href="/#best-brokers/best-forex-brokers/top-forex-trading-strategies" target="_blank" rel="noreferrer">Top forex trading strategies</a></strong></p>
                    <p><strong><a href="/#best-brokers/best-forex-brokers/top-forex-trading-strategies/example" target="_blank" rel="noreferrer">Real-life example of a forex trade</a></strong></p>
                    <p><strong><a href="/best-brokers/best-forex-brokers/forex-trading-scams/is-forex-legit" target="_blank" rel="noreferrer">Is forex legit?</a></strong></p>
                    <p><strong><a href="/best-brokers/best-forex-brokers/forex-trading-scams" target="_blank" rel="noreferrer">Forex trading scams</a></strong></p>
                    <p><strong><a href="/#broker-reviews/forex-broker-reviews" target="_blank" rel="noreferrer">Forex broker reviews</a></strong></p>
                    <p><strong><a href="/#best-brokers/best-forex-brokers/central-banks-in-forex" target="_blank" rel="noreferrer">The role of central banks in forex trading</a></strong></p>
                    <p><strong><a href="/#best-brokers/best-forex-brokers/what-is-carry-trade" target="_blank" rel="noreferrer">Carry trade explained</a></strong></p>
                    <p><strong><a href="/#best-brokers/best-forex-brokers/what-is-leverage" target="_blank" rel="noreferrer">What is leverage in forex</a></strong></p>
                  </div>
                </div>
              </div>
              <div className="w-1/3 hidden lg:block">
                <div className="table-of-content-desktop bg-slate-100 border border-slate-300 rounded-lg p-6 relative">
                  <div id="toc" className="absolute block top-0 pt-8 -mt-20" />
                  <div className="text-2xl font-semibold">Table of contents</div>
                  <div className="mt-4 flex flex-col pl-2">
                    <a className="group bc-link-no-decor hover:text-secondary-500" href="#the-essence">
                      <div className="anchor-link-content" data-chapter-title="The essence" data-ga-event-element-id="ToC desktop - The essence" data-ga-event-category="Navigation" data-ga-event-click={1}>
                        <span className="hidden group-hover:text-secondary-500 group-hover:inline absolute"> &gt; </span>
                        <span className="ml-4 block">1. The essence</span>
                      </div>
                    </a>
                    <a className="group bc-link-no-decor hover:text-secondary-500" href="#the-basics-of-forex-trading">
                      <div className="anchor-link-content" data-chapter-title="The basics of forex trading" data-ga-event-element-id="ToC desktop - The basics of forex trading" data-ga-event-category="Navigation" data-ga-event-click={1}>
                        <span className="hidden group-hover:text-secondary-500 group-hover:inline absolute"> &gt; </span>
                        <span className="ml-4 block">2. The basics of forex trading</span>
                      </div>
                    </a>
                    <a className="group bc-link-no-decor hover:text-secondary-500" href="#understanding-the-forex-market">
                      <div className="anchor-link-content" data-chapter-title="Understanding the forex market" data-ga-event-element-id="ToC desktop - Understanding the forex market" data-ga-event-category="Navigation" data-ga-event-click={1}>
                        <span className="hidden group-hover:text-secondary-500 group-hover:inline absolute"> &gt; </span>
                        <span className="ml-4 block">3. Understanding the forex market</span>
                      </div>
                    </a>
                    <a className="group bc-link-no-decor hover:text-secondary-500" href="#key-factors-in-forex-trading">
                      <div className="anchor-link-content" data-chapter-title="Key factors in forex trading" data-ga-event-element-id="ToC desktop - Key factors in forex trading" data-ga-event-category="Navigation" data-ga-event-click={1}>
                        <span className="hidden group-hover:text-secondary-500 group-hover:inline absolute"> &gt; </span>
                        <span className="ml-4 block">4. Key factors in forex trading</span>
                      </div>
                    </a>
                    <a className="group bc-link-no-decor hover:text-secondary-500" href="#faq">
                      <div className="anchor-link-content" data-chapter-title="FAQ" data-ga-event-element-id="ToC desktop - FAQ" data-ga-event-category="Navigation" data-ga-event-click={1}>
                        <span className="hidden group-hover:text-secondary-500 group-hover:inline absolute"> &gt; </span>
                        <span className="ml-4 block">5. FAQ</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="flex justify-center sticky top-5 mt-4" data-ga-event-element-id="desktop-top-5-box" data-ga-event-category="CRO" data-ga-event-impression={1}>
                  <Top5Table />
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="bc_padded_row_wide">
          <div className="bc-author-section ">
            <h3 className="author-of-review-title mobile">Author of this article</h3>
            <div className="primary-section">
              <div className="author-image" style={{ position: 'relative' }}>
                <div className="ratio-box" style={{ maxWidth: 300 }}>
                  <picture style={{ paddingBottom: '100%' }}>
                    <img alt="Ahmed Shobowale" className=" no-gallery lazyload" height={300} src="/images/team_members_cropped/14.png" width={300} />
                  </picture>
                </div>
              </div>
              <div className="author-statement-text desktop">
                <h3 className="author-of-review-title desktop">Author of this article</h3>
                Ahmed is an experienced financial journalist having worked for 15+ years as a correspondent for Bloomberg, Dow Jones and The Wall Street Journal covering macroeconomics, stock, currency and fixed income markets. She holds a {`master's`} degree in American Studies and Journalism.
              </div>
            </div>
            <div className="secondary-section">
              <div className="author-details">
                <h4 className="author-name">
                  <a data-ga-event-element-id="author-section-link_Ahmed Shobowale" data-ga-event-category="author" data-ga-event-click="data-ga-event-click" href="/#team/Ahmed-balazs" target="_blank" rel="noreferrer">
                    Ahmed Shobowale
                  </a>
                </h4>
                <p className="author-job-description">Senior Editor </p>
              </div>
              <div className="author-statement-text mobile">
                Ahmed is an experienced financial journalist having worked for 15+ years as a correspondent for Bloomberg, Dow Jones and The Wall Street Journal covering macroeconomics, stock, currency and fixed income markets. She holds a {`master's`} degree in American Studies and Journalism.
              </div>
              <p className="author-disclaimer">Everything you find on Top5brokers is based on reliable data and unbiased
                information. We combine our 10+ years finance experience with readers feedback.
                <a href="/#methodology" target="_blank" rel="noreferrer">Read more about our methodology</a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="fixed w-full bottom-0 z-[100] pointer-events-none">
          <div className="w-full flex justify-end pr-3">
            <a className="back-to-top-button bc-link-no-decor block cursor-pointer pointer-events-auto" data-toc-id="toc" data-ga-event-element-id="BackToTopButton" data-ga-event-category="Navigation" data-ga-event-impression={1} data-ga-event-click={1} target="_blank">
              <span className="svg_icon back-to-top-button-light-gray " style={{ width: 40, height: 40 }} />
            </a>
          </div>
          <div className="pointer-events-auto">
            <div className="bc_mobile_bottom_popup relative">
              <div className="button-container">
                <div className="bc_mobile_bottom_popup_box">
                  <a className="bc_button bc_button__primary " href="/find-my-broker" target="_blank" rel="noreferrer">
                    Find my broker
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

const Top5Table = () => {
  const [stock_brokers, setStock_brokers] = useState<typeof brokers>([]);
  const [tab, setTab] = useState(0)

  useEffect(() => {
    const listA = ['FXTM', 'XM', 'etoro', 'exness', 'avatrade'];
    const listB = ['FXTM', 'XM', 'oanda', 'hf markets', 'exness'];
    var list = listA
    if (tab === 0) {
      list = listA
    } else {
      list = listB
    }
    const newList: typeof brokers = [];
    list.forEach((item) => {
      const r = brokers.find(
        (i) => i?.broker_details?.name?.toLowerCase() === item?.toLowerCase()
      );
      r && newList.push(r);
    });
    setStock_brokers(newList);
  }, [tab]);

  return (
    <div className="top-5-box top-5 sticky bg-white flex flex-col w-full max-w-md rounded shadow-lg p-6">
      <div className="flex items-center font-semibold text-2xl mb-2 mt-2">
        Top 5 brokers
      </div>
      <div className="flex">
        <div className={`tab-button grow text-center cursor-pointer select-none bg-white font-medium text-md py-1 ${tab === 0 && 'active'}`} onClick={() => setTab(0)}>
          Stock
        </div>
        <div className={`tab-button grow text-center cursor-pointer select-none bg-white font-medium text-md py-1 ${tab === 1 && 'active'}`} onClick={() => setTab(1)}>
          Forex
        </div>
      </div>

      <div className="w-full">
        <div className="tab-content ">
          <div className="top-5-box-broker-list pb-13">
            {stock_brokers.map((broker, index) => {
              return (
                <div
                  key={broker.broker_id}
                  className="w-full border-b last:border-none border-secondary-50"
                >
                  <a
                    rel="nofollow noreferrer"
                    href={broker.broker_details.broker_link}
                    target="_blank"
                    className="openAccountBtn"
                  >
                    <div className="hover:bg-secondary-50 py-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start w-7 pl-1 font-semibold">
                          {index + 1}.
                        </div>
                        <div className="w-full">
                          <div className="flex items-center text-sm font-semibold">
                            <div className="flex items-center pr-1.5">
                              <span
                                className="w-8 h-8 bg-cover no-gallery"
                                style={{
                                  backgroundImage:
                                    `url(${broker.broker_details.broker_logo})`,
                                }}
                              />
                            </div>
                            <div>{broker.broker_details.name}</div>
                          </div>
                        </div>
                        <span className="svg_icon top-5-box-arrow " />
                      </div>
                      <span className="mt-1 bc-cta-cfd-warning ">
                        <strong>
                          {broker.loseMoney}
                        </strong>
                      </span>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <div className="text-sm mt-4 text-center">
          Get your personalized toplist:
        </div>
        <div className="flex justify-center pt-2">
          <a className="bc_button bc_button__tertiary w-full" href="/find-my-broker" target="_blank" data-ga-event-element-id="top-5-box-fmb-button" data-ga-event-category="user-channeling" data-ga-event-impression={1} data-ga-event-click={1} rel="noreferrer">
            Find my broker
          </a>
        </div>
      </div>
    </div>
  )
}