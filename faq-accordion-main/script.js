let accordionButtons = document.getElementsByClassName("accordion-item-button");

let i;
for (i = 0; i < accordionButtons.length; i++) {
    accordionButtons[i].addEventListener("click", function()  {
        this.classList.toggle("active");

        let accordionPanel = this.nextElementSibling;
        if (accordionPanel.style.display === "block") {
            accordionPanel.style.display = "none";
        } else {
            accordionPanel.style.display = "block";
        }
    })
}