import React from  'react';
import { render, cleanup, create } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { capitalise, capitaliseMultiple } from './capitalise';

afterEach(cleanup);

describe("capitalise", () => {
  it("should capitalise text", () => {
    const capitalised = capitalise('text-test')
    console.log(capitalised)
    expect(capitalised).toBe('Text-test')
  })
})