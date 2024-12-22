// script.js
function performOperation() {
    // Ambil input dari matriks A
    const a11 = parseFloat(document.getElementById('a11').value);
    const a12 = parseFloat(document.getElementById('a12').value);
    const a21 = parseFloat(document.getElementById('a21').value);
    const a22 = parseFloat(document.getElementById('a22').value);

    // Ambil input dari matriks B
    const b11 = parseFloat(document.getElementById('b11').value);
    const b12 = parseFloat(document.getElementById('b12').value);
    const b21 = parseFloat(document.getElementById('b21').value);
    const b22 = parseFloat(document.getElementById('b22').value);

    // Ambil operasi yang dipilih
    const operation = document.getElementById('operationSelect').value;

    // Validasi input
    if (isNaN(a11) || isNaN(a12) || isNaN(a21) || isNaN(a22) || isNaN(b11) || isNaN(b12) || isNaN(b21) || isNaN(b22)) {
        document.getElementById('result').textContent = 'Harap masukkan semua angka.';
        return;
    }

    // Kalkulasi hasil sesuai dengan operasi yang dipilih
    let resultMatrix;

    switch (operation) {
        case '+':
            resultMatrix = [
                [a11 + b11, a12 + b12],
                [a21 + b21, a22 + b22]
            ];
            break;
        case '-':
            resultMatrix = [
                [a11 - b11, a12 - b12],
                [a21 - b21, a22 - b22]
            ];
            break;
        case '*':
            resultMatrix = [
                [a11 * b11 + a12 * b21, a11 * b12 + a12 * b22],
                [a21 * b11 + a22 * b21, a21 * b12 + a22 * b22]
            ];
            break;
        case '/':
            // Pembagian matriks tidak langsung, jadi ini hanya contoh sederhana pembagian skalar
            const scalarB11 = b11 !== 0 ? 1 / b11 : NaN;
            const scalarB12 = b12 !== 0 ? 1 / b12 : NaN;
            resultMatrix = [
                [a11 * scalarB11, a12 * scalarB12],
                [a21 * scalarB11, a22 * scalarB12]
            ];
            break;
        default:
            resultMatrix = [];
            break;
    }

    // Tampilkan hasil matriks
    if (resultMatrix.length > 0) {
        document.getElementById('result').innerHTML = `
            Operasi Matriks:
            <div>
                [ ${resultMatrix[0][0]} , ${resultMatrix[0][1]} ]<br>
                [ ${resultMatrix[1][0]} , ${resultMatrix[1][1]} ]
            </div>
        `;
    } else {
        document.getElementById('result').textContent = 'Operasi tidak valid.';
    }
}
