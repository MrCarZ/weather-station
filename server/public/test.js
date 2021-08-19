var socket = io();

const dataList = document.getElementById('weather-info');

socket.on('rasp-message', (data) => {
    const item = document.createElement('li');
    item.textContent = JSON.stringify(data);
    dataList.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});