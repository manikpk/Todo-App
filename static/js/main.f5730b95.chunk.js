(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(7),s=n.n(a),c=n(3),r=n(4),u=n(6),o=n(5),l=n(2),d=n(10),j=n(0),b=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).createTasks=i.createTasks.bind(Object(l.a)(i)),i}return Object(r.a)(n,[{key:"delete",value:function(e){this.props.delete(e)}},{key:"createTasks",value:function(e){var t=this;return Object(j.jsx)("div",{children:Object(j.jsx)("li",{onClick:function(){return t.delete(e.key)},children:e.text},e.key)})}},{key:"render",value:function(){var e=this.props.entries.map(this.createTasks);return Object(j.jsx)("div",{children:Object(j.jsx)("ul",{className:"theList",children:Object(j.jsx)(d.a,{duration:250,easing:"ease-out",children:e})})})}}]),n}(i.Component),h=(n(16),n(9),function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).state={items:[]},i.addItem=i.addItem.bind(Object(l.a)(i)),i.deleteItem=i.deleteItem.bind(Object(l.a)(i)),i}return Object(r.a)(n,[{key:"addItem",value:function(e){if(""!==this.inputElement.value){var t={text:this.inputElement.value,key:Date.now()};this.setState((function(e){return{items:e.items.concat(t)}})),this.inputElement.value=""}console.log(this.state.items),e.preventDefault()}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"todoListMain",children:[Object(j.jsx)("div",{className:"header",children:Object(j.jsxs)("form",{onSubmit:this.addItem,children:[Object(j.jsx)("input",{ref:function(t){return e.inputElement=t},placeholder:"Enter Task"}),Object(j.jsx)("button",{type:"submit",className:"btn",children:"ADD"})]})}),Object(j.jsx)(b,{entries:this.state.items,delete:this.deleteItem})]})}}]),n}(i.Component)),m=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(h,{})})}}]),n}(i.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),s(e),c(e)}))};s.a.render(Object(j.jsx)(m,{}),document.getElementById("root")),O()},9:function(e,t,n){}},[[17,1,2]]]);
//# sourceMappingURL=main.f5730b95.chunk.js.map