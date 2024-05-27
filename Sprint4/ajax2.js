$(document).ready(function(){
    // Make an AJAX get request to the URL to fetch comments data
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/comments',
        method: 'GET',
        success: function(comments){
            var commenthtml = '';
            
            // Iterate over each comment in the fetched comments array with .each method
            $.each(comments, function(index, comment){
                // Build HTML for each comment
                commenthtml += '<h4>' + "Comment number " + comment.id + '</h4>';
                commenthtml += '<p>' + comment.name + '</p>';
                commenthtml += '<p>' + comment.body + '</p>';
                commenthtml += '<p>' + comment.email + '</p>';
                commenthtml += '<br>'+'<br>'
            });

            // Insert the generated HTML into the element with ID 'commentsContainer'
            $('#commentsContainer').html(commenthtml);
        },
        // Display an error message
        error: function(){
            $('#commentsContainer').html('<p>Error loading comments.</p>');
        }
    });
});