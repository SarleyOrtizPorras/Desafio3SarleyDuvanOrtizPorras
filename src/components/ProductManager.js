import {promises as fs} from "fs"

export default class ProductManager {
    constructor(){
        this.patch = "./productos.txt"
        this.products = []
    }

    static id = 0

    addProduct = async (title, description, price, imagen, code, stock) => {

        ProductManager.id++
        let newProduct = {
            title,
            description,
            price,
            imagen,
            code,
            stock,
            id: ProductManager.id
        }

        this.products.push(newProduct)

        await fs.writeFile(this.patch, JSON.stringify(this.products));
    };

    readProducts = async () => {
        let respuesta = await fs.readFile(this.patch, "utf-8")
        return JSON.parse(respuesta)
    }

    getProduct = async () => {
        let respuesta2 = await this.readProducts()
        return console.log(respuesta2)
    }

    getProductById = async (id) => {
        let respuesta3 = await this.readProducts()
        if(!respuesta3.find(product => product.id === id)){
            console.log("Producto no Encontrado")
        } else {

        console.log(respuesta3.find(product => product.id === id))
        }
    };
    deleteProductsById = async (id) => {
        let respuesta3 = await this.readProducts();
        let productFilter = respuesta3.filter(products => products.id != id)
        await fs.writeFile(this.patch, JSON.stringify(productFilter));
        console.log("Producto Eliminado")
    };
    updateProducts = async (id, ...producto) => {
        await this.deleteProductsById(id);
        let producId = await this.readProducts()
        let productsModif =[{id, ...producto}, ...producId];
        await fs.writeFile(this.patch, JSON.stringify(productsModif));
    };
}

//const productos = new ProductManager

/*productos.addProduct("titulo1", "Description1", 1000, "imagen1", "abc123", 5);
productos.addProduct("titulo2", "Description2", 2000, "imagen2", "abc124", 10);
productos.addProduct("titulo3", "Description3", 3000, "imagen3", "abc125", 15);
productos.addProduct("titulo4", "Description4", 4000, "imagen4", "abc126", 20);
productos.addProduct("titulo5", "Description5", 5000, "imagen5", "abc127", 25);
productos.addProduct("titulo6", "Description6", 1000, "imagen6", "abc128", 30);
productos.addProduct("titulo7", "Description7", 1000, "imagen7", "abc129", 35);
productos.addProduct("titulo8", "Description8", 1000, "imagen8", "abc1210", 40);
productos.addProduct("titulo9", "Description9", 1000, "imagen9", "abc1211", 45);
productos.addProduct("titulo10", "Description10", 1000, "imagen10", "abc1212", 50);*/

//productos.getProduct();

 /*productos.updateProducts({
    title: 'titulo3',
    description: 'Description3',
    price: 5600,
    imagen: 'imagen3',
    code: 'abc125',
    stock: 15,
    id: 3
})*/

//SONA DE ACTIVAR TODOS LOS EJERCICIOS:

//productos.deleteProductsById(2)

//productos.getProductById(6)




/*
BACKEND: DESAFIO 2
SARLEY DUVAN ORTIZ PORRAS
CODER HOUSE
*/