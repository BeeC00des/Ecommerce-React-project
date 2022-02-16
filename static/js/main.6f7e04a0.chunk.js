(this["webpackJsonpecommerce-app"]=this["webpackJsonpecommerce-app"]||[]).push([[0],{16:function(e,t,a){e.exports=a(24)},22:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),s=a.n(c),l=a(2),o=a(3),m=a(5),i=a(4),u=a(8),p=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light navbar-style"},r.a.createElement("a",{className:"navbar-brand",href:"/#"},"Ecommerce store"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse nav-height",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{className:"nav-link",to:"/"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{className:"nav-link",to:"/CustomerList"},"Customer list")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{className:"nav-link",to:"/Dashboard"},"Dashboard")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{className:"nav-link",to:"/ShoppingCart"},"shopping cart"))))))}}]),a}(n.Component),d=a(13),h=a(10),b=a.n(h),E=a(12),v=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={product:e.props.product},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"card m-2"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"text-muted"},"# ",this.state.product.id,r.a.createElement("span",{className:"pull-right hand-icon",onClick:function(){e.props.onDelete(e.state.product)}},r.a.createElement("i",{className:"fa fa-times"}," "))),r.a.createElement("h5",{className:"p-4 border-top"},this.state.product.productName),r.a.createElement("div",null,"$",this.state.product.price)),r.a.createElement("div",{className:"card-footer text-right"},r.a.createElement("div",{className:"float-left"},r.a.createElement("span",{className:"badge"},this.state.product.quantity),r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{className:"btn btn-outline-success",onClick:function(){return e.props.onIncrement(e.state.product,10)}},"+"),r.a.createElement("button",{className:"btn btn-outline-success",onClick:function(){return e.props.onDecrement(e.state.product,0)}},"-"))),r.a.createElement("div",{className:"float-right"},this.props.children))))}}]),a}(n.Component),f=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).componentDidMount=Object(E.a)(b.a.mark((function t(){var a,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3000/products",{method:"GET"});case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,console.log(n),e.setState({products:n}),console.log("component mounted");case 9:case"end":return t.stop()}}),t)}))),e.handleIncrement=function(t,a){var n=Object(d.a)(e.state.products),r=n.indexOf(t);n[r].quantity<a&&(n[r].quantity++,e.setState({products:n}))},e.handleDecrement=function(t,a){var n=Object(d.a)(e.state.products),r=n.indexOf(t);n[r].quantity>a&&(n[r].quantity--,e.setState({products:n}))},e.handleDelete=function(t){var a=Object(d.a)(e.state.products),n=a.indexOf(t);window.confirm("Are you sure you want to delete this product")&&(a.splice(n,1),e.setState({products:a}))},e.state={products:[]},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid "},r.a.createElement("h4",null,"Shopping cart "),r.a.createElement("div",{className:"row"},this.state.products.map((function(t){return r.a.createElement(v,{key:t.id,product:t,onIncrement:e.handleIncrement,onDecrement:e.handleDecrement,onDelete:e.handleDelete},r.a.createElement("button",{className:"btn btn-primary"},"Buy Now"))}))))}}]),a}(n.Component),g=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onLoginClick=Object(E.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n.state),e.next=3,fetch("http://localhost:3000/users?email=".concat(n.state.email,"&password=").concat(n.state.password),{method:"GET"});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,console.log(a),a.length>0?n.setState({message:r.a.createElement("span",{className:"text-success"},"Sucessful logged-in")}):n.setState({message:r.a.createElement("span",{className:"text-danger"},"invalid login,please try again")});case 9:case"end":return e.stop()}}),e)}))),n.state={email:"",password:"",message:""},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-lg-9"},r.a.createElement("h4",{className:"m-1 p-2 border-bottom"},"Login"),r.a.createElement("div",{className:"form-group form-row"},r.a.createElement("label",{className:"col-lg-4"},"Email"),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.email,onChange:function(t){e.setState({email:t.target.value})}})),r.a.createElement("div",{className:"form-group form-row"},r.a.createElement("label",{className:"col-lg-4"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",value:this.state.password,onChange:function(t){e.setState({password:t.target.value})}})),r.a.createElement("div",{className:"text-right"},r.a.createElement("p",null,this.state.message),r.a.createElement("button",{className:"btn btn-primary",onClick:this.onLoginClick},"Login"))))}}]),a}(n.Component),N=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"text-center"},"hi beecodes, on dashboard")}}]),a}(n.Component),y=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={pageTitle:"Customers",customersCount:5,customers:[{id:1,name:"Adeniyi Faith",phoneNumber:"290-294",address:{city:"netherLand"},photo:"https://picsum.photos/id/1010/60"},{id:2,name:"Moses Joel",phoneNumber:"294-545",address:{city:"amsterdam"},photo:"https://picsum.photos/id/1014/60"},{id:3,name:"Olaniyi bimpe",phoneNumber:"294-302",address:{city:"jordan"},photo:"https://picsum.photos/id/1011/60"},{id:4,name:"Victoria Johnson",phoneNumber:null,address:{city:"california"},photo:"https://picsum.photos/id/1013/60"},{id:5,name:"Peterson killy",phoneNumber:null,address:{city:null},photo:"https://picsum.photos/id/1015/60"}]},e.onRefreshClick=function(){e.setState({customersCount:7})},e.getPhoneMethod=function(e){return e||r.a.createElement("div",{className:"bg-warning p-1"},"phonenumber not avaliable yoyo")},e.getCustomerRow=function(){return e.state.customers.map((function(t,a){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",{className:"text-center"},t.id),r.a.createElement("td",null,r.a.createElement("img",{src:t.photo,alt:"customer"}),r.a.createElement("button",{className:"btn btn-sm btn-secondary",onClick:function(){e.onChangePictureClick(t,a)}},"Change picture")),r.a.createElement("td",{className:"text-center"},t.name),r.a.createElement("td",{className:"text-center"},e.getPhoneMethod(t.phoneNumber)),r.a.createElement("td",{className:"text-center"},t.address.city))}))},e.onChangePictureClick=function(t,a){var n=e.state.customers;n[a].photo="https://picsum.photos/id/1000/60",e.setState({customers:n})},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",{className:"m-1 p-1"},this.state.pageTitle,r.a.createElement("span",{className:"badge badge-secondary m-2"}," ",this.state.customersCount," "),r.a.createElement("button",{className:"btn btn-info",onClick:this.onRefreshClick},"Refresh")),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"text-center"},r.a.createElement("th",null,"s/n"),r.a.createElement("th",null,"Photo"),r.a.createElement("th",null,"Customer Name"),r.a.createElement("th",null,"Phone number"),r.a.createElement("th",null,"City"))),r.a.createElement("tbody",null,this.getCustomerRow())))}}]),a}(n.Component),C=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"text-danger text-center"},r.a.createElement("h4",{className:"p-4"}," Page not found"))}}]),a}(n.Component),O=a(1),j=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement(p,null),r.a.createElement(O.c,null,r.a.createElement(O.a,{path:"/",element:r.a.createElement(g,null)}),r.a.createElement(O.a,{path:"CustomerList",element:r.a.createElement(y,null)}),r.a.createElement(O.a,{path:"Dashboard",element:r.a.createElement(N,null)}),r.a.createElement(O.a,{path:"ShoppingCart",element:r.a.createElement(f,null)}),r.a.createElement(O.a,{path:"*",element:r.a.createElement(C,null)})))}}]),a}(n.Component);a(22),a(23);s.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.6f7e04a0.chunk.js.map