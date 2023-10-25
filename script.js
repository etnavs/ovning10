console.log('');

// Hämta knappen och textarean med sina id:n
let searchButton = document.getElementById("searchButton");
let varelseInput = document.getElementById("varelse");
let resultTextarea = document.getElementById("result");

// Lägg till en händelselyssnare för knappen
searchButton.addEventListener("click", function () {
    // Hämta värdet från input-fältet
    let varelseText = varelseInput.value;

    let urll = "https://www.swapi.tech/api/people/?name=" + varelseText;

    // Skriv värdet till textarean
    // resultTextarea.value = urll;

    fetch(urll)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);

            // Kontrollera om det finns resultat
            if (data.result && data.result.length > 0) {
                let result = data.result[0];

                let name = result.properties.name;
                let height = result.properties.height;
                let mass = result.properties.mass;
                let gender = result.properties.gender;
                let hair_color = result.properties.hair_color;

                // Skapa en HTML-sträng med datan
                let beskrivning = `Name: ${name} 
Height: ${height}
Mass: ${mass}
Gender: ${gender}
Hair Color: ${hair_color} `;

                // Sätt HTML-strängen som innehållet för elementet med innerHTML
                resultTextarea.innerHTML = beskrivning;
            } else {
                resultTextarea.innerHTML = "Inga resultat hittades.";
            }
        })
        .catch(err => console.log(err));
});
