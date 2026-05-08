export default class Collapse {
    constructor(button, content) {
        this.button = button;
        this.content = content;

        this.button.addEventListener('click', () => {
        this.toggle();
        });
    }

    toggle() {
        if (this.content.style.maxHeight) {
        this.content.style.maxHeight = null;
        } else {
        this.content.style.maxHeight =
            this.content.scrollHeight + 'px';
        }
    }
}