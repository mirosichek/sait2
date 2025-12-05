class Question {
    constructor(elementId) {
        this.element = document.getElementById(elementId);
    }

    getValue() {
        return this.element.value.trim();
    }
}
