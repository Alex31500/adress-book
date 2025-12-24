       import { Contact } from './Contact.js';
       
       // Classe ContactManager
       export class ContactManager {
            constructor() {
                this.contacts = this.loadContacts();
            }

            addContact(contact) {
                this.contacts.push(contact);
                this.saveContacts();
            }

            deleteContact(id) {
                this.contacts = this.contacts.filter(c => c.id !== id);
                this.saveContacts();
            }

            getContacts() {
                return this.contacts;
            }

            saveContacts() {
                localStorage.setItem('contacts', JSON.stringify(this.contacts));
            }

            loadContacts() {
                const stored = localStorage.getItem('contacts');
                if (stored) {
                    return JSON.parse(stored).map(c => 
                        new Contact(c.nom, c.prenom, c.email, c.telephone)
                    );
                }
                return [new Contact('Aubert', 'Jean-Luc', 'jean-luc.aubert@acme.fr', '+33 6 12 34 56 78')];
            }
        }