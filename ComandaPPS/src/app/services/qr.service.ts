import { Injectable } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { database } from 'firebase-admin';

@Injectable({
  providedIn: 'root'
})
export class QRService {

  constructor(private barcodeScanner: BarcodeScanner) {
  }

  async scan(){
    return await this.barcodeScanner.scan({showTorchButton: true,formats:'QR_CODE,PDF_417', resultDisplayDuration: 0});
 }

  async scanDNI(){
    let scannedData = await this.barcodeScanner.scan({showTorchButton: true,formats:'QR_CODE,PDF_417', resultDisplayDuration: 0});

    if(scannedData.text)
    {
      if(scannedData.text.includes('@'))
      {
        let data = scannedData.text.split('@');

          let digitosCUIL = data[8];
          let cuil = digitosCUIL[0] + digitosCUIL[1] + data[4] + digitosCUIL[2];

          return {
            dni: data[4].trim(),
            nombre: data[2].trim(),
            apellido: data[1].trim(),
            cuil: cuil.trim(),
          };
      }
    }
    return null;
  }

  generateQR(mesa: any){
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, mesa.numero)
    .then(data =>{
    });

  }
}
