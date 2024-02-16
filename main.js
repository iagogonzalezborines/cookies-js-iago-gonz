document.getElementById('cookieForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const idioma = document.getElementById('idioma').value;
    const tema = document.getElementById('tema').value;
    const usuario = document.getElementById('usuario').value;
    const preferencia = document.getElementById('preferencia').value;

    
    document.cookie = `idioma=${idioma};expires=${getExpirationTime(10)}`;
    document.cookie = `tema=${tema};expires=${getExpirationTime(15)}`;
    document.cookie = `usuario=${usuario};expires=${getExpirationTime(20)}`;
    document.cookie = `preferencia=${preferencia}`;
    document.cookie = `ultima_visita=${new Date().toString()};expires=${getExpirationTime(20)}`;

<script>

</script>
    alert('Cookies guardadas exitosamente.');
});

function getExpirationTime(seconds) {
    const date = new Date();
    date.setTime(date.getTime() + (seconds * 1000));
    return date.toUTCString();
}

function getCookies() {
    const cookies = document.cookie.split(';');
    const cookieData = {};
    for (let cookie of cookies) {
        const [key, value] = cookie.trim().split('=');
        cookieData[key] = value;
    }
    return cookieData;
}

function displayCookies() {
    const cookies = getCookies();
    console.log("Cookies vigentes:");
    for (let key in cookies) {
        console.log(`${key}: ${cookies[key]}`);
    }
}


setInterval(displayCookies, 2000);