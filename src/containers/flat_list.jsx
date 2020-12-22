import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFlats } from '../actions';

import Flat from './flat';

class FlatList extends Component {
  componentDidMount() {
    // TODO: dispatch an action to load flats!
    this.props.setFlats();
  }


  render() {
    const list = this.props.flats.map(flat => <Flat flat={flat} key={flat.name} />);
    return (
      <div className="flat-list col-sm-7">
        {list}
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats: setFlats },
    dispatch
  );
}
function mapStateToProps(state) {
  return {
    flats: state.flats
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
