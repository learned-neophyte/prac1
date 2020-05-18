$(function(){
   
    var $container=$(".container");

    function buildBookCard(data){

        data.forEach(function(book){
            $container.append('<img class="bookImage" src="'+ book.url +'">');
        
        });
        
    }

    $.get('https://learned-neophyte.github.io/prac1/js/imagesURL.json',function(data){
         buildBookCard(data);
    },'json');

});
