import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  // changed to use bang operator to catch empty string on fields changed on form re-submission
  validateRegister(user){
    if(!user.name || !user.email || !user.username || !user.password){
      return false;
    }
    else {
      return true;
    }
  }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

}
