var player1=prompt("enter player1 name"),
player2=prompt("enter player2 name");

if(!player1.length){
  player1="player1";
}else{
  $(".player1>h2").text(player1);
  $("th.tableHeadP1").text(player1);
}

if(!player2.length){
  player2="player2";
}else{
  $(".player2>h2").text(player2);
  $(".tableHeadP2").text(player2);
}


var $dice=["https://cdn.clipart.email/ba685725cfccc78be9477fd253be9933_dice-clipart-homeschool-clipart_900-901.gif",
          "https://cdn.clipart.email/9a01d845f9ffb6ed0cdbdb03869f5c58_dice-clipart-homeschool-clipart_900-901.gif",
          "https://cdn.clipart.email/9c0af658f03fcc7ed05398629746073a_dice-clipart-homeschool-clipart_900-901.gif",
          "https://cdn.clipart.email/13fe59582771850c37f8b6404921ca91_dice-clipart-homeschool-clipart_900-901.gif",
          "https://cdn.clipart.email/cd65abc12ffc3690e596a2f6f83b17d7_dice-clipart-homeschool-clipart_900-901.gif",
          "https://cdn.clipart.email/f72415c673fcffa009ccf5a52f1d5de2_dice-clipart-homeschool-clipart_900-901.gif"]

var $p1,$p2,
    $scoreP1=0,$scoreP2=0;



function show(){
  $p2=Math.floor(Math.random()*6);
  $p1=Math.floor(Math.random()*6);
  
  $(".player1>img").attr("src",$dice[$p1]);
  $(".player2>img").attr("src",$dice[$p2]);
  $("h1").empty();
  
  if($p1>$p2){
    $("td.scoreP1").empty();
    $scoreP1++;
    $("h1").append(player1+" wins");
    $("td.scoreP1").append($scoreP1);
  }
  else if($p1<$p2){
    $("td.scoreP2").empty();
    $scoreP2++;
    $("h1").append(player2+" wins");
    $("td.scoreP2").append($scoreP2);
  }
  else{
    $("h1").append("Draw");
  }
  
}

$("button").on("click",show);
