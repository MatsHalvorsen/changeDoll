//model
let images = {
    face: [
     `face1.png`,
     `face2.png`,
     `face3.png`,
     `face4.png`,
    ],

    body: [
    `bod1.png`,
    `bod2.png`,
    `bod3.png`,
    `bod4.png`,
    ],

    leg: [
    `legs1.png`,
    `legs2.png`,
    `legs3.png`,
    `legs4.png`,
    ]
};

let currentIndex = {
    face: 0,
    body: 0,
    leg: 0
};

//view
updateView();
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <h1>Change the look</h1>

    <div id="face">
        <button onclick="changeImage('face', -1)"><p> ❮ </p></button>
        <img src="${images.face[currentIndex.face]}">
        <button onclick="changeImage('face', 1)"><p>❯</p></button>
    </div>

    <div id="body">
        <button onclick="changeImage('body',-1)"><p> ❮ </p></button>
        <img src="${images.body[currentIndex.body]}">
        <button onclick="changeImage('body', 1)"><p>❯</p></button>
    </div>

    <div id="leg">
        <button onclick="changeImage('leg', -1)"><p> ❮ </p></button>
        <img src="${images.leg[currentIndex.leg]}">
        <button onclick="changeImage('leg', 1)"><p>❯</p></button>
    </div>
    
    `;
}


//controller
function changeImage(part, direction) {
    currentIndex[part] += direction;
    if (currentIndex[part] < 0) {
      currentIndex[part] = 0;
    } else if (currentIndex[part] >= images[part].length) {
      currentIndex[part] = images[part].length - 1;
    }
    document.querySelector(`#${part} img`).src = images[part][currentIndex[part]];
  }




