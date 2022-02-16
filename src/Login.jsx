import React, {Component} from "react"

export default class Login extends Component{

   constructor(props){
      super(props);
      this.state={
         email: "",
         password:"",
         message:"" 
      }
   }
   render(){
      return(
      <React.Fragment>
        <div className="col-lg-9">
           <h4 className="m-1 p-2 border-bottom">Login</h4>
           <div className="form-group form-row">
              <label className="col-lg-4">Email</label>
              <input type="text"  className="form-control" value ={this.state.email}  onChange={(event)=> {
                 this.setState({email:event.target.value});
                 }} /> 
           </div>
           <div className="form-group form-row">
              <label className="col-lg-4">Password</label>
              <input type="password"  className="form-control" value ={this.state.password} onChange={(event)=> {
                 this.setState({password:event.target.value});
              }}
            /> 
           </div>
            <div className="text-right">
                  <p>{this.state.message}</p>
                 <button className="btn btn-primary" onClick={this.onLoginClick}>
                    Login
                 </button>    
            </div>
        </div>
      </React.Fragment>
      )}  

   onLoginClick=  async() =>{
      console.log(this.state);

      var response = await fetch(`http://localhost:3000/users?email=${this.state.email}&password=${this.state.password}`, {method:"GET"});

      var body = await response.json();

      console.log(body);

      if(body.length > 0){
         this.setState({
            message:(<span className="text-success">Sucessful logged-in</span>)
         })  
      }else{
         this.setState({
            message:(<span className="text-danger">invalid login,please try again</span>)
         })
      }
   }
}