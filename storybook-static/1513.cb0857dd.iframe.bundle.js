(self.webpackChunkFromNowStorybook=self.webpackChunkFromNowStorybook||[]).push([[1513],{"./libs/fromnow/node_modules/react-native-toast-notifications/lib/module/hook/context.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var ToastContext=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")).default.createContext({});exports.default=ToastContext},"./libs/fromnow/node_modules/react-native-toast-notifications/lib/module/hook/provider.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.GlobalToast=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/slicedToArray.js")),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_context=_interopRequireDefault(__webpack_require__("./libs/fromnow/node_modules/react-native-toast-notifications/lib/module/hook/context.js")),_toastContainer=_interopRequireDefault(__webpack_require__("./libs/fromnow/node_modules/react-native-toast-notifications/lib/module/toast-container.js")),_excluded=["children"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}exports.default=function ToastProvider(_ref){var children=_ref.children,props=(0,_objectWithoutProperties2.default)(_ref,_excluded),toastRef=(0,_react.useRef)(null),_useState=(0,_react.useState)({}),_useState2=(0,_slicedToArray2.default)(_useState,2),refState=_useState2[0],setRefState=_useState2[1];return(0,_react.useEffect)((function(){setRefState(toastRef.current),exports.GlobalToast=toastRef.current}),[]),_react.default.createElement(_context.default.Provider,{value:refState},children,_react.default.createElement(_toastContainer.default,_extends({ref:toastRef},props)))}},"./libs/fromnow/node_modules/react-native-toast-notifications/lib/module/hook/useToast.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=__webpack_require__("./node_modules/react/index.js"),_context=_interopRequireDefault(__webpack_require__("./libs/fromnow/node_modules/react-native-toast-notifications/lib/module/hook/context.js"));exports.default=function useToast(){return(0,_react.useContext)(_context.default)}},"./libs/fromnow/node_modules/react-native-toast-notifications/lib/module/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Toast",{enumerable:!0,get:function get(){return _provider.GlobalToast}}),Object.defineProperty(exports,"ToastProvider",{enumerable:!0,get:function get(){return _provider.default}}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _toastContainer.default}}),Object.defineProperty(exports,"useToast",{enumerable:!0,get:function get(){return _useToast.default}});var _toastContainer=_interopRequireDefault(__webpack_require__("./libs/fromnow/node_modules/react-native-toast-notifications/lib/module/toast-container.js")),_provider=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./libs/fromnow/node_modules/react-native-toast-notifications/lib/module/hook/provider.js")),_useToast=_interopRequireDefault(__webpack_require__("./libs/fromnow/node_modules/react-native-toast-notifications/lib/module/hook/useToast.js"));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}},"./libs/fromnow/node_modules/react-native-toast-notifications/lib/module/toast-container.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _toConsumableArray2=_interopRequireDefault(__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/toConsumableArray.js")),_classCallCheck2=_interopRequireDefault(__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/classCallCheck.js")),_createClass2=_interopRequireDefault(__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/createClass.js")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/getPrototypeOf.js")),_inherits2=_interopRequireDefault(__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/inherits.js")),_nativewind=__webpack_require__("./libs/fromnow/node_modules/nativewind/dist/index.js"),_react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_KeyboardAvoidingView=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/KeyboardAvoidingView/index.js")),_Platform=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Platform/index.js")),_Dimensions=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Dimensions/index.js")),_SafeAreaView=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/SafeAreaView/index.js")),_toast=_interopRequireDefault(__webpack_require__("./libs/fromnow/node_modules/react-native-toast-notifications/lib/module/toast.js"));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var _Dimensions$get=_Dimensions.default.get("window"),height=_Dimensions$get.height,width=_Dimensions$get.width,ToastContainer=function(_Component){function ToastContainer(props){var _this;return(0,_classCallCheck2.default)(this,ToastContainer),_defineProperty(_this=function _callSuper(t,o,e){return o=(0,_getPrototypeOf2.default)(o),(0,_possibleConstructorReturn2.default)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,_getPrototypeOf2.default)(t).constructor):o.apply(t,e))}(this,ToastContainer,[props]),"show",(function(message,toastOptions){var id=(null==toastOptions?void 0:toastOptions.id)||Math.random().toString(),onDestroy=function onDestroy(){(null==toastOptions?void 0:toastOptions.onClose)&&(null==toastOptions||toastOptions.onClose()),_this.setState({toasts:_this.state.toasts.filter((function(t){return t.id!==id}))})};return requestAnimationFrame((function(){_this.setState({toasts:[Object.assign({id,onDestroy,message,open:!0,onHide:function onHide(){return _this.hide(id)}},_this.props,toastOptions)].concat((0,_toConsumableArray2.default)(_this.state.toasts.filter((function(t){return t.open}))))})})),id})),_defineProperty(_this,"update",(function(id,message,toastOptions){_this.setState({toasts:_this.state.toasts.map((function(toast){return toast.id===id?Object.assign({},toast,{message},toastOptions):toast}))})})),_defineProperty(_this,"hide",(function(id){_this.setState({toasts:_this.state.toasts.map((function(t){return t.id===id?Object.assign({},t,{open:!1}):t}))})})),_defineProperty(_this,"hideAll",(function(){_this.setState({toasts:_this.state.toasts.map((function(t){return Object.assign({},t,{open:!1})}))})})),_defineProperty(_this,"isOpen",(function(id){return _this.state.toasts.some((function(t){return t.id===id&&t.open}))})),_this.state={toasts:[]},_this}return(0,_inherits2.default)(ToastContainer,_Component),(0,_createClass2.default)(ToastContainer,[{key:"renderBottomToasts",value:function renderBottomToasts(){var toasts=this.state.toasts,_this$props=this.props,offset=_this$props.offset,style={bottom:_this$props.offsetBottom||offset,width,justifyContent:"flex-end",flexDirection:"column"};return _react.default.createElement(_KeyboardAvoidingView.default,{behavior:"ios"===_Platform.default.OS?"position":void 0,style:[styles.container,style],pointerEvents:"box-none"},_react.default.createElement(_SafeAreaView.default,null,toasts.filter((function(t){return!t.placement||"bottom"===t.placement})).map((function(toast){return _react.default.createElement(_toast.default,_extends({key:toast.id},toast))}))))}},{key:"renderTopToasts",value:function renderTopToasts(){var toasts=this.state.toasts,_this$props2=this.props,offset=_this$props2.offset,style={top:_this$props2.offsetTop||offset,width,justifyContent:"flex-start",flexDirection:"column-reverse"};return _react.default.createElement(_KeyboardAvoidingView.default,{behavior:"ios"===_Platform.default.OS?"position":void 0,style:[styles.container,style],pointerEvents:"box-none"},_react.default.createElement(_SafeAreaView.default,null,toasts.filter((function(t){return"top"===t.placement})).map((function(toast){return _react.default.createElement(_toast.default,_extends({key:toast.id},toast))}))))}},{key:"renderCenterToasts",value:function renderCenterToasts(){var toasts=this.state.toasts,_this$props3=this.props,offset=_this$props3.offset,style={top:_this$props3.offsetTop||offset,height,width,justifyContent:"center",flexDirection:"column-reverse"};return toasts.filter((function(t){return"center"===t.placement})).length>0?_react.default.createElement(_KeyboardAvoidingView.default,{behavior:"ios"===_Platform.default.OS?"position":void 0,style:[styles.container,style],pointerEvents:"box-none"},toasts.filter((function(t){return"center"===t.placement})).map((function(toast){return _react.default.createElement(_toast.default,_extends({key:toast.id},toast))}))):null}},{key:"render",value:function render(){return _react.default.createElement(_react.default.Fragment,null,this.renderTopToasts(),this.renderBottomToasts(),this.renderCenterToasts())}}])}(_react.Component);_defineProperty(ToastContainer,"defaultProps",{placement:"bottom",offset:10,swipeEnabled:!0});var styles=_StyleSheet.default.create({container:Object.assign({flex:0,position:"web"===_Platform.default.OS?"fixed":"absolute",maxWidth:"100%",zIndex:999999,elevation:999999,alignSelf:"center"},"web"===_Platform.default.OS?{overflow:"hidden",userSelect:"none"}:null),message:{color:"#333"}});exports.default=ToastContainer;_nativewind.NativeWindStyleSheet.create({styles:{container:{width:"100%"},"container@0":{maxWidth:640},"container@1":{maxWidth:768},"container@2":{maxWidth:1024},"container@3":{maxWidth:1280},"container@4":{maxWidth:1536},absolute:{position:"absolute"},flex:{display:"flex"},hidden:{display:"none"},elevation:{elevation:3}},atRules:{container:[[["media","(min-width: 640px)"]],[["media","(min-width: 768px)"]],[["media","(min-width: 1024px)"]],[["media","(min-width: 1280px)"]],[["media","(min-width: 1536px)"]]]},topics:{container:["width"]}})},"./libs/fromnow/node_modules/react-native-toast-notifications/lib/module/toast.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/slicedToArray.js")),_nativewind=__webpack_require__("./libs/fromnow/node_modules/nativewind/dist/index.js"),_react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_Animated=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Animated/index.js")),_Text=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js")),_TouchableWithoutFeedback=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/TouchableWithoutFeedback/index.js")),_PanResponder=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/PanResponder/index.js")),_Platform=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Platform/index.js")),_useDimensions=__webpack_require__("./libs/fromnow/node_modules/react-native-toast-notifications/lib/module/utils/useDimensions.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var styles=_StyleSheet.default.create({container:{width:"100%",alignItems:"center"},toastContainer:{paddingHorizontal:12,paddingVertical:12,borderRadius:5,marginVertical:5,flexDirection:"row",alignItems:"center",overflow:"hidden"},message:{color:"#fff",fontWeight:"500"},iconContainer:{marginRight:5}});exports.default=function Toast(props){var id=props.id,onDestroy=props.onDestroy,icon=props.icon,_props$type=props.type,type=void 0===_props$type?"normal":_props$type,message=props.message,_props$duration=props.duration,duration=void 0===_props$duration?5e3:_props$duration,style=props.style,textStyle=props.textStyle,_props$animationDurat=props.animationDuration,animationDuration=void 0===_props$animationDurat?250:_props$animationDurat,_props$animationType=props.animationType,animationType=void 0===_props$animationType?"slide-in":_props$animationType,successIcon=props.successIcon,dangerIcon=props.dangerIcon,warningIcon=props.warningIcon,successColor=props.successColor,dangerColor=props.dangerColor,warningColor=props.warningColor,normalColor=props.normalColor,placement=props.placement,swipeEnabled=props.swipeEnabled,_onPress=props.onPress,containerRef=(0,_react.useRef)(null),_useState=(0,_react.useState)(new _Animated.default.Value(0)),animation=(0,_slicedToArray2.default)(_useState,1)[0],panResponderRef=(0,_react.useRef)(),panResponderAnimRef=(0,_react.useRef)(),closeTimeoutRef=(0,_react.useRef)(null),dims=(0,_useDimensions.useDimensions)();(0,_react.useEffect)((function(){return _Animated.default.timing(animation,{toValue:1,useNativeDriver:"web"!==_Platform.default.OS,duration:animationDuration}).start(),0!==duration&&"number"==typeof duration&&(closeTimeoutRef.current=setTimeout((function(){handleClose()}),duration)),function(){closeTimeoutRef.current&&clearTimeout(closeTimeoutRef.current)}}),[duration]),(0,_react.useEffect)((function(){props.open||(closeTimeoutRef.current&&clearTimeout(closeTimeoutRef.current),handleClose())}),[props.open]);var handleClose=function handleClose(){_Animated.default.timing(animation,{toValue:0,useNativeDriver:"web"!==_Platform.default.OS,duration:animationDuration}).start((function(){return onDestroy()}))},getPanResponderAnim=function getPanResponderAnim(){return panResponderAnimRef.current||(panResponderAnimRef.current=new _Animated.default.ValueXY({x:0,y:0})),panResponderAnimRef.current};if(void 0===icon)switch(type){case"success":successIcon&&(icon=successIcon);break;case"danger":dangerIcon&&(icon=dangerIcon);break;case"warning":warningIcon&&(icon=warningIcon)}var backgroundColor="";switch(type){case"success":backgroundColor=successColor||"rgb(46, 125, 50)";break;case"danger":backgroundColor=dangerColor||"rgb(211, 47, 47)";break;case"warning":backgroundColor=warningColor||"rgb(237, 108, 2)";break;default:backgroundColor=normalColor||"#333"}var _animationStyle$trans,_animationStyle$trans2,animationStyle={opacity:animation,transform:[{translateY:animation.interpolate({inputRange:[0,1],outputRange:"bottom"===placement?[20,0]:[-20,0]})}]};swipeEnabled&&(null===(_animationStyle$trans=animationStyle.transform)||void 0===_animationStyle$trans||_animationStyle$trans.push(getPanResponderAnim().getTranslateTransform()[0]));"zoom-in"===animationType&&(null===(_animationStyle$trans2=animationStyle.transform)||void 0===_animationStyle$trans2||_animationStyle$trans2.push({scale:animation.interpolate({inputRange:[0,1],outputRange:[.7,1]})}));return _react.default.createElement(_Animated.default.View,_extends({pointerEvents:"box-none",ref:containerRef},swipeEnabled?function getPanResponder(){if(panResponderRef.current)return panResponderRef.current;var swipeThreshold="android"===_Platform.default.OS?10:0;return panResponderRef.current=_PanResponder.default.create({onMoveShouldSetPanResponder:function onMoveShouldSetPanResponder(_,gestureState){return Math.abs(gestureState.dx)>swipeThreshold||Math.abs(gestureState.dy)>swipeThreshold},onPanResponderMove:function onPanResponderMove(_,gestureState){var _getPanResponderAnim;null===(_getPanResponderAnim=getPanResponderAnim())||void 0===_getPanResponderAnim||_getPanResponderAnim.setValue({x:gestureState.dx,y:gestureState.dy})},onPanResponderRelease:function onPanResponderRelease(_,gestureState){gestureState.dx>50?function panReleaseToRight(gestureState){_Animated.default.timing(getPanResponderAnim(),{toValue:{x:dims.width/10*9,y:gestureState.dy},useNativeDriver:"web"!==_Platform.default.OS,duration:250}).start((function(){return onDestroy()}))}(gestureState):gestureState.dx<-50?function panReleaseToLeft(gestureState){_Animated.default.timing(getPanResponderAnim(),{toValue:{x:-dims.width/10*9,y:gestureState.dy},useNativeDriver:"web"!==_Platform.default.OS,duration:250}).start((function(){return onDestroy()}))}(gestureState):_Animated.default.spring(getPanResponderAnim(),{toValue:{x:0,y:0},useNativeDriver:"web"!==_Platform.default.OS}).start()}}),panResponderRef.current}().panHandlers:null,{style:[styles.container,animationStyle]}),props.renderType&&props.renderType[type]?props.renderType[type](props):props.renderToast?props.renderToast(props):_react.default.createElement(_TouchableWithoutFeedback.default,{disabled:!_onPress,onPress:function onPress(){return _onPress&&_onPress(id)}},_react.default.createElement(_View.default,{style:[styles.toastContainer,{maxWidth:dims.width/10*9,backgroundColor},style]},icon?_react.default.createElement(_View.default,{style:styles.iconContainer},icon):null,_react.default.isValidElement(message)?message:_react.default.createElement(_Text.default,{style:[styles.message,textStyle]},message))))};_nativewind.NativeWindStyleSheet.create({styles:{container:{width:"100%"},"container@0":{maxWidth:640},"container@1":{maxWidth:768},"container@2":{maxWidth:1024},"container@3":{maxWidth:1280},"container@4":{maxWidth:1536},hidden:{display:"none"}},atRules:{container:[[["media","(min-width: 640px)"]],[["media","(min-width: 768px)"]],[["media","(min-width: 1024px)"]],[["media","(min-width: 1280px)"]],[["media","(min-width: 1536px)"]]]},topics:{container:["width"]}})},"./libs/fromnow/node_modules/react-native-toast-notifications/lib/module/utils/useDimensions.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.useDimensions=function useDimensions(){var _useState=(0,_react.useState)(_Dimensions.default.get("window")),_useState2=(0,_slicedToArray2.default)(_useState,2),dimensions=_useState2[0],setDimensions=_useState2[1],onChange=function onChange(_ref){var window=_ref.window;setDimensions(window)};return(0,_react.useEffect)((function(){var subscription=_Dimensions.default.addEventListener("change",onChange);return function(){"function"==typeof(null==subscription?void 0:subscription.remove)?subscription.remove():_Dimensions.default.removeEventListener("change",onChange)}}),[]),dimensions};var _slicedToArray2=_interopRequireDefault(__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/slicedToArray.js")),_react=__webpack_require__("./node_modules/react/index.js"),_Dimensions=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Dimensions/index.js"))},"./node_modules/react-native-svg-web/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Use=exports.TextPath=exports.Text=exports.TSpan=exports.Symbol=exports.Svg=exports.Stop=exports.Rect=exports.RadialGradient=exports.Polyline=exports.Polygon=exports.Pattern=exports.Path=exports.Mask=exports.Marker=exports.LinearGradient=exports.Line=exports.Image=exports.G=exports.ForeignObject=exports.Ellipse=exports.Defs=exports.ClipPath=exports.Circle=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js")),_createClass2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),_inherits2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js")),React=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),ReactNativeWeb=_interopRequireWildcard(__webpack_require__("./node_modules/react-native-web/dist/index.js")),_propTypes=_interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var createReactElement=ReactNativeWeb.unstable_createElement||React.createElement;function createElement(name,type){var CreateElement=function(_React$Component){function CreateElement(){return(0,_classCallCheck2.default)(this,CreateElement),function _callSuper(t,o,e){return o=(0,_getPrototypeOf2.default)(o),(0,_possibleConstructorReturn2.default)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,_getPrototypeOf2.default)(t).constructor):o.apply(t,e))}(this,CreateElement,arguments)}return(0,_inherits2.default)(CreateElement,_React$Component),(0,_createClass2.default)(CreateElement,[{key:"render",value:function render(){return createReactElement(type,this.props,this.props.children)}}])}(React.Component);return CreateElement.displayName=name,CreateElement.propTypes={children:_propTypes.default.node},CreateElement.defaultProps={children:void 0},CreateElement}var Svg=exports.Svg=createElement("Svg","svg");exports.default=Svg;Svg.Svg=Svg;var Circle=exports.Circle=createElement("Circle","circle");Svg.Circle=Circle;var ClipPath=exports.ClipPath=createElement("ClipPath","clipPath");Svg.ClipPath=ClipPath;var Defs=exports.Defs=createElement("Defs","defs");Svg.Defs=Defs;var Ellipse=exports.Ellipse=createElement("Ellipse","ellipse");Svg.Ellipse=Ellipse;var ForeignObject=exports.ForeignObject=createElement("ForeignObject","foreignObject");Svg.ForeignObject=ForeignObject;var G=exports.G=createElement("G","g");Svg.G=G;var Image=exports.Image=createElement("Image","image");Svg.Image=Image;var Line=exports.Line=createElement("Line","line");Svg.Line=Line;var LinearGradient=exports.LinearGradient=createElement("LinearGradient","linearGradient");Svg.LinearGradient=LinearGradient;var Marker=exports.Marker=createElement("Marker","marker");Svg.Marker=Marker;var Mask=exports.Mask=createElement("Mask","mask");Svg.Mask=Mask;var Path=exports.Path=createElement("Path","path");Svg.Path=Path;var Pattern=exports.Pattern=createElement("Pattern","pattern");Svg.Pattern=Pattern;var Polygon=exports.Polygon=createElement("Polygon","polygon");Svg.Polygon=Polygon;var Polyline=exports.Polyline=createElement("Polyline","polyline");Svg.Polyline=Polyline;var RadialGradient=exports.RadialGradient=createElement("RadialGradient","radialGradient");Svg.RadialGradient=RadialGradient;var Rect=exports.Rect=createElement("Rect","rect");Svg.Rect=Rect;var Stop=exports.Stop=createElement("Stop","stop");Svg.Stop=Stop;var Symbol=exports.Symbol=createElement("Symbol","symbol");Svg.Symbol=Symbol;var Text=exports.Text=createElement("Text","text");Svg.Text=Text;var TextPath=exports.TextPath=createElement("TextPath","textPath");Svg.TextPath=TextPath;var TSpan=exports.TSpan=createElement("TSpan","tspan");Svg.TSpan=TSpan;var Use=exports.Use=createElement("Use","use");Svg.Use=Use}}]);