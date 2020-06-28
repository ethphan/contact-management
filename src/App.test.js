import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("Expects addContactButton to be in App component", () => {
  const { queryByTestId } = render(<App />);
  const addContactButton = queryByTestId("add-contact-button");
  expect(addContactButton).toBeInTheDocument();
});

test("Expects Drawer component not to be in App component", () => {
  const { queryByTestId } = render(<App />);
  const Drawer = queryByTestId("add-contact-drawer");
  expect(Drawer).not.toBeInTheDocument();
});

test("Expects Drawer component not to be in App component", () => {
    const { queryByTestId } = render(<App />);
    const addContactButton = queryByTestId("add-contact-button");
    fireEvent.click(addContactButton);

    const Drawer = queryByTestId("add-contact-drawer");
    expect(Drawer).toBeInTheDocument();
  });
