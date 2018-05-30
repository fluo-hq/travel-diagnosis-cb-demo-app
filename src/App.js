import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
  
  async componentDidMount() {
      const banks = await fetchBanks();
      const destinations = await fetchDestinations();
      this.setState({
        banks: banks.data,
        destinations: destinations.data
      });
  }

  onBankClick = async bank => {
    this.setState({
      cards: await fetchCardsByBank(bank),
      selectedBank: bank,
      selectedCard: null,
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
          <Paper elevation={4}>
            <Typography variant="headline" component="h1">
              Vérifiez les assurances de votre carte
            </Typography>
            <Typography component="div">
              <Banks banks={this.state.banks} onBankClick={this.onBankClick} />
              {this.state.cards.data && <Cards onCardClick={this.onCardClick} cards={this.state.cards.data} />}
              {this.state.selectedCard && <Destinations onDestinationClick={this.onDestinationClick} destinations={this.state.destinations} />}
            </Typography>
          </Paper>
          <br /><br />
          <Paper elevation={4}>
            {this.state.currentDiagnosis && <Diagnosis diagnosis={this.state.currentDiagnosis} destination={this.state.selectedDestination} />}
          </Paper>
        </div>

    );
  }
}

export default App;
