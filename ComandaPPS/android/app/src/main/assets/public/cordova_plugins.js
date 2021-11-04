
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
          "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
          "pluginId": "phonegap-plugin-barcodescanner",
        "clobbers": [
          "cordova.plugins.barcodeScanner"
        ]
        },
      {
          "id": "cordova-plugin-nativeaudio.nativeaudio",
          "file": "plugins/cordova-plugin-nativeaudio/www/nativeaudio.js",
          "pluginId": "cordova-plugin-nativeaudio",
        "clobbers": [
          "window.plugins.NativeAudio"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-nativeaudio": "3.0.9",
      "cordova-plugin-vibration": "3.1.1",
      "phonegap-plugin-barcodescanner": "8.1.0"
    };
    // BOTTOM OF METADATA
    });
    