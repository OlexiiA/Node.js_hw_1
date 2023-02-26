const fs = require("fs").promises;
const path = require("path");
require('colors')


const contactPath = path.join('./db/contacts.json');

// TODO: задокументировать каждую функцию
async function listContacts() {
  const list = await fs.readFile(contactPath);
  return JSON.parse(list);
}

async function getContactById(contactId) {
  const data = await listContacts();
  const contactById = data.find(({ id }) => id === contactId);
  return contactById;
}

async function removeContact(contactId) {
  const data = await listContacts();
  const deleteContact = data.filter(({ id }) => id !== contactId);
  // contacts.filter(contact => +contact.id !== +contactId)-аналогічний запис.
  // Number(contactId) плюси перетворюють стрінгу в намбер;
  await fs.writeFile(contactPath, JSON.stringify(deleteContact));
  console.log(`Contact with id ${contactId} was removed!`.red)
  
}

async function addContact(name, email, phone) {
  const newContact = {
    id: new Date().toISOString(),
    name,
    email,
    phone,
  };
  const data = await listContacts();
  const newData = [...data, newContact];
  await fs.writeFile(contactPath, JSON.stringify(newData));
  console.log(`Contact "${name}" was successfuly added!`.green)
}

module.exports = { listContacts, getContactById, removeContact, addContact };
