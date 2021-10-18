import { Injectable } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Injectable({
  providedIn: 'root'
})
export class QRService {

  dni: string;
  scaneando: boolean = false;

  constructor(private barcodeScanner: BarcodeScanner) {

  }

  scan(){
    this.barcodeScanner.scan({showTorchButton: true,formats:'QR_CODE,PDF_417', resultDisplayDuration: 0}).then(barcodeData => {
      console.log('Scanned data: ' +  barcodeData.text);
     }).catch(err => {
         console.log('Error: ' + err);
     });
 }

  scanDNI(){
    this.scaneando = true;
    this.barcodeScanner.scan({showTorchButton: true,formats:'QR_CODE,PDF_417', resultDisplayDuration: 0}).then(barcodeData => {
      if(barcodeData.text.includes('@'))
      {
        let dniArr = barcodeData.text.split('@');
        this.dni = dniArr[4];
        this.scaneando = false;
      }
     }).catch(err => {
         console.log('Error: ' + err);
     });
  }
}
