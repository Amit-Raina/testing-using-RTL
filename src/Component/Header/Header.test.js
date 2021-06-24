import React from 'react';
import Header from './Header';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
    let component = render(<Header />);
    getByTestId = component.getByTestId;
})

afterEach(() => {
    cleanup();
})

test("Main header wrapper is rendering", () => {
    const headerWrapper = getByTestId("header-wrapper");

    expect(headerWrapper).toBeTruthy();
})

test("Home tab is rendering", () => {
    const home = getByTestId("header-home");

    expect(home).toBeTruthy();
})

test("Home tab has value Home", () => {
    const home = getByTestId("header-home");

    expect(home.textContent).toBe("Home");
})

test("Client tab is rendering", () => {
    const client = getByTestId("header-client");

    expect(client).toBeTruthy();
})

test("Client tab has value Clients", () => {
    const client = getByTestId("header-client");

    expect(client.textContent).toBe("Clients");
})

test("Branch tab is rendering", () => {
    const branch = getByTestId("header-branch");

    expect(branch).toBeTruthy();
})

test("Branch tab has value Branches", () => {
    const branch = getByTestId("header-branch");

    expect(branch.textContent).toBe("Branches");
})

test("AboutUs tab is rendering", () => {
    const aboutUs = getByTestId("header-aboutUs");

    expect(aboutUs).toBeTruthy();
})

test("AboutUs tab has value About us", () => {
    const aboutUs = getByTestId("header-aboutUs");

    expect(aboutUs.textContent).toBe("About us");
})

test("Checking Header functionality", () => {
    const home = getByTestId("header-home");
    fireEvent.click(home);
    expect(screen.getByText(/Home Page/i)).toBeInTheDocument();

    const client = getByTestId("header-client");
    fireEvent.click(client);
    expect(screen.getByText(/Client Page/i)).toBeInTheDocument();

    const branch = getByTestId("header-branch");
    fireEvent.click(branch);
    expect(screen.getByText(/Branch Page/i)).toBeInTheDocument();

    const aboutUs = getByTestId("header-aboutUs");
    fireEvent.click(aboutUs);
    expect(screen.getByText(/About Us Page/i)).toBeInTheDocument();
})