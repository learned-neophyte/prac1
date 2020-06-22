var about=document.querySelector("#about h1").offsetTop,
thead=document.querySelector(".info th").offsetTop,
tbody=document.querySelector(".info tbody").offsetTop,
frstRow=tbody,
scndRow=frstRow,
thrdRow=scndRow;

if(window.innerWidth<450){
    console.log(window.innerWidth);  
    about+=90;
    thead=thead+about+60;
    tbody+=thead;
    frstRow=tbody+50;
    scndRow=frstRow+35;
    thrdRow=scndRow+35;
    
    console.log("about<450: "+about);
    console.log("thead<450: "+thead);
    console.log("tbody<450: "+tbody);
    console.log("tbody frstRow<450: "+frstRow);
    console.log("scndRow<450: "+scndRow);
    console.log("thrdRow<450: "+thrdRow);
}
else if(window.innerWidth>=450){
    console.log(window.innerWidth);  
    about+=250;
    thead=thead+about+100;
    tbody+=thead;
    frstRow=tbody+50;
    scndRow=frstRow+35;
    thrdRow=scndRow+35;

    console.log("about>450: "+about);
    console.log("thead>450: "+thead);
    console.log("tbody>450: "+tbody);
    console.log("tbody frstRow>450: "+frstRow);
    console.log("scndRow>450: "+scndRow);
    console.log("thrdRow>450: "+thrdRow);
}



document.addEventListener("scroll",function(){
    // console.log(scrollY);
    
    if(scrollY>about){
        var $about=document.querySelector("#about h1"),
        j=0;

        $about.classList.add("animate__animated");
        $about.classList.add("animate__fadeInUp");
        $about.style.animationDelay=j+"ms";
        $about.style.opacity="1";
    }

    if(scrollY>thead){
        var $thead=document.querySelectorAll(".info th"),
        j=200;
        for(i=0;i<$thead.length;i++){
            $thead[i].classList.add("animate__animated");
            $thead[i].classList.add("animate__fadeInUp");
            $thead[i].style.animationDelay=j+"ms";
            $thead[i].style.opacity="1";
            j+=450;
        }
    }

    if(scrollY>frstRow){
        var $frstRow=document.querySelectorAll(".first-row td"),
        j=400;
        for(var i=0; i<$frstRow.length; i++){
            $frstRow[i].classList.add("animate__fadeInUp");
            $frstRow[i].classList.add("animate__animated");
            $frstRow[i].style.animationDelay=j+"ms";
            $frstRow[i].style.opacity="1";
            j+=450;
        }
    }

    if(scrollY>scndRow){
        var $scndRow=document.querySelectorAll(".second-row td"),
        j=600;
        for(var i=0;i<$scndRow.length;i++){
            $scndRow[i].classList.add("animate__animated");
            $scndRow[i].classList.add("animate__fadeInUp");
            $scndRow[i].style.animationDelay=j+"ms";
            $scndRow[i].style.opacity="1";
            j+=450;
        }
    }

    if(scrollY>thrdRow){
        var $thrdRow=document.querySelectorAll(".third-row td"),
        j=700;
        for(var i=0;i<$thrdRow.length;i++){
            $thrdRow[i].classList.add("animate__animated");
            $thrdRow[i].classList.add("animate__fadeInUp");
            $thrdRow[i].style.animationDelay=j+"ms";
            $thrdRow[i].style.opacity="1";
            j+=450;
        }

    }
});


