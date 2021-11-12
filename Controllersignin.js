class Controllersignin {

    static initialize() {
        Controllersignin.instance = new Controllersignin();
    }

    constructor() {
        this.pseudoname = document.getElementById("pseudoname");
        this.password = document.getElementById("password");
        this.email = document.getElementById("email");
        this.signinform = document.getElementById("signinform");
        this.signinform.addEventListener("submit", this.onformsubmit.bind(this));
    }

    onformsubmit(event) {
        if (this.pseudoname.toString().length > 200 || this.pseudoname.toString().length < 2) {
            alert("Die Zeichenlänge ist Optimierungsbedürftigt");
            this.pseudoname.focus();
            return;
        } else if (this.password.toString().length < 8 || this.password.toString().length > 255) {
            alert("Die Passwortlänge ist Optimeirungsbedürftig");
            this.password.focus();
            return;
        } else if (this.email.toString().length > 128 || this.email.toString().length < 2) {
            alert("Die Zeichenlänge ist definitiv Optimierungsbedürftigt");
            this.email.focus();
            return;
        }

        for (var i = 0; i < this.password.toString().length; i++) {
            if (this.password.toString().charAt(i) == "<" || this.password.toString().charAt(i) == ">") {
                alert("keine Tags!");
                this.password.focus();
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

        var pseudonameProof = this.pseudoname;
        var passwordProof = this.password;
        var emailProof = this.email;

        var requestData = {
            pseudonameproof: pseudonameProof,
            passwordproof: passwordProof,
            emailproof: emailProof
        }

        this.signinproof = new XMLHttpRequest();
        this.signinform.onreadystatechange = this.signinform.bind(this);
        this.signinform.open("POST", "Service/Signinservice");
        this.signinform.setRequestHeader("Content-Type", "application/json");
        this.signinform.send(JSON.stringify(requestData));
    }

    signinproof() {
        if (this.signinform.readyState < 4) {
            return;
        }
        alert("proofed!");
        window.open("frameratemainpage.html", "_self");
    }


}

new Controllersignin();

window.addEventListener("load", controllersignup.initialize);