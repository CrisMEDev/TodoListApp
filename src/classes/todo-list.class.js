export class TodoList{

    constructor(){

        this.todos = [];

    }

    nuevoTodo( todo ){
        this.todos.push( todo );
    }

    eliminarTodo( idTodo ){

        this.todos = this.todos.filter( todo => todo.id != idTodo )  // idTodo es un num por eso se usa solo un =
        
    }

    toggleCompletado( idTodo ){

        for ( const todo of this.todos ){
            if ( todo.id == idTodo ){                   // idTodo es num por eso se usa solo doble ==
                todo.completado = !todo.completado;
            }
            break;
        }

    }

    borrarTodosCompletados(){
        
    }

}