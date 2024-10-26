(self.webpackChunkFromNowStorybook=self.webpackChunkFromNowStorybook||[]).push([[4695,2590],{"./libs/fromnow/node_modules/is-plain-obj/index.js":module=>{"use strict";module.exports=value=>{if("[object Object]"!==Object.prototype.toString.call(value))return!1;const prototype=Object.getPrototypeOf(value);return null===prototype||prototype===Object.prototype}},"./libs/fromnow/node_modules/merge-options/index.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";const isOptionObject=__webpack_require__("./libs/fromnow/node_modules/is-plain-obj/index.js"),{hasOwnProperty}=Object.prototype,{propertyIsEnumerable}=Object,defineProperty=(object,name,value)=>Object.defineProperty(object,name,{value,writable:!0,enumerable:!0,configurable:!0}),globalThis=this,defaultMergeOptions={concatArrays:!1,ignoreUndefined:!1},getEnumerableOwnPropertyKeys=value=>{const keys=[];for(const key in value)hasOwnProperty.call(value,key)&&keys.push(key);if(Object.getOwnPropertySymbols){const symbols=Object.getOwnPropertySymbols(value);for(const symbol of symbols)propertyIsEnumerable.call(value,symbol)&&keys.push(symbol)}return keys};function clone(value){return Array.isArray(value)?function cloneArray(array){const result=array.slice(0,0);return getEnumerableOwnPropertyKeys(array).forEach((key=>{defineProperty(result,key,clone(array[key]))})),result}(value):isOptionObject(value)?function cloneOptionObject(object){const result=null===Object.getPrototypeOf(object)?Object.create(null):{};return getEnumerableOwnPropertyKeys(object).forEach((key=>{defineProperty(result,key,clone(object[key]))})),result}(value):value}const mergeKeys=(merged,source,keys,config)=>(keys.forEach((key=>{void 0===source[key]&&config.ignoreUndefined||(key in merged&&merged[key]!==Object.getPrototypeOf(merged)?defineProperty(merged,key,merge(merged[key],source[key],config)):defineProperty(merged,key,clone(source[key])))})),merged),concatArrays=(merged,source,config)=>{let result=merged.slice(0,0),resultIndex=0;return[merged,source].forEach((array=>{const indices=[];for(let k=0;k<array.length;k++)hasOwnProperty.call(array,k)&&(indices.push(String(k)),defineProperty(result,resultIndex++,array===merged?array[k]:clone(array[k])));result=mergeKeys(result,array,getEnumerableOwnPropertyKeys(array).filter((key=>!indices.includes(key))),config)})),result};function merge(merged,source,config){return config.concatArrays&&Array.isArray(merged)&&Array.isArray(source)?concatArrays(merged,source,config):isOptionObject(source)&&isOptionObject(merged)?mergeKeys(merged,source,getEnumerableOwnPropertyKeys(source),config):clone(source)}module.exports=function(...options){const config=merge(clone(defaultMergeOptions),this!==globalThis&&this||{},defaultMergeOptions);let merged={_:{}};for(const option of options)if(void 0!==option){if(!isOptionObject(option))throw new TypeError("`"+option+"` is not an Option Object");merged=merge(merged,{_:option},config)}return merged._}},"./src/stories/notice/NoticeItem.stories.tsx":(module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Basic=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _NoticeItem=_interopRequireDefault(__webpack_require__("./libs/fromnow/src/components/Notify/NoticeItem.tsx")),_profile=_interopRequireDefault(__webpack_require__("./src/assets/png/profile.png")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Basic=(exports.default={title:"notice/NoticeItem",components:_NoticeItem.default,tags:["autodocs"]},exports.Basic=function Basic(args){return(0,_jsxRuntime.jsx)(_NoticeItem.default,Object.assign({},args))});Basic.args={id:1,imgUrl:_profile.default,path:"",content:"출근실어님이 프롬나우 모임에 당신을 초대 했어요.",setNoticeList:function setNoticeList(){}},Basic.argTypes={id:{description:"필수"},imgUrl:{description:"필수"},path:{description:"필수"},content:{description:"필수"},setNoticeList:{description:"(필수) Dispatch<SetStateAction<Notice[]>>"}},module.exports.__namedExportsOrder=["Basic"]},"./libs/fromnow/node_modules/@react-native-async-storage/async-storage/lib/module/AsyncStorage.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var merge=_interopRequireDefault(__webpack_require__("./libs/fromnow/node_modules/merge-options/index.js")).default.bind({concatArrays:!0,ignoreUndefined:!0});function createPromise(getValue,callback){return new Promise((function(resolve,reject){try{var value=getValue();null==callback||callback(null,value),resolve(value)}catch(err){null==callback||callback(err),reject(err)}}))}function createPromiseAll(promises,callback,processResult){return Promise.all(promises).then((function(result){var _ref,value=null!=(_ref=null==processResult?void 0:processResult(result))?_ref:null;return null==callback||callback(null,value),Promise.resolve(value)}),(function(errors){return null==callback||callback(errors),Promise.reject(errors)}))}var AsyncStorage={getItem:function getItem(key,callback){return createPromise((function(){return window.localStorage.getItem(key)}),callback)},setItem:function setItem(key,value,callback){return createPromise((function(){return window.localStorage.setItem(key,value)}),callback)},removeItem:function removeItem(key,callback){return createPromise((function(){return window.localStorage.removeItem(key)}),callback)},mergeItem:function mergeItem(key,value,callback){return createPromise((function(){return function mergeLocalStorageItem(key,value){var oldValue=window.localStorage.getItem(key);if(oldValue){var oldObject=JSON.parse(oldValue),newObject=JSON.parse(value),nextValue=JSON.stringify(merge(oldObject,newObject));window.localStorage.setItem(key,nextValue)}else window.localStorage.setItem(key,value)}(key,value)}),callback)},clear:function clear(callback){return createPromise((function(){return window.localStorage.clear()}),callback)},getAllKeys:function getAllKeys(callback){return createPromise((function(){for(var numberOfKeys=window.localStorage.length,keys=[],i=0;i<numberOfKeys;i+=1){var key=window.localStorage.key(i)||"";keys.push(key)}return keys}),callback)},flushGetRequests:function flushGetRequests(){},multiGet:function multiGet(keys,callback){return createPromiseAll(keys.map((function(key){return AsyncStorage.getItem(key)})),callback,(function processResult(result){return result.map((function(value,i){return[keys[i],value]}))}))},multiSet:function multiSet(keyValuePairs,callback){return createPromiseAll(keyValuePairs.map((function(item){return AsyncStorage.setItem(item[0],item[1])})),callback)},multiRemove:function multiRemove(keys,callback){return createPromiseAll(keys.map((function(key){return AsyncStorage.removeItem(key)})),callback)},multiMerge:function multiMerge(keyValuePairs,callback){return createPromiseAll(keyValuePairs.map((function(item){return AsyncStorage.mergeItem(item[0],item[1])})),callback)}};exports.default=AsyncStorage},"./libs/fromnow/node_modules/@react-native-async-storage/async-storage/lib/module/hooks.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.useAsyncStorage=function useAsyncStorage(key){return{getItem:function getItem(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _AsyncStorage.default.getItem.apply(_AsyncStorage.default,[key].concat(args))},setItem:function setItem(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];return _AsyncStorage.default.setItem.apply(_AsyncStorage.default,[key].concat(args))},mergeItem:function mergeItem(){for(var _len3=arguments.length,args=new Array(_len3),_key3=0;_key3<_len3;_key3++)args[_key3]=arguments[_key3];return _AsyncStorage.default.mergeItem.apply(_AsyncStorage.default,[key].concat(args))},removeItem:function removeItem(){for(var _len4=arguments.length,args=new Array(_len4),_key4=0;_key4<_len4;_key4++)args[_key4]=arguments[_key4];return _AsyncStorage.default.removeItem.apply(_AsyncStorage.default,[key].concat(args))}}};var _AsyncStorage=_interopRequireDefault(__webpack_require__("./libs/fromnow/node_modules/@react-native-async-storage/async-storage/lib/module/AsyncStorage.js"))},"./libs/fromnow/node_modules/@react-native-async-storage/async-storage/lib/module/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,Object.defineProperty(exports,"useAsyncStorage",{enumerable:!0,get:function get(){return _hooks.useAsyncStorage}});var _AsyncStorage=_interopRequireDefault(__webpack_require__("./libs/fromnow/node_modules/@react-native-async-storage/async-storage/lib/module/AsyncStorage.js")),_hooks=__webpack_require__("./libs/fromnow/node_modules/@react-native-async-storage/async-storage/lib/module/hooks.js");exports.default=_AsyncStorage.default},"./libs/fromnow/src/components/Notify/NoticeItem.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _asyncToGenerator2=_interopRequireDefault(__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/asyncToGenerator.js")),_nativewind=__webpack_require__("./libs/fromnow/node_modules/nativewind/dist/index.js"),_View=(_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js"))),_Text=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js")),_Image=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Image/index.js")),_thumbnail=_interopRequireDefault(__webpack_require__("./libs/fromnow/src/assets/png/thumbnail.png")),_pathHandler=__webpack_require__("./libs/fromnow/src/utils/pathHandler.ts"),_storage=__webpack_require__("./libs/fromnow/src/utils/storage.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),NoticeItem=function NoticeItem(props){var _ref,id=props.id,imgUrl=props.imgUrl,path=props.path,content=props.content,setNoticeList=props.setNoticeList,clickNotice=(_ref=(0,_asyncToGenerator2.default)((function*(){var noticeStorage=JSON.parse(yield(0,_storage.getStorage)("notice"))||[];noticeStorage=noticeStorage.filter((function(item){return item.id!==id})),yield(0,_storage.setStorage)("notice",JSON.stringify(noticeStorage)),setNoticeList(noticeStorage),(0,_pathHandler.navigateByPath)(path)})),function clickNotice(){return _ref.apply(this,arguments)});return(0,_jsxRuntime.jsxs)(_nativewind.StyledComponent,{onTouchEnd:clickNotice,className:"px-4 h-[60px] flex flex-row items-center space-x-[8px]",component:_View.default,children:[(0,_jsxRuntime.jsx)(_nativewind.StyledComponent,{className:"w-[36px] h-[36px] rounded-xl border-[1px] border-black200",component:_View.default,children:(0,_jsxRuntime.jsx)(_nativewind.StyledComponent,{source:imgUrl?{uri:imgUrl}:_thumbnail.default,className:"w-[36px] h-[36px] rounded-xl",resizeMode:"cover",component:_Image.default})}),(0,_jsxRuntime.jsx)(_nativewind.StyledComponent,{className:"text-black900 font-PTDLight text-sm",component:_Text.default,children:content})]})};exports.default=NoticeItem;NoticeItem.__docgenInfo={description:"",methods:[],displayName:"NoticeItem",props:{id:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},imgUrl:{required:!0,tsType:{name:"string"},description:""},path:{required:!0,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"string"},description:""},setNoticeList:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Array",elements:[{name:"Notice"}],raw:"Notice[]"}],raw:"SetStateAction<Notice[]>"}],raw:"Dispatch<SetStateAction<Notice[]>>"},description:""}}},_nativewind.NativeWindStyleSheet.create({styles:{flex:{display:"flex"},"h-[36px]":{height:36},"h-[60px]":{height:60},"w-[36px]":{width:36},"flex-row":{flexDirection:"row"},"items-center":{alignItems:"center"},"rounded-xl":{borderTopLeftRadius:12,borderTopRightRadius:12,borderBottomRightRadius:12,borderBottomLeftRadius:12},"border-[1px]":{borderTopWidth:1,borderRightWidth:1,borderBottomWidth:1,borderLeftWidth:1},"border-black200":{borderTopColor:"#F3F3F8",borderRightColor:"#F3F3F8",borderBottomColor:"#F3F3F8",borderLeftColor:"#F3F3F8"},"px-4":{paddingLeft:16,paddingRight:16},"font-PTDLight":{fontFamily:"Pretendard-Light"},"font-PTDSemiBold":{fontFamily:"Pretendard-SemiBold"},"text-black900":{color:"#1C1C1E"},"space-x-[8px].children@0":{marginLeft:8},"text-sm":{fontSize:14,lineHeight:20}},atRules:{"space-x-[8px].children":[[["selector","(> *:not(:first-child))"]]]},childClasses:{"space-x-[8px]":["space-x-[8px].children"]}})},"./libs/fromnow/src/utils/pathHandler.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.navigateByPath=exports.deepLinkByPath=void 0;var _asyncToGenerator2=_interopRequireDefault(__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/asyncToGenerator.js")),_slicedToArray2=_interopRequireDefault(__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/slicedToArray.js")),RootNavi=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./libs/fromnow/src/utils/rootNavigation.ts")),_Linking=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Linking/index.js"));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var _ref,parseQueryParams=function parseQueryParams(query){var isDeepLink=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return query?query.split("&").reduce((function(acc,param){var _param$split=param.split("="),_param$split2=(0,_slicedToArray2.default)(_param$split,2),key=_param$split2[0],value=_param$split2[1];if(key&&value){var decodedValue=decodeURIComponent(value);isDeepLink?acc+=`/${decodedValue}`:acc[key]=decodedValue}return acc}),isDeepLink?"":{}):isDeepLink?"":{}};exports.navigateByPath=function navigateByPath(url){if(url){var _url$split=url.split("?"),_url$split2=(0,_slicedToArray2.default)(_url$split,2),path=_url$split2[0],query=_url$split2[1],paramsObj=parseQueryParams(query);RootNavi.navigate(path,paramsObj)}},exports.deepLinkByPath=(_ref=(0,_asyncToGenerator2.default)((function*(url){if(url){var _url$split3=url.split("?"),_url$split4=(0,_slicedToArray2.default)(_url$split3,2),path=_url$split4[0],query=_url$split4[1],newPath=path.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),params=parseQueryParams(query,!0);yield _Linking.default.openURL(`fromnow://${newPath}${params}`)}})),function deepLinkByPath(_x){return _ref.apply(this,arguments)})},"./libs/fromnow/src/utils/rootNavigation.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.navigate=function navigate(name,params){navigationRef.isReady()&&navigationRef.navigate(name,params)},exports.navigationRef=void 0;var _native=__webpack_require__("./libs/fromnow/node_modules/@react-navigation/native/lib/module/index.js"),navigationRef=exports.navigationRef=(0,_native.createNavigationContainerRef)()},"./libs/fromnow/src/utils/storage.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.setStorage=exports.removeStorageAll=exports.removeStorage=exports.getStorage=void 0;var _ref,_ref2,_ref3,_ref4,_asyncToGenerator2=_interopRequireDefault(__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/asyncToGenerator.js")),_asyncStorage=_interopRequireDefault(__webpack_require__("./libs/fromnow/node_modules/@react-native-async-storage/async-storage/lib/module/index.js"));exports.setStorage=(_ref=(0,_asyncToGenerator2.default)((function*(key,value){try{yield _asyncStorage.default.setItem(key,value)}catch(error){console.error("Error saving Storage:",error)}})),function setStorage(_x,_x2){return _ref.apply(this,arguments)}),exports.getStorage=(_ref2=(0,_asyncToGenerator2.default)((function*(key){try{return yield _asyncStorage.default.getItem(key)}catch(error){console.error("Error retrieving Storage:",error)}})),function getStorage(_x3){return _ref2.apply(this,arguments)}),exports.removeStorage=(_ref3=(0,_asyncToGenerator2.default)((function*(key){try{yield _asyncStorage.default.removeItem(key)}catch(error){console.error("Error removing Storage:",error)}})),function removeStorage(_x4){return _ref3.apply(this,arguments)}),exports.removeStorageAll=(_ref4=(0,_asyncToGenerator2.default)((function*(){try{yield _asyncStorage.default.clear()}catch(error){console.error("Error clear Storage:",error)}})),function removeStorageAll(){return _ref4.apply(this,arguments)})},"./libs/fromnow/src/assets/png/thumbnail.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/thumbnail.fafd4f1f.png"},"./src/assets/png/profile.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/profile.16f2a0c7.png"}}]);