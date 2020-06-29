(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,function(t,e,n){t.exports={form:"ContactForm_form__BNY5O",formLabel:"ContactForm_formLabel__1FYcC",formInput:"ContactForm_formInput__3DhpP",btn:"ContactForm_btn__-e3ew"}},,,,,function(t,e,n){t.exports={item:"ContactListItem_item__31J6b",btn:"ContactListItem_btn__3whDW"}},function(t,e,n){t.exports={title:"Filter_title__16AUA",input:"Filter_input__187T8"}},,,function(t,e,n){t.exports={Container:"Container_Container__CS-kb"}},function(t,e,n){t.exports={title:"Section_title__uRuax"}},,function(t,e,n){t.exports={list:"ContactList_list__38BDG"}},function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},,,function(t,e,n){t.exports=n(24)},,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),i=n(15),l=n(2),s=n(3),u=n(5),m=n(4),f=n(10),b=n.n(f),h=function(t){var e=t.children;return r.a.createElement("div",{className:b.a.Container},e)},p=n(11),d=n.n(p),C=function(t){var e=t.title,n=t.children;return r.a.createElement("section",null,r.a.createElement("h2",{className:d.a.title},e),n)},v=n(12),_=n(1),g=n.n(_),E=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(v.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,r=n.number;(0,t.props.existingContactsName)().includes(a.toLowerCase())?alert("".concat(a," is already in contacts")):a&&r?a.length<3?alert("Name should have more than 3 letters"):t.props.onSubmit(t.state):alert("Fill the form"),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return r.a.createElement("form",{onSubmit:this.handleSubmit,className:g.a.form},r.a.createElement("label",{htmlFor:this.nameInputId,className:g.a.formLabel},"Name",r.a.createElement("input",{type:"text",name:"name",value:e,onChange:this.handleChange,className:g.a.formInput})),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:this.numberInputId,className:g.a.formLabel},"Number",r.a.createElement("input",{type:"tel",name:"number",value:n,onChange:this.handleChange,className:g.a.formInput})),r.a.createElement("button",{type:"submit",className:g.a.btn},"Add contact"))}}]),n}(a.Component),N=n(16),S=n(6),y=n.n(S),x=function(t){var e=t.contact,n=t.onDeleteContact,a=e.name,c=e.number;return r.a.createElement("li",{className:y.a.item},r.a.createElement("span",null,a,":"),r.a.createElement("span",null," ",c),r.a.createElement("button",{type:"button",onClick:n,className:y.a.btn},"Delete"))},O=n(13),F=n.n(O),I=function(t){var e=t.contacts,n=t.deleteContact;return r.a.createElement("ul",{className:F.a.list},e.map((function(t){var e=t.id,a=Object(N.a)(t,["id"]);return r.a.createElement(x,{key:e,contact:a,onDeleteContact:function(){return n(e)}})})))},k=n(7),w=n.n(k),j=function(t){var e=t.value,n=t.onChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:w.a.title},"Find contacts by name"),r.a.createElement("input",{type:"text",value:e,onChange:n,className:w.a.input}))},L=n(14),D=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:L,filter:""},t.forSubmitHandler=function(e){t.setState({contacts:[].concat(Object(i.a)(t.state.contacts),[e])})},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,r=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(r)}))},t.getExistingContactsName=function(){return t.state.contacts.map((function(t){return t.name.toLowerCase()}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");console.log(t);var e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t){var e=this.state.contacts;e!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(e))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return r.a.createElement(h,null,r.a.createElement(C,{title:"Phonebook"},r.a.createElement(E,{onSubmit:this.forSubmitHandler,existingContactsName:this.getExistingContactsName})),r.a.createElement(C,{title:"Contacts"},r.a.createElement(j,{value:t,onChange:this.changeFilter}),r.a.createElement(I,{contacts:e,deleteContact:this.deleteContact})))}}]),n}(a.Component);n(22),n(23);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.aa8f521f.chunk.js.map