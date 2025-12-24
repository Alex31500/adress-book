// Classe FormValidator
        export class FormValidator {
            constructor(formId) {
                this.form = document.getElementById(formId);
                this.inputs = {
                    nom: document.getElementById('inputNom'),
                    prenom: document.getElementById('inputPrenom'),
                    email: document.getElementById('inputEmail'),
                    telephone: document.getElementById('inputTelephone')
                };
            }

            isValid() {
                return Object.values(this.inputs).every(input => input.value.trim() !== '');
            }

            getValues() {
                return {
                    nom: this.inputs.nom.value.trim(),
                    prenom: this.inputs.prenom.value.trim(),
                    email: this.inputs.email.value.trim(),
                    telephone: this.inputs.telephone.value.trim()
                };
            }

            reset() {
                this.form.reset();
            }
        }
