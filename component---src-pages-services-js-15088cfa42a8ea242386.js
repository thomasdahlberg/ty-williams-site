(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[88],{862:function(e,t,n){var r=n(8).default;function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var l=a?Object.getOwnPropertyDescriptor(e,s):null;l&&(l.get||l.set)?Object.defineProperty(i,s,l):i[s]=e[s]}return i.default=e,n&&n.set(e,i),i},e.exports.default=e.exports,e.exports.__esModule=!0},8:function(e){function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(n)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},1044:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return r.Z},createChainedFunction:function(){return o.Z},createSvgIcon:function(){return i.Z},debounce:function(){return a.Z},deprecatedPropType:function(){return s},isMuiElement:function(){return l.Z},ownerDocument:function(){return c.Z},ownerWindow:function(){return u.Z},requirePropFactory:function(){return d},setRef:function(){return p.Z},unstable_useId:function(){return g},unsupportedProp:function(){return f},useControlled:function(){return m.Z},useEventCallback:function(){return y.Z},useForkRef:function(){return v.Z},useIsFocusVisible:function(){return Z.Z}});var r=n(1664),o=n(8231),i=n(9123),a=n(1510);function s(e,t){return function(){return null}}var l=n(1008),c=n(703),u=n(7811);function d(e){return function(){return null}}var p=n(1474);function f(e,t,n,r,o){return null}var m=n(2933),y=n(7544),v=n(1291),b=n(7294);function g(e){var t=b.useState(e),n=t[0],r=t[1],o=e||n;return b.useEffect((function(){null==n&&r("mui-".concat(Math.round(1e5*Math.random())))}),[n]),o}var Z=n(4095)},5735:function(e,t,n){"use strict";var r=n(5318),o=n(862);t.Z=void 0;var i=o(n(7294)),a=(0,r(n(8786)).default)(i.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");t.Z=a},8786:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(1044)},3260:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var r=n(7294),o=n(4991),i=n(8734),a=n(2203),s=n(7462),l=n(5987),c=n(5505),u=n(4621),d=n(7055),p=n(1008),f=n(1291),m=n(8582),y=n(3935),v="undefined"==typeof window?r.useEffect:r.useLayoutEffect,b=r.forwardRef((function(e,t){var n=e.alignItems,o=void 0===n?"center":n,i=e.autoFocus,a=void 0!==i&&i,u=e.button,b=void 0!==u&&u,g=e.children,Z=e.classes,h=e.className,x=e.component,E=e.ContainerComponent,C=void 0===E?"li":E,I=e.ContainerProps,k=(I=void 0===I?{}:I).className,S=(0,l.Z)(I,["className"]),w=e.dense,M=void 0!==w&&w,N=e.disabled,P=void 0!==N&&N,_=e.disableGutters,T=void 0!==_&&_,F=e.divider,O=void 0!==F&&F,R=e.focusVisibleClassName,j=e.selected,L=void 0!==j&&j,V=(0,l.Z)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),B=r.useContext(m.Z),D={dense:M||B.dense||!1,alignItems:o},W=r.useRef(null);v((function(){a&&W.current&&W.current.focus()}),[a]);var $=r.Children.toArray(g),A=$.length&&(0,p.Z)($[$.length-1],["ListItemSecondaryAction"]),z=r.useCallback((function(e){W.current=y.findDOMNode(e)}),[]),G=(0,f.Z)(z,t),q=(0,s.Z)({className:(0,c.Z)(Z.root,h,D.dense&&Z.dense,!T&&Z.gutters,O&&Z.divider,P&&Z.disabled,b&&Z.button,"center"!==o&&Z.alignItemsFlexStart,A&&Z.secondaryAction,L&&Z.selected),disabled:P},V),H=x||"li";return b&&(q.component=x||"div",q.focusVisibleClassName=(0,c.Z)(Z.focusVisible,R),H=d.Z),A?(H=q.component||x?H:"div","li"===C&&("li"===H?H="div":"li"===q.component&&(q.component="div")),r.createElement(m.Z.Provider,{value:D},r.createElement(C,(0,s.Z)({className:(0,c.Z)(Z.container,k),ref:G},S),r.createElement(H,q,$),$.pop()))):r.createElement(m.Z.Provider,{value:D},r.createElement(H,(0,s.Z)({ref:G},q),$))})),g=(0,u.Z)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(b),Z=r.forwardRef((function(e,t){var n=e.classes,o=e.className,i=(0,l.Z)(e,["classes","className"]),a=r.useContext(m.Z);return r.createElement("div",(0,s.Z)({className:(0,c.Z)(n.root,o,"flex-start"===a.alignItems&&n.alignItemsFlexStart),ref:t},i))})),h=(0,u.Z)((function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}}),{name:"MuiListItemIcon"})(Z),x=n(453),E=r.forwardRef((function(e,t){var n=e.children,o=e.classes,i=e.className,a=e.disableTypography,u=void 0!==a&&a,d=e.inset,p=void 0!==d&&d,f=e.primary,y=e.primaryTypographyProps,v=e.secondary,b=e.secondaryTypographyProps,g=(0,l.Z)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),Z=r.useContext(m.Z).dense,h=null!=f?f:n;null==h||h.type===x.Z||u||(h=r.createElement(x.Z,(0,s.Z)({variant:Z?"body2":"body1",className:o.primary,component:"span",display:"block"},y),h));var E=v;return null==E||E.type===x.Z||u||(E=r.createElement(x.Z,(0,s.Z)({variant:"body2",className:o.secondary,color:"textSecondary",display:"block"},b),E)),r.createElement("div",(0,s.Z)({className:(0,c.Z)(o.root,i,Z&&o.dense,p&&o.inset,h&&E&&o.multiline),ref:t},g),h,E)})),C=(0,u.Z)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(E),I=n(7761),k=n(8526),S=n(791),w=n(5735),M=n(6002),N=n(920),P=n(6971),_=(0,N.Z)((function(e){return{list:{width:"100%"}}})),T=function(){var e=_();return r.createElement(I.Z,{theme:M.Z},r.createElement(k.ZP,null),r.createElement(o.Z,null,r.createElement(i.Z,{title:"Services"}),r.createElement(a.Z,{title:"Services"},r.createElement(P.Z,{title:"Individual Sessions"},"I believe that clients are the experts in their lives. I utilize a collaborative, supportive approach to the counseling relationship.  Individual sessions are 45-50 minutes."),r.createElement(P.Z,{title:"Rates"},r.createElement(x.Z,null,"Simply Becoming is currently  a telehealth, private pay practice. I am not on any insurance panels at this time and therefore do not accept insurance. Intake sessions are 60 minutes. Following intakes, sessions are typically 45-50 minutes in length unless otherwise noted by the clinician."),r.createElement(S.Z,{className:e.list},r.createElement(g,null,r.createElement(h,null,r.createElement(w.Z,null)),r.createElement(C,null,"Intake Fee:  $140.00 (60 Minute Session)")),r.createElement(g,null,r.createElement(h,null,r.createElement(w.Z,null)),r.createElement(C,null,"Individual Counseling: $140.00 (45-50 Minute Session)")))))))}}}]);
//# sourceMappingURL=component---src-pages-services-js-15088cfa42a8ea242386.js.map