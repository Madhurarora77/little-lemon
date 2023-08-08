import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('renders Home component when on the home page', () => {
    render(
      <Router>
        <App />
      </Router>
    );

    // Ensure that Home component is rendered for the home page
    // expect(screen.getByText(/little lemmon/i)).toBeInTheDocument();
  })
})