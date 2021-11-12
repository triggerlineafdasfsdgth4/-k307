var checkbox = document.getElementById("checkbox");
var descriptionText = document.getElementById("description-text");

function onCheckboxChanged(event) {
    if (checkbox.checked) {
        descriptionText.style.display = "";
    }
    else {
        descriptionText.style.display = "none";
    }
}

checkbox.addEventListener("change", onCheckboxChanged);
onCheckboxChanged();