import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    hobbies: PropTypes.string.isRequired,
  }).isRequired,
};

const defaultProps = {
  user: { name: '', hobbies: '' },
};

function UserItem(props) {
  return (
    <div className="item-container">
      <input type="text" name="name" defaultValue={props.user.name} />
      <input type="text" name="hobbies" />
    </div>
  );
}

UserItem.propTypes = propTypes;

UserItem.defaultProps = defaultProps;

export default UserItem;
