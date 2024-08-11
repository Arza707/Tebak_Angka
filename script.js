let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('submitBtn').addEventListener('click', function() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const message = document.getElementById('message');
    attempts++;

    const refreshButton = document.querySelector('.refresh-button');
        
    const refreshPage = () => {
        location.reload();
    }
    refreshButton.addEventListener('click', refreshPage)
    
    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        message.textContent = 'Masukkan angka yang valid antara 1 sampai 100.';
        message.style.color = 'red';
    } else if (userGuess < randomNumber) {
        message.textContent = 'Terlalu rendah, coba lagi!';
        message.style.color = 'orange';
    } else if (userGuess > randomNumber) {
        message.textContent = 'Terlalu tinggi, coba lagi!';
        message.style.color = 'orange';
    } else {
        message.textContent = `Selamat! Anda menebak dengan benar dalam ${attempts} percobaan.`;
        message.style.color = 'green';
        document.getElementById('submitBtn').disabled = true;
        
        
    }

    document.getElementById('attempts').textContent = `Jumlah Percobaan: ${attempts}`;
});
