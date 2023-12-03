//1 Desafio Entregable de Backend

class ProductManager {
    //Variable estatica. Recuerden que esta le pertenece a al clase. 
    static ultId = 0;


    //Desarrollamos  el constructor con el elemento products, el cual será un array vacio. 
    constructor() {
        this.products = [];
    }

    //Métodos: 

    addProduct(title, description, price, thumbnail, code, stock) {

        //Tenemos que hacer algunas validaciones que nos pide la consigna: 
        
        //Validamos que se agregaron todos los campos: 
        if(!title || !description || !price || !thumbnail|| !code || !stock){
            console.log("Todos los campos son obligatorios.Asegurese de completar todos"); 
            return;
        }

        //Validamos que el código sea único: 
        if(this.products.some(item => item.code === code)){
            console.log("El codigo debe ser unico.Ingrese un codigo distinto a los existentes.");
            return;
        }

        //Creamos un nuevo objeto con todos estos datos: 

        const newProduct = {
            id: ++ProductManager.ultId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        //Lo agrego al array: 

        this.products.push(newProduct);

    }

    getProducts() {
        console.log(this.products);
    }

    getProductById(id) {
        const product = this.products.find(item => item.id === id);

        if(!product) {
            console.log("Producto no encontrado.Revise el id ingresado en la consulta");
        } else {
            console.log("El id consutlado es el siguiente: ", product);
        }
        
    }


}



//testing: 

//1) Se creará una instancia de la clase “ProductManager”

const manager = new ProductManager();

//2) Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []

manager.getProducts();

//3) Se llamará al método “addProduct” con los campos:
//title: “producto prueba”
//description:”Este es un producto prueba”
//price:200,
//thumbnail:”Sin imagen”
//code:”abc123”,
//stock:25

manager.addProduct("producto prueba", "este es un producto prueba", 200, "sin imagen", "abc123", 25);


//4) El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE


manager.addProduct("guitarra", "electrica", 500, "sin imagen", "abc124", 50);


manager.addProduct("guitarra", "criolla", 200, "sin imagen", "abc125", 50);

//5)Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado

manager.getProducts();


//6) Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.

manager.addProduct("guitarra", "criolla", 200, "sin imagen", "abc125", 50);

//7) Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo

manager.getProductById(2);
manager.getProductById(50);


