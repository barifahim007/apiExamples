const internationLovers = () => {
    fetch('https://randomuser.me/api/?results=200')
        .then(res => res.json())
        .then(data => loveBirds(data.results))
}

const loveBirds = birds => {
    const displayLovers = document.getElementById('lovers')
    for (const bird of birds) {
        const love = document.createElement('div')
        love.innerHTML = `
        <img src=" ${bird.picture.large} ">
        <h2> name: ${bird.name.title} ${bird.name.first} ${bird.name.last} </h2>
        <h3> gender : ${bird.gender} </h3>
        <h4> email: ${bird.email} </h4>
        <p> location: ${bird.location.city} ${bird.location.country} </p>
        
        
        `
        displayLovers.appendChild(love)
    }
}