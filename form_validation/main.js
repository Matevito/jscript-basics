const error_messages = (() => {
    const email_error = (error_span) => {

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
    
    //todo:add email_input event
    email_input.addEventListener("input", () => {
      //get span_element
      email_error = document.querySelector("#mail + span.error")
      if(email_input.validity.valid){
        console.log(email_error)
      }
      else{

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

    
    label.appendChild(span)
    label.appendChild(email_input)
    label.appendChild(span_error)
    email_container.appendChild(label)
    return email_container
  }
  return {
    get_email
  }
})();

function get_formElements(){
  let form_container = document.createElement("form");
  let email_element = form_elements.get_email()
  form_container.appendChild(email_element);
  //code goes here!

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