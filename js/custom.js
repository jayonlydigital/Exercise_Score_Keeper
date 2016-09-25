/*
Creat a function to count up a tennis score. When one player wins, change the board title to display the winner.
*/
$(function(){

var scorePlayer1 = 0;
var scorePlayer2 = 0;


$('#p1-point').click(function(){
	player1game()
});
$('#p2-point').click(function(){
	player2game();
});



}); /*-- Doc Ready --*/