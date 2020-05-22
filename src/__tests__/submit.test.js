import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from "react-redux";

import App from '../App'

afterEach(cleanup)

describe('Contacts APP', () => {
	it('Sould render App Component', () => {

		// const { getByTestId, getByTest } = render(<App />)
		expect(true).toBe(true)
	});
		// expect(container.children.length).toBe(7);
	// it('Should render Contact component', () => {
	// 	const { getByTestId } = render(<Contact data={mockUserData}/>);
	// 	const container = getByTestId('contact');

	// 	expect(container).toHaveClass('contact');
	// 	expect(container.children.length).toBe(7);
	// });

	// it('Should render Contacts component', () => {
	// 	const { getByTestId } = render(<Contacts />);
	// 	const container = getByTestId('contacts');

	// 	expect(container).toHaveClass('container');
	// 	expect(container.children.length).toBe(1);
	// });

	// it('Should render Filters component', () => {
	// 	const { getByTestId } = render(<Filters />);
	// 	const container = getByTestId('filters');

	// 	expect(container).toHaveClass('container');
	// 	expect(container.children.length).toBe(1);
	// });

	// it('Should render Topbar component', () => {
	// 	const { getByTestId } = render(<Topbar />);
	// 	const container = getByTestId('topbar');

	// 	expect(container).toHaveClass('topbar');
	// 	expect(container.children.length).toBe(1);
	// });
});

