(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{AcjU:function(e,t,a){"use strict";var n=a("284h"),l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a("pVnL")),o=l(a("lSNA")),u=l(a("RIqP")),i=l(a("lwsE")),d=l(a("W8MJ")),c=l(a("a1gu")),s=l(a("Nsbk")),f=l(a("7W2i"));a("B9cy");var p=l(a("Ol7k")),m=n(a("q1tI")),h=l(a("TSYQ")),g=l(a("mOP9")),v=l(a("mR0u")),y=l(a("xqX8")),b=a("pMM0"),M=m.default.lazy(function(){return Promise.resolve().then(a.t.bind(null,"oFg3",7))}),E=p.default.Sider,k=function(e){function t(e){var a;return(0,i.default)(this,t),a=(0,c.default)(this,(0,s.default)(t).call(this,e)),a.isMainMenu=function(e){var t=a.props.menuData;return t.some(function(t){return!!e&&(t.key===e||t.path===e)})},a.handleOpenChange=function(e){var t=e.filter(function(e){return a.isMainMenu(e)}).length>1;a.setState({openKeys:t?[e.pop()]:(0,u.default)(e)})},a.state={openKeys:(0,b.getDefaultCollapsedSubMenus)(e)},a}return(0,f.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e,t=this.props,a=t.logo,n=t.collapsed,l=t.onCollapse,u=t.fixSiderbar,i=t.theme,d=this.state.openKeys,c=n?{}:{openKeys:d},s=(0,h.default)(v.default.sider,(e={},(0,o.default)(e,v.default.fixSiderbar,u),(0,o.default)(e,v.default.light,"light"===i),e));return m.default.createElement(E,{trigger:null,collapsible:!0,collapsed:n,breakpoint:"lg",onCollapse:l,width:256,theme:i,className:s},m.default.createElement("div",{className:v.default.logo,id:"logo"},m.default.createElement(g.default,{to:"/"},m.default.createElement("img",{src:a,alt:"logo"}),m.default.createElement("h1",null,"Ant Design Pro"))),m.default.createElement(m.Suspense,{fallback:m.default.createElement(y.default,null)},m.default.createElement(M,(0,r.default)({},this.props,{mode:"inline",handleOpenChange:this.handleOpenChange,onOpenChange:this.handleOpenChange,style:{padding:"16px 0",width:"100%"}},c))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=t.pathname;return e.location.pathname!==a?{pathname:e.location.pathname,openKeys:(0,b.getDefaultCollapsedSubMenus)(e)}:null}}]),t}(m.PureComponent);t.default=k},IGtV:function(e,t,a){e.exports={fixedHeader:"antd-pro\\layouts\\-header-fixedHeader"}},IamK:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("bbsP");var l=n(a("/wGt")),r=n(a("pVnL")),o=n(a("q1tI")),u=n(a("AcjU")),i=a("pMM0"),d=o.default.memo(function(e){var t=e.isMobile,a=e.menuData,n=e.collapsed,d=e.onCollapse,c=(0,i.getFlatMenuKeys)(a);return t?o.default.createElement(l.default,{visible:!n,placement:"left",onClose:function(){return d(!0)},style:{padding:0,height:"100vh"}},o.default.createElement(u.default,(0,r.default)({},e,{flatMenuKeys:c,collapsed:!t&&n}))):o.default.createElement(u.default,(0,r.default)({},e,{flatMenuKeys:c}))}),c=d;t.default=c},JwhZ:function(e,t,a){e.exports={head:"antd-pro\\components\\-top-nav-header\\index-head",light:"antd-pro\\components\\-top-nav-header\\index-light",main:"antd-pro\\components\\-top-nav-header\\index-main",wide:"antd-pro\\components\\-top-nav-header\\index-wide",left:"antd-pro\\components\\-top-nav-header\\index-left",right:"antd-pro\\components\\-top-nav-header\\index-right",logo:"antd-pro\\components\\-top-nav-header\\index-logo",menu:"antd-pro\\components\\-top-nav-header\\index-menu"}},NtFa:function(e,t,a){"use strict";var n=a("TqRt"),l=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Pwec");var r,o,u=n(a("CtXQ")),i=n(a("lwsE")),d=n(a("W8MJ")),c=n(a("a1gu")),s=n(a("Nsbk")),f=n(a("7W2i")),p=n(a("U+yc")),m=l(a("q1tI")),h=n(a("mOP9")),g=n(a("fqkP")),v=n(a("h3zL")),y=n(a("X5mu")),b=(r=(0,g.default)(600),o=function(e){function t(){var e,a;(0,i.default)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=(0,c.default)(this,(e=(0,s.default)(t)).call.apply(e,[this].concat(l))),a.toggle=function(){var e=a.props,t=e.collapsed,n=e.onCollapse;n(!t),a.triggerResizeEvent()},a}return(0,f.default)(t,e),(0,d.default)(t,[{key:"componentWillUnmount",value:function(){this.triggerResizeEvent.cancel()}},{key:"triggerResizeEvent",value:function(){var e=document.createEvent("HTMLEvents");e.initEvent("resize",!0,!1),window.dispatchEvent(e)}},{key:"render",value:function(){var e=this.props,t=e.collapsed,a=e.isMobile,n=e.logo;return m.default.createElement("div",{className:v.default.header},a&&m.default.createElement(h.default,{to:"/",className:v.default.logo,key:"logo"},m.default.createElement("img",{src:n,alt:"logo",width:"32"})),m.default.createElement("span",{className:v.default.trigger,onClick:this.toggle},m.default.createElement(u.default,{type:t?"menu-unfold":"menu-fold"})),m.default.createElement(y.default,this.props))}}]),t}(m.PureComponent),(0,p.default)(o.prototype,"triggerResizeEvent",[r],Object.getOwnPropertyDescriptor(o.prototype,"triggerResizeEvent"),o.prototype),o);t.default=b},W660:function(e,t,a){e.exports={content:"antd-pro\\layouts\\-basic-layout-content"}},X5mu:function(e,t,a){"use strict";var n=a("284h"),l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("T2oS");var r=l(a("W9HT"));a("qVdP");var o=l(a("jsC+"));a("Telt");var u=l(a("Tckk"));a("lUTK");var i=l(a("BvKs"));a("Pwec");var d=l(a("CtXQ")),c=l(a("lwsE")),s=l(a("W8MJ")),f=l(a("a1gu")),p=l(a("Nsbk")),m=l(a("7W2i")),h=n(a("q1tI")),g=a("LLXN"),v=(l(a("wd/R")),l(a("bt/X")),l(a("bfXr"))),y=l(a("h3zL")),b=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,m.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props,t=e.currentUser,a=e.onMenuClick,n=e.theme,l=h.default.createElement(i.default,{className:y.default.menu,selectedKeys:[],onClick:a},h.default.createElement(i.default.Item,{key:"userCenter"},h.default.createElement(d.default,{type:"user"}),h.default.createElement(g.FormattedMessage,{id:"menu.account.center",defaultMessage:"account center"})),h.default.createElement(i.default.Item,{key:"userinfo"},h.default.createElement(d.default,{type:"setting"}),h.default.createElement(g.FormattedMessage,{id:"menu.account.settings",defaultMessage:"account settings"})),h.default.createElement(i.default.Item,{key:"triggerError"},h.default.createElement(d.default,{type:"close-circle"}),h.default.createElement(g.FormattedMessage,{id:"menu.account.trigger",defaultMessage:"Trigger Error"})),h.default.createElement(i.default.Divider,null),h.default.createElement(i.default.Item,{key:"logout"},h.default.createElement(d.default,{type:"logout"}),h.default.createElement(g.FormattedMessage,{id:"menu.account.logout",defaultMessage:"logout"}))),c=y.default.right;return"dark"===n&&(c="".concat(y.default.right,"  ").concat(y.default.dark)),h.default.createElement("div",{className:c},t.name?h.default.createElement(o.default,{overlay:l},h.default.createElement("span",{className:"".concat(y.default.action," ").concat(y.default.account)},h.default.createElement(u.default,{size:"small",className:y.default.avatar,src:t.avatar,alt:"avatar"}),h.default.createElement("span",{className:y.default.name},t.name))):h.default.createElement(r.default,{size:"small",style:{marginLeft:8,marginRight:8}}),h.default.createElement(v.default,{className:y.default.action}))}}]),t}(h.PureComponent);t.default=b},ctiy:function(e,t,a){"use strict";var n=a("284h"),l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a("pVnL"));a("miYZ");var o=l(a("tsqr")),u=l(a("lwsE")),i=l(a("W8MJ")),d=l(a("a1gu")),c=l(a("Nsbk")),s=l(a("7W2i"));a("B9cy");var f=l(a("Ol7k")),p=n(a("q1tI")),m=a("LLXN"),h=l(a("MFj2")),g=a("MuoO"),v=l(a("usdK")),y=l(a("NtFa")),b=l(a("wWO0")),M=l(a("IGtV")),E=f.default.Header,k=function(e){function t(){var e,a;(0,u.default)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=(0,d.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(l))),a.state={visible:!0},a.getHeadWidth=function(){var e=a.props,t=e.isMobile,n=e.collapsed,l=e.setting,r=l.fixedHeader,o=l.layout;return t||!r||"topmenu"===o?"100%":n?"calc(100% - 80px)":"calc(100% - 256px)"},a.handleNoticeClear=function(e){o.default.success("".concat((0,m.formatMessage)({id:"component.noticeIcon.cleared"})," ").concat((0,m.formatMessage)({id:"component.globalHeader.".concat(e)})));var t=a.props.dispatch;t({type:"global/clearNotices",payload:e})},a.handleMenuClick=function(e){var t=e.key,n=a.props.dispatch;"userCenter"!==t?"triggerError"!==t?"userinfo"!==t?"logout"===t&&n({type:"login/logout"}):v.default.push("/account/settings/base"):v.default.push("/exception/trigger"):v.default.push("/account/center")},a.handleNoticeVisibleChange=function(e){if(e){var t=a.props.dispatch;t({type:"global/fetchNotices"})}},a.handScroll=function(){var e=a.props.autoHideHeader,t=a.state.visible;if(e){var n=document.body.scrollTop+document.documentElement.scrollTop;a.ticking||(a.ticking=!0,requestAnimationFrame(function(){a.oldScrollTop>n?a.setState({visible:!0}):n>300&&t?a.setState({visible:!1}):n<300&&!t&&a.setState({visible:!0}),a.oldScrollTop=n,a.ticking=!1}))}},a}return(0,s.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.handScroll,{passive:!0})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.handScroll)}},{key:"render",value:function(){var e=this.props,t=e.isMobile,a=e.handleMenuCollapse,n=e.setting,l=n.navTheme,o=n.layout,u=n.fixedHeader,i=this.state.visible,d="topmenu"===o,c=this.getHeadWidth(),s=i?p.default.createElement(E,{style:{padding:0,width:c},className:u?M.default.fixedHeader:""},d&&!t?p.default.createElement(b.default,(0,r.default)({theme:l,mode:"horizontal",onCollapse:a,onNoticeClear:this.handleNoticeClear,onMenuClick:this.handleMenuClick,onNoticeVisibleChange:this.handleNoticeVisibleChange},this.props)):p.default.createElement(y.default,(0,r.default)({onCollapse:a,onNoticeClear:this.handleNoticeClear,onMenuClick:this.handleMenuClick,onNoticeVisibleChange:this.handleNoticeVisibleChange},this.props))):null;return p.default.createElement(h.default,{component:"",transitionName:"fade"},s)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.autoHideHeader||t.visible?null:{visible:!0}}}]),t}(p.PureComponent),x=(0,g.connect)(function(e){var t=e.adminUser,a=e.global,n=e.setting,l=e.loading;return{currentUser:t.currentUser,collapsed:a.collapsed,fetchingNotices:l.effects["global/fetchNotices"],notices:a.notices,setting:n}})(k);t.default=x},gJ0l:function(e,t,a){"use strict";var n=a("284h"),l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Pwec");var r=l(a("CtXQ"));a("B9cy");var o=l(a("Ol7k")),u=n(a("q1tI")),i=l(a("ggcP")),d=o.default.Footer,c=function(){return u.default.createElement(d,{style:{padding:0}},u.default.createElement(i.default,{links:[{key:"Pro \u9996\u9875",title:"Pro \u9996\u9875",href:"https://pro.ant.design",blankTarget:!0},{key:"github",title:u.default.createElement(r.default,{type:"github"}),href:"https://github.com/ant-design/ant-design-pro",blankTarget:!0},{key:"Ant Design",title:"Ant Design",href:"https://ant.design",blankTarget:!0}],copyright:u.default.createElement(u.Fragment,null,"Copyright ",u.default.createElement(r.default,{type:"copyright"})," \u4f53\u9a8c\u6280\u672f\u90e8\u51fa\u54c1")}))},s=c;t.default=s},ggcP:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("q1tI")),r=n(a("TSYQ")),o=n(a("wNoj")),u=function(e){var t=e.className,a=e.links,n=e.copyright,u=(0,r.default)(o.default.globalFooter,t);return l.default.createElement("footer",{className:u},a&&l.default.createElement("div",{className:o.default.links},a.map(function(e){return l.default.createElement("a",{key:e.key,title:e.key,target:e.blankTarget?"_blank":"_self",href:e.href},e.title)})),n&&l.default.createElement("div",{className:o.default.copyright},n))},i=u;t.default=i},h3zL:function(e,t,a){e.exports={header:"antd-pro\\components\\-global-header\\index-header",logo:"antd-pro\\components\\-global-header\\index-logo",menu:"antd-pro\\components\\-global-header\\index-menu",trigger:"antd-pro\\components\\-global-header\\index-trigger",right:"antd-pro\\components\\-global-header\\index-right",action:"antd-pro\\components\\-global-header\\index-action",search:"antd-pro\\components\\-global-header\\index-search",account:"antd-pro\\components\\-global-header\\index-account",avatar:"antd-pro\\components\\-global-header\\index-avatar",dark:"antd-pro\\components\\-global-header\\index-dark",name:"antd-pro\\components\\-global-header\\index-name"}},m8Tn:function(e,t,a){"use strict";var n=a("284h"),l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a("MVZn")),o=l(a("pVnL")),u=l(a("lwsE")),i=l(a("W8MJ")),d=l(a("a1gu")),c=l(a("Nsbk")),s=l(a("7W2i"));a("B9cy");var f=l(a("Ol7k")),p=n(a("q1tI")),m=l(a("ZFw/")),h=l(a("Y+p1")),g=l(a("Wwog")),v=a("MuoO"),y=a("E6Dt"),b=l(a("TSYQ")),M=l(a("bALw")),E=l(a("lU33")),k=a("LLXN"),x=l(a("HZnN")),C=l(a("mxmt")),N=l(a("gJ0l")),P=l(a("ctiy")),w=l(a("R1Dz")),S=l(a("wOmh")),W=l(a("xqX8")),T=l(a("IamK")),O=l(a("W660")),D=(p.default.lazy(function(){return Promise.all([a.e(0),a.e(33)]).then(a.t.bind(null,"PceP",7))}),f.default.Content),q={"screen-xs":{maxWidth:575},"screen-sm":{minWidth:576,maxWidth:767},"screen-md":{minWidth:768,maxWidth:991},"screen-lg":{minWidth:992,maxWidth:1199},"screen-xl":{minWidth:1200,maxWidth:1599},"screen-xxl":{minWidth:1600}},I=function(e){function t(e){var a;return(0,u.default)(this,t),a=(0,d.default)(this,(0,c.default)(t).call(this,e)),a.matchParamsPath=function(e,t){var a=Object.keys(t).find(function(t){return(0,M.default)(t).test(e)});return t[a]},a.getRouterAuthority=function(e,t){var a=["noAuthority"],n=function e(t,n){return n.map(function(n){return n.path===t?a=n.authority:n.routes&&(a=e(t,n.routes)),n}),a};return n(e,t)},a.getPageTitle=function(e,t){var n=a.matchParamsPath(e,t);if(!n)return"Ant Design Pro";var l=(0,k.formatMessage)({id:n.locale||n.name,defaultMessage:n.name});return"".concat(l," - Ant Design Pro")},a.getLayoutStyle=function(){var e=a.props,t=e.fixSiderbar,n=e.isMobile,l=e.collapsed,r=e.layout;return t&&"topmenu"!==r&&!n?{paddingLeft:l?"80px":"256px"}:null},a.handleMenuCollapse=function(e){var t=a.props.dispatch;t({type:"global/changeLayoutCollapsed",payload:e})},a.renderSettingDrawer=function(){return null},a.getPageTitle=(0,g.default)(a.getPageTitle),a.matchParamsPath=(0,g.default)(a.matchParamsPath,h.default),a}return(0,s.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,a=e.route,n=a.routes,l=a.authority;t({type:"adminUser/fetchCurrent"}),t({type:"setting/getSetting"}),t({type:"menu/getMenuData",payload:{routes:n,authority:l}})}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.collapsed,n=t.isMobile;!n||e.isMobile||a||this.handleMenuCollapse(!1)}},{key:"getContext",value:function(){var e=this.props,t=e.location,a=e.breadcrumbNameMap;return{location:t,breadcrumbNameMap:a}}},{key:"render",value:function(){var e=this,t=this.props,a=t.navTheme,n=t.layout,l=t.children,u=t.location.pathname,i=t.isMobile,d=t.menuData,c=t.breadcrumbNameMap,s=t.route.routes,h=t.fixedHeader,g="topmenu"===n,v=this.getRouterAuthority(u,s),M=h?{}:{paddingTop:0},E=p.default.createElement(f.default,null,g&&!i?null:p.default.createElement(T.default,(0,o.default)({logo:C.default,theme:a,onCollapse:this.handleMenuCollapse,menuData:d,isMobile:i},this.props)),p.default.createElement(f.default,{style:(0,r.default)({},this.getLayoutStyle(),{minHeight:"100vh"})},p.default.createElement(P.default,(0,o.default)({menuData:d,handleMenuCollapse:this.handleMenuCollapse,logo:C.default,isMobile:i},this.props)),p.default.createElement(D,{className:O.default.content,style:M},p.default.createElement(x.default,{authority:v,noMatch:p.default.createElement(S.default,null)},l)),p.default.createElement(N.default,null)));return p.default.createElement(p.default.Fragment,null,p.default.createElement(m.default,{title:this.getPageTitle(u,c)},p.default.createElement(y.ContainerQuery,{query:q},function(t){return p.default.createElement(w.default.Provider,{value:e.getContext()},p.default.createElement("div",{className:(0,b.default)(t)},E))})),p.default.createElement(p.Suspense,{fallback:p.default.createElement(W.default,null)},this.renderSettingDrawer()))}}]),t}(p.default.PureComponent),K=(0,v.connect)(function(e){var t=e.global,a=e.setting,n=e.menu;return(0,r.default)({collapsed:t.collapsed,layout:a.layout,menuData:n.menuData,breadcrumbNameMap:n.breadcrumbNameMap},a)})(function(e){return p.default.createElement(E.default,{query:"(max-width: 599px)"},function(t){return p.default.createElement(I,(0,o.default)({},e,{isMobile:t}))})});t.default=K},mR0u:function(e,t,a){e.exports={logo:"antd-pro\\components\\-sider-menu\\index-logo",sider:"antd-pro\\components\\-sider-menu\\index-sider",fixSiderbar:"antd-pro\\components\\-sider-menu\\index-fixSiderbar",light:"antd-pro\\components\\-sider-menu\\index-light",icon:"antd-pro\\components\\-sider-menu\\index-icon"}},oFg3:function(e,t,a){"use strict";var n=a("284h"),l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a("pVnL")),o=l(a("lwsE")),u=l(a("W8MJ")),i=l(a("a1gu")),d=l(a("Nsbk")),c=l(a("7W2i"));a("Pwec");var s=l(a("CtXQ"));a("lUTK");var f=l(a("BvKs")),p=n(a("q1tI")),m=l(a("TSYQ")),h=l(a("mOP9")),g=l(a("Y+p1")),v=l(a("Wwog")),y=a("S/9j"),b=a("pMM0"),M=a("+n12"),E=l(a("mR0u")),k=f.default.SubMenu,x=function(e){return"string"===typeof e&&(0,M.isUrl)(e)?p.default.createElement("img",{src:e,alt:"icon",className:E.default.icon}):"string"===typeof e?p.default.createElement(s.default,{type:e}):e},C=function(e){function t(e){var a;return(0,o.default)(this,t),a=(0,i.default)(this,(0,d.default)(t).call(this,e)),a.getNavMenuItems=function(e,t){return e?e.filter(function(e){return e.name&&!e.hideInMenu}).map(function(e){return a.getSubMenuOrItem(e,t)}).filter(function(e){return e}):[]},a.getSelectedMenuKeys=function(e){var t=a.props.flatMenuKeys;return(0,y.urlToList)(e).map(function(e){return(0,b.getMenuMatches)(t,e).pop()})},a.getSubMenuOrItem=function(e){if(e.children&&!e.hideChildrenInMenu&&e.children.some(function(e){return e.name})){var t=e.name;return p.default.createElement(k,{title:e.icon?p.default.createElement("span",null,x(e.icon),p.default.createElement("span",null,t)):t,key:e.path},a.getNavMenuItems(e.children))}return p.default.createElement(f.default.Item,{key:e.path},a.getMenuItemPath(e))},a.getMenuItemPath=function(e){var t=e.name,n=a.conversionPath(e.path),l=x(e.icon),r=e.target;if(/^https?:\/\//.test(n))return p.default.createElement("a",{href:n,target:r},l,p.default.createElement("span",null,t));var o=a.props,u=o.location,i=o.isMobile,d=o.onCollapse;return p.default.createElement(h.default,{to:n,target:r,replace:n===u.pathname,onClick:i?function(){d(!0)}:void 0},l,p.default.createElement("span",null,t))},a.conversionPath=function(e){return e&&0===e.indexOf("http")?e:"/".concat(e||"").replace(/\/+/g,"/")},a.getSelectedMenuKeys=(0,v.default)(a.getSelectedMenuKeys,g.default),a}return(0,c.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.openKeys,a=e.theme,n=e.mode,l=e.location.pathname,o=e.className,u=this.getSelectedMenuKeys(l);!u.length&&t&&(u=[t[t.length-1]]);var i={};t&&(i={openKeys:t});var d=this.props,c=d.handleOpenChange,s=d.style,h=d.menuData,g=(0,m.default)(o,{"top-nav-menu":"horizontal"===n});return p.default.createElement(f.default,(0,r.default)({key:"Menu",mode:n,theme:a,onOpenChange:c,selectedKeys:u,style:s,className:g},i),this.getNavMenuItems(h))}}]),t}(p.PureComponent);t.default=C},pMM0:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultCollapsedSubMenus=t.getMenuMatches=t.getFlatMenuKeys=void 0;var l=n(a("bALw")),r=a("S/9j"),o=function e(t){var a=[];return t.forEach(function(t){a.push(t.path),t.children&&(a=a.concat(e(t.children)))}),a};t.getFlatMenuKeys=o;var u=function(e,t){return e.filter(function(e){return!!e&&(0,l.default)(e).test(t)})};t.getMenuMatches=u;var i=function(e){var t=e.location.pathname,a=e.flatMenuKeys;return(0,r.urlToList)(t).map(function(e){return u(a,e)[0]}).filter(function(e){return e})};t.getDefaultCollapsedSubMenus=i},wNoj:function(e,t,a){e.exports={globalFooter:"antd-pro\\components\\-global-footer\\index-globalFooter",links:"antd-pro\\components\\-global-footer\\index-links",copyright:"antd-pro\\components\\-global-footer\\index-copyright"}},wWO0:function(e,t,a){"use strict";var n=a("284h"),l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a("pVnL")),o=l(a("lwsE")),u=l(a("W8MJ")),i=l(a("a1gu")),d=l(a("Nsbk")),c=l(a("7W2i")),s=n(a("q1tI")),f=l(a("mOP9")),p=l(a("X5mu")),m=l(a("oFg3")),h=a("pMM0"),g=l(a("JwhZ")),v=function(e){function t(){var e,a;(0,o.default)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=(0,i.default)(this,(e=(0,d.default)(t)).call.apply(e,[this].concat(l))),a.state={maxWidth:void 0},a}return(0,c.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.theme,n=t.contentWidth,l=t.menuData,o=t.logo,u=this.state.maxWidth,i=(0,h.getFlatMenuKeys)(l);return s.default.createElement("div",{className:"".concat(g.default.head," ").concat("light"===a?g.default.light:"")},s.default.createElement("div",{ref:function(t){e.maim=t},className:"".concat(g.default.main," ").concat("Fixed"===n?g.default.wide:"")},s.default.createElement("div",{className:g.default.left},s.default.createElement("div",{className:g.default.logo,key:"logo",id:"logo"},s.default.createElement(f.default,{to:"/"},s.default.createElement("img",{src:o,alt:"logo"}),s.default.createElement("h1",null,"\u540e\u53f0\u7ba1\u7406"))),s.default.createElement("div",{style:{maxWidth:u}},s.default.createElement(m.default,(0,r.default)({},this.props,{flatMenuKeys:i,className:g.default.menu})))),s.default.createElement(p.default,this.props)))}}],[{key:"getDerivedStateFromProps",value:function(e){return{maxWidth:("Fixed"===e.contentWidth?1200:window.innerWidth)-280-165-40}}}]),t}(s.PureComponent);t.default=v}}]);