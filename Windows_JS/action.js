$(document).ready(function () {
    $("#ConnectModal").modal("show");
    setInterval(() => {
        $("#googleiframe").css("width", $(".window2").css("width"))
        $("#googleiframe").css("height", $(".window2").css("height"))
    }, 50);
    setInterval(() => {
        $("#fthiframe").css("width", $(".window3").css("width"))
        $("#fthiframe").css("height", parseFloat($(".window3").css("height")) - 20)
    }, 50);
});

$( function() {
    $( ".window" ).resizable();
    $( ".window" ).draggable();
    $( ".window2" ).resizable();
    $( ".window2" ).draggable();
    $( ".window3" ).resizable();
    $( ".window3" ).draggable();
    $( ".sortable" ).sortable();
    $( ".sortable" ).disableSelection();
    $( "#tabs" ).tabs();
  } );

$(".window").mousedown(function (e) { 
    $(".window").css("z-index", "800")
    $(".window2").css("z-index", "700")
    $(".window3").css("z-index", "700")
});

$(".window2").mousedown(function (e) { 
    $(".window2").css("z-index", "800")
    $(".window").css("z-index", "700")
    $(".window3").css("z-index", "700")
});

$(".window3").mousedown(function (e) { 
    $(".window2").css("z-index", "700")
    $(".window").css("z-index", "700")
    $(".window3").css("z-index", "800")
});

$(".Explorateur").click(function (e) { 
    console.log("Explorateur");
    if ($(".window").css("display") == "none") {
        $(".window").css("display", "block")
        console.log("Affich Explo");
        $(".ExplorateurLink").css("background-color", "rgba(255, 255, 255, 0.13);")
    } else {
        $(".window").css("display", "none")
    }
});

$(".Chrome").click(function (e) { 
    console.log("Chrome");
    if ($(".window2").css("display") == "none") {
        $(".window2").css("display", "block")
        console.log("Affich Chrome");
        $(".ChromeLink").css("background-color", "rgba(255, 255, 255, 0.13);")
    } else {
        $(".window2").css("display", "none")
    }
});

$(".ForTheHorde").click(function (e) { 
    console.log("FTH");
    if ($(".window3").css("display") == "none") {
        $(".window3").css("display", "block")
        console.log("Affich FTH");
        $(".fthLink").css("background-color", "rgba(255, 255, 255, 0.13);")
    } else {
        $(".window3").css("display", "none")
    }
});


$(".chromehide").click(function (e) { 
    console.log("Chrome");
    if ($(".window2").css("display") == "none") {
        $(".window2").css("display", "block")
        
    } else {
        $(".window2").css("display", "none")
        $("#googleiframe").attr("src", "https://www.google.com/webhp?igu=1");
        $(".fthLink").css("background-color", "")
    }
});

$(".chromereduct").click(function (e) { 
    $(".window2").css("display", "none")
    $(".ChromeLink").css("background-color", "rgba(255, 255, 255, 0.13);")
});

$(".fthhide").click(function (e) { 
    console.log("fth");
    if ($(".window3").css("display") == "none") {
        $(".window3").css("display", "block")
        
    } else {
        $(".window3").css("display", "none")
        $("#fthiframe").attr("src", "https://forthehorde.cf/");
        $(".fthLink").css("background-color", "")
    }
});

$(".fthreduct").click(function (e) { 
    $(".window3").css("display", "none")
    $(".fthLink").css("background-color", "rgba(255, 255, 255, 0.13);")
});

$(".explohide").click(function (e) { 
    console.log("Explorateur");
    if ($(".window").css("display") == "none") {
        $(".window").css("display", "block")
    } else {
        $(".window").css("display", "none")
        $(".ExplorateurLink").css("background-color", "")
    }
});

$(".exploreduct").click(function (e) { 
    $(".window").css("display", "none")
    $(".ExplorateurLink").css("background-color", "rgba(255, 255, 255, 0.13);")
});

var SaveWidth = $('.window').css("width")
var SaveHeight = $('.tabs').css("height")
var SaveTop, SaveLeft
var full = false;

$(".explofull").click(function (e) { 
    console.log("Big");
    console.log(SaveWidth);
    if (full == true) {
        $('.window').css({
            width : SaveWidth,
            height : SaveHeight,
            top : SaveTop,
            left : SaveLeft
        });
        $('.tabs').css({
            height : SaveHeight
        });
        full = false;
    } else {
        SaveWidth = $('.window').css("width")
        $('.window').css("height") != null ? SaveHeight = $('.window').css("height") : SaveHeight = $('.tabs').css("height")
        $('.window').css("top") != null ? SaveTop = $('.window').css("top") : console.log("Error");
        $('.window').css("left") != null ? SaveLeft = $('.window').css("left") : console.log("Error");
        console.log(SaveTop);
        console.log();
        $('.window').css({
            width : '100%',
            height : '930px',
            top : '0px',
            left : '0px'
        });
        $('.tabs').css({
            height : '930px'
        });
        full = true;
    }
});

$(".chromefull").click(function (e) { 
    console.log("Big");
    console.log(SaveWidth);
    if (full == true) {
        $('.window2').css({
            width : SaveWidth,
            height : SaveHeight,
            top : SaveTop,
            left : SaveLeft
        });
        $('#chromepage').css({
            height : SaveHeight
        });
        full = false;
    } else {
        SaveWidth = $('.window2').css("width")
        $('.window2').css("height") != null ? SaveHeight = $('.window2').css("height") : SaveHeight = $('.tabs').css("height")
        $('.window2').css("top") != null ? SaveTop = $('.window2').css("top") : console.log("Error");
        $('.window2').css("left") != null ? SaveLeft = $('.window2').css("left") : console.log("Error");
        console.log(SaveTop);
        console.log();
        $('.window2').css({
            width : '100%',
            height : '930px',
            top : '0px',
            left : '0px'
        });
        $('#chromepage').css({
            height : '930px'
        });
        full = true;
    }
});

$(".fthfull").click(function (e) { 
    console.log("Big");
    console.log(SaveWidth);
    if (full == true) {
        $('.window3').css({
            width : SaveWidth,
            height : SaveHeight,
            top : SaveTop,
            left : SaveLeft
        });
        $('#fthpage').css({
            height : SaveHeight
        });
        full = false;
    } else {
        SaveWidth = $('.window3').css("width")
        $('.window3').css("height") != null ? SaveHeight = $('.window3').css("height") : SaveHeight = $('.tabs').css("height")
        $('.window3').css("top") != null ? SaveTop = $('.window3').css("top") : console.log("Error");
        $('.window3').css("left") != null ? SaveLeft = $('.window3').css("left") : console.log("Error");
        console.log(SaveTop);
        console.log();
        $('.window3').css({
            width : '100%',
            height : '890px',
            top : '0px',
            left : '0px'
        });
        $('#fthpage').css({
            height : '890px'
        });
        full = true;
    }
});

setInterval(() => {
    heure();
}, 1000);

function heure()
{
        date = new Date;
        h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        resultat = ' '+h+':'+m;
        $("#heure").html(resultat);
        return true;
}

function connectModalFade() {
    $("#ConnectModal").css("opacity", 1)
    ModalInterval = setInterval(() => {
        $("#ConnectModal").css("opacity", parseFloat($("#ConnectModal").css("opacity")) - 0.05)
        if ($("#ConnectModal").css("opacity") <= 0) {
            $("#ConnectModal").modal("hide");
            clearInterval(ModalInterval);
        }
    }, 20);
}

function connectModalFadeInverse() {
    $("#ConnectModal").css("opacity", 0)
    $("#ConnectModal").modal("show");
    ModalInterval2 = setInterval(() => {
        $("#ConnectModal").css("opacity", parseFloat($("#ConnectModal").css("opacity")) + 0.05)
        if ($("#ConnectModal").css("opacity") >= 1) {
            clearInterval(ModalInterval2);
        }
    }, 20);
}

$("#WindowsBottomIcon").hover(function () {
        // over
        $("#ImgWindows").attr("src", "Windows_IMG/windows_logo_bleu.png")
    }, function () {
        // out
        $("#ImgWindows").attr("src", "Windows_IMG/windows_logo.png")
    }
);

$("#disconnect").click(function (e) { 
    connectModalFadeInverse();
});

