function captchaInit() {
    var $recaptcha = document.querySelector('#g-recaptcha-response');
    
    if ($recaptcha) {
        $recaptcha.setAttribute("required", "required");
        // console.log("captcha is required!");
    }
};