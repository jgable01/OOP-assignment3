/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

  Object-oriented JavaScript
  Joshua Gable

  Assignment 3

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
'use strict'

let input = document.querySelector('.contacts');
let addButton = document.querySelector('.add-btn');
let grid = document.querySelector('.grid');
let cont = document.querySelector('.container');


class Contact {
  #name;
  #city;
  #email;

  constructor(name, city, email) {
    this.#name = name;
    this.#city = city;
    this.#email = email;
  }

  get name() {
    return this.#name;
  }

  get city() {
    return this.#city;
  }

  get email() {
    return this.#email;
  }
}

const contacts = [];

// addContact('Bob marly', 'winnipeg', 'bob@email.com');

function addContact(name, city, email) {
  if (contacts.length < 50) {
    const contact = new Contact(name, city, email);
    contacts.unshift(contact);
    listContacts();
    console.log(contacts);
  }

}

function listContacts() {
  for (let i = 0; i < 1; i++) {
    let div = document.createElement("div");
    div.classList.add(contacts.length);
    div.classList.add('div')
    console.log(`Class name: ${div.classList}`)
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    p1.className = 'p1';
    p2.className = 'p2';
    p3.className = 'p3';
    p1.innerHTML = `<b>Name:</b> ${contacts[i].name}`;
    p2.innerHTML = `<b>City:</b> ${contacts[i].city}`;
    p3.innerHTML = `<b>Email:</b> ${contacts[i].email}`;
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    grid.prepend(div);
    console.log(p1.innerText);
    console.log('test');

    div.onclick = () => {
      grid.removeChild(div);
      contacts.splice(div.className, 1);
    }

  }

}
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

addButton.addEventListener('click', () => {
  console.log(input.value);
  let userInput = []
  userInput = input.value.toString().split(', ', 3);
  console.log(`Array: ${userInput[0]}`);
  let name = userInput[0].trim();
  let city = userInput[1].trim();
  let email = userInput[2].trim();

  if (validateEmail(email)) { addContact(name, city, email) }
  else { throw "Invalid input" };
});









