import react from 'react';
import lodash from 'lodash';
import buttonGroup from 'antd/es/button/button-group';
import button from 'antd/es/button/button';
import dropdown from 'antd/es/dropdown/dropdown';
import MenuItem from 'antd/lib/menu/MenuItem';
import menu from 'antd/es/menu';
import icon from 'antd/es/icon';
import select from 'antd/es/select';
import moment from 'moment';
import datePicker from 'antd/es/date-picker';

function unwrapExports (x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
  return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
  return n && n.default || n;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
      t[p[i]] = s[p[i]];
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0: case 1: t = op; break;
        case 4: _.label++; return { value: op[1], done: false };
        case 5: _.label++; y = op[1]; op = [0]; continue;
        case 7: op = _.ops.pop(); _.trys.pop(); continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
          if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
          if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
          if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
          if (t[2]) _.ops.pop();
          _.trys.pop(); continue;
      }
      op = body.call(thisArg, _);
    } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
    if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

function __exportStar(m, exports) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
  if (m) return m.call(o);
  return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    }
    finally { if (e) throw e.error; }
  }
  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

var _tslib = /*#__PURE__*/Object.freeze({
  __extends: __extends,
  get __assign () { return __assign; },
  __rest: __rest,
  __decorate: __decorate,
  __param: __param,
  __metadata: __metadata,
  __awaiter: __awaiter,
  __generator: __generator,
  __exportStar: __exportStar,
  __values: __values,
  __read: __read,
  __spread: __spread,
  __await: __await,
  __asyncGenerator: __asyncGenerator,
  __asyncDelegator: __asyncDelegator,
  __asyncValues: __asyncValues,
  __makeTemplateObject: __makeTemplateObject,
  __importStar: __importStar,
  __importDefault: __importDefault
});



var Tools = /*#__PURE__*/Object.freeze({
  default: undefined
});

var tslib_1 = getCjsExportFromNamespace(_tslib);

getCjsExportFromNamespace(Tools);

var GroupTools_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });

  var react_1 = tslib_1.__importDefault(react);

  var button_group_1 = tslib_1.__importDefault(buttonGroup);
  var button_1 = tslib_1.__importDefault(button);
  var dropdown_1 = tslib_1.__importDefault(dropdown);
  var MenuItem_1 = tslib_1.__importDefault(MenuItem);

  var menu_1 = tslib_1.__importDefault(menu);
  var icon_1 = tslib_1.__importDefault(icon);
  var GroupTools = /** @class */ (function (_super) {
    tslib_1.__extends(GroupTools, _super);
    function GroupTools() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    GroupTools.prototype.render = function () {
      var _this = this;
      var _a = this.props, type = _a.type, node = _a.node;
      var disabled = false;
      if (node.parent && node.parent.type === 'WHERE') {
        disabled = true;
      }
      return (react_1.default.createElement(Framework_1.FilterContext.Consumer, null, function (context) {
        return (react_1.default.createElement("div", { className: "group-tool" },
          react_1.default.createElement(button_group_1.default, null,
            react_1.default.createElement(button_1.default, { onClick: function () {
                return context.changeNodeType(_this.props.node, "FILTER_AND");
              }, type: type === "FILTER_AND" ? "primary" : "default" }, "\u4E14"),
            react_1.default.createElement(button_1.default, { onClick: function () {
                return context.changeNodeType(_this.props.node, "FILTER_OR");
              }, type: type === "FILTER_OR" ? "primary" : "default" }, "\u6216")),
          "\u00A0\u00A0",
          react_1.default.createElement(button_group_1.default, { className: "ActionBtnGroup" },
            react_1.default.createElement(dropdown_1.default, { trigger: ["click"], overlay: react_1.default.createElement(menu_1.default, { onClick: function (item) {
                    return context.addNode(item.key, _this.props.node);
                  } },
                react_1.default.createElement(MenuItem_1.default, { key: "rule" },
                  react_1.default.createElement("span", { className: "TypeLabel" }, "\u89C4\u5219")),
                react_1.default.createElement(MenuItem_1.default, { key: "group" },
                  react_1.default.createElement("span", { className: "TypeLabel" }, "\u89C4\u5219\u7EC4"))) },
              react_1.default.createElement(button_1.default, null,
                react_1.default.createElement(icon_1.default, { type: "plus" }),
                react_1.default.createElement("span", null, "\u6DFB\u52A0"),
                react_1.default.createElement(icon_1.default, { type: "down" }))),
            react_1.default.createElement(button_1.default, { icon: "delete", type: "danger", disabled: disabled, onClick: function () { return context.removeNode(_this.props.node); } },
              react_1.default.createElement("span", null, "\u5220\u9664\u7EC4")),
            react_1.default.createElement(button_1.default, { disabled: disabled, onClick: function () {
                context.collapseNode(_this.props.node);
              } }, "\u62C6\u5206"))));
      }));
    };
    return GroupTools;
  }(react_1.default.Component));
  exports.default = GroupTools;

});

unwrapExports(GroupTools_1);



var Groups = /*#__PURE__*/Object.freeze({
  default: undefined
});

var GuideLine = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });

  var react_1 = tslib_1.__importDefault(react);

  function default_1() {
    return react_1.default.createElement("div", { className: "Guideline" });
  }
  exports.default = default_1;

});

unwrapExports(GuideLine);

getCjsExportFromNamespace(Groups);

var AndGroup_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });

  var react_1 = tslib_1.__importStar(react);
  var Entry_1$1 = tslib_1.__importDefault(Entry_1);
  var GroupTools_1$1 = tslib_1.__importDefault(GroupTools_1);

  var GuideLine_1 = tslib_1.__importDefault(GuideLine);
  var AndGroup = /** @class */ (function (_super) {
    tslib_1.__extends(AndGroup, _super);
    function AndGroup() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    AndGroup.prototype.render = function () {
      var _a = this.props, node = _a.node, list = _a.node.list;
      if (!list) {
        return null;
      }
      return (react_1.default.createElement("div", { style: { marginLeft: 40 }, className: "group" },
        react_1.default.createElement(react_1.Fragment, null,
          react_1.default.createElement(GroupTools_1$1.default, { type: "FILTER_AND", node: node }),
          react_1.default.createElement("div", null,
            react_1.default.createElement(GuideLine_1.default, null),
            list.map(function (item, index) {
              var ret = react_1.default.createElement(Entry_1$1.default, { node: item, key: index });
              console.info(666, item, ret);
              return ret;
            })))));
    };
    return AndGroup;
  }(react_1.default.Component));
  exports.default = AndGroup;

});

unwrapExports(AndGroup_1);

var OrGroup_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });

  var react_1 = tslib_1.__importDefault(react);
  var Entry_1$1 = tslib_1.__importDefault(Entry_1);
  var GroupTools_1$1 = tslib_1.__importDefault(GroupTools_1);

  var GuideLine_1 = tslib_1.__importDefault(GuideLine);
  var OrGroup = /** @class */ (function (_super) {
    tslib_1.__extends(OrGroup, _super);
    function OrGroup() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    OrGroup.prototype.render = function () {
      var _a = this.props, node = _a.node, list = _a.node.list, errors = _a.errors;
      if (!list) {
        return null;
      }
      return (react_1.default.createElement("div", { style: { marginLeft: 40 }, className: "group" },
        react_1.default.createElement(GroupTools_1$1.default, { type: "FILTER_OR", node: node }),
        react_1.default.createElement("div", null,
          react_1.default.createElement(GuideLine_1.default, null),
          errors && errors.has(node) ? (react_1.default.createElement("span", { className: "group-error" }, errors.get(node))) : null,
          list.map(function (item, index) {
            var ret = [react_1.default.createElement(Entry_1$1.default, { node: item, key: index })];
            // if (index !== 0) {
            //   ret.unshift(<span>或</span>)
            // }
            return ret;
          }))));
    };
    return OrGroup;
  }(react_1.default.Component));
  exports.default = OrGroup;

});

unwrapExports(OrGroup_1);

var SplitLine = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });

  var react_1 = tslib_1.__importDefault(react);

  function default_1() {
    return react_1.default.createElement("div", { className: "Splitline" });
  }
  exports.default = default_1;

});

unwrapExports(SplitLine);

var RuleTools_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });

  var react_1 = tslib_1.__importDefault(react);
  var button_group_1 = tslib_1.__importDefault(buttonGroup);
  var button_1 = tslib_1.__importDefault(button);


  var RuleTools = /** @class */ (function (_super) {
    tslib_1.__extends(RuleTools, _super);
    function RuleTools() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    RuleTools.prototype.render = function () {
      var _this = this;
      return (react_1.default.createElement(Framework_1.FilterContext.Consumer, null, function (context) {
        return (react_1.default.createElement(button_group_1.default, null,
          react_1.default.createElement(button_1.default, { icon: "copy", onClick: function () { return context.copyNode(_this.props.node); } }),
          react_1.default.createElement(button_1.default, { icon: "delete", type: "danger", onClick: function () { return context.removeNode(_this.props.node); } }),
          react_1.default.createElement(button_1.default, { onClick: function () {
                context.collapseNode(_this.props.node);
              } },
            react_1.default.createElement("span", { style: { margin: "0 -6px" } }, "\u62C6"))));
      }));
    };
    return RuleTools;
  }(react_1.default.Component));
  exports.default = RuleTools;

});

unwrapExports(RuleTools_1);

var ActionRule_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });

  var react_1 = tslib_1.__importDefault(react);
  var Entry_1$1 = tslib_1.__importDefault(Entry_1);
  var SplitLine_1 = tslib_1.__importDefault(SplitLine);
  var RuleTools_1$1 = tslib_1.__importDefault(RuleTools_1);
  var select_1 = tslib_1.__importDefault(select);
  var Option = select_1.default.Option;
  var ActionRule = /** @class */ (function (_super) {
    tslib_1.__extends(ActionRule, _super);
    function ActionRule() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.typeChange = function (val) {
        _this.props.context.changeNodeType(_this.props.node.action, val);
        _this.props.context.clearNodeAction(_this.props.node);
      };
      return _this;
    }
    ActionRule.prototype.render = function () {
      var node = this.props.node;
      var action = node.action, range = node.range;
      var options = [
        { key: "USER_ACTION", name: "用户" },
        { key: "TOPIC_ACTION", name: "话题" }
      ];
      return (react_1.default.createElement("div", { className: "rule-tool" },
        react_1.default.createElement(SplitLine_1.default, null),
        react_1.default.createElement(select_1.default, { value: node.action.type, onChange: this.typeChange }, options.map(function (op) { return (react_1.default.createElement(Option, { key: op.key, value: op.key }, op.name)); })),
        "\u00A0 \u00A0",
        react_1.default.createElement(Entry_1$1.default, { node: action }),
        range ? react_1.default.createElement(Entry_1$1.default, { node: range }) : null,
        react_1.default.createElement(RuleTools_1$1.default, { node: this.props.node })));
    };
    return ActionRule;
  }(react_1.default.Component));
  exports.default = ActionRule;

});

unwrapExports(ActionRule_1);

var RangeRule_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });

  var react_1 = tslib_1.__importDefault(react);
  var moment_1 = tslib_1.__importDefault(moment);
  var date_picker_1 = tslib_1.__importDefault(datePicker);
  var RangePicker = date_picker_1.default.RangePicker;
  var RangeRule = /** @class */ (function (_super) {
    tslib_1.__extends(RangeRule, _super);
    function RangeRule() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.dateChange = function (_, strings) {
        _this.props.context.changeDateNodeValue(_this.props.node.from, strings[0]);
        _this.props.context.changeDateNodeValue(_this.props.node.to, strings[1]);
      };
      return _this;
    }
    RangeRule.prototype.render = function () {
      var _a = this.props, node = _a.node, errors = _a.errors;
      if (!node) {
        return null;
      }
      var from = node.from, to = node.to;
      return (react_1.default.createElement("span", { className: errors && errors.has(node) ? 'has-error' : '' },
        "\u5728\u00A0\u00A0",
        react_1.default.createElement(RangePicker, { value: to.value ? [moment_1.default(from.value), moment_1.default(to.value)] : undefined, showTime: false, style: { width: 240 }, onChange: this.dateChange }),
        "\u00A0\u00A0"));
    };
    return RangeRule;
  }(react_1.default.Component));
  exports.default = RangeRule;

});

unwrapExports(RangeRule_1);

var UserActionRule_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });

  var react_1 = tslib_1.__importDefault(react);
  var select_1 = tslib_1.__importDefault(select);
  var UserActionRule = /** @class */ (function (_super) {
    tslib_1.__extends(UserActionRule, _super);
    function UserActionRule() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    UserActionRule.prototype.render = function () {
      var _a = this.props, errors = _a.errors, node = _a.node;
      var _b = this.props.node.detail, action = _b.action, target = _b.target;
      return (react_1.default.createElement("span", { className: errors && errors.has(node) ? 'has-error' : '' },
        "\u5BF9\u7528\u6237\u00A0\u00A0",
        react_1.default.createElement(select_1.default, { value: target.id, placeholder: "\u8BF7\u9009\u62E9", style: { width: 100 } }),
        "\u00A0\u00A0 \u505A\u4E86 \u00A0\u00A0",
        react_1.default.createElement(select_1.default, { value: action.id, placeholder: "\u8BF7\u9009\u62E9", style: { width: 100 } }),
        "\u00A0\u00A0"));
    };
    return UserActionRule;
  }(react_1.default.Component));
  exports.default = UserActionRule;

});

unwrapExports(UserActionRule_1);

var TopicActionRule_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });

  var react_1 = tslib_1.__importDefault(react);
  var select_1 = tslib_1.__importDefault(select);
  var Option = select_1.default.Option;
  var TopicActionRule = /** @class */ (function (_super) {
    tslib_1.__extends(TopicActionRule, _super);
    function TopicActionRule() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.state = {
        targetOptions: ["1112", "3334"],
        actionOptions: ["awsl", "ddddd"]
      };
      _this.actionChange = function (val) {
        _this.props.context.changeIDNodeValue(_this.props.node.detail.action, val);
      };
      _this.targetChange = function (val) {
        _this.props.context.changeIDNodeValue(_this.props.node.detail.target, val);
      };
      return _this;
    }
    TopicActionRule.prototype.componentWillMount = function () {
      this.setState({});
    };
    TopicActionRule.prototype.render = function () {
      var _a = this.props, errors = _a.errors, node = _a.node;
      var _b = this.props.node.detail, action = _b.action, target = _b.target;
      var _c = this.state, targetOptions = _c.targetOptions, actionOptions = _c.actionOptions;
      return (react_1.default.createElement("span", { className: errors && errors.has(node) ? "has-error" : "" },
        "\u5BF9\u8BDD\u9898\u00A0\u00A0",
        react_1.default.createElement(select_1.default, { value: target.id, placeholder: "\u8BF7\u9009\u62E9", style: { width: 100 }, onChange: this.targetChange }, targetOptions.map(function (t) { return (react_1.default.createElement(Option, { key: t }, t)); })),
        "\u00A0\u00A0 \u505A\u4E86 \u00A0\u00A0",
        react_1.default.createElement(select_1.default, { value: action.id, placeholder: "\u8BF7\u9009\u62E9", style: { width: 100 }, onChange: this.actionChange }, actionOptions.map(function (t) { return (react_1.default.createElement(Option, { key: t }, t)); })),
        "\u00A0\u00A0"));
    };
    return TopicActionRule;
  }(react_1.default.Component));
  exports.default = TopicActionRule;

});

unwrapExports(TopicActionRule_1);

var Entry_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });

  var react_1 = tslib_1.__importDefault(react);
  var AndGroup_1$1 = tslib_1.__importDefault(AndGroup_1);
  var OrGroup_1$1 = tslib_1.__importDefault(OrGroup_1);

  var ActionRule_1$1 = tslib_1.__importDefault(ActionRule_1);
  var RangeRule_1$1 = tslib_1.__importDefault(RangeRule_1);
  var UserActionRule_1$1 = tslib_1.__importDefault(UserActionRule_1);
  var TopicActionRule_1$1 = tslib_1.__importDefault(TopicActionRule_1);
  function Null() {
    return null;
  }
  /**
   * Facade Component
   */
  var Entry = /** @class */ (function (_super) {
    tslib_1.__extends(Entry, _super);
    function Entry() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    Entry.prototype.render = function () {
      var _this = this;
      var type = this.props.node.type;
      if (!type) {
        return null;
      }
      var NodeComponent = Null;
      if (type === "FILTER_AND") {
        NodeComponent = AndGroup_1$1.default;
      }
      if (type === "FILTER_OR") {
        NodeComponent = OrGroup_1$1.default;
      }
      if (type === "FILTER_NODE") {
        // 现在只有action一种
        NodeComponent = ActionRule_1$1.default;
      }
      /**
       * 上面这三种实际上是核心类型，可以进行拖拽
       * 下面的几种是根据业务场景设计的组件
       */
      if (type === "USER_ACTION") {
        NodeComponent = UserActionRule_1$1.default;
      }
      if (type === "TOPIC_ACTION") {
        NodeComponent = TopicActionRule_1$1.default;
      }
      if (type === "RANGE") {
        NodeComponent = RangeRule_1$1.default;
      }
      return (react_1.default.createElement(Framework_1.FilterContext.Consumer, null, function (context) {
        return react_1.default.createElement(NodeComponent, {
          node: _this.props.node,
          errors: context.errors,
          context: context
        });
      }));
    };
    return Entry;
  }(react_1.default.Component));
  exports.default = Entry;

});

unwrapExports(Entry_1);

var Rule_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var Rule = /** @class */ (function () {
    function Rule(type, parent) {
      this.type = "FILTER_NODE";
      this.parent = null;
      this.action = {
        type: "TOPIC_ACTION",
        detail: {
          action: { id: undefined, type: 'ID_NODE' },
          target: { id: undefined, type: 'ID_NODE' }
        }
      };
      this.range = {
        type: "RANGE",
        from: { value: undefined, type: 'DATE' },
        to: { value: undefined, type: 'DATE' }
      };
      this.parent = parent;
      if (type === "TOPIC_ACTION") {
        this.action.type = "TOPIC_ACTION";
      }
      else if (type === "USER_ACTION") {
        this.action.type = "USER_ACTION";
      }
      else {
        throw TypeError("Unexpected type for Rule constructor");
      }
    }
    Rule.prototype.clear = function () {
      this.action.detail = {
        action: { id: undefined, type: 'ID_NODE' },
        target: { id: undefined, type: 'ID_NODE' }
      };
    };
    return Rule;
  }());
  exports.default = Rule;

});

unwrapExports(Rule_1);

var Group_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var Group = /** @class */ (function () {
    function Group(type, parent) {
      this.parent = null;
      this.type = "FILTER_OR";
      this.list = [];
      this.parent = parent;
      if (type === "FILTER_AND") {
        this.type = "FILTER_AND";
      }
      else if (type === "FILTER_OR") {
        this.type = "FILTER_OR";
      }
      else {
        throw TypeError("Unexpected type for Group constructor");
      }
    }
    return Group;
  }());
  exports.default = Group;

});

unwrapExports(Group_1);

var traverse_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var traverse = function (ast, options) {
    return ast;
  };
  exports.default = traverse;
//
// export const cutNode = (root: any, node: any) => {
//   let visitor = root
//   while(visitor) {
//
//     visitor = visitor.
//   }
// }
  exports.assignParentNode = function (root) {
    var node = root.conditions;
    function walk(walker) {
      if (walker.list) {
        for (var i = 0; i < walker.list.length; i++) {
          walker.list[i].parent = walker;
          walk(walker.list[i]);
        }
      }
    }
    if (node.list) {
      node.parent = root;
    }
    walk(node);
    return root;
  };
  exports.clearParentNode = function (root) {
    var node = root.conditions;
    function walk(walker) {
      if (walker.list) {
        for (var i = 0; i < walker.list.length; i++) {
          delete walker.list[i].parent;
          walk(walker.list[i]);
        }
      }
    }
    if (node.list) {
      delete node.parent;
    }
    walk(node);
    return root;
  };
  exports.validateNodes = function (root, validator) {
    var node = root.conditions;
    function walk(walker) {
      if (walker.list) {
        for (var i = 0; i < walker.list.length; i++) {
          validator(walker.list[i]);
          walk(walker.list[i]);
        }
      }
      if (walker.type === 'FILTER_NODE') {
        validator(walker.action);
        walk(walker.action);
      }
    }
    walk(node);
    return root;
  };

});

unwrapExports(traverse_1);
var traverse_2 = traverse_1.assignParentNode;
var traverse_3 = traverse_1.clearParentNode;
var traverse_4 = traverse_1.validateNodes;

var Framework_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });

  var react_1 = tslib_1.__importStar(react);
  var lodash_1 = tslib_1.__importDefault(lodash);
// import { DragDropContext, DragDropContextProvider } from "react-dnd";
// import HTML5Backend from "react-dnd-html5-backend";
  var Entry_1$1 = tslib_1.__importDefault(Entry_1);
  var Rule_1$1 = tslib_1.__importDefault(Rule_1);
  var Group_1$1 = tslib_1.__importDefault(Group_1);

  exports.FilterContext = react_1.createContext({
    tree: null,
    errors: null
  });
  var Framework = /** @class */ (function (_super) {
    tslib_1.__extends(Framework, _super);
    function Framework(props) {
      var _this = _super.call(this, props) || this;
      _this.moveNode = function (from, to) { };
      _this.addNode = function (node, to) {
        if (node === "rule") {
          to.list.push(new Rule_1$1.default("TOPIC_ACTION", to));
          _this.forceUpdate();
        }
        else if (node === "group") {
          to.list.push(new Group_1$1.default("FILTER_OR", to));
          _this.forceUpdate();
        }
        else {
          throw TypeError("Unexpected node type, cannot be inserted");
        }
        _this.clearErrors();
        // this.forceUpdate();
      };
      _this.collapseNode = function (node, filter) {
        if (filter === void 0) { filter = "FILTER_OR"; }
        var group = new Group_1$1.default(filter, node.parent);
        var index = node.parent.list.findIndex(function (t) { return t === node; });
        if (node.type === "FILTER_NODE") {
          node.parent.list[index] = group;
          group.list = [node];
          node.parent = group;
        }
        else {
          node.parent.list[index] = group;
          group.list = [node];
          node.parent = group;
        }
        // this.clearErrors();
        _this.forceUpdate();
      };
      _this.changeNodeType = function (node, type) {
        node.type = type;
        _this.clearErrors();
        // this.forceUpdate();
      };
      _this.changeIDNodeValue = function (node, val) {
        node.id = val;
        _this.clearErrors();
        // this.forceUpdate();
      };
      _this.changeDateNodeValue = function (node, val) {
        node.value = val;
        _this.clearErrors();
        // this.forceUpdate();
      };
      _this.clearNodeAction = function (node) {
        if (node.type === "FILTER_NODE") {
          Rule_1$1.default.prototype.clear.call(node);
        }
        // node.clear && node.clear();
        _this.clearErrors();
        // this.forceUpdate();
      };
      _this.removeNode = function (node) {
        var index = node.parent.list.findIndex(function (t) { return t === node; });
        node.parent.list.splice(index, 1);
        _this.clearErrors();
        // this.forceUpdate();
      };
      _this.copyNode = function (node) {
        var index = node.parent.list.findIndex(function (t) { return t === node; });
        node.parent.list.splice(index, 0, {
          type: "FILTER_NODE",
          action: lodash_1.default.cloneDeep(node.action),
          range: lodash_1.default.cloneDeep(node.range),
          parent: node.parent
        });
        // node.parent.list.splice(index, 0, cloneDeep(node));
        _this.clearErrors();
        // this.forceUpdate();
      };
      /**
       * 外部方法调用
       */
      _this.getFieldsValue = function () {
        if (_this.validateFieldsValue()) {
          return false;
        }
        return _this.state.tree;
      };
      _this.validateFieldsValue = function () {
        var errors = new Map();
        traverse_1.validateNodes(_this.state.tree, function (node) {
          if (node.type === "FILTER_AND" || node.type === "FILTER_OR") {
            if (node.list.length === 0)
              errors.set(node, "AND/OR筛选列表不能为空");
          }
          if (node.type === "USER_ACTION" || node.type === "TOPIC_ACTION") {
            if (!node.detail.action.id)
              errors.set(node, "动作不能设置为空");
            if (!node.detail.target.id)
              errors.set(node, "目标不能设置为空");
          }
        });
        _this.setState({ errors: errors });
        return errors.size ? errors : null;
      };
      _this.clearErrors = function (node) {
        if (!node) {
          _this.setState({ errors: null });
          return;
        }
        _this.state.errors.delete(node);
        _this.forceUpdate();
      };
      _this.state = {
        errors: null,
        tree: traverse_1.assignParentNode(props.filters),
        moveNode: _this.moveNode,
        addNode: _this.addNode,
        collapseNode: _this.collapseNode,
        removeNode: _this.removeNode,
        copyNode: _this.copyNode,
        clearNodeAction: _this.clearNodeAction,
        clearErrors: _this.clearErrors,
        changeIDNodeValue: _this.changeIDNodeValue,
        changeDateNodeValue: _this.changeDateNodeValue,
        changeNodeType: _this.changeNodeType
      };
      return _this;
    }
    Framework.prototype.render = function () {
      var conditions = this.state.tree.conditions;
      if (!conditions) {
        return null;
      }
      return (react_1.default.createElement("div", null,
        react_1.default.createElement(exports.FilterContext.Provider, { value: this.state },
          react_1.default.createElement(Entry_1$1.default, { node: conditions }))));
    };
    return Framework;
  }(react_1.default.Component));
  exports.default = Framework;

});

var Framework = unwrapExports(Framework_1);
var Framework_2 = Framework_1.FilterContext;

export default Framework;
