import {Component} from 'react';

class ToDo extends Component{

    constructor(){
        super();
        this.state = {
            text: "",
            todo:[]
        }
    }

    render(){
        //let text = this.state.text
        //let todo = this.state.todo
        let {text,todo} = this.state
        

        let handleChange = (event)=>{
            this.setState({text:event.target.value})

        }

        let handleClick = ()=>{
            this.setState({
                todo:[...todo,text]
            })
        }

        let handleUpdate = (index)=>{
            let updatedText = prompt("Enter a new To Do")
            let filterTodo = todo.map((element,i)=>{
                if(i==index){
                    return updatedText;
                }
                return element
            })

            this.setState({
                todo:filterTodo
            })
        }

        let handleDelete = (index) => {
            let deletedData = todo.filter((element,i) => i !== index)
            this.setState({
                todo:deletedData
            })
        }
        return(
            <>
                <div className='todo'>
                    <h1 className='head'>To-Do-List</h1>
                    <input type='text' className='TEXT' placeholder='ENTER NEW TEXT' onChange={handleChange}/>
                    <button onClick={handleClick}>ADD TO DO</button>
                </div>

                <div>
                    {todo.map(
                        (element,i)=>(
                            <div key={i}>
                                <p>{element}</p>
                                <button onClick={()=> handleUpdate(i)}>Update Todo</button>
                                <button onClick={()=> handleDelete(i)}>Delete Todo</button>
                            </div>

                        )
                    )}
                </div>
            </>
        )
    }
}

export default ToDo
