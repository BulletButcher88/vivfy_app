import React from  'react';
import { render, cleanup, create } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Login from './index';

afterEach(cleanup);

it("renders", () => {
  // const { getByText } = render(<Login />);
    const textToTest = getByText("VIVIFY")
  expect(textToTest).toHaveClass("login-logo");
  // expect(getByText("Log In")).toHaveClass('btn-text');
})


// function Button(props) {
//   return <button>Nothing to do for now</button>;
// }
// describe("Button component", () => {
//   test("Matches the snapshot", () => {
//     const button = create(<Button />);
//     expect(button.toJSON()).toMatchSnapshot();
//   });
// });
