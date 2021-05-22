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

    }
    return {
      email_error,
      country_error
    }
})();

const form_elements = (() =>{
  //todo:organize functions
  const get_emailInput = () => {
    let email_input = document.createElement("input");
    email_input.setAttribute("type", "email")
    email_input.setAttribute("id", "e_mail")
    email_input.setAttribute("required", "") 
  
    email_input.addEventListener("input", () => {
      //get span_element
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
    span.textContent = "Please enter a valid email adrress:";
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
  const get_countryInput = () => {
    let country_input = document.createElement("input");
    //check a list of countries
    country_input.setAttribute("id", "country");
    country_input.setAttribute("required", "");

    country_input.addEventListener("input", () => {
      //let country_error = ;
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
  const get_zipCode = () => {

  };
  const get_password = () => {
    //make two elements
  }
  return {
    get_email,
    get_country,
    get_zipCode,
    get_password,
  }
})();

function get_formElements(){
  let form_container = document.createElement("form");
  let email_element = form_elements.get_email()
  form_container.appendChild(email_element);
  //code goes here!

  let country_element = form_elements.get_country();
  form_container.appendChild(country_element)


  //todo: add zip code and password
  //
  let submit_btn = document.createElement("button");
  submit_btn.textContent = "Submit";
  form_container.appendChild(submit_btn)

  return form_container
};

function build_form(){
  let page_container = document.getElementById("page_container");
  let new_form = get_formElements();
  page_container.appendChild(new_form)
};

build_form();