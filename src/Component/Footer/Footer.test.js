import React from 'react';
import Footer from './Footer';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
    let component = render(<Footer />);
    getByTestId = component.getByTestId;
})

afterEach(() => {
    cleanup();
})

test("Main footer wrapper is rendering", () => {
    const footerWrapper = getByTestId("footer-wrapper");

    expect(footerWrapper).toBeTruthy();
})

test("Social Handles are rendering", () => {
    const socialHandle = getByTestId("footer-socialHandle");

    expect(socialHandle).toBeInTheDocument;

    const facebook = getByTestId("socialHandle-link1");
    expect(facebook).toBeTruthy();
    expect(facebook.textContent).toBe("Facebook");

    const instagram = getByTestId("socialHandle-link2");
    expect(instagram).toBeTruthy();
    expect(instagram.textContent).toBe("Instagram");

    const linkedIn = getByTestId("socialHandle-link3");
    expect(linkedIn).toBeTruthy();
    expect(linkedIn.textContent).toBe("Linkedin");

    const youtube = getByTestId("socialHandle-link4");
    expect(youtube).toBeTruthy();
    expect(youtube.textContent).toBe("Youtube");

    const twitter= getByTestId("socialHandle-link5");
    expect(twitter).toBeTruthy();
    expect(twitter.textContent).toBe("Twitter");
})

test("Branch Locations are rendering", () => {
    const branchLocation = getByTestId("footer-branchLocation");

    expect(branchLocation).toBeInTheDocument;

    const IND = getByTestId("branchLocation-link1");
    expect(IND).toBeTruthy();
    expect(IND.textContent).toBe("India");

    const HNK = getByTestId("branchLocation-link2");
    expect(HNK).toBeTruthy();
    expect(HNK.textContent).toBe("Hong Kong");

    const USA = getByTestId("branchLocation-link3");
    expect(USA).toBeTruthy();
    expect(USA.textContent).toBe("USA");

    const JPN = getByTestId("branchLocation-link4");
    expect(JPN).toBeTruthy();
    expect(JPN.textContent).toBe("Japan");
})

test("Our CLients are rendering", () => {
    const ourClient = getByTestId("footer-ourClient");

    expect(ourClient).toBeInTheDocument;

    const unacademy = getByTestId("ourClient-link1");
    expect(unacademy).toBeTruthy();
    expect(unacademy.textContent).toBe("Unacademy");

    const uber = getByTestId("ourClient-link2");
    expect(uber).toBeTruthy();
    expect(uber.textContent).toBe("Uber");

    const intershala = getByTestId("ourClient-link3");
    expect(intershala).toBeTruthy();
    expect(intershala.textContent).toBe("Internshala");

    const vodafone = getByTestId("ourClient-link4");
    expect(vodafone).toBeTruthy();
    expect(vodafone.textContent).toBe("Vodafone");

    const cisco = getByTestId("ourClient-link5");
    expect(cisco).toBeTruthy();
    expect(cisco.textContent).toBe("Cisco");
})