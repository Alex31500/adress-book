    // Classe UI
        export class UI {
            constructor(contactListId) {
                this.contactList = document.getElementById(contactListId);
            }

            renderContacts(contacts) {
                this.contactList.innerHTML = contacts.map(c => c.toHTML()).join('');
            }

            addContact(contact) {
                this.contactList.insertAdjacentHTML('beforeend', contact.toHTML());
            }

            /**
             * Remove a contact
             * @param {int} id 
             */
            removeContact(id) {
                const row = this.contactList.querySelector(`tr[data-id="${id}"]`);
                if (row) {
                    row.remove();
                }
            }
        }