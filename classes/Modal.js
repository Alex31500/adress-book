        // Classe Modal
       export  class Modal {
            constructor(overlayId) {
                this.overlay = document.getElementById(overlayId);
                this.isOpen = false;
            }

            open() {
                this.overlay.classList.add('active');
                this.isOpen = true;
            }

            close() {
                this.overlay.classList.remove('active');
                this.isOpen = false;
            }
        }