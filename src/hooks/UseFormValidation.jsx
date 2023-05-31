
export const UseFormValidation = (formDetails) => {
    let error = {}
    if(formDetails.username === "" || !formDetails.username){
        error.username = 'username must not be empty'
    }
    if(formDetails.password === "" || !formDetails.password){
        error.password = 'password cannot be empty'
    }
    if(formDetails.password.length < 4){
        error.password = 'password length too short'
    }
    
  return error
}

