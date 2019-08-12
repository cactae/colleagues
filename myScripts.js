function loadDoc(url, cFunction) {

    // Hakee ja käsittelee API yhteyden. Antaa virheen jos yhteydessä on virhe.

    var xhttp = "";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cFunction(this);
            error = document.getElementById('error');
            error.setAttribute("style", "display: none;");
        } else if (this.readyState == 4 && this.status == 404) {
            error = document.getElementById('error');
            error.setAttribute("style", "display: block;");
            error.innerHTML = "Error 404 resource not found.";
        }else{error.innerHTML = "Uknown error."}

    };
    xhttp.open("GET", url, true);
    xhttp.send();

}
// Muokkaamalla results= arvoa saadaan useampia tauluja listattua kerralla
url = "https://randomuser.me/api/?results=1&format=prettyjson"
fetch(url, { method: 'get' }).then(function(response) {
    return response.json();
})
.then(function(data) {
    //console.log(data);
    // näyttää ensimmäisen JSON taulun tiedot. Useammilla tuloksilla for loop ja käyttöliittymän valitsimet
        var pic = data.results[0].picture;
        var picMed = pic.large;
        document.getElementById('card-img-top').src= picMed;
        
        
        var index = data.results[0].name;
        var title = index.title;
        var first = index.first;
        var last = index.last;
       // console.log(title + " " + first + " " + last);
        var cardTitle = document.getElementById('card-title');
        cardTitle.innerHTML = title + " " + first + " " + last;

        var nat = data.results[0].nat;
        var username = data.results[0].login.username;
        var email = data.results[0].email;
        var cell = data.results[0].cell;

        var text = document.getElementById('card-text');
        text.innerHTML = "Nationality: " + nat + "<br>" + "Username: " + username + "<br>" + "Email: " + email + "<br>" + "Phone: " + cell;
    
});