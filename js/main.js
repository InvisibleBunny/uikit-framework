function toggleForm(id) {
  var formContainer = document.getElementById(id);
  var allForms = document.getElementsByClassName("form-container");
  for (var i = 0; i < allForms.length; i++) {
    allForms[i].style.display = "none";
  }
  if (formContainer.style.display === "none" || formContainer.style.display === "") {
    formContainer.style.display = "block";
  } else {
    formContainer.style.display = "none";
  }
}

function clearOutput() {
  document.getElementById("output").style.display = "none";
  document.getElementById("output").innerHTML = "";
}

function toggleForm(formId) {
  const forms = document.getElementsByClassName("form-container");
  for (let i = 0; i < forms.length; i++) {
    forms[i].style.display = "none";
  }
  document.getElementById(formId).style.display = "block";
  clearOutput();
}
