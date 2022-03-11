const buttonRegister = document.querySelector("#button-register");
const buttonCloseForm = document.querySelector("form #close-form-button");
const registerForm = document.querySelector("#register-form");
let showForm = false;

buttonRegister.addEventListener('click' , (e)=> {
    toggleForm(e);


})

buttonCloseForm.addEventListener('click', (e)=>{
    toggleForm(e);

})


const toggleForm = (e) => {
    const classesRegisterForm = registerForm.classList;
    console.log(classesRegisterForm);
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
