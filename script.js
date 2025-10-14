function rollDice(){
const result =document.getElementById("result");
const roll = Math.floor(Math.random()*6)+1; // 1 to 6 range
const diceFaces = ["⚀", "⚁" ,"⚂", "⚃", "⚄" ,"⚅"];
result.innerHTML = diceFaces[roll -1 ];

}
