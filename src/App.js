import React, { Component } from 'react';

import Banks from './Banks';
import Cards from './Cards';
import Destinations from './Destinations';
import Diagnosis from './Diagnosis';
import { fetchBanks, fetchCardsByBankId, fetchDestinations, fetchDiagnosis } from './diagnosis-api-client';

class App extends Component {
  state = {
    banks: {},
    selectedBank: null,
    cards: {},
    selectedCard: null,
    destinations: {},
    selectedDestination: null,
    currentDiagnosis: null,
  };

  constructor() {
    super();
    this.state.banks = fetchBanks();
    this.state.destinations = fetchDestinations();
  }

  onBankClick = bank => {
    this.setState({
      cards: fetchCardsByBankId(bank.id),
      selectedBank: bank,
    });
  }

  onCardClick = card => {
    this.setState({
      selectedCard: card,
    });
  }

  onDestinationClick = destination => {
    this.setState({
      selectedDestination: destination,
      currentDiagnosis: fetchDiagnosis(this.state.selectedCard, this.state.selectedDestination),
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Vérifiez les assurances de votre carte</h1>
        <div className="card-selector"><Banks banks={this.state.banks.data} onBankClick={this.onBankClick} /></div>
        {this.state.cards.data && <div className="card-selector"><Cards onCardClick={this.onCardClick} cards={this.state.cards.data} /></div>}
        {this.state.selectedCard && <div className="destination-selector"><Destinations onDestinationClick={this.onDestinationClick} destinations={this.state.destinations.data} /></div>}
        {this.state.currentDiagnosis && <div className="diagnosis"><Diagnosis diagnosis={this.state.currentDiagnosis} /></div>}
      </div>
    );
  }
}

export default App;
