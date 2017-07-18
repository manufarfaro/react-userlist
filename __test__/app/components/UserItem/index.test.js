import React from 'react';
import { shallow } from 'enzyme';
import UserItem from '../../../../src/components/UserItem/';


describe('<UserItem />', () => {
    let userItem;
    const user = {
        name: 'john doe',
        hobbies: 'swim, run, sleep'
    };

    beforeEach(() => {
        userItem = shallow(<UserItem user={user} />);
    });

    it('should be created', () => {
        expect(userItem).toBeTruthy();
    });

    it('should contain a "name" input', () => {
        expect(userItem.find('input[name="name"]')).toBeTruthy();
    });

    it('should contain a "hobbies" input', () => {
        expect(userItem.find('input[name="hobbies"]')).toBeTruthy();
    });

    it('should built the layout from a "User" object passed as prop', () => {
        expect(userItem.find('div.item-container')
            .containsAllMatchingElements([
                <input name="name" />,
                <input name="hobbies" />
            ])
        ).toBe(true);
    });

    it('should display a user name into the user input', () => {
       const nameInput = userItem.find('input[name="name"]').props();
       expect(nameInput.defaultValue).toBe(user.name);
    });
});