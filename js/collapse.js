
$( document ).ready(function() {

    /*hide all paragraph first */
    
    $("#first-para").hide();
    $("#second-para").hide();
    $("#third-para").hide();

    
    /*show/hide paragraphs on click event */
    
    $("#first-button").click(() => {
        $("#first-para").toggle(1000);

    });

    $("##second-button").click(() => {
        $("#second-para").toggle(1000);

    });

    $("#third-button").click(() => {
        $("#third-para").toggle(1000);

    });
    

});

