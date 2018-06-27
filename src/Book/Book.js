import React from 'react'

// Book child components
import Author from './author'
import Published from './published'
import Price from './price'
import Toggle from './toggle'
import Purchase from './purchase'
import Reviews from './reviews'

const Book = () => (
  <div>
    <h1>A BOOK</h1>
    <Author />
    <Published />
    <Price />
    <Toggle />
    <Purchase />
    <Reviews />
  </div>
)

export default Book
