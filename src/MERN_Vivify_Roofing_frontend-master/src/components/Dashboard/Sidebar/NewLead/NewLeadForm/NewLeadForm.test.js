import React from  'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import NewLeadForm from './index';

afterEach(cleanup);

test("renders", () => {

  const { getByText } =render(<NewLeadForm />);
  expect(getByText("Name:")).toHaveClass("comments");
  expect(getByText("Desired Roof Material:")).toHaveClass("comments");
})


// describe("Dashboard/Sidebar/NewLead/NewLeadForm", () => {
//   test("button testing", () => {
    
//     const mockOnClick = jest.fn();
//     const { container, fireEvent } = render(
//       <button onClick={mockOnClick}>
//       Save 
//       </button>
//     )
//     fireEvent.click(getByText(container, getByText('Save')));
//     // fireEvent.click(getByText('Save'),mockOnClick);
//     expect(mockOnClick).toHaveBeenCalledTimes(1);

//   })

// })

