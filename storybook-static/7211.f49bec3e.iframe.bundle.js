(self.webpackChunkFromNowStorybook=self.webpackChunkFromNowStorybook||[]).push([[7211],{"./src/stories/profile/ProfileHeader.stories.tsx":(module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Basic=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _ProfileHeader=_interopRequireDefault(__webpack_require__("./libs/fromnow/src/components/Profile/ProfileHeader.tsx")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");exports.default={title:"profile/ProfileHeader",components:_ProfileHeader.default,tags:["autodocs"]},exports.Basic=function Basic(){return(0,_jsxRuntime.jsx)(_ProfileHeader.default,{})};module.exports.__namedExportsOrder=["Basic"]},"./libs/fromnow/src/assets/icons/bell.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgBell(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:24,height:25,fill:"none"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#1C1C1E",d:"M8.352 20.719A4.63 4.63 0 0 0 12 22.477a4.63 4.63 0 0 0 3.648-1.758 27.2 27.2 0 0 1-7.296 0M18.75 9.477v.704c0 .845.24 1.67.692 2.374l1.108 1.723c1.011 1.574.24 3.713-1.52 4.21a25.8 25.8 0 0 1-14.06 0c-1.759-.497-2.53-2.636-1.52-4.21l1.108-1.723a4.4 4.4 0 0 0 .693-2.374v-.704c0-3.866 3.022-7 6.75-7 3.726 0 6.75 3.134 6.75 7"})))}},"./libs/fromnow/src/components/Profile/ProfileHeader.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _nativewind=__webpack_require__("./libs/fromnow/node_modules/nativewind/dist/index.js"),_View=(_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js"))),_Text=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js")),_TouchableOpacity=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js")),_bell=_interopRequireDefault(__webpack_require__("./libs/fromnow/src/assets/icons/bell.svg")),_useNavi2=_interopRequireDefault(__webpack_require__("./libs/fromnow/src/hooks/useNavi.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ProfileHeader=function ProfileHeader(){var navigation=(0,_useNavi2.default)().navigation;return(0,_jsxRuntime.jsxs)(_nativewind.StyledComponent,{className:"px-[8px] bg-white h-[66px] w-full flex flex-row items-center justify-between",component:_View.default,children:[(0,_jsxRuntime.jsx)(_nativewind.StyledComponent,{className:"w-[48px] h-[48px]",component:_View.default}),(0,_jsxRuntime.jsx)(_nativewind.StyledComponent,{className:"text-black900 text-base font-PTDSemiBold",component:_Text.default,children:"내 정보"}),(0,_jsxRuntime.jsx)(_nativewind.StyledComponent,{onPress:function onPress(){return navigation.navigate("Notice")},className:"w-[48px] h-[48px] p-3",component:_TouchableOpacity.default,children:(0,_jsxRuntime.jsx)(_bell.default,{})})]})};exports.default=ProfileHeader;ProfileHeader.__docgenInfo={description:"",methods:[],displayName:"ProfileHeader"},_nativewind.NativeWindStyleSheet.create({styles:{flex:{display:"flex"},"h-[48px]":{height:48},"h-[66px]":{height:66},"w-[48px]":{width:48},"w-full":{width:"100%"},"flex-row":{flexDirection:"row"},"items-center":{alignItems:"center"},"justify-between":{justifyContent:"space-between"},"bg-white":{backgroundColor:"#fff"},"p-3":{paddingTop:12,paddingRight:12,paddingBottom:12,paddingLeft:12},"px-[8px]":{paddingLeft:8,paddingRight:8},"font-PTDSemiBold":{fontFamily:"Pretendard-SemiBold"},"text-black900":{color:"#1C1C1E"},"text-base":{fontSize:16,lineHeight:24}}})},"./libs/fromnow/src/hooks/useNavi.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _native=__webpack_require__("./libs/fromnow/node_modules/@react-navigation/native/lib/module/index.js"),_deviceInfo=__webpack_require__("./libs/fromnow/src/utils/deviceInfo.ts");exports.default=function useNavi(){return{navigation:_deviceInfo.isWeb?void 0:(0,_native.useNavigation)()}}},"./libs/fromnow/src/utils/deviceInfo.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.isWeb=exports.isTablet=exports.isIOS=exports.isAndroid=void 0;var _Dimensions=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Dimensions/index.js")),_Platform=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Platform/index.js")),width=_Dimensions.default.get("window").width;exports.isTablet=width>=768,exports.isIOS="ios"===_Platform.default.OS,exports.isAndroid="android"===_Platform.default.OS,exports.isWeb="web"===_Platform.default.OS}}]);