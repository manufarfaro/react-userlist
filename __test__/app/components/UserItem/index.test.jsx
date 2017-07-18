import React from 'react';
import { shallow } from 'enzyme';
import UserItem from '../../../../src/components/UserItem/';


describe('<UserItem />', () => {
  let userItem;
  const user = {
    name: 'john doe',
    hobbies: 'swim, run, sleep',
  };

  beforeEach(() => {
    userItem = shallow(<UserItem user={user} />);
  });

  it('should be created', () => {
    expect(userItem).toBeTruthy();
  });

  it('should set a user prop', () => {
    expect(userItem.instance().props.user).toEqual(user);
  });
});
