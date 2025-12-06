class Question {
    constructor(elementId, flagID) {
        this.element = document.getElementById(elementId);
        this.flag=document.getElementById(flagID);
    }

    getValue() {
        return this.element.value.trim();
    }

    getQID(){
        return this.flag.value.trim();
    }
}
