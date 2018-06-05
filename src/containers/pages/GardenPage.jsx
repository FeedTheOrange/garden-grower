
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const GardenPage = props => (
  <div>
    {props.plants.map(garden => <div key={garden.id}>{ garden.name }</div>)}
  </div>
);

const mapStateToProps = state => ({
  plants: state.plants,
});
export default connect(mapStateToProps)(GardenPage);

GardenPage.propTypes = {
  plants: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.int,
    name: PropTypes.string,
    daysTillHarvest: PropTypes.int,
  })),
};

GardenPage.defaultProps = {
  plants: [],
};
