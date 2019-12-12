"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onRedirectCallback = exports.Auth0Provider = exports.useAuth0 = exports.Auth0Context = void 0;

var _auth0SpaJs = _interopRequireDefault(require("@auth0/auth0-spa-js"));

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DEFAULT_REDIRECT_CALLBACK = function DEFAULT_REDIRECT_CALLBACK() {
  return window.location.pathname;
};

var noop = function noop(param) {
  return null;
};

var Auth0Context = _react["default"].createContext({
  isAuthenticated: false,
  user: null,
  token: null,
  loading: false,
  popupOpen: false,
  loginWithPopup: false,
  handleRedirectCallback: noop,
  getIdTokenClaims: noop,
  loginWithRedirect: noop,
  getTokenSilently: noop,
  getTokenWithPopup: noop,
  logout: noop
});

exports.Auth0Context = Auth0Context;

var useAuth0 = function useAuth0() {
  return (0, _react.useContext)(Auth0Context);
};

exports.useAuth0 = useAuth0;

var Auth0Provider = function Auth0Provider(_ref) {
  var children = _ref.children,
      _ref$loading = _ref.loading,
      loadingParam = _ref$loading === void 0 ? 'Loading...' : _ref$loading,
      _ref$onRedirectCallba = _ref.onRedirectCallback,
      onRedirectCallback = _ref$onRedirectCallba === void 0 ? DEFAULT_REDIRECT_CALLBACK : _ref$onRedirectCallba,
      initOptions = _objectWithoutProperties(_ref, ["children", "loading", "onRedirectCallback"]);

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      isAuthenticated = _useState2[0],
      setIsAuthenticated = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      user = _useState4[0],
      setUser = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      auth0Client = _useState6[0],
      setAuth0 = _useState6[1];

  var _useState7 = (0, _react.useState)(true),
      _useState8 = _slicedToArray(_useState7, 2),
      loading = _useState8[0],
      setLoading = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      popupOpen = _useState10[0],
      setPopupOpen = _useState10[1];

  var _useState11 = (0, _react.useState)(),
      _useState12 = _slicedToArray(_useState11, 2),
      token = _useState12[0],
      setToken = _useState12[1];

  (0, _react.useEffect)(function () {
    if (token) {
      window.localStorage.setItem('token', token);
      return;
    }

    window.localStorage.removeItem('token');
  }, [token]);
  (0, _react.useEffect)(function () {
    var initAuth0 = function initAuth0() {
      var auth0FromHook, _ref2, appState, isAuthenticated, _user, _token;

      return regeneratorRuntime.async(function initAuth0$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap((0, _auth0SpaJs["default"])(initOptions));

            case 2:
              auth0FromHook = _context.sent;
              setAuth0(auth0FromHook);

              if (!window.location.search.includes('code=')) {
                _context.next = 10;
                break;
              }

              _context.next = 7;
              return regeneratorRuntime.awrap(auth0FromHook.handleRedirectCallback());

            case 7:
              _ref2 = _context.sent;
              appState = _ref2.appState;
              onRedirectCallback(appState);

            case 10:
              _context.next = 12;
              return regeneratorRuntime.awrap(auth0FromHook.isAuthenticated());

            case 12:
              isAuthenticated = _context.sent;
              setIsAuthenticated(isAuthenticated);

              if (!isAuthenticated) {
                _context.next = 23;
                break;
              }

              _context.next = 17;
              return regeneratorRuntime.awrap(auth0FromHook.getUser());

            case 17:
              _user = _context.sent;
              setUser(_user);
              _context.next = 21;
              return regeneratorRuntime.awrap(auth0FromHook.getTokenSilently());

            case 21:
              _token = _context.sent;
              setToken(_token);

            case 23:
              setLoading(false);

            case 24:
            case "end":
              return _context.stop();
          }
        }
      });
    };

    initAuth0(); // eslint-disable-next-line
  }, []);

  var loginWithPopup = _react["default"].useCallback(function _callee() {
    var params,
        user,
        token,
        _args2 = arguments;
    return regeneratorRuntime.async(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            params = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};

            if (auth0Client) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return");

          case 3:
            setPopupOpen(true);
            _context2.prev = 4;
            _context2.next = 7;
            return regeneratorRuntime.awrap(auth0Client.loginWithPopup(params));

          case 7:
            _context2.next = 11;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](4);

          case 11:
            _context2.prev = 11;
            setPopupOpen(false);
            return _context2.finish(11);

          case 14:
            _context2.next = 16;
            return regeneratorRuntime.awrap(auth0Client.getUser());

          case 16:
            user = _context2.sent;
            setUser(user);
            _context2.next = 20;
            return regeneratorRuntime.awrap(auth0Client.getTokenSilently());

          case 20:
            token = _context2.sent;
            setToken(token);
            setIsAuthenticated(true);

          case 23:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[4, 9, 11, 14]]);
  }, [auth0Client]);

  var handleRedirectCallback = _react["default"].useCallback(function _callee2() {
    var token, user;
    return regeneratorRuntime.async(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (auth0Client) {
              _context3.next = 2;
              break;
            }

            return _context3.abrupt("return");

          case 2:
            setLoading(true);
            _context3.next = 5;
            return regeneratorRuntime.awrap(auth0Client.handleRedirectCallback());

          case 5:
            _context3.next = 7;
            return regeneratorRuntime.awrap(auth0Client.getTokenSilently());

          case 7:
            token = _context3.sent;
            _context3.next = 10;
            return regeneratorRuntime.awrap(auth0Client.getUser());

          case 10:
            user = _context3.sent;
            setLoading(false);
            setIsAuthenticated(true);
            setUser(user);
            setToken(token);

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    });
  }, [auth0Client]);

  return _react["default"].createElement(Auth0Context.Provider, {
    value: {
      isAuthenticated: isAuthenticated,
      user: user,
      token: token,
      loading: loading,
      popupOpen: popupOpen,
      loginWithPopup: loginWithPopup,
      handleRedirectCallback: handleRedirectCallback,
      getIdTokenClaims: _react["default"].useCallback(function () {
        return auth0Client && auth0Client.getIdTokenClaims.apply(auth0Client, arguments);
      }, [auth0Client]),
      loginWithRedirect: _react["default"].useCallback(function () {
        return auth0Client && auth0Client.loginWithRedirect.apply(auth0Client, arguments);
      }, [auth0Client]),
      getTokenSilently: _react["default"].useCallback(function () {
        return auth0Client && auth0Client.getTokenSilently.apply(auth0Client, arguments);
      }, [auth0Client]),
      getTokenWithPopup: _react["default"].useCallback(function () {
        return auth0Client && auth0Client.getTokenWithPopup.apply(auth0Client, arguments);
      }, [auth0Client]),
      logout: _react["default"].useCallback(function (opts) {
        for (var _len = arguments.length, p = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          p[_key - 1] = arguments[_key];
        }

        auth0Client && auth0Client.logout.apply(auth0Client, [_objectSpread({
          returnTo: window.location.href.split('?')[0]
        }, opts)].concat(p));
      }, [auth0Client])
    }
  }, loading && loadingParam, !loading && children);
};

exports.Auth0Provider = Auth0Provider;

var onRedirectCallback = function onRedirectCallback(appState) {
  window.history.replaceState({}, document.title, appState && appState.targetUrl ? appState.targetUrl : window.location.pathname);
};

exports.onRedirectCallback = onRedirectCallback;