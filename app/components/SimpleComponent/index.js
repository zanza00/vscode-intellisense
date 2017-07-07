/**
*
* SimpleComponent
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class SimpleComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        {this.props.one && <FormattedMessage {...messages.header} />}
      </div>
    );
  }
}

SimpleComponent.propTypes = {
  one: PropTypes.bool,
};

export default SimpleComponent;
