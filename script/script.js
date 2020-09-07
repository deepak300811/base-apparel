// document
//   .getElementById("textField")
//   .addEventListener("click", function (event) {
//     event.preventDefault()
//   })
function submitForm() {
  var elementValue = document.getElementById("textField").value
  var emailID = document.getElementById("email-ID")
  var errorID = document.getElementById("error-ID")
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  console.log("Test REsult==", re.test(String(elementValue).toLowerCase()))
  if (!re.test(String(elementValue).toLowerCase())) {
    emailID.classList.add("error")
    errorID.classList.add("error")
  } else {
    emailID.classList.remove("error")
    errorID.classList.remove("error")
    // document.getElementById("err-msg").innerHTML = "Success!"
  }
}
