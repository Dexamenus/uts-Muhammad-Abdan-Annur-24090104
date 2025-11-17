// Menjalankan script setelah DOM selesai dimuat
document.addEventListener('DOMContentLoaded', () => {

    // --- LOGIKA HALAMAN LOGIN (index.html) ---
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const errorMessage = document.getElementById('errorMessage');

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            const email = emailInput.value;
            const password = passwordInput.value; 

            if (email === '' || password === '') {
                errorMessage.textContent = 'Email dan Password (NIM) tidak boleh kosong.';
            } else if (email !== 'abdan@gmail.com' || password !== '24090104') {
                errorMessage.textContent = 'Email atau Password (NIM) salah.';
            } else {
                errorMessage.textContent = '';
                alert('Login berhasil!');
                window.location.href = 'dashboard.html';
            }
        });
    }

    // --- LOGIKA HALAMAN DASHBOARD (dashboard.html) ---
    const totalProductsEl = document.getElementById('totalProducts');
    
    if (totalProductsEl) {
        const summary = {
            totalProducts: 250,
            totalSales: 167,
            totalRevenue: 2300000
        };

        document.getElementById('totalProducts').textContent = summary.totalProducts;
        document.getElementById('totalSales').textContent = summary.totalSales;
        document.getElementById('totalRevenue').textContent = `Rp ${summary.totalRevenue.toLocaleString('id-ID')}`;

        document.getElementById('viewProductsBtn').addEventListener('click', () => {
            window.location.href = 'products.html';
        });
    }

    // --- LOGIKA HALAMAN PRODUK (products.html) ---
    const productTableBody = document.getElementById('productTableBody');
    
    if (productTableBody) {
        const products = [
            { id: 1, name: "Kopi Gayo", price: 25000, stock: 50 },
            { id: 2, name: "Teh Hitam", price: 18000, stock: 30 },
            { id: 3, name: "Coklat Aceh", price: 30000, stock: 20 },
            { id: 4, name: "Kopi robusta", price: 22000, stock: 45 },
            { id: 5, name: "Teh Hijau", price: 19000, stock: 25 }
        ];

        const renderTable = () => {
            productTableBody.innerHTML = ''; 

            products.forEach((product, index) => {
                const row = productTableBody.insertRow();
                
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${product.name}</td>
                    <td>${product.price.toLocaleString('id-ID')}</td>
                    <td>${product.stock}</td>
                    <td class="action-buttons">
                        <button class="btn-edit" data-name="${product.name}">Edit</button>
                        <button class="btn-delete">Delete</button>
                    </td>
                `;
            });
        };

        productTableBody.addEventListener('click', (e) => {
            const target = e.target;
            
            if (target.classList.contains('btn-edit')) {
                const productName = target.dataset.name;
                alert(`Edit produk (${productName})`);
            }
            
            if (target.classList.contains('btn-delete')) {
                if (confirm('Yakin hapus produk ini?')) {
                    const row = target.closest('tr');
                    row.remove();
                }
            }
        });

        renderTable();
    }
});