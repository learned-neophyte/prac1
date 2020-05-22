
  function Book(imgName,name,author,category,price,rating){
    this.imgName=imgName;
    this.name=name;
    this.author=author;
    this.category=category;
    this.price=price;
    this.rating=rating;
    if(rating==undefined){
      this.rating="N/A";
    }
  }

  function addToBook(book){
    for(var i=0;i<book.length;i++){
      var container=$(".row");

      container.append('<div class="col-lg-3 col-md-4 col-sm-6">'+
        '<div class="book">'+
          '<p class="book-name"><strong><em>'+book[i].name+'</em></strong></p>'+
          '<a href="#" target="_blank">'+
            '<img class="book-image" src="images\\'+book[i].imgName+'.jpg" alt="">'+
          '</a>'+
          '<div class="book-info">'+
            '<p class="book-author"><strong><a href="#">- '+book[i].author+'</a></strong></p>'+
            '<div class="more-info">'+
              '<table class="book-table">'+             
                '<tr class="book-category"><th><small>Category:</small></th> <td><a href="#">'+book[i].category+'</a></td></p>'+
                '<tr class="book-price"><th><small>Price:</small></th> <td>$'+book[i].price+'</td></tr>'+
                '<p class="book-rating"><th><small>Rating:</small></th> <td>'+book[i].rating+'</td></tr>'+
              '</table>'+
              '<i class="fas fa-ellipsis-h"></i>'+
            '</div>'+
          '</div>'+
          '<a class="btn btn-outline-dark buy-btn">Buy</a>'+
        '</div>'+
      '</div>'
      );
    }
  }
  // creating books:-
  var book=[];
  book[0]=new Book("IMG_20200515_092520833","A Brief History Of Time",
  "Stephen Hawkings","Science",2.8,4.7);
    
  book[1]=new Book("IMG_20200515_092536600","Emotional Intelligence",
  "Daniel Goleman","Science",4.3,4.5);

  book[2]=new Book("IMG_20200515_092621282","Rich Dad Poor Dad",
  "Robert T. Kiyosaki","Finance",3.8,4.5);

  book[3]=new Book("IMG_20200515_092630377","The Argumentative Indian",
  "Amartya Sen","Philosophy",3.8,3.6);

  book[4]=new Book("IMG_20200515_092707987","Mastering C++",
  "K R Venugopal","Computer",4.4);  
  
  book[5]=new Book("IMG_20200515_092720984","Programming With Java",
  "E Balagurusamy","Computer",4.7);
  
  book[6]=new Book("IMG_20200515_092737228","Head First Java",
  "Kathy Sierra","Computer",9.6,4.3);
  
  book[7]=new Book("IMG_20200515_092802870","The Art Of War",
  "Sun Tzu","Warfare",2.2,4.7);
  
  book[8]=new Book("IMG_20200515_092817740","Ignited Minds",
  "A P J AbdulKalam","Autobiography",2.9,4.0);

  book[8]=new Book("IMG_20200515_092826877","Six Easy Pieces",
  "Richard P. Feynman","Science",3.2,4.0);

  book[9]=new Book("IMG_20200515_092836048","Six Not-So Easy Pieces",
  "Richard P. Feynman","Science",3.7,4.2);

  book[10]=new Book("IMG_20200515_092900088","God Created The Integers",
  "Stephen Hawkings","Mathematics",7.5,5);

  book[11]=new Book("IMG_20200515_092910296","There Is No God",
  "Kushwant Singh","Philosophy",2.7);

  book[12]=new Book("IMG_20200515_092928289","Let Us C",
  "Yashvant Kanetkar","Computer",3.1);

  book[13]=new Book("IMG_20200515_093008805","Oxford Dictionary",
  "Oxford","Dictionary",12.5,5.0);

  book[14]=new Book("IMG_20200515_093056400","Begining JavaScript",
  "Paul Jeremy","Computer",5.3,3.9);

  book[15]=new  Book("IMG_20200515_093130408","Data Structures Through C",
  "G S Baluja","Computer",6.2,4.6);

  book[17]=new Book("IMG_20200515_093302248","My Life And Work",
  "Henry Ford","Autobiography",3.7,3.6);

  book[18]=new Book("IMG_20200515_093314602","7 Habbits Of Highly Effective People",
  "Stephen R. Covey","PersonalDevelopment",10.8,5);

  book[19]=new Book("IMG_20200515_093334327","The Power",
  "Rhonda Byrne","Philosophy",7.2);

  book[20]=new Book("IMG_20200515_093343808","Jonathan Livigston Seagull",
  "Richard Bach","Fable",2.6,4.6);

  book[21]=new Book("IMG_20200515_093413848","Cash Flow Quadrant",
  "RobertT.Kyosaki","Finance",7.1,4.5);


  $(document).on("click",".more-info",function(e){
    console.log(e.currentTarget);
    $(".book-table").toggleClass("showBook-table");
  });

  // adding book array to .book in div tag
  addToBook(book);

  
