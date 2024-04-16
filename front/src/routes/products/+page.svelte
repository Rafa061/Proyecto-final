<script>
    export let data;
    let {products} = data;
</script>

<div class="container">
    <table>
        <thead>
            <tr>
                <th>CODIGO</th>
                <th>NOMBRE</th>
                <th>PRECIO</th>
                <th>ESTATUS</th>
            </tr>
        </thead>
        <tbody>
            {#each products as product}
            <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    {#if product.status == 'active'}
                        ✔
                    {:else }
                        💥
                    {/if}
                </td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>

<div class="add-product-btn">
    <a href="/products/add">
        <button>Añadir un producto</button>
    </a>
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        text-align: center;
    }

    th, td {
        border: 1px solid #ddd;
        padding: 8px;
    }

    th {
        background-color: #f2f2f2;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    tr:hover {
        background-color: #ddd;
    }

    .add-product-btn {
        margin-top: 20px;
        text-align: center;
    }

    .add-product-btn button {
        padding: 10px 20px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .add-product-btn button:hover {
        background-color: #0056b3;
    }
</style>

