// document
//   .getElementById("textField")
//   .addEventListener("click", function (event) {
//     event.preventDefault()
//   })
function submitForm() {
  var elementValue = document.getElementById("textField").value
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  console.log("Test REsult==", re.test(String(elementValue).toLowerCase()))
}
