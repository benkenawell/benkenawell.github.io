(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+5Qc":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var r,o=n("q1tI"),a=n.n(o),i=function(e){var t=e.children,n=e.title;return a.a.createElement("div",{id:n,style:{border:"solid",paddingLeft:"10px",paddingRight:"10px",margin:"10px"}},a.a.createElement("h2",null,n),t)},c=n("9EFL"),l=n.n(c),u=function(e){var t=e.title,n=e.date,r=e.description,o=void 0===r?[]:r,a=e.location;return l.a.createElement("div",null,l.a.createElement("div",{style:{width:"100%"}},l.a.createElement("span",null,t,a?", "+a:""),l.a.createElement("span",{style:{float:"right"}},n)),l.a.createElement("ul",null,o.map((function(e){return l.a.createElement("li",null,e)}))))};!function(e){e.Education="education",e.Work="work",e.Volunteer="volunteer",e.Accomplishments="accomplishments",e.Programming="programming"}(r||(r={}));var s=[{category:r.Education,school:"The Pennsylvania State University",location:"University Park, PA",graduationYear:"2018",major:"Computer Engineering",minor:"Entrepreneurship and Innovation"},{category:r.Work,company:"Microsoft",startDate:"2018",endDate:void 0,location:"Redmond, WA",title:"Software Engineer",description:["Promote a better employee experience by writing intuitive and accessible internal web applications for enterprise by leveraging Typescript and React/Redux while maintaining team and organization coding standards","Create a better customer experience on the Sharepoint platform","Collaborate with other teams across products to deliver well-written, thoughtful improvements to SERP and employees' experience","Write, refactor, and modernize legacy C# applications to better connect disparate enterprise experiences","Facilitate strategic decisions to determine the highest priority work for the next sprint/quarter/year"]},{category:r.Work,company:"Microsoft",title:"Software Development Intern",startDate:"2017",endDate:"2017",location:"Redmond, WA",description:["Develop IT productivity tools and data driven graphics for highly visual internal telemetry (d3.js)","Learn and teach team dynamics in a business programming environment"]},{category:r.Work,company:"Penn State Residence Life",title:"Resident Assistant",startDate:"2016",endDate:"2017",location:"University Park, PA",description:["Assist students in their transition from grade school at home to life in a residence hall at a university","Create a sense of community in a residence hall floor so it may be a place everyone has a voice and feels welcome"]},{category:r.Work,company:"Army Research Lab",title:"Software Development Intern",startDate:"2015",endDate:"2016",location:"Adelphi, MD",description:["Develop a GUI for a UWB radar system in Python with heavy Linux networking","Develop and implement a network for a cognitive radar system"]},{category:r.Work,company:"Penn State ITS Lab Consultants",title:"Lab Consultant, Lab Consultant Supervisor",startDate:"2014",endDate:"2018",location:"University Park, PA",description:["Assist students and faculty troubleshoot computer lab equipment","Maintain professionalism and improve community among the staff","Keep up-to-date inventory for labs across campus"]},{category:r.Volunteer,organization:"King County Emergency Search and Rescue (KCESAR)",startDate:"2019",endDate:void 0},{category:r.Volunteer,organization:"Technology Education and Literacy in Schools (TEALS)",startDate:"2019",endDate:"2020"},{category:r.Accomplishments,award:"Eagle Scout",date:"Class of 2013"},{category:r.Accomplishments,award:"SAFe 4.6 Certified",date:"2020"},{category:r.Programming,description:["Use Professtionally: Typescript, React, Redux, RxJS, C#","On my own time: Rust, Elixir, F#, RamdaJS, PureScript"]}],f=[{label:"Education",key:r.Education},{label:"Professional Experience",key:r.Work},{label:"Volunteer Activities",key:r.Volunteer},{label:"Additional Accomplishments and Awards",key:r.Accomplishments},{label:"Familiar Programming Languages, Frameworks, and Technologies",key:r.Programming}],p=(n("pIFo"),function(e){switch(e.category){case r.Education:return y(e);case r.Work:return d(e);case r.Volunteer:return m(e);case r.Accomplishments:return h(e);case r.Programming:return g(e);default:!function(e){throw new Error("assertNever didn't work!")}()}}),d=function(e){e.category;var t=e.company,n=e.startDate,r=e.endDate,a=e.location,i=e.title,c=e.description;return Object(o.createElement)(u,{title:i+" at "+t,location:a,date:n+"-"+(r||"Present"),description:c})},y=function(e){e.category;var t=e.school,n=e.location,r=e.graduationYear,a=e.major,i=e.minor;return Object(o.createElement)(u,{title:t,location:n,date:"Class of "+r,description:["Major: "+a,"Minor: "+i]})},m=function(e){e.category;var t=e.organization,n=e.startDate,r=e.endDate;return Object(o.createElement)(u,{title:t,location:"",date:n+"-"+(r||"Present")})},h=function(e){e.category;var t=e.award,n=e.date;return Object(o.createElement)(u,{title:t,date:n})},g=function(e){e.category;var t=e.description;return Object(o.createElement)(u,{description:t})};function v(){return a.a.createElement(a.a.Fragment,null,f.map((function(e){return a.a.createElement(i,{title:e.label},s.filter((function(t){return t.category===e.key})).map(p))})))}document.onkeydown=function(e){switch(console.log(e.code),e.code){case"KeyP":document.getElementById("Professional Experience").scrollIntoView();break;case"KeyE":document.getElementById("Education").scrollIntoView();break;case"KeyV":document.getElementById("Volunteer Activities").scrollIntoView()}}},"9EFL":function(e,t,n){"use strict";e.exports=n("R1wR")},R1wR:function(e,t,n){"use strict";n("2Spj"),n("a1Th"),n("h7Nl"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F"),n("pIFo"),n("rE2o"),n("ioFf");var r=n("MgzW"),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function w(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||v}function E(){}function S(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||v}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},E.prototype=w.prototype;var k=S.prototype=new E;k.constructor=S,r(k,w.prototype),k.isPureReactComponent=!0;var P={current:null},R=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r,o={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)R.call(t,r)&&!C.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:i,ref:c,props:o,_owner:P.current}}function A(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var D=/\/+/g,_=[];function I(e,t,n,r){if(_.length){var o=_.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function j(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>_.length&&_.push(e)}function $(e,t,n){return null==e?0:function e(t,n,r,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var l=!1;if(null===t)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case a:case i:l=!0}}if(l)return r(o,t,""===n?"."+L(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var s=n+L(c=t[u],u);l+=e(c,s,r,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),u=0;!(c=t.next()).done;)l+=e(c=c.value,s=n+L(c,u++),r,o);else if("object"===c)throw r=""+t,Error(g(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return l}(e,"",t,n)}function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function O(e,t){e.func.call(e.context,t,e.count++)}function F(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?V(e,r,n,(function(e){return e})):null!=e&&(A(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(D,"$&/")+"/")+n)),r.push(e))}function V(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(D,"$&/")+"/"),$(e,F,t=I(t,a,r,o)),j(t)}var W={current:null};function U(){var e=W.current;if(null===e)throw Error(g(321));return e}var T={ReactCurrentDispatcher:W,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:P,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return V(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;$(e,O,t=I(null,null,t,n)),j(t)},count:function(e){return $(e,(function(){return null}),null)},toArray:function(e){var t=[];return V(e,t,null,(function(e){return e})),t},only:function(e){if(!A(e))throw Error(g(143));return e}},t.Component=w,t.Fragment=c,t.Profiler=u,t.PureComponent=S,t.StrictMode=l,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,n){if(null==e)throw Error(g(267,e));var o=r({},e.props),i=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=P.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)R.call(t,s)&&!C.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){u=Array(s);for(var f=0;f<s;f++)u[f]=arguments[f+2];o.children=u}return{$$typeof:a,type:e.type,key:i,ref:c,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=A,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return U().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,n){return U().useReducer(e,t,n)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},h7Nl:function(e,t,n){var r=Date.prototype,o=r.toString,a=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var e=a.call(this);return e==e?o.call(this):"Invalid Date"}))}}]);
//# sourceMappingURL=component---src-pages-index-ts-240560adb461707d586c.js.map