(this["webpackJsonpcovid-estados"]=this["webpackJsonpcovid-estados"]||[]).push([[0],{107:function(e,a,t){},108:function(e,a,t){},109:function(e,a,t){},111:function(e,a,t){},147:function(e,a,t){},148:function(e,a,t){},149:function(e,a,t){},150:function(e,a,t){},151:function(e,a,t){},152:function(e,a,t){},153:function(e,a,t){},154:function(e,a,t){"use strict";t.r(a);var n={};t.r(n),t.d(n,"estados",(function(){return h}));var o=t(0),r=t.n(o),c=t(18),l=t.n(c),i=t(14),s=t(6),m=t(35),d=t(13),u=t(47),p=(t(89),t(48)),f="estados/load",v="estados/success",E="estados/error",g="estados/set",b={load:!1,fetch:!1,data:[],details:[],error:""};function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case f:return Object(s.a)(Object(s.a)({},e),{},{load:!0});case v:return Object(s.a)(Object(s.a)(Object(s.a)({},e),a.payload),{},{load:!1});case E:return Object(s.a)(Object(s.a)({},e),{},{error:a.payload,load:!1});case g:return Object(s.a)(Object(s.a)({},e),{},{estado:a.payload});default:return e}}var x=[];x=[].concat(Object(m.a)(x),[u.a]);var N=Object(d.createStore)(Object(d.combineReducers)(Object(s.a)({},n)),Object(p.composeWithDevTools)(d.applyMiddleware.apply(void 0,Object(m.a)(x)))),y=t(20),O=t(21),k=t(24),j=t(23),w=t(29),C=t.n(w),_=t(49),M=t(30),I=t.n(M),D=function(e){for(var a=e.split("\n"),t=[],n=a[0].split(","),o=1;o<a.length;o++){for(var r={},c=a[o].split(","),l=0;l<n.length;l++)r[n[l].replace(/\s/g,"").toLowerCase()]=c[l];t.push(r)}return t};function S(e){var a={"-":" ",a:"\xe1|\xe0|\xe3|\xe2|\xc0|\xc1|\xc3|\xc2",e:"\xe9|\xe8|\xea|\xc9|\xc8|\xca",i:"\xed|\xec|\xee|\xcd|\xcc|\xce",o:"\xf3|\xf2|\xf4|\xf5|\xd3|\xd2|\xd4|\xd5",u:"\xfa|\xf9|\xfb|\xfc|\xda|\xd9|\xdb|\xdc",c:"\xe7|\xc7",n:"\xf1|\xd1"};for(var t in e=e.toLowerCase(),a)e=e.replace(new RegExp(a[t],"g"),t);return e}var A=function(){return function(){var e=Object(_.a)(C.a.mark((function e(a,t){var n,o,r,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:f}),e.prev=1,e.next=4,I.a.get("https://api.airtable.com/v0/appelr2zBXKCJPWJS/covidmx?api_key=keymOwmuSwgNcTH7p&sort%5B0%5D%5Bfield%5D=estado");case 4:return n=e.sent,o=n.data.records,e.next=8,I.a.get("https://raw.githubusercontent.com/mexicovid19/Mexico-datos/master/datos/estados_hoy.csv").then((function(e){return D(e.data)}));case 8:r=e.sent,c=o.map((function(e){return Object(s.a)({option:e.fields.estado,url:"/estado/".concat(S(e.fields.estado)),id:S(e.fields.estado)},e.fields)})),a({type:v,payload:{data:c,details:r}}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),a({type:E,payload:e.t0});case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(a,t){return e.apply(this,arguments)}}()},q=t(9),R=t(7),P=t(5),B=(t(107),t(3)),F=t.n(B),L=(t(108),function(e){var a=e.children,t=e.direction,n=void 0===t?"row":t,o=e.alignItems,c=void 0===o?"":o,l=e.className,i=void 0===l?"":l;return r.a.createElement("div",{className:"container direction-".concat(n," ").concat(c," ").concat(i)},a)});L.prototype={children:F.a.element.isRequired,direction:F.a.oneOf(["column","row"]),alignItems:F.a.oneOf(["center","end"]),className:F.a.string};var T=L,U=t(77),H=(t(109),function(e){var a=e.options,t=void 0===a?{}:a,n=e.placeholder,c=e.type,l=Object(o.useState)(!1),i=Object(U.a)(l,2),s=i[0],m=i[1],d=Object(P.g)().id;return Object(o.useEffect)((function(){m(!1)}),[d]),r.a.createElement("nav",{className:"states ".concat(c)},r.a.createElement("button",{className:"states-action",onClick:function(){return m(!s)},type:"button"},n),s&&r.a.createElement("div",{className:"states-options"},t.map((function(e,a){return r.a.createElement(R.b,{className:"states-option ".concat((t=e,d===t.id?"active":"")),to:e.url,key:a},e.option);var t}))))});H.defaultProps={placeholder:"select",type:"blue"},H.prototype={placeholder:F.a.object.isRequired,type:F.a.oneOf(["blue","white"]),options:F.a.arrayOf(F.a.shape({option:F.a.string,url:F.a.string}))};var z=H,Q=(t(111),function(e){var a=e.title,t=e.value;return r.a.createElement("div",{className:"counter"},r.a.createElement("p",null,a),r.a.createElement("span",null,t))});Q.prototype={title:F.a.string.isRequired,value:F.a.number.isRequired};var W=Q,J=function(e){var a=e.children,t=e.variant;return r.a.createElement("span",{className:"badge badge-".concat(t)},a)},V=function(e){var a=e.children,t=e.direction,n=void 0===t?"row":t,o=e.color,c=void 0===o?"base":o,l=e.className,i=void 0===l?"":l;return r.a.createElement("div",{className:"box direction-".concat(n," color-").concat(c," ").concat(i)},a)},G=function(e){var a=e.image,t=e.text,n=e.link,o=void 0===n?"#":n;return r.a.createElement("a",{className:"icon",href:o,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",null,r.a.createElement("img",{src:a,alt:t})),r.a.createElement("span",null,t))},X=function(e){var a=e.v,t=e.className,n=void 0===t?"":t,o="";return o="whatsapp"===a[0]?"https://api.whatsapp.com/send?phone=".concat(a[1]):"correo"===a[0]?"mailto:".concat(a[1]):a[1],r.a.createElement("div",{className:"".concat(n)},r.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},a[0].toUpperCase()))},Y=t(50),K=function(e){return r.a.createElement(Y.WaveLoading,Object.assign({color:"#5176FF"},e))},Z=(t(147),t(53)),$=t.n(Z);var ee=Object(i.b)((function(e){var a=e.estados;return{estados:a.data,load:a.load}}))((function(e){var a=e.estados,t=e.load;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(K,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"cover"},r.a.createElement("h1",{className:"mobile-title"},"Directorio",r.a.createElement("br",null),"COVID Mx"),r.a.createElement("img",{src:$.a,alt:"Home COVID CodeandoMexico"})),r.a.createElement("div",{className:"msg"},r.a.createElement("h1",{className:"desk-title"},"Directorio",r.a.createElement("br",null),"COVID Mx"),r.a.createElement("p",null,"Una espacio con informaci\xf3n oficial por estado para quien no sabe qu\xe9 hacer"),r.a.createElement(z,{options:a,placeholder:"[SELECCIONA]"})))))})),ae=t(54),te=Object(ae.a)((function(e,a){var t=e.estados,n=t.data,o=t.details,r=n.find((function(e){return e.id===a}))||{},c=r.option,l=c;switch(c){case"Estado de M\xe9xico":l="M\xe9xico"}var i=o.find((function(e){return e.estado===l&&l.trim()}));return Object(s.a)(Object(s.a)({},r),i)}),(function(e){return e}));var ne=function(){return r.a.createElement("h2",null,"P\xe1gina no encontrada")},oe=(t(148),t(55)),re=t.n(oe),ce=t(56),le=t.n(ce),ie=t(57),se=t.n(ie),me=t(58),de=t.n(me),ue=t(59),pe=t.n(ue);function fe(e){var a=e.item,t=[],n=[];return a&&(a.violencia_genero_en_linea&&"no"!==a.violencia_genero_en_linea&&(t=a.violencia_genero_en_linea.split(",").map((function(e){return e.split(" ")}))),a.violencia_genero_telefono&&"no"!==a.violencia_genero_telefono&&(n=a.violencia_genero_telefono.split(","))),r.a.createElement(T,{direction:"column",className:"bgBlue"},r.a.createElement(T,{className:"mobileColumn pd-1"},r.a.createElement(T,{direction:"column",alignItems:"center"},r.a.createElement(T,{direction:"row",alignItems:"center"},r.a.createElement("h1",{className:"info-relevante"},"Informaci\xf3n relevante")),r.a.createElement("img",{src:de.a,alt:"Informaci\xf3n relevante"})),r.a.createElement(T,{direction:"column"},r.a.createElement(V,{direction:"column",className:"box-linea-violencia"},r.a.createElement("h3",{className:"titulo-lineas-violencia"},"L\xedneas de atenci\xf3n a violencia de g\xe9nero"),r.a.createElement(T,null,r.a.createElement(T,{direction:"column",className:"iallevamediosita"},n.length>0&&r.a.createElement(T,null,r.a.createElement("div",{class:"atenciones"},r.a.createElement("div",null,r.a.createElement("h5",{class:"atencion-text"},"Atenci\xf3n v\xeda telef\xf3nica "," ")),n.map((function(e,a){return r.a.createElement("div",{key:a},e)})))),t.length>0&&r.a.createElement(T,null,r.a.createElement("div",{class:"atenciones"},r.a.createElement("div",null,r.a.createElement("h5",{class:"atencion-text"},"Atenci\xf3n en l\xednea "," ")),t.map((function(e,a){return r.a.createElement(X,{key:a,v:e,className:"link-atenciones"})}))))),r.a.createElement("img",{src:pe.a,alt:"Tel\xe9fono"}))),r.a.createElement(T,null,"no"!==a.programas&&r.a.createElement(G,{image:le.a,text:"Programas",link:a.programas}),"no"!==a.whatsapp&&r.a.createElement(G,{image:se.a,text:"whatsapp",link:a.whatsapp}),"no"!==a.centros_salud&&r.a.createElement(G,{image:re.a,text:"Centros de salud",link:a.centros_salud})))),r.a.createElement(T,{alignItems:"center",className:"pd-1"},r.a.createElement("h4",null,"Para m\xe1s informaci\xf3n: "),r.a.createElement("div",null,r.a.createElement("a",{href:a.web,className:"button",target:"_blank",rel:"noopener noreferrer",style:{padding:"1rem"}},r.a.createElement("button",null,"SITIO WEB OFICIAL")))))}var ve=t(60),Ee=t.n(ve),ge=t(61),be=t.n(ge),he=t(62),xe=t.n(he),Ne=t(63),ye=t.n(Ne),Oe=t(64),ke=t.n(Oe),je={app_android:{icon:be.a,text:"App-and"},sms:{icon:ye.a,text:"Sms"},app_ios:{icon:ke.a,text:"App-ios"},prueba_web:{icon:xe.a,text:"Sitio Web"}};function we(e){var a=e.item,t=0===Object.keys(je).filter((function(e){return"no"!==a[e]})).length;return r.a.createElement(T,{className:"jumbotron color-primary"},r.a.createElement(T,{direction:"column",alignItems:"center"},r.a.createElement(T,{direction:"column"},r.a.createElement("h2",{className:"title"},"\xbfTienes s\xedntomas?"),r.a.createElement("h4",{className:"subtitle"},"Haz la prueba en l\xednea"),t&&r.a.createElement("p",null,"No hay informaci\xf3n por el momento."),!t&&r.a.createElement(T,{direction:"grid"},Object.keys(je).map((function(e){return"no"!==a[e]&&r.a.createElement(G,{image:je[e].icon,text:je[e].text,link:a[e]})}))))),r.a.createElement(T,{className:"movileHide"},r.a.createElement("img",{src:Ee.a,alt:"Qu\xe9date en casa"})))}var Ce=t(65),_e=t.n(Ce),Me=t(22),Ie=t.n(Me),De={typeCases:[{key:"confirmadosnuevos",label:"Casos Nuevos"},{key:"confirmadostotales",label:"Casos Activos"},{key:"negativostotales",label:"Defunciones"}]},Se=(t(149),function(){var e=Object(P.g)().id,a=Object(i.c)((function(e){return e.estados})),t=a.data,n=a.load,o=Object(i.c)((function(a){return te(a,e)})),c=Object.keys(o).length>0,l=o||{},s=l.estado,m=l.telefono,d=m?m.split(","):[],u=function(e,a){var t=[];if("nivel"===a?t=[{text:"m\xe1ximo",value:"red"},{text:"alto",value:"orange"},{text:"medio",value:"yellow"},{text:"bajo",value:"green"}]:"tendencia"===a&&(t=[{text:"incremento",value:"red"},{text:"estable",value:"orange"},{text:"moderado",value:"yellow"},{text:"franco",value:"green"},{text:"sin informaci\xf3n",value:"gray"}]),0===t.length)return"red";for(var n in t)if(-1!==e.indexOf(t[n].text))return t[n].value};return n||c?n?r.a.createElement(K,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null,r.a.createElement(T,{direction:"column",className:"estado"},r.a.createElement(R.c,{className:"estado-codeando",to:"/"},r.a.createElement("img",{src:Ie.a,alt:"codeando mexico"})),r.a.createElement("div",{className:"flex"},r.a.createElement("h1",{className:"estado-title"},s),r.a.createElement("p",null,"\xbfTe interesa informaci\xf3n de otro estado?"),r.a.createElement(z,{options:t,type:"white",placeholder:"[SELECCIONA]"})),r.a.createElement("p",{className:"hidden-mobile"},"Qu\xe9date en casa y l\xe1vate las manos.")),r.a.createElement(T,{direction:"column",className:"pd-1"},r.a.createElement(V,{direction:"column"},r.a.createElement(T,null,De.typeCases.map((function(e,a){return r.a.createElement(W,{title:e.label,value:o[e.key],key:a})}))),r.a.createElement("div",{className:"button-box"},r.a.createElement("a",{href:"https://coronavirus.gob.mx/datos/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",null,"Conoce m\xe1s")))),r.a.createElement(V,{direction:"column"},r.a.createElement(T,{className:"center"},r.a.createElement("h4",null,"L\xedneas locales de atenci\xf3n")),r.a.createElement(T,{className:"phone-container"},r.a.createElement("ul",{className:"decoration"},d.map((function(e,a){return r.a.createElement("li",{key:a},e)}))),r.a.createElement("img",{src:_e.a,alt:"Qu\xe9date en casa"})))),r.a.createElement(T,{className:"pd-1"},r.a.createElement(V,{direction:"column"},r.a.createElement("h3",null,"SEM\xc1FORO"),r.a.createElement("div",null,"Nivel de riesgo:",r.a.createElement(J,{variant:u(o["nivel de riesgo"],"nivel"),direction:"column"},o["nivel de riesgo"])),r.a.createElement("div",null,"Tendencia:",r.a.createElement(J,{variant:u(o.tendencia,"tendencia"),direction:"column"},o.tendencia)),r.a.createElement("p",{className:"mt"},o["medidas-01"])))),r.a.createElement(we,{item:o}),r.a.createElement(fe,{item:o}),r.a.createElement("div",{className:"content text-center color-primary"},r.a.createElement("p",null,"*Este es un esfuerzo voluntario, si encuentras informaci\xf3n incorrecta o quieres agregar algo, llena este ",r.a.createElement("a",{href:"https://docs.google.com/forms/d/1HhbbSjhkRB9rYA32lnm0b6e5mUQpDk8Eq_Yrl7-MUjI/viewform?edit_requested=true",target:"_blank",rel:"noopener noreferrer"},"formulario")),r.a.createElement("a",{href:"https://airtable.com/shrmp4rtdUkGu8BAn",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",null,"DESCARGAR DATOS")))):r.a.createElement(P.b,{component:ne})}),Ae=t(66),qe=t.n(Ae),Re=t(67),Pe=t.n(Re),Be=t(68),Fe=t.n(Be),Le=t(69),Te=t.n(Le);t(150);var Ue=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"about-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("img",{src:qe.a,alt:"Proyecto"})),r.a.createElement("div",{className:"col col-text"},r.a.createElement("h4",null,"Sobre el proyecto"),r.a.createElement("p",null,"Con el fin de la emergencia a nivel nacional, ahora es competencia de los 32 estados definir protocolos y medidas para hacer frente al COVID19. Este proyecto recopila, sistematiza y facilita el acceso a informaci\xf3n oficial relevante, l\xedneas de atenci\xf3n y medidas de restricci\xf3n o protecci\xf3n implementadas por los gobiernos estatales."))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("img",{src:Pe.a,alt:"Metodologia"})),r.a.createElement("div",{className:"col col-text"},r.a.createElement("h4",null,"Metodolog\xeda"),r.a.createElement("p",null,"\xbfQuieres replicar este proyecto en tu pa\xeds? Descarga nuestra metodolog\xeda. Si necesitas asistencia t\xe9cnica, puedes escribirnos a equipo@codeandomexico.org"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("img",{src:Fe.a,alt:"Codeando"})),r.a.createElement("div",{className:"col col-text"},r.a.createElement("h4",null,"Sobre CMX"),r.a.createElement("p",null,"Codeando M\xe9xico es una comunidad de hackers c\xedvicos que busca generar nuevas formas de participaci\xf3n ciudadana a trav\xe9s de la tecnolog\xeda. Colaboramos con personas de todos los perfiles: activistas, periodistas, funcionarias p\xfablicas, dise\xf1adoras.")))),r.a.createElement("footer",{className:"sponsors"},r.a.createElement("div",{className:"about-container"},r.a.createElement("h4",null,"Con el apoyo de"),r.a.createElement("img",{src:Te.a,alt:"NDI logo"}))))},He=t(70),ze=t.n(He),Qe=t(71),We=t.n(Qe),Je=t(72),Ve=t.n(Je),Ge=t(73),Xe=t.n(Ge);t(151);var Ye=function(){return r.a.createElement("header",{className:"nav-main"},r.a.createElement(R.c,{to:"/"},r.a.createElement("img",{className:"nav-codeando",src:ze.a,alt:"codeando mexico"})),r.a.createElement("div",{className:"nav-sobre"},r.a.createElement(R.c,{className:"nav-link",to:"/sobre-el-proyecto"},"Sobre el proyecto"),r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.facebook.com/CodeandoMexico",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"nav-redes",src:We.a,alt:"facebook"})),r.a.createElement("a",{href:"https://twitter.com/CodeandoMexico",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"nav-redes",src:Ve.a,alt:"twitter"})),r.a.createElement("a",{href:"https://github.com/CodeandoMexico/covid-estados",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"nav-redes",src:Xe.a,alt:"github"})))))},Ke=t(74),Ze=t.n(Ke),$e=t(75),ea=t.n($e),aa=t(76),ta=t.n(aa);t(152);var na=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"footer"},r.a.createElement(R.c,{to:"/"},r.a.createElement("img",{src:Ie.a,alt:"codeando mexico"})),r.a.createElement("p",null,"Hecho con ",r.a.createElement("span",{role:"img","aria-label":"sheep"},"\u2764\ufe0f")," por la comunidad de"," ",r.a.createElement("a",{className:"footer-link",href:"http://codeandomexico.org/",target:"_blank",rel:"noopener noreferrer"},"Codeando M\xe9xico")),r.a.createElement("div",{className:"footer-social"},r.a.createElement(R.c,{className:"footer-link",to:"/sobre-el-proyecto"},"Sobre el proyecto"),r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.facebook.com/CodeandoMexico",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"footer-redes",src:Ze.a,alt:"facebook"})),r.a.createElement("a",{href:"https://twitter.com/CodeandoMexico",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"footer-redes",src:ea.a,alt:"twitter"})),r.a.createElement("a",{href:"https://github.com/CodeandoMexico/covid-estados",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"footer-redes",src:ta.a,alt:"github"}))))))},oa=(t(153),t(25)),ra=function(e){Object(k.a)(t,e);var a=Object(j.a)(t);function t(){return Object(y.a)(this,t),a.apply(this,arguments)}return Object(O.a)(t,[{key:"componentDidMount",value:function(){this.logPageChange(this.props.location.pathname,this.props.location.search)}},{key:"componentDidUpdate",value:function(e){var a=e.location,t=this.props.location,n=t.pathname,o=t.search,r=n!==a.pathname,c=o!==a.search;(r||c)&&this.logPageChange(n,o)}},{key:"logPageChange",value:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=e+a,n=window,o=n.location;oa.a.set(Object(s.a)({page:t,location:"".concat(o.origin).concat(t)},this.props.options)),oa.a.pageview(t)}},{key:"render",value:function(){return null}}]),t}(o.Component),ca=function(){return r.a.createElement(P.b,{component:ra})},la=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=!0;return e&&oa.a.initialize("UA-170809396-1"),e},ia=function(e){Object(k.a)(t,e);var a=Object(j.a)(t);function t(){return Object(y.a)(this,t),a.apply(this,arguments)}return Object(O.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.actions.getEstados)()}},{key:"render",value:function(){var e=Object(q.a)();return r.a.createElement(R.a,{history:e},la()&&r.a.createElement(ca,null),r.a.createElement(Ye,null),r.a.createElement(P.d,null,r.a.createElement(P.a,{from:"/home",to:"/"}),r.a.createElement(P.b,{exact:!0,path:"/",component:ee}),r.a.createElement(P.b,{path:"/estado/:id",component:Se}),r.a.createElement(P.b,{path:"/sobre-el-proyecto",component:Ue}),r.a.createElement(P.b,{component:ee})),r.a.createElement(na,null))}}]),t}(r.a.Component),sa=Object(i.b)(null,(function(e){return{actions:Object(d.bindActionCreators)({getEstados:A},e)}}))(ia);l.a.render(r.a.createElement(i.a,{store:N},r.a.createElement(sa,null)),document.getElementById("codeandocovid"))},22:function(e,a,t){e.exports=t.p+"static/media/codeandomexico-bco.90b7b0e1.svg"},53:function(e,a,t){e.exports=t.p+"static/media/home.684f0a9a.svg"},55:function(e,a,t){e.exports=t.p+"static/media/hospital.6bd8ce18.svg"},56:function(e,a,t){e.exports=t.p+"static/media/docs.9c1bdd82.svg"},57:function(e,a,t){e.exports=t.p+"static/media/whatsapp.ce506480.svg"},58:function(e,a,t){e.exports=t.p+"static/media/cat.a1700742.svg"},59:function(e,a,t){e.exports=t.p+"static/media/telephone2.d2f3f5fa.svg"},60:function(e,a,t){e.exports=t.p+"static/media/ilovehome.c766b930.svg"},61:function(e,a,t){e.exports=t.p+"static/media/android.c7af8d3d.svg"},62:function(e,a,t){e.exports=t.p+"static/media/web.4066e7fc.svg"},63:function(e,a,t){e.exports=t.p+"static/media/sms.aafdda80.svg"},64:function(e,a,t){e.exports=t.p+"static/media/apple.ee0404f0.svg"},65:function(e,a,t){e.exports=t.p+"static/media/telephone.ddad123c.svg"},66:function(e,a,t){e.exports=t.p+"static/media/project.9ac0bc31.svg"},67:function(e,a,t){e.exports=t.p+"static/media/methodology.b629a41a.svg"},68:function(e,a,t){e.exports=t.p+"static/media/codeando.86926323.svg"},69:function(e,a,t){e.exports=t.p+"static/media/ndi.062d38e3.png"},70:function(e,a,t){e.exports=t.p+"static/media/codeandomexico.88b693a3.svg"},71:function(e,a,t){e.exports=t.p+"static/media/facebook.98871f7e.svg"},72:function(e,a,t){e.exports=t.p+"static/media/twitter.1c8514bf.svg"},73:function(e,a,t){e.exports=t.p+"static/media/github.4814f3ab.svg"},74:function(e,a,t){e.exports=t.p+"static/media/facebook-bco.ad72b4c9.svg"},75:function(e,a,t){e.exports=t.p+"static/media/twitter-bco.2d9c572a.svg"},76:function(e,a,t){e.exports=t.p+"static/media/github-bco.961cc756.svg"},80:function(e,a,t){e.exports=t(154)}},[[80,1,2]]]);
//# sourceMappingURL=main.603e638b.chunk.js.map