import React,{Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup'
import * as ReactBootstrap from 'react-bootstrap'
class TodoList extends Component {
    constructor(){
        console.log('reset');
        super()
        this.state = {
            listOfTodos:[{status:'pending',value:'Eat'},
            {status:'pending',value:'Sleep'},
            {status:'pending',value:'Code'}],
            newTask : null
        }
        this.handleChange = this.handleChange.bind(this);
        this.AddToList = this.AddToList.bind(this);
        this.DeleteFromList = this.DeleteFromList.bind(this);

    }

    AddToList(event){
        event.preventDefault();
        const newitem = {status:'pending',value:this.state.newTask};
        this.setState({ 
            listOfTodos: [...this.state.listOfTodos,newitem],
            newTask :""
          });
    }

    DeleteFromList(event,idx){
        event.preventDefault();
        this.setState(prevState => ({
        listOfTodos: prevState.listOfTodos.filter((val,i) => i != idx )
       }));
     }
     MoveToDone(event,idx){
        event.preventDefault();
        let listOfTodosJson = JSON.parse(JSON.stringify(this.state.listOfTodos))
        listOfTodosJson[idx].status = "Done"
        this.setState({
            listOfTodos:listOfTodosJson 
        });
     }

    handleChange(event) {
        this.setState({newTask: event.target.value});
      }

    render(){
        return (
            <div className="">
                <p style={{ fontSize:17, color: 'white' }} >Todo list to keep me bussy </p>
              
                <Form inline onSubmit={this.AddToList}   style={{margin: '20px'}}  >
                    <Form.Control size="lg" value={ this.state.newTask } 
                    placeholder='Todo'

                    onChange={this.handleChange}></Form.Control>
                    <Button type="submit"  style={{margin: '5px'}}>Add</Button>
                </Form>

               
                <div>
                    <ListGroup >
                    { 
                    this.state.listOfTodos.map((element,idx)=>{
                        return <ListGroup.Item 
                        variant={element.status=='pending'?'warning':'info'} 
                        style={element.status=='Done'? { fontSize:15, color: 'black' , textDecorationLine:  'line-through' }:
                        { fontSize:15, color: 'black'}
                    }  key={idx}>   
                                    {element.value} 

                                    <Button className={element.status=='Done'? 'hidden' : ''}  onClick = {(e)=>this.MoveToDone(e,idx)}  style={{float: 'left' }} > Finish </Button>

                                    <Button onClick = {(e)=>this.DeleteFromList(e,idx)}  style={{float: 'right' }} > X </Button>
                                </ListGroup.Item>
                    })}
                </ListGroup>
                </div>
            </div>
        )
    }
}
export default TodoList