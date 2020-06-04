import React from 'react'
import { useDispatch } from 'react-redux';
import { windowStateReducer } from '../../../redux/actions'
import Button from '../../atom/button/Button'

const HeaderDrower = ({ children }) => {

    const dispatch = useDispatch()
    const handleClick = event => {
        event.preventDefault()
        dispatch(windowStateReducer(false))
    }

        return(
            <header className="header">
                <div className="app__container">
                    <div className="header__context">
                        <div className="header__icons">
                            <Button className="header__icons--back" handleClick={event => handleClick(event)}>
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="19" y1="12" x2="5" y2="12"></line>
                                    <polyline points="12 19 5 12 12 5"></polyline>
                                </svg>
                                <canvas height="0" width="0" styles="border-radius: inherit; height: 100%; left: 0px; position: absolute; top: 0px; width: 100%;"></canvas>
                            </Button>
                        </div>
                        {children}
                    </div>
                </div>
            </header>
        )
}


export default HeaderDrower