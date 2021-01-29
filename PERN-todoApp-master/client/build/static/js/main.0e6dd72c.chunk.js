(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,n,t){e.exports=t(52)},51:function(e,n,t){},52:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(23),c=t.n(o),i=t(11),u=t(5),l=t.n(u),s=t(7),p=t(4),d=t(2),f=t(3);function m(){var e=Object(d.a)(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  h1 {\n    font-size: 3rem;\n    margin: 80px 0px 60px 0px;\n  }\n"]);return m=function(){return e},e}var v=f.a.div(m());function h(){var e=Object(d.a)(["\n  padding: 30px;\n"]);return h=function(){return e},e}var b=f.a.ol(h());function g(){var e=Object(d.a)(["\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  display: flex;\n  width: 400px;\n  margin: 20px 0;\n\n  p {\n    font-size: 1.4rem;\n    margin-right: 10px;\n    flex: 1;\n  }\n"]);return g=function(){return e},e}var x=f.a.li(g());function E(){var e=Object(d.a)(["\n  border: none;\n  cursor: pointer;\n  font-size: 1rem;\n  padding: 7px 10px;\n  margin: 5px;\n  color: #fff;\n  background-color: ",";\n"]);return E=function(){return e},e}var O=f.a.button(E(),(function(e){return e.colour||"inherit"}));var j=function(e){var n=e.number,t=e.id,r=e.description,o=e.deleteHandler,c=e.changeHandler;return a.a.createElement(x,null,a.a.createElement("p",null,n,". ",r),a.a.createElement(O,{colour:"green",onClick:function(){c(t)}},"Update"),a.a.createElement(O,{colour:"red",onClick:function(){o(t)}},"Delete"))};function w(){var e=Object(d.a)(["\n  display: flex;\n  margin-bottom: 10px;\n\n  input {\n    width: 300px;\n    padding: 10px;\n    font-size: 1.4rem;\n  }\n"]);return w=function(){return e},e}var y=f.a.div(w());var k=function(e){var n=e.inputHandler,t=Object(r.useState)(""),o=Object(p.a)(t,2),c=o[0],i=o[1];return a.a.createElement(y,null,a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n(c),e.target.reset()}},a.a.createElement("input",{type:"text",placeholder:"What needs doing?",onChange:function(e){i(e.target.value)}}),a.a.createElement(O,{type:"submit",colour:"#6495ED"},"New Todo")))};function S(){var e=Object(d.a)(["\n  border: 3px solid red;\n  width: 60vh;\n  height: 60vh;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 4000;\n  background-color: #fff;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  input {\n    font-size: 1.2rem;\n    padding: 8px;\n    margin-right: 5px;\n  }\n"]);return S=function(){return e},e}var _=f.a.div(S());var H=function(e){var n=e.targetID,t=e.todoList,o=e.hideModalHandler,c=e.submitHandler,i=Object(r.useState)(""),u=Object(p.a)(i,2),l=u[0],s=u[1],d=Object(r.useState)(""),f=Object(p.a)(d,2),m=f[0],v=f[1];return Object(r.useEffect)((function(){!function(){var e=t.filter((function(e){return e.todo_id===n}))[0].description;v(e)}()}),[]),a.a.createElement(_,null,a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c(n,l),o()}},a.a.createElement("input",{placeholder:m,onChange:function(e){s(e.target.value)},type:"text"}),a.a.createElement(O,{colour:"lightgreen"},"Change")),a.a.createElement(O,{colour:"orange",onClick:function(){o()}},"Cancel"))},C=t(27),D=t.n(C),L={baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).baseURL||"http://localhost:5000/"},R=function(){return D.a.create({baseURL:L.baseURL})},T=function(){return R().get("todos")},U=function(e){return R().delete("todo/".concat(e))},z=function(e){var n={description:e};return R().post("create-todo",n)},W=function(e,n){var t={todo_id:e,description:n};return R().put("todo/".concat(e),t)};var N=function(){var e=Object(r.useState)([]),n=Object(p.a)(e,2),t=n[0],o=n[1],c=Object(r.useState)(!1),u=Object(p.a)(c,2),d=u[0],f=u[1],m=Object(r.useState)(0),h=Object(p.a)(m,2),g=h[0],x=h[1];function E(){return(E=Object(s.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T();case 3:n=e.sent,o(n.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function O(e){return w.apply(this,arguments)}function w(){return(w=Object(s.a)(l.a.mark((function e(n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U(n);case 3:r=t.filter((function(e){return e.todo_id!==n})),o(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function y(){return(y=Object(s.a)(l.a.mark((function e(n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z(n);case 3:r=e.sent,o([].concat(Object(i.a)(t),[r.data])),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function S(e){f(!0),x(e)}function _(){return(_=Object(s.a)(l.a.mark((function e(n,r){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W(n,r);case 3:a=e.sent,c=t.filter((function(e){return e.todo_id!==a.data.todo_id})),o([].concat(Object(i.a)(c),[a.data])),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){E.apply(this,arguments)}()}),[]),a.a.createElement(v,null,a.a.createElement("h1",null,"PERN todo App"),d?a.a.createElement(H,{targetID:g,todoList:t,hideModalHandler:function(){f(!1)},submitHandler:function(e,n){return _.apply(this,arguments)}}):null,a.a.createElement(k,{inputHandler:function(e){return y.apply(this,arguments)}}),a.a.createElement(b,null,t.map((function(e,n){return a.a.createElement(j,{key:n,number:n+1,id:e.todo_id,description:e.description,deleteHandler:O,changeHandler:S})}))))};var I=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(51);c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.0e6dd72c.chunk.js.map