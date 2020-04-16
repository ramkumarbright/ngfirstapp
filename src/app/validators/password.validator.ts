import {FormGroup  } from '@angular/forms';



 function getInvalidFormatted(errorMessage:string){
    return { invalid: true, error:errorMessage }     
    }

export function PasswordMatch(controlName: string, matchingControlName: string,errorMessage:string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.invalid) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors(getInvalidFormatted(errorMessage));
        } else {
            matchingControl.setErrors(null);
        }
    }
}


export function ValidatePhone(controlName: string){
    return(formGroup: FormGroup)=>{

        const control = formGroup.controls[controlName];

        if (control.errors && !control.errors.invalid) {
            // return if another validator has already found an error on the matchingControl
            return;
        }


      

    }
}