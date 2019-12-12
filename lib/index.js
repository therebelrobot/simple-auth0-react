"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _auth = require("./auth0");

Object.keys(_auth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _auth[key];
    }
  });
});

var _PrivateRoute = require("./PrivateRoute");

Object.keys(_PrivateRoute).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PrivateRoute[key];
    }
  });
});