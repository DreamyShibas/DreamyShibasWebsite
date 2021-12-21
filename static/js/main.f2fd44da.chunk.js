(this.webpackJsonpfrontend_base_dapp=this.webpackJsonpfrontend_base_dapp||[]).push([[0],{248:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"activateWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setMaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"},{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setMaxMintAmountAndWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"walletLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistOnly","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')},258:function(e,t,n){},259:function(e,t,n){},260:function(e,t,n){},261:function(e,t,n){},262:function(e,t,n){},268:function(e,t,n){},269:function(e,t,n){},270:function(e,t,n){},271:function(e,t,n){},272:function(e,t,n){},273:function(e,t,n){},274:function(e,t,n){},275:function(e,t,n){},276:function(e,t,n){},289:function(e,t){},312:function(e,t){},314:function(e,t){},391:function(e,t){},393:function(e,t){},426:function(e,t){},431:function(e,t){},433:function(e,t){},440:function(e,t){},453:function(e,t){},476:function(e,t){},485:function(e,t){},487:function(e,t){},556:function(e,t,n){},557:function(e,t,n){},558:function(e,t,n){},559:function(e,t,n){},561:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(32),o=n.n(s),r=(n(258),n(259),n(4)),c=n(5),l=n(9),p=n(8),u=n.p+"static/media/owl.ee13b914.png",d=n.p+"static/media/OPENSEA_Banner.bb52a160.png",m=(n(260),n(569)),b=n(565),y=n(570),j=(n(261),n(27)),h=(n(262),n(1)),O=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("button",{className:"ybutton",children:this.props.text})}}]),n}(i.a.Component);function f(){document.getElementById("mint").scrollIntoView()}function x(){document.getElementById("roadmap").scrollIntoView()}function g(){window.open("https://opensea.io/collection/dickpixnft")}var v=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"header-control",children:[Object(h.jsx)(m.a,{collapseOnSelect:!0,expand:"lg",children:Object(h.jsxs)(b.a,{children:[Object(h.jsx)(m.a.Brand,{href:"#home",children:Object(h.jsx)("img",{src:u,width:100,height:100,alt:"logo"})}),Object(h.jsx)(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(h.jsxs)(m.a.Collapse,{id:"responsive-navbar-nav",children:[Object(h.jsx)(y.a,{className:"me-auto"}),Object(h.jsxs)(y.a,{children:[Object(h.jsx)(y.a.Link,{style:{fontWeight:900},onClick:f,children:"MINT"}),Object(h.jsx)(y.a.Link,{style:{fontWeight:900},onClick:x,children:"ROADMAP"}),Object(h.jsx)(y.a.Link,{style:{fontWeight:900},onClick:g,children:"OPENSEA"}),Object(h.jsx)("text",{style:{width:20}}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("a",{style:{textDecoration:"none",color:"white",paddingRight:10},target:"_blank",rel:"noopener noreferrer",href:"https://instagram.com/dickpixnft",children:[" ",Object(h.jsx)(j.d,{size:32})]}),Object(h.jsxs)("a",{style:{textDecoration:"none",color:"white",paddingLeft:10,paddingRight:10},target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/thedickpixnft",children:[" ",Object(h.jsx)(j.g,{size:32})]}),Object(h.jsxs)("a",{style:{textDecoration:"none",color:"white",paddingLeft:10},target:"_blank",rel:"noopener noreferrer",href:"https://discord.gg/SgJyg5Wx/",children:[" ",Object(h.jsx)(j.a,{size:32}),"   "]})]})]})]})]})}),Object(h.jsxs)("div",{className:"header-content",children:[Object(h.jsx)("h1",{children:Object(h.jsx)("img",{className:"thePicture",src:d})}),Object(h.jsx)("div",{className:"header-content-buttons-container"})]}),Object(h.jsx)("div",{})]})})}}]),n}(i.a.Component),w=n(566),T=n(567),C=(n(268),n.p+"static/media/dicklogo.9f1ffd25.png"),N=(n.p,n.p,n.p,n(269),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"teammember-control",style:{textAlign:"center",justifyContent:"center"},children:[Object(h.jsx)("img",{style:{maxHeight:500,maxWidth:500},src:this.props.imageUrl,alt:"team member"}),Object(h.jsxs)("div",{className:"teammember-description",children:[Object(h.jsxs)("p",{className:"teammember-name",children:["@",this.props.name]}),Object(h.jsx)("p",{className:"teammember-occupation",children:this.props.title})]})]})}}]),n}(i.a.Component)),L=(i.a.Component,n(270),i.a.Component,n(271),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"footer-control",id:"socials",children:Object(h.jsxs)(b.a,{className:"footer",children:[Object(h.jsx)("p",{style:{fontSize:15}}),Object(h.jsx)("div",{children:Object(h.jsx)("p",{style:{fontSize:15},children:Object(h.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://metaversesolutions.ai/",style:{textDecoration:"none",color:"white",textAlign:"right"},children:"Website by Metaverse Solutions, LLC"})})})]})})}}]),n}(i.a.Component)),M=(n(272),n.p,n(251)),k=(n(273),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={open:!1},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{onClick:function(){e.setState({open:!e.state.open})},"aria-controls":"example","aria-expanded":this.state.open,className:"collapse-header-control",children:[Object(h.jsxs)("div",{className:"collapse-header",children:[Object(h.jsx)("h4",{children:this.props.tag}),Object(h.jsx)("p",{children:this.props.title})]}),Object(h.jsx)(j.e,{})]}),Object(h.jsx)(M.a,{in:this.state.open,children:Object(h.jsx)("div",{id:"example",className:"collapse-content",children:this.props.content})})]})}}]),n}(i.a.Component)),I=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={roadmaps:[{tag:"Phase 1",title:"Lorem Ipsum",content:"Lorem Ipsum"},{tag:"Phase 2",title:"Lorem Ipsum",content:"Lorem Ipsum"},{tag:"Phase 3",title:"Lorem Ipsum",content:"Lorem Ipsum"},{tag:"Phase 4",title:"Lorem Ipsum",content:"Lorem Ipsum"},{tag:"Phase 5",title:"Lorem Ipsum",content:"Lorem Ipsum"},{tag:"Phase 6",title:"Lorem Ipsum",content:"Lorem Ipsum"},{tag:"Phase 7",title:"Lorem Ipsum",content:"Lorem Ipsum"},{tag:"Phase 8",title:"Lorem Ipsum",content:"Lorem Ipsum"}]},a}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"roadmap-control",id:"roadmap",style:{textAlign:"center"},children:Object(h.jsxs)(b.a,{style:{backgroundColor:"#172A55",padding:30,border:"solid black 10px",borderRadius:20},children:[Object(h.jsxs)("header",{style:{fontWeight:900},children:[Object(h.jsx)("span",{children:"CHECK OUT OUR"})," ",Object(h.jsx)("br",{})," ROADMAP"]}),Object(h.jsx)("p",{className:"roadmap-description",children:"Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum."}),Object(h.jsxs)(w.a,{style:{alignContent:"center",justifyContent:"center",textAlign:"center"},children:[Object(h.jsx)(T.a,{xs:12,md:6,children:Object(h.jsx)("img",{className:"roadimage",style:{border:"solid 10px black",borderRadius:20},src:"https://cdn.dribbble.com/users/35633/screenshots/7704871/media/7b62d4238bb104a065dfeaf8a91a14bb.png?compress=1&resize=800x600"})}),Object(h.jsx)(T.a,{style:{color:"white",alignContent:"center",justifyContent:"center",textAlign:"center"},children:this.state.roadmaps.map((function(e,t){return Object(h.jsx)(k,{style:{textAlign:"center",color:"black"},tag:e.tag,title:e.title,content:e.content},t)}))})]})]})})}}]),n}(i.a.Component),S=(n(274),n.p+"static/media/item1.1c214071.png"),A=n.p+"static/media/item2.81e34ae6.png",E=n.p+"static/media/item3.eec91da6.png",_=(n(275),n.p+"static/media/fire.76eb30ed.png"),U=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"top-item",children:[Object(h.jsx)("img",{src:this.props.image,alt:"top item"}),Object(h.jsxs)("div",{className:"top-item-description",children:[Object(h.jsx)("p",{children:this.props.name}),Object(h.jsx)("h6",{children:this.props.price})]}),Object(h.jsxs)("div",{className:"top-item-bid",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)(j.f,{})," HighestBid ",Object(h.jsx)("b",{children:this.props.highestBid})]}),Object(h.jsxs)("p",{children:["New Bid \xa0",Object(h.jsx)("img",{src:_,width:17,height:17,alt:"new bid"})]})]})]})}}]),n}(i.a.Component),B=(i.a.Component,n(21)),D=n.p+"static/media/Collection_GIF.6180d650.gif",z=(n(276),n(78)),P=n(24),F=n.n(P),R=n(91),W=n(89),q=n.n(W),H=n(247),K=n.n(H),J=n(248),Q=n(92),G=n(249),Y=n(3),V={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(Y.a)(Object(Y.a)({},V),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(Y.a)(Object(Y.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(Y.a)(Object(Y.a)({},V),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(Y.a)(Object(Y.a)({},e),{},{account:t.payload.account});default:return e}},Z={loading:!1,name:"",totalSupply:0,cost:0,error:!1,errorMsg:""},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(Y.a)(Object(Y.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(Y.a)(Object(Y.a)({},e),{},{loading:!1,name:t.payload.name,totalSupply:t.payload.totalSupply,cost:t.payload.cost,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(Y.a)(Object(Y.a)({},Z),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},ee=Object(Q.b)({blockchain:X,data:$}),te=[G.a],ne=Object(Q.c)(Q.a.apply(void 0,te)),ae=Object(Q.d)(ee,ne),ie=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},se=function(e){return function(){var e=Object(R.a)(F.a.mark((function e(t){var n,a,i;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,ae.getState().blockchain.smartContract.methods.name().call();case 4:return n=e.sent,e.next=7,ae.getState().blockchain.smartContract.methods.totalSupply().call();case 7:return a=e.sent,e.next=10,ae.getState().blockchain.smartContract.methods.cost().call();case 10:i=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{name:n,totalSupply:a,cost:i}}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),t(ie("Could not load data from contract."));case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}()},oe=function(e){return{type:"CONNECTION_FAILED",payload:e}},re=function(e){return function(){var t=Object(R.a)(F.a.mark((function t(n){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(se());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};var ce=function(){var e=Object(z.b)(),t=Object(z.c)((function(e){return e.blockchain})),n=(Object(z.c)((function(e){return e.data})),Object(a.useState)("")),i=Object(B.a)(n,2),s=(i[0],i[1]),o=Object(a.useState)(!1),r=Object(B.a)(o,2),c=r[0],l=r[1],p=Object(a.useState)(0),u=Object(B.a)(p,2),d=u[0],m=u[1],y=function(){""!==t.account&&null!==t.smartContract&&e(se(t.account))};return Object(a.useEffect)((function(){y()}),[t.account]),Object(h.jsx)("div",{className:"mint-control",id:"mint",children:Object(h.jsx)(b.a,{children:Object(h.jsxs)(w.a,{children:[Object(h.jsx)(T.a,{md:6,xs:12,className:"mint-image",children:Object(h.jsx)("img",{src:D,alt:"mint gif"})}),Object(h.jsxs)(T.a,{md:6,xs:12,className:"mint-description",children:[Object(h.jsxs)("header",{children:["MINT YOUR ",Object(h.jsx)("text",{style:{color:"#88CDDB"},children:"SOCIAL OWL"})]}),Object(h.jsxs)("p",{style:{textAlign:"center"},children:["Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Lorem ipsum Lorem ipsum"]}),Object(h.jsxs)("div",{className:"number-control",children:[Object(h.jsx)(j.b,{color:"white",size:40,onClick:function(){d<=0||m(d-1)}}),Object(h.jsx)("span",{id:"inputBox",children:d}),Object(h.jsx)(j.c,{color:"white",size:40,onClick:function(){d>=25||m(d+1)}})]}),Object(h.jsx)("p",{style:{marginTop:0,marginBottom:0},children:"0.077 ETH + Gas"}),""===t.account||null===t.smartContract?Object(h.jsxs)("div",{className:"flex-column",children:[Object(h.jsx)("button",{className:"ybutton",onClick:function(t){console.log("--------"),t.preventDefault(),e((console.log("--:"),function(){var e=Object(R.a)(F.a.mark((function e(t){var n,a,i,s,o;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t({type:"CONNECTION_REQUEST"}),n=window,!(a=n.ethereum)||!a.isMetaMask){e.next=21;break}return q.a.setProvider(a),i=new K.a(a),e.prev=6,e.next=9,a.request({method:"eth_requestAccounts"});case 9:return s=e.sent,e.next=12,a.request({method:"net_version"});case 12:1==e.sent?(o=new q.a(J,"0x7181d2038B849A18145eb153b8bEFC552e52c37A"),t({type:"CONNECTION_SUCCESS",payload:{account:s[0],smartContract:o,web3:i}}),a.on("accountsChanged",(function(e){t(re(e[0]))})),a.on("chainChanged",(function(){window.location.reload()}))):t(oe("Change network to Ethereum Mainnet.")),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6),t(oe("Something went wrong."));case 19:e.next=22;break;case 21:t(oe("Please install Metamask."));case 22:case"end":return e.stop()}}),e,null,[[6,16]])})));return function(t){return e.apply(this,arguments)}}())),y()},children:"CONNECT"}),""!==t.errorMsg?Object(h.jsx)("div",{style:{textAlign:"center",fontSize:20,color:"white"},children:t.errorMsg}):null]}):Object(h.jsx)("button",{className:"ybutton",onClick:function(n){var a;n.preventDefault(),a=1,(a=document.getElementById("inputBox").textContent)<=0||(s("Minting your Official BooCrew NFT..."),l(!0),t.smartContract.methods.mint(t.account,a).send({gasLimit:285e3*a,to:"0x7181d2038B849A18145eb153b8bEFC552e52c37A",from:t.account,value:t.web3.utils.toWei((.077*a).toString(),"ether")}).once("error",(function(e){console.log(e),s("Sorry, something went wrong. Check your transaction on Etherscan to find out what happened!"),l(!1)})).then((function(n){s("Your BooCrew NFT has been successfully minted!"),l(!1),e(se(t.account))}))),y()},children:c?"BUSY":"MINT"})]})]})})})},le=(n(556),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"about-control",children:Object(h.jsx)(b.a,{children:Object(h.jsxs)(w.a,{children:[Object(h.jsxs)(T.a,{md:6,xs:12,className:"about-description",children:[Object(h.jsxs)("header",{children:[Object(h.jsx)("span",{children:"9999"})," OWLS.",Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:"1"})," GAME."]}),Object(h.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                            "}),Object(h.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                            "})]}),Object(h.jsx)(T.a,{md:6,xs:12,className:"image-control",children:Object(h.jsx)("img",{style:{border:"solid black 10px",borderRadius:20},src:D,alt:"about gif"})})]})})})}}]),n}(i.a.Component)),pe=n(250),ue=n.n(pe),de=(n.p,n(557),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"meet-control",children:[Object(h.jsx)(b.a,{children:Object(h.jsxs)("header",{style:{textAlign:"center"},children:["PEEP ",Object(h.jsx)("br",{})," ",Object(h.jsx)("span",{children:"OUR OWLS!"})]})}),Object(h.jsxs)(ue.a,{breakpoints:[{breakpoint:500,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:1280,settings:{slidesToShow:3,slidesToScroll:1}}],dots:!1,arrows:!0,showSides:!0,sidesOpacity:.5,sideSize:.1,slidesToScroll:1,slidesToShow:4,scrollOnDevice:!0,children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://socialowls.s3.amazonaws.com/1.png",alt:"boy1"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://socialowls.s3.amazonaws.com/2.png",alt:"boy2"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://socialowls.s3.amazonaws.com/3.png",alt:"boy3"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://socialowls.s3.amazonaws.com/4.png",alt:"boy4"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://socialowls.s3.amazonaws.com/5.png",alt:"boy5"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://socialowls.s3.amazonaws.com/6.png",alt:"boy6"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://socialowls.s3.amazonaws.com/7.png",alt:"boy6"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://socialowls.s3.amazonaws.com/8.png",alt:"boy6"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://socialowls.s3.amazonaws.com/9.png",alt:"boy6"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://socialowls.s3.amazonaws.com/10.png",alt:"boy6"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://socialowls.s3.amazonaws.com/11.png",alt:"boy6"})})]})]})}}]),n}(i.a.Component));n(558),i.a.Component,n.p,n(559);var me=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(v,{}),Object(h.jsx)(le,{}),Object(h.jsx)(de,{}),Object(h.jsx)(ce,{}),Object(h.jsx)(I,{}),Object(h.jsx)(L,{})]})},be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,571)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),s(e),o(e)}))};n(560);o.a.render(Object(h.jsx)(z.a,{store:ae,children:Object(h.jsx)(me,{})}),document.getElementById("root")),be()}},[[561,1,2]]]);
//# sourceMappingURL=main.f2fd44da.chunk.js.map