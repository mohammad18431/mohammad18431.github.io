document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to Built by Strength: Mohammad’s Life Blog!");

    // Image Gallery Toggle
    document.getElementById("show-images").addEventListener("click", function() {
        document.getElementById("image-gallery").style.display = "grid";
    });

    document.getElementById("hide-images").addEventListener("click", function() {
        document.getElementById("image-gallery").style.display = "none";
    });
});

