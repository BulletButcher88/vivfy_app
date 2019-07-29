import React from  'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import MetalList from './index';

afterEach(cleanup);

test("renders", () => {
  const { getByText } =render(<MetalList />);
  // expect(getByText("Save")).toHaveClass("checkbox-list");
})