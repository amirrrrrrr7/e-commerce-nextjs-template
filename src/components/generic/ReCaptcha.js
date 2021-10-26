// reCaptcha div component

import { RECAPTCHA_SITE_KEY } from 'tools/Secret'

export default function ReCaptcha() {

	return (
		<div className="recaptcha-wrapper">
			<div className="g-recaptcha" data-sitekey={ RECAPTCHA_SITE_KEY }></div>
			<div className="rc-anchor-checkbox-label">I'm not a Robot.</div>
			<div className="recaptcha-info"></div>
			<div className="rc-anchor-logo-text">reCAPTCHA</div>
			<div className="rc-anchor-pt">
				<a href="https://www.google.com/intl/en/policies/privacy/" target="_blank" rel="noreferrer">
					Privacy
				</a>
				<span aria-hidden="true" role="presentation">
					-
				</span>
				<a href="https://www.google.com/intl/en/policies/terms/" target="_blank" rel="noreferrer">
					Terms
				</a>
			</div>
		</div>
	)
}
