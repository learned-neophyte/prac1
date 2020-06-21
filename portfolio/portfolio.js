var about=document.querySelector("#about h1").offsetTop,
thead=document.querySelector(".info th").offsetTop,
tbody=document.querySelector(".info tbody").offsetTop;

about-=500;
thead=thead+about+90;
tbody+=thead;
// tbody=566
var frstRow=tbody+50,
scndRow=frstRow+35,
thrdRow=scndRow+35;

// console.log(about);
// console.log(thead);
console.log("tbody: "+tbody);
console.log("tbody first row: "+frstRow);
console.log("second row: "+scndRow);
console.log("third row: "+thrdRow);





document.addEventListener("scroll",function(){
    // console.log(scrollY);
    
    if(scrollY>about){
        var $about=document.querySelector("#about h1");
        $about.classList.add("animate__animated");
        $about.classList.add("animate__flipInX");
        $about.style.opacity="1";
    }
    if(scrollY>thead){
        var $thead=document.querySelectorAll(".info th"),
        j=100;
        for(i=0;i<$thead.length;i++){
            $thead[i].classList.add("animate__animated");
            $thead[i].classList.add("animate__flipInX");
            $thead[i].style.animationDelay=j+"ms";
            $thead[i].style.opacity="1";
            j+=450;
        }
    }
    if(scrollY>frstRow){
        var $frstRow=document.querySelectorAll(".first-row td"),
        j=100;
        for(var i=$frstRow.length-1; i>=0; i--){
            $frstRow[i].classList.add("animate__flipInX");
            $frstRow[i].classList.add("animate__animated");
            $frstRow[i].style.animationDelay=j+"ms";
            $frstRow[i].style.opacity="1";
            j+=450;
        }
    }
});


