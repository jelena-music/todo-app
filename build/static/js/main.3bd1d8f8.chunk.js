(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{21:function(e,t,n){e.exports=n(34)},26:function(e,t,n){},27:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(13),i=n.n(s),l=(n(26),n(27),n(28),n(29),n(18)),r=n(14),c=n(15),u=n(19),d=n(16),f=n(5),h=n(20),m=n(6),p=n(11),v=n(10),g=function(e){function t(){var e;return Object(r.a)(this,t),console.log("reset"),(e=Object(u.a)(this,Object(d.a)(t).call(this))).state={listOfTodos:[{status:"pending",value:"Eat"},{status:"pending",value:"Sleep"},{status:"pending",value:"Code"}],newTask:null},e.handleChange=e.handleChange.bind(Object(f.a)(e)),e.AddToList=e.AddToList.bind(Object(f.a)(e)),e.DeleteFromList=e.DeleteFromList.bind(Object(f.a)(e)),e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"AddToList",value:function(e){e.preventDefault();var t={status:"pending",value:this.state.newTask};this.setState({listOfTodos:[].concat(Object(l.a)(this.state.listOfTodos),[t]),newTask:""})}},{key:"DeleteFromList",value:function(e,t){e.preventDefault(),this.setState((function(e){return{listOfTodos:e.listOfTodos.filter((function(e,n){return n!=t}))}}))}},{key:"MoveToDone",value:function(e,t){e.preventDefault();var n=JSON.parse(JSON.stringify(this.state.listOfTodos));n[t].status="Done",this.setState({listOfTodos:n})}},{key:"handleChange",value:function(e){this.setState({newTask:e.target.value})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:""},o.a.createElement("p",{style:{fontSize:17,color:"white"}},"Todo list to keep me bussy "),o.a.createElement(p.a,{inline:!0,onSubmit:this.AddToList,style:{margin:"20px"}},o.a.createElement(p.a.Control,{size:"lg",value:this.state.newTask,placeholder:"Todo",onChange:this.handleChange}),o.a.createElement(m.a,{type:"submit",style:{margin:"5px"}},"Add")),o.a.createElement("div",null,o.a.createElement(v.a,null,this.state.listOfTodos.map((function(t,n){return o.a.createElement(v.a.Item,{variant:"pending"==t.status?"warning":"info",style:{fontSize:15,color:"black"},key:n},t.value,o.a.createElement(m.a,{onClick:function(t){return e.MoveToDone(t,n)},style:{float:"left"}}," Finish "),o.a.createElement(m.a,{onClick:function(t){return e.DeleteFromList(t,n)},style:{float:"right"}}," X "))})))))}}]),t}(a.Component);var T=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.3bd1d8f8.chunk.js.map