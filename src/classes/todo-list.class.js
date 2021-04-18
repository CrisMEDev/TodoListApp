import { Todo } from "./todo.class";

export class TodoList{

    constructor(){

        // this.todos = [];
        this.cargarLocalStorage();

    }

    nuevoTodo( todo ){
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    eliminarTodo( idTodo ){

        this.todos = this.todos.filter( todo => todo.id != idTodo );  // idTodo es un num por eso se usa solo un =
        this.guardarLocalStorage();
        
    }

    toggleCompletado( idTodo ){

        for ( const todo of this.todos ){
            if ( todo.id == idTodo ){                                // idTodo es num por eso se usa solo doble ==
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
            }
            break;
        }

    }

    borrarTodosCompletados(){
        this.todos = this.todos.filter( todo => !todo.completado );     // Se regresan todos los todos no completados
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify(this.todos) );      // Almacena una key llamada todo con la lista de todos
                                                                        // como un JSON string

    }

    cargarLocalStorage(){

        if ( localStorage.getItem('todo') ){

            this.todos = JSON.parse( localStorage.getItem('todo') );    // Convierte el json string de los todos a objetos
                                                                        // pero son instancias de la clase Todo
            // console.log( 'cargarLS', this.todos );

        } else {
            this.todos = [];
        }


        // this.todos = this.todos.map( obj => Todo.fromJson(obj) );       // Convierte los obj del local storage a instancias Todo
        // La lina anterior es lo mismo que la siguiente
        this.todos = this.todos.map( Todo.fromJson );

    }

}