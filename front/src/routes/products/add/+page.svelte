<div class="container">
    <form method="POST" >
        <h2>Agregar Producto</h2>
        <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" name="name" id="name" required>
        </div>
        <div class="form-group">
            <label for="price">Precio:</label>
            <input type="number" name="price" id="price" required>
        </div>
        <div class="form-group">
            <label for="status">Estado:</label>
            <select name="status" id="status" required>
                <option value="active">Activo ✔</option>
                <option value="inactive">Inactivo 💥</option>
            </select>
        </div>
        <div class="form-group">
            <button type="submit">Guardar</button>
        </div>
        <div class="form-group">
            <a href="/products">
                <button type="button">Ver Productos</button>
            </a>
        </div>
    </form>
</div>



<style>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
}

form {
    width: 50%;
    max-width: 400px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
    padding: 20px;
}

h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
}

.form-group {
    margin-bottom: 20px;
}

label {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
}

input[type="text"],
input[type="number"],
select {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
}

button {
    background-color: #007bff;
    color: #fff;
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}
</style>
