var i = 0;

$("#increase").click(() => {
    i = i + 1;
    $("h2").text(i);
});

$("#decrease").click(() => {
    i = i - 1;
    $("h2").text(i);
});
