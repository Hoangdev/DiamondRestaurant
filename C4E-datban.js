const name = document.getElementById('username');
const songuoi = document.getElementById('inputnumber');
const sdt = document.getElementById('inputsdt');
const form = document.getElementById('form');
const error = document.getElementById('error');
form.addEventListener('submit',(event) => {
    let back = [];
    event.preventDefault();
  if (name.value === '' || name.value == NaN) {
    error.innerText = 'Tên người đặt bàn không được để trống';
  } else if (songuoi.value < 2) {
    error.innerText = 'Đặt bàn từ 2 người';
  } else if (sdt.value === '' || sdt.value == NaN) {
    error.innerText = 'Nhập số điện thoại';
  } else {
    error.innerText = '';
    alert('Cảm ơn bạn đã đặt bàn');
  }
})
