

document.addEventListener('DOMContentLoaded', () => {fetchMonsters()})

async function fetchMonsters (){
    await fetch (`http://localhost:3000/monsters?_limit=50&_page=20`)
    .then(resp => resp.json())
    .then(monstersArr => monstersArr.forEach(monsterCard))}


async function renderMonster(monsterObj){
for (let i = 0; i < 51; i++) {
    monsterCard(monsterObj[i])
}}



async function monsterCard(monsterObj){
    const monsterContainer = document.getElementById('monster-container')   
    let monsterDiv = document.createElement('div')
    monsterContainer.appendChild(monsterDiv)
    monsterDiv.innerHTML = 
    `<h2>Name: ${monsterObj.name}</h2>
    <h4>Age: ${monsterObj.age}</h4>
    <p>Description: ${monsterObj.description}</p>`
}
