import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { Store } from '../redux/store';
	
import Header from '../components/organism/Header/Header'
import Products from '../components/organism/Products/Products'
import Product from '../components/molecule/Product/Product'
import SingleProduct from '../components/organism/SingleProduct/SingleProduct'

describe('Should Render Header Components', () => {
	const { getByTestId } = render(<Provider store={Store}><Header /></Provider>);
	const container = getByTestId('header')
	const btnSerch = getByTestId('btnSearch')
	const btnCart = getByTestId('btnCart')

	it('Should render Header', () => {

		expect(container).toHaveClass('header')
		expect(container.children.length).toBe(1)
	})
	it('Should render Buttons', () => {

		expect(btnSerch).toHaveClass('header__icons--search')
		expect(btnCart).toHaveClass('header__icons--cart')
	})
})


describe('Shold Render Products Components', () => {

	const mockProduct = {
		name: "",
		actual_price: "",
		discount_percentage: "",
		image: "",
		installments: "",
		on_sale: false,
		regular_price: "",
		sizes: [],
	}

	it('Should render Products', () => {
		const { getByTestId } = render(<Provider store={Store}><Products /></Provider>)
		const container = getByTestId('products')
		expect(container).toHaveClass('products')
	})

	it('Should render Product', () => {
		const { getByTestId } = render(<Provider store={Store}><BrowserRouter><Product product={mockProduct}/></BrowserRouter></Provider>)
		const container = getByTestId('products__box')
		expect(container).toHaveClass('products__box')
	})
	
	it('Should render SingleProduct', () => {
		const { getByTestId } = render(<Provider store={Store}><SingleProduct /></Provider>)
		const container = getByTestId('single-product')
		expect(container).toHaveClass('single-product')

	})

})
