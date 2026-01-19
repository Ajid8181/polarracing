function submitOrder(){
const name=document.getElementById('buyer').value;
const service=document.getElementById('service').value;
if(!name) return;
const orders=JSON.parse(localStorage.getItem('orders')||'[]');
orders.push({name,service});
localStorage.setItem('orders',JSON.stringify(orders));
document.getElementById('orderResult').innerText='Order disimpan';
document.getElementById('orders').innerText=orders.length+' Order';
}