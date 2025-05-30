document.addEventListener('DOMContentLoaded', () => {

const grid = document.getElementById('rosterGrid')
const render = list => {
    grid.innerHTML = '',

    list.forEach(p  => {
        const col = document.createElement('div')

        col.className = 'col-6 col-lg-2'

        col.innerHTML =  `
        
        <div class="card h-100 shadow-sm" id="card">
        <img src= "${p.picture}" class="card-img-top" alt="${p.name}">
        <div class= "card-body text-center">
        <h5 class="card-title mb-1"> ${p.name}</h5>
        <div class="badge badge-position badge-position badge-pos-${p.position}">
                ${p.position} </div>
        <p class= "small text-muted mb-0"> 
            age ${p.age}
            </p>
        <a onclick="motif()">More</a>
            </div>
            </div>
        `
       
        grid.appendChild(col)
    })
}

render(players)
}) 


document.addEventListener('DOMContentLoaded', () => {

const Grid = document.getElementById('staffGrid')
const render = list => {
    Grid.innerHTML = '',

    list.forEach(s  => {
        const col = document.createElement('div')

        col.className = 'col-6 col-lg-2'

        col.innerHTML =  `
        
        <div class="card h-100 shadow-sm" id="card">
        <img src= "${s.picture}" class="card-img-top" alt="${s.name}">
        <div class= "card-body text-center">
        <h5 class="card-title mb-1"> ${s.name}</h5>
        <div class="badge badge-position badge-position badge-pos-${s.position}">
                ${s.position} </div>
        <p class= "small text-muted mb-0"> 
            age ${s.age}
            </p>
            </div>
            </div>
        `
       
        Grid.appendChild(col)
    })
}

render(japanVolleyballCoachesAndTrainers)
})


