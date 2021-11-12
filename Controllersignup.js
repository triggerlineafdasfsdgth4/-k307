class controllersignup {


    static initialize() {
        controllersignup.instance = new controllersignup();
    }


    constructor() {
        this.email = document.getElementById("email");
        this.pseudoname = document.getElementById("pseudoname");
        this.repeatpassword = document.getElementById("repass");
        this.password = document.getElementById("password");
        this.surname = document.getElementById("surname");
        this.firstname = document.getElementById("firstname");
        this.signupform = document.getElementById("signupform");
        this.signupform.addEventListener("submit", this.onformsubmit.bind(this));
    }

    onformsubmit(event) {
        event.preventDefault();

        if (this.firstname.toString().length > 255 || this.firstname.toString().length < 2) {
            alert("die Zeichenlänge ist Optimierungsbedürftig");
            this.firstname.focus();
            return;
        } else if (this.surname.toString().length < 8 || this.surname.toString().length > 255) {
            alert("Die Passwortlänge ist Optimeirungsbedürftig");
            this.surname.focus();
            return;
        } else if (this.password.toString().length < 8 || this.password.toString().length > 255) {
            alert("Die Passwortlänge ist Optimeirungsbedürftig");
            this.password.focus();
            return;
        } else if (this.password !== this.repeatpassword) {
            alert("beide Passwörter nicht identisch");
            this.repeatpassword.focus();
            return;
        } else if (this.pseudoname.toString().length > 200 || this.pseudoname.toString().length < 2) {
            alert("Die Zeichenlänge ist Optimierungsbedürftigt");
            this.pseudoname.focus();
            return;
        } else if (this.email.toString().length > 128 || this.email.toString().length < 2) {
            alert("Die Zeichenlänge ist definitiv Optimierungsbedürftigt");
            this.email.focus();
            return;
        }

        for (var i = 0; i < this.firstname.toString().length; i++) {
            if (this.firstname.toString().charAt(i) == "<" || this.firstname.toString().charAt(i) == ">") {
                alert("keine Tags!");
                this.firstname.focus();
                return;
            }
        }
        for (var i = 0; i < this.surname.toString().length; i++) {
            if (this.surname.toString().charAt(i) == "<" || this.surname.toString().charAt(i) == ">") {
                alert("keine Tags!");
                this.surname.focus();
                return;
            }
        }
        for (var i = 0; i < this.password.toString().length; i++) {
            if (this.password.toString().charAt(i) == "<" || this.password.toString().charAt(i) == ">") {
                alert("keine Tags!");
                this.password.focus();
                return;
            }
        }
        for (var i = 0; i < this.repeatpassword.toString().length; i++) {
            if (this.repeatpassword.toString().charAt(i) == "<" || this.repeatpassword.toString().charAt(i) == ">") {
                alert("keine Tags!");
                this.repeatpassword.focus();
                return;
            }
        }
        for (var i = 0; i < this.pseudoname.toString().length; i++) {
            if (this.pseudoname.toString().charAt(i) == "<" || this.pseudoname.toString().charAt(i) == ">") {
                alert("keine Tags!");
                this.pseudoname.focus();
                return;
            }
        }
        for (var i = 0; i < this.email.toString().length; i++) {
            if (this.email.toString().charAt(i) == "<" || this.email.toString().charAt(i) == ">") {
                alert("keine Tags!");
                this.email.focus();
                return;
            }
        }

        var firstnameSaving = this.firstname;
        var surnameSaving = this.surname;
        var passwordSaving = this.password;
        var pseudonameSaving = this.pseudoname;
        var emailSaving = this.email;


        var requestData = {
            firstnamesaving: firstnameSaving,
            surnamesaving: surnameSaving,
            passwordsaving: passwordSaving,
            pseudonamesaving: pseudonameSaving,
            emailsaving: emailSaving
        }

        this.SignUpSave = new XMLHttpRequest();
        this.SignUpSave.onreadystatechange = this.SignUpSaved.bind(this);
        this.SignUpSave.open("POST", "Service/Signupservice");
        this.SignUpSave.setRequestHeader("Content-Type", "application/json");
        this.SignUpSave.send(JSON.stringify(requestData));
    }

    SignUpSaved() {
        if (this.SignUpSave.readyState < 4) {
            return;
        }

        alert("saved!");
        window.open("frameratemainpage.html", "_self");

    }


}

new controllersignup();

window.addEventListener("load", controllersignup.initialize);