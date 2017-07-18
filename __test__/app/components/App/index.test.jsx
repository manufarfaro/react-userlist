import React from 'react';
import { shallow } from 'enzyme';
import App from '../../../../src/components/App';

describe('<App />', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />);
  });

  it('should be created', () => {
    expect(app).toBeTruthy();
  });
});
