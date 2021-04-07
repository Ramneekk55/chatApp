import React from 'react';
//import Bg from "./wht.jpg";
import "./style.css";


class Todo extends React.Component 
{
    state={
            value:"",
            //todos:[],
            active:0,
            users:[
                { 
                    id:0,
                    header:"User1",
                    todos:["Hey User1"]
                },
                {
                    id:1,
                    header:"User2",
                    todos:["Hey User2"]
                },
                {
                    id:2,
                    header:"User3",
                    todos:["Hey User3"]
                },
                {
                    id:3,
                    header:"User4",
                    todos:["Hey User4"]
                }
            ]
}

    
    onDisplay =(event)=>{
        //const arr=["Ramneek","Kaur"]
         this.setState({active:event.target.value})

         console.log(this.state.active);
    }
    onSubmitClick = ()=>
    {   const index=this.state.active;
        const msg = this.state.users;
        //msg[index].todos.push(this.state.value);
      
        msg[index].todos.push( this.state.value +"  "+new Date().toLocaleTimeString());
        console.log(msg[index].todos);
    this.setState({  value:"" })
    }


    onInputChange = (event)=>
    {
    
        this.setState({  
            value: event.target.value  
        })
    }

 
	render() {

		return (
            <div className="big">
            <div className="list1">
            <div className="usersList"><h3 className="txt">Users</h3></div>
        <br/>
            <ul>
            <li onClick={this.onDisplay} value={0}> <img src="https://www.w3schools.com/bootstrap4/img_avatar3.png" width="30px" height="30px" alt="User1"/> User1</li><hr/>
            <li onClick={this.onDisplay} value={1}> <img src="https://www.w3schools.com/bootstrap4/img_avatar3.png" width="30px" height="30px" alt="User2"/> User2 </li><hr/>
            <li onClick={this.onDisplay} value={2}> <img src="https://www.w3schools.com/bootstrap4/img_avatar3.png" width="30px" height="30px" alt="User3"/> User3 </li><hr/>
            <li onClick={this.onDisplay} value={3}> <img src="https://www.w3schools.com/bootstrap4/img_avatar3.png" width="30px" height="30px" alt="User4"/> User4 </li><hr/>

            </ul>
            </div>
			     
			    <div className="container">			     
                <div className="outer">
                <div className="input_container">
                  
                    <input onChange={this.onInputChange} 
                        className="textbox" 
                        placeholder="Input Text"
                        value={this.state.value}
                    />
                  
                    <button 
                        onClick={ this.onSubmitClick}
                        className="btn" 
                    > 
                       save
                    </button>
                    </div>
                </div>
             
                <div>

              <div className="usersList1">
            <h2 className="txt1"><img src="https://www.w3schools.com/bootstrap4/img_avatar3.png"width="30px" height="30px" alt="Users"/>        
             {this.state.users[this.state.active].header}</h2></div>
               
                     <ul className="ul1">
                        {
                        this.state.users[this.state.active].todos.map((text)=>
                            {
        return <li className="list"><span>{ text }</span></li>
                            })
                        }
                    </ul>
                </div>
            </div>
            </div>
		)
	}
}


export default Todo;









