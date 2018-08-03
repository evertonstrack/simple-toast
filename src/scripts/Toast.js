'use strict'

class ToastMessenger {

    constructor() {

        this.service = new ToastService();
    }

    success(message = null, title = null) {

        this.service.create(message, title, 'success');
    }

    error(message = null, title = null) {

        this.service.create(message, title, 'error');
    }

    info(message = null, title = null) {

        this.service.create(message, title, 'info');
    }

    warning(message = null, title = null)  {

        this.service.create(message, title, 'warning');
    }
}