/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next';
import Image from 'next/image';

const BestBrokerAwardComponent: NextPage = () => {
  return (
    <div className="best-broker-awards-container">
      <div className="content">
        <div className="broker-awards-title-section-container section gap-6">
          <div className="text">
            <Image
              className="bc-award-logo"
              src="/images/best_broker_awards/bc_award_logo.svg"
              width={'200'}
              height={'200'}
              alt={''}
            />
            <div className="title">top5brokers Awards 2023</div>
            <div className="content">
              Presenting the updated annual selection of the best brokers across
              several categories.
              <br />
              Results are based on a comprehensive review of our methodology as
              well as updated and new broker reviews.
            </div>
          </div>

          <Image
            src="/images/illustrations/touch_screen.png"
            alt=""
            width={500}
            height={400}
            className="!h-fit"
          />
        </div>
        <div className="broker-awards-winners-container section">
          <span className="design-bubble top-left w-[1000px] h-[1000px] rounded-full bg-blue-100/50"></span>
          <div className="title">Best brokers in 2023</div>
          <div className="sub-title">
            Explore all the categories and the winners, check the related Best
            list to learn about more details, including the runners-up.
          </div>
          <div className="winner-list-container">
            <div className="winner shadow-md px-3 py-8 m-2 bg-white rounded">
              <div className="category">
                <span
                  className="wing left"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-left.svg)',
                  }}
                ></span>
                <div className="category-name">Best online broker</div>
                <span
                  className="wing right"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-right.svg)',
                  }}
                ></span>
              </div>
              <Image
                className="bc_broker_icon no-gallery"
                alt="Interactive Brokers Logo"
                src="/images/broker_logos/interactive-brokers-review.png"
                width={50}
                height={50}
              />

              <div className="name">Interactive Brokers</div>
              <a
                href="https://top5brokers.com/best-brokers/best-online-brokers?showWinnerList"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                Best list
              </a>
            </div>
            <div className="winner shadow-md px-3 py-8 m-2 bg-white rounded">
              <div className="category">
                <span
                  className="wing left"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-left.svg)',
                  }}
                ></span>
                <div className="category-name">Best discount broker</div>
                <span
                  className="wing right"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-right.svg)',
                  }}
                ></span>
              </div>
              <Image
                className="bc_broker_icon no-gallery"
                alt="DEGIRO Logo"
                src="/images/broker_logos/degiro-review.png"
                width={50}
                height={50}
              />

              <div className="name">DEGIRO</div>
              <a
                href="https://top5brokers.com/best-brokers/best-discount-brokers?showWinnerList"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                Best list
              </a>
            </div>
            <div className="winner shadow-md px-3 py-8 m-2 bg-white rounded">
              <div className="category">
                <span
                  className="wing left"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-left.svg)',
                  }}
                ></span>
                <div className="category-name">Best stock broker</div>
                <span
                  className="wing right"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-right.svg)',
                  }}
                ></span>
              </div>
              <Image
                className="bc_broker_icon no-gallery"
                alt="Interactive Brokers Logo"
                src="/images/broker_logos/interactive-brokers-review.png"
                width={50}
                height={50}
              />

              <div className="name">Interactive Brokers</div>
              <a
                href="https://top5brokers.com/best-brokers/best-stock-brokers?showWinnerList"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                Best list
              </a>
            </div>
            <div className="winner shadow-md px-3 py-8 m-2 bg-white rounded">
              <div className="category">
                <span
                  className="wing left"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-left.svg)',
                  }}
                ></span>
                <div className="category-name">Best crypto broker</div>
                <span
                  className="wing right"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-right.svg)',
                  }}
                ></span>
              </div>
              <Image
                className="bc_broker_icon no-gallery"
                alt="TradeStation Logo"
                src="/images/broker_logos/tradestation-review.png"
                width={50}
                height={50}
              />

              <div className="name">TradeStation</div>
              <a
                href="https://top5brokers.com/best-brokers/best-crypto-brokers?showWinnerList"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                Best list
              </a>
            </div>
            <div className="winner shadow-md px-3 py-8 m-2 bg-white rounded">
              <div className="category">
                <span
                  className="wing left"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-left.svg)',
                  }}
                ></span>
                <div className="category-name">
                  Best options trading platform
                </div>
                <span
                  className="wing right"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-right.svg)',
                  }}
                ></span>
              </div>
              <Image
                className="bc_broker_icon no-gallery"
                alt="tastyworks Logo"
                src="/images/broker_logos/tastyworks-review.png"
                width={50}
                height={50}
              />

              <div className="name">tastyworks</div>
              <a
                href="https://top5brokers.com/best-brokers/best-options-platforms-and-brokers?showWinnerList"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                Best list
              </a>
            </div>
            <div className="winner shadow-md px-3 py-8 m-2 bg-white rounded">
              <div className="category">
                <span
                  className="wing left"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-left.svg)',
                  }}
                ></span>
                <div className="category-name">Best forex broker</div>
                <span
                  className="wing right"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-right.svg)',
                  }}
                ></span>
              </div>
              <Image
                className="bc_broker_icon no-gallery"
                alt="Saxo Bank Logo"
                src="/images/broker_logos/saxo-bank-review.png"
                width={50}
                height={50}
              />

              <div className="name">Saxo Bank</div>
              <a
                href="https://top5brokers.com/best-brokers/best-forex-brokers?showWinnerList"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                Best list
              </a>
            </div>
            <div className="winner shadow-md px-3 py-8 m-2 bg-white rounded">
              <div className="category">
                <span
                  className="wing left"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-left.svg)',
                  }}
                ></span>
                <div className="category-name">Lowest spread forex broker</div>
                <span
                  className="wing right"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-right.svg)',
                  }}
                ></span>
              </div>
              <Image
                className="bc_broker_icon no-gallery"
                alt="Fusion Markets Logo"
                src="/images/broker_logos/fusion-markets-review.png"
                width={50}
                height={50}
              />

              <div className="name">Fusion Markets</div>
              <a
                href="https://top5brokers.com/best-brokers/best-lowest-spread-forex-brokers?showWinnerList"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                Best list
              </a>
            </div>
            <div className="winner shadow-md px-3 py-8 m-2 bg-white rounded">
              <div className="category">
                <span
                  className="wing left"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-left.svg)',
                  }}
                ></span>
                <div className="category-name">Best CFD broker</div>
                <span
                  className="wing right"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-right.svg)',
                  }}
                ></span>
              </div>
              <Image
                className="bc_broker_icon no-gallery"
                alt="XTB Logo"
                src="/images/broker_logos/xtb-review.png"
                width={50}
                height={50}
              />

              <div className="name">XTB</div>
              <a
                href="https://top5brokers.com/best-brokers/best-cfd-brokers?showWinnerList"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                Best list
              </a>
            </div>
            <div className="winner shadow-md px-3 py-8 m-2 bg-white rounded">
              <div className="category">
                <span
                  className="wing left"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-left.svg)',
                  }}
                ></span>
                <div className="category-name">Best futures broker</div>
                <span
                  className="wing right"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-right.svg)',
                  }}
                ></span>
              </div>
              <Image
                className="bc_broker_icon no-gallery"
                alt="NinjaTrader Logo"
                src="/images/broker_logos/ninjatrader-review.png"
                width={50}
                height={50}
              />

              <div className="name">NinjaTrader</div>
              <a
                href="https://top5brokers.com/best-brokers/best-futures-brokers?showWinnerList"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                Best list
              </a>
            </div>
            <div className="winner shadow-md px-3 py-8 m-2 bg-white rounded">
              <div className="category">
                <span
                  className="wing left"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-left.svg)',
                  }}
                ></span>
                <div className="category-name">Best broker for bonds</div>
                <span
                  className="wing right"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-right.svg)',
                  }}
                ></span>
              </div>
              <Image
                className="bc_broker_icon no-gallery"
                alt="TD Ameritrade Logo"
                src="/images/broker_logos/td-ameritrade-review.png"
                width={50}
                height={50}
              />

              <div className="name">TD Ameritrade</div>
              <a
                href="https://top5brokers.com/best-brokers/best-brokers-for-bonds?showWinnerList"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                Best list
              </a>
            </div>
            <div className="winner shadow-md px-3 py-8 m-2 bg-white rounded">
              <div className="category">
                <span
                  className="wing left"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-left.svg)',
                  }}
                ></span>
                <div className="category-name">Best broker for beginners</div>
                <span
                  className="wing right"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-right.svg)',
                  }}
                ></span>
              </div>
              <Image
                className="bc_broker_icon no-gallery"
                alt="eToro Logo"
                src="/images/broker_logos/etoro-review.png"
                width={50}
                height={50}
              />

              <div className="name">eToro</div>
              <a
                href="https://top5brokers.com/best-brokers/best-brokers-for-beginners?showWinnerList"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                Best list
              </a>
            </div>
            <div className="winner shadow-md px-3 py-8 m-2 bg-white rounded">
              <div className="category">
                <span
                  className="wing left"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-left.svg)',
                  }}
                ></span>
                <div className="category-name">Best broker for investing</div>
                <span
                  className="wing right"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-right.svg)',
                  }}
                ></span>
              </div>
              <Image
                className="bc_broker_icon no-gallery"
                alt="Interactive Brokers Logo"
                src="/images/broker_logos/interactive-brokers-review.png"
                width={50}
                height={50}
              />

              <div className="name">Interactive Brokers</div>
              <a
                href="https://top5brokers.com/best-brokers/best-online-brokers-for-buy-and-hold-investors?showWinnerList"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                Best list
              </a>
            </div>
            <div className="winner shadow-md px-3 py-8 m-2 bg-white rounded">
              <div className="category">
                <span
                  className="wing left"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-left.svg)',
                  }}
                ></span>
                <div className="category-name">Best broker for day trading</div>
                <span
                  className="wing right"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-right.svg)',
                  }}
                ></span>
              </div>
              <Image
                className="bc_broker_icon no-gallery"
                alt="Interactive Brokers Logo"
                src="/images/broker_logos/interactive-brokers-review.png"
                width={50}
                height={50}
              />

              <div className="name">Interactive Brokers</div>
              <a
                href="https://top5brokers.com/best-brokers/best-brokers-for-day-trading?showWinnerList"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                Best list
              </a>
            </div>
            <div className="winner shadow-md px-3 py-8 m-2 bg-white rounded">
              <div className="category">
                <span
                  className="wing left"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-left.svg)',
                  }}
                ></span>
                <div className="category-name">Best trading platform</div>
                <span
                  className="wing right"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-right.svg)',
                  }}
                ></span>
              </div>
              <Image
                className="bc_broker_icon no-gallery"
                alt="Saxo Bank Logo"
                src="/images/broker_logos/saxo-bank-review.png"
                width={50}
                height={50}
              />

              <div className="name">Saxo Bank</div>
              <a
                href="https://top5brokers.com/best-brokers/best-trading-platform-winner?showWinnerList"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                Best list
              </a>
            </div>
            <div className="winner shadow-md px-3 py-8 m-2 bg-white rounded">
              <div className="category">
                <span
                  className="wing left"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-left.svg)',
                  }}
                ></span>
                <div className="category-name">Best stock trading app</div>
                <span
                  className="wing right"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-right.svg)',
                  }}
                ></span>
              </div>
              <Image
                className="bc_broker_icon no-gallery"
                alt="DEGIRO Logo"
                src="/images/broker_logos/degiro-review.png"
                width={50}
                height={50}
              />

              <div className="name">DEGIRO</div>
              <a
                href="https://top5brokers.com/best-brokers/best-stock-trading-apps?showWinnerList"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                Best list
              </a>
            </div>
            <div className="winner shadow-md px-3 py-8 m-2 bg-white rounded">
              <div className="category">
                <span
                  className="wing left"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-left.svg)',
                  }}
                ></span>
                <div className="category-name">Best broker for IPO</div>
                <span
                  className="wing right"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-right.svg)',
                  }}
                ></span>
              </div>
              <Image
                className="bc_broker_icon no-gallery"
                alt="Webull Logo"
                src="/images/broker_logos/webull-review.png"
                width={50}
                height={50}
              />

              <div className="name">Webull</div>
              <a
                href="https://top5brokers.com/best-brokers/best-brokers-for-ipo?showWinnerList"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                Best list
              </a>
            </div>
            <div className="winner shadow-md px-3 py-8 m-2 bg-white rounded">
              <div className="category">
                <span
                  className="wing left"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-left.svg)',
                  }}
                ></span>
                <div className="category-name">Best MetaTrader broker</div>
                <span
                  className="wing right"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-right.svg)',
                  }}
                ></span>
              </div>
              <Image
                className="bc_broker_icon no-gallery"
                alt="Fusion Markets Logo"
                src="/images/broker_logos/fusion-markets-review.png"
                width={50}
                height={50}
              />

              <div className="name">Fusion Markets</div>
              <a
                href="https://top5brokers.com/best-brokers/best-brokers-for-metatrader?showWinnerList"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                Best list
              </a>
            </div>
            <div className="winner shadow-md px-3 py-8 m-2 bg-white rounded">
              <div className="category">
                <span
                  className="wing left"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-left.svg)',
                  }}
                ></span>
                <div className="category-name">
                  Best social trading platform
                </div>
                <span
                  className="wing right"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-right.svg)',
                  }}
                ></span>
              </div>
              <Image
                className="bc_broker_icon no-gallery"
                alt="eToro Logo"
                src="/images/broker_logos/etoro-review.png"
                width={50}
                height={50}
              />

              <div className="name">eToro</div>
              <a
                href="https://top5brokers.com/best-brokers/best-social-trading-platforms?showWinnerList"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                Best list
              </a>
            </div>
            <div className="winner shadow-md px-3 py-8 m-2 bg-white rounded">
              <div className="category">
                <span
                  className="wing left"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-left.svg)',
                  }}
                ></span>
                <div className="category-name">Best IRA broker</div>
                <span
                  className="wing right"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-right.svg)',
                  }}
                ></span>
              </div>
              <Image
                className="bc_broker_icon no-gallery"
                alt="E*TRADE Logo"
                src="/images/broker_logos/e-trade-review.png"
                width={50}
                height={50}
              />

              <div className="name">E*TRADE</div>
              <a
                href="https://top5brokers.com/best-brokers/best-ira-brokerages?showWinnerList"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                Best list
              </a>
            </div>
            <div className="winner shadow-md px-3 py-8 m-2 bg-white rounded">
              <div className="category">
                <span
                  className="wing left"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-left.svg)',
                  }}
                ></span>
                <div className="category-name">Best ISA broker</div>
                <span
                  className="wing right"
                  style={{
                    backgroundImage: 'url(/images/broker_logos/wing-right.svg)',
                  }}
                ></span>
              </div>
              <Image
                className="bc_broker_icon no-gallery"
                alt="Freetrade Logo"
                src="/images/broker_logos/freetrade-review.png"
                width={50}
                height={50}
              />

              <div className="name">Freetrade</div>
              <a
                href="https://top5brokers.com/best-brokers/best-brokers-for-stocks-and-shares-isa?showWinnerList"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                Best list
              </a>
            </div>
          </div>
          <span className="design-bubble bottom-right w-[1000px] h-[1000px] rounded-full bg-blue-100/50"></span>
        </div>

        <div className="broker-awards-methodology-container section">
          <span
            className="illustration desktop"
            style={{
              backgroundImage:
                'url(/images/illustrations/presentation_light.png)',
            }}
          ></span>
          <div className="methodology-content">
            <div className="title">Methodology changes</div>
            <span className="illustration mobile"></span>
            <div className="text">
              <ul>
                <li>
                  We assigned greater weight to fee levels and safety
                  considerations
                </li>
                <li>
                  We increased the weights of bonds, and margin rates as both
                  are affected in current macro environment
                </li>
                <li>
                  We further optimized the gathering of fee data via automation
                </li>
                <li>
                  We collected more than 50,000 data points for 100+ brokers
                </li>
              </ul>
            </div>
            <a
              className="bc_button bc_button__secondary"
              href="https://top5brokers.com/methodology"
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </a>
          </div>
        </div>
        <div className="design-bubble-container">
          <span className="design-bubble w-[1000px] h-[1000px] rounded-full bg-blue-100/50"></span>
        </div>
        <div className="broker-awards-team-container section">
          <div className="title">Team</div>
          <div className="subtitle">
            While the whole team put in their fair share, the annual update
            effort was designed and overseen by
          </div>
          <div className="team-members-container">
            <div className="team-member">
              <Image
                className="image"
                src="/images/team_members_cropped/32.png"
                width={'200'}
                height={'200'}
                alt={''}
              />
              <div className="job-title">Broker Expert</div>
              <div className="name">Gyula Lencsés, CFA</div>
            </div>
            <div className="team-member">
              <Image
                className="image"
                src="/images/team_members_cropped/34.png"
                width={'200'}
                height={'200'}
                alt={''}
              />
              <div className="job-title">Junior Broker Analyst</div>
              <div className="name">Réka Hidas</div>
            </div>
            <div className="team-member">
              <Image
                className="image"
                src="/images/team_members_cropped/27.png"
                width={'200'}
                height={'200'}
                alt={''}
              />
              <div className="job-title">Broker Expert</div>
              <div className="name">Krisztián Gátonyi</div>
            </div>
            <div className="team-member">
              <Image
                className="image"
                src="/images/team_members_cropped/13.png"
                width={'200'}
                height={'200'}
                alt={''}
              />
              <div className="job-title">Broker Expert</div>
              <div className="name">Ádám Nasli</div>
            </div>
            <div className="team-member">
              <Image
                className="image"
                src="/images/team_members_cropped/53.png"
                width={'200'}
                height={'200'}
                alt={''}
              />
              <div className="job-title">Junior Broker Analyst</div>
              <div className="name">Tamás Gyuriczki</div>
            </div>
            <div className="team-member">
              <Image
                className="image"
                src="/images/team_members_cropped/22.png"
                width={'200'}
                height={'200'}
                alt={''}
              />
              <div className="job-title">Senior Content Editor</div>
              <div className="name">Edith Balázs</div>
            </div>
            <div className="team-member">
              <Image
                className="image"
                src="/images/team_members_cropped/40.png"
                width={'200'}
                height={'200'}
                alt={''}
              />
              <div className="job-title">Content Editor</div>
              <div className="name">Eszter Zalán</div>
            </div>
            <div className="team-member">
              <Image
                className="image"
                src="/images/team_members_cropped/14.png"
                width={'200'}
                height={'200'}
                alt={''}
              />
              <div className="job-title">Content Editor</div>
              <div className="name">Tamás Deme</div>
            </div>
            <div className="team-member">
              <Image
                className="image"
                src="/images/team_members_cropped/11.png"
                width={'200'}
                height={'200'}
                alt={''}
              />
              <div className="job-title">Proofreader</div>
              <div className="name">Balázs Szládek</div>
            </div>
          </div>
        </div>
        <div className="broker-awards-closing-container section">
          <div className="text">
            <div className="title">Do you have any questions?</div>
            <span className="illustration mobile"></span>
            <div className="text-content">
              <div className="subtitle">
                We are happy to answer any questions you may have.
              </div>

              <div className="details">
                Write to us directly to inquire about brokers, industry
                insights, partnerships. You can contact us any of the following
                email addresses:
              </div>

              <a href="mailto:media@top5brokers.com" className="email-address">
                info@top5brokers.com
              </a>
              <br />
              <a href="mailto:media@top5brokers.com" className="email-address">
                media@top5brokers.com
              </a>
              <br />
              <a href="mailto:media@top5brokers.com" className="email-address">
                partnerships@top5brokers.com
              </a>
            </div>
          </div>
          <span
            className="illustration desktop"
            style={{ backgroundImage: 'url(/images/illustrations/worldwide.png)' }}
          ></span>
        </div>
      </div>
    </div>
  );
};
export default BestBrokerAwardComponent;
