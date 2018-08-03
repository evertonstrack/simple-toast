'use strict'

class ToastService {

    constructor() {

        this._container = this.container;
        this._timer = 6000; // in millisecconds
    }

    get container() {
        
        let container = document.createElement('DIV');
        container.classList = 'toast_container';
        document.getElementsByTagName('body')[0].appendChild(container);

        return document.querySelector('.toast_container');
    }

    set events(id) {

        // Apply close click event
        document.getElementById(id).addEventListener('click', (e) => {
            
            if( e.target.classList.contains('toast__close') ) {
                this.close(e.currentTarget, id);
            }
        });

        // Aplply Auto hide option
        if( document.getElementById(id).dataset.autoHide == 'true' ) {
            
            let closeButton = '#' + id + ' .toast__close';
            let event = document.createEvent("Event");
            event.initEvent('click', true, false); 
            setTimeout(() => {
                if(document.querySelector(closeButton)) {
                    document.querySelector(closeButton).dispatchEvent(event);
                }
            }, this._timer);
        }
    }

    create(message, title, type) {
        
        let builder = new ToastBuilder();
        let template = builder.template(message, title, type);
        this.show(template);
    }

    show(toast) {

        let toastID = toast.id;
        this._container.appendChild(toast.template);
        this.events = toastID;
        setTimeout(() => document.getElementById(toastID).classList += ' slide-show', 300);
    }

    close(el, id) {

        let current = document.getElementById(id);
        el.classList += ' slide-hide';
        setTimeout(() => current.remove(current.selectedIndex), 500);
    }
}