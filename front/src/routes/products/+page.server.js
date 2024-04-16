import { PUBLIC_API_URL } from "$env/static/public";

export async function load() {
    try {
        const req = await fetch(`${PUBLIC_API_URL}/products`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        const data = await req.json();
        
        if (req.ok) {
            return {
                products: data 
            };
        } else {
            console.error('Error al cargar productos:', data);
            return {
                error: 'Error al cargar productos'
            };
        }
    } catch (error) {
        console.error('Error de red:', error);
        return {
            error: 'Error de red'
        };
    }
}


