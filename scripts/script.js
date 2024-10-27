// * Seleção dos elementos a serem utilizados * //
const form = document.querySelector(".main__form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const formIconError = document.querySelectorAll(".input-icon--hidden");
const formMessageError = document.querySelectorAll(".span-hidden");
// * Regex para validação de email * //
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// * Função para mostrar o ícone e a mensagem de erro * //

const setError = (index) => {
  formIconError[index].classList.remove("input-icon--hidden");
  formIconError[index].classList.add("input-icon--visible");
  formMessageError[index].classList.remove("span-hidden");
  formMessageError[index].classList.add("span-visible");
};

// * Função para limpar o ícone e a mensagem de erro * //

const clearError = (index) => {
  formIconError[index].classList.remove("input-icon--visible");
  formIconError[index].classList.add("input-icon--hidden");
  formMessageError[index].classList.remove("span-visible");
  formMessageError[index].classList.add("span-hidden");
};

// * Função para checar se o input firstName está preenchido * //

const checkInputFirstName = () => {
  const firstNameValue = firstName.value;

  if (firstNameValue === "") {
    setError(0);
    return false;
  } else {
    clearError(0);
    return true;
  }
};

// * Função para checar se o input lasttName está preenchido * //

const checkInputLastName = () => {
  const lastNameValue = lastName.value;

  if (lastNameValue === "") {
    setError(1);
    return false;
  } else {
    clearError(1);
    return true;
  }
};

// * Função para checar se o input email está preenchido * //

const checkInputEmail = () => {
  const emailValue = email.value;

  if (emailValue === "" || !emailRegex.test(emailValue)) {
    setError(2);
    return false;
  } else {
    clearError(2);
    return true;
  }
};

// * Função para checar se o input password está preenchido * //

const checkInputPassword = () => {
  const passwordValue = password.value;

  if (passwordValue === "") {
    setError(3);
    return false;
  } else {
    clearError(3);
    return true;
  }
};

const checkForm = () => {
  const isFirstNameValid = checkInputFirstName();
  const isLastNameValid = checkInputLastName();
  const isEmailValid = checkInputEmail();
  const isPasswordValid = checkInputPassword();

  if (!isFirstNameValid) {
    firstName.focus();
  } else if (!isLastNameValid) {
    lastName.focus();
  } else if (!isEmailValid) {
    email.focus();
  } else if (!isPasswordValid) {
    password.focus();
  } else {
    alert("Registration completed successfully!");
    form.reset();
    firstName.focus();
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkForm();
});
