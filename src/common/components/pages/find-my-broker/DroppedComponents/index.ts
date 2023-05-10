import BrokerForResearch from "./BrokerForResearch"
import CFDTrading from "./CFDTrading"
import CrytoCurrencyBroker from "./CryptoCurrencyBroker"
import ETFRecording from "./ETFRecording"
import FutureAndOptions from "./FutureAndOptions"
import ShouldUse from "./ShouldUse"
import TradingAndInvesting from "./TradingAndInvesting"
import IdealForex from "./IdealForex"
import { FC } from "react"

export const DroperComponents:{title: string; Component: FC
    }[] = [
        {
            title: 'How can I find the best brokers for my trading and investing?',
            Component: TradingAndInvesting,
        },
        {
            title: 'How can I use Find My Broker for my broker search?',
            Component: BrokerForResearch,
        },
        {
            title: 'Which stock broker should I use?',
            Component: ShouldUse,
        },
        {
            title: 'How do I find my ideal forex broker?',
            Component: IdealForex,
        },{
            title: 'Which broker is best for futures and options trading?',
            Component: FutureAndOptions,
        }
        ,{
            title: 'Which broker is best for ETF trading?',
            Component: ETFRecording,
        }
        ,{
            title: 'Which broker is best for my CFD trading activity?',
            Component: CFDTrading,
        }
        ,{
            title: 'How do I choose a cryptocurrency broker?',
            Component: CrytoCurrencyBroker,
        }
    
]