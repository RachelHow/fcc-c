(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(_,e,t){},16:function(_,e,t){},17:function(_,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),s=t(7),l=t.n(s),u=(t(15),t(8));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(u.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(_){_.unregister()})},8:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_rachel_Downloads_R_GitHub_Archive_GitHub_FCC_Calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_Users_rachel_Downloads_R_GitHub_Archive_GitHub_FCC_Calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_Users_rachel_Downloads_R_GitHub_Archive_GitHub_FCC_Calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_Users_rachel_Downloads_R_GitHub_Archive_GitHub_FCC_Calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_Users_rachel_Downloads_R_GitHub_Archive_GitHub_FCC_Calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_App_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(16),_App_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__),isOperator=/[x\/+-]/,endsWithOperator=/[x\/+-]$/,equalsStyle={position:"absolute",height:130,bottom:0},App=function(_Component){function App(props){var _this;return Object(_Users_rachel_Downloads_R_GitHub_Archive_GitHub_FCC_Calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),_this=Object(_Users_rachel_Downloads_R_GitHub_Archive_GitHub_FCC_Calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_Users_rachel_Downloads_R_GitHub_Archive_GitHub_FCC_Calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(App).call(this,props)),_this.maxDigitWarning=function(){_this.setState({currentVal:"Digit Limit Met",prevVal:_this.state.currentVal}),setTimeout(function(){return _this.setState({currentVal:_this.state.prevVal})},1e3)},_this.handleEvaluate=function(){if(!_this.state.currentVal.includes("Limit")){var expression=_this.state.formula;endsWithOperator.test(expression)&&(expression=expression.slice(0,-1)),expression=expression.replace(/x/g,"*").replace(/\u2011/g,"-");var answer=Math.round(1e12*eval(expression))/1e12;_this.setState({currentVal:answer.toString(),formula:expression.replace(/\*/g,"\u22c5").replace(/-/g,"\u2011")+"="+answer,prevVal:answer,evaluated:!0})}},_this.handleOperators=function(_){_this.state.currentVal.includes("Limit")||(_this.setState({currentVal:_.target.value,evaluated:!1}),_this.state.formula.includes("=")?_this.setState({formula:_this.state.prevVal+_.target.value}):_this.setState({prevVal:isOperator.test(_this.state.currentVal)?_this.state.prevVal:_this.state.formula,formula:isOperator.test(_this.state.currentVal)?_this.state.prevVal+=_.target.value:_this.state.formula+=_.target.value}))},_this.handleNumbers=function(_){_this.state.currentVal.includes("Limit")||(_this.setState({evaluated:!1}),_this.state.currentVal.length>15?_this.maxDigitWarning():!0===_this.state.evaluated?_this.setState({currentVal:_.target.value,formula:"0"!==_.target.value?_.target.value:""}):_this.setState({currentVal:"0"===_this.state.currentVal||isOperator.test(_this.state.currentVal)?_.target.value:_this.state.currentVal+_.target.value,formula:"0"===_this.state.currentVal&&"0"===_.target.value?_this.state.formula:/([^.0-9]0)$/.test(_this.state.formula)?_this.state.formula.slice(0,-1)+_.target.value:_this.state.formula+_.target.value}))},_this.handleDecimal=function(){!0===_this.state.evaluated?_this.setState({currentVal:"0.",formula:"0.",evaluated:!1}):_this.state.currentVal.includes(".")||_this.state.currentVal.includes("Limit")||(_this.setState({evaluated:!1}),_this.state.currentVal.length>15?_this.maxDigitWarning():endsWithOperator.test(_this.state.formula)||"0"===_this.state.currentVal&&""===_this.state.formula?_this.setState({currentVal:"0.",formula:_this.state.formula+"0."}):_this.setState({currentVal:_this.state.formula.match(/(-?\d+\.?\d*)$/)[0]+".",formula:_this.state.formula+"."}))},_this.clearButton=function(){_this.setState({currentVal:"0",prevVal:"0",formula:"",currentSign:"pos",lastClicked:""})},_this.state={currentVal:"0",prevVal:"0",formula:"",currentSign:"pos",lastClicked:""},_this}return Object(_Users_rachel_Downloads_R_GitHub_Archive_GitHub_FCC_Calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(App,_Component),Object(_Users_rachel_Downloads_R_GitHub_Archive_GitHub_FCC_Calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calculator"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Formula,{formula:this.state.formula.replace(/x/g,"\u22c5")}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Output,{currentValue:this.state.currentVal}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Buttons,{evaluate:this.handleEvaluate,operators:this.handleOperators,clearButton:this.clearButton,numbers:this.handleNumbers,decimal:this.handleDecimal})))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5__.Component),Buttons=function(_){function e(){return Object(_Users_rachel_Downloads_R_GitHub_Archive_GitHub_FCC_Calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,e),Object(_Users_rachel_Downloads_R_GitHub_Archive_GitHub_FCC_Calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_Users_rachel_Downloads_R_GitHub_Archive_GitHub_FCC_Calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(e).apply(this,arguments))}return Object(_Users_rachel_Downloads_R_GitHub_Archive_GitHub_FCC_Calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(e,_),Object(_Users_rachel_Downloads_R_GitHub_Archive_GitHub_FCC_Calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(e,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"clear",value:"AC",onClick:this.props.clearButton,className:"large-btn"},"AC"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"divide",value:"/",onClick:this.props.operators},"/"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"multiply",value:"x",onClick:this.props.operators},"x"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"seven",value:"7",onClick:this.props.numbers},"7"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"eight",value:"8",onClick:this.props.numbers},"8"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"nine",value:"9",onClick:this.props.numbers},"9"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"subtract",value:"-",onClick:this.props.operators},"-"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"four",value:"4",onClick:this.props.numbers},"4"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"five",value:"5",onClick:this.props.numbers},"5"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"six",value:"6",onClick:this.props.numbers},"6"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"add",value:"+",onClick:this.props.operators},"+"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"one",value:"1",onClick:this.props.numbers},"1"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"two",value:"2",onClick:this.props.numbers},"2"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"three",value:"3",onClick:this.props.numbers},"3"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"zero",value:"0",onClick:this.props.numbers,className:"large-btn"},"0"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"decimal",value:".",onClick:this.props.decimal},"."),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"equals",value:"=",onClick:this.props.evaluate,style:equalsStyle},"="))}}]),e}(react__WEBPACK_IMPORTED_MODULE_5__.Component),Formula=function(_){function e(){return Object(_Users_rachel_Downloads_R_GitHub_Archive_GitHub_FCC_Calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,e),Object(_Users_rachel_Downloads_R_GitHub_Archive_GitHub_FCC_Calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_Users_rachel_Downloads_R_GitHub_Archive_GitHub_FCC_Calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(e).apply(this,arguments))}return Object(_Users_rachel_Downloads_R_GitHub_Archive_GitHub_FCC_Calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(e,_),Object(_Users_rachel_Downloads_R_GitHub_Archive_GitHub_FCC_Calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(e,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"formulaScreen"},this.props.formula)}}]),e}(react__WEBPACK_IMPORTED_MODULE_5__.Component),Output=function(_){function e(){return Object(_Users_rachel_Downloads_R_GitHub_Archive_GitHub_FCC_Calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,e),Object(_Users_rachel_Downloads_R_GitHub_Archive_GitHub_FCC_Calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_Users_rachel_Downloads_R_GitHub_Archive_GitHub_FCC_Calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(e).apply(this,arguments))}return Object(_Users_rachel_Downloads_R_GitHub_Archive_GitHub_FCC_Calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(e,_),Object(_Users_rachel_Downloads_R_GitHub_Archive_GitHub_FCC_Calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(e,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"display",className:"outputScreen"},this.props.currentValue)}}]),e}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=App},9:function(_,e,t){_.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.0b471be4.chunk.js.map