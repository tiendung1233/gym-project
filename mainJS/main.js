document.addEventListener("DOMContentLoaded",function(){


    var nut = document.querySelectorAll('div.nut ul li');
    var slides = document.querySelectorAll('div.slide div');
    for(var i = 0 ; i < nut.length; i++){
    nut[i].addEventListener('click',function(){
        var nutnay = this;
        var vitrislide = 0;
        console.log(nutnay.previousElementSibling);
        for(var i = 0;nutnay = nutnay.previousElementSibling; vitrislide++){
        
        }
        for(var i = 0; i < slides.length; i++){
            slides[i].classList.remove('ra');
        }
        for(var i = 0; i < slides.length; i++){
            slides[vitrislide].classList.add('ra');
        }
    })
    }
     
        auto();
        function auto(){
        var thoigian = setInterval(function(){
            var slide = document.querySelector('div.slide div.ra');
            var vitrislide = 0;
            for(var i = 0 ; slide = slide.previousElementSibling ; vitrislide ++){
            }
            for(var i = 0 ; i < slides.length; i++){
                slides[i].classList.remove('ra');
            }
            if(vitrislide == slides.length - 1){
                slides[0].classList.add('ra');
                   
            }
            else{
            slides[vitrislide].nextElementSibling.classList.add('ra');
            
        }
        },2000)
        
        for(var i = 0; i < 3; i++){
            nut[i].addEventListener('click',function () {
                clearInterval(thoigian);
    
            })
        }
    }
     
    var x = setInterval(function(){
    console.log('dm');
    },1000);
     
    },false)


      // showLogin
      const logIn = document.querySelector('.js-header-login')
      const modal1 = document.querySelector('.js-modal-1')
      const modalClose1=document.querySelector('.js-modal-close-1')
      const modalClose2=document.querySelector('.js-modal-close-2')

      function showModal1(){

          modal1.classList.add('open')
      }
      logIn.addEventListener('click',showModal1)
          
      // go bo close
      function hideModal1(){
          modal1.classList.remove('open')
      }
      // Khi người dùng nhấp vào bất kỳ đâu bên ngoài phương thức, hãy đóng nó
      window.onclick = function(event1) {
          if (event1.target == modal1 || event.target == modal2) {
              modal1.classList.remove('open')
              
              modal2.classList.remove('open')
          }
      }
      modalClose1.addEventListener('click',hideModal1)
      var number