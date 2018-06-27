import React from 'react'

// Book child components
import Author from './author'
import Published from './published'
import Price from './price'
import Toggle from './toggle'
import Purchase from './purchase'
import Reviews from './reviews'
import AddReview from './addReview'

const Book = () => (
  <div>
    <h1>A BOOK</h1>
    <Author />
    <Published />
    <Price />
    <Toggle />
    <Purchase />
    <Reviews />
    <AddReview />
  </div>
)

export default Book
