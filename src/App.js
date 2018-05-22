import React, { Component } from 'react';

import Banks from './Banks';
import Cards from './Cards';
import { fetchBanks, fetchCardsByBankId } from './diagnosis-api-client';

class App extends Component {
  state = {
    banks: {},
    cards: {},
  };

  constructor() {
    super();
    this.state.banks = fetchBanks();
  }

  // /diagnosis/payment_card/v1/banks

  onBankClick = bank => {
    this.setState({
      cards: fetchCardsByBankId(bank.id)
    });
  }

  onCardClick = card => {
    console.log('card selected : ', card.name);
  }

  render() {
    return (
      <div className="App">
        <h1>Vérifiez les assurances de votre carte</h1>
        <Banks banks={this.state.banks.data} onBankClick={this.onBankClick} />
        {this.state.cards.data && <Cards onCardClick={this.onCardClick} cards={this.state.cards.data} />}
      </div>
    );
  }
}

export default App;
