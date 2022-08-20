const homeScore = document.getElementById('home-score');
const awayScore = document.getElementById('away-score');
const reset = document.getElementById('reset');
const modal = document.getElementById('myModal');
const homeInput = document.getElementById('name1');
const awayInput = document.getElementById('name2');
const teamName1 = document.getElementById('team-name1');
const teamName2 = document.getElementById('team-name2');

// create a function which add the teams names and clear the input field
const savePlayersNames1 = () => {
    teamName1.innerHTML = homeInput.value;
    homeInput.value = '';
    teamName2.innerHTML = awayInput.value;
    awayInput.value = '';
};

// create the functions that add the points to the screen for the home team
const addOnePointH = () => {
    homeScore.innerHTML = +homeScore.innerHTML + 1;
};
const addTwoPointH = () => {
    homeScore.innerHTML = +homeScore.innerHTML + 2;
};
const addThreePointH = () => {
    homeScore.innerHTML = +homeScore.innerHTML + 3;
};

// create the functions that add the points to the screen for the away team
const addOnePointA = () => {
    awayScore.innerHTML = +awayScore.innerHTML + 1;
};
const addTwoPointA = () => {
    awayScore.innerHTML = +awayScore.innerHTML + 2;
};
const addThreePointA = () => {
    awayScore.innerHTML = +awayScore.innerHTML + 3;
};
// create a functions that resets the scores for both teams
const resetScore = () => {
    teamName1.innerHTML = 'Home';
    teamName2.innerHTML = 'Away';
    homeScore.innerHTML = 0;
    awayScore.innerHTML = 0;
};

// create two funtions the first one shows the modal element and the other hides it
const showModal = () => {
    modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
const hideModal = () => {
    modal.style.display = 'none';
};

// const hideModal2 = () => {
//     modal2.style.display = 'none';
// };

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
