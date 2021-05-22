const error_messages = (() => {
    const email_error = () => {
      //todo: display error message
      let email_error = document.getElementById("email_error")
      let email_input = document.getElementById("e_mail")
      if (email_input.validity.valueMissing){
        email_error.textContent = "Enter an e-mail address."
      } else if (email_input.validity.typeMismatch){
        email_error.textContent = "Enter a valid e-mail address."
      } 
      email_error.className = "error active"
    }
    return {
      email_error
    }
})();

const form_elements = (() =>{
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

  };
  const get_country = () => {
    let country_container = document.createElement("p")
    let label = document.createElement("label");
    label.setAttribute("for", "country")

    let span =  document.createElement("span");
    span.textContent = "Enter a country:";
    //check a list of countries
    //let country_input = get_countryInput();

    let span_error = document.createElement("span");
    span_error.setAttribute("class", "error");
    span_error.setAttribute("id", "country_error");

    label.appendChild(span)
    //label.appendChild(country_input)
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