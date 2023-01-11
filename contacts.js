const fs = require("fs").promises;
const path = require("path");
const shortid = require("shortid");
const contactsPath = path.resolve(__dirname, "db/contacts.json");

async function readFile() {
  const contacts = await fs.readFile(contactsPath, "utf-8");
  return contacts;
}

async function writeFile(contacts) {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

async function listContacts() {
  const contacts = await readFile();
  const dataForTable = JSON.parse(contacts);
  console.table(dataForTable);
  return dataForTable;
}

async function getContactById(contactId) {
  const contacts = await readFile();
  const contactsArray = JSON.parse(contacts);
  const findContact = contactsArray.find(
    (todo) => contactId.toString() === todo.id
  );
  console.log(findContact);
  return findContact;
}

async function removeContact(contactId) {
  const contacts = await readFile();
  const contactsArray = JSON.parse(contacts);
  const newContacts = contactsArray.filter(
    (todo) => contactId.toString() !== todo.id
  );
  await writeFile(newContacts);
}
async function addContact(name, email, phone) {
  id = shortid.generate();
  const newContact = {
    name,
    email,
    phone,
    id,
  };
  const contacts = await readFile();
  const contactsArray = JSON.parse(contacts);
  contactsArray.push(newContact);

  await writeFile(contactsArray);
  console.log(contacts);
}
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
