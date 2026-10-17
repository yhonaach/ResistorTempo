// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ResistorTempo title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ResistorTempo/i);
    expect(titleElement).toBeInTheDocument();
});
