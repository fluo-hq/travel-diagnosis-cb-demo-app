import React from 'react';

import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

export default class Banks extends React.Component {
  state = {
    selectedItemId: "",
  };

  render() {
    return (
      <FormControl id="bank-control">
        <Select
          value={this.state.selectedItemId}        
          onChange={this.handleChange}
          renderValue={this.renderValue}
          autoWidth
          id="bank-selector"
        >
            <MenuItem value="">
              None
            </MenuItem>
            {this.props.banks.map(bank => {
              return (
                <MenuItem key={bank.id} value={bank.id} data-type="bank">
                  {this.renderValue(bank.id)}
                </MenuItem>
              );
            })}
        </Select>
        <FormHelperText>Banques</FormHelperText>
      </FormControl>
    );
  }

  handleChange = (event) => {
    const bankId = event.target.value; 
    this.setState({
      selectedItemId: bankId,
    });
    this.props.onBankClick(this.findBankById(bankId));
  }

  renderValue = bankId => {
    const bank = this.findBankById(bankId);
    return (
      <span><img src={bank.imageURL} style={{ display: "inline-block", verticalAlign: "middle", marginRight: "5px"}} height="19px" alt="bank"/>{bank.name}</span>
    );
  }

  findBankById = (id) => {
    return this.props.banks.find(bank => bank.id === id);
  }
}