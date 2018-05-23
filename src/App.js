import React, { Component } from 'react';

import Banks from './Banks';
import Cards from './Cards';
import Destinations from './Destinations';
import Diagnosis from './Diagnosis';
import { fetchBanks, fetchCardsByBank, fetchDestinations, fetchDiagnosis } from './diagnosis-api-client';

class App extends Component {
  state = {
    banks: [],
    selectedBank: null,
    cards: {},
    selectedCard: null,
    destinations: {},
    selectedDestination: null,
    currentDiagnosis: null,
  };

  constructor() {
    super();
  }
  
  componentWillMount() {
    (async () => {
      const banks = await fetchBanks();
      const destinations = await fetchDestinations();
      this.setState({
        banks: banks.data,
        destinations: destinations.data
      });
    })();
  }

  onBankClick = async bank => {
    this.setState({
      cards: await fetchCardsByBank(bank),
      selectedBank: bank,
    });
  }

  onCardClick = card => {
    this.setState({
      selectedCard: card,
    });
  }

  onDestinationClick = async destination => {
    const diagnosis = await fetchDiagnosis(this.state.selectedCard, destination);
    this.setState({
      selectedDestination: destination,
      currentDiagnosis: diagnosis.data,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Vérifiez les assurances de votre carte</h1>
        <div className="card-selector"><Banks banks={this.state.banks} onBankClick={this.onBankClick} /></div>
        {this.state.cards.data && <div className="card-selector"><Cards onCardClick={this.onCardClick} cards={this.state.cards.data} /></div>}
        {this.state.selectedCard && <div className="destination-selector"><Destinations onDestinationClick={this.onDestinationClick} destinations={this.state.destinations} /></div>}
        {this.state.currentDiagnosis && <div className="diagnosis"><Diagnosis diagnosis={this.state.currentDiagnosis} /></div>}
      </div>
    );
  }
}

export default App;
