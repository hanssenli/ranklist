$(document).ready(function () {

    // Skip demographics
    $("#SkipDemographicsTBL").hide();

    $('input[type=radio][name=SkipDemographicsRadio]').change(function () {
        if (this.value == 'Yes') {
            $("#AllQuestions").hide(100);
            $("#SkipDemographicsTBL").show(100);
            $("#MainContent_SkipDemographicsHF").val("Yes");
        }
        else if (this.value == 'No') {
            $("#AllQuestions").show(100);
            $("#SkipDemographicsTBL").hide(100);
            $("#MainContent_SkipDemographicsHF").val("No");
        }
    });

    // Question 1
    $("#MainContent_CurrentTrainingLevelDropDownList1").change(function () {
        if (this.value == "Fellowship" || this.value == "Resident") {
            $("#NonStudentSection").show(100);
            $("#PracticeQuestions").hide(100);
        }
        else if (this.value == "Medical Student")
        {
            $("#NonStudentSection").hide(100);
            $("#PracticeQuestions").hide(100);
        }
        else {
            $("#PracticeQuestions").show(100);
            $("#NonStudentSection").show(100);
        }
    });


    // Question 2
    $("#SpecialtyOtherTBL").hide();
    $("#MultipleSpecialtyTBL").hide();

    $("#MainContent_SpecialtyDropDownList1").change(function () {
        if (this.value == "OTHER") {
            $("#SpecialtyOtherTBL").show(100);
            $("#MultipleSpecialtyTBL").hide(100);

        } else if (this.value == "MULTIPLE") {
            $("#SpecialtyOtherTBL").hide(100);
            $("#MultipleSpecialtyTBL").show(100);

        } else {
            $("#SpecialtyOtherTBL").hide(100);
            $("#MultipleSpecialtyTBL").hide(100);

        }
    });



    

    // Question 5 
    $("#ResidencyOtherTBL").hide();

    $("#MainContent_ResidencyDropDownList1").change(function () {
        if (this.value == "Outside of United States") {
            $("#ResidencyOtherTBL").show(100);

        } else {
            $("#ResidencyOtherTBL").hide(100);

        }
    });


    // Question 5
    $("#AdditionalFellowshipTBL").hide();

    $('input[type=radio][name=FellowshipRadio]').change(function () {
        if (this.value == 'Yes') {
            $("#AdditionalFellowshipTBL").show(100);
            $("#MainContent_FellowshipValue").val(this.value);
        }
        else if (this.value == 'No') {
            $("#AdditionalFellowshipTBL").hide(100);
            $("#MainContent_FellowshipValue").val(this.value);
        }
        else if (this.value == 'Current') {
            $("#AdditionalFellowshipTBL").show(100);
            $("#MainContent_FellowshipValue").val(this.value);
        }
    });

    $("#MainContent_AdditionalFellowTB").hide();

    $('input[type=radio][name=AdditionalFellowRadio]').change(function () {
        // default is does not have more than one fellowship
        if (this.value == 'Yes') {
            $("#MainContent_AdditionalFellowTB").show(100);
            $("#MainContent_AdditionalFellowValue").val("Yes");
        }
        else if (this.value == 'No') {
            $("#MainContent_AdditionalFellowTB").hide(100);
            $("#MainContent_AdditionalFellowValue").val("No");
        }
    });

    // Question 6

    // Question 7 
    $("#PracticeOtherTBL").hide();

    $("#MainContent_PracticeDropDownList1").change(function () {
        if (this.value == "Outside of United States") {
            $("#PracticeOtherTBL").show(100);

        } else {
            $("#PracticeOtherTBL").hide(100);

        }
    });

    // Question 8
    $('#currentageIB').keyup(function () {
        this.value = this.value.replace(/[^0-9\.]/g, '');
        var value = parseInt( $('#currentageIB').val());
        if (value >= 100 || value <= 0) {
            alert("Please enter a valid age");
            // delete last character
            $('#currentageIB').val(
                function (index, value) {
                return value.substr(0, value.length - 1);
            })
        }
    });

    $('#currentageIB').bind('keyup mouseup', function () {
        var value = $('#currentageIB').val();
        if (value != "") {
            $("#MainContent_CurrentAgeHF").val($('#currentageIB').val());
        } else {
            // -1 is the value for empty
            $("#MainContent_CurrentAgeHF").val("-1");
        }
    });


    $("#RetakeSurveyBtn").on('click', function() {
        retakeSurvey();
    });

    /*
    $("#GoToSurveyBtn").on('click', function() {
        window.location.href = "./Survey.aspx";
    });
    */

    $("#MainContent_SubmitDemographics").on('click', function () {
        showMessage();
    });

    $("#submitbutton").on("click", function () {
        showMessage();
        document.getElementById("MainContent_SubmitDemographics").click();
    });

});

function showMessage() {
    $("#AllContent").hide();
    $(".jumbotron").show(200);
}

function retakeSurvey() {
    $(".jumbotron").hide(100);
    $("#AllContent").show(100);
}