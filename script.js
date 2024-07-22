document.addEventListener("DOMContentLoaded", function() {
    const hdrutyara = document.getElementById("hdrutyara");
    const hdrutyaradiv = document.getElementById("UTYARADISCORD")

    hdrutyara.addEventListener("click", function() {
        if (hdrutyaradiv.style.display === "none" || hdrutyaradiv.style.display === "") {
            hdrutyaradiv.style.display = "block";
        } else {
            hdrutyaradiv.style.display = "none";
        }
    });
});