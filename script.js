function toggleFeatures(id) {
    const featuresDiv = document.getElementById(id);
    if (featuresDiv.style.display === "none" || featuresDiv.style.display === "") {
        featuresDiv.style.display = "block"; // Show features
    } else {
        featuresDiv.style.display = "none"; // Hide features
    }
}
