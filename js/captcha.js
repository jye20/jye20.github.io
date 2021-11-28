// on init, find the captcha and set it to be required if it exists.
function captchaInit() {
    var $recaptcha = document.querySelector('#g-recaptcha-response');
    
    if ($recaptcha) {
        $recaptcha.setAttribute("required", "required");
        // console.log("captcha is required!");
    }
};