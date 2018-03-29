
/*Function to display main top navbar after click */
let dropTheNavbar = () => {
    let element = document.getElementById("mymain-top-navbar");

    if (element.className === "main-top-navbar") {
        element.className += " responsive";
    } else {
        element.className = "main-top-navbar";
    }
}
