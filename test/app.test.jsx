import { render, screen } from '@testing-library/react'
import App from '../src/App';

test("Example 1 renders successfully", () => {
    render(<App/>);

    const element = screen.getByText(/BTPN Frontend Test/i);

    expect(element).toBeInTheDocument();
})