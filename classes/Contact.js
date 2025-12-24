        // Classe Contact
       export class Contact {
            constructor(nom, prenom, email, telephone) {
                this.id = Date.now() + Math.random();
                this.nom = nom;
                this.prenom = prenom;
                this.email = email;
                this.telephone = telephone;
            }

            toHTML() {
                return `
                    <tr data-id="${this.id}">
                        <td>${this.nom}</td>
                        <td>${this.prenom}</td>
                        <td><a href="mailto:${this.email}" class="email-link">${this.email}</a></td>
                        <td><button class="btn-delete" data-id="${this.id}">×</button></td>
                    </tr>
                `;
            }
        }