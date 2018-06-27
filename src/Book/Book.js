import React from 'react'
import Author from './author'
import Toggle from './toggle'
import Purchase from './purchase'
import Reviews from './reviews'

const Book = () => (
  <div>
    <h1>A BOOK</h1>
    <Author />
    <Toggle />
    <Purchase />
    <Reviews />
  </div>
)

export default Book
