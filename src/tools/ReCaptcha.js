// import {RECAPTCHA_SITE_KEY,} from './Secret';

// export function onloadCallback(){
// 	localStorage.setItem(
//                     'is-recaptcha-confirmed', true
//                 );
// }


// call this function always return a boolean
//  You can trust the user action when the function returns True statement
export function ValidateRecaptcha(){
	// getting reCaptcha token
	const response =  grecaptcha.getResponse()
	// if the token have been created
	//	that means the reCaptcha detects a Human action
	// otherwise the function return False.
	if (!response.length){
		return false
	}
	return true
}

// call this function when you need a reCaptcha widget in your form or anywhere else.
export  function GenerateRecaptcha (){
	//calling reCaptcha
	const script = document.createElement("script")

	// set reCaptcha  widget to the <ReCaptcha/> component.
	 script.src = `https://www.google.com/recaptcha/api.js`
	 document.body.appendChild(script)
}