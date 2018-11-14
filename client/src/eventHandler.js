const submit = (e) => {
  console.log('Hello World')
  let inputValue = e.target.input.value
}

const form = document.getElementById("input-form");

form.addEventListener("submit", submit);

