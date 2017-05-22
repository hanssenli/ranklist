

$(document).ready(function () {
    /*
    if ($(".jumbotron").width() <= 600) {
        //alert();
        $(".jumbotron").css("width", "550px");

        $(".outer").css("width", "550px");
        $("#choice1").css("height", "400px");
        $("#choice2").css("height", "400px");

        $("#choice1").css("width", "35%");
        $("#choice2").css("width", "35%");

        $("#choice1").css("position", "relative");
        $("#choice2").css("position", "relative");
    }
    */
    /*
    
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        //alert();

        $(".jumbotron").css("height", "800px");
        //$(".jumbotron").css("width", "90%");
        $(".outer").css("width", "100%");

        //alert();
        //$(".outer").css("width", "550px");
        $("#choice1").css("float", "none");
        //$("#choice2").css("height", "400px");

        $("#middle").css("width", "0");

        $(".circleBase").css("left", "50%");
        $(".circleBase").css("top", "100%");

        $("#choice1").css("width", "100%");

        $("#choice2").css("width", "100%");

        $("#choice1").css("padding", "40px");
        $("#choice2").css("padding", "40px");


        //$("#choice2").css("width", "35%");

        //$("#choice1").css("position", "relative");
        //$("#choice2").css("position", "relative");

     }
          
     */
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    if (isMobile.any()) {

        $(".jumbotron").css("height", "800px");
        //$(".jumbotron").css("width", "90%");
        $(".outer").css("width", "100%");

        //alert();
        //$(".outer").css("width", "550px");
        $("#choice1").css("float", "none");
        //$("#choice2").css("height", "400px");

        $("#middle").css("width", "0");

        $(".circleBase").css("left", "50%");
        $(".circleBase").css("top", "300px");


        $("#choice1").css("width", "100%");

        $("#choice2").css("width", "100%");

        $("#choice1").css("height", "300px");

        $("#choice2").css("height", "300px");

        $("#choice1").css("padding", "40px");
        $("#choice2").css("padding", "40px");

        $("#submitToolTip").css("z-index", "300");

        $("#submitToolTip").css("position", "absolute");
        $("#submitToolTip").css("top", "0px");

        

        //$("#choice2").css("width", "35%");

        //$("#choice1").css("position", "relative");
        //$("#choice2").css("position", "relative");

    }
    
    //Logic for clicking on button
  /*
    $('#submitToolTip').hide();
    $("#choice1").on("click", function () {
       
        $("#submitToolTip").fadeIn("400", function () {
            // Animation complete
            document.getElementById("MainContent_SubmitChoice1").click();
            //$('#submitToolTip').hide();

        });
       
    });

    $("#choice2").on("click", function () {
        $("#submitToolTip").fadeIn("400", function () {
            // Animation complete
            document.getElementById("MainContent_SubmitChoice2").click();
        });
    });
*/

    $("#choice1").hover(function () { //mouse in


        $(this).css("background-color", "#3498db");
        $(this).css("color", "white");
        $(this).css("color", "white");
        $(".type1").html("&#9664;");

        $("#choice2").css("background-color", "white");
        $("#choice2").css("color", "#3498db")

        //$("#choice1 span").animate({ fontSize: "+=3px" }, 200);



    }, function () { //mouse out
        $(this).css("background-color", "#3498db");
        $(this).css("color", "white");
        $(".type1").html("OR");

        $("#choice2").css("background-color", "white");
        $("#choice2").css("color", "#3498db");

        //$("#choice1 span").animate({ fontSize: "-=3px" }, 200);

    });

    $("#choice2").hover(function () { //mouse in

        $(this).css("background-color", "#3498db");
        $(this).css("color", "white");
        $(".type1").html("&#9654;");

        $("#choice1").css("background-color", "white");
        $("#choice1").css("color", "#3498db")
       
        //$("#choice2 span").animate({ fontSize: "+=3px" }, 200);



    }, function () { //mouse out
        $(this).css("background-color", "#3498db");
        $(this).css("color", "white");
        $(".type1").html("OR");


        $("#choice1").css("background-color", "white");
        $("#choice1").css("color", "#3498db");

        //$("#choice2 span").animate({ fontSize: "-=3px" }, 200);

    });

    

});//end function







