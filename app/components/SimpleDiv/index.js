/**
*
* SimpleDiv
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function SimpleDiv({ option }) {
  return (
    <div>
      <FormattedMessage {...messages.header} />
      {option && <span>there are options</span>}
    </div>
  );
}

SimpleDiv.propTypes = {
  option: PropTypes.bool,
};

export default SimpleDiv;
