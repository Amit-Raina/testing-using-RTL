import { Fragment, useState } from "react";
import './header.css'

export default function Header() {

    const [currentPage, setCurrentPage] = useState('Home Page')
    return (
        <Fragment>
            <div data-testid="header-wrapper" className="headerDiv">
                <h3 data-testid="header-home" onClick={() => setCurrentPage('Home Page')}>Home</h3>
                <h3 data-testid="header-client" onClick={() => setCurrentPage('Client Page')}>Clients</h3>
                <h3 data-testid="header-branch" onClick={() =>setCurrentPage('Branch Page')}>Branches</h3>
                <h3 data-testid="header-aboutUs" onClick={() => setCurrentPage('About Us Page')}>About us</h3>
            </div>
            <h1>{currentPage}</h1>
        </Fragment>
    )
}