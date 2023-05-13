function show() {
    const image = document.getElementById("image")
    image.src = "sailor.jpg"
    document.getElementById("btnID").style.display = "none"
    document.getElementById("begging").style.display = "none"
    document.getElementById("title").textContent = "It's Sailor! :D"
}