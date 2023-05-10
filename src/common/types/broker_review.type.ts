export type BrokerReviewType = {
  id: number;
  broker_details: {
    name: string;
    broker_link: string;
    broker_logo: string;
  };
  author: {
    name: string;
    profile_pic: string;
    author_position: string;
    author_review: string;
  };
  created_at: string;
  updated_at: string;
  expert_verified: boolean;
  features: {
    name: string;
    icon: string;
    text: string;
    list: string[];
    rating?: {
      a: string;
      b: string;
    };
  }[];
  loose_money: string;
  broker_review_summary: string;
  review_summary_blockquote: string;
  s_and_p_cfd_benchmark_fee: {
    isAvaliable: boolean;
    fee?: number;
  };
  credit_debit_card_deposit: {
    isAvaliable: boolean;
  };
  minimum_deposit: {
    isAvaliable: boolean;
    fee?: number;
  };
  negative_balance_protection: {
    isAvaliable: boolean;
  };
  pros: string[];
  cons: string[];
  expert: {
    name: string;
    profile_pic: string;
    role: string;
  };
  expert_opinion: string;
  broker_main_highlights: {
    country_of_regulation: string[];
    trading_fees_class: string;
    inactivity_fee_charged: boolean;
    withdrawal_fee_amount: number;
    minimum_deposit: number;
    time_to_open_account: number;
    deposit_with_bank_card: boolean;
    deposit_with_electronic_wallet: boolean;
    number_of_base_currencies: number;
    demo_account_provided: boolean;
    products_offered: string[];
  };
  broker_summary: {
    fees: {
      score: number;
      summary: string;
      pros: string[];
      cons: string[];
      fees_snapshot: {
        assets: string;
        fee_level: string;
        fee_terms: string;
      }[];
      how_we_ranked_fees: {
        description: string;
        basic_terms_related_to_broker_fees: {
          description: string;
          terms: string[];
        };
        most_relevant_fees: {
          description: string;
          data: string;
        };
        similar_ones: {
          data: string;
        };
        broker_trading_fees: {
          low_or_high: string;
          description: string;
        };
        popular_instruments: {
          name: string;
          elements: string[];
        }[];
        leverages: {
          description: string;
          data: string[];
          end_description_1: string;
        };
        cfd_fees: {
          description: string;
          title: string;
          table: {
            name_of_fee: string;
            broker_fee: string;
            xm_fee: string;
            admiral: string;
          }[];
        };
        forex_fees: {
          description: string;
          title: string;
          table: {
            name_of_fee: string;
            broker_fee: string;
            xm_fee: string;
            admiral: string;
          }[];
        };
        forex_trading_fees_spreads: {
          description: string;
          steps: string[];
        };
        non_trading_fees: {
          description1: string;
          description2: string;
          title: string;
          table: {
            name_of_fee: string;
            broker_fee: string;
            xm_fee: string;
            admiral: string;
          }[];
        };
      };
    };
    account_opening: {
      score: number;
      summary: string;
      pros: string[];
      cons: string[];
      acceptance: {
        strong_heading: string;
        other_description: string;
      };
      minimum_deposit: {
        amount: string;
      };
      account_types: {
        name: string;
        description: string;
      }[];
      professional_trading_account?: string;
      demo_account?: boolean;
      testing?: string;
      how_to_open_account: {
        strong_header: string;
        description: string;
        steps: string[];
      };
      best_alternative?: {
        broker_name: string;
        broker_link: string;
      }[];
    };
    deposit_and_withdrawal: {
      score: number;
      summary: string;
      pros: string[];
      cons: string[];
      account_base_currency: {
        given_note?: string;
        base_currencies: string[];
        table: {
          name_of_fee: string;
          broker_fee: string;
          xm_fee: string;
          admiral: string;
        }[];
      };
      rival_competion: {
        description: string[];
      };
      deposit_fees_and_options: {
        description: string;
        fees_and_options: string[];
      };
      minimum_deposit: {
        value: number;
        deposit_options_table: {
          name_of_fee: string;
          broker_fee: string;
          xm_fee: string;
          admiral: string;
        }[];
        description_1: string;
        description_2: string;
      };
      withdrawal_fees_and_options: {
        description: string;
        table: {
          name_of_fee: string;
          broker_fee: string;
          xm_fee: string;
          admiral: string;
        }[];
        other_description: string[];
        steps_to_withdraw_money: string[];
      };
    };
    web_trading_platform: {
      score: number;
      summary: string;
      pros: string[];
      cons: string[];
      platforms_to_use: {
        web: {
          score: number;
          isAvailable: string;
        };
        mobile: {
          score: number;
          isAvailable: string;
        };
        desktop: {
          score: number;
          isAvailable: string;
        };
      };
      trading_platforms_to_use: {
        name: string;
        short_description: string;
        used_languages: string[];
        look_and_feel: string;
        login_and_security: string;
        search_functions: string;
        placing_orders: string[];
        placing_orders_description_1: string;
        placing_orders_description_2: string;
        alerts_and_notifications: string;
        portfolio_and_fee_reports: string;
      }[];
      trading_platforms_to_use_descriptions_1: string;
      trading_platforms_to_use_descriptions_2: string;
    };
    mobile_trading_platform: {
      score: number;
      summary: string;
      pros: string[];
      cons: string[];
      trading_platforms_to_use: {
        name: string;
        short_description: string;
        look_and_feel: string;
        login_and_security: string;
        search_functions: string;
        placing_orders: string[];
        placing_orders_description_1: string;
        placing_orders_description_2: string;
        alerts_and_notifications: string;
        portfolio_and_fee_reports: string;
      }[];
      trading_platforms_to_use_description_1: string;
      trading_platforms_to_use_description_2: string;
    };
    desktop_trading_platform: {
      score: number;
      summary: string;
      pros: string[];
      cons: string[];
      descriptions: string[];
    };
    markets_and_products: {
      score: number;
      summary: string;
      disclaimer: string;
      descriptions: string[];
      product_selection_table: {
        title: string;
        table: {
          name_of_fee: string;
          broker_fee: string;
          xm_fee: string;
          admiral: string;
        }[];
      };
      automated_trading: string;
    };
    research: {
      score: number;
      summary: string;
      pros: string[];
      cons: string[];
      research_tools: string[];
      tested_brokers_research_tools_description: string;
      trading_ideas: string;
      fundamental_data: string;
      charting: string;
      news_feed: string[];
    };
    customer_service: {
      score: number;
      summary: string;
      pros: string[];
      cons: string[];
      contact_broker_via: string[];
      descriptions: string[];
    };
    education: {
      score: number;
      summary: string;
      pros: string[];
      cons: string[];
      description: string;
      learn_ways: string[];
      video_library: string;
    };
    safety: {
      score: number;
      summary: string;
      pros: string[];
      cons: string[];
      is_broker_regulated: {
        answer: string;
        data: string[];
        other_description: string;
      };
      based_in_description: string;
      is_broker_safe: {
        answer: string;
        data: string[];
      };
      how_you_are_protected: string;
      legal_entities: {
        title: string;
        table: {
          country: string;
          protection_amount: string;
          regulator: string;
          legal_entity: string;
        }[];
      };
      negative_balance: string;
      background: string[];
    };
    bottom_line: {
      summary: string;
      description: string[];
    };
    faq: {
      summary: string;
      description: string;
      lower_fees_lower_cost: string;
      minimum_deposit: string;
      start_broker_account: string;
      trading_app: string;
      quality_of_customer_service_satisfactory: string;
      legit_scam: string;
      free_or_premium_or_both: string;
      good_for_beginners: string;
      should_you_buy_silver_bullet: string;
      trade_options: string;
      minimum_account_balance: string;
      looking_for_commission: string;
      withdraw_money: string;
      use_broker: string;
    };
  };
};
