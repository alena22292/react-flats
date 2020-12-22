import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectFlat } from '../actions';

class Flat extends Component {
  handleClick = () => {
  // REDUX action
    this.props.selectFlat(this.props.flat);
  }

  render() {
    const styles = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${this.props.flat.imageUrl}')`
    };
    let classes = "card";
    if (this.props.flat === this.props.selectedFlat) {
      classes += " active";
    }

    return (
        <div className={classes} style={styles} onClick={this.handleClick}>
          <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
          <div className="card-description">
            <h2>{this.props.flat.name} </h2>
          </div>
          <a className="card-link" href="#">Read more</a>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectFlat: selectFlat },
    dispatch
  );
}
function mapStateToProps(state) {
  return {
    selectedFlat: state.selectedFlat
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Flat);
