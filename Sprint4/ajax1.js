$(document).ready(function(){
    // Function to populate dropdown with student names
    function populateDropdown(selectElement, students) {
        selectElement.empty(); // Clear previous options
        students.forEach(function(student) {
            var option = $('<option></option>').attr('value', student.studentID).text(student.firstName + ' ' + student.lastName);
            selectElement.append(option);
        });
    }

    // Fetch data from students.json
    $.getJSON('students.json', function(data){
        // Populate edit select dropdown
        populateDropdown($('#editSelectStudent'), data);
        // Populate details select dropdown
        populateDropdown($('#detailsSelectStudent'), data);
    });

    $('#showDetailsBtnSt').click(function(){
        // Clear previous student info
        $('#studentDetails').empty();
        
        // Get the selected student ID from the dropdown
        var selectedStudentID = $('#detailsSelectStudent').val();
        console.log(selectedStudentID);
        
        // Fetch data from students.json
        $.getJSON('students.json', function(data){
            // Find the selected student in the JSON data
            var selectedStudent = data.find(student => student.studentID === selectedStudentID);
            
            // Construct HTML to display student details
            var studentDetailsHTML = '<h3>Student Details:</h3>';
            studentDetailsHTML += '<p><strong>Student ID:</strong> ' + selectedStudent.studentID + '</p>';
            studentDetailsHTML += '<p><strong>Name:</strong> ' + selectedStudent.firstName + ' ' + selectedStudent.lastName + '</p>';
            studentDetailsHTML += '<p><strong>Class:</strong> ' + selectedStudent.class + '</p>';
            studentDetailsHTML += '<p><strong>Department:</strong> ' + selectedStudent.department + '</p>';
            
            // Display student details
            $('#studentDetails').html(studentDetailsHTML);
        });
    });
});
