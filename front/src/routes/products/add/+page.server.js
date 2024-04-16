import { PUBLIC_API_URL } from "$env/static/public";

export const actions = {
    default: async ({ request }) => {
        try {
            let formData = await request.formData();
            let data = Object.fromEntries(formData.entries());

            let response = await fetch(`${PUBLIC_API_URL}/products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                return {
                    status: 201, 
                    body: { message: 'Producto agregado correctamente' }
                };
            } else {
                return {
                    status: response.status,
                    body: { error: 'Error al agregar el producto' }
                };
            }
        } catch (error) {
            console.error('Error al agregar producto:', error);
            return {
                status: 500,
                body: { error: 'Error al agregar el producto' }
            };
        }
    }
};