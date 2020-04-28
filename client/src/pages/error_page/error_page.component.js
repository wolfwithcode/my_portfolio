import React from 'react';

import './error_page.styles.scss';

export default function ErrorPage() {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>Oops!</h1>
                    <h2>THERE IS AN ERROR WHILE SENDING YOUR MESSAGE. Please try again later. Thank you!</h2>
                </div>
                <a href="/#home">Go TO Homepage</a>
            </div>
        </div>
    )
}
