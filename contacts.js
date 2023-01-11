const fs = require('fs').promises;
const path = require('path')
const contactsPath = path.resolve(__dirname, "db/contacts.json")

async function readFile() {
    const contacts = await fs.readFile(contactsPath, "utf-8")
    return contacts
}

async function writeFile(db) {
    await fs.writeFile(dbPath, JSON.stringify(db, null, 2))
}

async function listContacts() {
    const contacts = await readFile()
    const dataForTable = JSON.parse(contacts)
    console.table(dataForTable);

}

async function getContactById(contactId) {
    const contacts = await readFile()
    const contactsArray = JSON.parse(contacts)
    console.log(contactsArray.filter(todo => contactId === todo.id));
}

function removeContact(contactId) {
    // ...твій код
}

function addContact(name, email, phone) {
    // ...твій код
}
module.exports = {
    readFile,
    writeFile,
    listContacts,
    getContactById
}