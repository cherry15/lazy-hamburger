import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import App from './App'
import { renderWithRouter } from './test/test-utils'
import Header from './components/header/header'

describe('App navigation', () => {

  beforeEach(() => {
    renderWithRouter(
      <>
        <App />
        <Header />
      </>
    )
  })

  it('should default to the home page', async () => {
    await screen.findByRole('heading', { name: /home/i })
  })

  it('clicking on the about link should go to the about page', async () => {
    fireEvent.click(screen.getByText(/about/i))
    await screen.findByRole('heading', { name: /about/i })
  })

  it('clicking on the cats link should go to the cats page', async () => {
    fireEvent.click(screen.getByText(/cats/i))
    await screen.findByRole('heading', { name: /cats/i })
  })

  it('clicking on the dogs link should go to the dogs page', async () => {
    fireEvent.click(screen.getByText(/dogs/i))
    await screen.findByRole('heading', { name: /dogs/i })
  })

  it('clicking on the contact link should go to the contact page', async () => {
    fireEvent.click(screen.getByText(/contact/i))
    await screen.findByRole('heading', { name: /contact/i })
  })

  it('clicking on the home link should go to the home page', async () => {
    fireEvent.click(screen.getByText(/home/i))
    await screen.findByRole('heading', { name: /home/i })
  })
})

