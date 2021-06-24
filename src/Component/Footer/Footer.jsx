import { Fragment } from "react";
import './footer.css'

export default function Footer() {

    return (
        <Fragment>
            <div data-testid="footer-wrapper" className="footerDiv">
                <div>
                    <h3 data-testid="footer-socialHandle">Social Handles</h3>
                    <a href="#fb"><p data-testid="socialHandle-link1">Facebook</p></a>
                    <a href="#ig"><p data-testid="socialHandle-link2">Instagram</p></a>
                    <a href="#li"><p data-testid="socialHandle-link3">Linkedin</p></a>
                    <a href="#yt"><p data-testid="socialHandle-link4">Youtube</p></a>
                    <a href="#tw"> <p data-testid="socialHandle-link5">Twitter</p></a>
                </div>
                <div>
                    <h3 data-testid="footer-branchLocation">Branch Locations</h3>
                    <a href="#ind"><p data-testid="branchLocation-link1">India</p></a>
                    <a href="#hk"> <p data-testid="branchLocation-link2">Hong Kong</p></a>
                    <a href="#usa"><p data-testid="branchLocation-link3">USA</p></a>
                    <a href="#jpn"><p data-testid="branchLocation-link4">Japan</p></a>
                </div>
                <div>
                    <h3 data-testid="footer-ourClient">Our Clients</h3>
                    <a href="#ua"> <p data-testid="ourClient-link1">Unacademy</p></a>
                    <a href="#ub"> <p data-testid="ourClient-link2">Uber</p></a>
                    <a href="#is"> <p data-testid="ourClient-link3">Internshala</p></a>
                    <a href="#vi"> <p data-testid="ourClient-link4">Vodafone</p></a>
                    <a href="#cso"> <p data-testid="ourClient-link5">Cisco</p></a>
                </div>
            </div>
        </Fragment>
    )
}

