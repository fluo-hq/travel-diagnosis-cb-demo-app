import React from 'react';

import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

export default class Destinations extends React.Component {
  state = {
    selectedItem: "",
  };

  render() {
    return (
      <FormControl id="destination-control">
        <Select
          value={this.state.selectedItem}
          onChange={this.handleChange}
          autoWidth
        >
            <MenuItem value="">
              None
            </MenuItem>
            {this.props.destinations.map(destination => {
              return (
                <MenuItem key={destination.numericCode} value={destination.numericCode} data-type="destination">
                  {destination.usualName}
                </MenuItem>
              );
            })}
        </Select>
        <FormHelperText>Destinations</FormHelperText>
      </FormControl>
    );
  }

  handleChange = (event) => {
    const destinationNumericCode = event.target.value;
    this.setState({
      selectedItem: destinationNumericCode,
    });
    this.props.onDestinationClick(this.props.destinations.find(destination => destination.numericCode === destinationNumericCode));
  }
}