export class FormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.inputs = {
            nom: this.form.querySelector('#nom'),
            prenom: this.form.querySelector('#prenom'),
            email: this.form.querySelector('#email'),
            telephone: this.form.querySelector('#telephone')
        };
        this.errors = {
            nom: 'Nom invalide (min 2 caractères, lettres uniquement)',
            prenom: 'Prénom invalide (min 2 caractères, lettres uniquement)',
            email: 'Email invalide (ex: nom@domaine.com)',
            telephone: 'Téléphone invalide (ex: 06 12 34 56 78 ou +33 6 12 34 56 78)'
        };
        this.patterns = {
            nom: /^[A-Za-zÀ-ÖØ-öø-ÿ -]{2,}$/,
            prenom: /^[A-Za-zÀ-ÖØ-öø-ÿ -]{2,}$/,
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            telephone: /^(?:\+33|0)[1-9](?:[ .-]?\d{2}){4}$/
        };
        
        // J'initialise la validation en temps réel
        this.initRealTimeValidation();
    }

    // Je valide tous les champs
    isValid() {
        let valid = true;
        
        for (let key in this.inputs) {
            if (!this.validateField(key)) {
                valid = false;
            }
        }
        
        return valid;
    }

    // Je valide un champ spécifique
    validateField(field) {
        const input = this.inputs[field];
        const value = input.value.trim();
        const pattern = this.patterns[field];

        // Je vérifie si le champ est vide
        if (value === '') {
            this.showError(input, 'Ce champ est obligatoire');
            return false;
        }

        // Je vérifie si le format est correct
        if (!pattern.test(value)) {
            this.showError(input, this.errors[field]);
            return false;
        }

        // Tout est OK
        this.clearError(input);
        return true;
    }

    // J'affiche un message d'erreur
    showError(input, message) {
        input.classList.add('error');
        
        // Je cherche ou crée le message d'erreur
        let error = input.nextElementSibling;
        if (!error || !error.classList.contains('error-message')) {
            error = document.createElement('small');
            error.className = 'error-message';
            input.after(error);
        }
        
        error.textContent = message;
    }

    // Je supprime l'erreur
    clearError(input) {
        input.classList.remove('error');
        const error = input.nextElementSibling;
        if (error && error.classList.contains('error-message')) {
            error.remove();
        }
    }

    // Je récupère les valeurs validées
    getValues() {
        return {
            nom: this.inputs.nom.value.trim(),
            prenom: this.inputs.prenom.value.trim(),
            email: this.inputs.email.value.trim(),
            telephone: this.inputs.telephone.value.trim()
        };
    }

    // Je réinitialise le formulaire
    reset() {
        this.form.reset();
        Object.values(this.inputs).forEach(input => this.clearError(input));
    }

    // Je valide en temps réel à chaque frappe
    initRealTimeValidation() {
        Object.entries(this.inputs).forEach(([field, input]) => {
            // Validation lors de la saisie
            input.addEventListener('input', () => {
                this.validateField(field);
            });

            // Validation lorsqu'on quitte le champ
            input.addEventListener('blur', () => {
                this.validateField(field);
            });
        });
    }

    // Je valide avant soumission
    validateOnSubmit() {
        return this.isValid();
    }
}