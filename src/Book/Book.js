import React from 'react'
import Author from './author'
import Published from './published'
import Toggle from './toggle'
import Purchase from './purchase'
import Reviews from './reviews'

const Book = () => (
  <div>
    <h1>A BOOK</h1>
    <Author />
    <Published />
    <Toggle />
    <Purchase />
    <Reviews />
  </div>
)

export default Book
