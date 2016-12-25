import React from 'react'
import Router from './Router'
import createMemoryHistory from 'history/createMemoryHistory'
import { objectWithoutProperties } from './Util'

export default class BrowserRouter extends React.Component {

  constructor(...args) {
    super(...args)
    this.history = this.createHistory()
  }

  createHistory = ()=> {
    const { initialEntries, initialIndex, getUserConfirmation }  = this.props
    return createMemoryHistory({ initialEntries, initialIndex, getUserConfirmation })
  }

  render() {
    const props  = objectWithoutProperties(this.props,
      [ 'initialEntries', 'initialIndex', 'getUserConfirmation' ])
    return <Router history={ this.history } { ...props } />
  }
}
