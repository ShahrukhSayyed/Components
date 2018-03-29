
$( document ).ready(function() {

/*Function to make navbar links active/inactive */

    $("div a").click(() => {
        $("a").removeClass("active");
        $(this).addClass("active");

    });

});


/*Function to display navbar after click */

let dropTheList = () => {
    let element = document.getElementById("mytop-navbar");

    if (element.className === "top-navbar") {
        element.className += " responsive";
    } else {
        element.className = "top-navbar";
    }
}
