import { Injectable } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Injectable({
  providedIn: 'root'
})
export class QRService {

  dni: string;

  constructor(private barcodeScanner: BarcodeScanner) {

  }

  scan(){
    this.barcodeScanner.scan({showTorchButton: true,formats:'QR_CODE,PDF_417', resultDisplayDuration: 0}).then(barcodeData => {
      console.log('Scanned data: ' +  barcodeData.text);
     }).catch(err => {
         console.log('Error: ' + err);
     });
 }

  async scanDNI(){
    let scannedData = await this.barcodeScanner.scan({showTorchButton: true,formats:'QR_CODE,PDF_417', resultDisplayDuration: 0});

    if(scannedData.text)
    {
      console.log(scannedData.text);
      if(scannedData.text.includes('@'))
      {
        let dniArr = scannedData.text.split('@');
        let digitosCUIL = dniArr[8];
        let cuil = digitosCUIL[0] + digitosCUIL[1] + dniArr[4] + digitosCUIL[2];

        return {
          dni: dniArr[4],
          cuil: cuil
        };
      }
    }
    return null;
  }

  generateQR(){
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, 'caca')
    .then(data =>{
      console.log(data);
    });

  }
}
