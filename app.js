//model
let face = [
     `face1.png`,
     `face2.png`,
     `face3.png`,
     `face4.png`,

    ];
let body = [
    `bod1.png`,
    `bod2.png`,
    `bod3.png`,
    `bod4.png`,
];
let leg = [
    `legs1.png`,
    `legs2.png`,
    `legs3.png`,
    `legs4.png`,
];


console.log(face)
console.log(body)
console.log(leg)

//view
updateView();
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <h1>Change the look</h1>

    <div id="face">
        <button><p> ❮ </p></button>
        <img src="${face[0]}">
        <button><p>❯</p></button>
    </div>

    <div id="body">
        <button><p> ❮ </p></button>
        <img src="${body[0]}">
        <button onclick="change()"><p>❯</p></button>
    </div>

    <div id="leg">
        <button><p> ❮ </p></button>
        <img src="${leg[0]}">
        <button><p>❯</p></button>
    </div>
    
    `;
}


//controller
function change() {
    body++
    updateView();
}