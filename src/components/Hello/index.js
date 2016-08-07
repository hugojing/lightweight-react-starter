import React, { Component } from 'react'
import style from './style.css'

export default class Hello extends Component {
	constructor(props) {
      super(props)
      this.state = {
          data: []
      }
  }
	render() {
		return (
			<div className = { style.content }>
				<br />
				<h1>Lightweight-React-Starter</h1>
				<br />
			</div>
		)
	}
}
