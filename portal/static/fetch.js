function r() {
    fetch('http://localhost:8080/index')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson);
        });
}