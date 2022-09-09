/* eslint-disable */
import "bootstrap";
import "./style.css";

let form = document.querySelector("form");
form.addEventListener("submit", e => {
  e.preventDefault();

  let cardFeed = document.querySelector("#cardFeedback");
  let cvcFeed = document.querySelector("#cvcFeedback");
  let amountFeed = document.querySelector("#amountFeedback");
  let firstFeed = document.querySelector("#firstFeedback");
  let lastFeed = document.querySelector("#lastFeedback");
  let cityFeed = document.querySelector("#cityFeedback");
  let stateFeed = document.querySelector("#stateFeedback");
  let postalFeed = document.querySelector("#postalFeedback");
  let cardtypeFeed = document.querySelector("#cardtypeFeedback");

  let errors = {};

  let regexCard = /^4[0-9]{12}(?:[0-9]{3})?$/;
  let regexNum = /^[0-9]+$/;
  let regexLetter = /^[a-zA-Z]+$/;
  let regexPostal = /^[0-9]{5}(?:-[0-9]{4})?$/;

  let {
    card,
    cvc,
    amount,
    firstname,
    lastname,
    city,
    state,
    postal,
    cardtype
  } = e.target; //e.target = form;

  if (card.value === "") {
    errors["card"] = "Ingresa el número de la tarjeta";
    card.classList.add("is-invalid");
  } else if (!regexCard.test(card.value)) {
    errors["card"] = "Ingresa el número de la tarjeta";
    card.classList.add("is-invalid");
  } else {
    card.classList.remove("is-invalid");
    card.classList.add("is-valid");
  }

  if (cvc.value === "" || !regexNum.test(cvc.value)) {
    errors["cvc"] = "Ingresa el número de seguridad";
    cvc.classList.add("is-invalid");
    //alert("CVC Add up to 3 numbers");
  } else if (cvc.value.length === 3 && regexNum.test(cvc.value)) {
    cvc.classList.remove("is-invalid");
    cvc.classList.add("is-valid");
  } else {
    errors["cvc"] = "Ingresa el número de seguridad";
    cvc.classList.add("is-invalid");
  }

  if (amount.value === "" || !regexNum.test(amount.value)) {
    errors["amount"] = "Ingresa la cantidad deseada";
    amount.classList.add("is-invalid");
    //alert("add an amount expressed in numbers");
  } else if (regexNum.test(amount.value)) {
    amount.classList.remove("is-invalid");
    amount.classList.add("is-valid");
  }

  if (firstname.value === "" || !regexLetter.test(firstname.value)) {
    errors["firstname"] = "Ingresa nombre";
    firstname.classList.add("is-invalid");
    //alert("Add a name using only letters.");
  } else if (regexLetter.test(firstname.value)) {
    firstname.classList.remove("is-invalid");
    firstname.classList.add("is-valid");
  }
  if (lastname.value === "" || !regexLetter.test(lastname.value)) {
    errors["lastname"] = "Ingresa apellido";
    lastname.classList.add("is-invalid");
    //alert("Add a last name using only letters.");
  } else if (regexLetter.test(lastname.value)) {
    lastname.classList.remove("is-invalid");
    lastname.classList.add("is-valid");
  }
  if (city.value === "" || !regexLetter.test(city.value)) {
    errors["city"] = "Ingresa tu ciudad";
    city.classList.add("is-invalid");
    //alert("Add a City name.");
  } else if (regexLetter.test(city.value)) {
    city.classList.remove("is-invalid");
    city.classList.add("is-valid");
  }
  if (!state.value) {
    errors["state"] = "Selecciona tu estado";
    state.classList.add("is-invalid");
  } else {
    state.classList.remove("is-invalid");
    state.classList.add("is-valid");
  }

  if (postal.value === "" || !regexPostal.test(postal.value)) {
    errors["postal"] = "Ingresa código postal";
    postal.classList.add("is-invalid");
  } else {
    postal.classList.remove("is-invalid");
    postal.classList.add("is-valid");
  }

  if (!cardtype.value) {
    errors["cardtype"] = "Selecciona una tarjeta de crédito";
    alert("Selecciona tarjeta de crédito");
  } else {
    console.log(cardtype.value);
  }

  if (
    errors["card"] ||
    errors["cvc"] ||
    errors["amount"] ||
    errors["firstname"] ||
    errors["lastname"] ||
    errors["city"] ||
    errors["state"] ||
    errors["postal"] ||
    errors["cardtype"]
  ) {
    let title = document.querySelector("#title");
    title.classList.remove("bg-warning");
    title.classList.add("bg-danger");
    title.innerHTML = "Add the goddamn information!";
    if (errors["card"]) cardFeed.innerHTML = errors["card"];
    if (errors["cvc"]) cvcFeed.innerHTML = errors["cvc"];
    if (errors["amount"]) amountFeed.innerHTML = errors["amount"];
    if (errors["firstname"]) firstFeed.innerHTML = errors["firstname"];
    if (errors["lastname"]) lastFeed.innerHTML = errors["lastname"];
    if (errors["city"]) cityFeed.innerHTML = errors["city"];
    if (errors["state"]) stateFeed.innerHTML = errors["state"];
    if (errors["postal"]) postalFeed.innerHTML = errors["postal"];
    if (errors["cardtype"]) cardtypeFeed.innerHTML = errors["cardtype"];
  } else {
    title.innerHTML = "Thanks for your cooperation!";
    if ((title.classList = "bg-warning")) {
      title.classList.remove("bg-warning");
      title.classList.add("bg-success");
      title.classList.add("col-12");
      title.classList.add("p-4");
      title.classList.add("mb-3");
      e.target.submit();
    } else {
      title.classList.remove("bg-warning");
      title.classList.add("bg-success");
      title.classList.add("col-12");
      title.classList.add("p-4");
      title.classList.add("mb-3");
      e.target.submit();
    }
  }

  // console.log(errors);
});

//Delete starting here if you must
/*
const x = [1, 2, 3, 4, 5];
const [y, z, ...rest] = x;
console.log(y);
console.log(z);
console.log(rest);

const obj = { a: "Elv", b: { c: "Mau" } };
const { a } = obj;
const {
  b: { c: d }
} = obj;
console.log(a);
console.log(d);

const { r, ...others } = { r: 1, b: 2, c: 3 };
console.log(others);

const arr = [1, 2, 3];
[arr[0], arr[2]] = [arr[2], arr[0]];
console.log(arr);

const f = () => {
  return [1, 2];
};

const [g, h] = f();
console.log(g);
console.log(h);

const [aa, bb, ...[cc, dd]] = [1, 2, 3, 4];
console.log(aa, bb, cc, dd);

const parseProtocol = url => {
  const parseUrl = /^(\w+):\/\/([^/]+)\/(.*)$/.exec(url);
  if (!parseUrl) {
    return false;
  }
  console.log(parseUrl);
  const [, protocol, fullhost, fullpath] = parseUrl;
  return protocol;
};

console.log(
  parseProtocol("https://4geeks.com/cohort/santiago-ft-16/full-stack-ft/v4")
);

const { p: foo = 32, q: bar = 43 } = {
  p: 42,
  q: undefined
};

console.log(foo);
console.log(bar);

const user = {
  id: 42,
  displayname: undefined,
  fullname: {
    firstname: "Mau",
    lastname: "Light"
  }
};

const userId = ({ id: ide }) => {
  return ide;
};

console.log(userId(user));

const whoIs = ({ displayname = "mlight", fullname: { firstname: name } }) => {
  return `my username is ${displayname}, but my real name is ${name}`;
};

console.log(whoIs(user));

const metadata = {
  title: "Writer's Quest",
  otherStuff: [
    {
      participants: 7,
      teacher: "M.Light"
    }
  ],
  url: "https://mlight.quest"
};

const {
  title: coursename,
  otherStuff: [{ teacher: teachername }]
} = metadata;

console.log(coursename);
console.log(teachername);

const people = [
  {
    name: "Mau Light",
    family: {
      love: "Elvira Shakirova"
    }
  },
  {
    name: "Elvira Shakirova",
    family: {
      love: "Mau Light"
    }
  }
];

for (const {
  name: n,
  family: { love: lo }
} of people) {
  console.log(`My name is ${n} and I love ${lo}`);
}

const props = [
  { id: 1, name: "fizz" },
  { id: 2, name: "buzz" },
  { id: 3, name: "fizzbuzz" }
];

const [, , { name }] = props;
console.log(name);
*/
