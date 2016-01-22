import uuid from 'an-uuid';
import is from './helpers/is.js';

class Overlay {
    construct(container, options) {
        if (!is.node(container) && is.string(container)) {
            this.container = document.querySelector(container);
        } else {
            throw new Error('You mas pass an valid HTML Element to Overlay Plugin');
        }
        Object.assign(this.options, options);
    }

    show() {
        let id = uuid();
        let icon = this.options.displayIcon ? `<span class="overlay-icon"><i class="${this.options.icon}"></i></span>` : '';
        let overlay = `<div class="overlay-content">${icon}<p class="overlay-content-title">${this.options.title}</p>${this.options.desc}</div>`;
        let element = document.createElement('div');

        element.id = id;
        element.innerHTML = overlay;

        this.container.classList.add('overlay-wrap');
        this.container.dataset.overlayId = id;

        this.container.appendChild(element);

        return null;
    }

    hide() {
        var element = document.getElementById(this.container.dataset.overlayId);

        if (element) {
          element.parentNode.removeChild(element);
          this.container.classList.remove('overlay-wrap');
        }

        return null;
    }

    get options() {
        return {
            displayIcon: true,
            color: 'text-dark',
            icon: 'fa fa-refresh fa-spin fa-2x',
            title: 'Carregando...',
            desc: ''
        };
    }
}

