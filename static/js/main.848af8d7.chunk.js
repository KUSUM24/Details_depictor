(this.webpackJsonpcrud_app=this.webpackJsonpcrud_app||[]).push([[0],{68:function(e,t,c){},70:function(e,t,c){},80:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(21),r=c.n(n),i=c(24),l=c(48),j=c.n(l),d=c(53),o=c(7),b=c(17),u=c(8),x=(c(68),c(1)),O=function(){return Object(x.jsx)("div",{className:"text-center",children:Object(x.jsx)("div",{className:"lds-dual-ring"})})},h=c(99),m=c(101),p=c(100),f=c(56),v=(c(70),function(){var e=Object(s.useContext)(G),t=Object(s.useRef)();return Object(x.jsxs)(h.a,{className:"header-main",expand:"lg",children:[Object(x.jsx)(h.a.Brand,{className:"heading",href:"/",children:Object(x.jsx)("b",{children:"Details Depictor"})}),Object(x.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(x.jsxs)(h.a.Collapse,{id:"basic-navbar-nav",className:"collapse",children:[Object(x.jsxs)(m.a,{className:"mr-auto",children:[Object(x.jsx)(b.b,{to:"/create",style:{textDecoration:"none",color:"black",margin:"0px 20px",cursor:"pointer"},children:"Create a post"}),Object(x.jsx)(b.b,{to:"/liked",style:{textDecoration:"none",color:"black",margin:"0px 20px",cursor:"pointer"},children:"Liked Posts"}),Object(x.jsx)(b.b,{to:"/disliked",style:{textDecoration:"none",color:"black",margin:"0px 20px",cursor:"pointer"},children:"Disliked Posts"}),Object(x.jsx)(b.b,{to:"/Details_depictor",style:{textDecoration:"none",color:"black",margin:"0px 20px",cursor:"pointer"},children:"Home"})]}),Object(x.jsx)(p.a,{className:"form-search",children:Object(x.jsx)(f.a,{type:"text",ref:t,placeholder:"Search Posts...",className:"mr-sm-2",onChange:function(){return e(t.current.value)}})})]})]})}),g=c(102),N=c(96),y=c(44),C=c.n(y),k=c(97),S=c(45),D=c.n(S),w=c(46),P=c.n(w),E=function(e){var t=e.statusDisplay,c=Object(s.useContext)(H),a=Object(s.useContext)(_),n=Object(s.useContext)(W),r=Object(s.useContext)(R),i=(r.updateName,r.updatePost,r.handleUpdate),l=Object(s.useContext)(F),j=l.likedList,d=l.handleLiked,b=Object(s.useContext)(I),O=b.dislikedList,h=b.handleDisliked,m=Object(u.f)(),p=Object(s.useState)(!1),f=Object(o.a)(p,2),v=f[0],y=f[1],S=Object(s.useState)("More"),w=Object(o.a)(S,2),E=w[0],q=w[1],L=function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(g.a,{style:{boxShadow:"5px 5px 10px rgb(131, 130, 130)"},className:"text-center m-4 w-75",children:[Object(x.jsx)(g.a.Header,{className:"card-header bg-dark text-white",children:Object(x.jsxs)("b",{children:[e.title," "]})}),Object(x.jsxs)(g.a.Body,{children:[e.body," ",Object(x.jsx)("hr",{}),Object(x.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(x.jsxs)("b",{className:"d-flex",children:["By"," ",Object(x.jsx)("div",{className:"mx-2",style:{textDecoration:"underline"},children:a.map((function(t){if(t.id==e.userId)return t.name}))})]}),Object(x.jsx)(N.a,{onClick:function(){v?(y(!1),q("More")):(y(!0),q("Hide"))},children:E})]}),v&&Object(x.jsx)("div",{children:a.map((function(t){if(t.id==e.userId)return Object(x.jsxs)("div",{style:{textAlign:"start"},children:[Object(x.jsxs)("div",{children:[" ","Email: ",Object(x.jsx)("b",{children:t.email})]}),Object(x.jsxs)("div",{children:[" ","Website: ",Object(x.jsx)("b",{children:t.website})]}),Object(x.jsxs)("div",{children:[" ","Username: ",Object(x.jsx)("b",{children:t.username})]}),Object(x.jsxs)("div",{children:[" ","Company Name: ",Object(x.jsx)("b",{children:t.company.name})]}),Object(x.jsxs)("div",{children:[" ","Address:"," ",Object(x.jsxs)("b",{children:[t.address.street,", ",t.address.city]})]})]})}))})]}),Object(x.jsxs)(g.a.Footer,{className:"d-flex justify-content-between align-items-center",children:[Object(x.jsxs)("div",{className:"d-flex",children:[Object(x.jsx)("div",{className:"".concat(j.includes(e)?"btn btn-success":"btn btn-light"," "),onClick:function(){return t=e.id,void d(t);var t},children:Object(x.jsx)(C.a,{})}),Object(x.jsx)("div",{className:"".concat(O.includes(e)?"btn btn-danger":"btn btn-light"),onClick:function(){return t=e.id,void h(t);var t},children:Object(x.jsx)(k.a,{})})]}),Object(x.jsxs)("div",{className:"d-flex",children:[Object(x.jsx)("div",{className:"btn text-white d-flex align-items-center",style:{backgroundColor:"#5567ff"},onClick:function(){return t=e.id,i(t),void m.push("/update");var t},children:Object(x.jsx)(D.a,{})}),Object(x.jsx)("div",{className:"btn text-white d-flex align-items-center mx-2",style:{backgroundColor:"#ed0b4c"},onClick:function(){return n(e.id)},children:Object(x.jsx)(P.a,{})})]})]})]})})};return Object(x.jsx)("div",{className:"d-flex flex-column align-items-center",children:"Disliked"==t?Object(x.jsx)(x.Fragment,{children:O.map(L)}):Object(x.jsx)(x.Fragment,{children:"Liked"==t?Object(x.jsx)(x.Fragment,{children:j.map(L)}):Object(x.jsx)(x.Fragment,{children:c.map(L)})})})},q=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(v,{}),Object(x.jsx)(E,{})]})},L=c(98),A=function(){var e=Object(u.f)(),t=Object(s.useState)(""),c=Object(o.a)(t,2),a=c[0],n=c[1],r=Object(s.useState)(""),i=Object(o.a)(r,2),l=i[0],j=i[1],d=Object(s.useState)(""),b=Object(o.a)(d,2),O=b[0],h=b[1],m=Object(s.useState)(""),f=Object(o.a)(m,2),y=f[0],C=f[1],k=Object(s.useState)(""),S=Object(o.a)(k,2),D=S[0],w=S[1],P=Object(s.useState)(""),E=Object(o.a)(P,2),q=E[0],A=E[1],B=Object(s.useState)(""),U=Object(o.a)(B,2),T=U[0],H=U[1],_=Object(s.useState)(""),F=Object(o.a)(_,2),I=F[0],W=F[1],G=Object(s.useState)(""),R=Object(o.a)(G,2),J=R[0],K=R[1],z=Object(s.useContext)(M);return Object(x.jsxs)("div",{children:[Object(x.jsx)(v,{}),Object(x.jsx)(L.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"85vh"},children:Object(x.jsxs)(g.a,{className:"w-100",style:{maxWidth:"800px",border:"1px solid"},children:[Object(x.jsx)(g.a.Header,{className:"card-heading text-center text-white bg-dark",children:Object(x.jsx)("b",{children:"Post Details"})}),Object(x.jsx)(g.a.Body,{children:Object(x.jsxs)(p.a,{onSubmit:function(t){return t.preventDefault(),e.push("/Details_depictor"),void z(a,y,D,q,T,I,J,l,O)},children:[Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"form-group col-md-6 ",children:[Object(x.jsx)("label",{children:"Creator Name"}),Object(x.jsx)(p.a.Control,{className:"my-2",placeholder:"Name",value:a,onChange:function(e){return n(e.target.value)},required:!0})]}),Object(x.jsxs)("div",{className:"form-group col-md-6",children:[Object(x.jsx)("label",{children:"Email"}),Object(x.jsx)(p.a.Control,{className:"my-2",placeholder:"Email",value:y,onChange:function(e){return C(e.target.value)},required:!0})]})]}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"form-group col-md-6 ",children:[Object(x.jsx)("label",{children:"Website"}),Object(x.jsx)(p.a.Control,{className:"my-2",placeholder:"Website",value:D,onChange:function(e){return w(e.target.value)},required:!0})]}),Object(x.jsxs)("div",{className:"form-group col-md-6",children:[Object(x.jsx)("label",{children:"Username"}),Object(x.jsx)(p.a.Control,{className:"my-2",placeholder:"Username",value:q,onChange:function(e){return A(e.target.value)},required:!0})]})]}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"form-group col-md-6 ",children:[Object(x.jsx)("label",{children:"Address Street"}),Object(x.jsx)(p.a.Control,{className:"my-2",placeholder:"Address Street",value:T,onChange:function(e){return H(e.target.value)},required:!0})]}),Object(x.jsxs)("div",{className:"form-group col-md-6",children:[Object(x.jsx)("label",{children:"Address City"}),Object(x.jsx)(p.a.Control,{className:"my-2",placeholder:"Address City",value:I,onChange:function(e){return W(e.target.value)},required:!0})]})]}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"form-group col-md-6 ",children:[Object(x.jsx)("label",{children:"Company Name"}),Object(x.jsx)(p.a.Control,{className:"my-2",placeholder:"Company",value:J,onChange:function(e){return K(e.target.value)},required:!0})]}),Object(x.jsxs)("div",{className:"form-group col-md-6",children:[Object(x.jsx)("label",{children:"Post Title"}),Object(x.jsx)(p.a.Control,{className:"my-2",placeholder:"Post Title",value:l,onChange:function(e){return j(e.target.value)},required:!0})]})]}),Object(x.jsxs)(p.a.Group,{children:[Object(x.jsx)("label",{children:"Post Body"}),Object(x.jsx)(p.a.Control,{as:"textarea",rows:3,className:"my-2",placeholder:"Post Body",value:O,onChange:function(e){return h(e.target.value)},required:!0})]}),Object(x.jsx)("div",{className:"text-center",children:Object(x.jsx)(N.a,{type:"submit",children:"CREATE"})})]})})]})})]})},B=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(v,{}),Object(x.jsx)(E,{statusDisplay:"Disliked"})]})},U=function(){var e=Object(s.useContext)(F);e.likedList,e.handleLiked,Object(s.useContext)(_);return Object(x.jsxs)("div",{children:[Object(x.jsx)(v,{}),Object(x.jsx)(E,{statusDisplay:"Liked"})]})},T=function(){var e=Object(s.useContext)(R),t=e.updateName,c=e.updatePost,a=(e.handleUpdate,e.handleUpdateDetails),n=Object(s.useState)(t),r=Object(o.a)(n,2),i=r[0],l=(r[1],Object(s.useState)(c.title)),j=Object(o.a)(l,2),d=j[0],b=j[1],O=Object(s.useState)(c.body),h=Object(o.a)(O,2),m=h[0],f=h[1],y=Object(u.f)();return Object(x.jsxs)("div",{children:[" ",Object(x.jsx)(v,{}),Object(x.jsx)(L.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"75vh"},children:Object(x.jsxs)(g.a,{className:"w-100",style:{maxWidth:"800px",border:"1px solid"},children:[Object(x.jsx)(g.a.Header,{className:"card-heading text-center text-white bg-dark",children:Object(x.jsx)("b",{children:"Post Details"})}),Object(x.jsx)(g.a.Body,{children:Object(x.jsxs)(p.a,{onSubmit:function(e){return e.preventDefault(),y.push("/Details_depictor"),void a(i,d,m,c.id)},children:[Object(x.jsx)("div",{className:"row"}),Object(x.jsx)("label",{children:"Title"}),Object(x.jsx)(p.a.Control,{className:"my-2",value:d,onChange:function(e){return b(e.target.value)},required:!0}),Object(x.jsxs)(p.a.Group,{children:[Object(x.jsx)("label",{children:"Body"}),Object(x.jsx)(p.a.Control,{as:"textarea",rows:3,className:"my-2",value:m,onChange:function(e){return f(e.target.value)},required:!0})]}),Object(x.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(x.jsx)(N.a,{type:"submit",children:"UPDATE"}),Object(x.jsx)(N.a,{onClick:function(){y.push("/Details_depictor")},className:"btn btn-dark",children:"BACK"})]})]})})]})})]})},H=a.a.createContext(),_=a.a.createContext(),F=a.a.createContext(),I=a.a.createContext(),W=a.a.createContext(),G=a.a.createContext(),M=a.a.createContext(),R=a.a.createContext();var J=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)([]),r=Object(o.a)(n,2),l=r[0],h=r[1],m=Object(s.useState)([]),p=Object(o.a)(m,2),f=p[0],v=p[1],g=Object(s.useState)(!0),N=Object(o.a)(g,2),y=N[0],C=N[1],k=Object(s.useState)([]),S=Object(o.a)(k,2),D=S[0],w=S[1],P=Object(s.useState)([]),E=Object(o.a)(P,2),L=E[0],J=E[1],K=Object(s.useState)({}),z=Object(o.a)(K,2),Q=z[0],V=z[1],X=Object(s.useState)(""),Y=Object(o.a)(X,2),Z=Y[0],$=Y[1];return Object(s.useEffect)((function(){return function(){var e=Object(d.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts",{method:"GET"});case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,console.log(c),a(c),h(c),e.next=11,fetch("https://jsonplaceholder.typicode.com/users",{method:"GET"});case 11:return t=e.sent,e.next=14,t.json();case 14:c=e.sent,console.log(c),v(c),C(!1);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){}}),[]),Object(x.jsxs)("div",{className:"App",children:[y&&Object(x.jsx)(O,{}),!y&&Object(x.jsx)(b.a,{children:Object(x.jsx)(u.c,{children:Object(x.jsx)(H.Provider,{value:c,children:Object(x.jsx)(_.Provider,{value:f,children:Object(x.jsx)(F.Provider,{value:{likedList:D,handleLiked:function(e){var t=D,s=L;c.map((function(c){if(e==c.id&&!t.includes(c)&&(t.unshift(c),s.includes(c))){var a=s.indexOf(c);s.splice(a,1)}})),w(Object(i.a)(t)),J(Object(i.a)(s))}},children:Object(x.jsx)(I.Provider,{value:{dislikedList:L,handleDisliked:function(e){var t=L,s=D;c.map((function(c){if(e==c.id&&!t.includes(c)&&(t.unshift(c),s.includes(c))){var a=s.indexOf(c);s.splice(a,1)}})),J(Object(i.a)(t)),w(Object(i.a)(s))}},children:Object(x.jsx)(W.Provider,{value:function(e){a((function(t){return t.filter((function(t){return t.id!=e}))}))},children:Object(x.jsx)(G.Provider,{value:function(e){var t=[],c=(Object(i.a)(D),new RegExp(e,"i"));l.forEach((function(e){f.forEach((function(s){s.id==e.userId&&s.name.match(c)&&!t.includes(e)&&t.push(e)})),!e.title.match(c)&&!e.body.match(c)||t.includes(e)||t.push(e)})),a(t)},children:Object(x.jsx)(M.Provider,{value:function(e,t,s,a,n,r,i,l,j){var d={userId:f.length+1,id:c.length+1,title:l,body:j},o={id:f.length+1,name:e,email:t,website:s,username:a,company:{name:i},address:{street:n,city:r}};c.unshift(d),f.unshift(o)},children:Object(x.jsxs)(R.Provider,{value:{updateName:Z,updatePost:Q,handleUpdate:function(e){c.map((function(t){e==t.id&&(V(t),f.forEach((function(e){e.id==t.userId&&$(e.name)})))}))},handleUpdateDetails:function(e,t,s,a){c.forEach((function(e){e.id==a&&(e.title=t,e.body=s)}))}},children:[Object(x.jsx)(u.a,{exact:!0,path:"/",children:Object(x.jsx)(q,{})}),Object(x.jsx)(u.a,{path:"/liked",children:Object(x.jsx)(U,{})}),Object(x.jsx)(u.a,{path:"/disliked",children:Object(x.jsx)(B,{})}),Object(x.jsx)(u.a,{path:"/create",children:Object(x.jsx)(A,{})}),Object(x.jsx)(u.a,{path:"/update",children:Object(x.jsx)(T,{})}),Object(x.jsx)(u.a,{path:"/Details_depictor",children:Object(x.jsx)(q,{})})]})})})})})})})})})})]})};c(78);r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(J,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.848af8d7.chunk.js.map