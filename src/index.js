const buttonRegister = document.querySelector("#button-register");
const buttonCloseForm = document.querySelector("form #close-form-button");
const registerForm = document.querySelector("#register-form");
let showForm = false;

window.onscroll = () => {
    scrollFunction();
};

buttonRegister.addEventListener('click' , (e)=> {
    toggleForm(e);


})

buttonCloseForm.addEventListener('click', (e)=>{
    toggleForm(e);

})

const scrollFunction = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector("header").classList.add('fixed', 'top-0' ,'left-0');
    } else {
      document.querySelector("header").classList.remove('fixed', 'top-0' , 'left-0');
    }
  }


const toggleForm = (e) => {
    const classesRegisterForm = registerForm.classList;
    showForm = !showForm;

    if(showForm === true){
        if(classesRegisterForm.contains('hidden')){
            classesRegisterForm.remove('hidden');

        }
    }else{
        if(!classesRegisterForm.contains('hidden')){
            classesRegisterForm.add('hidden');

        }
    }

}
