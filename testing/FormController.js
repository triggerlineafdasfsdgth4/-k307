class FormController {
    static initialize() {
        FormController.instance = new FormController();
    }

    constructor() {
        this.checkbox = document.getElementById("checkbox");
        this.textField = document.getElementById("text-field");
        this.textErrorLabel = document.getElementById("text-error-label");
        this.form = document.getElementById("form");

        this.form.addEventListener("submit", this.onFormSubmitted.bind(this));
    }

    onFormSubmitted(event) {
        if (this.textField.value.indexOf("A") != 0) {
            event.preventDefault();
            this.textErrorLabel.style.display = "";
            this.textField.focus();
        }
    }
}

window.addEventListener("load", FormController.initialize);