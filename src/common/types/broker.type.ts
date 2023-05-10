export type IBroker = {
  author: {
    name: string;
    profile_pic: string;
  };
  created_at: string;
  updated_at: string;
  expert_verified: boolean;
  features: [
    {
      name: string;
      icon: string;
      text: string;
      list: string[];
      rating: {
        a: string;
        b: string;
      };
    }
  ];
  summary: string;
  blockquote: string;
  pros: string[];
  cons: string[];
  expert: {
    name: string;
    profile_pic: string;
    role: string;
  };
  expert_opinion: string;
  broker_id: number;
  broker_details: {
    name: string;
    score: number;
    country_origin: string;
    broker_description: string;
    broker_link: string;
    broker_logo: string;
    broker_percentage: string;
  };
  broker_fees: {
    score: number;
    fees_summary: string;
  };
  broker_stock_etf_fees: {
    us: number;
    uk: number;
    germary: number;
  };
  broker_forex_fees: {
    eurusd: number;
    eurgbp: number;
    audusd: number;
  };
  broker_fund_fees: {
    mutual: null | number | string;
  };
  broker_bond_fees: {
    us_treasury: null | number | string;
    eu_government: null | number | string;
  };
  broker_options_fees: {
    us: null | number | string;
    uk: null | number | string;
    germany: null | number | string;
  };
  broker_future_fees: {
    us: null | number | string;
    uk: null | number | string;
    germary: null | number | string;
  };
  broker_crypto_fees: {
    spot: number;
  };
  broker_cfd_fees: {
    's&p_500': number;
    europe_50: number;
    apple: number;
    vodafone: number;
  };
  broker_non_trading_fees: {
    account: boolean;
    custody: boolean;
    inactivity: boolean;
    withdrawal: number;
  };
  broker_deposit_and_withdrawal: {
    score: number;
    base_currencies: number;
  };
  broker_deposit_type: {
    bank: boolean;
    credit_and_debit: boolean;
    electronic_wallet: boolean;
  };
  broker_withdrawal_type: {
    bank: boolean;
    credit_and_debit: boolean;
    electronic_wallet: boolean;
    time: number;
  };
  broker_account_opening: {
    score: number;
    full_online: boolean;
    minimum_deposit: number;
    time_to_open_account: number;
    broker_required_documents: string;
  };
  broker_trading_platform: {
    web_platform: {
      score: number;
    };
    mobile_platform: {
      score: number;
    };
    desktop_platform: {
      score: null | number;
    };
  };
  broker_markets_and_products: {
    score: number;
    stocks: boolean;
    fractional_shares: boolean;
    etfs: boolean;
    forex: boolean;
    funds: boolean;
    bonds: boolean;
    options: boolean;
    futures: boolean;
    crypto: boolean;
    cfds: boolean;
    cfd_discraimer: string;
  };
  broker_research_education: {
    research_score: number;
    education_score: string;
    charting_quality: number;
    demo_account: boolean;
  };
  broker_customer_service: {
    score: number;
    phone: boolean;
    live_chat: boolean;
    email: boolean;
    availability_24: boolean;
  };
  security: {
    investor_protection_amount: string;
    banking_background: boolean;
    listed_stock_exchange: boolean;
    foundation_date: number;
    country_regulation: string[];
  };
  loseMoney: string;
};