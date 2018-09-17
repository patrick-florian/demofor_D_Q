import { AbstractControl, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';

export class UsernameValidators {

    // Needs to be static to be accesible
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0 ) {
            return { cannotContainSpace: true };
        } else {
            return null;
        }
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // console.log('waited for 2 seconds , validation ok');
                if (control.value !== 'admin') {
                    resolve({ shouldBeUnique: true });
                } else {
                    resolve(null);
                }
             }, 2000 );
        });

    }

}
