(this["webpackJsonpteste-frontend"]=this["webpackJsonpteste-frontend"]||[]).push([[0],{100:function(e){e.exports=JSON.parse('{"name":"dev","REACT_APP_LOCAL_STORAGE_USER_AUTH":"atdUser","REACT_APP_LOCAL_STORAGE_USER":"atdTest","headers":{"Content-type":"application/json"}}')},101:function(e){e.exports=JSON.parse('{"version":"1.0.0","build":"1"}')},106:function(e,a,t){e.exports=t.p+"static/media/illustration.5785076f.jpg"},107:function(e,a,t){e.exports=t.p+"static/media/noLogged.bc7b1ee3.svg"},108:function(e,a,t){e.exports=t.p+"static/media/noUser.f381ed6c.png"},109:function(e,a,t){e.exports=t.p+"static/media/coding.99879645.svg"},110:function(e,a,t){e.exports=t.p+"static/media/waveFooter.f1017bcd.svg"},118:function(e,a,t){e.exports=t(143)},127:function(e,a,t){},128:function(e,a,t){},132:function(e,a,t){},133:function(e,a,t){},134:function(e,a,t){},135:function(e,a,t){},137:function(e,a,t){},138:function(e,a,t){},141:function(e,a,t){},143:function(e,a,t){"use strict";t.r(a);var n,r=t(0),l=t.n(r),o=t(10),c=t.n(o),i=t(29),m=t(88),s=t(14),u=t(18),d=t(102),E=t.n(d),p=(t(127),t(34)),b=t(83),g=t(99),h=t.n(g),f=(t(128),t(19)),v=t(26),O=t(20);!function(e){e.UPDATE_USER="@constructionCompany/HANDLE_USER",e.REMOVE_USER="@constructionCompany/REMOVE_USER"}(n||(n={}));var j=t(47),y=t(100),S=t(101),N=Object(j.a)(Object(j.a)({},y),S),k=function(e){var a={show:e.show,onHide:e.onHide},t=Object(i.b)(),o=Object(r.useState)(""),c=Object(u.a)(o,2),m=c[0],s=c[1],d=Object(r.useState)(""),E=Object(u.a)(d,2),p=E[0],b=E[1];return l.a.createElement(f.a,Object.assign({},a,{"aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(f.a.Header,{closeButton:!0},l.a.createElement("h4",null,"Entrar no AjudaJP")),l.a.createElement(f.a.Body,null,l.a.createElement(O.a,null,l.a.createElement(O.a.Group,{controlId:"formBasicEmail"},l.a.createElement(O.a.Label,null,"Nome"),l.a.createElement(O.a.Control,{type:"text",placeholder:"Digite seu nome",value:m,onChange:function(e){return s(e.target.value)}})),l.a.createElement(O.a.Group,{controlId:"formBasicPassword"},l.a.createElement(O.a.Label,null,"Senha"),l.a.createElement(O.a.Control,{type:"password",placeholder:"Senha",value:p,onChange:function(e){return b(e.target.value)}})))),l.a.createElement(f.a.Footer,null,l.a.createElement(v.a,{onClick:function(){if(""!==m&&""!==p){var e={id:"123456",token:"token_valido",email:m,name:m};localStorage.setItem(N.REACT_APP_LOCAL_STORAGE_USER,"token_valido"),localStorage.setItem("userLogin",JSON.stringify({user:e})),t((r={user:e},{type:n.UPDATE_USER,payload:r})),a.onHide()}var r},className:"primary-button"},"Entrar"),l.a.createElement(v.a,{onClick:a.onHide,className:"secondary-button",variant:"outline-light"},"Fechar")))},C=function(){var e=Object(i.c)((function(e){return e.user.user})),a=Object(i.b)(),t=Object(r.useState)(!1),o=Object(u.a)(t,2),c=o[0],m=o[1],s=function(){a({type:n.REMOVE_USER})},d=function(e){var a;null===(a=document.querySelector(e))||void 0===a||a.scrollIntoView({behavior:"smooth"})};return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{id:"navBar",collapseOnSelect:!0,expand:"lg"},l.a.createElement(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(b.a.Collapse,{id:"basic-Menu-nav"},l.a.createElement(p.a,{activeKey:"/"},l.a.createElement("div",{className:"container-nav left"},l.a.createElement("div",{className:"container-logo"},l.a.createElement("img",{src:h.a,alt:"logo-AutonoDev"}),l.a.createElement("h3",null,"juda",l.a.createElement("span",null,"JP"))),l.a.createElement(p.a.Item,null,l.a.createElement(p.a.Link,{href:"/"},"In\xedcio")),l.a.createElement(p.a.Item,null,l.a.createElement(p.a.Link,{eventKey:"link-1",onClick:function(){return d(".container-pagemap")}},"Mapa")),l.a.createElement(p.a.Item,null,l.a.createElement(p.a.Link,{eventKey:"link-2",onClick:function(){return d(".container-aboutMe")}},"Sobre"))),l.a.createElement("div",{className:"container-nav right"},l.a.createElement(p.a.Item,null,l.a.createElement(p.a.Link,{onClick:function(){""===e.name?m(!0):s()}},l.a.createElement(E.a,{style:{marginRight:10}}),""!==e.token?e.name:"Entrar")))))),l.a.createElement(k,{show:c,onHide:function(){return m(!1)}}))},_=(t(132),t(175)),A=t(106),w=t.n(A),R=function(){return l.a.createElement("div",{className:"wrapper-apresentation"},l.a.createElement("div",{className:"container-right"},l.a.createElement("div",{className:"info"},l.a.createElement("h3",null,"Fa\xe7a o papel de cidad\xe3o de uma maneira diferente aqui no AjudaJP."),l.a.createElement("p",null,"De um jeito f\xe1cil e r\xe1pido voc\xea poder\xe1 ajudar a melhorar os bairros de Jo\xe3o Pessoa, ajude sua cidade agora escolhendo uma zona e bairro, comentando o que precisa para melhora-lo."),l.a.createElement("button",{className:"primary-button",onClick:function(){var e;return null===(e=document.querySelector(".container-pagemap"))||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}},"Quero ajudar",l.a.createElement(_.a,null)))),l.a.createElement("div",{className:"container-left"},l.a.createElement("img",{src:w.a,alt:""})))},L=(t(133),t(112)),P=t(93),H=t(177),I=t(179),U=t(180),x=t(187),z=t(189),M=t(181),T=t(176),F=t(185),B=t(190),J=t(188),D=t(178),G=(t(134),t(107)),q=t.n(G),V=function(e){var a=e.show,t=e.onHide,n=e.neighborhood,o=e.openLogin,c=e.sendMessage,m={show:a,onHide:t},s=Object(i.c)((function(e){return e.user.user})),d=Object(r.useState)(""),E=Object(u.a)(d,2),p=E[0],b=E[1];return l.a.createElement(f.a,Object.assign({},m,{"aria-labelledby":"contained-modal-title-vcenter",centered:!0}),""!==s.token?l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a.Header,{closeButton:!0},l.a.createElement("h5",null,"Comente sobre o bairro ",l.a.createElement("span",null,n))),l.a.createElement(f.a.Body,null,l.a.createElement(O.a,null,l.a.createElement(O.a.Group,{controlId:"formBasicEmail"},l.a.createElement(O.a.Label,null,"Mensagem"),l.a.createElement(O.a.Control,{type:"text",placeholder:"Digite aqui sobre o bairro",as:"textarea",rows:3,value:p,onChange:function(e){return b(e.target.value)}})))),l.a.createElement(f.a.Footer,null,l.a.createElement(v.a,{onClick:function(){""!==p&&(m.onHide(),c(p),b(""))},className:"primary-button"},"Enviar"),l.a.createElement(v.a,{onClick:m.onHide,className:"secondary-button",variant:"outline-light"},"Fechar"))):l.a.createElement("div",{className:"container-noLogged"},l.a.createElement(f.a.Header,{closeButton:!0}),l.a.createElement("div",{className:"content-img"},l.a.createElement("img",{src:q.a,alt:"noLoggedUser"}),l.a.createElement("h4",null,"Ops..."),l.a.createElement("p",null,"Para comentar \xe9 necess\xe1rio que voc\xea esteja autenticado")),l.a.createElement(f.a.Footer,null,l.a.createElement(v.a,{onClick:o,className:"primary-button"},"Entrar"),l.a.createElement(v.a,{onClick:m.onHide,className:"secondary-button",variant:"outline-light"},"Fechar"))))},Z=(t(135),t(108)),K=t.n(Z),W=function(e){var a=e.show,t=e.onHide,n=e.info,r={show:a,onHide:t},o=Object(i.c)((function(e){return e.user.user}));return l.a.createElement(f.a,Object.assign({},r,{"aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(f.a.Header,{closeButton:!0},l.a.createElement("h5",null,"Obrigado por participar do ",l.a.createElement("strong",null,"AjudaJP"))),l.a.createElement(f.a.Body,null,l.a.createElement("div",{className:"data-user"},l.a.createElement("img",{src:K.a,alt:"avatar"}),l.a.createElement("h5",null," ",o.name," ")),l.a.createElement("h5",{className:"title"},"Bairro selecionado"),l.a.createElement("p",null,"Zona ",n.zone,", ",n.neighborhoodName,", id ",n.id),l.a.createElement("h5",{className:"title"},"Mensagem enviada"),l.a.createElement("p",null,n.message)),l.a.createElement(f.a.Footer,{className:"footer-modalSuccess"},l.a.createElement(v.a,{onClick:r.onHide,className:"secondary-button",variant:"outline-light"},"Fechar")))},Q=function(){var e=dataJSON.neighborhoods,a=Object(r.useState)([-7.1402162,-34.8881228]),t=Object(u.a)(a,2),n=t[0],o=(t[1],Object(r.useState)([])),c=Object(u.a)(o,2),i=c[0],m=c[1],s=Object(r.useState)(0),d=Object(u.a)(s,2),E=d[0],p=d[1],b=Object(r.useState)(!0),g=Object(u.a)(b,2),h=g[0],f=g[1],j=Object(r.useState)(!1),y=Object(u.a)(j,2),S=y[0],N=y[1],C=Object(r.useState)(!1),_=Object(u.a)(C,2),A=_[0],w=_[1],R=Object(r.useState)({name:"",id:0,location:[0,0]}),G=Object(u.a)(R,2),q=G[0],Z=G[1],K=Object(r.useState)(!1),Q=Object(u.a)(K,2),X=Q[0],Y=Q[1],$=Object(r.useState)(!1),ee=Object(u.a)($,2),ae=ee[0],te=ee[1],ne=Object(r.useState)(""),re=Object(u.a)(ne,2),le=re[0],oe=re[1];Object(r.useEffect)((function(){e.map((function(e){e.zone===E?m(e.neighborhood):0===E&&m([])}))}),[E]);return l.a.createElement("div",{className:"container-pagemap"},l.a.createElement("div",{className:"left"},l.a.createElement("div",{className:h?"content-search":"content-search close"},l.a.createElement("h5",null,"Pesquisar por zona"),l.a.createElement(O.a,{className:"form-search"},l.a.createElement(T.a,{variant:"outlined",size:"small",style:{width:"100%"}},l.a.createElement(F.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",onChange:function(e){return p(Number(e.target.value))},value:E,IconComponent:function(){return l.a.createElement(H.a,{style:{marginRight:10,color:"#777"}})}},l.a.createElement(B.a,{value:0,style:{fontFamily:'"Montserrat", sans-serif'}},l.a.createElement("em",null,"Selecione uma zona")),e.map((function(e){return l.a.createElement(B.a,{key:e.zone,value:e.zone,style:{paddingRight:0}},l.a.createElement(L.a,{trigger:"hover",placement:"right-start",overlay:l.a.createElement(P.a,{id:"popover-basic"},e.neighborhood.map((function(e){return l.a.createElement(P.a.Content,{key:e.id},e.name)})))},l.a.createElement("div",{style:{width:"100%",fontFamily:'"Montserrat", sans-serif'}},"Zona ".concat(e.zone))))}))))),l.a.createElement("div",{style:{display:"flex",alignItems:"center",marginTop:10}},l.a.createElement(J.a,{checked:S,onChange:function(e){return N(e.target.checked)},color:"primary"}),l.a.createElement("span",null,S?"Desabilitar":"Habilitar"," zoom")),!!i.length&&l.a.createElement("div",{className:"container-choiceNeighborhood"},l.a.createElement(D.a,{style:{margin:"10px 0 20px 0",width:"100%"}}),l.a.createElement("div",{className:"container-neighborhoods"},i.map((function(e){return l.a.createElement("div",{className:"wrapper-button",key:e.id},l.a.createElement(v.a,{className:"primary-button",onClick:function(){return function(e){w(!0),Z(e)}(e)}},e.name))}))))),l.a.createElement("button",{className:"buttonShow",onClick:function(){return f(!h)}},h?l.a.createElement(I.a,{fontSize:"large"}):l.a.createElement(U.a,{fontSize:"large"}))),l.a.createElement("div",{className:"right"},l.a.createElement(x.a,{center:n,zoom:12,scrollWheelZoom:S,doubleClickZoom:!1,zoomControl:!1},l.a.createElement(z.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),i.map((function(e){return l.a.createElement(M.a,{position:e.location,key:e.id})})))),l.a.createElement(V,{show:A,onHide:function(){return w(!1)},neighborhood:q.name,openLogin:function(){return Y(!0)},sendMessage:function(e){oe(e),te(!0)}}),l.a.createElement(k,{show:X,onHide:function(){return Y(!1)}}),l.a.createElement(W,{show:ae,onHide:function(){te(!1),oe("")},info:{message:le,zone:E,id:q.id,neighborhoodName:q.name}}))},X=(t(137),t(109)),Y=t.n(X),$=t(182),ee=t(183),ae=t(184),te=function(){return l.a.createElement("div",{className:"container-aboutMe"},l.a.createElement("div",{className:"left"},l.a.createElement("img",{src:"https://projecthope1.s3.amazonaws.com/d811684694eb663f60942b343ef46a73-me.jpg",alt:"pict-me"}),l.a.createElement("div",{className:"container-info"},l.a.createElement("h4",null,"Arthur Ruan"),l.a.createElement("p",null,"Graduando em Engenharia de Computa\xe7\xe3o - UFPB",l.a.createElement("br",null),"Desenvolvedor Web e Mobile"),l.a.createElement("div",{className:"container-redes"},l.a.createElement("a",{href:"https://www.linkedin.com/in/arthur-ruan-297431193/",target:"_blank"},l.a.createElement($.a,null)),l.a.createElement("a",{href:"https://github.com/arthuruan",target:"_blank"},l.a.createElement(ee.a,{className:"git"})),l.a.createElement("a",{href:"mailto:arthur.ruan@lavid.ufpb.br",target:"_blank"},l.a.createElement(ae.a,null))))),l.a.createElement("div",{className:"right"},l.a.createElement("img",{src:Y.a,alt:"coding-img"})))},ne=(t(138),t(110)),re=t.n(ne),le=function(){var e=function(e){var a;null===(a=document.querySelector(e))||void 0===a||a.scrollIntoView({behavior:"smooth"})};return l.a.createElement("div",{className:"container-footerPage"},l.a.createElement("div",{className:"wave"},l.a.createElement("img",{src:re.a,alt:"wave"}),l.a.createElement("div",{className:"container-fastLinks"},l.a.createElement("h4",null,"Links r\xe1pidos"),l.a.createElement("div",{className:"links"},l.a.createElement("a",{onClick:function(){return e("#navBar")}},"In\xedcio"),l.a.createElement("a",{onClick:function(){return e(".container-pagemap")}},"Mapa"))),"AjudaJP \xa92020 Created by Arthur Ruan"))},oe=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(C,null),l.a.createElement(R,null),l.a.createElement(Q,null),l.a.createElement(te,null),l.a.createElement(le,null))};function ce(){return l.a.createElement(s.d,null,l.a.createElement(s.b,{exact:!0,path:"/",component:oe}),l.a.createElement(s.a,{from:"*",to:"/"}))}var ie=function(){return l.a.createElement(m.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(s.d,null,l.a.createElement(ce,null))))},me=t(92),se=t(51),ue=(t(140),t(111)),de=localStorage.getItem(N.REACT_APP_LOCAL_STORAGE_USER),Ee=JSON.parse(localStorage.getItem("userLogin")),pe={user:{id:"",token:"",email:"",name:""}};de&&(pe.user=Ee.user);var be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,a=arguments.length>1?arguments[1]:void 0,t=e;switch(a.type){case n.UPDATE_USER:return t.user=a.payload.user,Object(j.a)(Object(j.a)({},e),t);case n.REMOVE_USER:return localStorage.removeItem("userLogin"),localStorage.removeItem(N.REACT_APP_LOCAL_STORAGE_USER),pe.user={id:"",token:"",email:"",name:""},Object(j.a)(Object(j.a)({},e),pe);default:return e}},ge=Object(se.c)({user:be}),he=[];he=[].concat(Object(me.a)(he),[ue.a]);var fe=Object(se.d)(ge,se.a.apply(void 0,Object(me.a)(he)));t(141),t(142);c.a.render(l.a.createElement(i.a,{store:fe},l.a.createElement(ie,null)),document.getElementById("root"))},99:function(e,a,t){e.exports=t.p+"static/media/logo.5e442618.png"}},[[118,1,2]]]);
//# sourceMappingURL=main.202c94c2.chunk.js.map