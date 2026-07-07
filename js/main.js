const ctx = document.getElementById('salesChart');

if (ctx) {
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Monthly Sales',
                data: [120, 150, 180, 210, 250, 300],
                borderWidth: 3,
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

const categoryCtx = document.getElementById('categoryChart');

if (categoryCtx) {
    new Chart(categoryCtx, {
        type: 'doughnut',
        data: {
            labels: [
                'Bread',
                'Donut',
                'Cake',
                'Cookies',
                'Pastry'
            ],
            datasets: [{
                data: [35, 25, 20, 12, 8]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function showNotif(){

alert(
`Notifications

🔴 Butter stock below reorder point

🟠 Supplier B delayed 2 days

🟢 Forecast updated`
);

}

function adminProfile(){

alert(
`BakeFlow

Administrator

Role : Supply Chain Manager`
);

}