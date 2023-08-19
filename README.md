# js_input_modal

code snippet to use input modal 

Functions: 
showModal()
calling this function will append a modal in document root and return a promise of user object.
try {
        let user = await showModal();
        console.log(user);
        }catch (error){
            console.error(error.message);
        }  

showModal(user)
append a modal in document root with prefilled data (user object) and return a promise.

 try {
    let updateduser = await showModal(user);
    console.log(updateduser);
    }catch (error){
        console.error(error.message);
    }
