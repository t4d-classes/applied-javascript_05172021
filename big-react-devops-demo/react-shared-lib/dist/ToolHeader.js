"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToolHeader = function ToolHeader(_ref) {
  var headerText = _ref.headerText;
  return /*#__PURE__*/_react.default.createElement("header", null, /*#__PURE__*/_react.default.createElement("h1", null, headerText));
};

exports.ToolHeader = ToolHeader;
ToolHeader.propTypes = {
  headerText: _propTypes.default.string.isRequired
};