import React from 'react';
import PropTypes from 'prop-types';

const Host = ({host}) => {
  const {isProUser, imgUrl, firstName, description} = host;
  const proUserLabel = isProUser ? `property__avatar-wrapper--pro` : ``;

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={`property__avatar-wrapper user__avatar-wrapper ${proUserLabel}`}>
          <img className="property__avatar user__avatar" src={imgUrl} width="74" height="74" alt="Host avatar" />
        </div>
        <span className="property__user-name">
          {firstName}
        </span>
      </div>
      <div className="property__description">
        <p className="property__text">
          {description}
        </p>
      </div>
    </div>
  );
};

Host.propTypes = {
  host: PropTypes.shape({
    isProUser: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired
  }).isRequired
};

export default Host;
