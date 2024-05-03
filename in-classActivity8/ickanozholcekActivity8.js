
$(function() {
    $( "#birthday" ).datepicker();

    var progLanguages = [ "Asp", "PHP", "Java", "C++", "Python", "Ruby", "JavaScript"];
    $('#progLanguages').autocomplete({
        source: progLanguages
    });
});