
export class Todo{

    static fromJson({ id, tarea, completado, creado }){ // Servirá para convertir un objeto que sea parecido a un todo en una instancia de Todo
        const tempTodo = new Todo( tarea );

        tempTodo.id = id;
        tempTodo.creado = creado;
        tempTodo.completado = completado;

        return tempTodo;
    }

    constructor( tarea ) {
        this.tarea      = tarea;
        this.id         = new Date().getTime();
        this.completado = false;
        this.creado     = new Date();
    }
}

