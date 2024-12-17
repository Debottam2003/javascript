fetch("json1.json")
    .then((response) => {
        // Convert the response to JSON
        return response.json();
    })
    .then((data) => {
        // Now log the parsed data
        console.log(data);
    });