$(function(){

    const slideUl = $(".slide_ul");
    const prev = $("#prev");
    const next = $("#next");
    const slideList = document.querySelectorAll(".slide_ul li");
    const maxSlide = slideList.length;
    const qList = document.querySelectorAll(".quick_slide li"); 
    // const qList = $(".quick_slide li");
    const tabLi = document.querySelector(".tab-sub-li");
    const tabSubUl = document.querySelector(".tab-nav-subul");
    var iWidth = window.innerWidth;

    // tab-nav  ----- slideToggle 오류 ----- 이ㅏ럼니라ㅓㅣ라ㅓ히ㅏㅎㄷㄴ
    $("#tab_open").click(function(){
        if( $(".tab-nav-subul").hasClass("d-none") ){
            $(".tab-nav-subul").removeClass("d-none")
        }else{
            $(".tab-nav-subul").addClass("d-none")
        }

    })

    window.addEventListener('resize', ()=>{
        // console.log("브라우저 화면너비 : " + window.innerWidth);
        // console.log("브라우저 전체너비 : " + window.outerWidth);
        iWidth = window.innerWidth;
    });
    
    var time = 4000;            //슬라이드 시간 조정 - time
    // var autoSlideId = setInterval(autoSlide, time);
    // var count = 0;
    // function autoSlide(){
        
    //     if(count >= maxSlide-1) {count = 0}
    //     else{count++}

    //     for(let i = 0; i < 7; i++){
    //         qList[i].classList.remove("on");
    //     }
    //     qList[count].classList.add("on");
    //     console.log(count);
    //     var movePoint = -(count * (iWidth-17));
    //     slideUl.css("margin-left",movePoint+'px');
    // }

    // PREV, NEXT 버튼 클릭시 슬라이드 이동
    prev.on("click", ()=>{
        console.log("prev click");
        clearInterval(autoSlideId);
        if(count <= 0){
            count = maxSlide-1;
        }else{count--}
        console.log(count);
        for(let i = 0; i < 7; i++){
            qList[i].classList.remove("on");
        }
        qList[count].classList.add("on");
        var movePoint = -(count * (iWidth-17));
        slideUl.css("margin-left",movePoint+'px');
    })
    next.on("click", ()=>{
        console.log("next click");
        clearInterval(autoSlideId);
        if(count >= maxSlide-1){
            count = 0
        }else{count++}
        console.log(count);
        for(let i = 0; i < 7; i++){
            qList[i].classList.remove("on");
        }
        qList[count].classList.add("on");
        var movePoint = -(count * (iWidth-17));
        slideUl.css("margin-left",movePoint+'px');
    })

    // qList 누르면 해당 슬라이드로 이동
    
    $(".quick_slide li:nth-child(1)").on("click", ()=>{
        clearInterval(autoSlideId);
        count=0;
        qList[0].classList.remove("on");qList[1].classList.remove("on");qList[2].classList.remove("on");qList[3].classList.remove("on");qList[4].classList.remove("on");qList[5].classList.remove("on");qList[6].classList.remove("on");
        qList[count].classList.add("on");
        var movePoint = -(count * (iWidth-17));
        slideUl.css("margin-left",movePoint+'px');
        autoSlideId = setInterval(autoSlide, time);
    })
    $(".quick_slide li:nth-child(2)").on("click", ()=>{
        clearInterval(autoSlideId);
        count=1;
        qList[0].classList.remove("on");qList[1].classList.remove("on");qList[2].classList.remove("on");qList[3].classList.remove("on");qList[4].classList.remove("on");qList[5].classList.remove("on");qList[6].classList.remove("on");
        qList[count].classList.add("on");
        var movePoint = -(count * (iWidth-17));
        slideUl.css("margin-left",movePoint+'px');
        autoSlideId = setInterval(autoSlide, time);
    })
    $(".quick_slide li:nth-child(3)").on("click", ()=>{
        clearInterval(autoSlideId);
        count=2;
        qList[0].classList.remove("on");qList[1].classList.remove("on");qList[2].classList.remove("on");qList[3].classList.remove("on");qList[4].classList.remove("on");qList[5].classList.remove("on");qList[6].classList.remove("on");
        qList[count].classList.add("on");
        var movePoint = -(count * (iWidth-17));
        slideUl.css("margin-left",movePoint+'px');
        autoSlideId = setInterval(autoSlide, time);
    })
    $(".quick_slide li:nth-child(4)").on("click", ()=>{
        clearInterval(autoSlideId);
        count=3;
        qList[0].classList.remove("on");qList[1].classList.remove("on");qList[2].classList.remove("on");qList[3].classList.remove("on");qList[4].classList.remove("on");qList[5].classList.remove("on");qList[6].classList.remove("on");
        qList[count].classList.add("on");
        var movePoint = -(count * (iWidth-17));
        slideUl.css("margin-left",movePoint+'px');
        autoSlideId = setInterval(autoSlide, time);
    })
    $(".quick_slide li:nth-child(5)").on("click", ()=>{
        clearInterval(autoSlideId);
        count=4;
        qList[0].classList.remove("on");qList[1].classList.remove("on");qList[2].classList.remove("on");qList[3].classList.remove("on");qList[4].classList.remove("on");qList[5].classList.remove("on");qList[6].classList.remove("on");
        qList[count].classList.add("on");
        var movePoint = -(count * (iWidth-17));
        slideUl.css("margin-left",movePoint+'px');
        autoSlideId = setInterval(autoSlide, time);
    })
    $(".quick_slide li:nth-child(6)").on("click", ()=>{
        clearInterval(autoSlideId);
        count=5;
        qList[0].classList.remove("on");qList[1].classList.remove("on");qList[2].classList.remove("on");qList[3].classList.remove("on");qList[4].classList.remove("on");qList[5].classList.remove("on");qList[6].classList.remove("on");
        qList[count].classList.add("on");
        var movePoint = -(count * (iWidth-17));
        slideUl.css("margin-left",movePoint+'px');
        autoSlideId = setInterval(autoSlide, time);
    })
    $(".quick_slide li:nth-child(7)").on("click", ()=>{
        clearInterval(autoSlideId);
        count=6;
        qList[0].classList.remove("on");qList[1].classList.remove("on");qList[2].classList.remove("on");qList[3].classList.remove("on");qList[4].classList.remove("on");qList[5].classList.remove("on");qList[6].classList.remove("on");
        qList[count].classList.add("on");
        var movePoint = -(count * (iWidth-17));
        slideUl.css("margin-left",movePoint+'px');
        autoSlideId = setInterval(autoSlide, time);
    })
    
    
  
    //마우스 올리면 공지사항/공시공고 View Switch
    const titleNotice = document.querySelector(".switch_title li:nth-child(1)");
    const titleDA = document.querySelector(".switch_title li:nth-child(2)");
    const notice = document.querySelector(".notice_notice");
    const da = document.querySelector(".notice_da");

    $(".switch_title").on("mousemove", e =>{
        if(e.target == titleNotice){
            titleDA.classList.remove("on");
            titleNotice.classList.add("on");
            notice.classList.remove("d-none");
            da.classList.add("d-none");
        }else if(e.target == titleDA){
            titleNotice.classList.remove("on");
            titleDA.classList.add("on");
            da.classList.remove("d-none");
            notice.classList.add("d-none");
        }
    })
    
    // 마우스 올리면 sub 메뉴 display
    $(".gnb").on('mouseover', ()=>{
        $(".gnb-sub").removeClass("d-none");
        // $(".gnb1 ul").slideDown(200);
        $(".gnb-background").removeClass("d-none");
    })
    $(".gnb").on('mouseleave', ()=>{
        $(".gnb-sub").addClass("d-none");
        // $(".gnb1 ul").slideUp(200);
        $(".gnb-background").addClass("d-none");
    })

    // 이미지 로딩 lazy
    var lazyloadImages = document.querySelectorAll("ca-img");    
    var lazyloadThrottleTimeout;
  
    function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
    
    lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
        }, 20);
    }
  
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);

    

   

})








