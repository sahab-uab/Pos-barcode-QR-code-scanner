
let mode = 'on'

function modeBtn() {
    if (mode == 'on') {
        document.getElementById('cameraBtn').style.display = 'block'
        document.getElementById('modeBtn').classList.remove('btn-danger')
        document.getElementById('modeBtn').classList.add('btn-success')
        document.getElementById('modeBtn').innerText = 'scan mode on'
        mode = 'off'
    } else {
        document.getElementById('cameraBtn').style.display = 'none'
        document.getElementById('modeBtn').classList.remove('btn-success')
        document.getElementById('modeBtn').classList.add('btn-danger')
        document.getElementById('modeBtn').innerText = 'scan mode Off'
        mode = 'on'
    }
}



// scenning
var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 250 }
);

function scening() {
    let code = document.getElementById('code')
    let exampleModal = document.getElementById('exampleModal')

    function onScanSuccess(decodedText) {
        code.value = decodedText
        html5QrcodeScanner.clear();

        var modal = bootstrap.Modal.getInstance(exampleModal)
        modal.hide();

    }

    html5QrcodeScanner.render(onScanSuccess);
}

function stopScening() {
    html5QrcodeScanner.clear();
}