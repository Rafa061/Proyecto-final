<script>
    import { goto } from '$app/navigation';
  </script>
  
  <style>
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: Arial, sans-serif;
    }
  
    .title {
      font-size: 24px;
      margin-bottom: 20px;
    }
  
    .button {
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    .button:hover {
      background-color: #0056b3;
    }
  </style>
  
  <div class="container">
    <h1 class="title">Ver Productos</h1>
    <button class="button" on:click={() => goto('/products')}>
      Ve las mierdas que tienes
    </button>
  </div>
  