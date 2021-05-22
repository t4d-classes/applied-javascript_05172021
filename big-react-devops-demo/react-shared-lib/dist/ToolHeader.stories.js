"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ToolHeader = require("./ToolHeader");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// src/components/Button.stories.js
var _default = {
  title: "Example/ToolHeader",
  component: _ToolHeader.ToolHeader
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_ToolHeader.ToolHeader, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  headerText: "The Tool"
};