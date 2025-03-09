// Contoh data pesanan
let orders = [
    { id: 1, user: "Player1", service: "Joki Level", status: "Pending" },
    { id: 2, user: "Player2", service: "Joki Robux", status: "Selesai" }
];

// Tampilkan pesanan di admin panel
function loadOrders() {
    let orderTable = document.getElementById("order-list");
    orderTable.innerHTML = "";
    orders.forEach(order => {
        orderTable.innerHTML += `
            <tr>
                <td>${order.id}</td>
                <td>${order.user}</td>
                <td>${order.service}</td>
                <td>${order.status}</td>
                <td><button onclick="updateStatus(${order.id})">Update</button></td>
            </tr>
        `;
    });
}

// Update status pesanan
function updateStatus(id) {
    orders.forEach(order => {
        if (order.id === id) {
            order.status = "Selesai";
        }
    });
    loadOrders();
}

window.onload = loadOrders;