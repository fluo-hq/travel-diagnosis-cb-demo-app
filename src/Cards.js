import React from 'react';

import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

export default class Cards extends React.Component {
  state = {
    selectedItem: "",
  };

  render() {
    return (
      <FormControl>
        <Select
          value={this.state.selectedItem}        
          onChange={this.handleChange}
          renderValue={this.renderValue}
          autoWidth
        >
            <MenuItem value="">
              None
            </MenuItem>
            {this.props.cards.map(card => {
              return (
                <MenuItem key={card.id} value={card.id}>
                  {this.renderValue(card.id)}
                </MenuItem>
              );
            })}
        </Select>
        <FormHelperText>Cartes</FormHelperText>
      </FormControl>
    );
  }

  handleChange = (event) => {
    const cardId = event.target.value; 
    this.setState({
      selectedItem: cardId,
    });
    this.props.onCardClick(this.findCardById(cardId));
  }

  renderValue = cardId => {
    const card = this.findCardById(cardId);
    if (card === undefined) {
      return null;
    } else {
        return (
          <span><img src={card.cardType.imageURL} style={{ display: "inline-block", verticalAlign: "middle", marginRight: "5px"}} height="19px" alt="card"/>{card.name}</span>
        );
    }
  }

  findCardById = (id) => {
    return this.props.cards.find(card => card.id === id)
  }
}