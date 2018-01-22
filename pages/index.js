import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <h1>
          Hello World!
        </h1>
        <p>Welcome to your new clean Gatsby site</p>
      <div><form name="contact-ai" netlify>
      <p>
      <label>Your Name: <input type="text" name="name"></label>
      </p>
      <p>
    <label>Your Email: <input type="email" name="email"></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form></div>

      </div>
    )
  }
}
