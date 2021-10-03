"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[351],{3287:function(e,t,r){r.d(t,{Z:function(){return O}});var o=r(9255),n=r(7462),a=(r(5697),r(4131));function i(e,t){var r={};return Object.keys(e).forEach((function(o){-1===t.indexOf(o)&&(r[o]=e[o])})),r}function l(e){var t=function(t){var r=e(t);return t.css?(0,n.Z)({},(0,a.Z)(r,e((0,n.Z)({theme:t.theme},t.css))),i(t.css,[e.filterProps])):t.sx?(0,n.Z)({},(0,a.Z)(r,e((0,n.Z)({theme:t.theme},t.sx))),i(t.sx,[e.filterProps])):r};return t.propTypes={},t.filterProps=["css","sx"].concat((0,o.Z)(e.filterProps)),t}var p=l;var s=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var o=function(e){return t.reduce((function(t,r){var o=r(e);return o?(0,a.Z)(t,o):t}),{})};return o.propTypes={},o.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),o},c=r(4942),u=r(3592);function m(e,t){return t&&"string"==typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var h=function(e){var t=e.prop,r=e.cssProperty,o=void 0===r?e.prop:r,n=e.themeKey,a=e.transform,i=function(e){if(null==e[t])return null;var r=e[t],i=m(e.theme,n)||{};return(0,u.k)(e,r,(function(e){var t;return"function"==typeof i?t=i(e):Array.isArray(i)?t=i[e]||e:(t=m(i,e)||e,a&&(t=a(t))),!1===o?t:(0,c.Z)({},o,t)}))};return i.propTypes={},i.filterProps=[t],i};function d(e){return"number"!=typeof e?e:"".concat(e,"px solid")}var f=s(h({prop:"border",themeKey:"borders",transform:d}),h({prop:"borderTop",themeKey:"borders",transform:d}),h({prop:"borderRight",themeKey:"borders",transform:d}),h({prop:"borderBottom",themeKey:"borders",transform:d}),h({prop:"borderLeft",themeKey:"borders",transform:d}),h({prop:"borderColor",themeKey:"palette"}),h({prop:"borderRadius",themeKey:"shape"})),g=s(h({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),h({prop:"display"}),h({prop:"overflow"}),h({prop:"textOverflow"}),h({prop:"visibility"}),h({prop:"whiteSpace"})),y=s(h({prop:"flexBasis"}),h({prop:"flexDirection"}),h({prop:"flexWrap"}),h({prop:"justifyContent"}),h({prop:"alignItems"}),h({prop:"alignContent"}),h({prop:"order"}),h({prop:"flex"}),h({prop:"flexGrow"}),h({prop:"flexShrink"}),h({prop:"alignSelf"}),h({prop:"justifyItems"}),h({prop:"justifySelf"})),v=s(h({prop:"gridGap"}),h({prop:"gridColumnGap"}),h({prop:"gridRowGap"}),h({prop:"gridColumn"}),h({prop:"gridRow"}),h({prop:"gridAutoFlow"}),h({prop:"gridAutoColumns"}),h({prop:"gridAutoRows"}),h({prop:"gridTemplateColumns"}),h({prop:"gridTemplateRows"}),h({prop:"gridTemplateAreas"}),h({prop:"gridArea"})),b=s(h({prop:"position"}),h({prop:"zIndex",themeKey:"zIndex"}),h({prop:"top"}),h({prop:"right"}),h({prop:"bottom"}),h({prop:"left"})),k=s(h({prop:"color",themeKey:"palette"}),h({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),E=h({prop:"boxShadow",themeKey:"shadows"});function Z(e){return e<=1?"".concat(100*e,"%"):e}var x=h({prop:"width",transform:Z}),A=h({prop:"maxWidth",transform:Z}),C=h({prop:"minWidth",transform:Z}),w=h({prop:"height",transform:Z}),S=h({prop:"maxHeight",transform:Z}),B=h({prop:"minHeight",transform:Z}),P=(h({prop:"size",cssProperty:"width",transform:Z}),h({prop:"size",cssProperty:"height",transform:Z}),s(x,A,C,w,S,B,h({prop:"boxSizing"}))),N=s(h({prop:"fontFamily",themeKey:"typography"}),h({prop:"fontSize",themeKey:"typography"}),h({prop:"fontStyle",themeKey:"typography"}),h({prop:"fontWeight",themeKey:"typography"}),h({prop:"letterSpacing"}),h({prop:"lineHeight"}),h({prop:"textAlign"})),K=r(5408),I=r(2112),L=r(4982),j=function(e){var t=(0,I.Z)(e);return function(e,r){return t(e,(0,n.Z)({defaultTheme:L.Z},r))}},T=p(s(f,g,y,v,b,k,E,P,K.Z,N)),O=j("div")(T,{name:"MuiBox"})},453:function(e,t,r){var o=r(7462),n=r(5987),a=r(7294),i=r(5505),l=r(4621),p=r(1664),s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},c=a.forwardRef((function(e,t){var r=e.align,l=void 0===r?"inherit":r,c=e.classes,u=e.className,m=e.color,h=void 0===m?"initial":m,d=e.component,f=e.display,g=void 0===f?"initial":f,y=e.gutterBottom,v=void 0!==y&&y,b=e.noWrap,k=void 0!==b&&b,E=e.paragraph,Z=void 0!==E&&E,x=e.variant,A=void 0===x?"body1":x,C=e.variantMapping,w=void 0===C?s:C,S=(0,n.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),B=d||(Z?"p":w[A]||s[A])||"span";return a.createElement(B,(0,o.Z)({className:(0,i.Z)(c.root,u,"inherit"!==A&&c[A],"initial"!==h&&c["color".concat((0,p.Z)(h))],k&&c.noWrap,v&&c.gutterBottom,Z&&c.paragraph,"inherit"!==l&&c["align".concat((0,p.Z)(l))],"initial"!==g&&c["display".concat((0,p.Z)(g))]),ref:t},S))}));t.Z=(0,l.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(c)},920:function(e,t,r){var o=r(7462),n=r(7627),a=r(4982);t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,n.Z)(e,(0,o.Z)({defaultTheme:a.Z},t))}},1664:function(e,t,r){r.d(t,{Z:function(){return n}});var o=r(2192);function n(e){if("string"!=typeof e)throw new Error((0,o.Z)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},1474:function(e,t,r){function o(e,t){"function"==typeof e?e(t):e&&(e.current=t)}r.d(t,{Z:function(){return o}})},1291:function(e,t,r){r.d(t,{Z:function(){return a}});var o=r(7294),n=r(1474);function a(e,t){return o.useMemo((function(){return null==e&&null==t?null:function(r){(0,n.Z)(e,r),(0,n.Z)(t,r)}}),[e,t])}},4095:function(e,t,r){r.d(t,{Z:function(){return d}});var o=r(7294),n=r(3935),a=!0,i=!1,l=null,p={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function s(e){e.metaKey||e.altKey||e.ctrlKey||(a=!0)}function c(){a=!1}function u(){"hidden"===this.visibilityState&&i&&(a=!0)}function m(e){var t,r,o,n=e.target;try{return n.matches(":focus-visible")}catch(i){}return a||(r=(t=n).type,!("INPUT"!==(o=t.tagName)||!p[r]||t.readOnly)||"TEXTAREA"===o&&!t.readOnly||!!t.isContentEditable)}function h(){i=!0,window.clearTimeout(l),l=window.setTimeout((function(){i=!1}),100)}function d(){return{isFocusVisible:m,onBlurVisible:h,ref:o.useCallback((function(e){var t,r=n.findDOMNode(e);null!=r&&((t=r.ownerDocument).addEventListener("keydown",s,!0),t.addEventListener("mousedown",c,!0),t.addEventListener("pointerdown",c,!0),t.addEventListener("touchstart",c,!0),t.addEventListener("visibilitychange",u,!0))}),[])}}},8734:function(e,t,r){r.d(t,{Z:function(){return a}});var o=r(7294),n=r(5414),a=function(e){var t=e.title;return o.createElement("div",null,o.createElement(n.q,{title:""+t},o.createElement("link",{rel:"icon",href:"data:image/vnd.microsoft.icon;base64,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"}),o.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),o.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),o.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),o.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Quicksand:wght@500;700&display=swap",rel:"stylesheet"})))}},6409:function(e,t,r){r.d(t,{Z:function(){return Z}});var o=r(7294),n=r(5313),a=r(3287),i=r(453),l=r(920),p=(0,l.Z)((function(e){return{container:{display:"flex",justifyContent:"center",flexWrap:"wrap",alignItems:"center"},link:{padding:"0.5rem 1rem",marginLeft:"0.5rem",color:e.palette.black,textDecoration:"none","&:hover":{backgroundColor:e.palette.primary.light}},activeLink:{borderBottom:e.palette.primary.main+" solid 4px"},text:{fontFamily:"Quicksand, sans-serif",fontWeight:"700"}}})),s=function(e){var t=p();return o.createElement(a.Z,{className:t.container},o.createElement(n.rU,{className:t.link,activeClassName:t.activeLink,to:"/"},o.createElement(i.Z,{variant:"button",className:t.text},"Home")),o.createElement(n.rU,{className:t.link,activeClassName:t.activeLink,to:"/services"},o.createElement(i.Z,{variant:"button",className:t.text},"Services")),o.createElement(n.rU,{className:t.link,activeClassName:t.activeLink,to:"/contact"},o.createElement(i.Z,{variant:"button",className:t.text},"Contact Me")),o.createElement(n.rU,{className:t.link,activeClassName:t.activeLink,to:"/client-portal"},o.createElement(i.Z,{variant:"button",className:t.text},"Client Portal")))},c=(0,l.Z)((function(e){return{container:{display:"flex",flexDirection:"column",alignItems:"center",paddingBottom:"1rem",backgroundColor:"#CCF6C8"},link:{textDecoration:"none"},logo:{maxWidth:"350px"}}})),u=function(e){var t=c();return o.createElement(a.Z,{className:t.container},o.createElement(n.rU,{to:"/",className:t.link},o.createElement("img",{className:t.logo,src:"./logo_crop.svg",alt:"logo","aria-label":"Simply Becoming Counseling LLC logo"})),o.createElement(s,null))},m=r(7462),h=r(5987),d=r(5505),f=r(1664),g=r(4621),y=r(4095),v=r(1291),b=o.forwardRef((function(e,t){var r=e.classes,n=e.className,a=e.color,l=void 0===a?"primary":a,p=e.component,s=void 0===p?"a":p,c=e.onBlur,u=e.onFocus,g=e.TypographyClasses,b=e.underline,k=void 0===b?"hover":b,E=e.variant,Z=void 0===E?"inherit":E,x=(0,h.Z)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),A=(0,y.Z)(),C=A.isFocusVisible,w=A.onBlurVisible,S=A.ref,B=o.useState(!1),P=B[0],N=B[1],K=(0,v.Z)(t,S);return o.createElement(i.Z,(0,m.Z)({className:(0,d.Z)(r.root,r["underline".concat((0,f.Z)(k))],n,P&&r.focusVisible,"button"===s&&r.button),classes:g,color:l,component:s,onBlur:function(e){P&&(w(),N(!1)),c&&c(e)},onFocus:function(e){C(e)&&N(!0),u&&u(e)},ref:K,variant:Z},x))})),k=(0,g.Z)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(b),E=(0,l.Z)((function(e){return{paper:{color:e.palette.black},content:{minHeight:"75vh",backgroundImage:'url("./splash_crop.jpg")',backgroundAttachment:"fixed",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",paddingBottom:"100px"},veil:{backgroundColor:"rgba(135, 214, 126, 0.2)",minHeight:"75vh"},footer:{display:"flex",justifyContent:"center",flexWrap:"wrap",alignItems:"center",marginTop:"-100px",height:"100px",zIndex:"1",backgroundColor:"rgba(135, 214, 126, 0.6)","& p":{fontFamily:"Quicksand, sans-serif",fontWeight:"600",marginRight:"1rem",marginBottom:"0.25rem"},"& a":{color:e.palette.black,textDecoration:"none"},"& a:visited":{color:e.palette.black,textDecoration:"none"}}}})),Z=function(e){var t=E(),r=new Date;return o.createElement("div",{className:t.paper},o.createElement(u,{theme:e.theme}),o.createElement("div",{className:t.content},o.createElement("div",{className:t.veil},e.children)),o.createElement("footer",{className:t.footer},o.createElement(i.Z,{variant:"h6",component:"p"},"Ty Williams © ",r.getFullYear()),o.createElement(i.Z,{variant:"h6",component:"p"},o.createElement(k,{href:"mailto: ty@simplybecounseling.org"},"ty@simplybecounseling.org"))))}}}]);
//# sourceMappingURL=commons-65743e3237d6aebb6444.js.map