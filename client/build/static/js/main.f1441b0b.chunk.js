(window.webpackJsonpssc=window.webpackJsonpssc||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),o=a.n(r),c=(a(63),a(2)),s=a(3),i=a(5),m=a(4),u=a(6),h=(a(25),a(64),a(9)),b=a(20),p=a(28),d=a.n(p),E=a(7),v=a.n(E),f=function(e){e?v.a.defaults.headers.common.Authorization=e:delete v.a.defaults.headers.common.Authorization},g=function(e){return{type:"SET_CURRENT_USER",payload:e}},y=function(){return function(e){localStorage.removeItem("jwtToken"),f(!1),e(g({}))}},j=a(18),O=a(19),w=a(54),N=a(22);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach(function(t){Object(N.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var S=a(88),_={isAuthenticated:!1,user:{},loading:!1},D={},U=Object(O.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return C({},e,{isAuthenticated:!S(t.payload),user:t.payload});case"USER_LOADING":return C({},e,{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}}}),x=[w.a],R=Object(O.e)(U,{},Object(O.d)(O.a.apply(void 0,x),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),T=(a(31),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onChange=function(t){e.setState(Object(N.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={first_name:e.state.first_name,last_name:e.state.last_name,number:e.state.number,email:e.state.email,password:e.state.password,password2:e.state.password2};e.props.registerUser(a,e.props.history)},e.state={first_name:"",last_name:"",number:"",email:"",password:"",password2:"",errors:{}},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){return l.a.createElement("div",{class:"title-welcome container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-6 col-lg-6 offset-lg-3"},l.a.createElement("h3",null,"Add New User"),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"First Name:  "),l.a.createElement("input",{id:"first_name",type:"text",className:"form-control",value:this.state.first_name,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Last Name:  "),l.a.createElement("input",{id:"last_name",type:"text",className:"form-control",value:this.state.last_name,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Phone Number: "),l.a.createElement("input",{id:"number",type:"text",className:"form-control",value:this.state.number,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"E-mail: "),l.a.createElement("input",{id:"email",type:"email",className:"form-control",value:this.state.email,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password: "),l.a.createElement("input",{id:"password",type:"password",className:"form-control",value:this.state.password,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Confirm Password: "),l.a.createElement("input",{id:"password2",type:"password",className:"form-control",value:this.state.password2,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Register User",className:"btn btn-primary"}))))))}}]),t}(n.Component)),L=Object(j.b)(function(e){return{auth:e.auth,errors:e.errors}},{registerUser:function(e,t){return function(a){v.a.post("/users/register",e).then(function(e){return t.push("/login")}).catch(function(e){return a({type:"GET_ERRORS",payload:e.response.data})})}}})(Object(b.g)(T)),P=a(10),A="https://35a7deb5f76e493e9412648419a0a663.vfs.cloud9.us-west-2.amazonaws.com",M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onChangeUserFirstName=a.onChangeUserFirstName.bind(Object(P.a)(a)),a.onChangeUserLastName=a.onChangeUserLastName.bind(Object(P.a)(a)),a.onChangeUserNumber=a.onChangeUserNumber.bind(Object(P.a)(a)),a.onChangeUserEmail=a.onChangeUserEmail.bind(Object(P.a)(a)),a.onSubmit=a.onSubmit.bind(Object(P.a)(a)),a.state={first_name:"",last_name:"",number:"",email:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get(A+"/users/edit/"+this.props.match.params.id).then(function(t){e.setState({first_name:t.data.first_name,last_name:t.data.last_name,number:t.data.number,email:t.data.email})}).catch(function(e){console.log(e)})}},{key:"onChangeUserFirstName",value:function(e){this.setState({first_name:e.target.value})}},{key:"onChangeUserLastName",value:function(e){this.setState({last_name:e.target.value})}},{key:"onChangeUserNumber",value:function(e){this.setState({number:e.target.value})}},{key:"onChangeUserEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={first_name:this.state.first_name,last_name:this.state.last_name,number:this.state.number,email:this.state.email};v.a.post(A+"/users/update/"+this.props.match.params.id,t).then(function(e){e.status(200),e.send("User updated")}).catch(function(e){console.log(e)}),this.props.history.push("/index")}},{key:"render",value:function(){return l.a.createElement("div",{class:"title-welcome container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-8 col-lg-6 offset-lg-3"},l.a.createElement("h3",null,"Edit User Profile"),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"First Name:  "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.first_name,onChange:this.onChangeUserFirstName})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Last Name:  "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.last_name,onChange:this.onChangeUserLastName})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Number: "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.number,onChange:this.onChangeUserNumber})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email: "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.email,onChange:this.onChangeUserEmail})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Update User",className:"btn btn-primary"}))))))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).delete=a.delete.bind(Object(P.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"delete",value:function(){v.a.get("https://35a7deb5f76e493e9412648419a0a663.vfs.cloud9.us-west-2.amazonaws.com/users/delete/"+this.props.obj._id).then(console.log("Deleted")).catch(function(e){return console.log(e)}),window.location.reload()}},{key:"render",value:function(){return l.a.createElement("tr",null,l.a.createElement("td",null,this.props.obj.first_name),l.a.createElement("td",null,this.props.obj.last_name),l.a.createElement("td",null,this.props.obj.number),l.a.createElement("td",null,this.props.obj.email),l.a.createElement("td",null,l.a.createElement(h.b,{to:"/edit/"+this.props.obj._id,className:"btn btn-primary"},"Edit")),l.a.createElement("td",null,l.a.createElement(h.b,{to:"/index",onClick:this.delete,className:"btn btn-danger"},"Delete")))}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={users:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://35a7deb5f76e493e9412648419a0a663.vfs.cloud9.us-west-2.amazonaws.com/users/all").then(function(t){e.setState({users:t.data})}).catch(function(e){console.log(e)})}},{key:"tableRow",value:function(){return this.state.users.map(function(e,t){return l.a.createElement(I,{obj:e,key:t})})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",{class:"title-welcome"},"Users"),l.a.createElement("table",{className:"table table-striped table-hover table-bordered my-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Last Name"),l.a.createElement("th",null,"Phone Number"),l.a.createElement("th",null,"Email"),l.a.createElement("th",{colSpan:"2"},"Action"))),l.a.createElement("tbody",null,this.tableRow())),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))}}]),t}(n.Component),Y=a(21),W=a.n(Y),z=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(W.a,null,l.a.createElement(W.a.Item,null,l.a.createElement("img",{className:"d-block text-center mx-auto p-3 my-auto",src:"/mia_glow.png",alt:"First slide"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(W.a.Caption,null,l.a.createElement("h3",null,"Welcome to the Club"),l.a.createElement("p",null,"Join us at our next event!"))),l.a.createElement(W.a.Item,null,l.a.createElement("img",{className:"d-block text-center mx-auto p-3 my-auto",src:"/skatejoring_girl_huskey.png",alt:"skatejoring_girl_huskey.png"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(W.a.Caption,null,l.a.createElement("h3",null,"Fun for Everyone"),l.a.createElement("p",null,"Especially the pups!!"))),l.a.createElement(W.a.Item,null,l.a.createElement("img",{className:"d-block text-center mx-auto p-3 my-auto",src:"/skatejoring_orange_wheels.png",alt:"Third slide"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(W.a.Caption,null,l.a.createElement("h3",null,"Safety Third!"),l.a.createElement("p",null,"No sandals allowed."))))}}]),t}(n.Component),G=a(56),X=a.n(G),H=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).delete=a.delete.bind(Object(P.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"delete",value:function(){v.a.get("https://skatejoring-davis.herokuapp.com/events/delete/"+this.props.obj._id).then(console.log("Deleted")).catch(function(e){return console.log(e)}),window.location.reload()}},{key:"render",value:function(){return l.a.createElement("tr",null,l.a.createElement("td",null,this.props.obj.date),l.a.createElement("td",null,this.props.obj.time),l.a.createElement("td",null,this.props.obj.location),l.a.createElement("td",null,this.props.obj.weather),l.a.createElement("td",null,l.a.createElement(X.a,{color:"white",icon:this.props.obj.icon,width:"64",height:"64",autoplay:!0})),l.a.createElement("td",null,l.a.createElement(h.b,{to:"/events",onClick:this.delete,className:"btn btn-danger"},"Delete")))}}]),t}(n.Component),J=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={events:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://skatejoring-davis.herokuapp.com/events/all").then(function(t){e.setState({events:t.data})}).catch(function(e){console.log(e)})}},{key:"eventTableRow",value:function(){return this.state.events.map(function(e,t){return l.a.createElement(H,{obj:e,key:t})})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",{class:"title-welcome"},"Events"),l.a.createElement("table",{className:"table table-striped table-hover table-bordered my-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"Time"),l.a.createElement("th",null,"Location"),l.a.createElement("th",{colSpan:"2"},"Weather"),l.a.createElement("th",null,"Action"))),l.a.createElement("tbody",null,this.eventTableRow())),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))}}]),t}(n.Component),V=a(36),B=a.n(V),$=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onChangeDate=a.onChangeDate.bind(Object(P.a)(a)),a.onChangeTime=a.onChangeTime.bind(Object(P.a)(a)),a.onChangeLocation=a.onChangeLocation.bind(Object(P.a)(a)),a.onSubmit=a.onSubmit.bind(Object(P.a)(a)),a.state={date:"",time:"",location:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"onChangeDate",value:function(e){this.setState({date:e.target.value})}},{key:"onChangeTime",value:function(e){this.setState({time:e.target.value})}},{key:"onChangeLocation",value:function(e){this.setState({location:e.target.value})}},{key:"componentDidMount",value:function(){var e=this;v.a.get("https://skatejoring-davis.herokuapp.com/weather").then(function(t){e.setState({weather:t.data.currently.summary,icon:t.data.currently.icon.toUpperCase().replace(/-/g,"_")})}).catch(function(e){console.log(e)})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a={date:B()(this.state.date,"YYYY-MM-DD").format("dddd, MMMM Do YYYY"),time:B()(this.state.time,"HH:mm a").format("h:mm A"),location:this.state.location,weather:this.state.weather,icon:this.state.icon};v.a.post("https://skatejoring-davis.herokuapp.com/events/add",a),this.setState({date:"",time:"",location:"",weather:"",icon:""}),setTimeout(function(){t.props.history.push("/events")},500)}},{key:"render",value:function(){return l.a.createElement("div",{class:"title-welcome container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-8 col-lg-6 offset-lg-3"},l.a.createElement("h3",null,"Add New Event"),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Date:  "),l.a.createElement("input",{type:"date",className:"form-control",value:this.state.date,onChange:this.onChangeDate})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Time:  "),l.a.createElement("input",{type:"time",className:"form-control",value:this.state.time,onChange:this.onChangeTime})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Location: "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.location,onChange:this.onChangeLocation})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Register Event",className:"btn btn-primary"}))))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))}}]),t}(n.Component),q=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onChange=function(t){e.setState(Object(N.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password};e.props.loginUser(a)},e.state={email:"",password:"",errors:{}},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/Dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/Dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){this.state.errors;return l.a.createElement("div",{class:"title-welcome container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-8 col-lg-6 offset-lg-3"},l.a.createElement("h3",null,"Login"),l.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"E-mail: "),l.a.createElement("input",{type:"email",id:"email",className:"form-control",value:this.state.email,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password: "),l.a.createElement("input",{type:"password",id:"password",className:"form-control",value:this.state.password,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Log In",className:"btn btn-success"}))))))}}]),t}(n.Component),K=Object(j.b)(function(e){return{auth:e.auth,errors:e.errors}},{loginUser:function(e){return function(t){v.a.post("/users/login",e).then(function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),f(a);var n=d()(a);t(g(n))}).catch(function(e){return t({type:"GET_ERRORS",payload:e.response.data})})}}})(q),Q=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{class:"navbar navbar-expand-md navbar-dark bg-dark nav-bkgr"},l.a.createElement("ul",{class:"navbar-nav mr-auto"},l.a.createElement("li",{class:"nav-item active"},l.a.createElement(h.b,{to:"/",className:"nav-link my-nav-link"},"Skatejoring")),l.a.createElement("li",{class:"nav-item my-nav-link"},l.a.createElement(h.b,{to:"/index",className:"nav-link "},"Users")),l.a.createElement("li",{class:"nav-item my-nav-link"},l.a.createElement(h.b,{to:"/events",className:"nav-link "},"Events"))),l.a.createElement("ul",{class:"navbar-nav float-right"},l.a.createElement("li",{class:"nav-item"},l.a.createElement(h.b,{to:"/register",className:"nav-link my-nav-link"},"Email Signup")),l.a.createElement("li",{class:"nav-item"},l.a.createElement(h.b,{to:"/createEvent",className:"nav-link my-nav-link"},"Add New Event")),l.a.createElement("li",{class:"nav-item"},l.a.createElement(h.b,{to:"/login",className:"nav-link my-nav-link"},"Login"))))}}]),t}(n.Component),Z=a(57),ee=Object(j.b)(function(e){return{auth:e.auth}})(function(e){var t=e.component,a=e.auth,n=Object(Z.a)(e,["component","auth"]);return l.a.createElement(b.b,Object.assign({},n,{render:function(e){return!0===a.isAuthenticated?l.a.createElement(t,e):l.a.createElement(b.a,{to:"/login"})}}))}),te=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).onLogoutClick=function(e){e.preventDefault(),a.props.logoutUser()},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.auth.user;return l.a.createElement("div",{className:"container valign-wrapper"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 center-align grey-text"},l.a.createElement("h4",null,l.a.createElement("b",null,"Hey there,")," ",e.name),l.a.createElement("button",{onClick:this.onLogoutClick,className:"btn btn-success"},"Logout"))))}}]),t}(n.Component),ae=Object(j.b)(function(e){return{auth:e.auth}},{logoutUser:y})(te);if(localStorage.jwtToken){var ne=localStorage.jwtToken;f(ne);var le=d()(ne);R.dispatch(g(le));var re=Date.now()/1e3;le.exp<re&&(R.dispatch(y()),window.location.href="./login")}var oe=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(j.a,{store:R},l.a.createElement(h.a,null,l.a.createElement("div",{className:"container green-bkgr"},l.a.createElement(Q,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",{class:"title-welcome"},"Skatejoring Social Club"),l.a.createElement("br",null),l.a.createElement(b.b,{exact:!0,path:"/login",component:K}),l.a.createElement(b.b,{exact:!0,path:"/events",component:J}),l.a.createElement(b.b,{exact:!0,path:"/createEvent",component:$}),l.a.createElement(b.b,{exact:!0,path:"/register",component:L}),l.a.createElement(b.b,{exact:!0,path:"/index",component:F}),l.a.createElement(b.b,{path:"/edit/:id",component:M}),l.a.createElement(b.d,null,l.a.createElement(ee,{exact:!0,path:"/dashboard",component:ae})),l.a.createElement(b.b,{exact:!0,path:"/",component:z}),l.a.createElement("footer",{class:"container"},l.a.createElement("p",{class:"text-white"},"\xa9 2019 DW Designs         ",l.a.createElement("a",{href:"https://darksky.net/poweredby/"}," Powered by Dark Sky"))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(h.a,null,l.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},25:function(e,t,a){},58:function(e,t,a){e.exports=a(107)},63:function(e,t,a){}},[[58,1,2]]]);
//# sourceMappingURL=main.f1441b0b.chunk.js.map