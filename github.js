function setGithub() {
    var date = document.querySelector('.date');
    var name = document.querySelector('.name');
    var desc = document.querySelector('.desc');
    var temp = document.querySelector('.temp');
    var main = document.querySelector('.main');
    var feel_temp = document.querySelector('.feel_temp');
    var wind = document.querySelector('.wind');

    fetch('https://api.github.com/users/timoelio/repos?sort=updated')
        .then(response => response.json())
        .then(data => {

            for(var i=0; i<4; i++) {
                var linkValue = data[i]["html_url"];
                var titleValue = data[i]["name"];
                var descValue = data[i]["description"];
                var infoValue = data[i]["language"];

                var gtitle = "gith-title" + (i);
                var gdesc = "gith-desc" + (i);
                var glink = "gith-link" + (i);
                var ginfo = "gith-info" + (i);

                document.getElementById(gtitle).innerHTML = titleValue;
                document.getElementById(gdesc).innerHTML = descValue;
                document.getElementById(glink).href = linkValue;     
                document.getElementById(ginfo).innerHTML = infoValue;
            }

            
        })

}