const homeScore = document.getElementById('home-score');
const awayScore = document.getElementById('away-score');
const reset = document.getElementById('reset');
const modal = document.getElementById('myModal');
const modal2 = document.getElementById('myModal2');
let homeInput = document.getElementById('name1');
let awayInput = document.getElementById('name2');
let plrList1 = document.getElementById('plr-list1');
let plrList2 = document.getElementById('plr-list2');

const homePlayers = [];
const awayPlayers = [];

const savePlayersNames1 = () => {
    const insertedName = homeInput.value;
    homePlayers.push(insertedName);
    const node = document.createElement('li');
    const textnode = document.createTextNode(insertedName);
    node.appendChild(textnode);
    plrList1.appendChild(node);
    homeInput.value = '';
};

const savePlayersNames2 = () => {
    const insertedName = awayInput.value;
    awayPlayers.push(insertedName);
    const node2 = document.createElement('li');
    const textnode2 = document.createTextNode(insertedName);
    node2.appendChild(textnode2);
    plrList2.appendChild(node2);
    awayInput.value = '';
};

const addOnePointH = () => {
    homeScore.innerHTML = +homeScore.innerHTML + 1;
};
const addTwoPointH = () => {
    homeScore.innerHTML = +homeScore.innerHTML + 2;
};
const addThreePointH = () => {
    homeScore.innerHTML = +homeScore.innerHTML + 3;
};

const addOnePointA = () => {
    awayScore.innerHTML = +awayScore.innerHTML + 1;
};
const addTwoPointA = () => {
    awayScore.innerHTML = +awayScore.innerHTML + 2;
};
const addThreePointA = () => {
    awayScore.innerHTML = +awayScore.innerHTML + 3;
};

const resetScore = () => {
    homeScore.innerHTML = 0;
    awayScore.innerHTML = 0;
};

const showModal = () => {
    modal.style.display = 'block';
};

const showModal2 = () => {
    modal2.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
const hideModal = () => {
    modal.style.display = 'none';
};

const hideModal2 = () => {
    modal2.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal || event.target == modal2) {
        modal.style.display = 'none';
        modal2.style.display = 'none';
    }
};

// const modalBtn = document.getElementById('modal-btn');
// const modal2Btn = document.getElementById('modal2-btn');
// const btn = document.getElementById('myBtn');
// const addHomePlayer = document.getElementById('add-home');
// const addAwayPlayer = document.getElementById('add-away');
// Get the <span> element that closes the modal
// const span = document.getElementsByClassName('close')[0];
