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