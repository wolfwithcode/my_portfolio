import React from 'react';

import './thankyou_page.styles.scss';

export default function ThankyouPage() {
    return (
        <div className="jumbotron text-center">
            <h1 className="display-3">Thank You!</h1>
            <p className="lead">Your message has been sent. I will get back to you shortly.</p>
            <hr />
            <p className="lead">
                <a className="btn btn-primary btn-sm" href="/#home" role="button">Continue to homepage</a>
            </p>
        </div>
    )
}
