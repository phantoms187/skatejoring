(window.webpackJsonpssc=window.webpackJsonpssc||[]).push([[0],{19:function(e,t,a){},49:function(e,t,a){e.exports=a(95)},54:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(25),s=a.n(r),o=(a(54),a(3)),c=a(4),m=a(6),i=a(5),u=a(7),h=(a(19),a(55),a(9)),b=a(16),E=a(1),d=a(8),p=a.n(d),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).onChangeUserFirstName=a.onChangeUserFirstName.bind(Object(E.a)(a)),a.onChangeUserLastName=a.onChangeUserLastName.bind(Object(E.a)(a)),a.onChangeUserNumber=a.onChangeUserNumber.bind(Object(E.a)(a)),a.onChangeUserEmail=a.onChangeUserEmail.bind(Object(E.a)(a)),a.onChangeUserPassword=a.onChangeUserPassword.bind(Object(E.a)(a)),a.onChangeUserPassword2=a.onChangeUserPassword2.bind(Object(E.a)(a)),a.onSubmit=a.onSubmit.bind(Object(E.a)(a)),a.state={first_name:"",last_name:"",number:"",email:"",password:"",password2:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"onChangeUserFirstName",value:function(e){this.setState({first_name:e.target.value})}},{key:"onChangeUserLastName",value:function(e){this.setState({last_name:e.target.value})}},{key:"onChangeUserNumber",value:function(e){this.setState({number:e.target.value})}},{key:"onChangeUserEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangeUserPassword",value:function(e){this.setState({password:e.target.value})}},{key:"onChangeUserPassword2",value:function(e){this.setState({password2:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a={first_name:this.state.first_name,last_name:this.state.last_name,number:this.state.number,email:this.state.email,password:this.state.password,password2:this.state.password2};p.a.post("http://localhost:4000/users/add",a),this.setState({first_name:"",last_name:"",number:"",email:"",password:"",password2:""}),setTimeout(function(){t.props.history.push("/index")},500)}},{key:"render",value:function(){return l.a.createElement("div",{class:"title-welcome container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-8 col-lg-6 offset-lg-3"},l.a.createElement("h3",null,"Add New User"),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"First Name:  "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.first_name,onChange:this.onChangeUserFirstName})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Last Name:  "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.last_name,onChange:this.onChangeUserLastName})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Phone Number: "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.number,onChange:this.onChangeUserNumber})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"E-mail: "),l.a.createElement("input",{type:"email",className:"form-control",value:this.state.email,onChange:this.onChangeUserEmail})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password: "),l.a.createElement("input",{type:"password",className:"form-control",value:this.state.password,onChange:this.onChangeUserPassword})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Confirm Password: "),l.a.createElement("input",{type:"password",className:"form-control",value:this.state.password2,onChange:this.onChangeUserPassword2})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Register User",className:"btn btn-primary"}))))))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).onChangeUserFirstName=a.onChangeUserFirstName.bind(Object(E.a)(a)),a.onChangeUserLastName=a.onChangeUserLastName.bind(Object(E.a)(a)),a.onChangeUserNumber=a.onChangeUserNumber.bind(Object(E.a)(a)),a.onChangeUserEmail=a.onChangeUserEmail.bind(Object(E.a)(a)),a.onSubmit=a.onSubmit.bind(Object(E.a)(a)),a.state={first_name:"",last_name:"",number:"",email:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://skatejoring-davis.herokuapp.com/users/edit/"+this.props.match.params.id).then(function(t){e.setState({first_name:t.data.first_name,last_name:t.data.last_name,number:t.data.number,email:t.data.email})}).catch(function(e){console.log(e)})}},{key:"onChangeUserFirstName",value:function(e){this.setState({first_name:e.target.value})}},{key:"onChangeUserLastName",value:function(e){this.setState({last_name:e.target.value})}},{key:"onChangeUserNumber",value:function(e){this.setState({number:e.target.value})}},{key:"onChangeUserEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={first_name:this.state.first_name,last_name:this.state.last_name,number:this.state.number,email:this.state.email};p.a.post("https://skatejoring-davis.herokuapp.com/users/update/"+this.props.match.params.id,t).then(function(e){e.status(200),e.send("User updated")}).catch(function(e){console.log(e)}),this.props.history.push("/index")}},{key:"render",value:function(){return l.a.createElement("div",{class:"title-welcome container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-8 col-lg-6 offset-lg-3"},l.a.createElement("h3",null,"Edit User Profile"),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"First Name:  "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.first_name,onChange:this.onChangeUserFirstName})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Last Name:  "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.last_name,onChange:this.onChangeUserLastName})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Number: "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.number,onChange:this.onChangeUserNumber})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email: "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.email,onChange:this.onChangeUserEmail})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Update User",className:"btn btn-primary"}))))))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).delete=a.delete.bind(Object(E.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"delete",value:function(){p.a.get("https://skatejoring-davis.herokuapp.com/users/delete/"+this.props.obj._id).then(console.log("Deleted")).catch(function(e){return console.log(e)}),window.location.reload()}},{key:"render",value:function(){return l.a.createElement("tr",null,l.a.createElement("td",null,this.props.obj.first_name),l.a.createElement("td",null,this.props.obj.last_name),l.a.createElement("td",null,this.props.obj.number),l.a.createElement("td",null,this.props.obj.email),l.a.createElement("td",null,l.a.createElement(h.b,{to:"/edit/"+this.props.obj._id,className:"btn btn-primary"},"Edit")),l.a.createElement("td",null,l.a.createElement(h.b,{to:"/index",onClick:this.delete,className:"btn btn-danger"},"Delete")))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={users:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("http://localhost:4000/users/all").then(function(t){e.setState({users:t.data})}).catch(function(e){console.log(e)})}},{key:"tableRow",value:function(){return this.state.users.map(function(e,t){return l.a.createElement(f,{obj:e,key:t})})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",{class:"title-welcome"},"Users"),l.a.createElement("table",{className:"table table-striped table-hover table-bordered my-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Last Name"),l.a.createElement("th",null,"Phone Number"),l.a.createElement("th",null,"Email"),l.a.createElement("th",{colSpan:"2"},"Action"))),l.a.createElement("tbody",null,this.tableRow())),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))}}]),t}(n.Component),y=a(17),C=a.n(y),N=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(C.a,null,l.a.createElement(C.a.Item,null,l.a.createElement("img",{className:"d-block text-center mx-auto p-3 my-auto",src:"/mia_glow.png",alt:"First slide"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(C.a.Caption,null,l.a.createElement("h3",null,"Welcome to the Club"),l.a.createElement("p",null,"Join us at our next event!"))),l.a.createElement(C.a.Item,null,l.a.createElement("img",{className:"d-block text-center mx-auto p-3 my-auto",src:"/skatejoring_girl_huskey.png",alt:"skatejoring_girl_huskey.png"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(C.a.Caption,null,l.a.createElement("h3",null,"Fun for Everyone"),l.a.createElement("p",null,"Especially the pups!!"))),l.a.createElement(C.a.Item,null,l.a.createElement("img",{className:"d-block text-center mx-auto p-3 my-auto",src:"/skatejoring_orange_wheels.png",alt:"Third slide"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(C.a.Caption,null,l.a.createElement("h3",null,"Safety Third!"),l.a.createElement("p",null,"No sandals allowed."))))}}]),t}(n.Component),k=a(48),w=a.n(k),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).delete=a.delete.bind(Object(E.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"delete",value:function(){p.a.get("https://skatejoring-davis.herokuapp.com/events/delete/"+this.props.obj._id).then(console.log("Deleted")).catch(function(e){return console.log(e)}),window.location.reload()}},{key:"render",value:function(){return l.a.createElement("tr",null,l.a.createElement("td",null,this.props.obj.date),l.a.createElement("td",null,this.props.obj.time),l.a.createElement("td",null,this.props.obj.location),l.a.createElement("td",null,this.props.obj.weather),l.a.createElement("td",null,l.a.createElement(w.a,{color:"white",icon:this.props.obj.icon,width:"64",height:"64",autoplay:!0})),l.a.createElement("td",null,l.a.createElement(h.b,{to:"/events",onClick:this.delete,className:"btn btn-danger"},"Delete")))}}]),t}(n.Component),U=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={events:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://skatejoring-davis.herokuapp.com/events/all").then(function(t){e.setState({events:t.data})}).catch(function(e){console.log(e)})}},{key:"eventTableRow",value:function(){return this.state.events.map(function(e,t){return l.a.createElement(O,{obj:e,key:t})})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",{class:"title-welcome"},"Events"),l.a.createElement("table",{className:"table table-striped table-hover table-bordered my-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"Time"),l.a.createElement("th",null,"Location"),l.a.createElement("th",{colSpan:"2"},"Weather"),l.a.createElement("th",null,"Action"))),l.a.createElement("tbody",null,this.eventTableRow())),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))}}]),t}(n.Component),S=a(28),_=a.n(S),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).onChangeDate=a.onChangeDate.bind(Object(E.a)(a)),a.onChangeTime=a.onChangeTime.bind(Object(E.a)(a)),a.onChangeLocation=a.onChangeLocation.bind(Object(E.a)(a)),a.onSubmit=a.onSubmit.bind(Object(E.a)(a)),a.state={date:"",time:"",location:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"onChangeDate",value:function(e){this.setState({date:e.target.value})}},{key:"onChangeTime",value:function(e){this.setState({time:e.target.value})}},{key:"onChangeLocation",value:function(e){this.setState({location:e.target.value})}},{key:"componentDidMount",value:function(){var e=this;p.a.get("https://skatejoring-davis.herokuapp.com/weather").then(function(t){e.setState({weather:t.data.currently.summary,icon:t.data.currently.icon.toUpperCase().replace(/-/g,"_")})}).catch(function(e){console.log(e)})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a={date:_()(this.state.date,"YYYY-MM-DD").format("dddd, MMMM Do YYYY"),time:_()(this.state.time,"HH:mm a").format("h:mm A"),location:this.state.location,weather:this.state.weather,icon:this.state.icon};p.a.post("https://skatejoring-davis.herokuapp.com/events/add",a),this.setState({date:"",time:"",location:"",weather:"",icon:""}),setTimeout(function(){t.props.history.push("/events")},500)}},{key:"render",value:function(){return l.a.createElement("div",{class:"title-welcome container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-8 col-lg-6 offset-lg-3"},l.a.createElement("h3",null,"Add New Event"),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Date:  "),l.a.createElement("input",{type:"date",className:"form-control",value:this.state.date,onChange:this.onChangeDate})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Time:  "),l.a.createElement("input",{type:"time",className:"form-control",value:this.state.time,onChange:this.onChangeTime})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Location: "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.location,onChange:this.onChangeLocation})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Register Event",className:"btn btn-primary"}))))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).onChangeUserEmail=a.onChangeUserEmail.bind(Object(E.a)(a)),a.onChangeUserPassword=a.onChangeUserPassword.bind(Object(E.a)(a)),a.onSubmit=a.onSubmit.bind(Object(E.a)(a)),a.state={email:"",password:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"onChangeUserEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangeUserPassword",value:function(e){this.setState({password:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({email:"",password:""}),setTimeout(function(){t.props.history.push("/index")},500)}},{key:"render",value:function(){return l.a.createElement("div",{class:"title-welcome container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-8 col-lg-6 offset-lg-3"},l.a.createElement("h3",null,"Login"),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"E-mail: "),l.a.createElement("input",{type:"email",className:"form-control",value:this.state.email,onChange:this.onChangeUserEmail})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password: "),l.a.createElement("input",{type:"password",className:"form-control",value:this.state.password,onChange:this.onChangeUserPassword})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Log In",className:"btn btn-success"}))))))}}]),t}(n.Component),L=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement("div",{className:"container green-bkgr"},l.a.createElement("nav",{class:"navbar navbar-expand-md navbar-dark bg-dark nav-bkgr"},l.a.createElement("ul",{class:"navbar-nav mr-auto"},l.a.createElement("li",{class:"nav-item active"},l.a.createElement(h.b,{to:"/",className:"nav-link my-nav-link"},"Skatejoring")),l.a.createElement("li",{class:"nav-item my-nav-link"},l.a.createElement(h.b,{to:"/index",className:"nav-link "},"Users")),l.a.createElement("li",{class:"nav-item my-nav-link"},l.a.createElement(h.b,{to:"/events",className:"nav-link "},"Events"))),l.a.createElement("ul",{class:"navbar-nav float-right"},l.a.createElement("li",{class:"nav-item"},l.a.createElement(h.b,{to:"/create",className:"nav-link my-nav-link"},"Email Signup")),l.a.createElement("li",{class:"nav-item"},l.a.createElement(h.b,{to:"/createEvent",className:"nav-link my-nav-link"},"Add New Event")),l.a.createElement("li",{class:"nav-item"},l.a.createElement(h.b,{to:"/login",className:"nav-link my-nav-link"},"Login")))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",{class:"title-welcome"},"Skatejoring Social Club"),l.a.createElement("br",null),l.a.createElement(b.c,null,l.a.createElement(b.a,{exact:!0,path:"/login",component:D}),l.a.createElement(b.a,{exact:!0,path:"/events",component:U}),l.a.createElement(b.a,{exact:!0,path:"/createEvent",component:x}),l.a.createElement(b.a,{exact:!0,path:"/create",component:v}),l.a.createElement(b.a,{path:"/edit/:id",component:g}),l.a.createElement(b.a,{path:"/index",component:j}),l.a.createElement(b.a,{path:"/",component:N})),l.a.createElement("footer",{class:"container"},l.a.createElement("p",{class:"text-white"},"\xa9 2019 DW Designs         ",l.a.createElement("a",{href:"https://darksky.net/poweredby/"}," Powered by Dark Sky"))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(h.a,null,l.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[49,1,2]]]);
//# sourceMappingURL=main.082206e0.chunk.js.map