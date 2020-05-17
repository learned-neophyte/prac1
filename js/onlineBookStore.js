$(function(){
   
    var $container=$(".container");

    function buildBookCard(data){

        data.forEach(function(book){
            $container.append('<img class="bookImage" src="'+ book.url +'">');
        
        });
        
    }

    $.get('/online books/js/imagesURL.json',function(data){
         buildBookCard(data);
    },'json');

});