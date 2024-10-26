(self.webpackChunkFromNowStorybook=self.webpackChunkFromNowStorybook||[]).push([[5466,2590],{"./libs/fromnow/node_modules/zustand/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{create:()=>create,createStore:()=>createStore,default:()=>esm_react,useStore:()=>useStore});const createStoreImpl=createState=>{let state;const listeners=new Set,setState=(partial,replace)=>{const nextState="function"==typeof partial?partial(state):partial;if(!Object.is(nextState,state)){const previousState=state;state=(null!=replace?replace:"object"!=typeof nextState||null===nextState)?nextState:Object.assign({},state,nextState),listeners.forEach((listener=>listener(state,previousState)))}},getState=()=>state,api={setState,getState,getInitialState:()=>initialState,subscribe:listener=>(listeners.add(listener),()=>listeners.delete(listener)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),listeners.clear()}},initialState=state=createState(setState,getState,api);return api},createStore=createState=>createState?createStoreImpl(createState):createStoreImpl;var react=__webpack_require__("./node_modules/react/index.js"),with_selector=__webpack_require__("./libs/fromnow/node_modules/use-sync-external-store/shim/with-selector.js");const{useDebugValue}=react,{useSyncExternalStoreWithSelector}=with_selector;const identity=arg=>arg;function useStore(api,selector=identity,equalityFn){const slice=useSyncExternalStoreWithSelector(api.subscribe,api.getState,api.getServerState||api.getInitialState,selector,equalityFn);return useDebugValue(slice),slice}const createImpl=createState=>{const api="function"==typeof createState?createStore(createState):createState,useBoundStore=(selector,equalityFn)=>useStore(api,selector,equalityFn);return Object.assign(useBoundStore,api),useBoundStore},create=createState=>createState?createImpl(createState):createImpl;var esm_react=createState=>create(createState)},"./src/stories/teamSetting/FriendItem.stories.tsx":(module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Basic=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _FriendItem=_interopRequireDefault(__webpack_require__("./libs/fromnow/src/components/TeamSetting/FriendItem.tsx")),_profile=_interopRequireDefault(__webpack_require__("./src/assets/png/profile.png")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Basic=(exports.default={title:"teamSetting/FriendItem",components:_FriendItem.default,tags:["autodocs"]},exports.Basic=function Basic(args){return(0,_jsxRuntime.jsx)(_FriendItem.default,Object.assign({},args))});Basic.args={memberId:1,profileName:"tata",photoUrl:_profile.default,owner:!1,friend:!1},Basic.argTypes={memberId:{description:"필수"},profileName:{description:"필수"},photoUrl:{description:"필수"},owner:{description:"필수"},friend:{description:"필수"}},module.exports.__namedExportsOrder=["Basic"]},"./libs/fromnow/src/components/TeamSetting/FriendItem.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _nativewind=__webpack_require__("./libs/fromnow/node_modules/nativewind/dist/index.js"),_Text=(_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js"))),_Image=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Image/index.js")),_TouchableOpacity=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_useSelectedTeamStore=_interopRequireDefault(__webpack_require__("./libs/fromnow/src/store/useSelectedTeamStore.ts")),_useUserStore=_interopRequireDefault(__webpack_require__("./libs/fromnow/src/store/useUserStore.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),FriendItem=function FriendItem(props){props.memberId;var profileName=props.profileName,photoUrl=props.photoUrl,owner=props.owner,friend=props.friend,name=((0,_useSelectedTeamStore.default)((function(state){return state.id})),(0,_useUserStore.default)((function(state){return state.name})));return(0,_jsxRuntime.jsxs)(_nativewind.StyledComponent,{className:"h-[60px] flex-row justify-between items-center",component:_View.default,children:[(0,_jsxRuntime.jsxs)(_nativewind.StyledComponent,{className:"flex-row space-x-[8px] items-center",component:_View.default,children:[(0,_jsxRuntime.jsx)(_nativewind.StyledComponent,{source:{uri:photoUrl},className:"w-[48px] h-[48px] rounded-2xl border-[1px] border-black200 justify-center items-center",component:_Image.default}),(0,_jsxRuntime.jsx)(_nativewind.StyledComponent,{className:"text-black900 text-sm font-PTDLight",component:_Text.default,children:profileName})]}),(!owner||name!==profileName)&&(0,_jsxRuntime.jsx)(_nativewind.StyledComponent,{onPress:function updateFriend(){},className:(friend?"bg-white border-[1px] border-black200":"bg-black900")+"\n            h-9 w-[74px] flex justify-center items-center rounded-xl",component:_TouchableOpacity.default,children:(0,_jsxRuntime.jsx)(_nativewind.StyledComponent,{className:(friend?"text-black900":"text-white")+" text-sm font-PTDSemiBold",component:_Text.default,children:friend?"친구":"친구추가"})})]})};exports.default=FriendItem;FriendItem.__docgenInfo={description:"",methods:[],displayName:"FriendItem",props:{memberId:{required:!0,tsType:{name:"number"},description:""},profileName:{required:!0,tsType:{name:"string"},description:""},photoUrl:{required:!0,tsType:{name:"string"},description:""},owner:{required:!0,tsType:{name:"boolean"},description:""},friend:{required:!0,tsType:{name:"boolean"},description:""}}},_nativewind.NativeWindStyleSheet.create({styles:{flex:{display:"flex"},"h-9":{height:36},"h-[48px]":{height:48},"h-[60px]":{height:60},"w-[48px]":{width:48},"w-[74px]":{width:74},"flex-row":{flexDirection:"row"},"items-center":{alignItems:"center"},"justify-center":{justifyContent:"center"},"justify-between":{justifyContent:"space-between"},"rounded-2xl":{borderTopLeftRadius:16,borderTopRightRadius:16,borderBottomRightRadius:16,borderBottomLeftRadius:16},"rounded-xl":{borderTopLeftRadius:12,borderTopRightRadius:12,borderBottomRightRadius:12,borderBottomLeftRadius:12},"border-[1px]":{borderTopWidth:1,borderRightWidth:1,borderBottomWidth:1,borderLeftWidth:1},"border-black200":{borderTopColor:"#F3F3F8",borderRightColor:"#F3F3F8",borderBottomColor:"#F3F3F8",borderLeftColor:"#F3F3F8"},"bg-black900":{backgroundColor:"#1C1C1E"},"bg-white":{backgroundColor:"#fff"},"font-PTDLight":{fontFamily:"Pretendard-Light"},"font-PTDSemiBold":{fontFamily:"Pretendard-SemiBold"},"text-black900":{color:"#1C1C1E"},"text-white":{color:"#fff"},"space-x-[8px].children@0":{marginLeft:8},"text-sm":{fontSize:14,lineHeight:20}},atRules:{"space-x-[8px].children":[[["selector","(> *:not(:first-child))"]]]},childClasses:{"space-x-[8px]":["space-x-[8px].children"]}})},"./libs/fromnow/src/store/useSelectedTeamStore.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _momentModificationRn=_interopRequireDefault(__webpack_require__("./libs/fromnow/node_modules/moment-modification-rn/moment.js")),_zustand=__webpack_require__("./libs/fromnow/node_modules/zustand/esm/index.js"),initial={id:0,title:"",createdAt:"",recivedAt:"",targetDate:(0,_momentModificationRn.default)().format("YYYY-MM-DD")},useSelectedTeamStore=(0,_zustand.create)((function(set){return Object.assign({},initial,{setSelectedTeam:function setSelectedTeam(values){return set((function(prev){return Object.assign({},prev,values)}))}})}));exports.default=useSelectedTeamStore},"./libs/fromnow/src/store/useUserStore.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var useUserStore=(0,__webpack_require__("./libs/fromnow/node_modules/zustand/esm/index.js").create)((function(set){return{name:"",setName:function setName(name){return set({name})},reset:function reset(){return set({name:""})}}}));exports.default=useUserStore},"./src/assets/png/profile.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/profile.16f2a0c7.png"}}]);