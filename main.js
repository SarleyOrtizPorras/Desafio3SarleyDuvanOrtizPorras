class Productmanager {
    constructor(){
        this.products = [];
    }

    static id = 0;

    addProduct(title, description, price, image, code, stock) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].code === code) {
                console.log(`El codigo ${code} esta repetido`);
                break;
            }
        }

        const newProduct = {
            title, 
            description, 
            price, 
            image, 
            code, 
            stock, 
        };

        if (!Object.values(newProduct).includes(undefined)) {
            Productmanager.id++ ;
            this.products.push({
                ...newProduct,
                id: Productmanager.id, 
            });
        } else {
            console.log("Todos los campos son requeridos");
        }
    }

    getProduct() {
        return this.products;
    }

    existe(id) {
        return this.products.find((producto) => producto.id === id);
    }

    getProductById(id) {
        !this.existe(id) ? console.log("Not Found") : console.log(this.existe(id));
    }
}

//Arreglo Vacio = Primera llamada
const productos = new Productmanager();
//Agregamos Producto
console.log(productos.getProduct());

productos.addProduct("Producto1", "Esteesunproductoprueba1", 200, "imagen1", "abc123", 25);
productos.addProduct("Producto2", "Esteesunproductoprueba2", 200, "imagen2", "abc124");


//Arreglo con producto = Segunda llamada
console.log(productos.getProduct());

//Repetido:
productos.addProduct("Producto3", "Esteesunproductoprueba3", 200, "imagen3", "abc124", 27);

//Busqueda de productos por ID:
productos.getProductById(2);

//Busqueda por ID no encontrado:
productos.getProductById(3);

//Alumno: Sarley Duvan Ortiz Porras
//Backend: Desafio 1