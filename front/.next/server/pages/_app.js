module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\code\\primary\\\uC81C\uB85C\uCD08\\react-node-bird\\front\\pages\\_app.js";




 // 페이지들의 공통된 부분 담당




const NodeBird = ({
  Component
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("meta", {
        charset: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("title", {
        children: "NodeBird"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

NodeBird.propType = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(NodeBird));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Next.js 서버사이드렌더링을 위한 것




const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
  index: (state = {}, action) => {
    // Next.js 서버사이드렌더링을 위한 것
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        console.log("HYDRATE", action);
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_1__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, REMOVE_IMAGE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePosts: true,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null
}; // initialState.mainPosts = initialState.mainPosts.concat(generateDummyPost(10))

const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";
const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
const REMOVE_IMAGE = 'REMOVE_IMAGE';
const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";
const addPost = data => {
  return {
    type: ADD_POST_REQUEST,
    data
  };
};
const addComment = data => {
  return {
    type: ADD_COMMENT_REQUEST,
    data
  };
};

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {
  switch (action.type) {
    case REMOVE_IMAGE:
      draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
      break;

    case UPLOAD_IMAGES_REQUEST:
      draft.uploadImagesLoading = true;
      draft.uploadImagesDone = false;
      draft.uploadImagesError = null;
      break;

    case UPLOAD_IMAGES_SUCCESS:
      {
        draft.imagePaths = action.data;
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;
      }

    case UPLOAD_IMAGES_FAILURE:
      draft.uploadImagesLoading = false;
      draft.uploadImagesError = action.error;
      break;

    case LIKE_POST_REQUEST:
      draft.likePostLoading = true;
      draft.likePostDone = false;
      draft.likePostError = null;
      break;

    case LIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers.push({
          id: action.data.UserId
        });
        draft.likePostLoading = false;
        draft.likePostDone = true;
        break;
      }

    case LIKE_POST_FAILURE:
      draft.likePostLoading = false;
      draft.likePostError = action.error;
      break;

    case UNLIKE_POST_REQUEST:
      draft.unlikePostLoading = true;
      draft.unlikePostDone = false;
      draft.unlikePostError = null;
      break;

    case UNLIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
        draft.unlikePostLoading = false;
        draft.unlikePostDone = true;
        break;
      }

    case UNLIKE_POST_FAILURE:
      draft.unlikePostLoading = false;
      draft.unlikePostError = action.error;
      break;

    case LOAD_POSTS_REQUEST:
      draft.loadPostsLoading = true;
      draft.loadPostsDone = false;
      draft.loadPostsError = null;
      break;

    case LOAD_POSTS_SUCCESS:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      draft.mainPosts = action.data.concat(draft.mainPosts);
      draft.hasMorePosts = draft.mainPosts.length < 50;
      break;

    case LOAD_POSTS_FAILURE:
      draft.loadPostsLoading = false;
      draft.loadPostsError = action.error;
      break;

    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone = false;
      draft.addPostError = null;
      break;

    case ADD_POST_SUCCESS:
      draft.addPostLoading = false;
      draft.addPostDone = true;
      draft.mainPosts.unshift(action.data);
      draft.imagePaths = [];
      break;

    case ADD_POST_FAILURE:
      draft.addPostLoading = false;
      draft.addPostError = action.error;
      break;

    case REMOVE_POST_REQUEST:
      draft.removePostLoading = true;
      draft.removePostDone = false;
      draft.removePostError = null;
      break;

    case REMOVE_POST_SUCCESS:
      draft.removePostLoading = false;
      draft.removePostDone = true;
      draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId);
      break;

    case REMOVE_POST_FAILURE:
      draft.removePostLoading = false;
      draft.removePostError = action.error;
      break;

    case ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      draft.addCommentDone = false;
      draft.addCommentError = null;
      break;

    case ADD_COMMENT_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Comments.unshift(action.data);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      }

    case ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false;
      draft.addCommentError = action.error;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, LOAD_MYINFO_REQUEST, LOAD_MYINFO_SUCCESS, LOAD_MYINFO_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_REQUEST", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_SUCCESS", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_FAILURE", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_REQUEST", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_SUCCESS", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_FAILURE", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MYINFO_REQUEST", function() { return LOAD_MYINFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MYINFO_SUCCESS", function() { return LOAD_MYINFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MYINFO_FAILURE", function() { return LOAD_MYINFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  loadFollowersLoading: false,
  // 유저 정보 가져오기
  loadFollowersDone: false,
  loadFollowersError: null,
  loadFollowersLoading: false,
  // 유저 정보 가져오기
  loadFollowersDone: false,
  loadFollowersError: null,
  loadFollowingsLoading: false,
  // 유저 정보 가져오기
  loadFollowingsDone: false,
  loadFollowingsError: null,
  followLoading: false,
  // 로그인 시도중
  followDone: false,
  followError: null,
  unfollowLoading: false,
  // 로그인 시도중
  unfollowDone: false,
  unfollowError: null,
  logInLoading: false,
  // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  // 닉네임 변경 시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  removeFollowerLoading: false,
  // 유저 정보 가져오기
  removeFollowerDone: false,
  removeFollowerError: null,
  removeFollowingLoading: false,
  // 유저 정보 가져오기
  removeFollowingDone: false,
  removeFollowingError: null,
  me: null,
  signUpData: {},
  loginData: {}
};
const REMOVE_FOLLOWER_REQUEST = "REMOVE_FOLLOWER_REQUEST";
const REMOVE_FOLLOWER_SUCCESS = "REMOVE_FOLLOWER_SUCCESS";
const REMOVE_FOLLOWER_FAILURE = "REMOVE_FOLLOWER_FAILURE"; // export const REMOVE_FOLLOWING_REQUEST = "REMOVE_FOLLOWER_REQUEST";
// export const REMOVE_FOLLOWING_SUCCESS = "REMOVE_FOLLOWER_SUCCESS";
// export const REMOVE_FOLLOWING_FAILURE = "REMOVE_FOLLOWER_FAILURE";
// export const LOAD_FOLLOWERS_REQUEST = "LOAD_FOLLOWERS_REQUEST";
// export const LOAD_FOLLOWERS_SUCCESS = "LOAD_FOLLOWERS_SUCCESS";
// export const LOAD_FOLLOWERS_FAILURE = "LOAD_FOLLOWERS_FAILURE";

const LOAD_FOLLOWERS_REQUEST = "LOAD_FOLLOWERS_REQUEST";
const LOAD_FOLLOWERS_SUCCESS = "LOAD_FOLLOWERS_SUCCESS";
const LOAD_FOLLOWERS_FAILURE = "LOAD_FOLLOWERS_FAILURE";
const LOAD_FOLLOWINGS_REQUEST = "LOAD_FOLLOWINGS_REQUEST";
const LOAD_FOLLOWINGS_SUCCESS = "LOAD_FOLLOWINGS_SUCCESS";
const LOAD_FOLLOWINGS_FAILURE = "LOAD_FOLLOWINGS_FAILURE";
const LOAD_MYINFO_REQUEST = "LOAD_MYINFO_REQUEST";
const LOAD_MYINFO_SUCCESS = "LOAD_MYINFO_SUCCESS";
const LOAD_MYINFO_FAILURE = "LOAD_MYINFO_FAILURE";
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";
const FOLLOW_REQUEST = "FOLLOW_REQUEST";
const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
const FOLLOW_FAILURE = "FOLLOW_FAILURE";
const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
const loginRequestAction = data => {
  return {
    type: LOG_IN_REQUEST,
    data
  };
};
const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST
  };
};

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case REMOVE_FOLLOWER_REQUEST:
        draft.removeFollowerLoading = true;
        draft.removeFollowerDone = null;
        draft.removeFollowerError = false;
        break;

      case REMOVE_FOLLOWER_SUCCESS:
        draft.removeFollowerLoading = false;
        draft.removeFollowerDone = true;
        draft.me.Followers = draft.me.Followers.filter(v => v.id !== action.data.UserId);
        break;

      case REMOVE_FOLLOWER_FAILURE:
        draft.removeFollowerLoading = false;
        draft.removeFollowerError = action.error;
        break;

      case LOAD_FOLLOWERS_REQUEST:
        draft.loadFollowersLoading = true;
        draft.loadFollowersDone = null;
        draft.loadFollowersError = false;
        break;

      case LOAD_FOLLOWERS_SUCCESS:
        draft.loadFollowersLoading = false;
        draft.loadFollowersDone = true;
        draft.me.Followers = action.data;
        break;

      case LOAD_FOLLOWERS_FAILURE:
        draft.loadFollowersLoading = false;
        draft.loadFollowersError = action.error;
        break;

      case LOAD_FOLLOWERS_REQUEST:
        draft.loadFollowersLoading = true;
        draft.loadFollowersDone = null;
        draft.loadFollowersError = false;
        break;

      case LOAD_FOLLOWERS_SUCCESS:
        draft.loadFollowersLoading = false;
        draft.loadFollowersDone = true;
        draft.me.Followers = action.data;
        break;

      case LOAD_FOLLOWERS_FAILURE:
        draft.loadFollowersLoading = false;
        draft.loadFollowersError = action.error;
        break;

      case LOAD_FOLLOWINGS_REQUEST:
        draft.loadFollowingsLoading = true;
        draft.loadFollowingsDone = null;
        draft.loadFollowingsError = false;
        break;

      case LOAD_FOLLOWINGS_SUCCESS:
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsDone = true;
        draft.me.Followings = action.data;
        break;

      case LOAD_FOLLOWINGS_FAILURE:
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsError = action.error;
        break;

      case LOAD_MYINFO_REQUEST:
        draft.loadUserLoading = true;
        draft.loadUserDone = null;
        draft.loadUserError = false;
        break;

      case LOAD_MYINFO_SUCCESS:
        draft.loadUserLoading = false;
        draft.loadUserDone = true;
        draft.me = action.data;
        break;

      case LOAD_MYINFO_FAILURE:
        draft.loadUserLoading = false;
        draft.loadUserError = action.error;
        break;

      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followError = null;
        draft.followDone = false;
        break;

      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.followDone = true;
        draft.me.Followings.push({
          id: action.data.UserId
        });
        break;

      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        break;

      case UNFOLLOW_REQUEST:
        draft.unfollowLoading = true;
        draft.unfollowError = null;
        draft.unfollowDone = false;
        break;

      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.unfollowDone = true;
        draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data.UserId);
        break;

      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;

      case LOG_IN_REQUEST:
        console.log('reducer login');
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = action.data;
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = false;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.logOutError = action.error;
        break;

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpError = null;
        draft.signUpDone = false;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;

      case CHANGE_NICKNAME_SUCCESS:
        draft.me.nickname = action.data.nickname;
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        draft.changeNicknameError = action.error;
        break;

      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = "http://localhost:3065";
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");






function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/post/${data}/like`);
}

function* likePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(likePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}/like`);
}

function* unlikePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unlikePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function loadPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/posts', data);
}

function* loadPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_FAILURE"],
      data: err.response.data
    });
  }
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post', data);
}

function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
      data: result.data.id
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}`);
}

function* removePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/images`, data);
}

function* uploadImages(action) {
  try {
    console.log(action.data, "action.data");
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(uploadImagesAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_FAILURE"],
      data: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    console.log(action.data, "action.data");
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_REQUEST"], uploadImages);
}

function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_REQUEST"], likePost);
}

function* watchUnlikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_REQUEST"], unlikePost);
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"], addComment);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_REQUEST"], removePost);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




function changeNicknameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch('/user/nickname', {
    nickname: data
  });
}

function* changeNickname(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(changeNicknameAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_FAILURE"],
      error: err.response.data
    });
  }
}

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user', data);
}

function* signUp(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);
    console.log(result, "회원가입 요청 성공 RES");
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/user/${data}/follow`);
}

function* follow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(followAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      error: err.reponse.data
    });
  }
}

function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);
}

function unfollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/user/${data}/follow`);
}

function* unfollow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unfollowAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      error: err.reponse.data
    });
  }
}

function loadFollowersAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/followers');
}

function* loadFollowers(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadFollowersAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_FAILURE"],
      error: err.response.data
    });
  }
}

function removeFollowerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/user/follower/${data}`);
}

function* removeFollower(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removeFollowerAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_FAILURE"],
      error: err.response.data
    });
  }
}

function loadFollowingsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/followings');
}

function* loadFollowings(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadFollowingsAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadUserAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user');
}

function* loadUser(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MYINFO_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MYINFO_FAILURE"],
      error: err.response.data
    });
  }
}

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/login', data);
}

function* logIn(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/logout');
}

function* logOut() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.reponse.data
    });
  }
}

function* watchRemoveFollower() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_REQUEST"], removeFollower);
}

function* watchLoadFollowers() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_REQUEST"], loadFollowers);
}

function* watchLoadFollowings() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_REQUEST"], loadFollowings);
}

function* watchChangeNickname() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_REQUEST"], changeNickname);
}

function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MYINFO_REQUEST"], loadUser);
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}

function* watchLogin() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redux-saga/core */ "@redux-saga/core");
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");







const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = _redux_saga_core__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]); // react-saga의 경우 추가 세팅

  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@redux-saga/core":
/*!***********************************!*\
  !*** external "@redux-saga/core" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@redux-saga/core");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZWR1eC1zYWdhL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZha2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiJdLCJuYW1lcyI6WyJOb2RlQmlyZCIsIkNvbXBvbmVudCIsInByb3BUeXBlIiwiUHJvcFR5cGUiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0cyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwibGlrZVBvc3RMb2FkaW5nIiwibGlrZVBvc3REb25lIiwibGlrZVBvc3RFcnJvciIsInVubGlrZVBvc3RMb2FkaW5nIiwidW5saWtlUG9zdERvbmUiLCJ1bmxpa2VQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInVwbG9hZEltYWdlc0xvYWRpbmciLCJ1cGxvYWRJbWFnZXNEb25lIiwidXBsb2FkSW1hZ2VzRXJyb3IiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJSRU1PVkVfSU1BR0UiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsImFkZENvbW1lbnQiLCJyZWR1Y2VyIiwicHJvZHVjZSIsImRyYWZ0IiwiZmlsdGVyIiwidiIsImkiLCJlcnJvciIsImZpbmQiLCJpZCIsIlBvc3RJZCIsIkxpa2VycyIsInB1c2giLCJVc2VySWQiLCJjb25jYXQiLCJsZW5ndGgiLCJ1bnNoaWZ0IiwiQ29tbWVudHMiLCJsb2FkRm9sbG93ZXJzTG9hZGluZyIsImxvYWRGb2xsb3dlcnNEb25lIiwibG9hZEZvbGxvd2Vyc0Vycm9yIiwibG9hZEZvbGxvd2luZ3NMb2FkaW5nIiwibG9hZEZvbGxvd2luZ3NEb25lIiwibG9hZEZvbGxvd2luZ3NFcnJvciIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJ1bmZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0RvbmUiLCJ1bmZvbGxvd0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsInJlbW92ZUZvbGxvd2VyTG9hZGluZyIsInJlbW92ZUZvbGxvd2VyRG9uZSIsInJlbW92ZUZvbGxvd2VyRXJyb3IiLCJyZW1vdmVGb2xsb3dpbmdMb2FkaW5nIiwicmVtb3ZlRm9sbG93aW5nRG9uZSIsInJlbW92ZUZvbGxvd2luZ0Vycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QiLCJSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyIsIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFIiwiTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCIsIkxPQURfRk9MTE9XRVJTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0VSU19GQUlMVVJFIiwiTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyIsIkxPQURfRk9MTE9XSU5HU19GQUlMVVJFIiwiTE9BRF9NWUlORk9fUkVRVUVTVCIsIkxPQURfTVlJTkZPX1NVQ0NFU1MiLCJMT0FEX01ZSU5GT19GQUlMVVJFIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJGb2xsb3dlcnMiLCJGb2xsb3dpbmdzIiwibG9hZFVzZXJMb2FkaW5nIiwibG9hZFVzZXJEb25lIiwibG9hZFVzZXJFcnJvciIsIm5pY2tuYW1lIiwiUG9zdHMiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInBvc3RTYWdhIiwidXNlclNhZ2EiLCJsaWtlUG9zdEFQSSIsInBhdGNoIiwibGlrZVBvc3QiLCJyZXN1bHQiLCJjYWxsIiwicHV0IiwiZXJyIiwicmVzcG9uc2UiLCJ1bmxpa2VQb3N0QVBJIiwiZGVsZXRlIiwidW5saWtlUG9zdCIsImxvYWRQb3N0c0FQSSIsImdldCIsImxvYWRQb3N0cyIsImFkZFBvc3RBUEkiLCJyZW1vdmVQb3N0QVBJIiwicmVtb3ZlUG9zdCIsInVwbG9hZEltYWdlc0FQSSIsInVwbG9hZEltYWdlcyIsImFkZENvbW1lbnRBUEkiLCJwb3N0SWQiLCJ3YXRjaFVwbG9hZEltYWdlcyIsInRocm90dGxlIiwid2F0Y2hMaWtlUG9zdCIsIndhdGNoVW5saWtlUG9zdCIsIndhdGNoTG9hZFBvc3RzIiwid2F0Y2hBZGRQb3N0IiwidGFrZUxhdGVzdCIsIndhdGNoQWRkQ29tbWVudCIsIndhdGNoUmVtb3ZlUG9zdCIsImNoYW5nZU5pY2tuYW1lQVBJIiwiY2hhbmdlTmlja25hbWUiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJmb2xsb3dBUEkiLCJmb2xsb3ciLCJyZXBvbnNlIiwid2F0Y2hVbmZvbGxvdyIsInVuZm9sbG93IiwidW5mb2xsb3dBUEkiLCJsb2FkRm9sbG93ZXJzQVBJIiwibG9hZEZvbGxvd2VycyIsInJlbW92ZUZvbGxvd2VyQVBJIiwicmVtb3ZlRm9sbG93ZXIiLCJsb2FkRm9sbG93aW5nc0FQSSIsImxvYWRGb2xsb3dpbmdzIiwibG9hZFVzZXJBUEkiLCJsb2FkVXNlciIsImxvZ0luQVBJIiwibG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJ3YXRjaFJlbW92ZUZvbGxvd2VyIiwid2F0Y2hMb2FkRm9sbG93ZXJzIiwid2F0Y2hMb2FkRm9sbG93aW5ncyIsIndhdGNoQ2hhbmdlTmlja25hbWUiLCJ3YXRjaExvYWRVc2VyIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaExvZ2luIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaFNpZ25VcCIsImxvZ2dlck1pZGRsZXdhcmUiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibmV4dCIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtDQUlBOzs7OztBQUNBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFtQjtBQUNoQyxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0k7QUFBTSxlQUFPLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1C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Ozs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGUgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcclxuXHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuXHJcbi8vIO2OmOydtOyngOuTpOydmCDqs7XthrXrkJwg67aA67aEIOuLtOuLuVxyXG5jb25zdCBOb2RlQmlyZCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Ob2RlQmlyZDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPENvbXBvbmVudCAvPlxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufTtcclxuXHJcbk5vZGVCaXJkLnByb3BUeXBlID0ge1xyXG4gICAgQ29tcG9uZW50OiBQcm9wVHlwZS5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTm9kZUJpcmQpOyIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbi8vIE5leHQuanMg7ISc67KE7IKs7J2065Oc66CM642U66eB7J2EIOychO2VnCDqsoNcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0JztcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBpbmRleDogKHN0YXRlID0ge30sIGFjdGlvbikgPT4geyAvLyBOZXh0LmpzIOyEnOuyhOyCrOydtOuTnOugjOuNlOungeydhCDsnITtlZwg6rKDXHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSFlEUkFURVwiLCBhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH0gICAgICAgIFxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVzZXIsXHJcbiAgICBwb3N0XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjsiLCJpbXBvcnQgc2hvcnRpZCwgeyBnZW5lcmF0ZSB9IGZyb20gXCJzaG9ydGlkXCI7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6IFtdLCAgICAgICAgXHJcbiAgICBpbWFnZVBhdGhzOiBbXSxcclxuXHJcbiAgICBoYXNNb3JlUG9zdHM6IHRydWUsXHJcbiAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgICBcclxuICAgIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuXHJcbiAgICBsaWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgbGlrZVBvc3REb25lOiBmYWxzZSxcclxuICAgIGxpa2VQb3N0RXJyb3I6IG51bGwsXHJcblxyXG4gICAgdW5saWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgdW5saWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgdW5saWtlUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICAgIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcblxyXG4gICAgdXBsb2FkSW1hZ2VzTG9hZGluZzogZmFsc2UsXHJcbiAgICB1cGxvYWRJbWFnZXNEb25lOiBmYWxzZSxcclxuICAgIHVwbG9hZEltYWdlc0Vycm9yOiBudWxsLFxyXG59XHJcblxyXG4vLyBpbml0aWFsU3RhdGUubWFpblBvc3RzID0gaW5pdGlhbFN0YXRlLm1haW5Qb3N0cy5jb25jYXQoZ2VuZXJhdGVEdW1teVBvc3QoMTApKVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9ICdMSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9ICdMSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9ICdMSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9ICdVTkxJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSAnVU5MSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gJ1VOTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gJ0xPQURfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gXCJBRERfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gXCJBRERfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gJ1VQTE9BRF9JTUFHRVNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1NVQ0NFU1MgPSAnVVBMT0FEX0lNQUdFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA9ICdVUExPQURfSU1BR0VTX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gJ1JFTU9WRV9JTUFHRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwiUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9IFwiUkVNT1ZFX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9DT01NRU5UX0ZBSUxVUkVcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfSAgICBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgICAgICBkYXRhXHJcbiAgICB9ICAgIFxyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFJFTU9WRV9JTUFHRTpcclxuICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGRyYWZ0LmltYWdlUGF0aHMuZmlsdGVyKCh2LCBpKSA9PiBpICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICBwb3N0Lkxpa2Vycy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KVxyXG4gICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFVOTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgcG9zdC5MaWtlcnMgPSBwb3N0Lkxpa2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gYWN0aW9uLmRhdGEuY29uY2F0KGRyYWZ0Lm1haW5Qb3N0cyk7XHJcbiAgICAgICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPCA1MDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhazsgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBcclxuICAgIGxvYWRGb2xsb3dlcnNMb2FkaW5nOiBmYWxzZSwgLy8g7Jyg7KCAIOygleuztCDqsIDsoLjsmKTquLBcclxuICAgIGxvYWRGb2xsb3dlcnNEb25lOiBmYWxzZSxcclxuICAgIGxvYWRGb2xsb3dlcnNFcnJvcjogbnVsbCxcclxuICAgIGxvYWRGb2xsb3dlcnNMb2FkaW5nOiBmYWxzZSwgLy8g7Jyg7KCAIOygleuztCDqsIDsoLjsmKTquLBcclxuICAgIGxvYWRGb2xsb3dlcnNEb25lOiBmYWxzZSxcclxuICAgIGxvYWRGb2xsb3dlcnNFcnJvcjogbnVsbCxcclxuICAgIGxvYWRGb2xsb3dpbmdzTG9hZGluZzogZmFsc2UsIC8vIOycoOyggCDsoJXrs7Qg6rCA7KC47Jik6riwXHJcbiAgICBsb2FkRm9sbG93aW5nc0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2luZ3NFcnJvcjogbnVsbCxcclxuICAgIGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIGZvbGxvd0Vycm9yOiBudWxsLFxyXG4gICAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkVxyXG4gICAgdW5mb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIHVuZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgbG9nSW5FcnJvcjogbnVsbCxcclxuICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBsb2dPdXREb25lOiBmYWxzZSxcclxuICAgIGxvZ091dEVycm9yOiBudWxsLFxyXG4gICAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICAgIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gICAgc2lnblVwRXJyb3I6IG51bGwsICAgXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IOyLnOuPhOykkVxyXG4gICAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICAgIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsICAgXHJcbiAgICByZW1vdmVGb2xsb3dlckxvYWRpbmc6IGZhbHNlLCAvLyDsnKDsoIAg7KCV67O0IOqwgOyguOyYpOq4sFxyXG4gICAgcmVtb3ZlRm9sbG93ZXJEb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZUZvbGxvd2VyRXJyb3I6IG51bGwsXHJcbiAgICByZW1vdmVGb2xsb3dpbmdMb2FkaW5nOiBmYWxzZSwgLy8g7Jyg7KCAIOygleuztCDqsIDsoLjsmKTquLBcclxuICAgIHJlbW92ZUZvbGxvd2luZ0RvbmU6IGZhbHNlLFxyXG4gICAgcmVtb3ZlRm9sbG93aW5nRXJyb3I6IG51bGwsXHJcblxyXG4gICAgbWU6IG51bGwsXHJcbiAgICBzaWduVXBEYXRhOiB7fSxcclxuICAgIGxvZ2luRGF0YToge31cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QgPSBcIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyA9IFwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFID0gXCJSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRVwiO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dJTkdfUkVRVUVTVCA9IFwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1RcIjtcclxuLy8gZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dJTkdfU1VDQ0VTUyA9IFwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1NcIjtcclxuLy8gZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dJTkdfRkFJTFVSRSA9IFwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkVcIjtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19SRVFVRVNUID0gXCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUXCI7XHJcbi8vIGV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19TVUNDRVNTID0gXCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTXCI7XHJcbi8vIGV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19GQUlMVVJFID0gXCJMT0FEX0ZPTExPV0VSU19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCA9IFwiTE9BRF9GT0xMT1dFUlNfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyA9IFwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSA9IFwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19SRVFVRVNUID0gXCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MgPSBcIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSA9IFwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZSU5GT19SRVFVRVNUID0gXCJMT0FEX01ZSU5GT19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZSU5GT19TVUNDRVNTID0gXCJMT0FEX01ZSU5GT19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZSU5GT19GQUlMVVJFID0gXCJMT0FEX01ZSU5GT19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSBcIkxPR19JTl9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9IFwiTE9HX0lOX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gXCJMT0dfSU5fRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9IFwiTE9HX09VVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSBcIkxPR19PVVRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gXCJMT0dfT1VUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSBcIlNJR05fVVBfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gXCJTSUdOX1VQX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9IFwiU0lHTl9VUF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSBcIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9IFwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gXCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gXCJGT0xMT1dfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSBcIkZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9IFwiRk9MTE9XX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gXCJVTkZPTExPV19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gXCJVTkZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gXCJVTkZPTExPV19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gICAgICAgIGRhdGFcclxuICAgIH0gICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCwgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIGRyYWZ0ID0+IHtcclxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHsgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IG51bGxcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1M6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGRyYWZ0Lm1lLkZvbGxvd2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRTogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1NVQ0NFU1M6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJTX0ZBSUxVUkU6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19SRVFVRVNUOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUzogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRTogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19SRVFVRVNUOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IG51bGxcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1M6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19GQUlMVVJFOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX01ZSU5GT19SRVFVRVNUOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IG51bGxcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9NWUlORk9fU1VDQ0VTUzogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9NWUlORk9fRkFJTFVSRTogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2UgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19GQUlMVVJFOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3IgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6IFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgbG9naW4nKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2UgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lOyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7ICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIodiA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSlcclxuICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgeyBhbGwsIGZvcmssIGNhbGwsIHB1dCwgdGFrZSwgdGFrZUV2ZXJ5LCB0YWtlTGF0ZXN0LCBkZWxheSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSAnLi9wb3N0JztcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcic7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjMwNjVcIjtcclxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayhwb3N0U2FnYSksXHJcbiAgICAgICAgZm9yayh1c2VyU2FnYSksICAgICAgICBcclxuICAgIF0pICAgIFxyXG59IiwiaW1wb3J0IHsgYWxsLCBmb3JrLCBjYWxsLCBwdXQsIHRha2UsIHRocm90dGxlICwgdGFrZUV2ZXJ5LCB0YWtlTGF0ZXN0LCBkZWxheSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBzaG9ydGlkIGZyb20gJ3Nob3J0aWQnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIEFERF9QT1NUX1JFUVVFU1QsIEFERF9QT1NUX1NVQ0NFU1MsIEFERF9QT1NUX0ZBSUxVUkUsIFxyXG4gICAgQUREX0NPTU1FTlRfUkVRVUVTVCwgQUREX0NPTU1FTlRfU1VDQ0VTUywgQUREX0NPTU1FTlRfRkFJTFVSRSwgXHJcbiAgICBSRU1PVkVfUE9TVF9SRVFVRVNULCBSRU1PVkVfUE9TVF9TVUNDRVNTLCBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgTE9BRF9QT1NUU19SRVFVRVNULCBMT0FEX1BPU1RTX1NVQ0NFU1MsIExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgIExJS0VfUE9TVF9SRVFVRVNULCBMSUtFX1BPU1RfU1VDQ0VTUywgTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICBVTkxJS0VfUE9TVF9SRVFVRVNULCBVTkxJS0VfUE9TVF9TVUNDRVNTLCBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgVVBMT0FEX0lNQUdFU19SRVFVRVNULCBVUExPQURfSU1BR0VTX1NVQ0NFU1MsIFVQTE9BRF9JTUFHRVNfRkFJTFVSRVxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQge1xyXG4gICAgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5cclxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGF9L2xpa2VgKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KSAgICAgICBcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfSAgICBcclxufVxyXG5cclxuZnVuY3Rpb24gdW5saWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L2xpa2VgKVxyXG59XHJcblxyXG5mdW5jdGlvbiogdW5saWtlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KSAgICAgICBcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3Bvc3RzJywgZGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdHNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSkgICAgICAgXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QnLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YS5pZFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfSAgICBcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9YClcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH0gICAgXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC9pbWFnZXNgLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogdXBsb2FkSW1hZ2VzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSwgXCJhY3Rpb24uZGF0YVwiKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhLCBcImFjdGlvbi5kYXRhXCIpXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH0gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVwbG9hZEltYWdlcygpIHtcclxuICAgIHlpZWxkIHRocm90dGxlKDUwMDAsIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgdXBsb2FkSW1hZ2VzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMaWtlUG9zdCgpIHtcclxuICAgIHlpZWxkIHRocm90dGxlKDUwMDAsIExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVubGlrZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBVTkxJS0VfUE9TVF9SRVFVRVNULCB1bmxpa2VQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xyXG4gICAgeWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKXtcclxuICAgIHlpZWxkIGFsbChbICAgICAgIFxyXG4gICAgICAgIGZvcmsod2F0Y2hVcGxvYWRJbWFnZXMpLCAgICAgICAgXHJcbiAgICAgICAgZm9yayh3YXRjaExpa2VQb3N0KSwgICAgICAgIFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbmxpa2VQb3N0KSwgICAgICAgIFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLCAgICAgICAgXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZFBvc3QpLCAgICAgICAgXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLCAgICAgICAgXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLCAgICAgICAgXHJcbiAgICBdKVxyXG59IiwiaW1wb3J0IHsgYWxsLCBmb3JrLCBjYWxsLCBwdXQsIHRha2UsIHRha2VFdmVyeSwgdGFrZUxhdGVzdCwgZGVsYXkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge1xyXG4gICAgTE9HX0lOX1JFUVVFU1QsIExPR19JTl9TVUNDRVNTLCBMT0dfSU5fRkFJTFVSRSxcclxuICAgIExPR19PVVRfUkVRVUVTVCwgTE9HX09VVF9TVUNDRVNTLCBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICBTSUdOX1VQX1JFUVVFU1QsIFNJR05fVVBfU1VDQ0VTUywgU0lHTl9VUF9GQUlMVVJFLCBcclxuICAgIEZPTExPV19SRVFVRVNULCBGT0xMT1dfU1VDQ0VTUywgRk9MTE9XX0ZBSUxVUkUsIFxyXG4gICAgVU5GT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfU1VDQ0VTUywgVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgIExPQURfTVlJTkZPX1JFUVVFU1QsIExPQURfTVlJTkZPX1NVQ0NFU1MsIExPQURfTVlJTkZPX0ZBSUxVUkUsXHJcbiAgICBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG4gICAgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCwgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUywgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcclxuICAgIExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUywgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsXHJcbiAgICBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCwgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlTmlja25hbWVBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKCcvdXNlci9uaWNrbmFtZScsIHsgbmlja25hbWU6IGRhdGEgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBjaGFuZ2VOaWNrbmFtZShhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjaGFuZ2VOaWNrbmFtZUFQSSwgYWN0aW9uLmRhdGEpICAgICAgICAgIFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSkgICAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LCBcIu2ajOybkOqwgOyehSDsmpTssq0g7ISx6rO1IFJFU1wiKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH0gICAgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBmb2xsb3dBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QVBJLCBhY3Rpb24uZGF0YSkgICAgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfSAgICBcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hVbmZvbGxvdygpIHsgICBcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1bmZvbGxvd0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpIFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbG9hZEZvbGxvd2Vyc0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9mb2xsb3dlcnMnKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEZvbGxvd2VycyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkRm9sbG93ZXJzQVBJKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfSAgICBcclxufVxyXG5mdW5jdGlvbiByZW1vdmVGb2xsb3dlckFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci9mb2xsb3dlci8ke2RhdGF9YClcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZUZvbGxvd2VyKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZUZvbGxvd2VyQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH0gICAgXHJcbn1cclxuZnVuY3Rpb24gbG9hZEZvbGxvd2luZ3NBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXIvZm9sbG93aW5ncycpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkRm9sbG93aW5ncyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkRm9sbG93aW5nc0FQSSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfSAgICBcclxufVxyXG5mdW5jdGlvbiBsb2FkVXNlckFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlcicpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkVXNlcihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlckFQSSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX01ZSU5GT19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX01ZSU5GT19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH0gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dpbicsIGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH0gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dvdXQnKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB5aWVsZCBjYWxsKGxvZ091dEFQSSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZUZvbGxvd2VyKCkgeyAgIFxyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCwgcmVtb3ZlRm9sbG93ZXIpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dlcnMoKSB7ICAgXHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIGxvYWRGb2xsb3dlcnMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dpbmdzKCkgeyAgIFxyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCwgbG9hZEZvbGxvd2luZ3MpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaENoYW5nZU5pY2tuYW1lKCkgeyAgIFxyXG4gICAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgY2hhbmdlTmlja25hbWUpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyKCkgeyAgIFxyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX01ZSU5GT19SRVFVRVNULCBsb2FkVXNlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHsgICBcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ2luKCkgeyAgIFxyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZUZvbGxvd2VyKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZEZvbGxvd2VycyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRGb2xsb3dpbmdzKSxcclxuICAgICAgICBmb3JrKHdhdGNoQ2hhbmdlTmlja25hbWUpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkVXNlciksXHJcbiAgICAgICAgZm9yayh3YXRjaEZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaFVuZm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9naW4pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dPdXQpLCAgICBcclxuICAgICAgICBmb3JrKHdhdGNoU2lnblVwKSAgICAgICAgICAgXHJcbiAgICBdKVxyXG59IiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAnQHJlZHV4LXNhZ2EvY29yZSc7XHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJ1xyXG5cclxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9ICh7IGRpc3BhdGNoLCBnZXRTdGF0ZSB9KSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICAgIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbn1cclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gICAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmUsIGxvZ2dlck1pZGRsZXdhcmVdO1xyXG4gICAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gICAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpOyAvLyByZWFjdC1zYWdh7J2YIOqyveyasCDstpTqsIAg7IS47YyFXHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwgeyBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCd9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XHJcblxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4LXNhZ2EvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYWtlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9