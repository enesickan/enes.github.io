$(document).ready(function() {

    $("#helpMain").accordion({
        collapsible: true,
        heightStyle: "content" 
    });

    $( function() {
        $( "#tabs" ).tabs();
    } );

    $("#showDetailsBtnTc").click(function(){
        var selectedTeacher = $("#selectTeacherDetails option:selected").text();
        $("#teacherDetails").text("Selected Teacher: " + selectedTeacher);
        $("#dialog").dialog(); 
    });
    $("#showDetailsBtnSt").click(function(){
        var selectedStudent = $("#selectStudentDetails option:selected").text();
        $("#studentDetails").text("Selected Student: " + selectedStudent);
        $("#dialog").dialog(); 
    });
});



