document.addEventListener("DOMContentLoaded", function () {
    console.log("Abdul Manan Portfolio Loaded Successfully!");

    const button = document.querySelector(".btn");

    if (button) {
        button.addEventListener("click", function () {
            document.getElementById("contact").scrollIntoView({
                behavior: "smooth"
            });
        });
    }
});
