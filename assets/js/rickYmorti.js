function getCharacters(done) {

    const results = fetch("https://rickandmortyapi.com/api/character");

    results
        .then(response => response.json())
        .then(data => {
            done(data)
        });

}

getCharacters(data => {
    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(/*html*/  `

        <article>
            <div class="image-container">
                <img src="${personaje.image}" alt="Personajes">
            </div>

            <h2>${personaje.name}</h2>
            <span>${personaje.status}</span>
            <p>${personaje.location.name}</p>
            <span>${personaje.species}</span>
            <p>${personaje.gender}</p>
            
        </article>
       
        ` );

        const main = document.querySelector("main");

        main.append(article);

    });

});