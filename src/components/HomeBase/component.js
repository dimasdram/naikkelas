import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
export default class Component extends React.Component {
  render() {
    const { classes, children, service } = this.props;
    return (
      <div className={classes.root}>
        <Header service={service} />
        {children}
      </div>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  footer: PropTypes.array.isRequired,
  service: PropTypes.array.isRequired
};
