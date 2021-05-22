let country_names = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe", "Palestine"]
let countryNames_cap = []
for (country of country_names) {
  countryNames_cap.push(country.toUpperCase())
}
country_names = countryNames_cap;

////

const error_messages = (() => {
    const email_error = () => {
      let email_error = document.getElementById("email_error")
      let email_input = document.getElementById("e_mail")
      if (email_input.validity.valueMissing){
        email_error.textContent = "Enter an e-mail address."
      } else if (email_input.validity.typeMismatch){
        email_error.textContent = "Enter a valid e-mail address."
      } 
      email_error.className = "error active"
    };
    const country_error = () => {
      let country_error = document.getElementById("country_error");
      country_error.textContent = "Enter an existent country name"
      country_error.className = "error active"
    }
    const zip_error = () => {
      let zip_error = document.getElementById("zip_error");
      let zip_input  = document.getElementById("zip");
      //correct this
      if (zip_input.validity.patternMismatch){
        zip_error.textContent = "Enter a valid zip code(use only numbers)."
        return
      }else if (zip_input.validity.tooShort){
        zip_error.textContent = "A zip code has 6 digits."
      }
      zip_error.className = "error active"
    }
    const passwords_error = (error, error_element) => {
      //call module_password validity
      if (error === "1"){
        error_element.textContent = "A valid password has at least 8 characters, a word in both upper and lower case and a number."
      }else{
        error_element.textContent = "The passwords don't match"
      }
      error_element.className = "error active"
    }
    return {
      email_error,
      country_error,
      zip_error,
      passwords_error,
    }
})();

const form_elements = (() =>{
  //EMAIL LOGIC
  const get_emailInput = () => {
    let email_input = document.createElement("input");
    email_input.setAttribute("id", "e_mail")
    email_input.setAttribute("required", "") 
    email_input.setAttribute("type", "email")
  
    email_input.addEventListener("input", () => {
      let email_error = document.getElementById("email_error")
      if(email_input.validity.valid){
        email_error.textContent = "";
        email_error.className = "error";
      }
      else{
        error_messages.email_error();
      }
    });

    return email_input
  }
  const get_email = () => {
    let email_container = document.createElement("p")
    let label = document.createElement("label");
    label.setAttribute("for", "e_mail")

    let span = document.createElement("span");
    span.textContent = "Enter a valid email address:";
    let email_input = get_emailInput()

    let span_error = document.createElement("span")
    span_error.setAttribute("class", "error")
    span_error.setAttribute("id", "email_error")

    
    label.appendChild(span)
    label.appendChild(email_input)
    label.appendChild(span_error)
    email_container.appendChild(label)
    return email_container
  }
  //COUNTRY INPUT
  const get_countryInput = () => {
    let country_input = document.createElement("input");
    country_input.setAttribute("id", "country");
    country_input.setAttribute("required", "");

    country_input.addEventListener("input", () => {
      let input = country_input.value.toUpperCase();
      let country_error = document.getElementById("country_error")
      if (country_names.includes(input)){
        country_error.textContent = "";
        country_error.className = "error"
      }
      else{
        error_messages.country_error()
      }
    })

    return country_input
  };
  const get_country = () => {
    let country_container = document.createElement("p")
    let label = document.createElement("label");
    label.setAttribute("for", "country")

    let span =  document.createElement("span");
    span.textContent = "Enter a country:";
    let country_input = get_countryInput();

    let span_error = document.createElement("span");
    span_error.setAttribute("class", "error");
    span_error.setAttribute("id", "country_error");

    label.appendChild(span)
    label.appendChild(country_input)
    label.appendChild(span_error)
    country_container.appendChild(label)

    return country_container
  }
  //ZIPCODE INPUT
  const get_zipInput = () => {
    let zip_input = document.createElement("input");
    zip_input.setAttribute("id", "zip");
    zip_input.setAttribute("type", "text");
    zip_input.setAttribute("required", "");
    zip_input.setAttribute("minlength", "5");
    zip_input.setAttribute("maxlength", "5");
    zip_input.setAttribute("pattern", "^[0-9]*$")
    
    //event
    zip_input.addEventListener("input", () => {
      let zip_error = document.getElementById("zip_error")
      if (zip_input.validity.valid){
        zip_error.textContent = "";
        zip_error.className = "error";
      }
      else{
        error_messages.zip_error()
      }
    })

    return zip_input
  }
  const get_zipCode = () => {
    let zip_container = document.createElement("p");

    let label = document.createElement("label");
    label.setAttribute("for", "zip");
    let span =  document.createElement("span");
    span.textContent = "Enter a zip code:";

    let zip_input = get_zipInput();
    let span_error = document.createElement("span");
    span_error.setAttribute("class", "error");
    span_error.setAttribute("id", "zip_error");

    label.appendChild(span)
    label.appendChild(zip_input)
    label.appendChild(span_error)
    zip_container.appendChild(label)

    return zip_container
  };
  const password_validity = (password) => {
    let regex_expression = new RegExp("(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,15})$")
    return regex_expression.test(password)
  }
  //PASSWORD CODE
  const get_passwordinput = (id) => {
    let password_input = document.createElement("input");
    password_input.setAttribute("id", id);
    password_input.setAttribute("required", "");
    password_input.setAttribute("maxlength", "15")
    //type:password
    password_input.setAttribute("type", "password");

    password_input.addEventListener("input", () => {
      let error_1 = document.getElementById("pass1_error");
      let error_2 = document.getElementById("pass2_error");
      let input_1 = document.getElementById("password_1");
      let input_2 = document.getElementById("password_2");
      if (password_validity(input_1.value)) {
        error_1.textContent = "";
        error_1.className = "error";
      }else{
        error_messages.passwords_error("1", error_1)
      }
      if (input_1.value === input_2.value) {
        error_2.textContent = "";
        error_2.className = "error";
      }else{
        error_messages.passwords_error("2", error_2)
      }
    })
    return password_input
  };
  const get_passwords = () => {
    let passwords_container = document.createElement("div");
    let password_1 = document.createElement("p");
    let password_2 = document.createElement("p");

    //1.pasword 1
    let label_1 = document.createElement("label");
    let span_1 = document.createElement("span");
    span_1.textContent = "Password:"
    let password1_input = get_passwordinput("password_1");
    let span1_error = document.createElement("span");
    span1_error.setAttribute("class", "error");
    span1_error.setAttribute("id", "pass1_error");

    label_1.appendChild(span_1);
    label_1.appendChild(password1_input)
    label_1.appendChild(span1_error)


    //2.password 2
    let label_2 = document.createElement("label");
    let span_2 = document.createElement("span");
    span_2.textContent = "Repeat the password:"
    let password2_input = get_passwordinput("password_2");
    let span2_error = document.createElement("span");
    span2_error.setAttribute("class", "error");
    span2_error.setAttribute("id", "pass2_error");

    label_2.appendChild(span_2);
    label_2.appendChild(password2_input)
    label_2.appendChild(span2_error)



    //3.apends elements
    password_1.appendChild(label_1)
    password_2.appendChild(label_2)
    passwords_container.appendChild(password_1);
    passwords_container.appendChild(password_2);
    return passwords_container
  }
  return {
    get_email,
    get_country,
    get_zipCode,
    get_passwords,
  }
})();

function get_formElements(){
  let form_container = document.createElement("form");
  let email_element = form_elements.get_email()
  let country_element = form_elements.get_country();
  let zip_element = form_elements.get_zipCode();
  let passowrds_element = form_elements.get_passwords();

  form_container.appendChild(email_element);
  form_container.appendChild(country_element)
  form_container.appendChild(zip_element)
  form_container.appendChild(passowrds_element)
  
  let submit_btn = document.createElement("button");
  submit_btn.textContent = "Submit";
  form_container.appendChild(submit_btn)

  return form_container
};

function build_form(){
  let page_container = document.getElementById("page_container");
  let new_form = get_formElements();
  new_form.addEventListener("submit", event => {
    let errors = document.querySelectorAll("span.error")
    errors.forEach(function(span_error) {
      //this happens only if the forms is invalid
      if(span_error.textContent != ""){
        event.preventDefault()
      }
    })
  }) 
  page_container.appendChild(new_form)
};

build_form();