import React from 'react';
import App from '../../../../src/components/App/index';
import { shallow } from 'enzyme';

describe('<App />', () => {

    let app;

    beforeEach(() => {
        app = shallow(<App />);
    });

    it('should be created', () => {
        expect(app).toBeTruthy();
    });
});
