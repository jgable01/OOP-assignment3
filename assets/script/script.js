/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

  Object-oriented JavaScript
  Joshua Gable

  Assignment 3

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
'use strict'

let input = document.querySelector('.information-field');
let addButton = document.querySelector('.add-btn');
let grid = document.querySelector('.grid');

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

addContact('Bob marly', 'winnipeg', 'bob@email.com');
deleteContact(0);

function addContact(name, city, email) {
  const contact = new Contact(name, city, email);
  contacts.unshift(contact);
  listContacts();
  console.log(contacts);
}

function listContacts() {
    let div = document.createElement("div");
    div.className = contacts.length;
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    p1.className = 'p1';
    p2.className = 'p2';
    p3.className = 'p3';
    p1.innerText = 'Testingggg';
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    grid.append(div);
    console.log(p1.innerText);
    console.log('test');

}

function deleteContact(num) {
  delete contacts[num];
  console.log(contacts);
  listContacts();
}

grid.addEventListener('click', function (event) {
  let num = event.target.className;
    infor.innerText = deleteContact(num-1);
});







