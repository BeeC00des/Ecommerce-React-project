import React, {Component} from "react";


export default class CustomerList extends Component{
   state ={
      pageTitle: "Customers",
      customersCount: 5,
      customers:[
         {
          id:1,
          name:"Adeniyi Faith",
          phoneNumber: "290-294",
          address:{city:"netherLand"},
          photo:"https://picsum.photos/id/1010/60"
         },
         {
            id:2,
            name:"Moses Joel",
            phoneNumber: "294-545",
            address:{city:"amsterdam"},
            photo:"https://picsum.photos/id/1014/60"
         },
         {
            id:3,
            name:"Olaniyi bimpe",
            phoneNumber: "294-302",
            address:{city:"jordan"},
            photo:"https://picsum.photos/id/1011/60",
         },
         {
            id:4,
            name:"Victoria Johnson",
            phoneNumber: null,
            address:{city:"california"},
            photo:"https://picsum.photos/id/1013/60"
         },
         {
            id:5,
            name:"Peterson killy",
            phoneNumber: null,
            address:{city:null},
            photo:"https://picsum.photos/id/1015/60"
         }

      ],
   };
   render(){
      return <div>
         <h3 className="m-1 p-1">
            {this.state.pageTitle}
            <span className="badge badge-secondary m-2"> {this.state.customersCount} </span>
            <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
         </h3>
         <table className="table">
            <thead>
               <tr className="text-center">
                  <th>s/n</th>
                  <th>Photo</th>
                  <th>Customer Name</th>
                  <th>Phone number</th>
                  <th>City</th>
               </tr>
            </thead>
            <tbody>
              {this.getCustomerRow()}
            </tbody>
         </table>    
      </div>
   }
   
   onRefreshClick = () =>{
      this.setState({
         customersCount: 7,
      });
   }

   // tenary operator in a method
   /* getPhoneMethod = (phoneNumber) => {
      return phoneNumber ? (phoneNumber):(<div className="bg-warning p-2">phonenumber not avaliable</div>)
   } */

   //if statement in method
   getPhoneMethod = (phoneNumber) => {
      if (phoneNumber)
         return phoneNumber
      else{
         return <div className="bg-warning p-1">phonenumber not avaliable yoyo</div>;
      }
   }

   //the table data gotten using a method
   getCustomerRow = () =>{
     return this.state.customers.map((cust, index) =>{
         return(
            <tr key={cust.id}>
               <td className="text-center">{cust.id}</td>
               <td >
                  <img src={cust.photo} alt="customer" />
                  <button className="btn btn-sm btn-secondary" onClick={()=> {this.onChangePictureClick(cust,index); }} >Change picture</button>
               </td>
               <td className="text-center">{cust.name}</td>
               <td className="text-center">{this.getPhoneMethod(cust.phoneNumber)}</td>
               <td className="text-center">{cust.address.city}</td>
            </tr> 
         );
      })
   }

   // style={{backgroundColor: cust.name.startsWith("A") ? "green" : "red"}}
   // {(cust.address.city == null) ? "city not avaliable" : cust.address.city}


   onChangePictureClick= (cust, index) =>{
      /* console.log(cust); 
      console.log(index);  */

      //get existing customer
      var custArr = this.state.customers;
      custArr[index].photo = "https://picsum.photos/id/1000/60";

      // update "customers" array in the state 
      this.setState({customers:custArr}); 

   }
}