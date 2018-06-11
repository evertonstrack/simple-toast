'use strict'

class ToastMessenger {

    constructor() {

        let container = document.createElement('DIV');
        container.classList = 'toast_container';
        document.getElementsByTagName('body')[0].appendChild(container);
    }

    success(message = null, title = null) {
        
        let service = new ToastService();
        service.create(message, title, 'success');
    }

    error(message = null, title = null) {
        
        let service = new ToastService();
        service.create(message, title, 'error');
    }

    info(message = null, title = null) {

        let service = new ToastService();
        service.create(message, title, 'info');
    }

    warning(message = null, title = null) {

        let service = new ToastService();
        service.create(message, title, 'warning');
    }
}