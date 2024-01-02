// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribed = () => {
    this.setState(() => ({isSubscribed: true}))
  }

  onUnSubscribed = () => {
    this.setState(() => ({isSubscribed: false}))
  }

  render() {
    const {isSubscribed} = this.state
    let authButton
    if (isSubscribed) {
      authButton = (
        <button onClick={this.onUnSubscribed} className="button" type="button">
          Subscribed
        </button>
      )
    } else {
      authButton = (
        <button onClick={this.onSubscribed} className="button" type="button">
          Subscribe
        </button>
      )
    }
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        {authButton}
      </div>
    )
  }
}

export default Welcome
