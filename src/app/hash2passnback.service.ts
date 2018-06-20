import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Hash2passnbackService {
  private hashword: string;
  private password: string;


  constructor() {
    this.hashword = '';
    this.password = '';
   }

  convertPassToHash(pass: string): string {
    this.hashword = this.encryptOrDecrypt(pass, true) + this.bufferAppend(Math.random()) + this.appendRandomString();
    console.log('Hashed Pass: ' + this.hashword);
    return this.hashword;
  }
  convertHashToPass(hash: string): string {
    const realHash = (hash.split('2e2').length === 3 ? hash.split('2e2') : hash.split('4t4'));
    this.password = this.encryptOrDecrypt(realHash[0], false);
    console.log('Original Pass: ' + this.password);
    return this.password;
  }

  private encryptOrDecrypt(pass: string, tOrF: boolean): string {
    const encryptOrDecryptNumber = (tOrF === true ? 11 : -11);
    let resultStr: string;

    for (let i = 0; i < pass.length; i++) {
      resultStr += pass.charAt(i) + encryptOrDecryptNumber;
    }

    return resultStr;
  }

  private appendRandomString(): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;

  }

  private bufferAppend(numberChoice: number): string {
    if (numberChoice === 0) {
      return '2e2';
    } else {
      return '4t4';
    }
  }
}
