'use strict'

class ToastBuilder {

    constructor() {

        this._container = this.container;
        this._timer = 6000; // in millisecconds
        this._config = this.config;
    }

    get config() {
        return {
            'success' : {
                text: 'Success',
                icon: 'fa-check-circle',
                autoHide: true
            },
            'error' : {
                text: 'Error',
                icon: 'fa-times-circle',
                autoHide: false
            },
            'warning' : {
                text: 'Warning',
                icon: 'fa-exclamation-circle',
                autoHide: false
            },
            'info' : {
                text: 'Info',
                icon: 'fa-exclamation-circle',
                autoHide: false
            }
        };
    }

    get toastId() {

        return parseInt(document.querySelector('.toast_container').childElementCount + 1);
    }

    template(message, title, type) {

        let html = document.createElement('div');
        html.classList = `toast toast-${type}`;
        html.id = `toast-${this.toastId}`;
        html.setAttribute('data-auto-hide', this._config[type].autoHide);
        html.innerHTML = `<button class="toast__close">X</button>
                            <div class="toast__content">
                                <i class="toast__icon fa ${this._config[type].icon}" aria-hidden="true"></i>
                                <div class="toast__text">
                                    <strong class="toast__text-title">${title ? title : this._config[type].text}</strong>
                                    <p class="toast__text-description">${message ? message : ''}</p>
                                </div>
                            </div>
                        `;
        return {
            id: `toast-${this.toastId}`,
            template: html
        };
    }
}