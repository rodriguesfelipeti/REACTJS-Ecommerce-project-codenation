import React from 'react'
import { connect } from 'react-redux';
import { windowStateReducer } from '../../../redux/actions'
import { bindActionCreators } from 'redux';
import logo from  '../../../assets/logo.png'
import './Header.css'
import './Counter.css'

/** Components */
import Button from '../../atom/button/Button'

class Header extends React.Component {

    handeClick = (event, window) => {
        event.preventDefault()
        this.props.windowStateReducer(window)
    }

    render() {
        return(
            <header className="header">
                <div className="app__container">
                    <div className="header__default">
                        <a  href="/">
                            <figure>
                                <img className="header__img" src={logo} alt="" />   
                            </figure>
                        </a>
                        <div className="header__iconsApp">
                            <Button className="header__icons--search" handleClick={ event => this.handeClick(event, 'search')}>
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                                <canvas className="header__canvas" height="0" width="0"></canvas>
                            </Button>
                           <Button className="header__icons--cart" handleClick={ event => this.handeClick(event, 'cart')}>
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                                </svg>
                                <sup className="counter">
                                    <span className="counter__value">{this.props.cart.length}</span>
                                </sup>
                                <canvas className="header__canvas" height="0" width="0"></canvas>
                           </Button>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

const mapStateToProps = store => ({ supportWindow: store.windowStateReducer.supportWindow, cart: store.cartReducer.cart })
const mapDispatchToProps = dispatch => bindActionCreators({ windowStateReducer }, dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(Header)