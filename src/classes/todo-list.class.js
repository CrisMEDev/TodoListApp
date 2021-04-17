export class TodoList{

    constructor(){

        this.todos = [];

    }

    nuevoTodo( todo ){
        this.todos.push( todo );
    }

    eliminarTodo( idTodo ){
        
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