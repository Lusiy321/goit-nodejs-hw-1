import path from 'path';
import fs from 'fs/promises';
import { randomUUID } from 'crypto';



const pathDb = path.resolve("./db/contacts.json");

export async function listContacts() {
    try {
        const data = await fs.readFile(pathDb);
        const result = JSON.parse(data);
        return console.table(result);
    } catch (err) {
        return console.log(err.message);
    } 
  }  

export async function getContactById(id) {
    try {
        const data = await fs.readFile(pathDb);
        const result = JSON.parse(data);
        const filter = result.find((contact) => contact.id === id)
        return console.table(filter);
    } catch (err) {
        return console.log(err.message);
    } 
  }

export async function addContact (name, email, phone){
    try {
        const data = await fs.readFile(pathDb);
        const result = JSON.parse(data);

        const addNew = {
            id: randomUUID(), name, email, phone,
        }
         result.push(addNew);
         await fs.writeFile(pathDb, JSON.stringify(result))
        return console.table(result);
    } catch (err) {
        return console.log(err.message);
    } 
}
export async function removeContact(id) {
    try {
        const data = await fs.readFile(pathDb);
        const result = JSON.parse(data);
        const delContact = result.filter((contact) => contact.id !== id)
        return console.table(delContact);
    } catch (err) {
        return console.log(err.message);
    } 
  }

