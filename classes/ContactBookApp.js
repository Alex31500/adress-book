import { Contact } from './Contact.js';
import { ContactManager } from './ContactManager.js';
import { Modal } from './Modal.js';
import { FormValidator } from './FormValidator.js';
import { UI } from './UI.js';

export class ContactBookApp {
    constructor() {
        this.contactManager = new ContactManager();
        this.ui = new UI('contactList');
        this.modal = new Modal('modalOverlay');
        this.formValidator = new FormValidator('contactForm');
        this.init();
    }

    init() {
        this.ui.renderContacts(this.contactManager.getContacts());

        // Event listeners
        document.getElementById('btnAdd').addEventListener('click', () => this.openModal());
        document.getElementById('btnClose').addEventListener('click', () => this.closeModal());
        
        document.getElementById('modalOverlay').addEventListener('click', (e) => {
            if (e.target.id === 'modalOverlay') this.closeModal();
        });

        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });

        // Event delegation pour la suppression
        this.ui.contactList.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-delete')) {
                const id = parseFloat(e.target.dataset.id);
                this.deleteContact(id);
            }
        });
    }

    openModal() {
        this.modal.open();
        this.formValidator.reset();
    }

    closeModal() {
        this.modal.close();
        this.formValidator.reset();
    }

    handleSubmit() {
        // Je valide AVANT de créer le contact
        if (this.formValidator.validateOnSubmit()) {
            const values = this.formValidator.getValues();
            const contact = new Contact(
                values.nom,
                values.prenom,
                values.email,
                values.telephone
            );

            this.contactManager.addContact(contact);
            this.ui.addContact(contact);
            this.closeModal();
        } else {
            console.log('❌ Formulaire invalide');
        }
    }

    deleteContact(id) {
        if (confirm('Voulez-vous vraiment supprimer ce contact ?')) {
            this.contactManager.deleteContact(id);
            this.ui.removeContact(id);
        }
    }
}