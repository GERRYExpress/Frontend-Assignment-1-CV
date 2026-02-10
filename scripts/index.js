$("#to-education").on("click", () => {
    $("#education").css("background-color", "#011433");
    $("#education").css("color", "#E9EDF5");
    $("#education").css("padding", "25px 15px");
    setTimeout(()=> {
        $("#education").css("background", "none");
        $("#education").css("color", "#011433");
        $("#education").css("padding", "0");
    }, 1000);

});

$("#to-skill").on("click", () => {
    $("#skill").css("background-color", "#011433");
    $("#skill").css("color", "#E9EDF5");
    $("#skill").css("padding", "25px 15px");
    setTimeout(()=> {
        $("#skill").css("background", "none");
        $("#skill").css("color", "#011433");
        $("#skill").css("padding", "0");
    }, 1000);
});

$("#to-hobby").on("click", () => {
    $("#hobby").css("background-color", "#011433");
    $("#hobby").css("color", "#E9EDF5");
    $("#hobby").css("padding", "25px 15px");
    setTimeout(()=> {
        $("#hobby").css("background", "none");
        $("#hobby").css("color", "#011433");
        $("#hobby").css("padding", "0");
    }, 1000);
});


$("#portfolio-button").on("click", () => {
    document.body.classList.add("loading");
    $("#portfolio-button").text("Loading...");
    $("#portfolio-button").attr("disabled", "true")
    setTimeout(() => {
        window.location.replace("./pages/portfolio.html")
    }, 1000);
});


