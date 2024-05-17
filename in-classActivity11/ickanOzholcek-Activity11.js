$(document).ready(function() {
    
    $("#nav_list a").click(function(event) {
        event.preventDefault();

        const json_file = $(this).attr("title") + ".json";

        $.getJSON("json_files/" + json_file, function(data) {
            $("main").empty();
            
            const newContent = `
                <h1>${data.speakers[0].title}</h1>
                <img src="/${data.speakers[0].image}" alt="${data.speakers[0].speaker}">
                <h2>${data.speakers[0].month}<br>${data.speakers[0].speaker}</h2>
                <p>${data.speakers[0].text}</p>
            `;

            $("main").html(newContent);
        });
    });
}); // end ready