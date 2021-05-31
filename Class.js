export default class ScanScreen extends ReadableStreamDefaultController.Component {
    constructor(){
        super();
        this.state = {
            hasCameraPermission: null,
            scanned: false,
            scannedData:'',
            buttonState: 'normal'
        }
    }
}