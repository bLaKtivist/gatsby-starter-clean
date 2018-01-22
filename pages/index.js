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
      </div>
      <form class="site-form" name="contact" autocomplete="off" method="post"><input type="hidden" name="form-name" value="contact"><fieldset class="fieldset"><input class="text-input" name="firstname" placeholder=" "><label class="field-label">First Name</label></fieldset><fieldset class="fieldset"><input class="text-input" name="lastname" placeholder=" "><label class="field-label">Last Name</label></fieldset><fieldset class="fieldset"><input class="text-input" type="email" name="email" required="" placeholder=" "><label class="field-label">Email</label></fieldset><fieldset class="fieldset"><textarea class="text-input input-textarea" row="6" name="inquiry" placeholder=" "></textarea><label class="field-label">Write inquiry here</label></fieldset><button class="form-submit button" type="submit">Submit</button></form>
    )
  }
}
