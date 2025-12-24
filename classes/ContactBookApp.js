import { Contact } from './Contact.js';
import { ContactManager } from './ContactManager.js';
import { Modal } from './Modal.js';
import { FormValidator } from './FormValidator.js';
import { UI } from './UI.js';

// Classe App principale
export class ContactBookApp {
    constructor() {
        this.contactManager = new ContactManager();
        this.ui = new UI('contactList');
        this.modal = new Modal('modalOverlay');
        this.formValidator = new FormValidator('contactForm');

        this.init();
    }

    init() {
        // Afficher les contacts existants
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

        // Validation en temps réel
        Object.values(this.formValidator.inputs).forEach(input => {
            input.addEventListener('input', () => this.updateValidation());
        });

        // Event delegation pour les boutons de suppression
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
        this.updateValidation();
    }

    closeModal() {
        this.modal.close();
        this.formValidator.reset();
    }

    updateValidation() {
        const submitBtn = document.querySelector('.btn-validate');
        const message = document.getElementById('validationMessage');

        if (this.formValidator.isValid()) {
            submitBtn.disabled = false;
            message.style.display = 'none';
        } else {
            submitBtn.disabled = true;
            message.style.display = 'block';
        }
    }

    handleSubmit() {
        if (this.formValidator.isValid()) {
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
        }
    }

    // deleteContact(id) {
    //     if (confirm('Voulez-vous vraiment supprimer ce contact ?')) {
    //         this.contactManager.deleteContact(id);
    //         this.ui.removeContact(id);
    //     }
    // }

    deleteContact(id) {
    console.log('═══════════════════════════════════');
    console.log('🔥 deleteContact() APPELÉ');
    console.log('ID reçu:', id);
    console.log('Pile d\'appels:');
    console.trace();
    console.log('═══════════════════════════════════');
    
    if (confirm('Voulez-vous vraiment supprimer ce contact ?')) {
        this.contactManager.deleteContact(id);
        this.ui.removeContact(id);
    }
}
}
