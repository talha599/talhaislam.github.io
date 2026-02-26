console.log("Portfolio Loaded Successfully!");

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function() {
        alert("Navigating to " + this.textContent);
    });
});
