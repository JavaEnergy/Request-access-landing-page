const email = document.getElementById("email");
const error = document.getElementById("warning");

const buttonsubmit = document.getElementById("submit-email");

let mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function testMail(parametri) {
  if (mailRegex.test(parametri.value)) {
    console.log("this is true");
    error.style.visibility = "hidden";
  } else if (!mailRegex.test(parametri.value)) {
    error.style.visibility = "visible";
  }
}

buttonsubmit.addEventListener("click", (event) => {
  event.preventDefault();
  testMail(email);
  console.log("clicked");
});
