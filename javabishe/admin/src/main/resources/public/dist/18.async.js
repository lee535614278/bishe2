(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"7ZBz":function(e,t,a){"use strict";var l=a("TqRt"),n=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var d=l(a("bx4M"));a("qVdP");var r=l(a("jsC+"));a("lUTK");var u=l(a("BvKs"));a("iQDF");var o=l(a("+eQT"));a("14J3");var s=l(a("BMrR"));a("Pwec");var c=l(a("CtXQ"));a("+L6B");var i=l(a("2/Rp"));a("jCWc");var f=l(a("kPKH"));a("miYZ");var m=l(a("tsqr")),h=l(a("MVZn"));a("Awhp");var p=l(a("KrTs")),v=l(a("lwsE")),E=l(a("W8MJ")),y=l(a("a1gu")),g=l(a("Nsbk")),b=l(a("7W2i"));a("7Kak");var w=l(a("9yH6"));a("OaEy");var k=l(a("2fM7"));a("5NDa");var S=l(a("5rEg"));a("FJo9");var C=l(a("L41K"));a("y8nQ");var F,x,R,T=l(a("Vl3Y")),M=n(a("q1tI")),V=a("MuoO"),L=l(a("wd/R")),K=l(a("mOP9")),I=l(a("CkN6")),N=l(a("EfYk")),A=T.default.Item,P=(C.default.Step,S.default.TextArea,k.default.Option),O=(w.default.Group,function(e){return Object.keys(e).map(function(t){return e[t]}).join(",")}),D=["success","default","processing","error"],j=["\u5df2\u5ba1\u6838","\u672a\u5ba1\u6838","\u5ba1\u6838\u4e2d","\u672a\u901a\u8fc7"],J=["success","error"],Y=["\u6b63\u5e38","\u7981\u6b62"],W=(F=(0,V.connect)(function(e){var t=e.video,a=e.loading;return{data:t.list,loading:a.models.rule}}),x=T.default.create(),F(R=x(R=function(e){function t(){var e,a;(0,v.default)(this,t);for(var l=arguments.length,n=new Array(l),d=0;d<l;d++)n[d]=arguments[d];return a=(0,y.default)(this,(e=(0,g.default)(t)).call.apply(e,[this].concat(n))),a.state={modalVisible:!1,updateModalVisible:!1,expandForm:!1,selectedRows:[],formValues:{},stepFormValues:{}},a.columns=[{title:"\u89c6\u9891\u6807\u9898",dataIndex:"title",width:"15%"},{title:"\u6295\u7a3f\u4eba\u6635\u79f0",dataIndex:"nickname",align:"center",width:"15%"},{title:"\u89c6\u9891\u64ad\u653e\u6b21\u6570",dataIndex:"playNum",sorter:!0,align:"right",needTotal:!0,width:"10%"},{title:"\u663e\u793a\u72b6\u6001",dataIndex:"showStatus",filters:[{text:Y[0],value:0},{text:Y[1],value:1}],render:function(e){return M.default.createElement(p.default,{status:J[e],text:Y[e]})}},{title:"\u5ba1\u6838\u72b6\u6001",dataIndex:"checkStatus",filters:[{text:j[0],value:0},{text:j[1],value:1},{text:j[2],value:2},{text:j[3],value:3}],render:function(e){return M.default.createElement(p.default,{status:D[e],text:j[e]})}},{title:"\u4e0a\u4f20\u65f6\u95f4",dataIndex:"createTime",sorter:!0,width:"15%",render:function(e){return M.default.createElement("span",null,(0,L.default)(e).format("YYYY-MM-DD HH:mm:ss"))}},{title:"\u64cd\u4f5c",render:function(e,t){return M.default.createElement(M.Fragment,null,M.default.createElement(K.default,{to:"/contentmanager/video/video-list/info?id="+t.id},"\u8be6\u7ec6\u4fe1\u606f"))}}],a.handleStandardTableChange=function(e,t,l){var n=a.props.dispatch,d=a.state.formValues,r=Object.keys(t).reduce(function(e,a){var l=(0,h.default)({},e);return l[a]=O(t[a]),l},{}),u=(0,h.default)({currentPage:e.current,pageSize:e.pageSize},d,r);l.field&&(u.sorter="".concat(l.field,"_").concat(l.order)),n({type:"video/fetch",payload:u})},a.handleFormReset=function(){var e=a.props,t=e.form,l=e.dispatch;t.resetFields(),a.setState({formValues:{}}),l({type:"video/fetch",payload:{}})},a.toggleForm=function(){var e=a.state.expandForm;a.setState({expandForm:!e})},a.handleMenuClick=function(e){var t=a.props.dispatch,l=a.state.selectedRows;if(l)switch(e.key){case"remove":t({type:"rule/remove",payload:{key:l.map(function(e){return e.key})},callback:function(){a.setState({selectedRows:[]})}});break;default:break}},a.handleSelectRows=function(e){a.setState({selectedRows:e})},a.handleSearch=function(e){e.preventDefault();var t=a.props,l=t.dispatch,n=t.form;n.validateFields(function(e,t){if(!e){var n=(0,h.default)({},t);a.setState({formValues:n}),l({type:"video/fetch",payload:n})}})},a.handleModalVisible=function(e){a.setState({modalVisible:!!e})},a.handleUpdateModalVisible=function(e,t){a.setState({updateModalVisible:!!e,stepFormValues:t||{}})},a.handleAdd=function(e){var t=a.props.dispatch;t({type:"rule/add",payload:{desc:e.desc}}),m.default.success("\u6dfb\u52a0\u6210\u529f"),a.handleModalVisible()},a.handleUpdate=function(e){var t=a.props.dispatch;t({type:"rule/update",payload:{name:e.name,desc:e.desc,key:e.key}}),m.default.success("\u914d\u7f6e\u6210\u529f"),a.handleUpdateModalVisible()},a}return(0,b.default)(t,e),(0,E.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"video/fetch"})}},{key:"renderSimpleForm",value:function(){var e=this.props.form.getFieldDecorator;return M.default.createElement(T.default,{onSubmit:this.handleSearch,layout:"inline"},M.default.createElement(s.default,{gutter:{md:8,lg:24,xl:48}},M.default.createElement(f.default,{md:8,sm:24},M.default.createElement(A,{label:"\u6295\u7a3f\u4eba\u6635\u79f0"},e("nickname")(M.default.createElement(S.default,{placeholder:"\u8bf7\u8f93\u5165"})))),M.default.createElement(f.default,{md:8,sm:24},M.default.createElement(A,{label:"\u5ba1\u6838\u72b6\u6001"},e("checkStatus")(M.default.createElement(k.default,{placeholder:"\u8bf7\u9009\u62e9",style:{width:"100%"}},M.default.createElement(P,{value:"0"},"\u5df2\u5ba1\u6838"),M.default.createElement(P,{value:"1"},"\u672a\u5ba1\u6838"),M.default.createElement(P,{value:"2"},"\u5ba1\u6838\u4e2d"),M.default.createElement(P,{value:"3"},"\u672a\u901a\u8fc7"))))),M.default.createElement(f.default,{md:8,sm:24},M.default.createElement("span",{className:N.default.submitButtons},M.default.createElement(i.default,{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),M.default.createElement(i.default,{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e"),M.default.createElement("a",{style:{marginLeft:8},onClick:this.toggleForm},"\u5c55\u5f00 ",M.default.createElement(c.default,{type:"down"}))))))}},{key:"renderAdvancedForm",value:function(){var e=this.props.form.getFieldDecorator;return M.default.createElement(T.default,{onSubmit:this.handleSearch,layout:"inline"},M.default.createElement(s.default,{gutter:{md:8,lg:24,xl:48}},M.default.createElement(f.default,{md:8,sm:24},M.default.createElement(A,{label:"\u6295\u7a3f\u4eba\u6635\u79f0"},e("nickname")(M.default.createElement(S.default,{placeholder:"\u8bf7\u8f93\u5165"})))),M.default.createElement(f.default,{md:8,sm:24},M.default.createElement(A,{label:"\u5ba1\u6838\u72b6\u6001"},e("checkStatus")(M.default.createElement(k.default,{placeholder:"\u8bf7\u9009\u62e9",style:{width:"100%"}},M.default.createElement(P,{value:"0"},"\u5df2\u5ba1\u6838"),M.default.createElement(P,{value:"1"},"\u672a\u5ba1\u6838"),M.default.createElement(P,{value:"2"},"\u5ba1\u6838\u4e2d"),M.default.createElement(P,{value:"3"},"\u672a\u901a\u8fc7"))))),M.default.createElement(f.default,{md:8,sm:24},M.default.createElement(A,{label:"\u663e\u793a\u72b6\u6001"},e("showStatus")(M.default.createElement(k.default,{placeholder:"\u8bf7\u9009\u62e9",style:{width:"100%"}},M.default.createElement(P,{value:"0"},"\u6b63\u5e38"),M.default.createElement(P,{value:"1"},"\u7981\u6b62")))))),M.default.createElement(s.default,{gutter:{md:8,lg:24,xl:48}},M.default.createElement(f.default,{md:8,sm:24},M.default.createElement(A,{label:"\u6295\u7a3f\u65e5\u671f"},e("createTime")(M.default.createElement(o.default,{style:{width:"100%"},placeholder:"\u8bf7\u8f93\u5165\u6295\u7a3f\u65e5\u671f"}))))),M.default.createElement("div",{style:{overflow:"hidden"}},M.default.createElement("div",{style:{float:"right",marginBottom:24}},M.default.createElement(i.default,{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),M.default.createElement(i.default,{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e"),M.default.createElement("a",{style:{marginLeft:8},onClick:this.toggleForm},"\u6536\u8d77 ",M.default.createElement(c.default,{type:"up"})))))}},{key:"renderForm",value:function(){var e=this.state.expandForm;return e?this.renderAdvancedForm():this.renderSimpleForm()}},{key:"render",value:function(){var e=this.props,t=e.data,a=(e.loading,this.state),l=a.selectedRows,n=(a.modalVisible,a.updateModalVisible,a.stepFormValues,M.default.createElement(u.default,{onClick:this.handleMenuClick,selectedKeys:[]},M.default.createElement(u.default.Item,{key:"remove"},"\u5220\u9664"),M.default.createElement(u.default.Item,{key:"approval"},"\u6279\u91cf\u5ba1\u6279")));this.handleAdd,this.handleModalVisible,this.handleUpdateModalVisible,this.handleUpdate;return M.default.createElement(d.default,{bordered:!1},M.default.createElement("div",{className:N.default.tableList},M.default.createElement("div",{className:N.default.tableListForm},this.renderForm()),M.default.createElement("div",{className:N.default.tableListOperator},l.length>0&&M.default.createElement("span",null,M.default.createElement(i.default,null,"\u6279\u91cf\u64cd\u4f5c"),M.default.createElement(r.default,{overlay:n},M.default.createElement(i.default,null,"\u66f4\u591a\u64cd\u4f5c ",M.default.createElement(c.default,{type:"down"}))))),M.default.createElement(I.default,{selectedRows:l,loading:!1,data:t,columns:this.columns,onSelectRow:this.handleSelectRows,onChange:this.handleStandardTableChange})))}}]),t}(M.PureComponent))||R)||R),q=W;t.default=q},CkN6:function(e,t,a){"use strict";var l=a("284h"),n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("g9YV");var d=n(a("wCAj")),r=n(a("pVnL"));a("fOrg");var u=n(a("+KLJ")),o=n(a("QILm")),s=n(a("lwsE")),c=n(a("W8MJ")),i=n(a("a1gu")),f=n(a("Nsbk")),m=n(a("7W2i")),h=n(a("MVZn")),p=l(a("q1tI")),v=n(a("rZM1"));function E(e){var t=[];return e.forEach(function(e){e.needTotal&&t.push((0,h.default)({},e,{total:0}))}),t}var y=function(e){function t(e){var a;(0,s.default)(this,t),a=(0,i.default)(this,(0,f.default)(t).call(this,e)),a.handleRowSelectChange=function(e,t){console.log("handleTableChange");var l=a.state.needTotalList;l=l.map(function(e){return(0,h.default)({},e,{total:t.reduce(function(t,a){return t+parseFloat(a[e.dataIndex],10)},0)})});var n=a.props.onSelectRow;n&&n(t),a.setState({selectedRowKeys:e,needTotalList:l})},a.handleTableChange=function(e,t,l){console.log("handleTableChange");var n=a.props.onChange;n&&n(e,t,l)},a.cleanSelectedKeys=function(){console.log("handleTableChange"),a.handleRowSelectChange([],[])};var l=e.columns,n=E(l);return a.state={selectedRowKeys:[],needTotalList:n},a}return(0,m.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.state,t=e.selectedRowKeys,a=e.needTotalList,l=this.props,n=l.data,s=n.list,c=n.pagination,i=l.rowKey,f=(0,o.default)(l,["data","rowKey"]),m=(0,h.default)({showSizeChanger:!0,showQuickJumper:!0},c),E={selectedRowKeys:t,onChange:this.handleRowSelectChange,getCheckboxProps:function(e){return{disabled:e.disabled}}};return p.default.createElement("div",{className:v.default.standardTable},p.default.createElement("div",{className:v.default.tableAlert},p.default.createElement(u.default,{message:p.default.createElement(p.Fragment,null,"\u5df2\u9009\u62e9 ",p.default.createElement("a",{style:{fontWeight:600}},t.length)," \u9879\xa0\xa0",a.map(function(e){return p.default.createElement("span",{style:{marginLeft:8},key:e.dataIndex},e.title,"\u603b\u8ba1\xa0",p.default.createElement("span",{style:{fontWeight:600}},e.render?e.render(e.total):e.total))}),p.default.createElement("a",{onClick:this.cleanSelectedKeys,style:{marginLeft:24}},"\u6e05\u7a7a")),type:"info",showIcon:!0})),p.default.createElement(d.default,(0,r.default)({rowKey:i||"key",rowSelection:E,dataSource:s,pagination:m,onChange:this.handleTableChange},f)))}}],[{key:"getDerivedStateFromProps",value:function(e){if(0===e.selectedRows.length){var t=E(e.columns);return{selectedRowKeys:[],needTotalList:t}}return null}}]),t}(p.PureComponent),g=y;t.default=g},rZM1:function(e,t,a){e.exports={standardTable:"antd-pro\\components\\-standard-table\\index-standardTable",tableAlert:"antd-pro\\components\\-standard-table\\index-tableAlert"}}}]);