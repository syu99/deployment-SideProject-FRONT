fetch('https://deployment-side-project.vercel.app/year')
.then(response => response.json())
.then(data => {
    // Récupération de l'année depuis les données renvoyées par l'API
    const year = data.year;
    // Affichage de l'année à l'intérieur de l'élément HTML avec l'id "year"
    document.querySelector('#year').innerHTML = year;
})
.catch(error => console.error(error));