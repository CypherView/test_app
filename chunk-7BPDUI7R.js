import {
  Inject,
  Injectable,
  InjectionToken,
  NgZone,
  Observable,
  Optional,
  __assign,
  __awaiter,
  __extends,
  __generator,
  __rest,
  __spreadArray,
  from,
  map,
  observable,
  observeOn,
  queueScheduler,
  setClassMetadata,
  startWith,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UOQWYEAO.js";
import {
  __esm,
  __export,
  __spreadProps,
  __spreadValues
} from "./chunk-R327OCYJ.js";

// node_modules/graphql/jsutils/devAssert.mjs
function devAssert(condition, message) {
  const booleanCondition = Boolean(condition);
  if (!booleanCondition) {
    throw new Error(message);
  }
}
var init_devAssert = __esm({
  "node_modules/graphql/jsutils/devAssert.mjs"() {
    "use strict";
  }
});

// node_modules/graphql/language/ast.mjs
function isNode(maybeNode) {
  const maybeKind = maybeNode === null || maybeNode === void 0 ? void 0 : maybeNode.kind;
  return typeof maybeKind === "string" && kindValues.has(maybeKind);
}
var Location, Token, QueryDocumentKeys, kindValues, OperationTypeNode;
var init_ast = __esm({
  "node_modules/graphql/language/ast.mjs"() {
    "use strict";
    Location = class {
      /**
       * The character offset at which this Node begins.
       */
      /**
       * The character offset at which this Node ends.
       */
      /**
       * The Token at which this Node begins.
       */
      /**
       * The Token at which this Node ends.
       */
      /**
       * The Source document the AST represents.
       */
      constructor(startToken, endToken, source) {
        this.start = startToken.start;
        this.end = endToken.end;
        this.startToken = startToken;
        this.endToken = endToken;
        this.source = source;
      }
      get [Symbol.toStringTag]() {
        return "Location";
      }
      toJSON() {
        return {
          start: this.start,
          end: this.end
        };
      }
    };
    Token = class {
      /**
       * The kind of Token.
       */
      /**
       * The character offset at which this Node begins.
       */
      /**
       * The character offset at which this Node ends.
       */
      /**
       * The 1-indexed line number on which this Token appears.
       */
      /**
       * The 1-indexed column number at which this Token begins.
       */
      /**
       * For non-punctuation tokens, represents the interpreted value of the token.
       *
       * Note: is undefined for punctuation tokens, but typed as string for
       * convenience in the parser.
       */
      /**
       * Tokens exist as nodes in a double-linked-list amongst all tokens
       * including ignored tokens. <SOF> is always the first node and <EOF>
       * the last.
       */
      constructor(kind, start, end, line, column, value) {
        this.kind = kind;
        this.start = start;
        this.end = end;
        this.line = line;
        this.column = column;
        this.value = value;
        this.prev = null;
        this.next = null;
      }
      get [Symbol.toStringTag]() {
        return "Token";
      }
      toJSON() {
        return {
          kind: this.kind,
          value: this.value,
          line: this.line,
          column: this.column
        };
      }
    };
    QueryDocumentKeys = {
      Name: [],
      Document: ["definitions"],
      OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
      VariableDefinition: ["variable", "type", "defaultValue", "directives"],
      Variable: ["name"],
      SelectionSet: ["selections"],
      Field: ["alias", "name", "arguments", "directives", "selectionSet"],
      Argument: ["name", "value"],
      FragmentSpread: ["name", "directives"],
      InlineFragment: ["typeCondition", "directives", "selectionSet"],
      FragmentDefinition: [
        "name",
        // Note: fragment variable definitions are deprecated and will removed in v17.0.0
        "variableDefinitions",
        "typeCondition",
        "directives",
        "selectionSet"
      ],
      IntValue: [],
      FloatValue: [],
      StringValue: [],
      BooleanValue: [],
      NullValue: [],
      EnumValue: [],
      ListValue: ["values"],
      ObjectValue: ["fields"],
      ObjectField: ["name", "value"],
      Directive: ["name", "arguments"],
      NamedType: ["name"],
      ListType: ["type"],
      NonNullType: ["type"],
      SchemaDefinition: ["description", "directives", "operationTypes"],
      OperationTypeDefinition: ["type"],
      ScalarTypeDefinition: ["description", "name", "directives"],
      ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
      FieldDefinition: ["description", "name", "arguments", "type", "directives"],
      InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
      InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
      UnionTypeDefinition: ["description", "name", "directives", "types"],
      EnumTypeDefinition: ["description", "name", "directives", "values"],
      EnumValueDefinition: ["description", "name", "directives"],
      InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
      DirectiveDefinition: ["description", "name", "arguments", "locations"],
      SchemaExtension: ["directives", "operationTypes"],
      ScalarTypeExtension: ["name", "directives"],
      ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
      InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
      UnionTypeExtension: ["name", "directives", "types"],
      EnumTypeExtension: ["name", "directives", "values"],
      InputObjectTypeExtension: ["name", "directives", "fields"]
    };
    kindValues = new Set(Object.keys(QueryDocumentKeys));
    (function(OperationTypeNode2) {
      OperationTypeNode2["QUERY"] = "query";
      OperationTypeNode2["MUTATION"] = "mutation";
      OperationTypeNode2["SUBSCRIPTION"] = "subscription";
    })(OperationTypeNode || (OperationTypeNode = {}));
  }
});

// node_modules/graphql/language/kinds.mjs
var Kind;
var init_kinds = __esm({
  "node_modules/graphql/language/kinds.mjs"() {
    "use strict";
    (function(Kind2) {
      Kind2["NAME"] = "Name";
      Kind2["DOCUMENT"] = "Document";
      Kind2["OPERATION_DEFINITION"] = "OperationDefinition";
      Kind2["VARIABLE_DEFINITION"] = "VariableDefinition";
      Kind2["SELECTION_SET"] = "SelectionSet";
      Kind2["FIELD"] = "Field";
      Kind2["ARGUMENT"] = "Argument";
      Kind2["FRAGMENT_SPREAD"] = "FragmentSpread";
      Kind2["INLINE_FRAGMENT"] = "InlineFragment";
      Kind2["FRAGMENT_DEFINITION"] = "FragmentDefinition";
      Kind2["VARIABLE"] = "Variable";
      Kind2["INT"] = "IntValue";
      Kind2["FLOAT"] = "FloatValue";
      Kind2["STRING"] = "StringValue";
      Kind2["BOOLEAN"] = "BooleanValue";
      Kind2["NULL"] = "NullValue";
      Kind2["ENUM"] = "EnumValue";
      Kind2["LIST"] = "ListValue";
      Kind2["OBJECT"] = "ObjectValue";
      Kind2["OBJECT_FIELD"] = "ObjectField";
      Kind2["DIRECTIVE"] = "Directive";
      Kind2["NAMED_TYPE"] = "NamedType";
      Kind2["LIST_TYPE"] = "ListType";
      Kind2["NON_NULL_TYPE"] = "NonNullType";
      Kind2["SCHEMA_DEFINITION"] = "SchemaDefinition";
      Kind2["OPERATION_TYPE_DEFINITION"] = "OperationTypeDefinition";
      Kind2["SCALAR_TYPE_DEFINITION"] = "ScalarTypeDefinition";
      Kind2["OBJECT_TYPE_DEFINITION"] = "ObjectTypeDefinition";
      Kind2["FIELD_DEFINITION"] = "FieldDefinition";
      Kind2["INPUT_VALUE_DEFINITION"] = "InputValueDefinition";
      Kind2["INTERFACE_TYPE_DEFINITION"] = "InterfaceTypeDefinition";
      Kind2["UNION_TYPE_DEFINITION"] = "UnionTypeDefinition";
      Kind2["ENUM_TYPE_DEFINITION"] = "EnumTypeDefinition";
      Kind2["ENUM_VALUE_DEFINITION"] = "EnumValueDefinition";
      Kind2["INPUT_OBJECT_TYPE_DEFINITION"] = "InputObjectTypeDefinition";
      Kind2["DIRECTIVE_DEFINITION"] = "DirectiveDefinition";
      Kind2["SCHEMA_EXTENSION"] = "SchemaExtension";
      Kind2["SCALAR_TYPE_EXTENSION"] = "ScalarTypeExtension";
      Kind2["OBJECT_TYPE_EXTENSION"] = "ObjectTypeExtension";
      Kind2["INTERFACE_TYPE_EXTENSION"] = "InterfaceTypeExtension";
      Kind2["UNION_TYPE_EXTENSION"] = "UnionTypeExtension";
      Kind2["ENUM_TYPE_EXTENSION"] = "EnumTypeExtension";
      Kind2["INPUT_OBJECT_TYPE_EXTENSION"] = "InputObjectTypeExtension";
    })(Kind || (Kind = {}));
  }
});

// node_modules/graphql/language/characterClasses.mjs
function isWhiteSpace(code) {
  return code === 9 || code === 32;
}
function isDigit(code) {
  return code >= 48 && code <= 57;
}
function isLetter(code) {
  return code >= 97 && code <= 122 || // A-Z
  code >= 65 && code <= 90;
}
function isNameStart(code) {
  return isLetter(code) || code === 95;
}
function isNameContinue(code) {
  return isLetter(code) || isDigit(code) || code === 95;
}
var init_characterClasses = __esm({
  "node_modules/graphql/language/characterClasses.mjs"() {
    "use strict";
  }
});

// node_modules/graphql/language/blockString.mjs
function dedentBlockStringLines(lines) {
  var _firstNonEmptyLine2;
  let commonIndent = Number.MAX_SAFE_INTEGER;
  let firstNonEmptyLine = null;
  let lastNonEmptyLine = -1;
  for (let i = 0; i < lines.length; ++i) {
    var _firstNonEmptyLine;
    const line = lines[i];
    const indent2 = leadingWhitespace(line);
    if (indent2 === line.length) {
      continue;
    }
    firstNonEmptyLine = (_firstNonEmptyLine = firstNonEmptyLine) !== null && _firstNonEmptyLine !== void 0 ? _firstNonEmptyLine : i;
    lastNonEmptyLine = i;
    if (i !== 0 && indent2 < commonIndent) {
      commonIndent = indent2;
    }
  }
  return lines.map((line, i) => i === 0 ? line : line.slice(commonIndent)).slice((_firstNonEmptyLine2 = firstNonEmptyLine) !== null && _firstNonEmptyLine2 !== void 0 ? _firstNonEmptyLine2 : 0, lastNonEmptyLine + 1);
}
function leadingWhitespace(str) {
  let i = 0;
  while (i < str.length && isWhiteSpace(str.charCodeAt(i))) {
    ++i;
  }
  return i;
}
function printBlockString(value, options) {
  const escapedValue = value.replace(/"""/g, '\\"""');
  const lines = escapedValue.split(/\r\n|[\n\r]/g);
  const isSingleLine = lines.length === 1;
  const forceLeadingNewLine = lines.length > 1 && lines.slice(1).every((line) => line.length === 0 || isWhiteSpace(line.charCodeAt(0)));
  const hasTrailingTripleQuotes = escapedValue.endsWith('\\"""');
  const hasTrailingQuote = value.endsWith('"') && !hasTrailingTripleQuotes;
  const hasTrailingSlash = value.endsWith("\\");
  const forceTrailingNewline = hasTrailingQuote || hasTrailingSlash;
  const printAsMultipleLines = !(options !== null && options !== void 0 && options.minimize) && // add leading and trailing new lines only if it improves readability
  (!isSingleLine || value.length > 70 || forceTrailingNewline || forceLeadingNewLine || hasTrailingTripleQuotes);
  let result2 = "";
  const skipLeadingNewLine = isSingleLine && isWhiteSpace(value.charCodeAt(0));
  if (printAsMultipleLines && !skipLeadingNewLine || forceLeadingNewLine) {
    result2 += "\n";
  }
  result2 += escapedValue;
  if (printAsMultipleLines || forceTrailingNewline) {
    result2 += "\n";
  }
  return '"""' + result2 + '"""';
}
var init_blockString = __esm({
  "node_modules/graphql/language/blockString.mjs"() {
    "use strict";
    init_characterClasses();
  }
});

// node_modules/graphql/jsutils/inspect.mjs
function inspect(value) {
  return formatValue(value, []);
}
function formatValue(value, seenValues) {
  switch (typeof value) {
    case "string":
      return JSON.stringify(value);
    case "function":
      return value.name ? `[function ${value.name}]` : "[function]";
    case "object":
      return formatObjectValue(value, seenValues);
    default:
      return String(value);
  }
}
function formatObjectValue(value, previouslySeenValues) {
  if (value === null) {
    return "null";
  }
  if (previouslySeenValues.includes(value)) {
    return "[Circular]";
  }
  const seenValues = [...previouslySeenValues, value];
  if (isJSONable(value)) {
    const jsonValue = value.toJSON();
    if (jsonValue !== value) {
      return typeof jsonValue === "string" ? jsonValue : formatValue(jsonValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }
  return formatObject(value, seenValues);
}
function isJSONable(value) {
  return typeof value.toJSON === "function";
}
function formatObject(object, seenValues) {
  const entries = Object.entries(object);
  if (entries.length === 0) {
    return "{}";
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return "[" + getObjectTag(object) + "]";
  }
  const properties = entries.map(([key, value]) => key + ": " + formatValue(value, seenValues));
  return "{ " + properties.join(", ") + " }";
}
function formatArray(array, seenValues) {
  if (array.length === 0) {
    return "[]";
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return "[Array]";
  }
  const len = Math.min(MAX_ARRAY_LENGTH, array.length);
  const remaining = array.length - len;
  const items = [];
  for (let i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }
  if (remaining === 1) {
    items.push("... 1 more item");
  } else if (remaining > 1) {
    items.push(`... ${remaining} more items`);
  }
  return "[" + items.join(", ") + "]";
}
function getObjectTag(object) {
  const tag = Object.prototype.toString.call(object).replace(/^\[object /, "").replace(/]$/, "");
  if (tag === "Object" && typeof object.constructor === "function") {
    const name = object.constructor.name;
    if (typeof name === "string" && name !== "") {
      return name;
    }
  }
  return tag;
}
var MAX_ARRAY_LENGTH, MAX_RECURSIVE_DEPTH;
var init_inspect = __esm({
  "node_modules/graphql/jsutils/inspect.mjs"() {
    "use strict";
    MAX_ARRAY_LENGTH = 10;
    MAX_RECURSIVE_DEPTH = 2;
  }
});

// node_modules/graphql/language/printString.mjs
function printString(str) {
  return `"${str.replace(escapedRegExp, escapedReplacer)}"`;
}
function escapedReplacer(str) {
  return escapeSequences[str.charCodeAt(0)];
}
var escapedRegExp, escapeSequences;
var init_printString = __esm({
  "node_modules/graphql/language/printString.mjs"() {
    "use strict";
    escapedRegExp = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
    escapeSequences = [
      "\\u0000",
      "\\u0001",
      "\\u0002",
      "\\u0003",
      "\\u0004",
      "\\u0005",
      "\\u0006",
      "\\u0007",
      "\\b",
      "\\t",
      "\\n",
      "\\u000B",
      "\\f",
      "\\r",
      "\\u000E",
      "\\u000F",
      "\\u0010",
      "\\u0011",
      "\\u0012",
      "\\u0013",
      "\\u0014",
      "\\u0015",
      "\\u0016",
      "\\u0017",
      "\\u0018",
      "\\u0019",
      "\\u001A",
      "\\u001B",
      "\\u001C",
      "\\u001D",
      "\\u001E",
      "\\u001F",
      "",
      "",
      '\\"',
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      // 2F
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      // 3F
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      // 4F
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "\\\\",
      "",
      "",
      "",
      // 5F
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      // 6F
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "\\u007F",
      "\\u0080",
      "\\u0081",
      "\\u0082",
      "\\u0083",
      "\\u0084",
      "\\u0085",
      "\\u0086",
      "\\u0087",
      "\\u0088",
      "\\u0089",
      "\\u008A",
      "\\u008B",
      "\\u008C",
      "\\u008D",
      "\\u008E",
      "\\u008F",
      "\\u0090",
      "\\u0091",
      "\\u0092",
      "\\u0093",
      "\\u0094",
      "\\u0095",
      "\\u0096",
      "\\u0097",
      "\\u0098",
      "\\u0099",
      "\\u009A",
      "\\u009B",
      "\\u009C",
      "\\u009D",
      "\\u009E",
      "\\u009F"
    ];
  }
});

// node_modules/graphql/language/visitor.mjs
function visit(root2, visitor, visitorKeys = QueryDocumentKeys) {
  const enterLeaveMap = /* @__PURE__ */ new Map();
  for (const kind of Object.values(Kind)) {
    enterLeaveMap.set(kind, getEnterLeaveForKind(visitor, kind));
  }
  let stack = void 0;
  let inArray = Array.isArray(root2);
  let keys = [root2];
  let index = -1;
  let edits = [];
  let node = root2;
  let key = void 0;
  let parent = void 0;
  const path = [];
  const ancestors = [];
  do {
    index++;
    const isLeaving = index === keys.length;
    const isEdited = isLeaving && edits.length !== 0;
    if (isLeaving) {
      key = ancestors.length === 0 ? void 0 : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();
      if (isEdited) {
        if (inArray) {
          node = node.slice();
          let editOffset = 0;
          for (const [editKey, editValue] of edits) {
            const arrayKey = editKey - editOffset;
            if (editValue === null) {
              node.splice(arrayKey, 1);
              editOffset++;
            } else {
              node[arrayKey] = editValue;
            }
          }
        } else {
          node = Object.defineProperties({}, Object.getOwnPropertyDescriptors(node));
          for (const [editKey, editValue] of edits) {
            node[editKey] = editValue;
          }
        }
      }
      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else if (parent) {
      key = inArray ? index : keys[index];
      node = parent[key];
      if (node === null || node === void 0) {
        continue;
      }
      path.push(key);
    }
    let result2;
    if (!Array.isArray(node)) {
      var _enterLeaveMap$get, _enterLeaveMap$get2;
      isNode(node) || devAssert(false, `Invalid AST Node: ${inspect(node)}.`);
      const visitFn = isLeaving ? (_enterLeaveMap$get = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get === void 0 ? void 0 : _enterLeaveMap$get.leave : (_enterLeaveMap$get2 = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get2 === void 0 ? void 0 : _enterLeaveMap$get2.enter;
      result2 = visitFn === null || visitFn === void 0 ? void 0 : visitFn.call(visitor, node, key, parent, path, ancestors);
      if (result2 === BREAK) {
        break;
      }
      if (result2 === false) {
        if (!isLeaving) {
          path.pop();
          continue;
        }
      } else if (result2 !== void 0) {
        edits.push([key, result2]);
        if (!isLeaving) {
          if (isNode(result2)) {
            node = result2;
          } else {
            path.pop();
            continue;
          }
        }
      }
    }
    if (result2 === void 0 && isEdited) {
      edits.push([key, node]);
    }
    if (isLeaving) {
      path.pop();
    } else {
      var _node$kind;
      stack = {
        inArray,
        index,
        keys,
        edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : (_node$kind = visitorKeys[node.kind]) !== null && _node$kind !== void 0 ? _node$kind : [];
      index = -1;
      edits = [];
      if (parent) {
        ancestors.push(parent);
      }
      parent = node;
    }
  } while (stack !== void 0);
  if (edits.length !== 0) {
    return edits[edits.length - 1][1];
  }
  return root2;
}
function getEnterLeaveForKind(visitor, kind) {
  const kindVisitor = visitor[kind];
  if (typeof kindVisitor === "object") {
    return kindVisitor;
  } else if (typeof kindVisitor === "function") {
    return {
      enter: kindVisitor,
      leave: void 0
    };
  }
  return {
    enter: visitor.enter,
    leave: visitor.leave
  };
}
var BREAK;
var init_visitor = __esm({
  "node_modules/graphql/language/visitor.mjs"() {
    "use strict";
    init_devAssert();
    init_inspect();
    init_ast();
    init_kinds();
    BREAK = Object.freeze({});
  }
});

// node_modules/graphql/language/printer.mjs
var printer_exports = {};
__export(printer_exports, {
  print: () => print
});
function print(ast) {
  return visit(ast, printDocASTReducer);
}
function join(maybeArray, separator = "") {
  var _maybeArray$filter$jo;
  return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter((x) => x).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : "";
}
function block(array) {
  return wrap2("{\n", indent(join(array, "\n")), "\n}");
}
function wrap2(start, maybeString, end = "") {
  return maybeString != null && maybeString !== "" ? start + maybeString + end : "";
}
function indent(str) {
  return wrap2("  ", str.replace(/\n/g, "\n  "));
}
function hasMultilineItems(maybeArray) {
  var _maybeArray$some;
  return (_maybeArray$some = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.some((str) => str.includes("\n"))) !== null && _maybeArray$some !== void 0 ? _maybeArray$some : false;
}
var MAX_LINE_LENGTH, printDocASTReducer;
var init_printer = __esm({
  "node_modules/graphql/language/printer.mjs"() {
    "use strict";
    init_blockString();
    init_printString();
    init_visitor();
    MAX_LINE_LENGTH = 80;
    printDocASTReducer = {
      Name: {
        leave: (node) => node.value
      },
      Variable: {
        leave: (node) => "$" + node.name
      },
      // Document
      Document: {
        leave: (node) => join(node.definitions, "\n\n")
      },
      OperationDefinition: {
        leave(node) {
          const varDefs = wrap2("(", join(node.variableDefinitions, ", "), ")");
          const prefix = join([node.operation, join([node.name, varDefs]), join(node.directives, " ")], " ");
          return (prefix === "query" ? "" : prefix + " ") + node.selectionSet;
        }
      },
      VariableDefinition: {
        leave: ({
          variable,
          type,
          defaultValue,
          directives
        }) => variable + ": " + type + wrap2(" = ", defaultValue) + wrap2(" ", join(directives, " "))
      },
      SelectionSet: {
        leave: ({
          selections
        }) => block(selections)
      },
      Field: {
        leave({
          alias,
          name,
          arguments: args,
          directives,
          selectionSet
        }) {
          const prefix = wrap2("", alias, ": ") + name;
          let argsLine = prefix + wrap2("(", join(args, ", "), ")");
          if (argsLine.length > MAX_LINE_LENGTH) {
            argsLine = prefix + wrap2("(\n", indent(join(args, "\n")), "\n)");
          }
          return join([argsLine, join(directives, " "), selectionSet], " ");
        }
      },
      Argument: {
        leave: ({
          name,
          value
        }) => name + ": " + value
      },
      // Fragments
      FragmentSpread: {
        leave: ({
          name,
          directives
        }) => "..." + name + wrap2(" ", join(directives, " "))
      },
      InlineFragment: {
        leave: ({
          typeCondition,
          directives,
          selectionSet
        }) => join(["...", wrap2("on ", typeCondition), join(directives, " "), selectionSet], " ")
      },
      FragmentDefinition: {
        leave: ({
          name,
          typeCondition,
          variableDefinitions,
          directives,
          selectionSet
        }) => (
          // or removed in the future.
          `fragment ${name}${wrap2("(", join(variableDefinitions, ", "), ")")} on ${typeCondition} ${wrap2("", join(directives, " "), " ")}` + selectionSet
        )
      },
      // Value
      IntValue: {
        leave: ({
          value
        }) => value
      },
      FloatValue: {
        leave: ({
          value
        }) => value
      },
      StringValue: {
        leave: ({
          value,
          block: isBlockString
        }) => isBlockString ? printBlockString(value) : printString(value)
      },
      BooleanValue: {
        leave: ({
          value
        }) => value ? "true" : "false"
      },
      NullValue: {
        leave: () => "null"
      },
      EnumValue: {
        leave: ({
          value
        }) => value
      },
      ListValue: {
        leave: ({
          values
        }) => "[" + join(values, ", ") + "]"
      },
      ObjectValue: {
        leave: ({
          fields
        }) => "{" + join(fields, ", ") + "}"
      },
      ObjectField: {
        leave: ({
          name,
          value
        }) => name + ": " + value
      },
      // Directive
      Directive: {
        leave: ({
          name,
          arguments: args
        }) => "@" + name + wrap2("(", join(args, ", "), ")")
      },
      // Type
      NamedType: {
        leave: ({
          name
        }) => name
      },
      ListType: {
        leave: ({
          type
        }) => "[" + type + "]"
      },
      NonNullType: {
        leave: ({
          type
        }) => type + "!"
      },
      // Type System Definitions
      SchemaDefinition: {
        leave: ({
          description,
          directives,
          operationTypes
        }) => wrap2("", description, "\n") + join(["schema", join(directives, " "), block(operationTypes)], " ")
      },
      OperationTypeDefinition: {
        leave: ({
          operation,
          type
        }) => operation + ": " + type
      },
      ScalarTypeDefinition: {
        leave: ({
          description,
          name,
          directives
        }) => wrap2("", description, "\n") + join(["scalar", name, join(directives, " ")], " ")
      },
      ObjectTypeDefinition: {
        leave: ({
          description,
          name,
          interfaces,
          directives,
          fields
        }) => wrap2("", description, "\n") + join(["type", name, wrap2("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ")
      },
      FieldDefinition: {
        leave: ({
          description,
          name,
          arguments: args,
          type,
          directives
        }) => wrap2("", description, "\n") + name + (hasMultilineItems(args) ? wrap2("(\n", indent(join(args, "\n")), "\n)") : wrap2("(", join(args, ", "), ")")) + ": " + type + wrap2(" ", join(directives, " "))
      },
      InputValueDefinition: {
        leave: ({
          description,
          name,
          type,
          defaultValue,
          directives
        }) => wrap2("", description, "\n") + join([name + ": " + type, wrap2("= ", defaultValue), join(directives, " ")], " ")
      },
      InterfaceTypeDefinition: {
        leave: ({
          description,
          name,
          interfaces,
          directives,
          fields
        }) => wrap2("", description, "\n") + join(["interface", name, wrap2("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ")
      },
      UnionTypeDefinition: {
        leave: ({
          description,
          name,
          directives,
          types
        }) => wrap2("", description, "\n") + join(["union", name, join(directives, " "), wrap2("= ", join(types, " | "))], " ")
      },
      EnumTypeDefinition: {
        leave: ({
          description,
          name,
          directives,
          values
        }) => wrap2("", description, "\n") + join(["enum", name, join(directives, " "), block(values)], " ")
      },
      EnumValueDefinition: {
        leave: ({
          description,
          name,
          directives
        }) => wrap2("", description, "\n") + join([name, join(directives, " ")], " ")
      },
      InputObjectTypeDefinition: {
        leave: ({
          description,
          name,
          directives,
          fields
        }) => wrap2("", description, "\n") + join(["input", name, join(directives, " "), block(fields)], " ")
      },
      DirectiveDefinition: {
        leave: ({
          description,
          name,
          arguments: args,
          repeatable,
          locations
        }) => wrap2("", description, "\n") + "directive @" + name + (hasMultilineItems(args) ? wrap2("(\n", indent(join(args, "\n")), "\n)") : wrap2("(", join(args, ", "), ")")) + (repeatable ? " repeatable" : "") + " on " + join(locations, " | ")
      },
      SchemaExtension: {
        leave: ({
          directives,
          operationTypes
        }) => join(["extend schema", join(directives, " "), block(operationTypes)], " ")
      },
      ScalarTypeExtension: {
        leave: ({
          name,
          directives
        }) => join(["extend scalar", name, join(directives, " ")], " ")
      },
      ObjectTypeExtension: {
        leave: ({
          name,
          interfaces,
          directives,
          fields
        }) => join(["extend type", name, wrap2("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ")
      },
      InterfaceTypeExtension: {
        leave: ({
          name,
          interfaces,
          directives,
          fields
        }) => join(["extend interface", name, wrap2("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ")
      },
      UnionTypeExtension: {
        leave: ({
          name,
          directives,
          types
        }) => join(["extend union", name, join(directives, " "), wrap2("= ", join(types, " | "))], " ")
      },
      EnumTypeExtension: {
        leave: ({
          name,
          directives,
          values
        }) => join(["extend enum", name, join(directives, " "), block(values)], " ")
      },
      InputObjectTypeExtension: {
        leave: ({
          name,
          directives,
          fields
        }) => join(["extend input", name, join(directives, " "), block(fields)], " ")
      }
    };
  }
});

// node_modules/graphql/utilities/getOperationAST.mjs
var getOperationAST_exports = {};
__export(getOperationAST_exports, {
  getOperationAST: () => getOperationAST
});
function getOperationAST(documentAST, operationName) {
  let operation = null;
  for (const definition of documentAST.definitions) {
    if (definition.kind === Kind.OPERATION_DEFINITION) {
      var _definition$name;
      if (operationName == null) {
        if (operation) {
          return null;
        }
        operation = definition;
      } else if (((_definition$name = definition.name) === null || _definition$name === void 0 ? void 0 : _definition$name.value) === operationName) {
        return definition;
      }
    }
  }
  return operation;
}
var init_getOperationAST = __esm({
  "node_modules/graphql/utilities/getOperationAST.mjs"() {
    "use strict";
    init_kinds();
  }
});

// node_modules/ts-invariant/lib/invariant.js
var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf;
var setPrototypeOf = _a === void 0 ? function(obj, proto) {
  obj.__proto__ = proto;
  return obj;
} : _a;
var InvariantError = (
  /** @class */
  function(_super) {
    __extends(InvariantError2, _super);
    function InvariantError2(message) {
      if (message === void 0) {
        message = genericMessage;
      }
      var _this = _super.call(this, typeof message === "number" ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)" : message) || this;
      _this.framesToPop = 1;
      _this.name = genericMessage;
      setPrototypeOf(_this, InvariantError2.prototype);
      return _this;
    }
    return InvariantError2;
  }(Error)
);
function invariant(condition, message) {
  if (!condition) {
    throw new InvariantError(message);
  }
}
var verbosityLevels = ["debug", "log", "warn", "error", "silent"];
var verbosityLevel = verbosityLevels.indexOf("log");
function wrapConsoleMethod(name) {
  return function() {
    if (verbosityLevels.indexOf(name) >= verbosityLevel) {
      var method = console[name] || console.log;
      return method.apply(console, arguments);
    }
  };
}
(function(invariant5) {
  invariant5.debug = wrapConsoleMethod("debug");
  invariant5.log = wrapConsoleMethod("log");
  invariant5.warn = wrapConsoleMethod("warn");
  invariant5.error = wrapConsoleMethod("error");
})(invariant || (invariant = {}));
function setVerbosity(level) {
  var old = verbosityLevels[verbosityLevel];
  verbosityLevel = Math.max(0, verbosityLevels.indexOf(level));
  return old;
}

// node_modules/@apollo/client/version.js
var version = "3.13.5";

// node_modules/@apollo/client/utilities/globals/maybe.js
function maybe(thunk) {
  try {
    return thunk();
  } catch (_a2) {
  }
}

// node_modules/@apollo/client/utilities/globals/global.js
var global_default = maybe(function() {
  return globalThis;
}) || maybe(function() {
  return window;
}) || maybe(function() {
  return self;
}) || maybe(function() {
  return global;
}) || // We don't expect the Function constructor ever to be invoked at runtime, as
// long as at least one of globalThis, window, self, or global is defined, so
// we are under no obligation to make it easy for static analysis tools to
// detect syntactic usage of the Function constructor. If you think you can
// improve your static analysis to detect this obfuscation, think again. This
// is an arms race you cannot win, at least not in JavaScript.
maybe(function() {
  return maybe.constructor("return this")();
});

// node_modules/@apollo/client/utilities/common/makeUniqueId.js
var prefixCounts = /* @__PURE__ */ new Map();
function makeUniqueId(prefix) {
  var count = prefixCounts.get(prefix) || 1;
  prefixCounts.set(prefix, count + 1);
  return "".concat(prefix, ":").concat(count, ":").concat(Math.random().toString(36).slice(2));
}

// node_modules/@apollo/client/utilities/common/stringifyForDisplay.js
function stringifyForDisplay(value, space) {
  if (space === void 0) {
    space = 0;
  }
  var undefId = makeUniqueId("stringifyForDisplay");
  return JSON.stringify(value, function(key, value2) {
    return value2 === void 0 ? undefId : value2;
  }, space).split(JSON.stringify(undefId)).join("<undefined>");
}

// node_modules/@apollo/client/utilities/globals/invariantWrappers.js
function wrap(fn) {
  return function(message) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    if (typeof message === "number") {
      var arg0 = message;
      message = getHandledErrorMsg(arg0);
      if (!message) {
        message = getFallbackErrorMsg(arg0, args);
        args = [];
      }
    }
    fn.apply(void 0, [message].concat(args));
  };
}
var invariant2 = Object.assign(function invariant3(condition, message) {
  var args = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  }
  if (!condition) {
    invariant(condition, getHandledErrorMsg(message, args) || getFallbackErrorMsg(message, args));
  }
}, {
  debug: wrap(invariant.debug),
  log: wrap(invariant.log),
  warn: wrap(invariant.warn),
  error: wrap(invariant.error)
});
function newInvariantError(message) {
  var optionalParams = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    optionalParams[_i - 1] = arguments[_i];
  }
  return new InvariantError(getHandledErrorMsg(message, optionalParams) || getFallbackErrorMsg(message, optionalParams));
}
var ApolloErrorMessageHandler = Symbol.for("ApolloErrorMessageHandler_" + version);
function stringify(arg) {
  if (typeof arg == "string") {
    return arg;
  }
  try {
    return stringifyForDisplay(arg, 2).slice(0, 1e3);
  } catch (_a2) {
    return "<non-serializable>";
  }
}
function getHandledErrorMsg(message, messageArgs) {
  if (messageArgs === void 0) {
    messageArgs = [];
  }
  if (!message) return;
  return global_default[ApolloErrorMessageHandler] && global_default[ApolloErrorMessageHandler](message, messageArgs.map(stringify));
}
function getFallbackErrorMsg(message, messageArgs) {
  if (messageArgs === void 0) {
    messageArgs = [];
  }
  if (!message) return;
  return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
    version,
    message,
    args: messageArgs.map(stringify)
  })));
}

// node_modules/@apollo/client/utilities/globals/index.js
var DEV = globalThis.__DEV__ !== false;

// node_modules/@apollo/client/utilities/common/objects.js
function isNonNullObject(obj) {
  return obj !== null && typeof obj === "object";
}

// node_modules/graphql/jsutils/isObjectLike.mjs
function isObjectLike(value) {
  return typeof value == "object" && value !== null;
}

// node_modules/graphql/jsutils/invariant.mjs
function invariant4(condition, message) {
  const booleanCondition = Boolean(condition);
  if (!booleanCondition) {
    throw new Error(message != null ? message : "Unexpected invariant triggered.");
  }
}

// node_modules/graphql/language/location.mjs
var LineRegExp = /\r\n|[\n\r]/g;
function getLocation(source, position) {
  let lastLineStart = 0;
  let line = 1;
  for (const match of source.body.matchAll(LineRegExp)) {
    typeof match.index === "number" || invariant4(false);
    if (match.index >= position) {
      break;
    }
    lastLineStart = match.index + match[0].length;
    line += 1;
  }
  return {
    line,
    column: position + 1 - lastLineStart
  };
}

// node_modules/graphql/language/printLocation.mjs
function printLocation(location) {
  return printSourceLocation(location.source, getLocation(location.source, location.start));
}
function printSourceLocation(source, sourceLocation) {
  const firstLineColumnOffset = source.locationOffset.column - 1;
  const body = "".padStart(firstLineColumnOffset) + source.body;
  const lineIndex = sourceLocation.line - 1;
  const lineOffset = source.locationOffset.line - 1;
  const lineNum = sourceLocation.line + lineOffset;
  const columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  const columnNum = sourceLocation.column + columnOffset;
  const locationStr = `${source.name}:${lineNum}:${columnNum}
`;
  const lines = body.split(/\r\n|[\n\r]/g);
  const locationLine = lines[lineIndex];
  if (locationLine.length > 120) {
    const subLineIndex = Math.floor(columnNum / 80);
    const subLineColumnNum = columnNum % 80;
    const subLines = [];
    for (let i = 0; i < locationLine.length; i += 80) {
      subLines.push(locationLine.slice(i, i + 80));
    }
    return locationStr + printPrefixedLines([[`${lineNum} |`, subLines[0]], ...subLines.slice(1, subLineIndex + 1).map((subLine) => ["|", subLine]), ["|", "^".padStart(subLineColumnNum)], ["|", subLines[subLineIndex + 1]]]);
  }
  return locationStr + printPrefixedLines([
    // Lines specified like this: ["prefix", "string"],
    [`${lineNum - 1} |`, lines[lineIndex - 1]],
    [`${lineNum} |`, locationLine],
    ["|", "^".padStart(columnNum)],
    [`${lineNum + 1} |`, lines[lineIndex + 1]]
  ]);
}
function printPrefixedLines(lines) {
  const existingLines = lines.filter(([_, line]) => line !== void 0);
  const padLen = Math.max(...existingLines.map(([prefix]) => prefix.length));
  return existingLines.map(([prefix, line]) => prefix.padStart(padLen) + (line ? " " + line : "")).join("\n");
}

// node_modules/graphql/error/GraphQLError.mjs
function toNormalizedOptions(args) {
  const firstArg = args[0];
  if (firstArg == null || "kind" in firstArg || "length" in firstArg) {
    return {
      nodes: firstArg,
      source: args[1],
      positions: args[2],
      path: args[3],
      originalError: args[4],
      extensions: args[5]
    };
  }
  return firstArg;
}
var GraphQLError = class _GraphQLError extends Error {
  /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */
  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */
  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */
  /**
   * The original error thrown from a field resolver during execution.
   */
  /**
   * Extension fields to add to the formatted error.
   */
  /**
   * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
   */
  constructor(message, ...rawArgs) {
    var _this$nodes, _nodeLocations$, _ref;
    const {
      nodes,
      source,
      positions,
      path,
      originalError,
      extensions
    } = toNormalizedOptions(rawArgs);
    super(message);
    this.name = "GraphQLError";
    this.path = path !== null && path !== void 0 ? path : void 0;
    this.originalError = originalError !== null && originalError !== void 0 ? originalError : void 0;
    this.nodes = undefinedIfEmpty(Array.isArray(nodes) ? nodes : nodes ? [nodes] : void 0);
    const nodeLocations = undefinedIfEmpty((_this$nodes = this.nodes) === null || _this$nodes === void 0 ? void 0 : _this$nodes.map((node) => node.loc).filter((loc) => loc != null));
    this.source = source !== null && source !== void 0 ? source : nodeLocations === null || nodeLocations === void 0 ? void 0 : (_nodeLocations$ = nodeLocations[0]) === null || _nodeLocations$ === void 0 ? void 0 : _nodeLocations$.source;
    this.positions = positions !== null && positions !== void 0 ? positions : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc) => loc.start);
    this.locations = positions && source ? positions.map((pos) => getLocation(source, pos)) : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc) => getLocation(loc.source, loc.start));
    const originalExtensions = isObjectLike(originalError === null || originalError === void 0 ? void 0 : originalError.extensions) ? originalError === null || originalError === void 0 ? void 0 : originalError.extensions : void 0;
    this.extensions = (_ref = extensions !== null && extensions !== void 0 ? extensions : originalExtensions) !== null && _ref !== void 0 ? _ref : /* @__PURE__ */ Object.create(null);
    Object.defineProperties(this, {
      message: {
        writable: true,
        enumerable: true
      },
      name: {
        enumerable: false
      },
      nodes: {
        enumerable: false
      },
      source: {
        enumerable: false
      },
      positions: {
        enumerable: false
      },
      originalError: {
        enumerable: false
      }
    });
    if (originalError !== null && originalError !== void 0 && originalError.stack) {
      Object.defineProperty(this, "stack", {
        value: originalError.stack,
        writable: true,
        configurable: true
      });
    } else if (Error.captureStackTrace) {
      Error.captureStackTrace(this, _GraphQLError);
    } else {
      Object.defineProperty(this, "stack", {
        value: Error().stack,
        writable: true,
        configurable: true
      });
    }
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
  toString() {
    let output = this.message;
    if (this.nodes) {
      for (const node of this.nodes) {
        if (node.loc) {
          output += "\n\n" + printLocation(node.loc);
        }
      }
    } else if (this.source && this.locations) {
      for (const location of this.locations) {
        output += "\n\n" + printSourceLocation(this.source, location);
      }
    }
    return output;
  }
  toJSON() {
    const formattedError = {
      message: this.message
    };
    if (this.locations != null) {
      formattedError.locations = this.locations;
    }
    if (this.path != null) {
      formattedError.path = this.path;
    }
    if (this.extensions != null && Object.keys(this.extensions).length > 0) {
      formattedError.extensions = this.extensions;
    }
    return formattedError;
  }
};
function undefinedIfEmpty(array) {
  return array === void 0 || array.length === 0 ? void 0 : array;
}

// node_modules/graphql/error/syntaxError.mjs
function syntaxError(source, position, description) {
  return new GraphQLError(`Syntax Error: ${description}`, {
    source,
    positions: [position]
  });
}

// node_modules/graphql/language/parser.mjs
init_ast();

// node_modules/graphql/language/directiveLocation.mjs
var DirectiveLocation;
(function(DirectiveLocation2) {
  DirectiveLocation2["QUERY"] = "QUERY";
  DirectiveLocation2["MUTATION"] = "MUTATION";
  DirectiveLocation2["SUBSCRIPTION"] = "SUBSCRIPTION";
  DirectiveLocation2["FIELD"] = "FIELD";
  DirectiveLocation2["FRAGMENT_DEFINITION"] = "FRAGMENT_DEFINITION";
  DirectiveLocation2["FRAGMENT_SPREAD"] = "FRAGMENT_SPREAD";
  DirectiveLocation2["INLINE_FRAGMENT"] = "INLINE_FRAGMENT";
  DirectiveLocation2["VARIABLE_DEFINITION"] = "VARIABLE_DEFINITION";
  DirectiveLocation2["SCHEMA"] = "SCHEMA";
  DirectiveLocation2["SCALAR"] = "SCALAR";
  DirectiveLocation2["OBJECT"] = "OBJECT";
  DirectiveLocation2["FIELD_DEFINITION"] = "FIELD_DEFINITION";
  DirectiveLocation2["ARGUMENT_DEFINITION"] = "ARGUMENT_DEFINITION";
  DirectiveLocation2["INTERFACE"] = "INTERFACE";
  DirectiveLocation2["UNION"] = "UNION";
  DirectiveLocation2["ENUM"] = "ENUM";
  DirectiveLocation2["ENUM_VALUE"] = "ENUM_VALUE";
  DirectiveLocation2["INPUT_OBJECT"] = "INPUT_OBJECT";
  DirectiveLocation2["INPUT_FIELD_DEFINITION"] = "INPUT_FIELD_DEFINITION";
})(DirectiveLocation || (DirectiveLocation = {}));

// node_modules/graphql/language/parser.mjs
init_kinds();

// node_modules/graphql/language/lexer.mjs
init_ast();
init_blockString();
init_characterClasses();

// node_modules/graphql/language/tokenKind.mjs
var TokenKind;
(function(TokenKind2) {
  TokenKind2["SOF"] = "<SOF>";
  TokenKind2["EOF"] = "<EOF>";
  TokenKind2["BANG"] = "!";
  TokenKind2["DOLLAR"] = "$";
  TokenKind2["AMP"] = "&";
  TokenKind2["PAREN_L"] = "(";
  TokenKind2["PAREN_R"] = ")";
  TokenKind2["SPREAD"] = "...";
  TokenKind2["COLON"] = ":";
  TokenKind2["EQUALS"] = "=";
  TokenKind2["AT"] = "@";
  TokenKind2["BRACKET_L"] = "[";
  TokenKind2["BRACKET_R"] = "]";
  TokenKind2["BRACE_L"] = "{";
  TokenKind2["PIPE"] = "|";
  TokenKind2["BRACE_R"] = "}";
  TokenKind2["NAME"] = "Name";
  TokenKind2["INT"] = "Int";
  TokenKind2["FLOAT"] = "Float";
  TokenKind2["STRING"] = "String";
  TokenKind2["BLOCK_STRING"] = "BlockString";
  TokenKind2["COMMENT"] = "Comment";
})(TokenKind || (TokenKind = {}));

// node_modules/graphql/language/lexer.mjs
var Lexer = class {
  /**
   * The previously focused non-ignored token.
   */
  /**
   * The currently focused non-ignored token.
   */
  /**
   * The (1-indexed) line containing the current token.
   */
  /**
   * The character offset at which the current line begins.
   */
  constructor(source) {
    const startOfFileToken = new Token(TokenKind.SOF, 0, 0, 0, 0);
    this.source = source;
    this.lastToken = startOfFileToken;
    this.token = startOfFileToken;
    this.line = 1;
    this.lineStart = 0;
  }
  get [Symbol.toStringTag]() {
    return "Lexer";
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */
  advance() {
    this.lastToken = this.token;
    const token = this.token = this.lookahead();
    return token;
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */
  lookahead() {
    let token = this.token;
    if (token.kind !== TokenKind.EOF) {
      do {
        if (token.next) {
          token = token.next;
        } else {
          const nextToken = readNextToken(this, token.end);
          token.next = nextToken;
          nextToken.prev = token;
          token = nextToken;
        }
      } while (token.kind === TokenKind.COMMENT);
    }
    return token;
  }
};
function isPunctuatorTokenKind(kind) {
  return kind === TokenKind.BANG || kind === TokenKind.DOLLAR || kind === TokenKind.AMP || kind === TokenKind.PAREN_L || kind === TokenKind.PAREN_R || kind === TokenKind.SPREAD || kind === TokenKind.COLON || kind === TokenKind.EQUALS || kind === TokenKind.AT || kind === TokenKind.BRACKET_L || kind === TokenKind.BRACKET_R || kind === TokenKind.BRACE_L || kind === TokenKind.PIPE || kind === TokenKind.BRACE_R;
}
function isUnicodeScalarValue(code) {
  return code >= 0 && code <= 55295 || code >= 57344 && code <= 1114111;
}
function isSupplementaryCodePoint(body, location) {
  return isLeadingSurrogate(body.charCodeAt(location)) && isTrailingSurrogate(body.charCodeAt(location + 1));
}
function isLeadingSurrogate(code) {
  return code >= 55296 && code <= 56319;
}
function isTrailingSurrogate(code) {
  return code >= 56320 && code <= 57343;
}
function printCodePointAt(lexer, location) {
  const code = lexer.source.body.codePointAt(location);
  if (code === void 0) {
    return TokenKind.EOF;
  } else if (code >= 32 && code <= 126) {
    const char = String.fromCodePoint(code);
    return char === '"' ? `'"'` : `"${char}"`;
  }
  return "U+" + code.toString(16).toUpperCase().padStart(4, "0");
}
function createToken(lexer, kind, start, end, value) {
  const line = lexer.line;
  const col = 1 + start - lexer.lineStart;
  return new Token(kind, start, end, line, col, value);
}
function readNextToken(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start;
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    switch (code) {
      // Ignored ::
      //   - UnicodeBOM
      //   - WhiteSpace
      //   - LineTerminator
      //   - Comment
      //   - Comma
      //
      // UnicodeBOM :: "Byte Order Mark (U+FEFF)"
      //
      // WhiteSpace ::
      //   - "Horizontal Tab (U+0009)"
      //   - "Space (U+0020)"
      //
      // Comma :: ,
      case 65279:
      // <BOM>
      case 9:
      // \t
      case 32:
      // <space>
      case 44:
        ++position;
        continue;
      // LineTerminator ::
      //   - "New Line (U+000A)"
      //   - "Carriage Return (U+000D)" [lookahead != "New Line (U+000A)"]
      //   - "Carriage Return (U+000D)" "New Line (U+000A)"
      case 10:
        ++position;
        ++lexer.line;
        lexer.lineStart = position;
        continue;
      case 13:
        if (body.charCodeAt(position + 1) === 10) {
          position += 2;
        } else {
          ++position;
        }
        ++lexer.line;
        lexer.lineStart = position;
        continue;
      // Comment
      case 35:
        return readComment(lexer, position);
      // Token ::
      //   - Punctuator
      //   - Name
      //   - IntValue
      //   - FloatValue
      //   - StringValue
      //
      // Punctuator :: one of ! $ & ( ) ... : = @ [ ] { | }
      case 33:
        return createToken(lexer, TokenKind.BANG, position, position + 1);
      case 36:
        return createToken(lexer, TokenKind.DOLLAR, position, position + 1);
      case 38:
        return createToken(lexer, TokenKind.AMP, position, position + 1);
      case 40:
        return createToken(lexer, TokenKind.PAREN_L, position, position + 1);
      case 41:
        return createToken(lexer, TokenKind.PAREN_R, position, position + 1);
      case 46:
        if (body.charCodeAt(position + 1) === 46 && body.charCodeAt(position + 2) === 46) {
          return createToken(lexer, TokenKind.SPREAD, position, position + 3);
        }
        break;
      case 58:
        return createToken(lexer, TokenKind.COLON, position, position + 1);
      case 61:
        return createToken(lexer, TokenKind.EQUALS, position, position + 1);
      case 64:
        return createToken(lexer, TokenKind.AT, position, position + 1);
      case 91:
        return createToken(lexer, TokenKind.BRACKET_L, position, position + 1);
      case 93:
        return createToken(lexer, TokenKind.BRACKET_R, position, position + 1);
      case 123:
        return createToken(lexer, TokenKind.BRACE_L, position, position + 1);
      case 124:
        return createToken(lexer, TokenKind.PIPE, position, position + 1);
      case 125:
        return createToken(lexer, TokenKind.BRACE_R, position, position + 1);
      // StringValue
      case 34:
        if (body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
          return readBlockString(lexer, position);
        }
        return readString(lexer, position);
    }
    if (isDigit(code) || code === 45) {
      return readNumber(lexer, position, code);
    }
    if (isNameStart(code)) {
      return readName(lexer, position);
    }
    throw syntaxError(lexer.source, position, code === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : isUnicodeScalarValue(code) || isSupplementaryCodePoint(body, position) ? `Unexpected character: ${printCodePointAt(lexer, position)}.` : `Invalid character: ${printCodePointAt(lexer, position)}.`);
  }
  return createToken(lexer, TokenKind.EOF, bodyLength, bodyLength);
}
function readComment(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (code === 10 || code === 13) {
      break;
    }
    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      break;
    }
  }
  return createToken(lexer, TokenKind.COMMENT, start, position, body.slice(start + 1, position));
}
function readNumber(lexer, start, firstCode) {
  const body = lexer.source.body;
  let position = start;
  let code = firstCode;
  let isFloat = false;
  if (code === 45) {
    code = body.charCodeAt(++position);
  }
  if (code === 48) {
    code = body.charCodeAt(++position);
    if (isDigit(code)) {
      throw syntaxError(lexer.source, position, `Invalid number, unexpected digit after 0: ${printCodePointAt(lexer, position)}.`);
    }
  } else {
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  }
  if (code === 46) {
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  }
  if (code === 69 || code === 101) {
    isFloat = true;
    code = body.charCodeAt(++position);
    if (code === 43 || code === 45) {
      code = body.charCodeAt(++position);
    }
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  }
  if (code === 46 || isNameStart(code)) {
    throw syntaxError(lexer.source, position, `Invalid number, expected digit but got: ${printCodePointAt(lexer, position)}.`);
  }
  return createToken(lexer, isFloat ? TokenKind.FLOAT : TokenKind.INT, start, position, body.slice(start, position));
}
function readDigits(lexer, start, firstCode) {
  if (!isDigit(firstCode)) {
    throw syntaxError(lexer.source, start, `Invalid number, expected digit but got: ${printCodePointAt(lexer, start)}.`);
  }
  const body = lexer.source.body;
  let position = start + 1;
  while (isDigit(body.charCodeAt(position))) {
    ++position;
  }
  return position;
}
function readString(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  let chunkStart = position;
  let value = "";
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (code === 34) {
      value += body.slice(chunkStart, position);
      return createToken(lexer, TokenKind.STRING, start, position + 1, value);
    }
    if (code === 92) {
      value += body.slice(chunkStart, position);
      const escape = body.charCodeAt(position + 1) === 117 ? body.charCodeAt(position + 2) === 123 ? readEscapedUnicodeVariableWidth(lexer, position) : readEscapedUnicodeFixedWidth(lexer, position) : readEscapedCharacter(lexer, position);
      value += escape.value;
      position += escape.size;
      chunkStart = position;
      continue;
    }
    if (code === 10 || code === 13) {
      break;
    }
    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      throw syntaxError(lexer.source, position, `Invalid character within String: ${printCodePointAt(lexer, position)}.`);
    }
  }
  throw syntaxError(lexer.source, position, "Unterminated string.");
}
function readEscapedUnicodeVariableWidth(lexer, position) {
  const body = lexer.source.body;
  let point = 0;
  let size = 3;
  while (size < 12) {
    const code = body.charCodeAt(position + size++);
    if (code === 125) {
      if (size < 5 || !isUnicodeScalarValue(point)) {
        break;
      }
      return {
        value: String.fromCodePoint(point),
        size
      };
    }
    point = point << 4 | readHexDigit(code);
    if (point < 0) {
      break;
    }
  }
  throw syntaxError(lexer.source, position, `Invalid Unicode escape sequence: "${body.slice(position, position + size)}".`);
}
function readEscapedUnicodeFixedWidth(lexer, position) {
  const body = lexer.source.body;
  const code = read16BitHexCode(body, position + 2);
  if (isUnicodeScalarValue(code)) {
    return {
      value: String.fromCodePoint(code),
      size: 6
    };
  }
  if (isLeadingSurrogate(code)) {
    if (body.charCodeAt(position + 6) === 92 && body.charCodeAt(position + 7) === 117) {
      const trailingCode = read16BitHexCode(body, position + 8);
      if (isTrailingSurrogate(trailingCode)) {
        return {
          value: String.fromCodePoint(code, trailingCode),
          size: 12
        };
      }
    }
  }
  throw syntaxError(lexer.source, position, `Invalid Unicode escape sequence: "${body.slice(position, position + 6)}".`);
}
function read16BitHexCode(body, position) {
  return readHexDigit(body.charCodeAt(position)) << 12 | readHexDigit(body.charCodeAt(position + 1)) << 8 | readHexDigit(body.charCodeAt(position + 2)) << 4 | readHexDigit(body.charCodeAt(position + 3));
}
function readHexDigit(code) {
  return code >= 48 && code <= 57 ? code - 48 : code >= 65 && code <= 70 ? code - 55 : code >= 97 && code <= 102 ? code - 87 : -1;
}
function readEscapedCharacter(lexer, position) {
  const body = lexer.source.body;
  const code = body.charCodeAt(position + 1);
  switch (code) {
    case 34:
      return {
        value: '"',
        size: 2
      };
    case 92:
      return {
        value: "\\",
        size: 2
      };
    case 47:
      return {
        value: "/",
        size: 2
      };
    case 98:
      return {
        value: "\b",
        size: 2
      };
    case 102:
      return {
        value: "\f",
        size: 2
      };
    case 110:
      return {
        value: "\n",
        size: 2
      };
    case 114:
      return {
        value: "\r",
        size: 2
      };
    case 116:
      return {
        value: "	",
        size: 2
      };
  }
  throw syntaxError(lexer.source, position, `Invalid character escape sequence: "${body.slice(position, position + 2)}".`);
}
function readBlockString(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let lineStart = lexer.lineStart;
  let position = start + 3;
  let chunkStart = position;
  let currentLine = "";
  const blockLines = [];
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
      currentLine += body.slice(chunkStart, position);
      blockLines.push(currentLine);
      const token = createToken(
        lexer,
        TokenKind.BLOCK_STRING,
        start,
        position + 3,
        // Return a string of the lines joined with U+000A.
        dedentBlockStringLines(blockLines).join("\n")
      );
      lexer.line += blockLines.length - 1;
      lexer.lineStart = lineStart;
      return token;
    }
    if (code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
      currentLine += body.slice(chunkStart, position);
      chunkStart = position + 1;
      position += 4;
      continue;
    }
    if (code === 10 || code === 13) {
      currentLine += body.slice(chunkStart, position);
      blockLines.push(currentLine);
      if (code === 13 && body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }
      currentLine = "";
      chunkStart = position;
      lineStart = position;
      continue;
    }
    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      throw syntaxError(lexer.source, position, `Invalid character within String: ${printCodePointAt(lexer, position)}.`);
    }
  }
  throw syntaxError(lexer.source, position, "Unterminated string.");
}
function readName(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (isNameContinue(code)) {
      ++position;
    } else {
      break;
    }
  }
  return createToken(lexer, TokenKind.NAME, start, position, body.slice(start, position));
}

// node_modules/graphql/language/source.mjs
init_devAssert();
init_inspect();

// node_modules/graphql/jsutils/instanceOf.mjs
init_inspect();
var isProduction = globalThis.process && // eslint-disable-next-line no-undef
false;
var instanceOf = (
  /* c8 ignore next 6 */
  // FIXME: https://github.com/graphql/graphql-js/issues/2317
  isProduction ? function instanceOf2(value, constructor) {
    return value instanceof constructor;
  } : function instanceOf3(value, constructor) {
    if (value instanceof constructor) {
      return true;
    }
    if (typeof value === "object" && value !== null) {
      var _value$constructor;
      const className = constructor.prototype[Symbol.toStringTag];
      const valueClassName = (
        // We still need to support constructor's name to detect conflicts with older versions of this library.
        Symbol.toStringTag in value ? value[Symbol.toStringTag] : (_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor.name
      );
      if (className === valueClassName) {
        const stringifiedValue = inspect(value);
        throw new Error(`Cannot use ${className} "${stringifiedValue}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
      }
    }
    return false;
  }
);

// node_modules/graphql/language/source.mjs
var Source = class {
  constructor(body, name = "GraphQL request", locationOffset = {
    line: 1,
    column: 1
  }) {
    typeof body === "string" || devAssert(false, `Body must be a string. Received: ${inspect(body)}.`);
    this.body = body;
    this.name = name;
    this.locationOffset = locationOffset;
    this.locationOffset.line > 0 || devAssert(false, "line in locationOffset is 1-indexed and must be positive.");
    this.locationOffset.column > 0 || devAssert(false, "column in locationOffset is 1-indexed and must be positive.");
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
};
function isSource(source) {
  return instanceOf(source, Source);
}

// node_modules/graphql/language/parser.mjs
function parse(source, options) {
  const parser = new Parser(source, options);
  const document = parser.parseDocument();
  Object.defineProperty(document, "tokenCount", {
    enumerable: false,
    value: parser.tokenCount
  });
  return document;
}
var Parser = class {
  constructor(source, options = {}) {
    const sourceObj = isSource(source) ? source : new Source(source);
    this._lexer = new Lexer(sourceObj);
    this._options = options;
    this._tokenCounter = 0;
  }
  get tokenCount() {
    return this._tokenCounter;
  }
  /**
   * Converts a name lex token into a name parse node.
   */
  parseName() {
    const token = this.expectToken(TokenKind.NAME);
    return this.node(token, {
      kind: Kind.NAME,
      value: token.value
    });
  }
  // Implements the parsing rules in the Document section.
  /**
   * Document : Definition+
   */
  parseDocument() {
    return this.node(this._lexer.token, {
      kind: Kind.DOCUMENT,
      definitions: this.many(TokenKind.SOF, this.parseDefinition, TokenKind.EOF)
    });
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   *
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  parseDefinition() {
    if (this.peek(TokenKind.BRACE_L)) {
      return this.parseOperationDefinition();
    }
    const hasDescription = this.peekDescription();
    const keywordToken = hasDescription ? this._lexer.lookahead() : this._lexer.token;
    if (keywordToken.kind === TokenKind.NAME) {
      switch (keywordToken.value) {
        case "schema":
          return this.parseSchemaDefinition();
        case "scalar":
          return this.parseScalarTypeDefinition();
        case "type":
          return this.parseObjectTypeDefinition();
        case "interface":
          return this.parseInterfaceTypeDefinition();
        case "union":
          return this.parseUnionTypeDefinition();
        case "enum":
          return this.parseEnumTypeDefinition();
        case "input":
          return this.parseInputObjectTypeDefinition();
        case "directive":
          return this.parseDirectiveDefinition();
      }
      if (hasDescription) {
        throw syntaxError(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are supported only on type definitions.");
      }
      switch (keywordToken.value) {
        case "query":
        case "mutation":
        case "subscription":
          return this.parseOperationDefinition();
        case "fragment":
          return this.parseFragmentDefinition();
        case "extend":
          return this.parseTypeSystemExtension();
      }
    }
    throw this.unexpected(keywordToken);
  }
  // Implements the parsing rules in the Operations section.
  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  parseOperationDefinition() {
    const start = this._lexer.token;
    if (this.peek(TokenKind.BRACE_L)) {
      return this.node(start, {
        kind: Kind.OPERATION_DEFINITION,
        operation: OperationTypeNode.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet()
      });
    }
    const operation = this.parseOperationType();
    let name;
    if (this.peek(TokenKind.NAME)) {
      name = this.parseName();
    }
    return this.node(start, {
      kind: Kind.OPERATION_DEFINITION,
      operation,
      name,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * OperationType : one of query mutation subscription
   */
  parseOperationType() {
    const operationToken = this.expectToken(TokenKind.NAME);
    switch (operationToken.value) {
      case "query":
        return OperationTypeNode.QUERY;
      case "mutation":
        return OperationTypeNode.MUTATION;
      case "subscription":
        return OperationTypeNode.SUBSCRIPTION;
    }
    throw this.unexpected(operationToken);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  parseVariableDefinitions() {
    return this.optionalMany(TokenKind.PAREN_L, this.parseVariableDefinition, TokenKind.PAREN_R);
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: Kind.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(TokenKind.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(TokenKind.EQUALS) ? this.parseConstValueLiteral() : void 0,
      directives: this.parseConstDirectives()
    });
  }
  /**
   * Variable : $ Name
   */
  parseVariable() {
    const start = this._lexer.token;
    this.expectToken(TokenKind.DOLLAR);
    return this.node(start, {
      kind: Kind.VARIABLE,
      name: this.parseName()
    });
  }
  /**
   * ```
   * SelectionSet : { Selection+ }
   * ```
   */
  parseSelectionSet() {
    return this.node(this._lexer.token, {
      kind: Kind.SELECTION_SET,
      selections: this.many(TokenKind.BRACE_L, this.parseSelection, TokenKind.BRACE_R)
    });
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  parseSelection() {
    return this.peek(TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  parseField() {
    const start = this._lexer.token;
    const nameOrAlias = this.parseName();
    let alias;
    let name;
    if (this.expectOptionalToken(TokenKind.COLON)) {
      alias = nameOrAlias;
      name = this.parseName();
    } else {
      name = nameOrAlias;
    }
    return this.node(start, {
      kind: Kind.FIELD,
      alias,
      name,
      arguments: this.parseArguments(false),
      directives: this.parseDirectives(false),
      selectionSet: this.peek(TokenKind.BRACE_L) ? this.parseSelectionSet() : void 0
    });
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  parseArguments(isConst) {
    const item = isConst ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(TokenKind.PAREN_L, item, TokenKind.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  parseArgument(isConst = false) {
    const start = this._lexer.token;
    const name = this.parseName();
    this.expectToken(TokenKind.COLON);
    return this.node(start, {
      kind: Kind.ARGUMENT,
      name,
      value: this.parseValueLiteral(isConst)
    });
  }
  parseConstArgument() {
    return this.parseArgument(true);
  }
  // Implements the parsing rules in the Fragments section.
  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  parseFragment() {
    const start = this._lexer.token;
    this.expectToken(TokenKind.SPREAD);
    const hasTypeCondition = this.expectOptionalKeyword("on");
    if (!hasTypeCondition && this.peek(TokenKind.NAME)) {
      return this.node(start, {
        kind: Kind.FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(false)
      });
    }
    return this.node(start, {
      kind: Kind.INLINE_FRAGMENT,
      typeCondition: hasTypeCondition ? this.parseNamedType() : void 0,
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  parseFragmentDefinition() {
    const start = this._lexer.token;
    this.expectKeyword("fragment");
    if (this._options.allowLegacyFragmentVariables === true) {
      return this.node(start, {
        kind: Kind.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet()
      });
    }
    return this.node(start, {
      kind: Kind.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentName : Name but not `on`
   */
  parseFragmentName() {
    if (this._lexer.token.value === "on") {
      throw this.unexpected();
    }
    return this.parseName();
  }
  // Implements the parsing rules in the Values section.
  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseValueLiteral(isConst) {
    const token = this._lexer.token;
    switch (token.kind) {
      case TokenKind.BRACKET_L:
        return this.parseList(isConst);
      case TokenKind.BRACE_L:
        return this.parseObject(isConst);
      case TokenKind.INT:
        this.advanceLexer();
        return this.node(token, {
          kind: Kind.INT,
          value: token.value
        });
      case TokenKind.FLOAT:
        this.advanceLexer();
        return this.node(token, {
          kind: Kind.FLOAT,
          value: token.value
        });
      case TokenKind.STRING:
      case TokenKind.BLOCK_STRING:
        return this.parseStringLiteral();
      case TokenKind.NAME:
        this.advanceLexer();
        switch (token.value) {
          case "true":
            return this.node(token, {
              kind: Kind.BOOLEAN,
              value: true
            });
          case "false":
            return this.node(token, {
              kind: Kind.BOOLEAN,
              value: false
            });
          case "null":
            return this.node(token, {
              kind: Kind.NULL
            });
          default:
            return this.node(token, {
              kind: Kind.ENUM,
              value: token.value
            });
        }
      case TokenKind.DOLLAR:
        if (isConst) {
          this.expectToken(TokenKind.DOLLAR);
          if (this._lexer.token.kind === TokenKind.NAME) {
            const varName = this._lexer.token.value;
            throw syntaxError(this._lexer.source, token.start, `Unexpected variable "$${varName}" in constant value.`);
          } else {
            throw this.unexpected(token);
          }
        }
        return this.parseVariable();
      default:
        throw this.unexpected();
    }
  }
  parseConstValueLiteral() {
    return this.parseValueLiteral(true);
  }
  parseStringLiteral() {
    const token = this._lexer.token;
    this.advanceLexer();
    return this.node(token, {
      kind: Kind.STRING,
      value: token.value,
      block: token.kind === TokenKind.BLOCK_STRING
    });
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  parseList(isConst) {
    const item = () => this.parseValueLiteral(isConst);
    return this.node(this._lexer.token, {
      kind: Kind.LIST,
      values: this.any(TokenKind.BRACKET_L, item, TokenKind.BRACKET_R)
    });
  }
  /**
   * ```
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   * ```
   */
  parseObject(isConst) {
    const item = () => this.parseObjectField(isConst);
    return this.node(this._lexer.token, {
      kind: Kind.OBJECT,
      fields: this.any(TokenKind.BRACE_L, item, TokenKind.BRACE_R)
    });
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  parseObjectField(isConst) {
    const start = this._lexer.token;
    const name = this.parseName();
    this.expectToken(TokenKind.COLON);
    return this.node(start, {
      kind: Kind.OBJECT_FIELD,
      name,
      value: this.parseValueLiteral(isConst)
    });
  }
  // Implements the parsing rules in the Directives section.
  /**
   * Directives[Const] : Directive[?Const]+
   */
  parseDirectives(isConst) {
    const directives = [];
    while (this.peek(TokenKind.AT)) {
      directives.push(this.parseDirective(isConst));
    }
    return directives;
  }
  parseConstDirectives() {
    return this.parseDirectives(true);
  }
  /**
   * ```
   * Directive[Const] : @ Name Arguments[?Const]?
   * ```
   */
  parseDirective(isConst) {
    const start = this._lexer.token;
    this.expectToken(TokenKind.AT);
    return this.node(start, {
      kind: Kind.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(isConst)
    });
  }
  // Implements the parsing rules in the Types section.
  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  parseTypeReference() {
    const start = this._lexer.token;
    let type;
    if (this.expectOptionalToken(TokenKind.BRACKET_L)) {
      const innerType = this.parseTypeReference();
      this.expectToken(TokenKind.BRACKET_R);
      type = this.node(start, {
        kind: Kind.LIST_TYPE,
        type: innerType
      });
    } else {
      type = this.parseNamedType();
    }
    if (this.expectOptionalToken(TokenKind.BANG)) {
      return this.node(start, {
        kind: Kind.NON_NULL_TYPE,
        type
      });
    }
    return type;
  }
  /**
   * NamedType : Name
   */
  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: Kind.NAMED_TYPE,
      name: this.parseName()
    });
  }
  // Implements the parsing rules in the Type Definition section.
  peekDescription() {
    return this.peek(TokenKind.STRING) || this.peek(TokenKind.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  parseDescription() {
    if (this.peekDescription()) {
      return this.parseStringLiteral();
    }
  }
  /**
   * ```
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   * ```
   */
  parseSchemaDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("schema");
    const directives = this.parseConstDirectives();
    const operationTypes = this.many(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R);
    return this.node(start, {
      kind: Kind.SCHEMA_DEFINITION,
      description,
      directives,
      operationTypes
    });
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  parseOperationTypeDefinition() {
    const start = this._lexer.token;
    const operation = this.parseOperationType();
    this.expectToken(TokenKind.COLON);
    const type = this.parseNamedType();
    return this.node(start, {
      kind: Kind.OPERATION_TYPE_DEFINITION,
      operation,
      type
    });
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  parseScalarTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("scalar");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.SCALAR_TYPE_DEFINITION,
      description,
      name,
      directives
    });
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  parseObjectTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("type");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    return this.node(start, {
      kind: Kind.OBJECT_TYPE_DEFINITION,
      description,
      name,
      interfaces,
      directives,
      fields
    });
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  parseImplementsInterfaces() {
    return this.expectOptionalKeyword("implements") ? this.delimitedMany(TokenKind.AMP, this.parseNamedType) : [];
  }
  /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */
  parseFieldsDefinition() {
    return this.optionalMany(TokenKind.BRACE_L, this.parseFieldDefinition, TokenKind.BRACE_R);
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  parseFieldDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseName();
    const args = this.parseArgumentDefs();
    this.expectToken(TokenKind.COLON);
    const type = this.parseTypeReference();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.FIELD_DEFINITION,
      description,
      name,
      arguments: args,
      type,
      directives
    });
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  parseArgumentDefs() {
    return this.optionalMany(TokenKind.PAREN_L, this.parseInputValueDef, TokenKind.PAREN_R);
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  parseInputValueDef() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseName();
    this.expectToken(TokenKind.COLON);
    const type = this.parseTypeReference();
    let defaultValue;
    if (this.expectOptionalToken(TokenKind.EQUALS)) {
      defaultValue = this.parseConstValueLiteral();
    }
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.INPUT_VALUE_DEFINITION,
      description,
      name,
      type,
      defaultValue,
      directives
    });
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  parseInterfaceTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("interface");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    return this.node(start, {
      kind: Kind.INTERFACE_TYPE_DEFINITION,
      description,
      name,
      interfaces,
      directives,
      fields
    });
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  parseUnionTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("union");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const types = this.parseUnionMemberTypes();
    return this.node(start, {
      kind: Kind.UNION_TYPE_DEFINITION,
      description,
      name,
      directives,
      types
    });
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  parseUnionMemberTypes() {
    return this.expectOptionalToken(TokenKind.EQUALS) ? this.delimitedMany(TokenKind.PIPE, this.parseNamedType) : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  parseEnumTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("enum");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const values = this.parseEnumValuesDefinition();
    return this.node(start, {
      kind: Kind.ENUM_TYPE_DEFINITION,
      description,
      name,
      directives,
      values
    });
  }
  /**
   * ```
   * EnumValuesDefinition : { EnumValueDefinition+ }
   * ```
   */
  parseEnumValuesDefinition() {
    return this.optionalMany(TokenKind.BRACE_L, this.parseEnumValueDefinition, TokenKind.BRACE_R);
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */
  parseEnumValueDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseEnumValueName();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.ENUM_VALUE_DEFINITION,
      description,
      name,
      directives
    });
  }
  /**
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseEnumValueName() {
    if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") {
      throw syntaxError(this._lexer.source, this._lexer.token.start, `${getTokenDesc(this._lexer.token)} is reserved and cannot be used for an enum value.`);
    }
    return this.parseName();
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  parseInputObjectTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("input");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const fields = this.parseInputFieldsDefinition();
    return this.node(start, {
      kind: Kind.INPUT_OBJECT_TYPE_DEFINITION,
      description,
      name,
      directives,
      fields
    });
  }
  /**
   * ```
   * InputFieldsDefinition : { InputValueDefinition+ }
   * ```
   */
  parseInputFieldsDefinition() {
    return this.optionalMany(TokenKind.BRACE_L, this.parseInputValueDef, TokenKind.BRACE_R);
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  parseTypeSystemExtension() {
    const keywordToken = this._lexer.lookahead();
    if (keywordToken.kind === TokenKind.NAME) {
      switch (keywordToken.value) {
        case "schema":
          return this.parseSchemaExtension();
        case "scalar":
          return this.parseScalarTypeExtension();
        case "type":
          return this.parseObjectTypeExtension();
        case "interface":
          return this.parseInterfaceTypeExtension();
        case "union":
          return this.parseUnionTypeExtension();
        case "enum":
          return this.parseEnumTypeExtension();
        case "input":
          return this.parseInputObjectTypeExtension();
      }
    }
    throw this.unexpected(keywordToken);
  }
  /**
   * ```
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   * ```
   */
  parseSchemaExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("schema");
    const directives = this.parseConstDirectives();
    const operationTypes = this.optionalMany(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R);
    if (directives.length === 0 && operationTypes.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.SCHEMA_EXTENSION,
      directives,
      operationTypes
    });
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  parseScalarTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("scalar");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    if (directives.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.SCALAR_TYPE_EXTENSION,
      name,
      directives
    });
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  parseObjectTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("type");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.OBJECT_TYPE_EXTENSION,
      name,
      interfaces,
      directives,
      fields
    });
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */
  parseInterfaceTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("interface");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.INTERFACE_TYPE_EXTENSION,
      name,
      interfaces,
      directives,
      fields
    });
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  parseUnionTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("union");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const types = this.parseUnionMemberTypes();
    if (directives.length === 0 && types.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.UNION_TYPE_EXTENSION,
      name,
      directives,
      types
    });
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  parseEnumTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("enum");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const values = this.parseEnumValuesDefinition();
    if (directives.length === 0 && values.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.ENUM_TYPE_EXTENSION,
      name,
      directives,
      values
    });
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  parseInputObjectTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("input");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const fields = this.parseInputFieldsDefinition();
    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.INPUT_OBJECT_TYPE_EXTENSION,
      name,
      directives,
      fields
    });
  }
  /**
   * ```
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   * ```
   */
  parseDirectiveDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("directive");
    this.expectToken(TokenKind.AT);
    const name = this.parseName();
    const args = this.parseArgumentDefs();
    const repeatable = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    const locations = this.parseDirectiveLocations();
    return this.node(start, {
      kind: Kind.DIRECTIVE_DEFINITION,
      description,
      name,
      arguments: args,
      repeatable,
      locations
    });
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  parseDirectiveLocations() {
    return this.delimitedMany(TokenKind.PIPE, this.parseDirectiveLocation);
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  parseDirectiveLocation() {
    const start = this._lexer.token;
    const name = this.parseName();
    if (Object.prototype.hasOwnProperty.call(DirectiveLocation, name.value)) {
      return name;
    }
    throw this.unexpected(start);
  }
  // Core parsing utility functions
  /**
   * Returns a node that, if configured to do so, sets a "loc" field as a
   * location object, used to identify the place in the source that created a
   * given parsed object.
   */
  node(startToken, node) {
    if (this._options.noLocation !== true) {
      node.loc = new Location(startToken, this._lexer.lastToken, this._lexer.source);
    }
    return node;
  }
  /**
   * Determines if the next token is of a given kind
   */
  peek(kind) {
    return this._lexer.token.kind === kind;
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectToken(kind) {
    const token = this._lexer.token;
    if (token.kind === kind) {
      this.advanceLexer();
      return token;
    }
    throw syntaxError(this._lexer.source, token.start, `Expected ${getTokenKindDesc(kind)}, found ${getTokenDesc(token)}.`);
  }
  /**
   * If the next token is of the given kind, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalToken(kind) {
    const token = this._lexer.token;
    if (token.kind === kind) {
      this.advanceLexer();
      return true;
    }
    return false;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectKeyword(value) {
    const token = this._lexer.token;
    if (token.kind === TokenKind.NAME && token.value === value) {
      this.advanceLexer();
    } else {
      throw syntaxError(this._lexer.source, token.start, `Expected "${value}", found ${getTokenDesc(token)}.`);
    }
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalKeyword(value) {
    const token = this._lexer.token;
    if (token.kind === TokenKind.NAME && token.value === value) {
      this.advanceLexer();
      return true;
    }
    return false;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  unexpected(atToken) {
    const token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
    return syntaxError(this._lexer.source, token.start, `Unexpected ${getTokenDesc(token)}.`);
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  any(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    const nodes = [];
    while (!this.expectOptionalToken(closeKind)) {
      nodes.push(parseFn.call(this));
    }
    return nodes;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  optionalMany(openKind, parseFn, closeKind) {
    if (this.expectOptionalToken(openKind)) {
      const nodes = [];
      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));
      return nodes;
    }
    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  many(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    const nodes = [];
    do {
      nodes.push(parseFn.call(this));
    } while (!this.expectOptionalToken(closeKind));
    return nodes;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */
  delimitedMany(delimiterKind, parseFn) {
    this.expectOptionalToken(delimiterKind);
    const nodes = [];
    do {
      nodes.push(parseFn.call(this));
    } while (this.expectOptionalToken(delimiterKind));
    return nodes;
  }
  advanceLexer() {
    const {
      maxTokens
    } = this._options;
    const token = this._lexer.advance();
    if (token.kind !== TokenKind.EOF) {
      ++this._tokenCounter;
      if (maxTokens !== void 0 && this._tokenCounter > maxTokens) {
        throw syntaxError(this._lexer.source, token.start, `Document contains more that ${maxTokens} tokens. Parsing aborted.`);
      }
    }
  }
};
function getTokenDesc(token) {
  const value = token.value;
  return getTokenKindDesc(token.kind) + (value != null ? ` "${value}"` : "");
}
function getTokenKindDesc(kind) {
  return isPunctuatorTokenKind(kind) ? `"${kind}"` : kind;
}

// node_modules/graphql/language/predicates.mjs
init_kinds();
function isSelectionNode(node) {
  return node.kind === Kind.FIELD || node.kind === Kind.FRAGMENT_SPREAD || node.kind === Kind.INLINE_FRAGMENT;
}

// node_modules/graphql/language/index.mjs
init_kinds();
init_printer();
init_visitor();

// node_modules/@apollo/client/utilities/graphql/fragments.js
function getFragmentQueryDocument(document, fragmentName) {
  var actualFragmentName = fragmentName;
  var fragments = [];
  document.definitions.forEach(function(definition) {
    if (definition.kind === "OperationDefinition") {
      throw newInvariantError(85, definition.operation, definition.name ? " named '".concat(definition.name.value, "'") : "");
    }
    if (definition.kind === "FragmentDefinition") {
      fragments.push(definition);
    }
  });
  if (typeof actualFragmentName === "undefined") {
    invariant2(fragments.length === 1, 86, fragments.length);
    actualFragmentName = fragments[0].name.value;
  }
  var query = __assign(__assign({}, document), {
    definitions: __spreadArray([{
      kind: "OperationDefinition",
      // OperationTypeNode is an enum
      operation: "query",
      selectionSet: {
        kind: "SelectionSet",
        selections: [{
          kind: "FragmentSpread",
          name: {
            kind: "Name",
            value: actualFragmentName
          }
        }]
      }
    }], document.definitions, true)
  });
  return query;
}
function createFragmentMap(fragments) {
  if (fragments === void 0) {
    fragments = [];
  }
  var symTable = {};
  fragments.forEach(function(fragment) {
    symTable[fragment.name.value] = fragment;
  });
  return symTable;
}
function getFragmentFromSelection(selection, fragmentMap) {
  switch (selection.kind) {
    case "InlineFragment":
      return selection;
    case "FragmentSpread": {
      var fragmentName = selection.name.value;
      if (typeof fragmentMap === "function") {
        return fragmentMap(fragmentName);
      }
      var fragment = fragmentMap && fragmentMap[fragmentName];
      invariant2(fragment, 87, fragmentName);
      return fragment || null;
    }
    default:
      return null;
  }
}
function isFullyUnmaskedOperation(document) {
  var isUnmasked = true;
  visit(document, {
    FragmentSpread: function(node) {
      isUnmasked = !!node.directives && node.directives.some(function(directive) {
        return directive.name.value === "unmask";
      });
      if (!isUnmasked) {
        return BREAK;
      }
    }
  });
  return isUnmasked;
}

// node_modules/@wry/caches/lib/strong.js
function defaultDispose() {
}
var StrongCache = class {
  constructor(max = Infinity, dispose = defaultDispose) {
    this.max = max;
    this.dispose = dispose;
    this.map = /* @__PURE__ */ new Map();
    this.newest = null;
    this.oldest = null;
  }
  has(key) {
    return this.map.has(key);
  }
  get(key) {
    const node = this.getNode(key);
    return node && node.value;
  }
  get size() {
    return this.map.size;
  }
  getNode(key) {
    const node = this.map.get(key);
    if (node && node !== this.newest) {
      const {
        older,
        newer
      } = node;
      if (newer) {
        newer.older = older;
      }
      if (older) {
        older.newer = newer;
      }
      node.older = this.newest;
      node.older.newer = node;
      node.newer = null;
      this.newest = node;
      if (node === this.oldest) {
        this.oldest = newer;
      }
    }
    return node;
  }
  set(key, value) {
    let node = this.getNode(key);
    if (node) {
      return node.value = value;
    }
    node = {
      key,
      value,
      newer: null,
      older: this.newest
    };
    if (this.newest) {
      this.newest.newer = node;
    }
    this.newest = node;
    this.oldest = this.oldest || node;
    this.map.set(key, node);
    return node.value;
  }
  clean() {
    while (this.oldest && this.map.size > this.max) {
      this.delete(this.oldest.key);
    }
  }
  delete(key) {
    const node = this.map.get(key);
    if (node) {
      if (node === this.newest) {
        this.newest = node.older;
      }
      if (node === this.oldest) {
        this.oldest = node.newer;
      }
      if (node.newer) {
        node.newer.older = node.older;
      }
      if (node.older) {
        node.older.newer = node.newer;
      }
      this.map.delete(key);
      this.dispose(node.value, key);
      return true;
    }
    return false;
  }
};

// node_modules/@wry/caches/lib/weak.js
function noop() {
}
var defaultDispose2 = noop;
var _WeakRef = typeof WeakRef !== "undefined" ? WeakRef : function(value) {
  return {
    deref: () => value
  };
};
var _WeakMap = typeof WeakMap !== "undefined" ? WeakMap : Map;
var _FinalizationRegistry = typeof FinalizationRegistry !== "undefined" ? FinalizationRegistry : function() {
  return {
    register: noop,
    unregister: noop
  };
};
var finalizationBatchSize = 10024;
var WeakCache = class {
  constructor(max = Infinity, dispose = defaultDispose2) {
    this.max = max;
    this.dispose = dispose;
    this.map = new _WeakMap();
    this.newest = null;
    this.oldest = null;
    this.unfinalizedNodes = /* @__PURE__ */ new Set();
    this.finalizationScheduled = false;
    this.size = 0;
    this.finalize = () => {
      const iterator = this.unfinalizedNodes.values();
      for (let i = 0; i < finalizationBatchSize; i++) {
        const node = iterator.next().value;
        if (!node) break;
        this.unfinalizedNodes.delete(node);
        const key = node.key;
        delete node.key;
        node.keyRef = new _WeakRef(key);
        this.registry.register(key, node, node);
      }
      if (this.unfinalizedNodes.size > 0) {
        queueMicrotask(this.finalize);
      } else {
        this.finalizationScheduled = false;
      }
    };
    this.registry = new _FinalizationRegistry(this.deleteNode.bind(this));
  }
  has(key) {
    return this.map.has(key);
  }
  get(key) {
    const node = this.getNode(key);
    return node && node.value;
  }
  getNode(key) {
    const node = this.map.get(key);
    if (node && node !== this.newest) {
      const {
        older,
        newer
      } = node;
      if (newer) {
        newer.older = older;
      }
      if (older) {
        older.newer = newer;
      }
      node.older = this.newest;
      node.older.newer = node;
      node.newer = null;
      this.newest = node;
      if (node === this.oldest) {
        this.oldest = newer;
      }
    }
    return node;
  }
  set(key, value) {
    let node = this.getNode(key);
    if (node) {
      return node.value = value;
    }
    node = {
      key,
      value,
      newer: null,
      older: this.newest
    };
    if (this.newest) {
      this.newest.newer = node;
    }
    this.newest = node;
    this.oldest = this.oldest || node;
    this.scheduleFinalization(node);
    this.map.set(key, node);
    this.size++;
    return node.value;
  }
  clean() {
    while (this.oldest && this.size > this.max) {
      this.deleteNode(this.oldest);
    }
  }
  deleteNode(node) {
    if (node === this.newest) {
      this.newest = node.older;
    }
    if (node === this.oldest) {
      this.oldest = node.newer;
    }
    if (node.newer) {
      node.newer.older = node.older;
    }
    if (node.older) {
      node.older.newer = node.newer;
    }
    this.size--;
    const key = node.key || node.keyRef && node.keyRef.deref();
    this.dispose(node.value, key);
    if (!node.keyRef) {
      this.unfinalizedNodes.delete(node);
    } else {
      this.registry.unregister(node);
    }
    if (key) this.map.delete(key);
  }
  delete(key) {
    const node = this.map.get(key);
    if (node) {
      this.deleteNode(node);
      return true;
    }
    return false;
  }
  scheduleFinalization(node) {
    this.unfinalizedNodes.add(node);
    if (!this.finalizationScheduled) {
      this.finalizationScheduled = true;
      queueMicrotask(this.finalize);
    }
  }
};

// node_modules/@apollo/client/utilities/caching/caches.js
var scheduledCleanup = /* @__PURE__ */ new WeakSet();
function schedule(cache) {
  if (cache.size <= (cache.max || -1)) {
    return;
  }
  if (!scheduledCleanup.has(cache)) {
    scheduledCleanup.add(cache);
    setTimeout(function() {
      cache.clean();
      scheduledCleanup.delete(cache);
    }, 100);
  }
}
var AutoCleanedWeakCache = function(max, dispose) {
  var cache = new WeakCache(max, dispose);
  cache.set = function(key, value) {
    var ret = WeakCache.prototype.set.call(this, key, value);
    schedule(this);
    return ret;
  };
  return cache;
};
var AutoCleanedStrongCache = function(max, dispose) {
  var cache = new StrongCache(max, dispose);
  cache.set = function(key, value) {
    var ret = StrongCache.prototype.set.call(this, key, value);
    schedule(this);
    return ret;
  };
  return cache;
};

// node_modules/@apollo/client/utilities/caching/sizes.js
var cacheSizeSymbol = Symbol.for("apollo.cacheSize");
var cacheSizes = __assign({}, global_default[cacheSizeSymbol]);

// node_modules/@apollo/client/utilities/caching/getMemoryInternals.js
var globalCaches = {};
function registerGlobalCache(name, getSize) {
  globalCaches[name] = getSize;
}
var getApolloClientMemoryInternals = globalThis.__DEV__ !== false ? _getApolloClientMemoryInternals : void 0;
var getInMemoryCacheMemoryInternals = globalThis.__DEV__ !== false ? _getInMemoryCacheMemoryInternals : void 0;
var getApolloCacheMemoryInternals = globalThis.__DEV__ !== false ? _getApolloCacheMemoryInternals : void 0;
function getCurrentCacheSizes() {
  var defaults = {
    parser: 1e3,
    canonicalStringify: 1e3,
    print: 2e3,
    "documentTransform.cache": 2e3,
    "queryManager.getDocumentInfo": 2e3,
    "PersistedQueryLink.persistedQueryHashes": 2e3,
    "fragmentRegistry.transform": 2e3,
    "fragmentRegistry.lookup": 1e3,
    "fragmentRegistry.findFragmentSpreads": 4e3,
    "cache.fragmentQueryDocuments": 1e3,
    "removeTypenameFromVariables.getVariableDefinitions": 2e3,
    "inMemoryCache.maybeBroadcastWatch": 5e3,
    "inMemoryCache.executeSelectionSet": 5e4,
    "inMemoryCache.executeSubSelectedArray": 1e4
    /* defaultCacheSizes["inMemoryCache.executeSubSelectedArray"] */
  };
  return Object.fromEntries(Object.entries(defaults).map(function(_a2) {
    var k = _a2[0], v = _a2[1];
    return [k, cacheSizes[k] || v];
  }));
}
function _getApolloClientMemoryInternals() {
  var _a2, _b, _c, _d, _e;
  if (!(globalThis.__DEV__ !== false)) throw new Error("only supported in development mode");
  return {
    limits: getCurrentCacheSizes(),
    sizes: __assign({
      print: (_a2 = globalCaches.print) === null || _a2 === void 0 ? void 0 : _a2.call(globalCaches),
      parser: (_b = globalCaches.parser) === null || _b === void 0 ? void 0 : _b.call(globalCaches),
      canonicalStringify: (_c = globalCaches.canonicalStringify) === null || _c === void 0 ? void 0 : _c.call(globalCaches),
      links: linkInfo(this.link),
      queryManager: {
        getDocumentInfo: this["queryManager"]["transformCache"].size,
        documentTransforms: transformInfo(this["queryManager"].documentTransform)
      }
    }, (_e = (_d = this.cache).getMemoryInternals) === null || _e === void 0 ? void 0 : _e.call(_d))
  };
}
function _getApolloCacheMemoryInternals() {
  return {
    cache: {
      fragmentQueryDocuments: getWrapperInformation(this["getFragmentDoc"])
    }
  };
}
function _getInMemoryCacheMemoryInternals() {
  var fragments = this.config.fragments;
  return __assign(__assign({}, _getApolloCacheMemoryInternals.apply(this)), {
    addTypenameDocumentTransform: transformInfo(this["addTypenameTransform"]),
    inMemoryCache: {
      executeSelectionSet: getWrapperInformation(this["storeReader"]["executeSelectionSet"]),
      executeSubSelectedArray: getWrapperInformation(this["storeReader"]["executeSubSelectedArray"]),
      maybeBroadcastWatch: getWrapperInformation(this["maybeBroadcastWatch"])
    },
    fragmentRegistry: {
      findFragmentSpreads: getWrapperInformation(fragments === null || fragments === void 0 ? void 0 : fragments.findFragmentSpreads),
      lookup: getWrapperInformation(fragments === null || fragments === void 0 ? void 0 : fragments.lookup),
      transform: getWrapperInformation(fragments === null || fragments === void 0 ? void 0 : fragments.transform)
    }
  });
}
function isWrapper(f) {
  return !!f && "dirtyKey" in f;
}
function getWrapperInformation(f) {
  return isWrapper(f) ? f.size : void 0;
}
function isDefined(value) {
  return value != null;
}
function transformInfo(transform) {
  return recurseTransformInfo(transform).map(function(cache) {
    return {
      cache
    };
  });
}
function recurseTransformInfo(transform) {
  return transform ? __spreadArray(__spreadArray([getWrapperInformation(transform === null || transform === void 0 ? void 0 : transform["performWork"])], recurseTransformInfo(transform === null || transform === void 0 ? void 0 : transform["left"]), true), recurseTransformInfo(transform === null || transform === void 0 ? void 0 : transform["right"]), true).filter(isDefined) : [];
}
function linkInfo(link) {
  var _a2;
  return link ? __spreadArray(__spreadArray([(_a2 = link === null || link === void 0 ? void 0 : link.getMemoryInternals) === null || _a2 === void 0 ? void 0 : _a2.call(link)], linkInfo(link === null || link === void 0 ? void 0 : link.left), true), linkInfo(link === null || link === void 0 ? void 0 : link.right), true).filter(isDefined) : [];
}

// node_modules/@apollo/client/utilities/common/canonicalStringify.js
var canonicalStringify = Object.assign(function canonicalStringify2(value) {
  return JSON.stringify(value, stableObjectReplacer);
}, {
  reset: function() {
    sortingMap = new AutoCleanedStrongCache(
      cacheSizes.canonicalStringify || 1e3
      /* defaultCacheSizes.canonicalStringify */
    );
  }
});
if (globalThis.__DEV__ !== false) {
  registerGlobalCache("canonicalStringify", function() {
    return sortingMap.size;
  });
}
var sortingMap;
canonicalStringify.reset();
function stableObjectReplacer(key, value) {
  if (value && typeof value === "object") {
    var proto = Object.getPrototypeOf(value);
    if (proto === Object.prototype || proto === null) {
      var keys = Object.keys(value);
      if (keys.every(everyKeyInOrder)) return value;
      var unsortedKey = JSON.stringify(keys);
      var sortedKeys = sortingMap.get(unsortedKey);
      if (!sortedKeys) {
        keys.sort();
        var sortedKey = JSON.stringify(keys);
        sortedKeys = sortingMap.get(sortedKey) || keys;
        sortingMap.set(unsortedKey, sortedKeys);
        sortingMap.set(sortedKey, sortedKeys);
      }
      var sortedObject_1 = Object.create(proto);
      sortedKeys.forEach(function(key2) {
        sortedObject_1[key2] = value[key2];
      });
      return sortedObject_1;
    }
  }
  return value;
}
function everyKeyInOrder(key, i, keys) {
  return i === 0 || keys[i - 1] <= key;
}

// node_modules/@apollo/client/utilities/graphql/storeUtils.js
function makeReference(id) {
  return {
    __ref: String(id)
  };
}
function isReference(obj) {
  return Boolean(obj && typeof obj === "object" && typeof obj.__ref === "string");
}
function isDocumentNode(value) {
  return isNonNullObject(value) && value.kind === "Document" && Array.isArray(value.definitions);
}
function isStringValue(value) {
  return value.kind === "StringValue";
}
function isBooleanValue(value) {
  return value.kind === "BooleanValue";
}
function isIntValue(value) {
  return value.kind === "IntValue";
}
function isFloatValue(value) {
  return value.kind === "FloatValue";
}
function isVariable(value) {
  return value.kind === "Variable";
}
function isObjectValue(value) {
  return value.kind === "ObjectValue";
}
function isListValue(value) {
  return value.kind === "ListValue";
}
function isEnumValue(value) {
  return value.kind === "EnumValue";
}
function isNullValue(value) {
  return value.kind === "NullValue";
}
function valueToObjectRepresentation(argObj, name, value, variables) {
  if (isIntValue(value) || isFloatValue(value)) {
    argObj[name.value] = Number(value.value);
  } else if (isBooleanValue(value) || isStringValue(value)) {
    argObj[name.value] = value.value;
  } else if (isObjectValue(value)) {
    var nestedArgObj_1 = {};
    value.fields.map(function(obj) {
      return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
    });
    argObj[name.value] = nestedArgObj_1;
  } else if (isVariable(value)) {
    var variableValue = (variables || {})[value.name.value];
    argObj[name.value] = variableValue;
  } else if (isListValue(value)) {
    argObj[name.value] = value.values.map(function(listValue) {
      var nestedArgArrayObj = {};
      valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
      return nestedArgArrayObj[name.value];
    });
  } else if (isEnumValue(value)) {
    argObj[name.value] = value.value;
  } else if (isNullValue(value)) {
    argObj[name.value] = null;
  } else {
    throw newInvariantError(96, name.value, value.kind);
  }
}
function storeKeyNameFromField(field, variables) {
  var directivesObj = null;
  if (field.directives) {
    directivesObj = {};
    field.directives.forEach(function(directive) {
      directivesObj[directive.name.value] = {};
      if (directive.arguments) {
        directive.arguments.forEach(function(_a2) {
          var name = _a2.name, value = _a2.value;
          return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
        });
      }
    });
  }
  var argObj = null;
  if (field.arguments && field.arguments.length) {
    argObj = {};
    field.arguments.forEach(function(_a2) {
      var name = _a2.name, value = _a2.value;
      return valueToObjectRepresentation(argObj, name, value, variables);
    });
  }
  return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = ["connection", "include", "skip", "client", "rest", "export", "nonreactive"];
var storeKeyNameStringify = canonicalStringify;
var getStoreKeyName = Object.assign(function(fieldName, args, directives) {
  if (args && directives && directives["connection"] && directives["connection"]["key"]) {
    if (directives["connection"]["filter"] && directives["connection"]["filter"].length > 0) {
      var filterKeys = directives["connection"]["filter"] ? directives["connection"]["filter"] : [];
      filterKeys.sort();
      var filteredArgs_1 = {};
      filterKeys.forEach(function(key) {
        filteredArgs_1[key] = args[key];
      });
      return "".concat(directives["connection"]["key"], "(").concat(storeKeyNameStringify(filteredArgs_1), ")");
    } else {
      return directives["connection"]["key"];
    }
  }
  var completeFieldName = fieldName;
  if (args) {
    var stringifiedArgs = storeKeyNameStringify(args);
    completeFieldName += "(".concat(stringifiedArgs, ")");
  }
  if (directives) {
    Object.keys(directives).forEach(function(key) {
      if (KNOWN_DIRECTIVES.indexOf(key) !== -1) return;
      if (directives[key] && Object.keys(directives[key]).length) {
        completeFieldName += "@".concat(key, "(").concat(storeKeyNameStringify(directives[key]), ")");
      } else {
        completeFieldName += "@".concat(key);
      }
    });
  }
  return completeFieldName;
}, {
  setStringify: function(s) {
    var previous = storeKeyNameStringify;
    storeKeyNameStringify = s;
    return previous;
  }
});
function argumentsObjectFromField(field, variables) {
  if (field.arguments && field.arguments.length) {
    var argObj_1 = {};
    field.arguments.forEach(function(_a2) {
      var name = _a2.name, value = _a2.value;
      return valueToObjectRepresentation(argObj_1, name, value, variables);
    });
    return argObj_1;
  }
  return null;
}
function resultKeyNameFromField(field) {
  return field.alias ? field.alias.value : field.name.value;
}
function getTypenameFromResult(result2, selectionSet, fragmentMap) {
  var fragments;
  for (var _i = 0, _a2 = selectionSet.selections; _i < _a2.length; _i++) {
    var selection = _a2[_i];
    if (isField(selection)) {
      if (selection.name.value === "__typename") {
        return result2[resultKeyNameFromField(selection)];
      }
    } else if (fragments) {
      fragments.push(selection);
    } else {
      fragments = [selection];
    }
  }
  if (typeof result2.__typename === "string") {
    return result2.__typename;
  }
  if (fragments) {
    for (var _b = 0, fragments_1 = fragments; _b < fragments_1.length; _b++) {
      var selection = fragments_1[_b];
      var typename = getTypenameFromResult(result2, getFragmentFromSelection(selection, fragmentMap).selectionSet, fragmentMap);
      if (typeof typename === "string") {
        return typename;
      }
    }
  }
}
function isField(selection) {
  return selection.kind === "Field";
}
function isInlineFragment(selection) {
  return selection.kind === "InlineFragment";
}

// node_modules/@apollo/client/utilities/graphql/getFromAST.js
function checkDocument(doc) {
  invariant2(doc && doc.kind === "Document", 88);
  var operations = doc.definitions.filter(function(d) {
    return d.kind !== "FragmentDefinition";
  }).map(function(definition) {
    if (definition.kind !== "OperationDefinition") {
      throw newInvariantError(89, definition.kind);
    }
    return definition;
  });
  invariant2(operations.length <= 1, 90, operations.length);
  return doc;
}
function getOperationDefinition(doc) {
  checkDocument(doc);
  return doc.definitions.filter(function(definition) {
    return definition.kind === "OperationDefinition";
  })[0];
}
function getOperationName(doc) {
  return doc.definitions.filter(function(definition) {
    return definition.kind === "OperationDefinition" && !!definition.name;
  }).map(function(x) {
    return x.name.value;
  })[0] || null;
}
function getFragmentDefinitions(doc) {
  return doc.definitions.filter(function(definition) {
    return definition.kind === "FragmentDefinition";
  });
}
function getQueryDefinition(doc) {
  var queryDef = getOperationDefinition(doc);
  invariant2(queryDef && queryDef.operation === "query", 91);
  return queryDef;
}
function getFragmentDefinition(doc) {
  invariant2(doc.kind === "Document", 92);
  invariant2(doc.definitions.length <= 1, 93);
  var fragmentDef = doc.definitions[0];
  invariant2(fragmentDef.kind === "FragmentDefinition", 94);
  return fragmentDef;
}
function getMainDefinition(queryDoc) {
  checkDocument(queryDoc);
  var fragmentDefinition;
  for (var _i = 0, _a2 = queryDoc.definitions; _i < _a2.length; _i++) {
    var definition = _a2[_i];
    if (definition.kind === "OperationDefinition") {
      var operation = definition.operation;
      if (operation === "query" || operation === "mutation" || operation === "subscription") {
        return definition;
      }
    }
    if (definition.kind === "FragmentDefinition" && !fragmentDefinition) {
      fragmentDefinition = definition;
    }
  }
  if (fragmentDefinition) {
    return fragmentDefinition;
  }
  throw newInvariantError(95);
}
function getDefaultValues(definition) {
  var defaultValues = /* @__PURE__ */ Object.create(null);
  var defs = definition && definition.variableDefinitions;
  if (defs && defs.length) {
    defs.forEach(function(def) {
      if (def.defaultValue) {
        valueToObjectRepresentation(defaultValues, def.variable.name, def.defaultValue);
      }
    });
  }
  return defaultValues;
}

// node_modules/@apollo/client/utilities/graphql/directives.js
function shouldInclude(_a2, variables) {
  var directives = _a2.directives;
  if (!directives || !directives.length) {
    return true;
  }
  return getInclusionDirectives(directives).every(function(_a3) {
    var directive = _a3.directive, ifArgument = _a3.ifArgument;
    var evaledValue = false;
    if (ifArgument.value.kind === "Variable") {
      evaledValue = variables && variables[ifArgument.value.name.value];
      invariant2(evaledValue !== void 0, 78, directive.name.value);
    } else {
      evaledValue = ifArgument.value.value;
    }
    return directive.name.value === "skip" ? !evaledValue : evaledValue;
  });
}
function hasDirectives(names, root2, all) {
  var nameSet = new Set(names);
  var uniqueCount = nameSet.size;
  visit(root2, {
    Directive: function(node) {
      if (nameSet.delete(node.name.value) && (!all || !nameSet.size)) {
        return BREAK;
      }
    }
  });
  return all ? !nameSet.size : nameSet.size < uniqueCount;
}
function hasClientExports(document) {
  return document && hasDirectives(["client", "export"], document, true);
}
function isInclusionDirective(_a2) {
  var value = _a2.name.value;
  return value === "skip" || value === "include";
}
function getInclusionDirectives(directives) {
  var result2 = [];
  if (directives && directives.length) {
    directives.forEach(function(directive) {
      if (!isInclusionDirective(directive)) return;
      var directiveArguments = directive.arguments;
      var directiveName = directive.name.value;
      invariant2(directiveArguments && directiveArguments.length === 1, 79, directiveName);
      var ifArgument = directiveArguments[0];
      invariant2(ifArgument.name && ifArgument.name.value === "if", 80, directiveName);
      var ifValue = ifArgument.value;
      invariant2(ifValue && (ifValue.kind === "Variable" || ifValue.kind === "BooleanValue"), 81, directiveName);
      result2.push({
        directive,
        ifArgument
      });
    });
  }
  return result2;
}
function getFragmentMaskMode(fragment) {
  var _a2, _b;
  var directive = (_a2 = fragment.directives) === null || _a2 === void 0 ? void 0 : _a2.find(function(_a3) {
    var name = _a3.name;
    return name.value === "unmask";
  });
  if (!directive) {
    return "mask";
  }
  var modeArg = (_b = directive.arguments) === null || _b === void 0 ? void 0 : _b.find(function(_a3) {
    var name = _a3.name;
    return name.value === "mode";
  });
  if (globalThis.__DEV__ !== false) {
    if (modeArg) {
      if (modeArg.value.kind === Kind.VARIABLE) {
        globalThis.__DEV__ !== false && invariant2.warn(82);
      } else if (modeArg.value.kind !== Kind.STRING) {
        globalThis.__DEV__ !== false && invariant2.warn(83);
      } else if (modeArg.value.value !== "migrate") {
        globalThis.__DEV__ !== false && invariant2.warn(84, modeArg.value.value);
      }
    }
  }
  if (modeArg && "value" in modeArg.value && modeArg.value.value === "migrate") {
    return "migrate";
  }
  return "unmask";
}

// node_modules/@wry/trie/lib/index.js
var defaultMakeData = () => /* @__PURE__ */ Object.create(null);
var {
  forEach,
  slice
} = Array.prototype;
var {
  hasOwnProperty
} = Object.prototype;
var Trie = class _Trie {
  constructor(weakness = true, makeData = defaultMakeData) {
    this.weakness = weakness;
    this.makeData = makeData;
  }
  lookup() {
    return this.lookupArray(arguments);
  }
  lookupArray(array) {
    let node = this;
    forEach.call(array, (key) => node = node.getChildTrie(key));
    return hasOwnProperty.call(node, "data") ? node.data : node.data = this.makeData(slice.call(array));
  }
  peek() {
    return this.peekArray(arguments);
  }
  peekArray(array) {
    let node = this;
    for (let i = 0, len = array.length; node && i < len; ++i) {
      const map2 = node.mapFor(array[i], false);
      node = map2 && map2.get(array[i]);
    }
    return node && node.data;
  }
  remove() {
    return this.removeArray(arguments);
  }
  removeArray(array) {
    let data;
    if (array.length) {
      const head = array[0];
      const map2 = this.mapFor(head, false);
      const child = map2 && map2.get(head);
      if (child) {
        data = child.removeArray(slice.call(array, 1));
        if (!child.data && !child.weak && !(child.strong && child.strong.size)) {
          map2.delete(head);
        }
      }
    } else {
      data = this.data;
      delete this.data;
    }
    return data;
  }
  getChildTrie(key) {
    const map2 = this.mapFor(key, true);
    let child = map2.get(key);
    if (!child) map2.set(key, child = new _Trie(this.weakness, this.makeData));
    return child;
  }
  mapFor(key, create) {
    return this.weakness && isObjRef(key) ? this.weak || (create ? this.weak = /* @__PURE__ */ new WeakMap() : void 0) : this.strong || (create ? this.strong = /* @__PURE__ */ new Map() : void 0);
  }
};
function isObjRef(value) {
  switch (typeof value) {
    case "object":
      if (value === null) break;
    // Fall through to return true...
    case "function":
      return true;
  }
  return false;
}

// node_modules/@apollo/client/utilities/common/canUse.js
var isReactNative = maybe(function() {
  return navigator.product;
}) == "ReactNative";
var canUseWeakMap = typeof WeakMap === "function" && !(isReactNative && !global.HermesInternal);
var canUseWeakSet = typeof WeakSet === "function";
var canUseSymbol = typeof Symbol === "function" && typeof Symbol.for === "function";
var canUseAsyncIteratorSymbol = canUseSymbol && Symbol.asyncIterator;
var canUseDOM = typeof maybe(function() {
  return window.document.createElement;
}) === "function";
var usingJSDOM = (
  // Following advice found in this comment from @domenic (maintainer of jsdom):
  // https://github.com/jsdom/jsdom/issues/1537#issuecomment-229405327
  //
  // Since we control the version of Jest and jsdom used when running Apollo
  // Client tests, and that version is recent enought to include " jsdom/x.y.z"
  // at the end of the user agent string, I believe this case is all we need to
  // check. Testing for "Node.js" was recommended for backwards compatibility
  // with older version of jsdom, but we don't have that problem.
  maybe(function() {
    return navigator.userAgent.indexOf("jsdom") >= 0;
  }) || false
);

// node_modules/@wry/context/lib/slot.js
var currentContext = null;
var MISSING_VALUE = {};
var idCounter = 1;
var makeSlotClass = () => class Slot {
  constructor() {
    this.id = ["slot", idCounter++, Date.now(), Math.random().toString(36).slice(2)].join(":");
  }
  hasValue() {
    for (let context = currentContext; context; context = context.parent) {
      if (this.id in context.slots) {
        const value = context.slots[this.id];
        if (value === MISSING_VALUE) break;
        if (context !== currentContext) {
          currentContext.slots[this.id] = value;
        }
        return true;
      }
    }
    if (currentContext) {
      currentContext.slots[this.id] = MISSING_VALUE;
    }
    return false;
  }
  getValue() {
    if (this.hasValue()) {
      return currentContext.slots[this.id];
    }
  }
  withValue(value, callback, args, thisArg) {
    const slots = {
      __proto__: null,
      [this.id]: value
    };
    const parent = currentContext;
    currentContext = {
      parent,
      slots
    };
    try {
      return callback.apply(thisArg, args);
    } finally {
      currentContext = parent;
    }
  }
  // Capture the current context and wrap a callback function so that it
  // reestablishes the captured context when called.
  static bind(callback) {
    const context = currentContext;
    return function() {
      const saved = currentContext;
      try {
        currentContext = context;
        return callback.apply(this, arguments);
      } finally {
        currentContext = saved;
      }
    };
  }
  // Immediately run a callback function without any captured context.
  static noContext(callback, args, thisArg) {
    if (currentContext) {
      const saved = currentContext;
      try {
        currentContext = null;
        return callback.apply(thisArg, args);
      } finally {
        currentContext = saved;
      }
    } else {
      return callback.apply(thisArg, args);
    }
  }
};
function maybe2(fn) {
  try {
    return fn();
  } catch (ignored) {
  }
}
var globalKey = "@wry/context:Slot";
var host = (
  // Prefer globalThis when available.
  // https://github.com/benjamn/wryware/issues/347
  maybe2(() => globalThis) || // Fall back to global, which works in Node.js and may be converted by some
  // bundlers to the appropriate identifier (window, self, ...) depending on the
  // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
  maybe2(() => global) || // Otherwise, use a dummy host that's local to this module. We used to fall
  // back to using the Array constructor as a namespace, but that was flagged in
  // https://github.com/benjamn/wryware/issues/347, and can be avoided.
  /* @__PURE__ */ Object.create(null)
);
var globalHost = host;
var Slot = globalHost[globalKey] || // Earlier versions of this package stored the globalKey property on the Array
// constructor, so we check there as well, to prevent Slot class duplication.
Array[globalKey] || function(Slot2) {
  try {
    Object.defineProperty(globalHost, globalKey, {
      value: Slot2,
      enumerable: false,
      writable: false,
      // When it was possible for globalHost to be the Array constructor (a
      // legacy Slot dedup strategy), it was important for the property to be
      // configurable:true so it could be deleted. That does not seem to be as
      // important when globalHost is the global object, but I don't want to
      // cause similar problems again, and configurable:true seems safest.
      // https://github.com/endojs/endo/issues/576#issuecomment-1178274008
      configurable: true
    });
  } finally {
    return Slot2;
  }
}(makeSlotClass());

// node_modules/@wry/context/lib/index.js
var {
  bind,
  noContext
} = Slot;

// node_modules/optimism/lib/context.js
var parentEntrySlot = new Slot();

// node_modules/optimism/lib/helpers.js
var {
  hasOwnProperty: hasOwnProperty2
} = Object.prototype;
var arrayFromSet = Array.from || function(set) {
  const array = [];
  set.forEach((item) => array.push(item));
  return array;
};
function maybeUnsubscribe(entryOrDep) {
  const {
    unsubscribe
  } = entryOrDep;
  if (typeof unsubscribe === "function") {
    entryOrDep.unsubscribe = void 0;
    unsubscribe();
  }
}

// node_modules/optimism/lib/entry.js
var emptySetPool = [];
var POOL_TARGET_SIZE = 100;
function assert(condition, optionalMessage) {
  if (!condition) {
    throw new Error(optionalMessage || "assertion failure");
  }
}
function valueIs(a, b) {
  const len = a.length;
  return (
    // Unknown values are not equal to each other.
    len > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    len === b.length && // The underlying value or exception must be the same.
    a[len - 1] === b[len - 1]
  );
}
function valueGet(value) {
  switch (value.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return value[0];
    case 2:
      throw value[1];
  }
}
function valueCopy(value) {
  return value.slice(0);
}
var Entry = class _Entry {
  constructor(fn) {
    this.fn = fn;
    this.parents = /* @__PURE__ */ new Set();
    this.childValues = /* @__PURE__ */ new Map();
    this.dirtyChildren = null;
    this.dirty = true;
    this.recomputing = false;
    this.value = [];
    this.deps = null;
    ++_Entry.count;
  }
  peek() {
    if (this.value.length === 1 && !mightBeDirty(this)) {
      rememberParent(this);
      return this.value[0];
    }
  }
  // This is the most important method of the Entry API, because it
  // determines whether the cached this.value can be returned immediately,
  // or must be recomputed. The overall performance of the caching system
  // depends on the truth of the following observations: (1) this.dirty is
  // usually false, (2) this.dirtyChildren is usually null/empty, and thus
  // (3) valueGet(this.value) is usually returned without recomputation.
  recompute(args) {
    assert(!this.recomputing, "already recomputing");
    rememberParent(this);
    return mightBeDirty(this) ? reallyRecompute(this, args) : valueGet(this.value);
  }
  setDirty() {
    if (this.dirty) return;
    this.dirty = true;
    reportDirty(this);
    maybeUnsubscribe(this);
  }
  dispose() {
    this.setDirty();
    forgetChildren(this);
    eachParent(this, (parent, child) => {
      parent.setDirty();
      forgetChild(parent, this);
    });
  }
  forget() {
    this.dispose();
  }
  dependOn(dep2) {
    dep2.add(this);
    if (!this.deps) {
      this.deps = emptySetPool.pop() || /* @__PURE__ */ new Set();
    }
    this.deps.add(dep2);
  }
  forgetDeps() {
    if (this.deps) {
      arrayFromSet(this.deps).forEach((dep2) => dep2.delete(this));
      this.deps.clear();
      emptySetPool.push(this.deps);
      this.deps = null;
    }
  }
};
Entry.count = 0;
function rememberParent(child) {
  const parent = parentEntrySlot.getValue();
  if (parent) {
    child.parents.add(parent);
    if (!parent.childValues.has(child)) {
      parent.childValues.set(child, []);
    }
    if (mightBeDirty(child)) {
      reportDirtyChild(parent, child);
    } else {
      reportCleanChild(parent, child);
    }
    return parent;
  }
}
function reallyRecompute(entry, args) {
  forgetChildren(entry);
  parentEntrySlot.withValue(entry, recomputeNewValue, [entry, args]);
  if (maybeSubscribe(entry, args)) {
    setClean(entry);
  }
  return valueGet(entry.value);
}
function recomputeNewValue(entry, args) {
  entry.recomputing = true;
  const {
    normalizeResult
  } = entry;
  let oldValueCopy;
  if (normalizeResult && entry.value.length === 1) {
    oldValueCopy = valueCopy(entry.value);
  }
  entry.value.length = 0;
  try {
    entry.value[0] = entry.fn.apply(null, args);
    if (normalizeResult && oldValueCopy && !valueIs(oldValueCopy, entry.value)) {
      try {
        entry.value[0] = normalizeResult(entry.value[0], oldValueCopy[0]);
      } catch (_a2) {
      }
    }
  } catch (e) {
    entry.value[1] = e;
  }
  entry.recomputing = false;
}
function mightBeDirty(entry) {
  return entry.dirty || !!(entry.dirtyChildren && entry.dirtyChildren.size);
}
function setClean(entry) {
  entry.dirty = false;
  if (mightBeDirty(entry)) {
    return;
  }
  reportClean(entry);
}
function reportDirty(child) {
  eachParent(child, reportDirtyChild);
}
function reportClean(child) {
  eachParent(child, reportCleanChild);
}
function eachParent(child, callback) {
  const parentCount = child.parents.size;
  if (parentCount) {
    const parents = arrayFromSet(child.parents);
    for (let i = 0; i < parentCount; ++i) {
      callback(parents[i], child);
    }
  }
}
function reportDirtyChild(parent, child) {
  assert(parent.childValues.has(child));
  assert(mightBeDirty(child));
  const parentWasClean = !mightBeDirty(parent);
  if (!parent.dirtyChildren) {
    parent.dirtyChildren = emptySetPool.pop() || /* @__PURE__ */ new Set();
  } else if (parent.dirtyChildren.has(child)) {
    return;
  }
  parent.dirtyChildren.add(child);
  if (parentWasClean) {
    reportDirty(parent);
  }
}
function reportCleanChild(parent, child) {
  assert(parent.childValues.has(child));
  assert(!mightBeDirty(child));
  const childValue = parent.childValues.get(child);
  if (childValue.length === 0) {
    parent.childValues.set(child, valueCopy(child.value));
  } else if (!valueIs(childValue, child.value)) {
    parent.setDirty();
  }
  removeDirtyChild(parent, child);
  if (mightBeDirty(parent)) {
    return;
  }
  reportClean(parent);
}
function removeDirtyChild(parent, child) {
  const dc = parent.dirtyChildren;
  if (dc) {
    dc.delete(child);
    if (dc.size === 0) {
      if (emptySetPool.length < POOL_TARGET_SIZE) {
        emptySetPool.push(dc);
      }
      parent.dirtyChildren = null;
    }
  }
}
function forgetChildren(parent) {
  if (parent.childValues.size > 0) {
    parent.childValues.forEach((_value, child) => {
      forgetChild(parent, child);
    });
  }
  parent.forgetDeps();
  assert(parent.dirtyChildren === null);
}
function forgetChild(parent, child) {
  child.parents.delete(parent);
  parent.childValues.delete(child);
  removeDirtyChild(parent, child);
}
function maybeSubscribe(entry, args) {
  if (typeof entry.subscribe === "function") {
    try {
      maybeUnsubscribe(entry);
      entry.unsubscribe = entry.subscribe.apply(null, args);
    } catch (e) {
      entry.setDirty();
      return false;
    }
  }
  return true;
}

// node_modules/optimism/lib/dep.js
var EntryMethods = {
  setDirty: true,
  dispose: true,
  forget: true
  // Fully remove parent Entry from LRU cache and computation graph
};
function dep(options) {
  const depsByKey = /* @__PURE__ */ new Map();
  const subscribe = options && options.subscribe;
  function depend(key) {
    const parent = parentEntrySlot.getValue();
    if (parent) {
      let dep2 = depsByKey.get(key);
      if (!dep2) {
        depsByKey.set(key, dep2 = /* @__PURE__ */ new Set());
      }
      parent.dependOn(dep2);
      if (typeof subscribe === "function") {
        maybeUnsubscribe(dep2);
        dep2.unsubscribe = subscribe(key);
      }
    }
  }
  depend.dirty = function dirty(key, entryMethodName) {
    const dep2 = depsByKey.get(key);
    if (dep2) {
      const m = entryMethodName && hasOwnProperty2.call(EntryMethods, entryMethodName) ? entryMethodName : "setDirty";
      arrayFromSet(dep2).forEach((entry) => entry[m]());
      depsByKey.delete(key);
      maybeUnsubscribe(dep2);
    }
  };
  return depend;
}

// node_modules/optimism/lib/index.js
var defaultKeyTrie;
function defaultMakeCacheKey(...args) {
  const trie = defaultKeyTrie || (defaultKeyTrie = new Trie(typeof WeakMap === "function"));
  return trie.lookupArray(args);
}
var caches = /* @__PURE__ */ new Set();
function wrap3(originalFunction, {
  max = Math.pow(2, 16),
  keyArgs,
  makeCacheKey = defaultMakeCacheKey,
  normalizeResult,
  subscribe,
  cache: cacheOption = StrongCache
} = /* @__PURE__ */ Object.create(null)) {
  const cache = typeof cacheOption === "function" ? new cacheOption(max, (entry) => entry.dispose()) : cacheOption;
  const optimistic = function() {
    const key = makeCacheKey.apply(null, keyArgs ? keyArgs.apply(null, arguments) : arguments);
    if (key === void 0) {
      return originalFunction.apply(null, arguments);
    }
    let entry = cache.get(key);
    if (!entry) {
      cache.set(key, entry = new Entry(originalFunction));
      entry.normalizeResult = normalizeResult;
      entry.subscribe = subscribe;
      entry.forget = () => cache.delete(key);
    }
    const value = entry.recompute(Array.prototype.slice.call(arguments));
    cache.set(key, entry);
    caches.add(cache);
    if (!parentEntrySlot.hasValue()) {
      caches.forEach((cache2) => cache2.clean());
      caches.clear();
    }
    return value;
  };
  Object.defineProperty(optimistic, "size", {
    get: () => cache.size,
    configurable: false,
    enumerable: false
  });
  Object.freeze(optimistic.options = {
    max,
    keyArgs,
    makeCacheKey,
    normalizeResult,
    subscribe,
    cache
  });
  function dirtyKey(key) {
    const entry = key && cache.get(key);
    if (entry) {
      entry.setDirty();
    }
  }
  optimistic.dirtyKey = dirtyKey;
  optimistic.dirty = function dirty() {
    dirtyKey(makeCacheKey.apply(null, arguments));
  };
  function peekKey(key) {
    const entry = key && cache.get(key);
    if (entry) {
      return entry.peek();
    }
  }
  optimistic.peekKey = peekKey;
  optimistic.peek = function peek() {
    return peekKey(makeCacheKey.apply(null, arguments));
  };
  function forgetKey(key) {
    return key ? cache.delete(key) : false;
  }
  optimistic.forgetKey = forgetKey;
  optimistic.forget = function forget() {
    return forgetKey(makeCacheKey.apply(null, arguments));
  };
  optimistic.makeCacheKey = makeCacheKey;
  optimistic.getKey = keyArgs ? function getKey() {
    return makeCacheKey.apply(null, keyArgs.apply(null, arguments));
  } : makeCacheKey;
  return Object.freeze(optimistic);
}

// node_modules/@apollo/client/utilities/graphql/DocumentTransform.js
function identity(document) {
  return document;
}
var DocumentTransform = (
  /** @class */
  function() {
    function DocumentTransform2(transform, options) {
      if (options === void 0) {
        options = /* @__PURE__ */ Object.create(null);
      }
      this.resultCache = canUseWeakSet ? /* @__PURE__ */ new WeakSet() : /* @__PURE__ */ new Set();
      this.transform = transform;
      if (options.getCacheKey) {
        this.getCacheKey = options.getCacheKey;
      }
      this.cached = options.cache !== false;
      this.resetCache();
    }
    DocumentTransform2.prototype.getCacheKey = function(document) {
      return [document];
    };
    DocumentTransform2.identity = function() {
      return new DocumentTransform2(identity, {
        cache: false
      });
    };
    DocumentTransform2.split = function(predicate, left, right) {
      if (right === void 0) {
        right = DocumentTransform2.identity();
      }
      return Object.assign(new DocumentTransform2(
        function(document) {
          var documentTransform = predicate(document) ? left : right;
          return documentTransform.transformDocument(document);
        },
        // Reasonably assume both `left` and `right` transforms handle their own caching
        {
          cache: false
        }
      ), {
        left,
        right
      });
    };
    DocumentTransform2.prototype.resetCache = function() {
      var _this = this;
      if (this.cached) {
        var stableCacheKeys_1 = new Trie(canUseWeakMap);
        this.performWork = wrap3(DocumentTransform2.prototype.performWork.bind(this), {
          makeCacheKey: function(document) {
            var cacheKeys = _this.getCacheKey(document);
            if (cacheKeys) {
              invariant2(Array.isArray(cacheKeys), 77);
              return stableCacheKeys_1.lookupArray(cacheKeys);
            }
          },
          max: cacheSizes["documentTransform.cache"],
          cache: WeakCache
        });
      }
    };
    DocumentTransform2.prototype.performWork = function(document) {
      checkDocument(document);
      return this.transform(document);
    };
    DocumentTransform2.prototype.transformDocument = function(document) {
      if (this.resultCache.has(document)) {
        return document;
      }
      var transformedDocument = this.performWork(document);
      this.resultCache.add(transformedDocument);
      return transformedDocument;
    };
    DocumentTransform2.prototype.concat = function(otherTransform) {
      var _this = this;
      return Object.assign(new DocumentTransform2(
        function(document) {
          return otherTransform.transformDocument(_this.transformDocument(document));
        },
        // Reasonably assume both transforms handle their own caching
        {
          cache: false
        }
      ), {
        left: this,
        right: otherTransform
      });
    };
    return DocumentTransform2;
  }()
);

// node_modules/@apollo/client/utilities/graphql/print.js
var printCache;
var print2 = Object.assign(function(ast) {
  var result2 = printCache.get(ast);
  if (!result2) {
    result2 = print(ast);
    printCache.set(ast, result2);
  }
  return result2;
}, {
  reset: function() {
    printCache = new AutoCleanedWeakCache(
      cacheSizes.print || 2e3
      /* defaultCacheSizes.print */
    );
  }
});
print2.reset();
if (globalThis.__DEV__ !== false) {
  registerGlobalCache("print", function() {
    return printCache ? printCache.size : 0;
  });
}

// node_modules/@apollo/client/utilities/common/arrays.js
var isArray = Array.isArray;
function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}

// node_modules/@apollo/client/utilities/graphql/transform.js
var TYPENAME_FIELD = {
  kind: Kind.FIELD,
  name: {
    kind: Kind.NAME,
    value: "__typename"
  }
};
function isEmpty(op, fragmentMap) {
  return !op || op.selectionSet.selections.every(function(selection) {
    return selection.kind === Kind.FRAGMENT_SPREAD && isEmpty(fragmentMap[selection.name.value], fragmentMap);
  });
}
function nullIfDocIsEmpty(doc) {
  return isEmpty(getOperationDefinition(doc) || getFragmentDefinition(doc), createFragmentMap(getFragmentDefinitions(doc))) ? null : doc;
}
function getDirectiveMatcher(configs) {
  var names = /* @__PURE__ */ new Map();
  var tests = /* @__PURE__ */ new Map();
  configs.forEach(function(directive) {
    if (directive) {
      if (directive.name) {
        names.set(directive.name, directive);
      } else if (directive.test) {
        tests.set(directive.test, directive);
      }
    }
  });
  return function(directive) {
    var config = names.get(directive.name.value);
    if (!config && tests.size) {
      tests.forEach(function(testConfig, test) {
        if (test(directive)) {
          config = testConfig;
        }
      });
    }
    return config;
  };
}
function makeInUseGetterFunction(defaultKey) {
  var map2 = /* @__PURE__ */ new Map();
  return function inUseGetterFunction(key) {
    if (key === void 0) {
      key = defaultKey;
    }
    var inUse = map2.get(key);
    if (!inUse) {
      map2.set(key, inUse = {
        // Variable and fragment spread names used directly within this
        // operation or fragment definition, as identified by key. These sets
        // will be populated during the first traversal of the document in
        // removeDirectivesFromDocument below.
        variables: /* @__PURE__ */ new Set(),
        fragmentSpreads: /* @__PURE__ */ new Set()
      });
    }
    return inUse;
  };
}
function removeDirectivesFromDocument(directives, doc) {
  checkDocument(doc);
  var getInUseByOperationName = makeInUseGetterFunction("");
  var getInUseByFragmentName = makeInUseGetterFunction("");
  var getInUse = function(ancestors) {
    for (var p = 0, ancestor = void 0; p < ancestors.length && (ancestor = ancestors[p]); ++p) {
      if (isArray(ancestor)) continue;
      if (ancestor.kind === Kind.OPERATION_DEFINITION) {
        return getInUseByOperationName(ancestor.name && ancestor.name.value);
      }
      if (ancestor.kind === Kind.FRAGMENT_DEFINITION) {
        return getInUseByFragmentName(ancestor.name.value);
      }
    }
    globalThis.__DEV__ !== false && invariant2.error(97);
    return null;
  };
  var operationCount = 0;
  for (var i = doc.definitions.length - 1; i >= 0; --i) {
    if (doc.definitions[i].kind === Kind.OPERATION_DEFINITION) {
      ++operationCount;
    }
  }
  var directiveMatcher = getDirectiveMatcher(directives);
  var shouldRemoveField = function(nodeDirectives) {
    return isNonEmptyArray(nodeDirectives) && nodeDirectives.map(directiveMatcher).some(function(config) {
      return config && config.remove;
    });
  };
  var originalFragmentDefsByPath = /* @__PURE__ */ new Map();
  var firstVisitMadeChanges = false;
  var fieldOrInlineFragmentVisitor = {
    enter: function(node) {
      if (shouldRemoveField(node.directives)) {
        firstVisitMadeChanges = true;
        return null;
      }
    }
  };
  var docWithoutDirectiveSubtrees = visit(doc, {
    // These two AST node types share the same implementation, defined above.
    Field: fieldOrInlineFragmentVisitor,
    InlineFragment: fieldOrInlineFragmentVisitor,
    VariableDefinition: {
      enter: function() {
        return false;
      }
    },
    Variable: {
      enter: function(node, _key, _parent, _path, ancestors) {
        var inUse = getInUse(ancestors);
        if (inUse) {
          inUse.variables.add(node.name.value);
        }
      }
    },
    FragmentSpread: {
      enter: function(node, _key, _parent, _path, ancestors) {
        if (shouldRemoveField(node.directives)) {
          firstVisitMadeChanges = true;
          return null;
        }
        var inUse = getInUse(ancestors);
        if (inUse) {
          inUse.fragmentSpreads.add(node.name.value);
        }
      }
    },
    FragmentDefinition: {
      enter: function(node, _key, _parent, path) {
        originalFragmentDefsByPath.set(JSON.stringify(path), node);
      },
      leave: function(node, _key, _parent, path) {
        var originalNode = originalFragmentDefsByPath.get(JSON.stringify(path));
        if (node === originalNode) {
          return node;
        }
        if (
          // This logic applies only if the document contains one or more
          // operations, since removing all fragments from a document containing
          // only fragments makes the document useless.
          operationCount > 0 && node.selectionSet.selections.every(function(selection) {
            return selection.kind === Kind.FIELD && selection.name.value === "__typename";
          })
        ) {
          getInUseByFragmentName(node.name.value).removed = true;
          firstVisitMadeChanges = true;
          return null;
        }
      }
    },
    Directive: {
      leave: function(node) {
        if (directiveMatcher(node)) {
          firstVisitMadeChanges = true;
          return null;
        }
      }
    }
  });
  if (!firstVisitMadeChanges) {
    return doc;
  }
  var populateTransitiveVars = function(inUse) {
    if (!inUse.transitiveVars) {
      inUse.transitiveVars = new Set(inUse.variables);
      if (!inUse.removed) {
        inUse.fragmentSpreads.forEach(function(childFragmentName) {
          populateTransitiveVars(getInUseByFragmentName(childFragmentName)).transitiveVars.forEach(function(varName) {
            inUse.transitiveVars.add(varName);
          });
        });
      }
    }
    return inUse;
  };
  var allFragmentNamesUsed = /* @__PURE__ */ new Set();
  docWithoutDirectiveSubtrees.definitions.forEach(function(def) {
    if (def.kind === Kind.OPERATION_DEFINITION) {
      populateTransitiveVars(getInUseByOperationName(def.name && def.name.value)).fragmentSpreads.forEach(function(childFragmentName) {
        allFragmentNamesUsed.add(childFragmentName);
      });
    } else if (def.kind === Kind.FRAGMENT_DEFINITION && // If there are no operations in the document, then all fragment
    // definitions count as usages of their own fragment names. This heuristic
    // prevents accidentally removing all fragment definitions from the
    // document just because it contains no operations that use the fragments.
    operationCount === 0 && !getInUseByFragmentName(def.name.value).removed) {
      allFragmentNamesUsed.add(def.name.value);
    }
  });
  allFragmentNamesUsed.forEach(function(fragmentName) {
    populateTransitiveVars(getInUseByFragmentName(fragmentName)).fragmentSpreads.forEach(function(childFragmentName) {
      allFragmentNamesUsed.add(childFragmentName);
    });
  });
  var fragmentWillBeRemoved = function(fragmentName) {
    return !!// A fragment definition will be removed if there are no spreads that refer
    // to it, or the fragment was explicitly removed because it had no fields
    // other than __typename.
    (!allFragmentNamesUsed.has(fragmentName) || getInUseByFragmentName(fragmentName).removed);
  };
  var enterVisitor = {
    enter: function(node) {
      if (fragmentWillBeRemoved(node.name.value)) {
        return null;
      }
    }
  };
  return nullIfDocIsEmpty(visit(docWithoutDirectiveSubtrees, {
    // If the fragment is going to be removed, then leaving any dangling
    // FragmentSpread nodes with the same name would be a mistake.
    FragmentSpread: enterVisitor,
    // This is where the fragment definition is actually removed.
    FragmentDefinition: enterVisitor,
    OperationDefinition: {
      leave: function(node) {
        if (node.variableDefinitions) {
          var usedVariableNames_1 = populateTransitiveVars(
            // If an operation is anonymous, we use the empty string as its key.
            getInUseByOperationName(node.name && node.name.value)
          ).transitiveVars;
          if (usedVariableNames_1.size < node.variableDefinitions.length) {
            return __assign(__assign({}, node), {
              variableDefinitions: node.variableDefinitions.filter(function(varDef) {
                return usedVariableNames_1.has(varDef.variable.name.value);
              })
            });
          }
        }
      }
    }
  }));
}
var addTypenameToDocument = Object.assign(function(doc) {
  return visit(doc, {
    SelectionSet: {
      enter: function(node, _key, parent) {
        if (parent && parent.kind === Kind.OPERATION_DEFINITION) {
          return;
        }
        var selections = node.selections;
        if (!selections) {
          return;
        }
        var skip = selections.some(function(selection) {
          return isField(selection) && (selection.name.value === "__typename" || selection.name.value.lastIndexOf("__", 0) === 0);
        });
        if (skip) {
          return;
        }
        var field = parent;
        if (isField(field) && field.directives && field.directives.some(function(d) {
          return d.name.value === "export";
        })) {
          return;
        }
        return __assign(__assign({}, node), {
          selections: __spreadArray(__spreadArray([], selections, true), [TYPENAME_FIELD], false)
        });
      }
    }
  });
}, {
  added: function(field) {
    return field === TYPENAME_FIELD;
  }
});
function buildQueryFromSelectionSet(document) {
  var definition = getMainDefinition(document);
  var definitionOperation = definition.operation;
  if (definitionOperation === "query") {
    return document;
  }
  var modifiedDoc = visit(document, {
    OperationDefinition: {
      enter: function(node) {
        return __assign(__assign({}, node), {
          operation: "query"
        });
      }
    }
  });
  return modifiedDoc;
}
function removeClientSetsFromDocument(document) {
  checkDocument(document);
  var modifiedDoc = removeDirectivesFromDocument([{
    test: function(directive) {
      return directive.name.value === "client";
    },
    remove: true
  }], document);
  return modifiedDoc;
}
function addNonReactiveToNamedFragments(document) {
  checkDocument(document);
  return visit(document, {
    FragmentSpread: function(node) {
      var _a2;
      if ((_a2 = node.directives) === null || _a2 === void 0 ? void 0 : _a2.some(function(directive) {
        return directive.name.value === "unmask";
      })) {
        return;
      }
      return __assign(__assign({}, node), {
        directives: __spreadArray(__spreadArray([], node.directives || [], true), [{
          kind: Kind.DIRECTIVE,
          name: {
            kind: Kind.NAME,
            value: "nonreactive"
          }
        }], false)
      });
    }
  });
}

// node_modules/@apollo/client/utilities/common/mergeDeep.js
var hasOwnProperty3 = Object.prototype.hasOwnProperty;
function mergeDeep() {
  var sources = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }
  return mergeDeepArray(sources);
}
function mergeDeepArray(sources) {
  var target = sources[0] || {};
  var count = sources.length;
  if (count > 1) {
    var merger = new DeepMerger();
    for (var i = 1; i < count; ++i) {
      target = merger.merge(target, sources[i]);
    }
  }
  return target;
}
var defaultReconciler = function(target, source, property) {
  return this.merge(target[property], source[property]);
};
var DeepMerger = (
  /** @class */
  function() {
    function DeepMerger2(reconciler) {
      if (reconciler === void 0) {
        reconciler = defaultReconciler;
      }
      this.reconciler = reconciler;
      this.isObject = isNonNullObject;
      this.pastCopies = /* @__PURE__ */ new Set();
    }
    DeepMerger2.prototype.merge = function(target, source) {
      var _this = this;
      var context = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        context[_i - 2] = arguments[_i];
      }
      if (isNonNullObject(source) && isNonNullObject(target)) {
        Object.keys(source).forEach(function(sourceKey) {
          if (hasOwnProperty3.call(target, sourceKey)) {
            var targetValue = target[sourceKey];
            if (source[sourceKey] !== targetValue) {
              var result2 = _this.reconciler.apply(_this, __spreadArray([target, source, sourceKey], context, false));
              if (result2 !== targetValue) {
                target = _this.shallowCopyForMerge(target);
                target[sourceKey] = result2;
              }
            }
          } else {
            target = _this.shallowCopyForMerge(target);
            target[sourceKey] = source[sourceKey];
          }
        });
        return target;
      }
      return source;
    };
    DeepMerger2.prototype.shallowCopyForMerge = function(value) {
      if (isNonNullObject(value)) {
        if (!this.pastCopies.has(value)) {
          if (Array.isArray(value)) {
            value = value.slice(0);
          } else {
            value = __assign({
              __proto__: Object.getPrototypeOf(value)
            }, value);
          }
          this.pastCopies.add(value);
        }
      }
      return value;
    };
    return DeepMerger2;
  }()
);

// node_modules/zen-observable-ts/module.js
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function() {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
var hasSymbols = function() {
  return typeof Symbol === "function";
};
var hasSymbol = function(name) {
  return hasSymbols() && Boolean(Symbol[name]);
};
var getSymbol = function(name) {
  return hasSymbol(name) ? Symbol[name] : "@@" + name;
};
if (hasSymbols() && !hasSymbol("observable")) {
  Symbol.observable = Symbol("observable");
}
var SymbolIterator = getSymbol("iterator");
var SymbolObservable = getSymbol("observable");
var SymbolSpecies = getSymbol("species");
function getMethod(obj, key) {
  var value = obj[key];
  if (value == null) return void 0;
  if (typeof value !== "function") throw new TypeError(value + " is not a function");
  return value;
}
function getSpecies(obj) {
  var ctor = obj.constructor;
  if (ctor !== void 0) {
    ctor = ctor[SymbolSpecies];
    if (ctor === null) {
      ctor = void 0;
    }
  }
  return ctor !== void 0 ? ctor : Observable2;
}
function isObservable(x) {
  return x instanceof Observable2;
}
function hostReportError(e) {
  if (hostReportError.log) {
    hostReportError.log(e);
  } else {
    setTimeout(function() {
      throw e;
    });
  }
}
function enqueue(fn) {
  Promise.resolve().then(function() {
    try {
      fn();
    } catch (e) {
      hostReportError(e);
    }
  });
}
function cleanupSubscription(subscription) {
  var cleanup = subscription._cleanup;
  if (cleanup === void 0) return;
  subscription._cleanup = void 0;
  if (!cleanup) {
    return;
  }
  try {
    if (typeof cleanup === "function") {
      cleanup();
    } else {
      var unsubscribe = getMethod(cleanup, "unsubscribe");
      if (unsubscribe) {
        unsubscribe.call(cleanup);
      }
    }
  } catch (e) {
    hostReportError(e);
  }
}
function closeSubscription(subscription) {
  subscription._observer = void 0;
  subscription._queue = void 0;
  subscription._state = "closed";
}
function flushSubscription(subscription) {
  var queue = subscription._queue;
  if (!queue) {
    return;
  }
  subscription._queue = void 0;
  subscription._state = "ready";
  for (var i = 0; i < queue.length; ++i) {
    notifySubscription(subscription, queue[i].type, queue[i].value);
    if (subscription._state === "closed") break;
  }
}
function notifySubscription(subscription, type, value) {
  subscription._state = "running";
  var observer = subscription._observer;
  try {
    var m = getMethod(observer, type);
    switch (type) {
      case "next":
        if (m) m.call(observer, value);
        break;
      case "error":
        closeSubscription(subscription);
        if (m) m.call(observer, value);
        else throw value;
        break;
      case "complete":
        closeSubscription(subscription);
        if (m) m.call(observer);
        break;
    }
  } catch (e) {
    hostReportError(e);
  }
  if (subscription._state === "closed") cleanupSubscription(subscription);
  else if (subscription._state === "running") subscription._state = "ready";
}
function onNotify(subscription, type, value) {
  if (subscription._state === "closed") return;
  if (subscription._state === "buffering") {
    subscription._queue.push({
      type,
      value
    });
    return;
  }
  if (subscription._state !== "ready") {
    subscription._state = "buffering";
    subscription._queue = [{
      type,
      value
    }];
    enqueue(function() {
      return flushSubscription(subscription);
    });
    return;
  }
  notifySubscription(subscription, type, value);
}
var Subscription = /* @__PURE__ */ function() {
  function Subscription3(observer, subscriber) {
    this._cleanup = void 0;
    this._observer = observer;
    this._queue = void 0;
    this._state = "initializing";
    var subscriptionObserver = new SubscriptionObserver(this);
    try {
      this._cleanup = subscriber.call(void 0, subscriptionObserver);
    } catch (e) {
      subscriptionObserver.error(e);
    }
    if (this._state === "initializing") this._state = "ready";
  }
  var _proto = Subscription3.prototype;
  _proto.unsubscribe = function unsubscribe() {
    if (this._state !== "closed") {
      closeSubscription(this);
      cleanupSubscription(this);
    }
  };
  _createClass(Subscription3, [{
    key: "closed",
    get: function() {
      return this._state === "closed";
    }
  }]);
  return Subscription3;
}();
var SubscriptionObserver = /* @__PURE__ */ function() {
  function SubscriptionObserver2(subscription) {
    this._subscription = subscription;
  }
  var _proto2 = SubscriptionObserver2.prototype;
  _proto2.next = function next(value) {
    onNotify(this._subscription, "next", value);
  };
  _proto2.error = function error(value) {
    onNotify(this._subscription, "error", value);
  };
  _proto2.complete = function complete() {
    onNotify(this._subscription, "complete");
  };
  _createClass(SubscriptionObserver2, [{
    key: "closed",
    get: function() {
      return this._subscription._state === "closed";
    }
  }]);
  return SubscriptionObserver2;
}();
var Observable2 = /* @__PURE__ */ function() {
  function Observable3(subscriber) {
    if (!(this instanceof Observable3)) throw new TypeError("Observable cannot be called as a function");
    if (typeof subscriber !== "function") throw new TypeError("Observable initializer must be a function");
    this._subscriber = subscriber;
  }
  var _proto3 = Observable3.prototype;
  _proto3.subscribe = function subscribe(observer) {
    if (typeof observer !== "object" || observer === null) {
      observer = {
        next: observer,
        error: arguments[1],
        complete: arguments[2]
      };
    }
    return new Subscription(observer, this._subscriber);
  };
  _proto3.forEach = function forEach2(fn) {
    var _this = this;
    return new Promise(function(resolve, reject) {
      if (typeof fn !== "function") {
        reject(new TypeError(fn + " is not a function"));
        return;
      }
      function done() {
        subscription.unsubscribe();
        resolve();
      }
      var subscription = _this.subscribe({
        next: function(value) {
          try {
            fn(value, done);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  };
  _proto3.map = function map2(fn) {
    var _this2 = this;
    if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
    var C = getSpecies(this);
    return new C(function(observer) {
      return _this2.subscribe({
        next: function(value) {
          try {
            value = fn(value);
          } catch (e) {
            return observer.error(e);
          }
          observer.next(value);
        },
        error: function(e) {
          observer.error(e);
        },
        complete: function() {
          observer.complete();
        }
      });
    });
  };
  _proto3.filter = function filter(fn) {
    var _this3 = this;
    if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
    var C = getSpecies(this);
    return new C(function(observer) {
      return _this3.subscribe({
        next: function(value) {
          try {
            if (!fn(value)) return;
          } catch (e) {
            return observer.error(e);
          }
          observer.next(value);
        },
        error: function(e) {
          observer.error(e);
        },
        complete: function() {
          observer.complete();
        }
      });
    });
  };
  _proto3.reduce = function reduce(fn) {
    var _this4 = this;
    if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
    var C = getSpecies(this);
    var hasSeed = arguments.length > 1;
    var hasValue = false;
    var seed = arguments[1];
    var acc = seed;
    return new C(function(observer) {
      return _this4.subscribe({
        next: function(value) {
          var first = !hasValue;
          hasValue = true;
          if (!first || hasSeed) {
            try {
              acc = fn(acc, value);
            } catch (e) {
              return observer.error(e);
            }
          } else {
            acc = value;
          }
        },
        error: function(e) {
          observer.error(e);
        },
        complete: function() {
          if (!hasValue && !hasSeed) return observer.error(new TypeError("Cannot reduce an empty sequence"));
          observer.next(acc);
          observer.complete();
        }
      });
    });
  };
  _proto3.concat = function concat() {
    var _this5 = this;
    for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
      sources[_key] = arguments[_key];
    }
    var C = getSpecies(this);
    return new C(function(observer) {
      var subscription;
      var index = 0;
      function startNext(next) {
        subscription = next.subscribe({
          next: function(v) {
            observer.next(v);
          },
          error: function(e) {
            observer.error(e);
          },
          complete: function() {
            if (index === sources.length) {
              subscription = void 0;
              observer.complete();
            } else {
              startNext(C.from(sources[index++]));
            }
          }
        });
      }
      startNext(_this5);
      return function() {
        if (subscription) {
          subscription.unsubscribe();
          subscription = void 0;
        }
      };
    });
  };
  _proto3.flatMap = function flatMap(fn) {
    var _this6 = this;
    if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
    var C = getSpecies(this);
    return new C(function(observer) {
      var subscriptions = [];
      var outer = _this6.subscribe({
        next: function(value) {
          if (fn) {
            try {
              value = fn(value);
            } catch (e) {
              return observer.error(e);
            }
          }
          var inner = C.from(value).subscribe({
            next: function(value2) {
              observer.next(value2);
            },
            error: function(e) {
              observer.error(e);
            },
            complete: function() {
              var i = subscriptions.indexOf(inner);
              if (i >= 0) subscriptions.splice(i, 1);
              completeIfDone();
            }
          });
          subscriptions.push(inner);
        },
        error: function(e) {
          observer.error(e);
        },
        complete: function() {
          completeIfDone();
        }
      });
      function completeIfDone() {
        if (outer.closed && subscriptions.length === 0) observer.complete();
      }
      return function() {
        subscriptions.forEach(function(s) {
          return s.unsubscribe();
        });
        outer.unsubscribe();
      };
    });
  };
  _proto3[SymbolObservable] = function() {
    return this;
  };
  Observable3.from = function from2(x) {
    var C = typeof this === "function" ? this : Observable3;
    if (x == null) throw new TypeError(x + " is not an object");
    var method = getMethod(x, SymbolObservable);
    if (method) {
      var observable2 = method.call(x);
      if (Object(observable2) !== observable2) throw new TypeError(observable2 + " is not an object");
      if (isObservable(observable2) && observable2.constructor === C) return observable2;
      return new C(function(observer) {
        return observable2.subscribe(observer);
      });
    }
    if (hasSymbol("iterator")) {
      method = getMethod(x, SymbolIterator);
      if (method) {
        return new C(function(observer) {
          enqueue(function() {
            if (observer.closed) return;
            for (var _iterator = _createForOfIteratorHelperLoose(method.call(x)), _step; !(_step = _iterator()).done; ) {
              var item = _step.value;
              observer.next(item);
              if (observer.closed) return;
            }
            observer.complete();
          });
        });
      }
    }
    if (Array.isArray(x)) {
      return new C(function(observer) {
        enqueue(function() {
          if (observer.closed) return;
          for (var i = 0; i < x.length; ++i) {
            observer.next(x[i]);
            if (observer.closed) return;
          }
          observer.complete();
        });
      });
    }
    throw new TypeError(x + " is not observable");
  };
  Observable3.of = function of() {
    for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      items[_key2] = arguments[_key2];
    }
    var C = typeof this === "function" ? this : Observable3;
    return new C(function(observer) {
      enqueue(function() {
        if (observer.closed) return;
        for (var i = 0; i < items.length; ++i) {
          observer.next(items[i]);
          if (observer.closed) return;
        }
        observer.complete();
      });
    });
  };
  _createClass(Observable3, null, [{
    key: SymbolSpecies,
    get: function() {
      return this;
    }
  }]);
  return Observable3;
}();
if (hasSymbols()) {
  Object.defineProperty(Observable2, Symbol("extensions"), {
    value: {
      symbol: SymbolObservable,
      hostReportError
    },
    configurable: true
  });
}

// node_modules/symbol-observable/es/ponyfill.js
function symbolObservablePonyfill(root2) {
  var result2;
  var Symbol2 = root2.Symbol;
  if (typeof Symbol2 === "function") {
    if (Symbol2.observable) {
      result2 = Symbol2.observable;
    } else {
      if (typeof Symbol2.for === "function") {
        result2 = Symbol2.for("https://github.com/benlesh/symbol-observable");
      } else {
        result2 = Symbol2("https://github.com/benlesh/symbol-observable");
      }
      try {
        Symbol2.observable = result2;
      } catch (err) {
      }
    }
  } else {
    result2 = "@@observable";
  }
  return result2;
}

// node_modules/symbol-observable/es/index.js
var root;
if (typeof self !== "undefined") {
  root = self;
} else if (typeof window !== "undefined") {
  root = window;
} else if (typeof global !== "undefined") {
  root = global;
} else if (typeof module !== "undefined") {
  root = module;
} else {
  root = Function("return this")();
}
var result = symbolObservablePonyfill(root);

// node_modules/@apollo/client/utilities/observables/Observable.js
var prototype = Observable2.prototype;
var fakeObsSymbol = "@@observable";
if (!prototype[fakeObsSymbol]) {
  prototype[fakeObsSymbol] = function() {
    return this;
  };
}

// node_modules/@apollo/client/utilities/promises/preventUnhandledRejection.js
function preventUnhandledRejection(promise) {
  promise.catch(function() {
  });
  return promise;
}

// node_modules/@apollo/client/utilities/common/cloneDeep.js
var toString = Object.prototype.toString;
function cloneDeep(value) {
  return cloneDeepHelper(value);
}
function cloneDeepHelper(val, seen) {
  switch (toString.call(val)) {
    case "[object Array]": {
      seen = seen || /* @__PURE__ */ new Map();
      if (seen.has(val)) return seen.get(val);
      var copy_1 = val.slice(0);
      seen.set(val, copy_1);
      copy_1.forEach(function(child, i) {
        copy_1[i] = cloneDeepHelper(child, seen);
      });
      return copy_1;
    }
    case "[object Object]": {
      seen = seen || /* @__PURE__ */ new Map();
      if (seen.has(val)) return seen.get(val);
      var copy_2 = Object.create(Object.getPrototypeOf(val));
      seen.set(val, copy_2);
      Object.keys(val).forEach(function(key) {
        copy_2[key] = cloneDeepHelper(val[key], seen);
      });
      return copy_2;
    }
    default:
      return val;
  }
}

// node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js
function deepFreeze(value) {
  var workSet = /* @__PURE__ */ new Set([value]);
  workSet.forEach(function(obj) {
    if (isNonNullObject(obj) && shallowFreeze(obj) === obj) {
      Object.getOwnPropertyNames(obj).forEach(function(name) {
        if (isNonNullObject(obj[name])) workSet.add(obj[name]);
      });
    }
  });
  return value;
}
function shallowFreeze(obj) {
  if (globalThis.__DEV__ !== false && !Object.isFrozen(obj)) {
    try {
      Object.freeze(obj);
    } catch (e) {
      if (e instanceof TypeError) return null;
      throw e;
    }
  }
  return obj;
}
function maybeDeepFreeze(obj) {
  if (globalThis.__DEV__ !== false) {
    deepFreeze(obj);
  }
  return obj;
}

// node_modules/@apollo/client/utilities/observables/iteration.js
function iterateObserversSafely(observers, method, argument) {
  var observersWithMethod = [];
  observers.forEach(function(obs) {
    return obs[method] && observersWithMethod.push(obs);
  });
  observersWithMethod.forEach(function(obs) {
    return obs[method](argument);
  });
}

// node_modules/@apollo/client/utilities/observables/asyncMap.js
function asyncMap(observable2, mapFn, catchFn) {
  return new Observable2(function(observer) {
    var promiseQueue = {
      // Normally we would initialize promiseQueue to Promise.resolve(), but
      // in this case, for backwards compatibility, we need to be careful to
      // invoke the first callback synchronously.
      then: function(callback) {
        return new Promise(function(resolve) {
          return resolve(callback());
        });
      }
    };
    function makeCallback(examiner, key) {
      return function(arg) {
        if (examiner) {
          var both = function() {
            return observer.closed ? (
              /* will be swallowed */
              0
            ) : examiner(arg);
          };
          promiseQueue = promiseQueue.then(both, both).then(function(result2) {
            return observer.next(result2);
          }, function(error) {
            return observer.error(error);
          });
        } else {
          observer[key](arg);
        }
      };
    }
    var handler = {
      next: makeCallback(mapFn, "next"),
      error: makeCallback(catchFn, "error"),
      complete: function() {
        promiseQueue.then(function() {
          return observer.complete();
        });
      }
    };
    var sub = observable2.subscribe(handler);
    return function() {
      return sub.unsubscribe();
    };
  });
}

// node_modules/@apollo/client/utilities/observables/subclassing.js
function fixObservableSubclass(subclass) {
  function set(key) {
    Object.defineProperty(subclass, key, {
      value: Observable2
    });
  }
  if (canUseSymbol && Symbol.species) {
    set(Symbol.species);
  }
  set("@@species");
  return subclass;
}

// node_modules/@apollo/client/utilities/observables/Concast.js
function isPromiseLike(value) {
  return value && typeof value.then === "function";
}
var Concast = (
  /** @class */
  function(_super) {
    __extends(Concast2, _super);
    function Concast2(sources) {
      var _this = _super.call(this, function(observer) {
        _this.addObserver(observer);
        return function() {
          return _this.removeObserver(observer);
        };
      }) || this;
      _this.observers = /* @__PURE__ */ new Set();
      _this.promise = new Promise(function(resolve, reject) {
        _this.resolve = resolve;
        _this.reject = reject;
      });
      _this.handlers = {
        next: function(result2) {
          if (_this.sub !== null) {
            _this.latest = ["next", result2];
            _this.notify("next", result2);
            iterateObserversSafely(_this.observers, "next", result2);
          }
        },
        error: function(error) {
          var sub = _this.sub;
          if (sub !== null) {
            if (sub) setTimeout(function() {
              return sub.unsubscribe();
            });
            _this.sub = null;
            _this.latest = ["error", error];
            _this.reject(error);
            _this.notify("error", error);
            iterateObserversSafely(_this.observers, "error", error);
          }
        },
        complete: function() {
          var _a2 = _this, sub = _a2.sub, _b = _a2.sources, sources2 = _b === void 0 ? [] : _b;
          if (sub !== null) {
            var value = sources2.shift();
            if (!value) {
              if (sub) setTimeout(function() {
                return sub.unsubscribe();
              });
              _this.sub = null;
              if (_this.latest && _this.latest[0] === "next") {
                _this.resolve(_this.latest[1]);
              } else {
                _this.resolve();
              }
              _this.notify("complete");
              iterateObserversSafely(_this.observers, "complete");
            } else if (isPromiseLike(value)) {
              value.then(function(obs) {
                return _this.sub = obs.subscribe(_this.handlers);
              }, _this.handlers.error);
            } else {
              _this.sub = value.subscribe(_this.handlers);
            }
          }
        }
      };
      _this.nextResultListeners = /* @__PURE__ */ new Set();
      _this.cancel = function(reason) {
        _this.reject(reason);
        _this.sources = [];
        _this.handlers.error(reason);
      };
      _this.promise.catch(function(_) {
      });
      if (typeof sources === "function") {
        sources = [new Observable2(sources)];
      }
      if (isPromiseLike(sources)) {
        sources.then(function(iterable) {
          return _this.start(iterable);
        }, _this.handlers.error);
      } else {
        _this.start(sources);
      }
      return _this;
    }
    Concast2.prototype.start = function(sources) {
      if (this.sub !== void 0) return;
      this.sources = Array.from(sources);
      this.handlers.complete();
    };
    Concast2.prototype.deliverLastMessage = function(observer) {
      if (this.latest) {
        var nextOrError = this.latest[0];
        var method = observer[nextOrError];
        if (method) {
          method.call(observer, this.latest[1]);
        }
        if (this.sub === null && nextOrError === "next" && observer.complete) {
          observer.complete();
        }
      }
    };
    Concast2.prototype.addObserver = function(observer) {
      if (!this.observers.has(observer)) {
        this.deliverLastMessage(observer);
        this.observers.add(observer);
      }
    };
    Concast2.prototype.removeObserver = function(observer) {
      if (this.observers.delete(observer) && this.observers.size < 1) {
        this.handlers.complete();
      }
    };
    Concast2.prototype.notify = function(method, arg) {
      var nextResultListeners = this.nextResultListeners;
      if (nextResultListeners.size) {
        this.nextResultListeners = /* @__PURE__ */ new Set();
        nextResultListeners.forEach(function(listener) {
          return listener(method, arg);
        });
      }
    };
    Concast2.prototype.beforeNext = function(callback) {
      var called = false;
      this.nextResultListeners.add(function(method, arg) {
        if (!called) {
          called = true;
          callback(method, arg);
        }
      });
    };
    return Concast2;
  }(Observable2)
);
fixObservableSubclass(Concast);

// node_modules/@apollo/client/utilities/common/incrementalResult.js
function isExecutionPatchIncrementalResult(value) {
  return "incremental" in value;
}
function isExecutionPatchInitialResult(value) {
  return "hasNext" in value && "data" in value;
}
function isExecutionPatchResult(value) {
  return isExecutionPatchIncrementalResult(value) || isExecutionPatchInitialResult(value);
}
function isApolloPayloadResult(value) {
  return isNonNullObject(value) && "payload" in value;
}
function mergeIncrementalData(prevResult, result2) {
  var mergedData = prevResult;
  var merger = new DeepMerger();
  if (isExecutionPatchIncrementalResult(result2) && isNonEmptyArray(result2.incremental)) {
    result2.incremental.forEach(function(_a2) {
      var data = _a2.data, path = _a2.path;
      for (var i = path.length - 1; i >= 0; --i) {
        var key = path[i];
        var isNumericKey = !isNaN(+key);
        var parent_1 = isNumericKey ? [] : {};
        parent_1[key] = data;
        data = parent_1;
      }
      mergedData = merger.merge(mergedData, data);
    });
  }
  return mergedData;
}

// node_modules/@apollo/client/utilities/common/errorHandling.js
function graphQLResultHasError(result2) {
  var errors = getGraphQLErrorsFromResult(result2);
  return isNonEmptyArray(errors);
}
function getGraphQLErrorsFromResult(result2) {
  var graphQLErrors = isNonEmptyArray(result2.errors) ? result2.errors.slice(0) : [];
  if (isExecutionPatchIncrementalResult(result2) && isNonEmptyArray(result2.incremental)) {
    result2.incremental.forEach(function(incrementalResult) {
      if (incrementalResult.errors) {
        graphQLErrors.push.apply(graphQLErrors, incrementalResult.errors);
      }
    });
  }
  return graphQLErrors;
}

// node_modules/@apollo/client/utilities/common/compact.js
function compact() {
  var objects = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    objects[_i] = arguments[_i];
  }
  var result2 = /* @__PURE__ */ Object.create(null);
  objects.forEach(function(obj) {
    if (!obj) return;
    Object.keys(obj).forEach(function(key) {
      var value = obj[key];
      if (value !== void 0) {
        result2[key] = value;
      }
    });
  });
  return result2;
}

// node_modules/@apollo/client/utilities/common/mergeOptions.js
function mergeOptions(defaults, options) {
  return compact(defaults, options, options.variables && {
    variables: compact(__assign(__assign({}, defaults && defaults.variables), options.variables))
  });
}

// node_modules/@apollo/client/link/utils/fromError.js
function fromError(errorValue) {
  return new Observable2(function(observer) {
    observer.error(errorValue);
  });
}

// node_modules/@apollo/client/link/utils/throwServerError.js
var throwServerError = function(response, result2, message) {
  var error = new Error(message);
  error.name = "ServerError";
  error.response = response;
  error.statusCode = response.status;
  error.result = result2;
  throw error;
};

// node_modules/@apollo/client/link/utils/validateOperation.js
function validateOperation(operation) {
  var OPERATION_FIELDS = ["query", "operationName", "variables", "extensions", "context"];
  for (var _i = 0, _a2 = Object.keys(operation); _i < _a2.length; _i++) {
    var key = _a2[_i];
    if (OPERATION_FIELDS.indexOf(key) < 0) {
      throw newInvariantError(46, key);
    }
  }
  return operation;
}

// node_modules/@apollo/client/link/utils/createOperation.js
function createOperation(starting, operation) {
  var context = __assign({}, starting);
  var setContext = function(next) {
    if (typeof next === "function") {
      context = __assign(__assign({}, context), next(context));
    } else {
      context = __assign(__assign({}, context), next);
    }
  };
  var getContext = function() {
    return __assign({}, context);
  };
  Object.defineProperty(operation, "setContext", {
    enumerable: false,
    value: setContext
  });
  Object.defineProperty(operation, "getContext", {
    enumerable: false,
    value: getContext
  });
  return operation;
}

// node_modules/@apollo/client/link/utils/transformOperation.js
function transformOperation(operation) {
  var transformedOperation = {
    variables: operation.variables || {},
    extensions: operation.extensions || {},
    operationName: operation.operationName,
    query: operation.query
  };
  if (!transformedOperation.operationName) {
    transformedOperation.operationName = typeof transformedOperation.query !== "string" ? getOperationName(transformedOperation.query) || void 0 : "";
  }
  return transformedOperation;
}

// node_modules/@apollo/client/link/utils/filterOperationVariables.js
function filterOperationVariables(variables, query) {
  var result2 = __assign({}, variables);
  var unusedNames = new Set(Object.keys(variables));
  visit(query, {
    Variable: function(node, _key, parent) {
      if (parent && parent.kind !== "VariableDefinition") {
        unusedNames.delete(node.name.value);
      }
    }
  });
  unusedNames.forEach(function(name) {
    delete result2[name];
  });
  return result2;
}

// node_modules/@apollo/client/link/core/ApolloLink.js
function passthrough(op, forward) {
  return forward ? forward(op) : Observable2.of();
}
function toLink(handler) {
  return typeof handler === "function" ? new ApolloLink(handler) : handler;
}
function isTerminating(link) {
  return link.request.length <= 1;
}
var ApolloLink = (
  /** @class */
  function() {
    function ApolloLink2(request) {
      if (request) this.request = request;
    }
    ApolloLink2.empty = function() {
      return new ApolloLink2(function() {
        return Observable2.of();
      });
    };
    ApolloLink2.from = function(links) {
      if (links.length === 0) return ApolloLink2.empty();
      return links.map(toLink).reduce(function(x, y) {
        return x.concat(y);
      });
    };
    ApolloLink2.split = function(test, left, right) {
      var leftLink = toLink(left);
      var rightLink = toLink(right || new ApolloLink2(passthrough));
      var ret;
      if (isTerminating(leftLink) && isTerminating(rightLink)) {
        ret = new ApolloLink2(function(operation) {
          return test(operation) ? leftLink.request(operation) || Observable2.of() : rightLink.request(operation) || Observable2.of();
        });
      } else {
        ret = new ApolloLink2(function(operation, forward) {
          return test(operation) ? leftLink.request(operation, forward) || Observable2.of() : rightLink.request(operation, forward) || Observable2.of();
        });
      }
      return Object.assign(ret, {
        left: leftLink,
        right: rightLink
      });
    };
    ApolloLink2.execute = function(link, operation) {
      return link.request(createOperation(operation.context, transformOperation(validateOperation(operation)))) || Observable2.of();
    };
    ApolloLink2.concat = function(first, second) {
      var firstLink = toLink(first);
      if (isTerminating(firstLink)) {
        globalThis.__DEV__ !== false && invariant2.warn(38, firstLink);
        return firstLink;
      }
      var nextLink = toLink(second);
      var ret;
      if (isTerminating(nextLink)) {
        ret = new ApolloLink2(function(operation) {
          return firstLink.request(operation, function(op) {
            return nextLink.request(op) || Observable2.of();
          }) || Observable2.of();
        });
      } else {
        ret = new ApolloLink2(function(operation, forward) {
          return firstLink.request(operation, function(op) {
            return nextLink.request(op, forward) || Observable2.of();
          }) || Observable2.of();
        });
      }
      return Object.assign(ret, {
        left: firstLink,
        right: nextLink
      });
    };
    ApolloLink2.prototype.split = function(test, left, right) {
      return this.concat(ApolloLink2.split(test, left, right || new ApolloLink2(passthrough)));
    };
    ApolloLink2.prototype.concat = function(next) {
      return ApolloLink2.concat(this, next);
    };
    ApolloLink2.prototype.request = function(operation, forward) {
      throw newInvariantError(39);
    };
    ApolloLink2.prototype.onError = function(error, observer) {
      if (observer && observer.error) {
        observer.error(error);
        return false;
      }
      throw error;
    };
    ApolloLink2.prototype.setOnError = function(fn) {
      this.onError = fn;
      return this;
    };
    return ApolloLink2;
  }()
);

// node_modules/@apollo/client/link/core/split.js
var split = ApolloLink.split;

// node_modules/@apollo/client/link/core/execute.js
var execute = ApolloLink.execute;

// node_modules/@wry/equality/lib/index.js
var {
  toString: toString2,
  hasOwnProperty: hasOwnProperty4
} = Object.prototype;
var fnToStr = Function.prototype.toString;
var previousComparisons = /* @__PURE__ */ new Map();
function equal(a, b) {
  try {
    return check(a, b);
  } finally {
    previousComparisons.clear();
  }
}
var lib_default = equal;
function check(a, b) {
  if (a === b) {
    return true;
  }
  const aTag = toString2.call(a);
  const bTag = toString2.call(b);
  if (aTag !== bTag) {
    return false;
  }
  switch (aTag) {
    case "[object Array]":
      if (a.length !== b.length) return false;
    // Fall through to object case...
    case "[object Object]": {
      if (previouslyCompared(a, b)) return true;
      const aKeys = definedKeys(a);
      const bKeys = definedKeys(b);
      const keyCount = aKeys.length;
      if (keyCount !== bKeys.length) return false;
      for (let k = 0; k < keyCount; ++k) {
        if (!hasOwnProperty4.call(b, aKeys[k])) {
          return false;
        }
      }
      for (let k = 0; k < keyCount; ++k) {
        const key = aKeys[k];
        if (!check(a[key], b[key])) {
          return false;
        }
      }
      return true;
    }
    case "[object Error]":
      return a.name === b.name && a.message === b.message;
    case "[object Number]":
      if (a !== a) return b !== b;
    // Fall through to shared +a === +b case...
    case "[object Boolean]":
    case "[object Date]":
      return +a === +b;
    case "[object RegExp]":
    case "[object String]":
      return a == `${b}`;
    case "[object Map]":
    case "[object Set]": {
      if (a.size !== b.size) return false;
      if (previouslyCompared(a, b)) return true;
      const aIterator = a.entries();
      const isMap = aTag === "[object Map]";
      while (true) {
        const info = aIterator.next();
        if (info.done) break;
        const [aKey, aValue] = info.value;
        if (!b.has(aKey)) {
          return false;
        }
        if (isMap && !check(aValue, b.get(aKey))) {
          return false;
        }
      }
      return true;
    }
    case "[object Uint16Array]":
    case "[object Uint8Array]":
    // Buffer, in Node.js.
    case "[object Uint32Array]":
    case "[object Int32Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object ArrayBuffer]":
      a = new Uint8Array(a);
      b = new Uint8Array(b);
    // Fall through...
    case "[object DataView]": {
      let len = a.byteLength;
      if (len === b.byteLength) {
        while (len-- && a[len] === b[len]) {
        }
      }
      return len === -1;
    }
    case "[object AsyncFunction]":
    case "[object GeneratorFunction]":
    case "[object AsyncGeneratorFunction]":
    case "[object Function]": {
      const aCode = fnToStr.call(a);
      if (aCode !== fnToStr.call(b)) {
        return false;
      }
      return !endsWith(aCode, nativeCodeSuffix);
    }
  }
  return false;
}
function definedKeys(obj) {
  return Object.keys(obj).filter(isDefinedKey, obj);
}
function isDefinedKey(key) {
  return this[key] !== void 0;
}
var nativeCodeSuffix = "{ [native code] }";
function endsWith(full, suffix) {
  const fromIndex = full.length - suffix.length;
  return fromIndex >= 0 && full.indexOf(suffix, fromIndex) === fromIndex;
}
function previouslyCompared(a, b) {
  let bSet = previousComparisons.get(a);
  if (bSet) {
    if (bSet.has(b)) return true;
  } else {
    previousComparisons.set(a, bSet = /* @__PURE__ */ new Set());
  }
  bSet.add(b);
  return false;
}

// node_modules/@apollo/client/core/equalByQuery.js
function equalByQuery(query, _a2, _b, variables) {
  var aData = _a2.data, aRest = __rest(_a2, ["data"]);
  var bData = _b.data, bRest = __rest(_b, ["data"]);
  return lib_default(aRest, bRest) && equalBySelectionSet(getMainDefinition(query).selectionSet, aData, bData, {
    fragmentMap: createFragmentMap(getFragmentDefinitions(query)),
    variables
  });
}
function equalBySelectionSet(selectionSet, aResult, bResult, context) {
  if (aResult === bResult) {
    return true;
  }
  var seenSelections = /* @__PURE__ */ new Set();
  return selectionSet.selections.every(function(selection) {
    if (seenSelections.has(selection)) return true;
    seenSelections.add(selection);
    if (!shouldInclude(selection, context.variables)) return true;
    if (selectionHasNonreactiveDirective(selection)) return true;
    if (isField(selection)) {
      var resultKey = resultKeyNameFromField(selection);
      var aResultChild = aResult && aResult[resultKey];
      var bResultChild = bResult && bResult[resultKey];
      var childSelectionSet = selection.selectionSet;
      if (!childSelectionSet) {
        return lib_default(aResultChild, bResultChild);
      }
      var aChildIsArray = Array.isArray(aResultChild);
      var bChildIsArray = Array.isArray(bResultChild);
      if (aChildIsArray !== bChildIsArray) return false;
      if (aChildIsArray && bChildIsArray) {
        var length_1 = aResultChild.length;
        if (bResultChild.length !== length_1) {
          return false;
        }
        for (var i = 0; i < length_1; ++i) {
          if (!equalBySelectionSet(childSelectionSet, aResultChild[i], bResultChild[i], context)) {
            return false;
          }
        }
        return true;
      }
      return equalBySelectionSet(childSelectionSet, aResultChild, bResultChild, context);
    } else {
      var fragment = getFragmentFromSelection(selection, context.fragmentMap);
      if (fragment) {
        if (selectionHasNonreactiveDirective(fragment)) return true;
        return equalBySelectionSet(
          fragment.selectionSet,
          // Notice that we reuse the same aResult and bResult values here,
          // since the fragment ...spread does not specify a field name, but
          // consists of multiple fields (within the fragment's selection set)
          // that should be applied to the current result value(s).
          aResult,
          bResult,
          context
        );
      }
    }
  });
}
function selectionHasNonreactiveDirective(selection) {
  return !!selection.directives && selection.directives.some(directiveIsNonreactive);
}
function directiveIsNonreactive(dir) {
  return dir.name.value === "nonreactive";
}

// node_modules/@apollo/client/masking/utils.js
var MapImpl = canUseWeakMap ? WeakMap : Map;
var SetImpl = canUseWeakSet ? WeakSet : Set;
var disableWarningsSlot = new Slot();
var issuedWarning = false;
function warnOnImproperCacheImplementation() {
  if (!issuedWarning) {
    issuedWarning = true;
    globalThis.__DEV__ !== false && invariant2.warn(52);
  }
}

// node_modules/@apollo/client/masking/maskDefinition.js
function maskDefinition(data, selectionSet, context) {
  return disableWarningsSlot.withValue(true, function() {
    var masked = maskSelectionSet(data, selectionSet, context, false);
    if (Object.isFrozen(data)) {
      maybeDeepFreeze(masked);
    }
    return masked;
  });
}
function getMutableTarget(data, mutableTargets) {
  if (mutableTargets.has(data)) {
    return mutableTargets.get(data);
  }
  var mutableTarget = Array.isArray(data) ? [] : /* @__PURE__ */ Object.create(null);
  mutableTargets.set(data, mutableTarget);
  return mutableTarget;
}
function maskSelectionSet(data, selectionSet, context, migration, path) {
  var _a2;
  var knownChanged = context.knownChanged;
  var memo = getMutableTarget(data, context.mutableTargets);
  if (Array.isArray(data)) {
    for (var _i = 0, _b = Array.from(data.entries()); _i < _b.length; _i++) {
      var _c = _b[_i], index = _c[0], item = _c[1];
      if (item === null) {
        memo[index] = null;
        continue;
      }
      var masked = maskSelectionSet(item, selectionSet, context, migration, globalThis.__DEV__ !== false ? "".concat(path || "", "[").concat(index, "]") : void 0);
      if (knownChanged.has(masked)) {
        knownChanged.add(memo);
      }
      memo[index] = masked;
    }
    return knownChanged.has(memo) ? memo : data;
  }
  for (var _d = 0, _e = selectionSet.selections; _d < _e.length; _d++) {
    var selection = _e[_d];
    var value = void 0;
    if (migration) {
      knownChanged.add(memo);
    }
    if (selection.kind === Kind.FIELD) {
      var keyName = resultKeyNameFromField(selection);
      var childSelectionSet = selection.selectionSet;
      value = memo[keyName] || data[keyName];
      if (value === void 0) {
        continue;
      }
      if (childSelectionSet && value !== null) {
        var masked = maskSelectionSet(data[keyName], childSelectionSet, context, migration, globalThis.__DEV__ !== false ? "".concat(path || "", ".").concat(keyName) : void 0);
        if (knownChanged.has(masked)) {
          value = masked;
        }
      }
      if (!(globalThis.__DEV__ !== false)) {
        memo[keyName] = value;
      }
      if (globalThis.__DEV__ !== false) {
        if (migration && keyName !== "__typename" && // either the field is not present in the memo object
        // or it has a `get` descriptor, not a `value` descriptor
        // => it is a warning accessor and we can overwrite it
        // with another accessor
        !((_a2 = Object.getOwnPropertyDescriptor(memo, keyName)) === null || _a2 === void 0 ? void 0 : _a2.value)) {
          Object.defineProperty(memo, keyName, getAccessorWarningDescriptor(keyName, value, path || "", context.operationName, context.operationType));
        } else {
          delete memo[keyName];
          memo[keyName] = value;
        }
      }
    }
    if (selection.kind === Kind.INLINE_FRAGMENT && (!selection.typeCondition || context.cache.fragmentMatches(selection, data.__typename))) {
      value = maskSelectionSet(data, selection.selectionSet, context, migration, path);
    }
    if (selection.kind === Kind.FRAGMENT_SPREAD) {
      var fragmentName = selection.name.value;
      var fragment = context.fragmentMap[fragmentName] || (context.fragmentMap[fragmentName] = context.cache.lookupFragment(fragmentName));
      invariant2(fragment, 47, fragmentName);
      var mode = getFragmentMaskMode(selection);
      if (mode !== "mask") {
        value = maskSelectionSet(data, fragment.selectionSet, context, mode === "migrate", path);
      }
    }
    if (knownChanged.has(value)) {
      knownChanged.add(memo);
    }
  }
  if ("__typename" in data && !("__typename" in memo)) {
    memo.__typename = data.__typename;
  }
  if (Object.keys(memo).length !== Object.keys(data).length) {
    knownChanged.add(memo);
  }
  return knownChanged.has(memo) ? memo : data;
}
function getAccessorWarningDescriptor(fieldName, value, path, operationName, operationType) {
  var getValue = function() {
    if (disableWarningsSlot.getValue()) {
      return value;
    }
    globalThis.__DEV__ !== false && invariant2.warn(48, operationName ? "".concat(operationType, " '").concat(operationName, "'") : "anonymous ".concat(operationType), "".concat(path, ".").concat(fieldName).replace(/^\./, ""));
    getValue = function() {
      return value;
    };
    return value;
  };
  return {
    get: function() {
      return getValue();
    },
    set: function(newValue) {
      getValue = function() {
        return newValue;
      };
    },
    enumerable: true,
    configurable: true
  };
}

// node_modules/@apollo/client/masking/maskFragment.js
function maskFragment(data, document, cache, fragmentName) {
  if (!cache.fragmentMatches) {
    if (globalThis.__DEV__ !== false) {
      warnOnImproperCacheImplementation();
    }
    return data;
  }
  var fragments = document.definitions.filter(function(node) {
    return node.kind === Kind.FRAGMENT_DEFINITION;
  });
  if (typeof fragmentName === "undefined") {
    invariant2(fragments.length === 1, 49, fragments.length);
    fragmentName = fragments[0].name.value;
  }
  var fragment = fragments.find(function(fragment2) {
    return fragment2.name.value === fragmentName;
  });
  invariant2(!!fragment, 50, fragmentName);
  if (data == null) {
    return data;
  }
  if (lib_default(data, {})) {
    return data;
  }
  return maskDefinition(data, fragment.selectionSet, {
    operationType: "fragment",
    operationName: fragment.name.value,
    fragmentMap: createFragmentMap(getFragmentDefinitions(document)),
    cache,
    mutableTargets: new MapImpl(),
    knownChanged: new SetImpl()
  });
}

// node_modules/@apollo/client/masking/maskOperation.js
function maskOperation(data, document, cache) {
  var _a2;
  if (!cache.fragmentMatches) {
    if (globalThis.__DEV__ !== false) {
      warnOnImproperCacheImplementation();
    }
    return data;
  }
  var definition = getOperationDefinition(document);
  invariant2(definition, 51);
  if (data == null) {
    return data;
  }
  return maskDefinition(data, definition.selectionSet, {
    operationType: definition.operation,
    operationName: (_a2 = definition.name) === null || _a2 === void 0 ? void 0 : _a2.value,
    fragmentMap: createFragmentMap(getFragmentDefinitions(document)),
    cache,
    mutableTargets: new MapImpl(),
    knownChanged: new SetImpl()
  });
}

// node_modules/@apollo/client/cache/core/cache.js
var ApolloCache = (
  /** @class */
  function() {
    function ApolloCache2() {
      this.assumeImmutableResults = false;
      this.getFragmentDoc = wrap3(getFragmentQueryDocument, {
        max: cacheSizes["cache.fragmentQueryDocuments"] || 1e3,
        cache: WeakCache
      });
    }
    ApolloCache2.prototype.lookupFragment = function(fragmentName) {
      return null;
    };
    ApolloCache2.prototype.batch = function(options) {
      var _this = this;
      var optimisticId = typeof options.optimistic === "string" ? options.optimistic : options.optimistic === false ? null : void 0;
      var updateResult;
      this.performTransaction(function() {
        return updateResult = options.update(_this);
      }, optimisticId);
      return updateResult;
    };
    ApolloCache2.prototype.recordOptimisticTransaction = function(transaction, optimisticId) {
      this.performTransaction(transaction, optimisticId);
    };
    ApolloCache2.prototype.transformDocument = function(document) {
      return document;
    };
    ApolloCache2.prototype.transformForLink = function(document) {
      return document;
    };
    ApolloCache2.prototype.identify = function(object) {
      return;
    };
    ApolloCache2.prototype.gc = function() {
      return [];
    };
    ApolloCache2.prototype.modify = function(options) {
      return false;
    };
    ApolloCache2.prototype.readQuery = function(options, optimistic) {
      if (optimistic === void 0) {
        optimistic = !!options.optimistic;
      }
      return this.read(__assign(__assign({}, options), {
        rootId: options.id || "ROOT_QUERY",
        optimistic
      }));
    };
    ApolloCache2.prototype.watchFragment = function(options) {
      var _this = this;
      var fragment = options.fragment, fragmentName = options.fragmentName, from2 = options.from, _a2 = options.optimistic, optimistic = _a2 === void 0 ? true : _a2, otherOptions = __rest(options, ["fragment", "fragmentName", "from", "optimistic"]);
      var query = this.getFragmentDoc(fragment, fragmentName);
      var id = typeof from2 === "undefined" || typeof from2 === "string" ? from2 : this.identify(from2);
      var dataMasking = !!options[Symbol.for("apollo.dataMasking")];
      if (globalThis.__DEV__ !== false) {
        var actualFragmentName = fragmentName || getFragmentDefinition(fragment).name.value;
        if (!id) {
          globalThis.__DEV__ !== false && invariant2.warn(1, actualFragmentName);
        }
      }
      var diffOptions = __assign(__assign({}, otherOptions), {
        returnPartialData: true,
        id,
        query,
        optimistic
      });
      var latestDiff;
      return new Observable2(function(observer) {
        return _this.watch(__assign(__assign({}, diffOptions), {
          immediate: true,
          callback: function(diff) {
            var data = dataMasking ? maskFragment(diff.result, fragment, _this, fragmentName) : diff.result;
            if (
              // Always ensure we deliver the first result
              latestDiff && equalByQuery(
                query,
                {
                  data: latestDiff.result
                },
                {
                  data
                },
                // TODO: Fix the type on WatchFragmentOptions so that TVars
                // extends OperationVariables
                options.variables
              )
            ) {
              return;
            }
            var result2 = {
              data,
              complete: !!diff.complete
            };
            if (diff.missing) {
              result2.missing = mergeDeepArray(diff.missing.map(function(error) {
                return error.missing;
              }));
            }
            latestDiff = __assign(__assign({}, diff), {
              result: data
            });
            observer.next(result2);
          }
        }));
      });
    };
    ApolloCache2.prototype.readFragment = function(options, optimistic) {
      if (optimistic === void 0) {
        optimistic = !!options.optimistic;
      }
      return this.read(__assign(__assign({}, options), {
        query: this.getFragmentDoc(options.fragment, options.fragmentName),
        rootId: options.id,
        optimistic
      }));
    };
    ApolloCache2.prototype.writeQuery = function(_a2) {
      var id = _a2.id, data = _a2.data, options = __rest(_a2, ["id", "data"]);
      return this.write(Object.assign(options, {
        dataId: id || "ROOT_QUERY",
        result: data
      }));
    };
    ApolloCache2.prototype.writeFragment = function(_a2) {
      var id = _a2.id, data = _a2.data, fragment = _a2.fragment, fragmentName = _a2.fragmentName, options = __rest(_a2, ["id", "data", "fragment", "fragmentName"]);
      return this.write(Object.assign(options, {
        query: this.getFragmentDoc(fragment, fragmentName),
        dataId: id,
        result: data
      }));
    };
    ApolloCache2.prototype.updateQuery = function(options, update) {
      return this.batch({
        update: function(cache) {
          var value = cache.readQuery(options);
          var data = update(value);
          if (data === void 0 || data === null) return value;
          cache.writeQuery(__assign(__assign({}, options), {
            data
          }));
          return data;
        }
      });
    };
    ApolloCache2.prototype.updateFragment = function(options, update) {
      return this.batch({
        update: function(cache) {
          var value = cache.readFragment(options);
          var data = update(value);
          if (data === void 0 || data === null) return value;
          cache.writeFragment(__assign(__assign({}, options), {
            data
          }));
          return data;
        }
      });
    };
    return ApolloCache2;
  }()
);
if (globalThis.__DEV__ !== false) {
  ApolloCache.prototype.getMemoryInternals = getApolloCacheMemoryInternals;
}

// node_modules/@apollo/client/cache/core/types/common.js
var MissingFieldError = (
  /** @class */
  function(_super) {
    __extends(MissingFieldError2, _super);
    function MissingFieldError2(message, path, query, variables) {
      var _a2;
      var _this = _super.call(this, message) || this;
      _this.message = message;
      _this.path = path;
      _this.query = query;
      _this.variables = variables;
      if (Array.isArray(_this.path)) {
        _this.missing = _this.message;
        for (var i = _this.path.length - 1; i >= 0; --i) {
          _this.missing = (_a2 = {}, _a2[_this.path[i]] = _this.missing, _a2);
        }
      } else {
        _this.missing = _this.path;
      }
      _this.__proto__ = MissingFieldError2.prototype;
      return _this;
    }
    return MissingFieldError2;
  }(Error)
);

// node_modules/@apollo/client/cache/inmemory/helpers.js
var hasOwn = Object.prototype.hasOwnProperty;
function isNullish(value) {
  return value === null || value === void 0;
}
function defaultDataIdFromObject(_a2, context) {
  var __typename = _a2.__typename, id = _a2.id, _id = _a2._id;
  if (typeof __typename === "string") {
    if (context) {
      context.keyObject = !isNullish(id) ? {
        id
      } : !isNullish(_id) ? {
        _id
      } : void 0;
    }
    if (isNullish(id) && !isNullish(_id)) {
      id = _id;
    }
    if (!isNullish(id)) {
      return "".concat(__typename, ":").concat(typeof id === "number" || typeof id === "string" ? id : JSON.stringify(id));
    }
  }
}
var defaultConfig = {
  dataIdFromObject: defaultDataIdFromObject,
  addTypename: true,
  resultCaching: true,
  // Thanks to the shouldCanonizeResults helper, this should be the only line
  // you have to change to reenable canonization by default in the future.
  canonizeResults: false
};
function normalizeConfig(config) {
  return compact(defaultConfig, config);
}
function shouldCanonizeResults(config) {
  var value = config.canonizeResults;
  return value === void 0 ? defaultConfig.canonizeResults : value;
}
function getTypenameFromStoreObject(store, objectOrReference) {
  return isReference(objectOrReference) ? store.get(objectOrReference.__ref, "__typename") : objectOrReference && objectOrReference.__typename;
}
var TypeOrFieldNameRegExp = /^[_a-z][_0-9a-z]*/i;
function fieldNameFromStoreName(storeFieldName) {
  var match = storeFieldName.match(TypeOrFieldNameRegExp);
  return match ? match[0] : storeFieldName;
}
function selectionSetMatchesResult(selectionSet, result2, variables) {
  if (isNonNullObject(result2)) {
    return isArray(result2) ? result2.every(function(item) {
      return selectionSetMatchesResult(selectionSet, item, variables);
    }) : selectionSet.selections.every(function(field) {
      if (isField(field) && shouldInclude(field, variables)) {
        var key = resultKeyNameFromField(field);
        return hasOwn.call(result2, key) && (!field.selectionSet || selectionSetMatchesResult(field.selectionSet, result2[key], variables));
      }
      return true;
    });
  }
  return false;
}
function storeValueIsStoreObject(value) {
  return isNonNullObject(value) && !isReference(value) && !isArray(value);
}
function makeProcessedFieldsMerger() {
  return new DeepMerger();
}
function extractFragmentContext(document, fragments) {
  var fragmentMap = createFragmentMap(getFragmentDefinitions(document));
  return {
    fragmentMap,
    lookupFragment: function(name) {
      var def = fragmentMap[name];
      if (!def && fragments) {
        def = fragments.lookup(name);
      }
      return def || null;
    }
  };
}

// node_modules/@apollo/client/cache/inmemory/entityStore.js
var DELETE = /* @__PURE__ */ Object.create(null);
var delModifier = function() {
  return DELETE;
};
var INVALIDATE = /* @__PURE__ */ Object.create(null);
var EntityStore = (
  /** @class */
  function() {
    function EntityStore2(policies, group) {
      var _this = this;
      this.policies = policies;
      this.group = group;
      this.data = /* @__PURE__ */ Object.create(null);
      this.rootIds = /* @__PURE__ */ Object.create(null);
      this.refs = /* @__PURE__ */ Object.create(null);
      this.getFieldValue = function(objectOrReference, storeFieldName) {
        return maybeDeepFreeze(isReference(objectOrReference) ? _this.get(objectOrReference.__ref, storeFieldName) : objectOrReference && objectOrReference[storeFieldName]);
      };
      this.canRead = function(objOrRef) {
        return isReference(objOrRef) ? _this.has(objOrRef.__ref) : typeof objOrRef === "object";
      };
      this.toReference = function(objOrIdOrRef, mergeIntoStore) {
        if (typeof objOrIdOrRef === "string") {
          return makeReference(objOrIdOrRef);
        }
        if (isReference(objOrIdOrRef)) {
          return objOrIdOrRef;
        }
        var id = _this.policies.identify(objOrIdOrRef)[0];
        if (id) {
          var ref = makeReference(id);
          if (mergeIntoStore) {
            _this.merge(id, objOrIdOrRef);
          }
          return ref;
        }
      };
    }
    EntityStore2.prototype.toObject = function() {
      return __assign({}, this.data);
    };
    EntityStore2.prototype.has = function(dataId) {
      return this.lookup(dataId, true) !== void 0;
    };
    EntityStore2.prototype.get = function(dataId, fieldName) {
      this.group.depend(dataId, fieldName);
      if (hasOwn.call(this.data, dataId)) {
        var storeObject = this.data[dataId];
        if (storeObject && hasOwn.call(storeObject, fieldName)) {
          return storeObject[fieldName];
        }
      }
      if (fieldName === "__typename" && hasOwn.call(this.policies.rootTypenamesById, dataId)) {
        return this.policies.rootTypenamesById[dataId];
      }
      if (this instanceof Layer) {
        return this.parent.get(dataId, fieldName);
      }
    };
    EntityStore2.prototype.lookup = function(dataId, dependOnExistence) {
      if (dependOnExistence) this.group.depend(dataId, "__exists");
      if (hasOwn.call(this.data, dataId)) {
        return this.data[dataId];
      }
      if (this instanceof Layer) {
        return this.parent.lookup(dataId, dependOnExistence);
      }
      if (this.policies.rootTypenamesById[dataId]) {
        return /* @__PURE__ */ Object.create(null);
      }
    };
    EntityStore2.prototype.merge = function(older, newer) {
      var _this = this;
      var dataId;
      if (isReference(older)) older = older.__ref;
      if (isReference(newer)) newer = newer.__ref;
      var existing = typeof older === "string" ? this.lookup(dataId = older) : older;
      var incoming = typeof newer === "string" ? this.lookup(dataId = newer) : newer;
      if (!incoming) return;
      invariant2(typeof dataId === "string", 2);
      var merged = new DeepMerger(storeObjectReconciler).merge(existing, incoming);
      this.data[dataId] = merged;
      if (merged !== existing) {
        delete this.refs[dataId];
        if (this.group.caching) {
          var fieldsToDirty_1 = /* @__PURE__ */ Object.create(null);
          if (!existing) fieldsToDirty_1.__exists = 1;
          Object.keys(incoming).forEach(function(storeFieldName) {
            if (!existing || existing[storeFieldName] !== merged[storeFieldName]) {
              fieldsToDirty_1[storeFieldName] = 1;
              var fieldName = fieldNameFromStoreName(storeFieldName);
              if (fieldName !== storeFieldName && !_this.policies.hasKeyArgs(merged.__typename, fieldName)) {
                fieldsToDirty_1[fieldName] = 1;
              }
              if (merged[storeFieldName] === void 0 && !(_this instanceof Layer)) {
                delete merged[storeFieldName];
              }
            }
          });
          if (fieldsToDirty_1.__typename && !(existing && existing.__typename) && // Since we return default root __typename strings
          // automatically from store.get, we don't need to dirty the
          // ROOT_QUERY.__typename field if merged.__typename is equal
          // to the default string (usually "Query").
          this.policies.rootTypenamesById[dataId] === merged.__typename) {
            delete fieldsToDirty_1.__typename;
          }
          Object.keys(fieldsToDirty_1).forEach(function(fieldName) {
            return _this.group.dirty(dataId, fieldName);
          });
        }
      }
    };
    EntityStore2.prototype.modify = function(dataId, fields) {
      var _this = this;
      var storeObject = this.lookup(dataId);
      if (storeObject) {
        var changedFields_1 = /* @__PURE__ */ Object.create(null);
        var needToMerge_1 = false;
        var allDeleted_1 = true;
        var sharedDetails_1 = {
          DELETE,
          INVALIDATE,
          isReference,
          toReference: this.toReference,
          canRead: this.canRead,
          readField: function(fieldNameOrOptions, from2) {
            return _this.policies.readField(typeof fieldNameOrOptions === "string" ? {
              fieldName: fieldNameOrOptions,
              from: from2 || makeReference(dataId)
            } : fieldNameOrOptions, {
              store: _this
            });
          }
        };
        Object.keys(storeObject).forEach(function(storeFieldName) {
          var fieldName = fieldNameFromStoreName(storeFieldName);
          var fieldValue = storeObject[storeFieldName];
          if (fieldValue === void 0) return;
          var modify = typeof fields === "function" ? fields : fields[storeFieldName] || fields[fieldName];
          if (modify) {
            var newValue = modify === delModifier ? DELETE : modify(maybeDeepFreeze(fieldValue), __assign(__assign({}, sharedDetails_1), {
              fieldName,
              storeFieldName,
              storage: _this.getStorage(dataId, storeFieldName)
            }));
            if (newValue === INVALIDATE) {
              _this.group.dirty(dataId, storeFieldName);
            } else {
              if (newValue === DELETE) newValue = void 0;
              if (newValue !== fieldValue) {
                changedFields_1[storeFieldName] = newValue;
                needToMerge_1 = true;
                fieldValue = newValue;
                if (globalThis.__DEV__ !== false) {
                  var checkReference = function(ref) {
                    if (_this.lookup(ref.__ref) === void 0) {
                      globalThis.__DEV__ !== false && invariant2.warn(3, ref);
                      return true;
                    }
                  };
                  if (isReference(newValue)) {
                    checkReference(newValue);
                  } else if (Array.isArray(newValue)) {
                    var seenReference = false;
                    var someNonReference = void 0;
                    for (var _i = 0, newValue_1 = newValue; _i < newValue_1.length; _i++) {
                      var value = newValue_1[_i];
                      if (isReference(value)) {
                        seenReference = true;
                        if (checkReference(value)) break;
                      } else {
                        if (typeof value === "object" && !!value) {
                          var id = _this.policies.identify(value)[0];
                          if (id) {
                            someNonReference = value;
                          }
                        }
                      }
                      if (seenReference && someNonReference !== void 0) {
                        globalThis.__DEV__ !== false && invariant2.warn(4, someNonReference);
                        break;
                      }
                    }
                  }
                }
              }
            }
          }
          if (fieldValue !== void 0) {
            allDeleted_1 = false;
          }
        });
        if (needToMerge_1) {
          this.merge(dataId, changedFields_1);
          if (allDeleted_1) {
            if (this instanceof Layer) {
              this.data[dataId] = void 0;
            } else {
              delete this.data[dataId];
            }
            this.group.dirty(dataId, "__exists");
          }
          return true;
        }
      }
      return false;
    };
    EntityStore2.prototype.delete = function(dataId, fieldName, args) {
      var _a2;
      var storeObject = this.lookup(dataId);
      if (storeObject) {
        var typename = this.getFieldValue(storeObject, "__typename");
        var storeFieldName = fieldName && args ? this.policies.getStoreFieldName({
          typename,
          fieldName,
          args
        }) : fieldName;
        return this.modify(dataId, storeFieldName ? (_a2 = {}, _a2[storeFieldName] = delModifier, _a2) : delModifier);
      }
      return false;
    };
    EntityStore2.prototype.evict = function(options, limit) {
      var evicted = false;
      if (options.id) {
        if (hasOwn.call(this.data, options.id)) {
          evicted = this.delete(options.id, options.fieldName, options.args);
        }
        if (this instanceof Layer && this !== limit) {
          evicted = this.parent.evict(options, limit) || evicted;
        }
        if (options.fieldName || evicted) {
          this.group.dirty(options.id, options.fieldName || "__exists");
        }
      }
      return evicted;
    };
    EntityStore2.prototype.clear = function() {
      this.replace(null);
    };
    EntityStore2.prototype.extract = function() {
      var _this = this;
      var obj = this.toObject();
      var extraRootIds = [];
      this.getRootIdSet().forEach(function(id) {
        if (!hasOwn.call(_this.policies.rootTypenamesById, id)) {
          extraRootIds.push(id);
        }
      });
      if (extraRootIds.length) {
        obj.__META = {
          extraRootIds: extraRootIds.sort()
        };
      }
      return obj;
    };
    EntityStore2.prototype.replace = function(newData) {
      var _this = this;
      Object.keys(this.data).forEach(function(dataId) {
        if (!(newData && hasOwn.call(newData, dataId))) {
          _this.delete(dataId);
        }
      });
      if (newData) {
        var __META = newData.__META, rest_1 = __rest(newData, ["__META"]);
        Object.keys(rest_1).forEach(function(dataId) {
          _this.merge(dataId, rest_1[dataId]);
        });
        if (__META) {
          __META.extraRootIds.forEach(this.retain, this);
        }
      }
    };
    EntityStore2.prototype.retain = function(rootId) {
      return this.rootIds[rootId] = (this.rootIds[rootId] || 0) + 1;
    };
    EntityStore2.prototype.release = function(rootId) {
      if (this.rootIds[rootId] > 0) {
        var count = --this.rootIds[rootId];
        if (!count) delete this.rootIds[rootId];
        return count;
      }
      return 0;
    };
    EntityStore2.prototype.getRootIdSet = function(ids) {
      if (ids === void 0) {
        ids = /* @__PURE__ */ new Set();
      }
      Object.keys(this.rootIds).forEach(ids.add, ids);
      if (this instanceof Layer) {
        this.parent.getRootIdSet(ids);
      } else {
        Object.keys(this.policies.rootTypenamesById).forEach(ids.add, ids);
      }
      return ids;
    };
    EntityStore2.prototype.gc = function() {
      var _this = this;
      var ids = this.getRootIdSet();
      var snapshot = this.toObject();
      ids.forEach(function(id) {
        if (hasOwn.call(snapshot, id)) {
          Object.keys(_this.findChildRefIds(id)).forEach(ids.add, ids);
          delete snapshot[id];
        }
      });
      var idsToRemove = Object.keys(snapshot);
      if (idsToRemove.length) {
        var root_1 = this;
        while (root_1 instanceof Layer) root_1 = root_1.parent;
        idsToRemove.forEach(function(id) {
          return root_1.delete(id);
        });
      }
      return idsToRemove;
    };
    EntityStore2.prototype.findChildRefIds = function(dataId) {
      if (!hasOwn.call(this.refs, dataId)) {
        var found_1 = this.refs[dataId] = /* @__PURE__ */ Object.create(null);
        var root2 = this.data[dataId];
        if (!root2) return found_1;
        var workSet_1 = /* @__PURE__ */ new Set([root2]);
        workSet_1.forEach(function(obj) {
          if (isReference(obj)) {
            found_1[obj.__ref] = true;
          }
          if (isNonNullObject(obj)) {
            Object.keys(obj).forEach(function(key) {
              var child = obj[key];
              if (isNonNullObject(child)) {
                workSet_1.add(child);
              }
            });
          }
        });
      }
      return this.refs[dataId];
    };
    EntityStore2.prototype.makeCacheKey = function() {
      return this.group.keyMaker.lookupArray(arguments);
    };
    return EntityStore2;
  }()
);
var CacheGroup = (
  /** @class */
  function() {
    function CacheGroup2(caching, parent) {
      if (parent === void 0) {
        parent = null;
      }
      this.caching = caching;
      this.parent = parent;
      this.d = null;
      this.resetCaching();
    }
    CacheGroup2.prototype.resetCaching = function() {
      this.d = this.caching ? dep() : null;
      this.keyMaker = new Trie(canUseWeakMap);
    };
    CacheGroup2.prototype.depend = function(dataId, storeFieldName) {
      if (this.d) {
        this.d(makeDepKey(dataId, storeFieldName));
        var fieldName = fieldNameFromStoreName(storeFieldName);
        if (fieldName !== storeFieldName) {
          this.d(makeDepKey(dataId, fieldName));
        }
        if (this.parent) {
          this.parent.depend(dataId, storeFieldName);
        }
      }
    };
    CacheGroup2.prototype.dirty = function(dataId, storeFieldName) {
      if (this.d) {
        this.d.dirty(
          makeDepKey(dataId, storeFieldName),
          // When storeFieldName === "__exists", that means the entity identified
          // by dataId has either disappeared from the cache or was newly added,
          // so the result caching system would do well to "forget everything it
          // knows" about that object. To achieve that kind of invalidation, we
          // not only dirty the associated result cache entry, but also remove it
          // completely from the dependency graph. For the optimism implementation
          // details, see https://github.com/benjamn/optimism/pull/195.
          storeFieldName === "__exists" ? "forget" : "setDirty"
        );
      }
    };
    return CacheGroup2;
  }()
);
function makeDepKey(dataId, storeFieldName) {
  return storeFieldName + "#" + dataId;
}
function maybeDependOnExistenceOfEntity(store, entityId) {
  if (supportsResultCaching(store)) {
    store.group.depend(entityId, "__exists");
  }
}
(function(EntityStore2) {
  var Root = (
    /** @class */
    function(_super) {
      __extends(Root2, _super);
      function Root2(_a2) {
        var policies = _a2.policies, _b = _a2.resultCaching, resultCaching = _b === void 0 ? true : _b, seed = _a2.seed;
        var _this = _super.call(this, policies, new CacheGroup(resultCaching)) || this;
        _this.stump = new Stump(_this);
        _this.storageTrie = new Trie(canUseWeakMap);
        if (seed) _this.replace(seed);
        return _this;
      }
      Root2.prototype.addLayer = function(layerId, replay) {
        return this.stump.addLayer(layerId, replay);
      };
      Root2.prototype.removeLayer = function() {
        return this;
      };
      Root2.prototype.getStorage = function() {
        return this.storageTrie.lookupArray(arguments);
      };
      return Root2;
    }(EntityStore2)
  );
  EntityStore2.Root = Root;
})(EntityStore || (EntityStore = {}));
var Layer = (
  /** @class */
  function(_super) {
    __extends(Layer2, _super);
    function Layer2(id, parent, replay, group) {
      var _this = _super.call(this, parent.policies, group) || this;
      _this.id = id;
      _this.parent = parent;
      _this.replay = replay;
      _this.group = group;
      replay(_this);
      return _this;
    }
    Layer2.prototype.addLayer = function(layerId, replay) {
      return new Layer2(layerId, this, replay, this.group);
    };
    Layer2.prototype.removeLayer = function(layerId) {
      var _this = this;
      var parent = this.parent.removeLayer(layerId);
      if (layerId === this.id) {
        if (this.group.caching) {
          Object.keys(this.data).forEach(function(dataId) {
            var ownStoreObject = _this.data[dataId];
            var parentStoreObject = parent["lookup"](dataId);
            if (!parentStoreObject) {
              _this.delete(dataId);
            } else if (!ownStoreObject) {
              _this.group.dirty(dataId, "__exists");
              Object.keys(parentStoreObject).forEach(function(storeFieldName) {
                _this.group.dirty(dataId, storeFieldName);
              });
            } else if (ownStoreObject !== parentStoreObject) {
              Object.keys(ownStoreObject).forEach(function(storeFieldName) {
                if (!equal(ownStoreObject[storeFieldName], parentStoreObject[storeFieldName])) {
                  _this.group.dirty(dataId, storeFieldName);
                }
              });
            }
          });
        }
        return parent;
      }
      if (parent === this.parent) return this;
      return parent.addLayer(this.id, this.replay);
    };
    Layer2.prototype.toObject = function() {
      return __assign(__assign({}, this.parent.toObject()), this.data);
    };
    Layer2.prototype.findChildRefIds = function(dataId) {
      var fromParent = this.parent.findChildRefIds(dataId);
      return hasOwn.call(this.data, dataId) ? __assign(__assign({}, fromParent), _super.prototype.findChildRefIds.call(this, dataId)) : fromParent;
    };
    Layer2.prototype.getStorage = function() {
      var p = this.parent;
      while (p.parent) p = p.parent;
      return p.getStorage.apply(
        p,
        // @ts-expect-error
        arguments
      );
    };
    return Layer2;
  }(EntityStore)
);
var Stump = (
  /** @class */
  function(_super) {
    __extends(Stump2, _super);
    function Stump2(root2) {
      return _super.call(this, "EntityStore.Stump", root2, function() {
      }, new CacheGroup(root2.group.caching, root2.group)) || this;
    }
    Stump2.prototype.removeLayer = function() {
      return this;
    };
    Stump2.prototype.merge = function(older, newer) {
      return this.parent.merge(older, newer);
    };
    return Stump2;
  }(Layer)
);
function storeObjectReconciler(existingObject, incomingObject, property) {
  var existingValue = existingObject[property];
  var incomingValue = incomingObject[property];
  return equal(existingValue, incomingValue) ? existingValue : incomingValue;
}
function supportsResultCaching(store) {
  return !!(store instanceof EntityStore && store.group.caching);
}

// node_modules/@apollo/client/cache/inmemory/object-canon.js
function shallowCopy(value) {
  if (isNonNullObject(value)) {
    return isArray(value) ? value.slice(0) : __assign({
      __proto__: Object.getPrototypeOf(value)
    }, value);
  }
  return value;
}
var ObjectCanon = (
  /** @class */
  function() {
    function ObjectCanon2() {
      this.known = new (canUseWeakSet ? WeakSet : Set)();
      this.pool = new Trie(canUseWeakMap);
      this.passes = /* @__PURE__ */ new WeakMap();
      this.keysByJSON = /* @__PURE__ */ new Map();
      this.empty = this.admit({});
    }
    ObjectCanon2.prototype.isKnown = function(value) {
      return isNonNullObject(value) && this.known.has(value);
    };
    ObjectCanon2.prototype.pass = function(value) {
      if (isNonNullObject(value)) {
        var copy = shallowCopy(value);
        this.passes.set(copy, value);
        return copy;
      }
      return value;
    };
    ObjectCanon2.prototype.admit = function(value) {
      var _this = this;
      if (isNonNullObject(value)) {
        var original = this.passes.get(value);
        if (original) return original;
        var proto = Object.getPrototypeOf(value);
        switch (proto) {
          case Array.prototype: {
            if (this.known.has(value)) return value;
            var array = value.map(this.admit, this);
            var node = this.pool.lookupArray(array);
            if (!node.array) {
              this.known.add(node.array = array);
              if (globalThis.__DEV__ !== false) {
                Object.freeze(array);
              }
            }
            return node.array;
          }
          case null:
          case Object.prototype: {
            if (this.known.has(value)) return value;
            var proto_1 = Object.getPrototypeOf(value);
            var array_1 = [proto_1];
            var keys = this.sortedKeys(value);
            array_1.push(keys.json);
            var firstValueIndex_1 = array_1.length;
            keys.sorted.forEach(function(key) {
              array_1.push(_this.admit(value[key]));
            });
            var node = this.pool.lookupArray(array_1);
            if (!node.object) {
              var obj_1 = node.object = Object.create(proto_1);
              this.known.add(obj_1);
              keys.sorted.forEach(function(key, i) {
                obj_1[key] = array_1[firstValueIndex_1 + i];
              });
              if (globalThis.__DEV__ !== false) {
                Object.freeze(obj_1);
              }
            }
            return node.object;
          }
        }
      }
      return value;
    };
    ObjectCanon2.prototype.sortedKeys = function(obj) {
      var keys = Object.keys(obj);
      var node = this.pool.lookupArray(keys);
      if (!node.keys) {
        keys.sort();
        var json = JSON.stringify(keys);
        if (!(node.keys = this.keysByJSON.get(json))) {
          this.keysByJSON.set(json, node.keys = {
            sorted: keys,
            json
          });
        }
      }
      return node.keys;
    };
    return ObjectCanon2;
  }()
);

// node_modules/@apollo/client/cache/inmemory/readFromStore.js
function execSelectionSetKeyArgs(options) {
  return [
    options.selectionSet,
    options.objectOrReference,
    options.context,
    // We split out this property so we can pass different values
    // independently without modifying options.context itself.
    options.context.canonizeResults
  ];
}
var StoreReader = (
  /** @class */
  function() {
    function StoreReader2(config) {
      var _this = this;
      this.knownResults = new (canUseWeakMap ? WeakMap : Map)();
      this.config = compact(config, {
        addTypename: config.addTypename !== false,
        canonizeResults: shouldCanonizeResults(config)
      });
      this.canon = config.canon || new ObjectCanon();
      this.executeSelectionSet = wrap3(function(options) {
        var _a2;
        var canonizeResults = options.context.canonizeResults;
        var peekArgs = execSelectionSetKeyArgs(options);
        peekArgs[3] = !canonizeResults;
        var other = (_a2 = _this.executeSelectionSet).peek.apply(_a2, peekArgs);
        if (other) {
          if (canonizeResults) {
            return __assign(__assign({}, other), {
              // If we previously read this result without canonizing it, we can
              // reuse that result simply by canonizing it now.
              result: _this.canon.admit(other.result)
            });
          }
          return other;
        }
        maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
        return _this.execSelectionSetImpl(options);
      }, {
        max: this.config.resultCacheMaxSize || cacheSizes["inMemoryCache.executeSelectionSet"] || 5e4,
        keyArgs: execSelectionSetKeyArgs,
        // Note that the parameters of makeCacheKey are determined by the
        // array returned by keyArgs.
        makeCacheKey: function(selectionSet, parent, context, canonizeResults) {
          if (supportsResultCaching(context.store)) {
            return context.store.makeCacheKey(selectionSet, isReference(parent) ? parent.__ref : parent, context.varString, canonizeResults);
          }
        }
      });
      this.executeSubSelectedArray = wrap3(function(options) {
        maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
        return _this.execSubSelectedArrayImpl(options);
      }, {
        max: this.config.resultCacheMaxSize || cacheSizes["inMemoryCache.executeSubSelectedArray"] || 1e4,
        makeCacheKey: function(_a2) {
          var field = _a2.field, array = _a2.array, context = _a2.context;
          if (supportsResultCaching(context.store)) {
            return context.store.makeCacheKey(field, array, context.varString);
          }
        }
      });
    }
    StoreReader2.prototype.resetCanon = function() {
      this.canon = new ObjectCanon();
    };
    StoreReader2.prototype.diffQueryAgainstStore = function(_a2) {
      var store = _a2.store, query = _a2.query, _b = _a2.rootId, rootId = _b === void 0 ? "ROOT_QUERY" : _b, variables = _a2.variables, _c = _a2.returnPartialData, returnPartialData = _c === void 0 ? true : _c, _d = _a2.canonizeResults, canonizeResults = _d === void 0 ? this.config.canonizeResults : _d;
      var policies = this.config.cache.policies;
      variables = __assign(__assign({}, getDefaultValues(getQueryDefinition(query))), variables);
      var rootRef = makeReference(rootId);
      var execResult = this.executeSelectionSet({
        selectionSet: getMainDefinition(query).selectionSet,
        objectOrReference: rootRef,
        enclosingRef: rootRef,
        context: __assign({
          store,
          query,
          policies,
          variables,
          varString: canonicalStringify(variables),
          canonizeResults
        }, extractFragmentContext(query, this.config.fragments))
      });
      var missing;
      if (execResult.missing) {
        missing = [new MissingFieldError(firstMissing(execResult.missing), execResult.missing, query, variables)];
        if (!returnPartialData) {
          throw missing[0];
        }
      }
      return {
        result: execResult.result,
        complete: !missing,
        missing
      };
    };
    StoreReader2.prototype.isFresh = function(result2, parent, selectionSet, context) {
      if (supportsResultCaching(context.store) && this.knownResults.get(result2) === selectionSet) {
        var latest = this.executeSelectionSet.peek(
          selectionSet,
          parent,
          context,
          // If result is canonical, then it could only have been previously
          // cached by the canonizing version of executeSelectionSet, so we can
          // avoid checking both possibilities here.
          this.canon.isKnown(result2)
        );
        if (latest && result2 === latest.result) {
          return true;
        }
      }
      return false;
    };
    StoreReader2.prototype.execSelectionSetImpl = function(_a2) {
      var _this = this;
      var selectionSet = _a2.selectionSet, objectOrReference = _a2.objectOrReference, enclosingRef = _a2.enclosingRef, context = _a2.context;
      if (isReference(objectOrReference) && !context.policies.rootTypenamesById[objectOrReference.__ref] && !context.store.has(objectOrReference.__ref)) {
        return {
          result: this.canon.empty,
          missing: "Dangling reference to missing ".concat(objectOrReference.__ref, " object")
        };
      }
      var variables = context.variables, policies = context.policies, store = context.store;
      var typename = store.getFieldValue(objectOrReference, "__typename");
      var objectsToMerge = [];
      var missing;
      var missingMerger = new DeepMerger();
      if (this.config.addTypename && typeof typename === "string" && !policies.rootIdsByTypename[typename]) {
        objectsToMerge.push({
          __typename: typename
        });
      }
      function handleMissing(result3, resultName) {
        var _a3;
        if (result3.missing) {
          missing = missingMerger.merge(missing, (_a3 = {}, _a3[resultName] = result3.missing, _a3));
        }
        return result3.result;
      }
      var workSet = new Set(selectionSet.selections);
      workSet.forEach(function(selection) {
        var _a3, _b;
        if (!shouldInclude(selection, variables)) return;
        if (isField(selection)) {
          var fieldValue = policies.readField({
            fieldName: selection.name.value,
            field: selection,
            variables: context.variables,
            from: objectOrReference
          }, context);
          var resultName = resultKeyNameFromField(selection);
          if (fieldValue === void 0) {
            if (!addTypenameToDocument.added(selection)) {
              missing = missingMerger.merge(missing, (_a3 = {}, _a3[resultName] = "Can't find field '".concat(selection.name.value, "' on ").concat(isReference(objectOrReference) ? objectOrReference.__ref + " object" : "object " + JSON.stringify(objectOrReference, null, 2)), _a3));
            }
          } else if (isArray(fieldValue)) {
            if (fieldValue.length > 0) {
              fieldValue = handleMissing(_this.executeSubSelectedArray({
                field: selection,
                array: fieldValue,
                enclosingRef,
                context
              }), resultName);
            }
          } else if (!selection.selectionSet) {
            if (context.canonizeResults) {
              fieldValue = _this.canon.pass(fieldValue);
            }
          } else if (fieldValue != null) {
            fieldValue = handleMissing(_this.executeSelectionSet({
              selectionSet: selection.selectionSet,
              objectOrReference: fieldValue,
              enclosingRef: isReference(fieldValue) ? fieldValue : enclosingRef,
              context
            }), resultName);
          }
          if (fieldValue !== void 0) {
            objectsToMerge.push((_b = {}, _b[resultName] = fieldValue, _b));
          }
        } else {
          var fragment = getFragmentFromSelection(selection, context.lookupFragment);
          if (!fragment && selection.kind === Kind.FRAGMENT_SPREAD) {
            throw newInvariantError(10, selection.name.value);
          }
          if (fragment && policies.fragmentMatches(fragment, typename)) {
            fragment.selectionSet.selections.forEach(workSet.add, workSet);
          }
        }
      });
      var result2 = mergeDeepArray(objectsToMerge);
      var finalResult = {
        result: result2,
        missing
      };
      var frozen = context.canonizeResults ? this.canon.admit(finalResult) : maybeDeepFreeze(finalResult);
      if (frozen.result) {
        this.knownResults.set(frozen.result, selectionSet);
      }
      return frozen;
    };
    StoreReader2.prototype.execSubSelectedArrayImpl = function(_a2) {
      var _this = this;
      var field = _a2.field, array = _a2.array, enclosingRef = _a2.enclosingRef, context = _a2.context;
      var missing;
      var missingMerger = new DeepMerger();
      function handleMissing(childResult, i) {
        var _a3;
        if (childResult.missing) {
          missing = missingMerger.merge(missing, (_a3 = {}, _a3[i] = childResult.missing, _a3));
        }
        return childResult.result;
      }
      if (field.selectionSet) {
        array = array.filter(context.store.canRead);
      }
      array = array.map(function(item, i) {
        if (item === null) {
          return null;
        }
        if (isArray(item)) {
          return handleMissing(_this.executeSubSelectedArray({
            field,
            array: item,
            enclosingRef,
            context
          }), i);
        }
        if (field.selectionSet) {
          return handleMissing(_this.executeSelectionSet({
            selectionSet: field.selectionSet,
            objectOrReference: item,
            enclosingRef: isReference(item) ? item : enclosingRef,
            context
          }), i);
        }
        if (globalThis.__DEV__ !== false) {
          assertSelectionSetForIdValue(context.store, field, item);
        }
        return item;
      });
      return {
        result: context.canonizeResults ? this.canon.admit(array) : array,
        missing
      };
    };
    return StoreReader2;
  }()
);
function firstMissing(tree) {
  try {
    JSON.stringify(tree, function(_, value) {
      if (typeof value === "string") throw value;
      return value;
    });
  } catch (result2) {
    return result2;
  }
}
function assertSelectionSetForIdValue(store, field, fieldValue) {
  if (!field.selectionSet) {
    var workSet_1 = /* @__PURE__ */ new Set([fieldValue]);
    workSet_1.forEach(function(value) {
      if (isNonNullObject(value)) {
        invariant2(!isReference(value), 11, getTypenameFromStoreObject(store, value), field.name.value);
        Object.values(value).forEach(workSet_1.add, workSet_1);
      }
    });
  }
}

// node_modules/@apollo/client/cache/inmemory/reactiveVars.js
var cacheSlot = new Slot();
var cacheInfoMap = /* @__PURE__ */ new WeakMap();
function getCacheInfo(cache) {
  var info = cacheInfoMap.get(cache);
  if (!info) {
    cacheInfoMap.set(cache, info = {
      vars: /* @__PURE__ */ new Set(),
      dep: dep()
    });
  }
  return info;
}
function forgetCache(cache) {
  getCacheInfo(cache).vars.forEach(function(rv) {
    return rv.forgetCache(cache);
  });
}
function recallCache(cache) {
  getCacheInfo(cache).vars.forEach(function(rv) {
    return rv.attachCache(cache);
  });
}
function makeVar(value) {
  var caches2 = /* @__PURE__ */ new Set();
  var listeners = /* @__PURE__ */ new Set();
  var rv = function(newValue) {
    if (arguments.length > 0) {
      if (value !== newValue) {
        value = newValue;
        caches2.forEach(function(cache2) {
          getCacheInfo(cache2).dep.dirty(rv);
          broadcast(cache2);
        });
        var oldListeners = Array.from(listeners);
        listeners.clear();
        oldListeners.forEach(function(listener) {
          return listener(value);
        });
      }
    } else {
      var cache = cacheSlot.getValue();
      if (cache) {
        attach(cache);
        getCacheInfo(cache).dep(rv);
      }
    }
    return value;
  };
  rv.onNextChange = function(listener) {
    listeners.add(listener);
    return function() {
      listeners.delete(listener);
    };
  };
  var attach = rv.attachCache = function(cache) {
    caches2.add(cache);
    getCacheInfo(cache).vars.add(rv);
    return rv;
  };
  rv.forgetCache = function(cache) {
    return caches2.delete(cache);
  };
  return rv;
}
function broadcast(cache) {
  if (cache.broadcastWatches) {
    cache.broadcastWatches();
  }
}

// node_modules/@apollo/client/cache/inmemory/key-extractor.js
var specifierInfoCache = /* @__PURE__ */ Object.create(null);
function lookupSpecifierInfo(spec) {
  var cacheKey = JSON.stringify(spec);
  return specifierInfoCache[cacheKey] || (specifierInfoCache[cacheKey] = /* @__PURE__ */ Object.create(null));
}
function keyFieldsFnFromSpecifier(specifier) {
  var info = lookupSpecifierInfo(specifier);
  return info.keyFieldsFn || (info.keyFieldsFn = function(object, context) {
    var extract = function(from2, key) {
      return context.readField(key, from2);
    };
    var keyObject = context.keyObject = collectSpecifierPaths(specifier, function(schemaKeyPath) {
      var extracted = extractKeyPath(
        context.storeObject,
        schemaKeyPath,
        // Using context.readField to extract paths from context.storeObject
        // allows the extraction to see through Reference objects and respect
        // custom read functions.
        extract
      );
      if (extracted === void 0 && object !== context.storeObject && hasOwn.call(object, schemaKeyPath[0])) {
        extracted = extractKeyPath(object, schemaKeyPath, extractKey);
      }
      invariant2(extracted !== void 0, 5, schemaKeyPath.join("."), object);
      return extracted;
    });
    return "".concat(context.typename, ":").concat(JSON.stringify(keyObject));
  });
}
function keyArgsFnFromSpecifier(specifier) {
  var info = lookupSpecifierInfo(specifier);
  return info.keyArgsFn || (info.keyArgsFn = function(args, _a2) {
    var field = _a2.field, variables = _a2.variables, fieldName = _a2.fieldName;
    var collected = collectSpecifierPaths(specifier, function(keyPath) {
      var firstKey = keyPath[0];
      var firstChar = firstKey.charAt(0);
      if (firstChar === "@") {
        if (field && isNonEmptyArray(field.directives)) {
          var directiveName_1 = firstKey.slice(1);
          var d = field.directives.find(function(d2) {
            return d2.name.value === directiveName_1;
          });
          var directiveArgs = d && argumentsObjectFromField(d, variables);
          return directiveArgs && extractKeyPath(
            directiveArgs,
            // If keyPath.length === 1, this code calls extractKeyPath with an
            // empty path, which works because it uses directiveArgs as the
            // extracted value.
            keyPath.slice(1)
          );
        }
        return;
      }
      if (firstChar === "$") {
        var variableName = firstKey.slice(1);
        if (variables && hasOwn.call(variables, variableName)) {
          var varKeyPath = keyPath.slice(0);
          varKeyPath[0] = variableName;
          return extractKeyPath(variables, varKeyPath);
        }
        return;
      }
      if (args) {
        return extractKeyPath(args, keyPath);
      }
    });
    var suffix = JSON.stringify(collected);
    if (args || suffix !== "{}") {
      fieldName += ":" + suffix;
    }
    return fieldName;
  });
}
function collectSpecifierPaths(specifier, extractor) {
  var merger = new DeepMerger();
  return getSpecifierPaths(specifier).reduce(function(collected, path) {
    var _a2;
    var toMerge = extractor(path);
    if (toMerge !== void 0) {
      for (var i = path.length - 1; i >= 0; --i) {
        toMerge = (_a2 = {}, _a2[path[i]] = toMerge, _a2);
      }
      collected = merger.merge(collected, toMerge);
    }
    return collected;
  }, /* @__PURE__ */ Object.create(null));
}
function getSpecifierPaths(spec) {
  var info = lookupSpecifierInfo(spec);
  if (!info.paths) {
    var paths_1 = info.paths = [];
    var currentPath_1 = [];
    spec.forEach(function(s, i) {
      if (isArray(s)) {
        getSpecifierPaths(s).forEach(function(p) {
          return paths_1.push(currentPath_1.concat(p));
        });
        currentPath_1.length = 0;
      } else {
        currentPath_1.push(s);
        if (!isArray(spec[i + 1])) {
          paths_1.push(currentPath_1.slice(0));
          currentPath_1.length = 0;
        }
      }
    });
  }
  return info.paths;
}
function extractKey(object, key) {
  return object[key];
}
function extractKeyPath(object, path, extract) {
  extract = extract || extractKey;
  return normalize(path.reduce(function reducer(obj, key) {
    return isArray(obj) ? obj.map(function(child) {
      return reducer(child, key);
    }) : obj && extract(obj, key);
  }, object));
}
function normalize(value) {
  if (isNonNullObject(value)) {
    if (isArray(value)) {
      return value.map(normalize);
    }
    return collectSpecifierPaths(Object.keys(value).sort(), function(path) {
      return extractKeyPath(value, path);
    });
  }
  return value;
}

// node_modules/@apollo/client/cache/inmemory/policies.js
function argsFromFieldSpecifier(spec) {
  return spec.args !== void 0 ? spec.args : spec.field ? argumentsObjectFromField(spec.field, spec.variables) : null;
}
var nullKeyFieldsFn = function() {
  return void 0;
};
var simpleKeyArgsFn = function(_args, context) {
  return context.fieldName;
};
var mergeTrueFn = function(existing, incoming, _a2) {
  var mergeObjects = _a2.mergeObjects;
  return mergeObjects(existing, incoming);
};
var mergeFalseFn = function(_, incoming) {
  return incoming;
};
var Policies = (
  /** @class */
  function() {
    function Policies2(config) {
      this.config = config;
      this.typePolicies = /* @__PURE__ */ Object.create(null);
      this.toBeAdded = /* @__PURE__ */ Object.create(null);
      this.supertypeMap = /* @__PURE__ */ new Map();
      this.fuzzySubtypes = /* @__PURE__ */ new Map();
      this.rootIdsByTypename = /* @__PURE__ */ Object.create(null);
      this.rootTypenamesById = /* @__PURE__ */ Object.create(null);
      this.usingPossibleTypes = false;
      this.config = __assign({
        dataIdFromObject: defaultDataIdFromObject
      }, config);
      this.cache = this.config.cache;
      this.setRootTypename("Query");
      this.setRootTypename("Mutation");
      this.setRootTypename("Subscription");
      if (config.possibleTypes) {
        this.addPossibleTypes(config.possibleTypes);
      }
      if (config.typePolicies) {
        this.addTypePolicies(config.typePolicies);
      }
    }
    Policies2.prototype.identify = function(object, partialContext) {
      var _a2;
      var policies = this;
      var typename = partialContext && (partialContext.typename || ((_a2 = partialContext.storeObject) === null || _a2 === void 0 ? void 0 : _a2.__typename)) || object.__typename;
      if (typename === this.rootTypenamesById.ROOT_QUERY) {
        return ["ROOT_QUERY"];
      }
      var storeObject = partialContext && partialContext.storeObject || object;
      var context = __assign(__assign({}, partialContext), {
        typename,
        storeObject,
        readField: partialContext && partialContext.readField || function() {
          var options = normalizeReadFieldOptions(arguments, storeObject);
          return policies.readField(options, {
            store: policies.cache["data"],
            variables: options.variables
          });
        }
      });
      var id;
      var policy = typename && this.getTypePolicy(typename);
      var keyFn = policy && policy.keyFn || this.config.dataIdFromObject;
      disableWarningsSlot.withValue(true, function() {
        while (keyFn) {
          var specifierOrId = keyFn(__assign(__assign({}, object), storeObject), context);
          if (isArray(specifierOrId)) {
            keyFn = keyFieldsFnFromSpecifier(specifierOrId);
          } else {
            id = specifierOrId;
            break;
          }
        }
      });
      id = id ? String(id) : void 0;
      return context.keyObject ? [id, context.keyObject] : [id];
    };
    Policies2.prototype.addTypePolicies = function(typePolicies) {
      var _this = this;
      Object.keys(typePolicies).forEach(function(typename) {
        var _a2 = typePolicies[typename], queryType = _a2.queryType, mutationType = _a2.mutationType, subscriptionType = _a2.subscriptionType, incoming = __rest(_a2, ["queryType", "mutationType", "subscriptionType"]);
        if (queryType) _this.setRootTypename("Query", typename);
        if (mutationType) _this.setRootTypename("Mutation", typename);
        if (subscriptionType) _this.setRootTypename("Subscription", typename);
        if (hasOwn.call(_this.toBeAdded, typename)) {
          _this.toBeAdded[typename].push(incoming);
        } else {
          _this.toBeAdded[typename] = [incoming];
        }
      });
    };
    Policies2.prototype.updateTypePolicy = function(typename, incoming) {
      var _this = this;
      var existing = this.getTypePolicy(typename);
      var keyFields = incoming.keyFields, fields = incoming.fields;
      function setMerge(existing2, merge) {
        existing2.merge = typeof merge === "function" ? merge : merge === true ? mergeTrueFn : merge === false ? mergeFalseFn : existing2.merge;
      }
      setMerge(existing, incoming.merge);
      existing.keyFn = // Pass false to disable normalization for this typename.
      keyFields === false ? nullKeyFieldsFn : isArray(keyFields) ? keyFieldsFnFromSpecifier(keyFields) : typeof keyFields === "function" ? keyFields : existing.keyFn;
      if (fields) {
        Object.keys(fields).forEach(function(fieldName) {
          var existing2 = _this.getFieldPolicy(typename, fieldName, true);
          var incoming2 = fields[fieldName];
          if (typeof incoming2 === "function") {
            existing2.read = incoming2;
          } else {
            var keyArgs = incoming2.keyArgs, read = incoming2.read, merge = incoming2.merge;
            existing2.keyFn = // Pass false to disable argument-based differentiation of
            // field identities.
            keyArgs === false ? simpleKeyArgsFn : isArray(keyArgs) ? keyArgsFnFromSpecifier(keyArgs) : typeof keyArgs === "function" ? keyArgs : existing2.keyFn;
            if (typeof read === "function") {
              existing2.read = read;
            }
            setMerge(existing2, merge);
          }
          if (existing2.read && existing2.merge) {
            existing2.keyFn = existing2.keyFn || simpleKeyArgsFn;
          }
        });
      }
    };
    Policies2.prototype.setRootTypename = function(which, typename) {
      if (typename === void 0) {
        typename = which;
      }
      var rootId = "ROOT_" + which.toUpperCase();
      var old = this.rootTypenamesById[rootId];
      if (typename !== old) {
        invariant2(!old || old === which, 6, which);
        if (old) delete this.rootIdsByTypename[old];
        this.rootIdsByTypename[typename] = rootId;
        this.rootTypenamesById[rootId] = typename;
      }
    };
    Policies2.prototype.addPossibleTypes = function(possibleTypes) {
      var _this = this;
      this.usingPossibleTypes = true;
      Object.keys(possibleTypes).forEach(function(supertype) {
        _this.getSupertypeSet(supertype, true);
        possibleTypes[supertype].forEach(function(subtype) {
          _this.getSupertypeSet(subtype, true).add(supertype);
          var match = subtype.match(TypeOrFieldNameRegExp);
          if (!match || match[0] !== subtype) {
            _this.fuzzySubtypes.set(subtype, new RegExp(subtype));
          }
        });
      });
    };
    Policies2.prototype.getTypePolicy = function(typename) {
      var _this = this;
      if (!hasOwn.call(this.typePolicies, typename)) {
        var policy_1 = this.typePolicies[typename] = /* @__PURE__ */ Object.create(null);
        policy_1.fields = /* @__PURE__ */ Object.create(null);
        var supertypes_1 = this.supertypeMap.get(typename);
        if (!supertypes_1 && this.fuzzySubtypes.size) {
          supertypes_1 = this.getSupertypeSet(typename, true);
          this.fuzzySubtypes.forEach(function(regExp, fuzzy) {
            if (regExp.test(typename)) {
              var fuzzySupertypes = _this.supertypeMap.get(fuzzy);
              if (fuzzySupertypes) {
                fuzzySupertypes.forEach(function(supertype) {
                  return supertypes_1.add(supertype);
                });
              }
            }
          });
        }
        if (supertypes_1 && supertypes_1.size) {
          supertypes_1.forEach(function(supertype) {
            var _a2 = _this.getTypePolicy(supertype), fields = _a2.fields, rest = __rest(_a2, ["fields"]);
            Object.assign(policy_1, rest);
            Object.assign(policy_1.fields, fields);
          });
        }
      }
      var inbox = this.toBeAdded[typename];
      if (inbox && inbox.length) {
        inbox.splice(0).forEach(function(policy) {
          _this.updateTypePolicy(typename, policy);
        });
      }
      return this.typePolicies[typename];
    };
    Policies2.prototype.getFieldPolicy = function(typename, fieldName, createIfMissing) {
      if (typename) {
        var fieldPolicies = this.getTypePolicy(typename).fields;
        return fieldPolicies[fieldName] || createIfMissing && (fieldPolicies[fieldName] = /* @__PURE__ */ Object.create(null));
      }
    };
    Policies2.prototype.getSupertypeSet = function(subtype, createIfMissing) {
      var supertypeSet = this.supertypeMap.get(subtype);
      if (!supertypeSet && createIfMissing) {
        this.supertypeMap.set(subtype, supertypeSet = /* @__PURE__ */ new Set());
      }
      return supertypeSet;
    };
    Policies2.prototype.fragmentMatches = function(fragment, typename, result2, variables) {
      var _this = this;
      if (!fragment.typeCondition) return true;
      if (!typename) return false;
      var supertype = fragment.typeCondition.name.value;
      if (typename === supertype) return true;
      if (this.usingPossibleTypes && this.supertypeMap.has(supertype)) {
        var typenameSupertypeSet = this.getSupertypeSet(typename, true);
        var workQueue_1 = [typenameSupertypeSet];
        var maybeEnqueue_1 = function(subtype) {
          var supertypeSet2 = _this.getSupertypeSet(subtype, false);
          if (supertypeSet2 && supertypeSet2.size && workQueue_1.indexOf(supertypeSet2) < 0) {
            workQueue_1.push(supertypeSet2);
          }
        };
        var needToCheckFuzzySubtypes = !!(result2 && this.fuzzySubtypes.size);
        var checkingFuzzySubtypes = false;
        for (var i = 0; i < workQueue_1.length; ++i) {
          var supertypeSet = workQueue_1[i];
          if (supertypeSet.has(supertype)) {
            if (!typenameSupertypeSet.has(supertype)) {
              if (checkingFuzzySubtypes) {
                globalThis.__DEV__ !== false && invariant2.warn(7, typename, supertype);
              }
              typenameSupertypeSet.add(supertype);
            }
            return true;
          }
          supertypeSet.forEach(maybeEnqueue_1);
          if (needToCheckFuzzySubtypes && // Start checking fuzzy subtypes only after exhausting all
          // non-fuzzy subtypes (after the final iteration of the loop).
          i === workQueue_1.length - 1 && // We could wait to compare fragment.selectionSet to result
          // after we verify the supertype, but this check is often less
          // expensive than that search, and we will have to do the
          // comparison anyway whenever we find a potential match.
          selectionSetMatchesResult(fragment.selectionSet, result2, variables)) {
            needToCheckFuzzySubtypes = false;
            checkingFuzzySubtypes = true;
            this.fuzzySubtypes.forEach(function(regExp, fuzzyString) {
              var match = typename.match(regExp);
              if (match && match[0] === typename) {
                maybeEnqueue_1(fuzzyString);
              }
            });
          }
        }
      }
      return false;
    };
    Policies2.prototype.hasKeyArgs = function(typename, fieldName) {
      var policy = this.getFieldPolicy(typename, fieldName, false);
      return !!(policy && policy.keyFn);
    };
    Policies2.prototype.getStoreFieldName = function(fieldSpec) {
      var typename = fieldSpec.typename, fieldName = fieldSpec.fieldName;
      var policy = this.getFieldPolicy(typename, fieldName, false);
      var storeFieldName;
      var keyFn = policy && policy.keyFn;
      if (keyFn && typename) {
        var context = {
          typename,
          fieldName,
          field: fieldSpec.field || null,
          variables: fieldSpec.variables
        };
        var args = argsFromFieldSpecifier(fieldSpec);
        while (keyFn) {
          var specifierOrString = keyFn(args, context);
          if (isArray(specifierOrString)) {
            keyFn = keyArgsFnFromSpecifier(specifierOrString);
          } else {
            storeFieldName = specifierOrString || fieldName;
            break;
          }
        }
      }
      if (storeFieldName === void 0) {
        storeFieldName = fieldSpec.field ? storeKeyNameFromField(fieldSpec.field, fieldSpec.variables) : getStoreKeyName(fieldName, argsFromFieldSpecifier(fieldSpec));
      }
      if (storeFieldName === false) {
        return fieldName;
      }
      return fieldName === fieldNameFromStoreName(storeFieldName) ? storeFieldName : fieldName + ":" + storeFieldName;
    };
    Policies2.prototype.readField = function(options, context) {
      var objectOrReference = options.from;
      if (!objectOrReference) return;
      var nameOrField = options.field || options.fieldName;
      if (!nameOrField) return;
      if (options.typename === void 0) {
        var typename = context.store.getFieldValue(objectOrReference, "__typename");
        if (typename) options.typename = typename;
      }
      var storeFieldName = this.getStoreFieldName(options);
      var fieldName = fieldNameFromStoreName(storeFieldName);
      var existing = context.store.getFieldValue(objectOrReference, storeFieldName);
      var policy = this.getFieldPolicy(options.typename, fieldName, false);
      var read = policy && policy.read;
      if (read) {
        var readOptions = makeFieldFunctionOptions(this, objectOrReference, options, context, context.store.getStorage(isReference(objectOrReference) ? objectOrReference.__ref : objectOrReference, storeFieldName));
        return cacheSlot.withValue(this.cache, read, [existing, readOptions]);
      }
      return existing;
    };
    Policies2.prototype.getReadFunction = function(typename, fieldName) {
      var policy = this.getFieldPolicy(typename, fieldName, false);
      return policy && policy.read;
    };
    Policies2.prototype.getMergeFunction = function(parentTypename, fieldName, childTypename) {
      var policy = this.getFieldPolicy(parentTypename, fieldName, false);
      var merge = policy && policy.merge;
      if (!merge && childTypename) {
        policy = this.getTypePolicy(childTypename);
        merge = policy && policy.merge;
      }
      return merge;
    };
    Policies2.prototype.runMergeFunction = function(existing, incoming, _a2, context, storage) {
      var field = _a2.field, typename = _a2.typename, merge = _a2.merge;
      if (merge === mergeTrueFn) {
        return makeMergeObjectsFunction(context.store)(existing, incoming);
      }
      if (merge === mergeFalseFn) {
        return incoming;
      }
      if (context.overwrite) {
        existing = void 0;
      }
      return merge(existing, incoming, makeFieldFunctionOptions(
        this,
        // Unlike options.readField for read functions, we do not fall
        // back to the current object if no foreignObjOrRef is provided,
        // because it's not clear what the current object should be for
        // merge functions: the (possibly undefined) existing object, or
        // the incoming object? If you think your merge function needs
        // to read sibling fields in order to produce a new value for
        // the current field, you might want to rethink your strategy,
        // because that's a recipe for making merge behavior sensitive
        // to the order in which fields are written into the cache.
        // However, readField(name, ref) is useful for merge functions
        // that need to deduplicate child objects and references.
        void 0,
        {
          typename,
          fieldName: field.name.value,
          field,
          variables: context.variables
        },
        context,
        storage || /* @__PURE__ */ Object.create(null)
      ));
    };
    return Policies2;
  }()
);
function makeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage) {
  var storeFieldName = policies.getStoreFieldName(fieldSpec);
  var fieldName = fieldNameFromStoreName(storeFieldName);
  var variables = fieldSpec.variables || context.variables;
  var _a2 = context.store, toReference = _a2.toReference, canRead = _a2.canRead;
  return {
    args: argsFromFieldSpecifier(fieldSpec),
    field: fieldSpec.field || null,
    fieldName,
    storeFieldName,
    variables,
    isReference,
    toReference,
    storage,
    cache: policies.cache,
    canRead,
    readField: function() {
      return policies.readField(normalizeReadFieldOptions(arguments, objectOrReference, variables), context);
    },
    mergeObjects: makeMergeObjectsFunction(context.store)
  };
}
function normalizeReadFieldOptions(readFieldArgs, objectOrReference, variables) {
  var fieldNameOrOptions = readFieldArgs[0], from2 = readFieldArgs[1], argc = readFieldArgs.length;
  var options;
  if (typeof fieldNameOrOptions === "string") {
    options = {
      fieldName: fieldNameOrOptions,
      // Default to objectOrReference only when no second argument was
      // passed for the from parameter, not when undefined is explicitly
      // passed as the second argument.
      from: argc > 1 ? from2 : objectOrReference
    };
  } else {
    options = __assign({}, fieldNameOrOptions);
    if (!hasOwn.call(options, "from")) {
      options.from = objectOrReference;
    }
  }
  if (globalThis.__DEV__ !== false && options.from === void 0) {
    globalThis.__DEV__ !== false && invariant2.warn(8, stringifyForDisplay(Array.from(readFieldArgs)));
  }
  if (void 0 === options.variables) {
    options.variables = variables;
  }
  return options;
}
function makeMergeObjectsFunction(store) {
  return function mergeObjects(existing, incoming) {
    if (isArray(existing) || isArray(incoming)) {
      throw newInvariantError(9);
    }
    if (isNonNullObject(existing) && isNonNullObject(incoming)) {
      var eType = store.getFieldValue(existing, "__typename");
      var iType = store.getFieldValue(incoming, "__typename");
      var typesDiffer = eType && iType && eType !== iType;
      if (typesDiffer) {
        return incoming;
      }
      if (isReference(existing) && storeValueIsStoreObject(incoming)) {
        store.merge(existing.__ref, incoming);
        return existing;
      }
      if (storeValueIsStoreObject(existing) && isReference(incoming)) {
        store.merge(existing, incoming.__ref);
        return incoming;
      }
      if (storeValueIsStoreObject(existing) && storeValueIsStoreObject(incoming)) {
        return __assign(__assign({}, existing), incoming);
      }
    }
    return incoming;
  };
}

// node_modules/@apollo/client/cache/inmemory/writeToStore.js
function getContextFlavor(context, clientOnly, deferred) {
  var key = "".concat(clientOnly).concat(deferred);
  var flavored = context.flavors.get(key);
  if (!flavored) {
    context.flavors.set(key, flavored = context.clientOnly === clientOnly && context.deferred === deferred ? context : __assign(__assign({}, context), {
      clientOnly,
      deferred
    }));
  }
  return flavored;
}
var StoreWriter = (
  /** @class */
  function() {
    function StoreWriter2(cache, reader, fragments) {
      this.cache = cache;
      this.reader = reader;
      this.fragments = fragments;
    }
    StoreWriter2.prototype.writeToStore = function(store, _a2) {
      var _this = this;
      var query = _a2.query, result2 = _a2.result, dataId = _a2.dataId, variables = _a2.variables, overwrite = _a2.overwrite;
      var operationDefinition = getOperationDefinition(query);
      var merger = makeProcessedFieldsMerger();
      variables = __assign(__assign({}, getDefaultValues(operationDefinition)), variables);
      var context = __assign(__assign({
        store,
        written: /* @__PURE__ */ Object.create(null),
        merge: function(existing, incoming) {
          return merger.merge(existing, incoming);
        },
        variables,
        varString: canonicalStringify(variables)
      }, extractFragmentContext(query, this.fragments)), {
        overwrite: !!overwrite,
        incomingById: /* @__PURE__ */ new Map(),
        clientOnly: false,
        deferred: false,
        flavors: /* @__PURE__ */ new Map()
      });
      var ref = this.processSelectionSet({
        result: result2 || /* @__PURE__ */ Object.create(null),
        dataId,
        selectionSet: operationDefinition.selectionSet,
        mergeTree: {
          map: /* @__PURE__ */ new Map()
        },
        context
      });
      if (!isReference(ref)) {
        throw newInvariantError(12, result2);
      }
      context.incomingById.forEach(function(_a3, dataId2) {
        var storeObject = _a3.storeObject, mergeTree = _a3.mergeTree, fieldNodeSet = _a3.fieldNodeSet;
        var entityRef = makeReference(dataId2);
        if (mergeTree && mergeTree.map.size) {
          var applied = _this.applyMerges(mergeTree, entityRef, storeObject, context);
          if (isReference(applied)) {
            return;
          }
          storeObject = applied;
        }
        if (globalThis.__DEV__ !== false && !context.overwrite) {
          var fieldsWithSelectionSets_1 = /* @__PURE__ */ Object.create(null);
          fieldNodeSet.forEach(function(field) {
            if (field.selectionSet) {
              fieldsWithSelectionSets_1[field.name.value] = true;
            }
          });
          var hasSelectionSet_1 = function(storeFieldName) {
            return fieldsWithSelectionSets_1[fieldNameFromStoreName(storeFieldName)] === true;
          };
          var hasMergeFunction_1 = function(storeFieldName) {
            var childTree = mergeTree && mergeTree.map.get(storeFieldName);
            return Boolean(childTree && childTree.info && childTree.info.merge);
          };
          Object.keys(storeObject).forEach(function(storeFieldName) {
            if (hasSelectionSet_1(storeFieldName) && !hasMergeFunction_1(storeFieldName)) {
              warnAboutDataLoss(entityRef, storeObject, storeFieldName, context.store);
            }
          });
        }
        store.merge(dataId2, storeObject);
      });
      store.retain(ref.__ref);
      return ref;
    };
    StoreWriter2.prototype.processSelectionSet = function(_a2) {
      var _this = this;
      var dataId = _a2.dataId, result2 = _a2.result, selectionSet = _a2.selectionSet, context = _a2.context, mergeTree = _a2.mergeTree;
      var policies = this.cache.policies;
      var incoming = /* @__PURE__ */ Object.create(null);
      var typename = dataId && policies.rootTypenamesById[dataId] || getTypenameFromResult(result2, selectionSet, context.fragmentMap) || dataId && context.store.get(dataId, "__typename");
      if ("string" === typeof typename) {
        incoming.__typename = typename;
      }
      var readField = function() {
        var options = normalizeReadFieldOptions(arguments, incoming, context.variables);
        if (isReference(options.from)) {
          var info = context.incomingById.get(options.from.__ref);
          if (info) {
            var result_1 = policies.readField(__assign(__assign({}, options), {
              from: info.storeObject
            }), context);
            if (result_1 !== void 0) {
              return result_1;
            }
          }
        }
        return policies.readField(options, context);
      };
      var fieldNodeSet = /* @__PURE__ */ new Set();
      this.flattenFields(
        selectionSet,
        result2,
        // This WriteContext will be the default context value for fields returned
        // by the flattenFields method, but some fields may be assigned a modified
        // context, depending on the presence of @client and other directives.
        context,
        typename
      ).forEach(function(context2, field) {
        var _a3;
        var resultFieldKey = resultKeyNameFromField(field);
        var value = result2[resultFieldKey];
        fieldNodeSet.add(field);
        if (value !== void 0) {
          var storeFieldName = policies.getStoreFieldName({
            typename,
            fieldName: field.name.value,
            field,
            variables: context2.variables
          });
          var childTree = getChildMergeTree(mergeTree, storeFieldName);
          var incomingValue = _this.processFieldValue(
            value,
            field,
            // Reset context.clientOnly and context.deferred to their default
            // values before processing nested selection sets.
            field.selectionSet ? getContextFlavor(context2, false, false) : context2,
            childTree
          );
          var childTypename = void 0;
          if (field.selectionSet && (isReference(incomingValue) || storeValueIsStoreObject(incomingValue))) {
            childTypename = readField("__typename", incomingValue);
          }
          var merge = policies.getMergeFunction(typename, field.name.value, childTypename);
          if (merge) {
            childTree.info = {
              // TODO Check compatibility against any existing childTree.field?
              field,
              typename,
              merge
            };
          } else {
            maybeRecycleChildMergeTree(mergeTree, storeFieldName);
          }
          incoming = context2.merge(incoming, (_a3 = {}, _a3[storeFieldName] = incomingValue, _a3));
        } else if (globalThis.__DEV__ !== false && !context2.clientOnly && !context2.deferred && !addTypenameToDocument.added(field) && // If the field has a read function, it may be a synthetic field or
        // provide a default value, so its absence from the written data should
        // not be cause for alarm.
        !policies.getReadFunction(typename, field.name.value)) {
          globalThis.__DEV__ !== false && invariant2.error(13, resultKeyNameFromField(field), result2);
        }
      });
      try {
        var _b = policies.identify(result2, {
          typename,
          selectionSet,
          fragmentMap: context.fragmentMap,
          storeObject: incoming,
          readField
        }), id = _b[0], keyObject = _b[1];
        dataId = dataId || id;
        if (keyObject) {
          incoming = context.merge(incoming, keyObject);
        }
      } catch (e) {
        if (!dataId) throw e;
      }
      if ("string" === typeof dataId) {
        var dataRef = makeReference(dataId);
        var sets = context.written[dataId] || (context.written[dataId] = []);
        if (sets.indexOf(selectionSet) >= 0) return dataRef;
        sets.push(selectionSet);
        if (this.reader && this.reader.isFresh(result2, dataRef, selectionSet, context)) {
          return dataRef;
        }
        var previous_1 = context.incomingById.get(dataId);
        if (previous_1) {
          previous_1.storeObject = context.merge(previous_1.storeObject, incoming);
          previous_1.mergeTree = mergeMergeTrees(previous_1.mergeTree, mergeTree);
          fieldNodeSet.forEach(function(field) {
            return previous_1.fieldNodeSet.add(field);
          });
        } else {
          context.incomingById.set(dataId, {
            storeObject: incoming,
            // Save a reference to mergeTree only if it is not empty, because
            // empty MergeTrees may be recycled by maybeRecycleChildMergeTree and
            // reused for entirely different parts of the result tree.
            mergeTree: mergeTreeIsEmpty(mergeTree) ? void 0 : mergeTree,
            fieldNodeSet
          });
        }
        return dataRef;
      }
      return incoming;
    };
    StoreWriter2.prototype.processFieldValue = function(value, field, context, mergeTree) {
      var _this = this;
      if (!field.selectionSet || value === null) {
        return globalThis.__DEV__ !== false ? cloneDeep(value) : value;
      }
      if (isArray(value)) {
        return value.map(function(item, i) {
          var value2 = _this.processFieldValue(item, field, context, getChildMergeTree(mergeTree, i));
          maybeRecycleChildMergeTree(mergeTree, i);
          return value2;
        });
      }
      return this.processSelectionSet({
        result: value,
        selectionSet: field.selectionSet,
        context,
        mergeTree
      });
    };
    StoreWriter2.prototype.flattenFields = function(selectionSet, result2, context, typename) {
      if (typename === void 0) {
        typename = getTypenameFromResult(result2, selectionSet, context.fragmentMap);
      }
      var fieldMap = /* @__PURE__ */ new Map();
      var policies = this.cache.policies;
      var limitingTrie = new Trie(false);
      (function flatten(selectionSet2, inheritedContext) {
        var visitedNode = limitingTrie.lookup(
          selectionSet2,
          // Because we take inheritedClientOnly and inheritedDeferred into
          // consideration here (in addition to selectionSet), it's possible for
          // the same selection set to be flattened more than once, if it appears
          // in the query with different @client and/or @directive configurations.
          inheritedContext.clientOnly,
          inheritedContext.deferred
        );
        if (visitedNode.visited) return;
        visitedNode.visited = true;
        selectionSet2.selections.forEach(function(selection) {
          if (!shouldInclude(selection, context.variables)) return;
          var clientOnly = inheritedContext.clientOnly, deferred = inheritedContext.deferred;
          if (
            // Since the presence of @client or @defer on this field can only
            // cause clientOnly or deferred to become true, we can skip the
            // forEach loop if both clientOnly and deferred are already true.
            !(clientOnly && deferred) && isNonEmptyArray(selection.directives)
          ) {
            selection.directives.forEach(function(dir) {
              var name = dir.name.value;
              if (name === "client") clientOnly = true;
              if (name === "defer") {
                var args = argumentsObjectFromField(dir, context.variables);
                if (!args || args.if !== false) {
                  deferred = true;
                }
              }
            });
          }
          if (isField(selection)) {
            var existing = fieldMap.get(selection);
            if (existing) {
              clientOnly = clientOnly && existing.clientOnly;
              deferred = deferred && existing.deferred;
            }
            fieldMap.set(selection, getContextFlavor(context, clientOnly, deferred));
          } else {
            var fragment = getFragmentFromSelection(selection, context.lookupFragment);
            if (!fragment && selection.kind === Kind.FRAGMENT_SPREAD) {
              throw newInvariantError(14, selection.name.value);
            }
            if (fragment && policies.fragmentMatches(fragment, typename, result2, context.variables)) {
              flatten(fragment.selectionSet, getContextFlavor(context, clientOnly, deferred));
            }
          }
        });
      })(selectionSet, context);
      return fieldMap;
    };
    StoreWriter2.prototype.applyMerges = function(mergeTree, existing, incoming, context, getStorageArgs) {
      var _a2;
      var _this = this;
      if (mergeTree.map.size && !isReference(incoming)) {
        var e_1 = (
          // Items in the same position in different arrays are not
          // necessarily related to each other, so when incoming is an array
          // we process its elements as if there was no existing data.
          !isArray(incoming) && // Likewise, existing must be either a Reference or a StoreObject
          // in order for its fields to be safe to merge with the fields of
          // the incoming object.
          (isReference(existing) || storeValueIsStoreObject(existing)) ? existing : void 0
        );
        var i_1 = incoming;
        if (e_1 && !getStorageArgs) {
          getStorageArgs = [isReference(e_1) ? e_1.__ref : e_1];
        }
        var changedFields_1;
        var getValue_1 = function(from2, name) {
          return isArray(from2) ? typeof name === "number" ? from2[name] : void 0 : context.store.getFieldValue(from2, String(name));
        };
        mergeTree.map.forEach(function(childTree, storeFieldName) {
          var eVal = getValue_1(e_1, storeFieldName);
          var iVal = getValue_1(i_1, storeFieldName);
          if (void 0 === iVal) return;
          if (getStorageArgs) {
            getStorageArgs.push(storeFieldName);
          }
          var aVal = _this.applyMerges(childTree, eVal, iVal, context, getStorageArgs);
          if (aVal !== iVal) {
            changedFields_1 = changedFields_1 || /* @__PURE__ */ new Map();
            changedFields_1.set(storeFieldName, aVal);
          }
          if (getStorageArgs) {
            invariant2(getStorageArgs.pop() === storeFieldName);
          }
        });
        if (changedFields_1) {
          incoming = isArray(i_1) ? i_1.slice(0) : __assign({}, i_1);
          changedFields_1.forEach(function(value, name) {
            incoming[name] = value;
          });
        }
      }
      if (mergeTree.info) {
        return this.cache.policies.runMergeFunction(existing, incoming, mergeTree.info, context, getStorageArgs && (_a2 = context.store).getStorage.apply(_a2, getStorageArgs));
      }
      return incoming;
    };
    return StoreWriter2;
  }()
);
var emptyMergeTreePool = [];
function getChildMergeTree(_a2, name) {
  var map2 = _a2.map;
  if (!map2.has(name)) {
    map2.set(name, emptyMergeTreePool.pop() || {
      map: /* @__PURE__ */ new Map()
    });
  }
  return map2.get(name);
}
function mergeMergeTrees(left, right) {
  if (left === right || !right || mergeTreeIsEmpty(right)) return left;
  if (!left || mergeTreeIsEmpty(left)) return right;
  var info = left.info && right.info ? __assign(__assign({}, left.info), right.info) : left.info || right.info;
  var needToMergeMaps = left.map.size && right.map.size;
  var map2 = needToMergeMaps ? /* @__PURE__ */ new Map() : left.map.size ? left.map : right.map;
  var merged = {
    info,
    map: map2
  };
  if (needToMergeMaps) {
    var remainingRightKeys_1 = new Set(right.map.keys());
    left.map.forEach(function(leftTree, key) {
      merged.map.set(key, mergeMergeTrees(leftTree, right.map.get(key)));
      remainingRightKeys_1.delete(key);
    });
    remainingRightKeys_1.forEach(function(key) {
      merged.map.set(key, mergeMergeTrees(right.map.get(key), left.map.get(key)));
    });
  }
  return merged;
}
function mergeTreeIsEmpty(tree) {
  return !tree || !(tree.info || tree.map.size);
}
function maybeRecycleChildMergeTree(_a2, name) {
  var map2 = _a2.map;
  var childTree = map2.get(name);
  if (childTree && mergeTreeIsEmpty(childTree)) {
    emptyMergeTreePool.push(childTree);
    map2.delete(name);
  }
}
var warnings = /* @__PURE__ */ new Set();
function warnAboutDataLoss(existingRef, incomingObj, storeFieldName, store) {
  var getChild = function(objOrRef) {
    var child = store.getFieldValue(objOrRef, storeFieldName);
    return typeof child === "object" && child;
  };
  var existing = getChild(existingRef);
  if (!existing) return;
  var incoming = getChild(incomingObj);
  if (!incoming) return;
  if (isReference(existing)) return;
  if (equal(existing, incoming)) return;
  if (Object.keys(existing).every(function(key) {
    return store.getFieldValue(incoming, key) !== void 0;
  })) {
    return;
  }
  var parentType = store.getFieldValue(existingRef, "__typename") || store.getFieldValue(incomingObj, "__typename");
  var fieldName = fieldNameFromStoreName(storeFieldName);
  var typeDotName = "".concat(parentType, ".").concat(fieldName);
  if (warnings.has(typeDotName)) return;
  warnings.add(typeDotName);
  var childTypenames = [];
  if (!isArray(existing) && !isArray(incoming)) {
    [existing, incoming].forEach(function(child) {
      var typename = store.getFieldValue(child, "__typename");
      if (typeof typename === "string" && !childTypenames.includes(typename)) {
        childTypenames.push(typename);
      }
    });
  }
  globalThis.__DEV__ !== false && invariant2.warn(15, fieldName, parentType, childTypenames.length ? "either ensure all objects of type " + childTypenames.join(" and ") + " have an ID or a custom merge function, or " : "", typeDotName, __assign({}, existing), __assign({}, incoming));
}

// node_modules/@apollo/client/cache/inmemory/inMemoryCache.js
var InMemoryCache = (
  /** @class */
  function(_super) {
    __extends(InMemoryCache2, _super);
    function InMemoryCache2(config) {
      if (config === void 0) {
        config = {};
      }
      var _this = _super.call(this) || this;
      _this.watches = /* @__PURE__ */ new Set();
      _this.addTypenameTransform = new DocumentTransform(addTypenameToDocument);
      _this.assumeImmutableResults = true;
      _this.makeVar = makeVar;
      _this.txCount = 0;
      _this.config = normalizeConfig(config);
      _this.addTypename = !!_this.config.addTypename;
      _this.policies = new Policies({
        cache: _this,
        dataIdFromObject: _this.config.dataIdFromObject,
        possibleTypes: _this.config.possibleTypes,
        typePolicies: _this.config.typePolicies
      });
      _this.init();
      return _this;
    }
    InMemoryCache2.prototype.init = function() {
      var rootStore = this.data = new EntityStore.Root({
        policies: this.policies,
        resultCaching: this.config.resultCaching
      });
      this.optimisticData = rootStore.stump;
      this.resetResultCache();
    };
    InMemoryCache2.prototype.resetResultCache = function(resetResultIdentities) {
      var _this = this;
      var previousReader = this.storeReader;
      var fragments = this.config.fragments;
      this.storeWriter = new StoreWriter(this, this.storeReader = new StoreReader({
        cache: this,
        addTypename: this.addTypename,
        resultCacheMaxSize: this.config.resultCacheMaxSize,
        canonizeResults: shouldCanonizeResults(this.config),
        canon: resetResultIdentities ? void 0 : previousReader && previousReader.canon,
        fragments
      }), fragments);
      this.maybeBroadcastWatch = wrap3(function(c, options) {
        return _this.broadcastWatch(c, options);
      }, {
        max: this.config.resultCacheMaxSize || cacheSizes["inMemoryCache.maybeBroadcastWatch"] || 5e3,
        makeCacheKey: function(c) {
          var store = c.optimistic ? _this.optimisticData : _this.data;
          if (supportsResultCaching(store)) {
            var optimistic = c.optimistic, id = c.id, variables = c.variables;
            return store.makeCacheKey(
              c.query,
              // Different watches can have the same query, optimistic
              // status, rootId, and variables, but if their callbacks are
              // different, the (identical) result needs to be delivered to
              // each distinct callback. The easiest way to achieve that
              // separation is to include c.callback in the cache key for
              // maybeBroadcastWatch calls. See issue #5733.
              c.callback,
              canonicalStringify({
                optimistic,
                id,
                variables
              })
            );
          }
        }
      });
      (/* @__PURE__ */ new Set([this.data.group, this.optimisticData.group])).forEach(function(group) {
        return group.resetCaching();
      });
    };
    InMemoryCache2.prototype.restore = function(data) {
      this.init();
      if (data) this.data.replace(data);
      return this;
    };
    InMemoryCache2.prototype.extract = function(optimistic) {
      if (optimistic === void 0) {
        optimistic = false;
      }
      return (optimistic ? this.optimisticData : this.data).extract();
    };
    InMemoryCache2.prototype.read = function(options) {
      var _a2 = options.returnPartialData, returnPartialData = _a2 === void 0 ? false : _a2;
      try {
        return this.storeReader.diffQueryAgainstStore(__assign(__assign({}, options), {
          store: options.optimistic ? this.optimisticData : this.data,
          config: this.config,
          returnPartialData
        })).result || null;
      } catch (e) {
        if (e instanceof MissingFieldError) {
          return null;
        }
        throw e;
      }
    };
    InMemoryCache2.prototype.write = function(options) {
      try {
        ++this.txCount;
        return this.storeWriter.writeToStore(this.data, options);
      } finally {
        if (!--this.txCount && options.broadcast !== false) {
          this.broadcastWatches();
        }
      }
    };
    InMemoryCache2.prototype.modify = function(options) {
      if (hasOwn.call(options, "id") && !options.id) {
        return false;
      }
      var store = options.optimistic ? this.optimisticData : this.data;
      try {
        ++this.txCount;
        return store.modify(options.id || "ROOT_QUERY", options.fields);
      } finally {
        if (!--this.txCount && options.broadcast !== false) {
          this.broadcastWatches();
        }
      }
    };
    InMemoryCache2.prototype.diff = function(options) {
      return this.storeReader.diffQueryAgainstStore(__assign(__assign({}, options), {
        store: options.optimistic ? this.optimisticData : this.data,
        rootId: options.id || "ROOT_QUERY",
        config: this.config
      }));
    };
    InMemoryCache2.prototype.watch = function(watch) {
      var _this = this;
      if (!this.watches.size) {
        recallCache(this);
      }
      this.watches.add(watch);
      if (watch.immediate) {
        this.maybeBroadcastWatch(watch);
      }
      return function() {
        if (_this.watches.delete(watch) && !_this.watches.size) {
          forgetCache(_this);
        }
        _this.maybeBroadcastWatch.forget(watch);
      };
    };
    InMemoryCache2.prototype.gc = function(options) {
      var _a2;
      canonicalStringify.reset();
      print2.reset();
      this.addTypenameTransform.resetCache();
      (_a2 = this.config.fragments) === null || _a2 === void 0 ? void 0 : _a2.resetCaches();
      var ids = this.optimisticData.gc();
      if (options && !this.txCount) {
        if (options.resetResultCache) {
          this.resetResultCache(options.resetResultIdentities);
        } else if (options.resetResultIdentities) {
          this.storeReader.resetCanon();
        }
      }
      return ids;
    };
    InMemoryCache2.prototype.retain = function(rootId, optimistic) {
      return (optimistic ? this.optimisticData : this.data).retain(rootId);
    };
    InMemoryCache2.prototype.release = function(rootId, optimistic) {
      return (optimistic ? this.optimisticData : this.data).release(rootId);
    };
    InMemoryCache2.prototype.identify = function(object) {
      if (isReference(object)) return object.__ref;
      try {
        return this.policies.identify(object)[0];
      } catch (e) {
        globalThis.__DEV__ !== false && invariant2.warn(e);
      }
    };
    InMemoryCache2.prototype.evict = function(options) {
      if (!options.id) {
        if (hasOwn.call(options, "id")) {
          return false;
        }
        options = __assign(__assign({}, options), {
          id: "ROOT_QUERY"
        });
      }
      try {
        ++this.txCount;
        return this.optimisticData.evict(options, this.data);
      } finally {
        if (!--this.txCount && options.broadcast !== false) {
          this.broadcastWatches();
        }
      }
    };
    InMemoryCache2.prototype.reset = function(options) {
      var _this = this;
      this.init();
      canonicalStringify.reset();
      if (options && options.discardWatches) {
        this.watches.forEach(function(watch) {
          return _this.maybeBroadcastWatch.forget(watch);
        });
        this.watches.clear();
        forgetCache(this);
      } else {
        this.broadcastWatches();
      }
      return Promise.resolve();
    };
    InMemoryCache2.prototype.removeOptimistic = function(idToRemove) {
      var newOptimisticData = this.optimisticData.removeLayer(idToRemove);
      if (newOptimisticData !== this.optimisticData) {
        this.optimisticData = newOptimisticData;
        this.broadcastWatches();
      }
    };
    InMemoryCache2.prototype.batch = function(options) {
      var _this = this;
      var update = options.update, _a2 = options.optimistic, optimistic = _a2 === void 0 ? true : _a2, removeOptimistic = options.removeOptimistic, onWatchUpdated = options.onWatchUpdated;
      var updateResult;
      var perform = function(layer) {
        var _a3 = _this, data = _a3.data, optimisticData = _a3.optimisticData;
        ++_this.txCount;
        if (layer) {
          _this.data = _this.optimisticData = layer;
        }
        try {
          return updateResult = update(_this);
        } finally {
          --_this.txCount;
          _this.data = data;
          _this.optimisticData = optimisticData;
        }
      };
      var alreadyDirty = /* @__PURE__ */ new Set();
      if (onWatchUpdated && !this.txCount) {
        this.broadcastWatches(__assign(__assign({}, options), {
          onWatchUpdated: function(watch) {
            alreadyDirty.add(watch);
            return false;
          }
        }));
      }
      if (typeof optimistic === "string") {
        this.optimisticData = this.optimisticData.addLayer(optimistic, perform);
      } else if (optimistic === false) {
        perform(this.data);
      } else {
        perform();
      }
      if (typeof removeOptimistic === "string") {
        this.optimisticData = this.optimisticData.removeLayer(removeOptimistic);
      }
      if (onWatchUpdated && alreadyDirty.size) {
        this.broadcastWatches(__assign(__assign({}, options), {
          onWatchUpdated: function(watch, diff) {
            var result2 = onWatchUpdated.call(this, watch, diff);
            if (result2 !== false) {
              alreadyDirty.delete(watch);
            }
            return result2;
          }
        }));
        if (alreadyDirty.size) {
          alreadyDirty.forEach(function(watch) {
            return _this.maybeBroadcastWatch.dirty(watch);
          });
        }
      } else {
        this.broadcastWatches(options);
      }
      return updateResult;
    };
    InMemoryCache2.prototype.performTransaction = function(update, optimisticId) {
      return this.batch({
        update,
        optimistic: optimisticId || optimisticId !== null
      });
    };
    InMemoryCache2.prototype.transformDocument = function(document) {
      return this.addTypenameToDocument(this.addFragmentsToDocument(document));
    };
    InMemoryCache2.prototype.fragmentMatches = function(fragment, typename) {
      return this.policies.fragmentMatches(fragment, typename);
    };
    InMemoryCache2.prototype.lookupFragment = function(fragmentName) {
      var _a2;
      return ((_a2 = this.config.fragments) === null || _a2 === void 0 ? void 0 : _a2.lookup(fragmentName)) || null;
    };
    InMemoryCache2.prototype.broadcastWatches = function(options) {
      var _this = this;
      if (!this.txCount) {
        this.watches.forEach(function(c) {
          return _this.maybeBroadcastWatch(c, options);
        });
      }
    };
    InMemoryCache2.prototype.addFragmentsToDocument = function(document) {
      var fragments = this.config.fragments;
      return fragments ? fragments.transform(document) : document;
    };
    InMemoryCache2.prototype.addTypenameToDocument = function(document) {
      if (this.addTypename) {
        return this.addTypenameTransform.transformDocument(document);
      }
      return document;
    };
    InMemoryCache2.prototype.broadcastWatch = function(c, options) {
      var lastDiff = c.lastDiff;
      var diff = this.diff(c);
      if (options) {
        if (c.optimistic && typeof options.optimistic === "string") {
          diff.fromOptimisticTransaction = true;
        }
        if (options.onWatchUpdated && options.onWatchUpdated.call(this, c, diff, lastDiff) === false) {
          return;
        }
      }
      if (!lastDiff || !equal(lastDiff.result, diff.result)) {
        c.callback(c.lastDiff = diff, lastDiff);
      }
    };
    return InMemoryCache2;
  }(ApolloCache)
);
if (globalThis.__DEV__ !== false) {
  InMemoryCache.prototype.getMemoryInternals = getInMemoryCacheMemoryInternals;
}

// node_modules/@apollo/client/link/http/iterators/async.js
function asyncIterator(source) {
  var _a2;
  var iterator = source[Symbol.asyncIterator]();
  return _a2 = {
    next: function() {
      return iterator.next();
    }
  }, _a2[Symbol.asyncIterator] = function() {
    return this;
  }, _a2;
}

// node_modules/@apollo/client/link/http/iterators/nodeStream.js
function nodeStreamIterator(stream) {
  var cleanup = null;
  var error = null;
  var done = false;
  var data = [];
  var waiting = [];
  function onData(chunk) {
    if (error) return;
    if (waiting.length) {
      var shiftedArr = waiting.shift();
      if (Array.isArray(shiftedArr) && shiftedArr[0]) {
        return shiftedArr[0]({
          value: chunk,
          done: false
        });
      }
    }
    data.push(chunk);
  }
  function onError(err) {
    error = err;
    var all = waiting.slice();
    all.forEach(function(pair) {
      pair[1](err);
    });
    !cleanup || cleanup();
  }
  function onEnd() {
    done = true;
    var all = waiting.slice();
    all.forEach(function(pair) {
      pair[0]({
        value: void 0,
        done: true
      });
    });
    !cleanup || cleanup();
  }
  cleanup = function() {
    cleanup = null;
    stream.removeListener("data", onData);
    stream.removeListener("error", onError);
    stream.removeListener("end", onEnd);
    stream.removeListener("finish", onEnd);
    stream.removeListener("close", onEnd);
  };
  stream.on("data", onData);
  stream.on("error", onError);
  stream.on("end", onEnd);
  stream.on("finish", onEnd);
  stream.on("close", onEnd);
  function getNext() {
    return new Promise(function(resolve, reject) {
      if (error) return reject(error);
      if (data.length) return resolve({
        value: data.shift(),
        done: false
      });
      if (done) return resolve({
        value: void 0,
        done: true
      });
      waiting.push([resolve, reject]);
    });
  }
  var iterator = {
    next: function() {
      return getNext();
    }
  };
  if (canUseAsyncIteratorSymbol) {
    iterator[Symbol.asyncIterator] = function() {
      return this;
    };
  }
  return iterator;
}

// node_modules/@apollo/client/link/http/iterators/promise.js
function promiseIterator(promise) {
  var resolved = false;
  var iterator = {
    next: function() {
      if (resolved) return Promise.resolve({
        value: void 0,
        done: true
      });
      resolved = true;
      return new Promise(function(resolve, reject) {
        promise.then(function(value) {
          resolve({
            value,
            done: false
          });
        }).catch(reject);
      });
    }
  };
  if (canUseAsyncIteratorSymbol) {
    iterator[Symbol.asyncIterator] = function() {
      return this;
    };
  }
  return iterator;
}

// node_modules/@apollo/client/link/http/iterators/reader.js
function readerIterator(reader) {
  var iterator = {
    next: function() {
      return reader.read();
    }
  };
  if (canUseAsyncIteratorSymbol) {
    iterator[Symbol.asyncIterator] = function() {
      return this;
    };
  }
  return iterator;
}

// node_modules/@apollo/client/link/http/responseIterator.js
function isNodeResponse(value) {
  return !!value.body;
}
function isReadableStream(value) {
  return !!value.getReader;
}
function isAsyncIterableIterator(value) {
  return !!(canUseAsyncIteratorSymbol && value[Symbol.asyncIterator]);
}
function isStreamableBlob(value) {
  return !!value.stream;
}
function isBlob(value) {
  return !!value.arrayBuffer;
}
function isNodeReadableStream(value) {
  return !!value.pipe;
}
function responseIterator(response) {
  var body = response;
  if (isNodeResponse(response)) body = response.body;
  if (isAsyncIterableIterator(body)) return asyncIterator(body);
  if (isReadableStream(body)) return readerIterator(body.getReader());
  if (isStreamableBlob(body)) {
    return readerIterator(body.stream().getReader());
  }
  if (isBlob(body)) return promiseIterator(body.arrayBuffer());
  if (isNodeReadableStream(body)) return nodeStreamIterator(body);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}

// node_modules/@apollo/client/errors/index.js
var PROTOCOL_ERRORS_SYMBOL = Symbol();
function graphQLResultHasProtocolErrors(result2) {
  if (result2.extensions) {
    return Array.isArray(result2.extensions[PROTOCOL_ERRORS_SYMBOL]);
  }
  return false;
}
function isApolloError(err) {
  return err.hasOwnProperty("graphQLErrors");
}
var generateErrorMessage = function(err) {
  var errors = __spreadArray(__spreadArray(__spreadArray([], err.graphQLErrors, true), err.clientErrors, true), err.protocolErrors, true);
  if (err.networkError) errors.push(err.networkError);
  return errors.map(function(err2) {
    return isNonNullObject(err2) && err2.message || "Error message not found.";
  }).join("\n");
};
var ApolloError = (
  /** @class */
  function(_super) {
    __extends(ApolloError2, _super);
    function ApolloError2(_a2) {
      var graphQLErrors = _a2.graphQLErrors, protocolErrors = _a2.protocolErrors, clientErrors = _a2.clientErrors, networkError = _a2.networkError, errorMessage = _a2.errorMessage, extraInfo = _a2.extraInfo;
      var _this = _super.call(this, errorMessage) || this;
      _this.name = "ApolloError";
      _this.graphQLErrors = graphQLErrors || [];
      _this.protocolErrors = protocolErrors || [];
      _this.clientErrors = clientErrors || [];
      _this.networkError = networkError || null;
      _this.message = errorMessage || generateErrorMessage(_this);
      _this.extraInfo = extraInfo;
      _this.cause = __spreadArray(__spreadArray(__spreadArray([networkError], graphQLErrors || [], true), protocolErrors || [], true), clientErrors || [], true).find(function(e) {
        return !!e;
      }) || null;
      _this.__proto__ = ApolloError2.prototype;
      return _this;
    }
    return ApolloError2;
  }(Error)
);

// node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js
var hasOwnProperty5 = Object.prototype.hasOwnProperty;
function readMultipartBody(response, nextValue) {
  return __awaiter(this, void 0, void 0, function() {
    var decoder, contentType, delimiter, boundaryVal, boundary, buffer, iterator, running, _a2, value, done, chunk, searchFrom, bi, message, i, headers, contentType_1, body, result2, next;
    var _b, _c;
    var _d;
    return __generator(this, function(_e) {
      switch (_e.label) {
        case 0:
          if (TextDecoder === void 0) {
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          }
          decoder = new TextDecoder("utf-8");
          contentType = (_d = response.headers) === null || _d === void 0 ? void 0 : _d.get("content-type");
          delimiter = "boundary=";
          boundaryVal = (contentType === null || contentType === void 0 ? void 0 : contentType.includes(delimiter)) ? contentType === null || contentType === void 0 ? void 0 : contentType.substring((contentType === null || contentType === void 0 ? void 0 : contentType.indexOf(delimiter)) + delimiter.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-";
          boundary = "\r\n--".concat(boundaryVal);
          buffer = "";
          iterator = responseIterator(response);
          running = true;
          _e.label = 1;
        case 1:
          if (!running) return [3, 3];
          return [4, iterator.next()];
        case 2:
          _a2 = _e.sent(), value = _a2.value, done = _a2.done;
          chunk = typeof value === "string" ? value : decoder.decode(value);
          searchFrom = buffer.length - boundary.length + 1;
          running = !done;
          buffer += chunk;
          bi = buffer.indexOf(boundary, searchFrom);
          while (bi > -1) {
            message = void 0;
            _b = [buffer.slice(0, bi), buffer.slice(bi + boundary.length)], message = _b[0], buffer = _b[1];
            i = message.indexOf("\r\n\r\n");
            headers = parseHeaders(message.slice(0, i));
            contentType_1 = headers["content-type"];
            if (contentType_1 && contentType_1.toLowerCase().indexOf("application/json") === -1) {
              throw new Error("Unsupported patch content type: application/json is required.");
            }
            body = message.slice(i);
            if (body) {
              result2 = parseJsonBody(response, body);
              if (Object.keys(result2).length > 1 || "data" in result2 || "incremental" in result2 || "errors" in result2 || "payload" in result2) {
                if (isApolloPayloadResult(result2)) {
                  next = {};
                  if ("payload" in result2) {
                    if (Object.keys(result2).length === 1 && result2.payload === null) {
                      return [
                        2
                        /*return*/
                      ];
                    }
                    next = __assign({}, result2.payload);
                  }
                  if ("errors" in result2) {
                    next = __assign(__assign({}, next), {
                      extensions: __assign(__assign({}, "extensions" in next ? next.extensions : null), (_c = {}, _c[PROTOCOL_ERRORS_SYMBOL] = result2.errors, _c))
                    });
                  }
                  nextValue(next);
                } else {
                  nextValue(result2);
                }
              } else if (
                // If the chunk contains only a "hasNext: false", we can call
                // observer.complete() immediately.
                Object.keys(result2).length === 1 && "hasNext" in result2 && !result2.hasNext
              ) {
                return [
                  2
                  /*return*/
                ];
              }
            }
            bi = buffer.indexOf(boundary);
          }
          return [3, 1];
        case 3:
          return [
            2
            /*return*/
          ];
      }
    });
  });
}
function parseHeaders(headerText) {
  var headersInit = {};
  headerText.split("\n").forEach(function(line) {
    var i = line.indexOf(":");
    if (i > -1) {
      var name_1 = line.slice(0, i).trim().toLowerCase();
      var value = line.slice(i + 1).trim();
      headersInit[name_1] = value;
    }
  });
  return headersInit;
}
function parseJsonBody(response, bodyText) {
  if (response.status >= 300) {
    var getResult = function() {
      try {
        return JSON.parse(bodyText);
      } catch (err) {
        return bodyText;
      }
    };
    throwServerError(response, getResult(), "Response not successful: Received status code ".concat(response.status));
  }
  try {
    return JSON.parse(bodyText);
  } catch (err) {
    var parseError = err;
    parseError.name = "ServerParseError";
    parseError.response = response;
    parseError.statusCode = response.status;
    parseError.bodyText = bodyText;
    throw parseError;
  }
}
function handleError(err, observer) {
  if (err.result && err.result.errors && err.result.data) {
    observer.next(err.result);
  }
  observer.error(err);
}
function parseAndCheckHttpResponse(operations) {
  return function(response) {
    return response.text().then(function(bodyText) {
      return parseJsonBody(response, bodyText);
    }).then(function(result2) {
      if (!Array.isArray(result2) && !hasOwnProperty5.call(result2, "data") && !hasOwnProperty5.call(result2, "errors")) {
        throwServerError(response, result2, "Server response was missing for query '".concat(Array.isArray(operations) ? operations.map(function(op) {
          return op.operationName;
        }) : operations.operationName, "'."));
      }
      return result2;
    });
  };
}

// node_modules/@apollo/client/link/http/serializeFetchParameter.js
var serializeFetchParameter = function(p, label) {
  var serialized;
  try {
    serialized = JSON.stringify(p);
  } catch (e) {
    var parseError = newInvariantError(42, label, e.message);
    parseError.parseError = e;
    throw parseError;
  }
  return serialized;
};

// node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js
var defaultHttpOptions = {
  includeQuery: true,
  includeExtensions: false,
  preserveHeaderCase: false
};
var defaultHeaders = {
  // headers are case insensitive (https://stackoverflow.com/a/5259004)
  accept: "*/*",
  // The content-type header describes the type of the body of the request, and
  // so it typically only is sent with requests that actually have bodies. One
  // could imagine that Apollo Client would remove this header when constructing
  // a GET request (which has no body), but we historically have not done that.
  // This means that browsers will preflight all Apollo Client requests (even
  // GET requests). Apollo Server's CSRF prevention feature (introduced in
  // AS3.7) takes advantage of this fact and does not block requests with this
  // header. If you want to drop this header from GET requests, then you should
  // probably replace it with a `apollo-require-preflight` header, or servers
  // with CSRF prevention enabled might block your GET request. See
  // https://www.apollographql.com/docs/apollo-server/security/cors/#preventing-cross-site-request-forgery-csrf
  // for more details.
  "content-type": "application/json"
};
var defaultOptions = {
  method: "POST"
};
var fallbackHttpConfig = {
  http: defaultHttpOptions,
  headers: defaultHeaders,
  options: defaultOptions
};
var defaultPrinter = function(ast, printer) {
  return printer(ast);
};
function selectHttpOptionsAndBodyInternal(operation, printer) {
  var configs = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    configs[_i - 2] = arguments[_i];
  }
  var options = {};
  var http = {};
  configs.forEach(function(config) {
    options = __assign(__assign(__assign({}, options), config.options), {
      headers: __assign(__assign({}, options.headers), config.headers)
    });
    if (config.credentials) {
      options.credentials = config.credentials;
    }
    http = __assign(__assign({}, http), config.http);
  });
  if (options.headers) {
    options.headers = removeDuplicateHeaders(options.headers, http.preserveHeaderCase);
  }
  var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
  var body = {
    operationName,
    variables
  };
  if (http.includeExtensions) body.extensions = extensions;
  if (http.includeQuery) body.query = printer(query, print2);
  return {
    options,
    body
  };
}
function removeDuplicateHeaders(headers, preserveHeaderCase) {
  if (!preserveHeaderCase) {
    var normalizedHeaders_1 = {};
    Object.keys(Object(headers)).forEach(function(name) {
      normalizedHeaders_1[name.toLowerCase()] = headers[name];
    });
    return normalizedHeaders_1;
  }
  var headerData = {};
  Object.keys(Object(headers)).forEach(function(name) {
    headerData[name.toLowerCase()] = {
      originalName: name,
      value: headers[name]
    };
  });
  var normalizedHeaders = {};
  Object.keys(headerData).forEach(function(name) {
    normalizedHeaders[headerData[name].originalName] = headerData[name].value;
  });
  return normalizedHeaders;
}

// node_modules/@apollo/client/link/http/checkFetcher.js
var checkFetcher = function(fetcher) {
  if (!fetcher && typeof fetch === "undefined") {
    throw newInvariantError(40);
  }
};

// node_modules/@apollo/client/link/http/selectURI.js
var selectURI = function(operation, fallbackURI) {
  var context = operation.getContext();
  var contextURI = context.uri;
  if (contextURI) {
    return contextURI;
  } else if (typeof fallbackURI === "function") {
    return fallbackURI(operation);
  } else {
    return fallbackURI || "/graphql";
  }
};

// node_modules/@apollo/client/link/http/rewriteURIForGET.js
function rewriteURIForGET(chosenURI, body) {
  var queryParams = [];
  var addQueryParam = function(key, value) {
    queryParams.push("".concat(key, "=").concat(encodeURIComponent(value)));
  };
  if ("query" in body) {
    addQueryParam("query", body.query);
  }
  if (body.operationName) {
    addQueryParam("operationName", body.operationName);
  }
  if (body.variables) {
    var serializedVariables = void 0;
    try {
      serializedVariables = serializeFetchParameter(body.variables, "Variables map");
    } catch (parseError) {
      return {
        parseError
      };
    }
    addQueryParam("variables", serializedVariables);
  }
  if (body.extensions) {
    var serializedExtensions = void 0;
    try {
      serializedExtensions = serializeFetchParameter(body.extensions, "Extensions map");
    } catch (parseError) {
      return {
        parseError
      };
    }
    addQueryParam("extensions", serializedExtensions);
  }
  var fragment = "", preFragment = chosenURI;
  var fragmentStart = chosenURI.indexOf("#");
  if (fragmentStart !== -1) {
    fragment = chosenURI.substr(fragmentStart);
    preFragment = chosenURI.substr(0, fragmentStart);
  }
  var queryParamsPrefix = preFragment.indexOf("?") === -1 ? "?" : "&";
  var newURI = preFragment + queryParamsPrefix + queryParams.join("&") + fragment;
  return {
    newURI
  };
}

// node_modules/@apollo/client/link/http/createHttpLink.js
var backupFetch = maybe(function() {
  return fetch;
});
var createHttpLink = function(linkOptions) {
  if (linkOptions === void 0) {
    linkOptions = {};
  }
  var _a2 = linkOptions.uri, uri = _a2 === void 0 ? "/graphql" : _a2, preferredFetch = linkOptions.fetch, _b = linkOptions.print, print3 = _b === void 0 ? defaultPrinter : _b, includeExtensions = linkOptions.includeExtensions, preserveHeaderCase = linkOptions.preserveHeaderCase, useGETForQueries = linkOptions.useGETForQueries, _c = linkOptions.includeUnusedVariables, includeUnusedVariables = _c === void 0 ? false : _c, requestOptions = __rest(linkOptions, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
  if (globalThis.__DEV__ !== false) {
    checkFetcher(preferredFetch || backupFetch);
  }
  var linkConfig = {
    http: {
      includeExtensions,
      preserveHeaderCase
    },
    options: requestOptions.fetchOptions,
    credentials: requestOptions.credentials,
    headers: requestOptions.headers
  };
  return new ApolloLink(function(operation) {
    var chosenURI = selectURI(operation, uri);
    var context = operation.getContext();
    var clientAwarenessHeaders = {};
    if (context.clientAwareness) {
      var _a3 = context.clientAwareness, name_1 = _a3.name, version2 = _a3.version;
      if (name_1) {
        clientAwarenessHeaders["apollographql-client-name"] = name_1;
      }
      if (version2) {
        clientAwarenessHeaders["apollographql-client-version"] = version2;
      }
    }
    var contextHeaders = __assign(__assign({}, clientAwarenessHeaders), context.headers);
    var contextConfig = {
      http: context.http,
      options: context.fetchOptions,
      credentials: context.credentials,
      headers: contextHeaders
    };
    if (hasDirectives(["client"], operation.query)) {
      var transformedQuery = removeClientSetsFromDocument(operation.query);
      if (!transformedQuery) {
        return fromError(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
      }
      operation.query = transformedQuery;
    }
    var _b2 = selectHttpOptionsAndBodyInternal(operation, print3, fallbackHttpConfig, linkConfig, contextConfig), options = _b2.options, body = _b2.body;
    if (body.variables && !includeUnusedVariables) {
      body.variables = filterOperationVariables(body.variables, operation.query);
    }
    var controller;
    if (!options.signal && typeof AbortController !== "undefined") {
      controller = new AbortController();
      options.signal = controller.signal;
    }
    var definitionIsMutation = function(d) {
      return d.kind === "OperationDefinition" && d.operation === "mutation";
    };
    var definitionIsSubscription = function(d) {
      return d.kind === "OperationDefinition" && d.operation === "subscription";
    };
    var isSubscription = definitionIsSubscription(getMainDefinition(operation.query));
    var hasDefer = hasDirectives(["defer"], operation.query);
    if (useGETForQueries && !operation.query.definitions.some(definitionIsMutation)) {
      options.method = "GET";
    }
    if (hasDefer || isSubscription) {
      options.headers = options.headers || {};
      var acceptHeader = "multipart/mixed;";
      if (isSubscription && hasDefer) {
        globalThis.__DEV__ !== false && invariant2.warn(41);
      }
      if (isSubscription) {
        acceptHeader += "boundary=graphql;subscriptionSpec=1.0,application/json";
      } else if (hasDefer) {
        acceptHeader += "deferSpec=20220824,application/json";
      }
      options.headers.accept = acceptHeader;
    }
    if (options.method === "GET") {
      var _c2 = rewriteURIForGET(chosenURI, body), newURI = _c2.newURI, parseError = _c2.parseError;
      if (parseError) {
        return fromError(parseError);
      }
      chosenURI = newURI;
    } else {
      try {
        options.body = serializeFetchParameter(body, "Payload");
      } catch (parseError2) {
        return fromError(parseError2);
      }
    }
    return new Observable2(function(observer) {
      var currentFetch = preferredFetch || maybe(function() {
        return fetch;
      }) || backupFetch;
      var observerNext = observer.next.bind(observer);
      currentFetch(chosenURI, options).then(function(response) {
        var _a4;
        operation.setContext({
          response
        });
        var ctype = (_a4 = response.headers) === null || _a4 === void 0 ? void 0 : _a4.get("content-type");
        if (ctype !== null && /^multipart\/mixed/i.test(ctype)) {
          return readMultipartBody(response, observerNext);
        } else {
          return parseAndCheckHttpResponse(operation)(response).then(observerNext);
        }
      }).then(function() {
        controller = void 0;
        observer.complete();
      }).catch(function(err) {
        controller = void 0;
        handleError(err, observer);
      });
      return function() {
        if (controller) controller.abort();
      };
    });
  });
};

// node_modules/@apollo/client/link/http/HttpLink.js
var HttpLink = (
  /** @class */
  function(_super) {
    __extends(HttpLink2, _super);
    function HttpLink2(options) {
      if (options === void 0) {
        options = {};
      }
      var _this = _super.call(this, createHttpLink(options).request) || this;
      _this.options = options;
      return _this;
    }
    return HttpLink2;
  }(ApolloLink)
);

// node_modules/@apollo/client/core/networkStatus.js
var NetworkStatus;
(function(NetworkStatus2) {
  NetworkStatus2[NetworkStatus2["loading"] = 1] = "loading";
  NetworkStatus2[NetworkStatus2["setVariables"] = 2] = "setVariables";
  NetworkStatus2[NetworkStatus2["fetchMore"] = 3] = "fetchMore";
  NetworkStatus2[NetworkStatus2["refetch"] = 4] = "refetch";
  NetworkStatus2[NetworkStatus2["poll"] = 6] = "poll";
  NetworkStatus2[NetworkStatus2["ready"] = 7] = "ready";
  NetworkStatus2[NetworkStatus2["error"] = 8] = "error";
})(NetworkStatus || (NetworkStatus = {}));
function isNetworkRequestInFlight(networkStatus) {
  return networkStatus ? networkStatus < 7 : false;
}

// node_modules/@apollo/client/core/ObservableQuery.js
var assign = Object.assign;
var hasOwnProperty6 = Object.hasOwnProperty;
var ObservableQuery = (
  /** @class */
  function(_super) {
    __extends(ObservableQuery2, _super);
    function ObservableQuery2(_a2) {
      var queryManager = _a2.queryManager, queryInfo = _a2.queryInfo, options = _a2.options;
      var _this = _super.call(this, function(observer) {
        try {
          var subObserver = observer._subscription._observer;
          if (subObserver && !subObserver.error) {
            subObserver.error = defaultSubscriptionObserverErrorCallback;
          }
        } catch (_a3) {
        }
        var first = !_this.observers.size;
        _this.observers.add(observer);
        var last = _this.last;
        if (last && last.error) {
          observer.error && observer.error(last.error);
        } else if (last && last.result) {
          observer.next && observer.next(_this.maskResult(last.result));
        }
        if (first) {
          _this.reobserve().catch(function() {
          });
        }
        return function() {
          if (_this.observers.delete(observer) && !_this.observers.size) {
            _this.tearDownQuery();
          }
        };
      }) || this;
      _this.observers = /* @__PURE__ */ new Set();
      _this.subscriptions = /* @__PURE__ */ new Set();
      _this.queryInfo = queryInfo;
      _this.queryManager = queryManager;
      _this.waitForOwnResult = skipCacheDataFor(options.fetchPolicy);
      _this.isTornDown = false;
      _this.subscribeToMore = _this.subscribeToMore.bind(_this);
      _this.maskResult = _this.maskResult.bind(_this);
      var _b = queryManager.defaultOptions.watchQuery, _c = _b === void 0 ? {} : _b, _d = _c.fetchPolicy, defaultFetchPolicy = _d === void 0 ? "cache-first" : _d;
      var _e = options.fetchPolicy, fetchPolicy = _e === void 0 ? defaultFetchPolicy : _e, _f = options.initialFetchPolicy, initialFetchPolicy = _f === void 0 ? fetchPolicy === "standby" ? defaultFetchPolicy : fetchPolicy : _f;
      _this.options = __assign(__assign({}, options), {
        // Remember the initial options.fetchPolicy so we can revert back to this
        // policy when variables change. This information can also be specified
        // (or overridden) by providing options.initialFetchPolicy explicitly.
        initialFetchPolicy,
        // This ensures this.options.fetchPolicy always has a string value, in
        // case options.fetchPolicy was not provided.
        fetchPolicy
      });
      _this.queryId = queryInfo.queryId || queryManager.generateQueryId();
      var opDef = getOperationDefinition(_this.query);
      _this.queryName = opDef && opDef.name && opDef.name.value;
      return _this;
    }
    Object.defineProperty(ObservableQuery2.prototype, "query", {
      // The `query` computed property will always reflect the document transformed
      // by the last run query. `this.options.query` will always reflect the raw
      // untransformed query to ensure document transforms with runtime conditionals
      // are run on the original document.
      get: function() {
        return this.lastQuery || this.options.query;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ObservableQuery2.prototype, "variables", {
      // Computed shorthand for this.options.variables, preserved for
      // backwards compatibility.
      /**
       * An object containing the variables that were provided for the query.
       */
      get: function() {
        return this.options.variables;
      },
      enumerable: false,
      configurable: true
    });
    ObservableQuery2.prototype.result = function() {
      var _this = this;
      return new Promise(function(resolve, reject) {
        var observer = {
          next: function(result2) {
            resolve(result2);
            _this.observers.delete(observer);
            if (!_this.observers.size) {
              _this.queryManager.removeQuery(_this.queryId);
            }
            setTimeout(function() {
              subscription.unsubscribe();
            }, 0);
          },
          error: reject
        };
        var subscription = _this.subscribe(observer);
      });
    };
    ObservableQuery2.prototype.resetDiff = function() {
      this.queryInfo.resetDiff();
    };
    ObservableQuery2.prototype.getCurrentFullResult = function(saveAsLastResult) {
      if (saveAsLastResult === void 0) {
        saveAsLastResult = true;
      }
      var lastResult = this.getLastResult(true);
      var networkStatus = this.queryInfo.networkStatus || lastResult && lastResult.networkStatus || NetworkStatus.ready;
      var result2 = __assign(__assign({}, lastResult), {
        loading: isNetworkRequestInFlight(networkStatus),
        networkStatus
      });
      var _a2 = this.options.fetchPolicy, fetchPolicy = _a2 === void 0 ? "cache-first" : _a2;
      if (
        // These fetch policies should never deliver data from the cache, unless
        // redelivering a previously delivered result.
        skipCacheDataFor(fetchPolicy) || // If this.options.query has @client(always: true) fields, we cannot
        // trust diff.result, since it was read from the cache without running
        // local resolvers (and it's too late to run resolvers now, since we must
        // return a result synchronously).
        this.queryManager.getDocumentInfo(this.query).hasForcedResolvers
      ) {
      } else if (this.waitForOwnResult) {
        this.queryInfo["updateWatch"]();
      } else {
        var diff = this.queryInfo.getDiff();
        if (diff.complete || this.options.returnPartialData) {
          result2.data = diff.result;
        }
        if (equal(result2.data, {})) {
          result2.data = void 0;
        }
        if (diff.complete) {
          delete result2.partial;
          if (diff.complete && result2.networkStatus === NetworkStatus.loading && (fetchPolicy === "cache-first" || fetchPolicy === "cache-only")) {
            result2.networkStatus = NetworkStatus.ready;
            result2.loading = false;
          }
        } else {
          result2.partial = true;
        }
        if (result2.networkStatus === NetworkStatus.ready && (result2.error || result2.errors)) {
          result2.networkStatus = NetworkStatus.error;
        }
        if (globalThis.__DEV__ !== false && !diff.complete && !this.options.partialRefetch && !result2.loading && !result2.data && !result2.error) {
          logMissingFieldErrors(diff.missing);
        }
      }
      if (saveAsLastResult) {
        this.updateLastResult(result2);
      }
      return result2;
    };
    ObservableQuery2.prototype.getCurrentResult = function(saveAsLastResult) {
      if (saveAsLastResult === void 0) {
        saveAsLastResult = true;
      }
      return this.maskResult(this.getCurrentFullResult(saveAsLastResult));
    };
    ObservableQuery2.prototype.isDifferentFromLastResult = function(newResult, variables) {
      if (!this.last) {
        return true;
      }
      var documentInfo = this.queryManager.getDocumentInfo(this.query);
      var dataMasking = this.queryManager.dataMasking;
      var query = dataMasking ? documentInfo.nonReactiveQuery : this.query;
      var resultIsDifferent = dataMasking || documentInfo.hasNonreactiveDirective ? !equalByQuery(query, this.last.result, newResult, this.variables) : !equal(this.last.result, newResult);
      return resultIsDifferent || variables && !equal(this.last.variables, variables);
    };
    ObservableQuery2.prototype.getLast = function(key, variablesMustMatch) {
      var last = this.last;
      if (last && last[key] && (!variablesMustMatch || equal(last.variables, this.variables))) {
        return last[key];
      }
    };
    ObservableQuery2.prototype.getLastResult = function(variablesMustMatch) {
      return this.getLast("result", variablesMustMatch);
    };
    ObservableQuery2.prototype.getLastError = function(variablesMustMatch) {
      return this.getLast("error", variablesMustMatch);
    };
    ObservableQuery2.prototype.resetLastResults = function() {
      delete this.last;
      this.isTornDown = false;
    };
    ObservableQuery2.prototype.resetQueryStoreErrors = function() {
      this.queryManager.resetErrors(this.queryId);
    };
    ObservableQuery2.prototype.refetch = function(variables) {
      var _a2;
      var reobserveOptions = {
        // Always disable polling for refetches.
        pollInterval: 0
      };
      var fetchPolicy = this.options.fetchPolicy;
      if (fetchPolicy === "no-cache") {
        reobserveOptions.fetchPolicy = "no-cache";
      } else {
        reobserveOptions.fetchPolicy = "network-only";
      }
      if (globalThis.__DEV__ !== false && variables && hasOwnProperty6.call(variables, "variables")) {
        var queryDef = getQueryDefinition(this.query);
        var vars = queryDef.variableDefinitions;
        if (!vars || !vars.some(function(v) {
          return v.variable.name.value === "variables";
        })) {
          globalThis.__DEV__ !== false && invariant2.warn(21, variables, ((_a2 = queryDef.name) === null || _a2 === void 0 ? void 0 : _a2.value) || queryDef);
        }
      }
      if (variables && !equal(this.options.variables, variables)) {
        reobserveOptions.variables = this.options.variables = __assign(__assign({}, this.options.variables), variables);
      }
      this.queryInfo.resetLastWrite();
      return this.reobserve(reobserveOptions, NetworkStatus.refetch);
    };
    ObservableQuery2.prototype.fetchMore = function(fetchMoreOptions) {
      var _this = this;
      var combinedOptions = __assign(__assign({}, fetchMoreOptions.query ? fetchMoreOptions : __assign(__assign(__assign(__assign({}, this.options), {
        query: this.options.query
      }), fetchMoreOptions), {
        variables: __assign(__assign({}, this.options.variables), fetchMoreOptions.variables)
      })), {
        // The fetchMore request goes immediately to the network and does
        // not automatically write its result to the cache (hence no-cache
        // instead of network-only), because we allow the caller of
        // fetchMore to provide an updateQuery callback that determines how
        // the data gets written to the cache.
        fetchPolicy: "no-cache"
      });
      combinedOptions.query = this.transformDocument(combinedOptions.query);
      var qid = this.queryManager.generateQueryId();
      this.lastQuery = fetchMoreOptions.query ? this.transformDocument(this.options.query) : combinedOptions.query;
      var queryInfo = this.queryInfo;
      var originalNetworkStatus = queryInfo.networkStatus;
      queryInfo.networkStatus = NetworkStatus.fetchMore;
      if (combinedOptions.notifyOnNetworkStatusChange) {
        this.observe();
      }
      var updatedQuerySet = /* @__PURE__ */ new Set();
      var updateQuery = fetchMoreOptions === null || fetchMoreOptions === void 0 ? void 0 : fetchMoreOptions.updateQuery;
      var isCached = this.options.fetchPolicy !== "no-cache";
      if (!isCached) {
        invariant2(updateQuery, 22);
      }
      return this.queryManager.fetchQuery(qid, combinedOptions, NetworkStatus.fetchMore).then(function(fetchMoreResult) {
        _this.queryManager.removeQuery(qid);
        if (queryInfo.networkStatus === NetworkStatus.fetchMore) {
          queryInfo.networkStatus = originalNetworkStatus;
        }
        if (isCached) {
          _this.queryManager.cache.batch({
            update: function(cache) {
              var updateQuery2 = fetchMoreOptions.updateQuery;
              if (updateQuery2) {
                cache.updateQuery({
                  query: _this.query,
                  variables: _this.variables,
                  returnPartialData: true,
                  optimistic: false
                }, function(previous) {
                  return updateQuery2(previous, {
                    fetchMoreResult: fetchMoreResult.data,
                    variables: combinedOptions.variables
                  });
                });
              } else {
                cache.writeQuery({
                  query: combinedOptions.query,
                  variables: combinedOptions.variables,
                  data: fetchMoreResult.data
                });
              }
            },
            onWatchUpdated: function(watch) {
              updatedQuerySet.add(watch.query);
            }
          });
        } else {
          var lastResult = _this.getLast("result");
          var data = updateQuery(lastResult.data, {
            fetchMoreResult: fetchMoreResult.data,
            variables: combinedOptions.variables
          });
          _this.reportResult(__assign(__assign({}, lastResult), {
            networkStatus: originalNetworkStatus,
            loading: isNetworkRequestInFlight(originalNetworkStatus),
            data
          }), _this.variables);
        }
        return _this.maskResult(fetchMoreResult);
      }).finally(function() {
        if (isCached && !updatedQuerySet.has(_this.query)) {
          reobserveCacheFirst(_this);
        }
      });
    };
    ObservableQuery2.prototype.subscribeToMore = function(options) {
      var _this = this;
      var subscription = this.queryManager.startGraphQLSubscription({
        query: options.document,
        variables: options.variables,
        context: options.context
      }).subscribe({
        next: function(subscriptionData) {
          var updateQuery = options.updateQuery;
          if (updateQuery) {
            _this.updateQuery(function(previous, updateOptions) {
              return updateQuery(previous, __assign({
                subscriptionData
              }, updateOptions));
            });
          }
        },
        error: function(err) {
          if (options.onError) {
            options.onError(err);
            return;
          }
          globalThis.__DEV__ !== false && invariant2.error(23, err);
        }
      });
      this.subscriptions.add(subscription);
      return function() {
        if (_this.subscriptions.delete(subscription)) {
          subscription.unsubscribe();
        }
      };
    };
    ObservableQuery2.prototype.setOptions = function(newOptions) {
      return this.reobserve(newOptions);
    };
    ObservableQuery2.prototype.silentSetOptions = function(newOptions) {
      var mergedOptions = compact(this.options, newOptions || {});
      assign(this.options, mergedOptions);
    };
    ObservableQuery2.prototype.setVariables = function(variables) {
      if (equal(this.variables, variables)) {
        return this.observers.size ? this.result() : Promise.resolve();
      }
      this.options.variables = variables;
      if (!this.observers.size) {
        return Promise.resolve();
      }
      return this.reobserve({
        // Reset options.fetchPolicy to its original value.
        fetchPolicy: this.options.initialFetchPolicy,
        variables
      }, NetworkStatus.setVariables);
    };
    ObservableQuery2.prototype.updateQuery = function(mapFn) {
      var queryManager = this.queryManager;
      var _a2 = queryManager.cache.diff({
        query: this.options.query,
        variables: this.variables,
        returnPartialData: true,
        optimistic: false
      }), result2 = _a2.result, complete = _a2.complete;
      var newResult = mapFn(result2, {
        variables: this.variables,
        complete: !!complete,
        previousData: result2
      });
      if (newResult) {
        queryManager.cache.writeQuery({
          query: this.options.query,
          data: newResult,
          variables: this.variables
        });
        queryManager.broadcastQueries();
      }
    };
    ObservableQuery2.prototype.startPolling = function(pollInterval) {
      this.options.pollInterval = pollInterval;
      this.updatePolling();
    };
    ObservableQuery2.prototype.stopPolling = function() {
      this.options.pollInterval = 0;
      this.updatePolling();
    };
    ObservableQuery2.prototype.applyNextFetchPolicy = function(reason, options) {
      if (options.nextFetchPolicy) {
        var _a2 = options.fetchPolicy, fetchPolicy = _a2 === void 0 ? "cache-first" : _a2, _b = options.initialFetchPolicy, initialFetchPolicy = _b === void 0 ? fetchPolicy : _b;
        if (fetchPolicy === "standby") {
        } else if (typeof options.nextFetchPolicy === "function") {
          options.fetchPolicy = options.nextFetchPolicy(fetchPolicy, {
            reason,
            options,
            observable: this,
            initialFetchPolicy
          });
        } else if (reason === "variables-changed") {
          options.fetchPolicy = initialFetchPolicy;
        } else {
          options.fetchPolicy = options.nextFetchPolicy;
        }
      }
      return options.fetchPolicy;
    };
    ObservableQuery2.prototype.fetch = function(options, newNetworkStatus, query) {
      this.queryManager.setObservableQuery(this);
      return this.queryManager["fetchConcastWithInfo"](this.queryId, options, newNetworkStatus, query);
    };
    ObservableQuery2.prototype.updatePolling = function() {
      var _this = this;
      if (this.queryManager.ssrMode) {
        return;
      }
      var _a2 = this, pollingInfo = _a2.pollingInfo, pollInterval = _a2.options.pollInterval;
      if (!pollInterval || !this.hasObservers()) {
        if (pollingInfo) {
          clearTimeout(pollingInfo.timeout);
          delete this.pollingInfo;
        }
        return;
      }
      if (pollingInfo && pollingInfo.interval === pollInterval) {
        return;
      }
      invariant2(pollInterval, 24);
      var info = pollingInfo || (this.pollingInfo = {});
      info.interval = pollInterval;
      var maybeFetch = function() {
        var _a3, _b;
        if (_this.pollingInfo) {
          if (!isNetworkRequestInFlight(_this.queryInfo.networkStatus) && !((_b = (_a3 = _this.options).skipPollAttempt) === null || _b === void 0 ? void 0 : _b.call(_a3))) {
            _this.reobserve({
              // Most fetchPolicy options don't make sense to use in a polling context, as
              // users wouldn't want to be polling the cache directly. However, network-only and
              // no-cache are both useful for when the user wants to control whether or not the
              // polled results are written to the cache.
              fetchPolicy: _this.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
            }, NetworkStatus.poll).then(poll, poll);
          } else {
            poll();
          }
        }
      };
      var poll = function() {
        var info2 = _this.pollingInfo;
        if (info2) {
          clearTimeout(info2.timeout);
          info2.timeout = setTimeout(maybeFetch, info2.interval);
        }
      };
      poll();
    };
    ObservableQuery2.prototype.updateLastResult = function(newResult, variables) {
      if (variables === void 0) {
        variables = this.variables;
      }
      var error = this.getLastError();
      if (error && this.last && !equal(variables, this.last.variables)) {
        error = void 0;
      }
      return this.last = __assign({
        result: this.queryManager.assumeImmutableResults ? newResult : cloneDeep(newResult),
        variables
      }, error ? {
        error
      } : null);
    };
    ObservableQuery2.prototype.reobserveAsConcast = function(newOptions, newNetworkStatus) {
      var _this = this;
      this.isTornDown = false;
      var useDisposableConcast = (
        // Refetching uses a disposable Concast to allow refetches using different
        // options/variables, without permanently altering the options of the
        // original ObservableQuery.
        newNetworkStatus === NetworkStatus.refetch || // The fetchMore method does not actually call the reobserve method, but,
        // if it did, it would definitely use a disposable Concast.
        newNetworkStatus === NetworkStatus.fetchMore || // Polling uses a disposable Concast so the polling options (which force
        // fetchPolicy to be "network-only" or "no-cache") won't override the original options.
        newNetworkStatus === NetworkStatus.poll
      );
      var oldVariables = this.options.variables;
      var oldFetchPolicy = this.options.fetchPolicy;
      var mergedOptions = compact(this.options, newOptions || {});
      var options = useDisposableConcast ? (
        // Disposable Concast fetches receive a shallow copy of this.options
        // (merged with newOptions), leaving this.options unmodified.
        mergedOptions
      ) : assign(this.options, mergedOptions);
      var query = this.transformDocument(options.query);
      this.lastQuery = query;
      if (!useDisposableConcast) {
        this.updatePolling();
        if (newOptions && newOptions.variables && !equal(newOptions.variables, oldVariables) && // Don't mess with the fetchPolicy if it's currently "standby".
        options.fetchPolicy !== "standby" && // If we're changing the fetchPolicy anyway, don't try to change it here
        // using applyNextFetchPolicy. The explicit options.fetchPolicy wins.
        (options.fetchPolicy === oldFetchPolicy || // A `nextFetchPolicy` function has even higher priority, though,
        // so in that case `applyNextFetchPolicy` must be called.
        typeof options.nextFetchPolicy === "function")) {
          this.applyNextFetchPolicy("variables-changed", options);
          if (newNetworkStatus === void 0) {
            newNetworkStatus = NetworkStatus.setVariables;
          }
        }
      }
      this.waitForOwnResult && (this.waitForOwnResult = skipCacheDataFor(options.fetchPolicy));
      var finishWaitingForOwnResult = function() {
        if (_this.concast === concast) {
          _this.waitForOwnResult = false;
        }
      };
      var variables = options.variables && __assign({}, options.variables);
      var _a2 = this.fetch(options, newNetworkStatus, query), concast = _a2.concast, fromLink = _a2.fromLink;
      var observer = {
        next: function(result2) {
          if (equal(_this.variables, variables)) {
            finishWaitingForOwnResult();
            _this.reportResult(result2, variables);
          }
        },
        error: function(error) {
          if (equal(_this.variables, variables)) {
            if (!isApolloError(error)) {
              error = new ApolloError({
                networkError: error
              });
            }
            finishWaitingForOwnResult();
            _this.reportError(error, variables);
          }
        }
      };
      if (!useDisposableConcast && (fromLink || !this.concast)) {
        if (this.concast && this.observer) {
          this.concast.removeObserver(this.observer);
        }
        this.concast = concast;
        this.observer = observer;
      }
      concast.addObserver(observer);
      return concast;
    };
    ObservableQuery2.prototype.reobserve = function(newOptions, newNetworkStatus) {
      return preventUnhandledRejection(this.reobserveAsConcast(newOptions, newNetworkStatus).promise.then(this.maskResult));
    };
    ObservableQuery2.prototype.resubscribeAfterError = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var last = this.last;
      this.resetLastResults();
      var subscription = this.subscribe.apply(this, args);
      this.last = last;
      return subscription;
    };
    ObservableQuery2.prototype.observe = function() {
      this.reportResult(
        // Passing false is important so that this.getCurrentResult doesn't
        // save the fetchMore result as this.lastResult, causing it to be
        // ignored due to the this.isDifferentFromLastResult check in
        // this.reportResult.
        this.getCurrentFullResult(false),
        this.variables
      );
    };
    ObservableQuery2.prototype.reportResult = function(result2, variables) {
      var lastError = this.getLastError();
      var isDifferent = this.isDifferentFromLastResult(result2, variables);
      if (lastError || !result2.partial || this.options.returnPartialData) {
        this.updateLastResult(result2, variables);
      }
      if (lastError || isDifferent) {
        iterateObserversSafely(this.observers, "next", this.maskResult(result2));
      }
    };
    ObservableQuery2.prototype.reportError = function(error, variables) {
      var errorResult = __assign(__assign({}, this.getLastResult()), {
        error,
        errors: error.graphQLErrors,
        networkStatus: NetworkStatus.error,
        loading: false
      });
      this.updateLastResult(errorResult, variables);
      iterateObserversSafely(this.observers, "error", this.last.error = error);
    };
    ObservableQuery2.prototype.hasObservers = function() {
      return this.observers.size > 0;
    };
    ObservableQuery2.prototype.tearDownQuery = function() {
      if (this.isTornDown) return;
      if (this.concast && this.observer) {
        this.concast.removeObserver(this.observer);
        delete this.concast;
        delete this.observer;
      }
      this.stopPolling();
      this.subscriptions.forEach(function(sub) {
        return sub.unsubscribe();
      });
      this.subscriptions.clear();
      this.queryManager.stopQuery(this.queryId);
      this.observers.clear();
      this.isTornDown = true;
    };
    ObservableQuery2.prototype.transformDocument = function(document) {
      return this.queryManager.transform(document);
    };
    ObservableQuery2.prototype.maskResult = function(result2) {
      return result2 && "data" in result2 ? __assign(__assign({}, result2), {
        data: this.queryManager.maskOperation({
          document: this.query,
          data: result2.data,
          fetchPolicy: this.options.fetchPolicy,
          id: this.queryId
        })
      }) : result2;
    };
    return ObservableQuery2;
  }(Observable2)
);
fixObservableSubclass(ObservableQuery);
function reobserveCacheFirst(obsQuery) {
  var _a2 = obsQuery.options, fetchPolicy = _a2.fetchPolicy, nextFetchPolicy = _a2.nextFetchPolicy;
  if (fetchPolicy === "cache-and-network" || fetchPolicy === "network-only") {
    return obsQuery.reobserve({
      fetchPolicy: "cache-first",
      // Use a temporary nextFetchPolicy function that replaces itself with the
      // previous nextFetchPolicy value and returns the original fetchPolicy.
      nextFetchPolicy: function(currentFetchPolicy, context) {
        this.nextFetchPolicy = nextFetchPolicy;
        if (typeof this.nextFetchPolicy === "function") {
          return this.nextFetchPolicy(currentFetchPolicy, context);
        }
        return fetchPolicy;
      }
    });
  }
  return obsQuery.reobserve();
}
function defaultSubscriptionObserverErrorCallback(error) {
  globalThis.__DEV__ !== false && invariant2.error(25, error.message, error.stack);
}
function logMissingFieldErrors(missing) {
  if (globalThis.__DEV__ !== false && missing) {
    globalThis.__DEV__ !== false && invariant2.debug(26, missing);
  }
}
function skipCacheDataFor(fetchPolicy) {
  return fetchPolicy === "network-only" || fetchPolicy === "no-cache" || fetchPolicy === "standby";
}

// node_modules/@apollo/client/core/QueryInfo.js
var destructiveMethodCounts = new (canUseWeakMap ? WeakMap : Map)();
function wrapDestructiveCacheMethod(cache, methodName) {
  var original = cache[methodName];
  if (typeof original === "function") {
    cache[methodName] = function() {
      destructiveMethodCounts.set(
        cache,
        // The %1e15 allows the count to wrap around to 0 safely every
        // quadrillion evictions, so there's no risk of overflow. To be
        // clear, this is more of a pedantic principle than something
        // that matters in any conceivable practical scenario.
        (destructiveMethodCounts.get(cache) + 1) % 1e15
      );
      return original.apply(this, arguments);
    };
  }
}
function cancelNotifyTimeout(info) {
  if (info["notifyTimeout"]) {
    clearTimeout(info["notifyTimeout"]);
    info["notifyTimeout"] = void 0;
  }
}
var QueryInfo = (
  /** @class */
  function() {
    function QueryInfo2(queryManager, queryId) {
      if (queryId === void 0) {
        queryId = queryManager.generateQueryId();
      }
      this.queryId = queryId;
      this.listeners = /* @__PURE__ */ new Set();
      this.document = null;
      this.lastRequestId = 1;
      this.stopped = false;
      this.dirty = false;
      this.observableQuery = null;
      var cache = this.cache = queryManager.cache;
      if (!destructiveMethodCounts.has(cache)) {
        destructiveMethodCounts.set(cache, 0);
        wrapDestructiveCacheMethod(cache, "evict");
        wrapDestructiveCacheMethod(cache, "modify");
        wrapDestructiveCacheMethod(cache, "reset");
      }
    }
    QueryInfo2.prototype.init = function(query) {
      var networkStatus = query.networkStatus || NetworkStatus.loading;
      if (this.variables && this.networkStatus !== NetworkStatus.loading && !equal(this.variables, query.variables)) {
        networkStatus = NetworkStatus.setVariables;
      }
      if (!equal(query.variables, this.variables)) {
        this.lastDiff = void 0;
        this.cancel();
      }
      Object.assign(this, {
        document: query.document,
        variables: query.variables,
        networkError: null,
        graphQLErrors: this.graphQLErrors || [],
        networkStatus
      });
      if (query.observableQuery) {
        this.setObservableQuery(query.observableQuery);
      }
      if (query.lastRequestId) {
        this.lastRequestId = query.lastRequestId;
      }
      return this;
    };
    QueryInfo2.prototype.reset = function() {
      cancelNotifyTimeout(this);
      this.dirty = false;
    };
    QueryInfo2.prototype.resetDiff = function() {
      this.lastDiff = void 0;
    };
    QueryInfo2.prototype.getDiff = function() {
      var options = this.getDiffOptions();
      if (this.lastDiff && equal(options, this.lastDiff.options)) {
        return this.lastDiff.diff;
      }
      this.updateWatch(this.variables);
      var oq = this.observableQuery;
      if (oq && oq.options.fetchPolicy === "no-cache") {
        return {
          complete: false
        };
      }
      var diff = this.cache.diff(options);
      this.updateLastDiff(diff, options);
      return diff;
    };
    QueryInfo2.prototype.updateLastDiff = function(diff, options) {
      this.lastDiff = diff ? {
        diff,
        options: options || this.getDiffOptions()
      } : void 0;
    };
    QueryInfo2.prototype.getDiffOptions = function(variables) {
      var _a2;
      if (variables === void 0) {
        variables = this.variables;
      }
      return {
        query: this.document,
        variables,
        returnPartialData: true,
        optimistic: true,
        canonizeResults: (_a2 = this.observableQuery) === null || _a2 === void 0 ? void 0 : _a2.options.canonizeResults
      };
    };
    QueryInfo2.prototype.setDiff = function(diff) {
      var _this = this;
      var _a2;
      var oldDiff = this.lastDiff && this.lastDiff.diff;
      if (diff && !diff.complete && ((_a2 = this.observableQuery) === null || _a2 === void 0 ? void 0 : _a2.getLastError())) {
        return;
      }
      this.updateLastDiff(diff);
      if (!this.dirty && !equal(oldDiff && oldDiff.result, diff && diff.result)) {
        this.dirty = true;
        if (!this.notifyTimeout) {
          this.notifyTimeout = setTimeout(function() {
            return _this.notify();
          }, 0);
        }
      }
    };
    QueryInfo2.prototype.setObservableQuery = function(oq) {
      var _this = this;
      if (oq === this.observableQuery) return;
      if (this.oqListener) {
        this.listeners.delete(this.oqListener);
      }
      this.observableQuery = oq;
      if (oq) {
        oq["queryInfo"] = this;
        this.listeners.add(this.oqListener = function() {
          var diff = _this.getDiff();
          if (diff.fromOptimisticTransaction) {
            oq["observe"]();
          } else {
            reobserveCacheFirst(oq);
          }
        });
      } else {
        delete this.oqListener;
      }
    };
    QueryInfo2.prototype.notify = function() {
      var _this = this;
      cancelNotifyTimeout(this);
      if (this.shouldNotify()) {
        this.listeners.forEach(function(listener) {
          return listener(_this);
        });
      }
      this.dirty = false;
    };
    QueryInfo2.prototype.shouldNotify = function() {
      if (!this.dirty || !this.listeners.size) {
        return false;
      }
      if (isNetworkRequestInFlight(this.networkStatus) && this.observableQuery) {
        var fetchPolicy = this.observableQuery.options.fetchPolicy;
        if (fetchPolicy !== "cache-only" && fetchPolicy !== "cache-and-network") {
          return false;
        }
      }
      return true;
    };
    QueryInfo2.prototype.stop = function() {
      if (!this.stopped) {
        this.stopped = true;
        this.reset();
        this.cancel();
        var oq = this.observableQuery;
        if (oq) oq.stopPolling();
      }
    };
    QueryInfo2.prototype.cancel = function() {
      var _a2;
      (_a2 = this.cancelWatch) === null || _a2 === void 0 ? void 0 : _a2.call(this);
      this.cancelWatch = void 0;
    };
    QueryInfo2.prototype.updateWatch = function(variables) {
      var _this = this;
      if (variables === void 0) {
        variables = this.variables;
      }
      var oq = this.observableQuery;
      if (oq && oq.options.fetchPolicy === "no-cache") {
        return;
      }
      var watchOptions = __assign(__assign({}, this.getDiffOptions(variables)), {
        watcher: this,
        callback: function(diff) {
          return _this.setDiff(diff);
        }
      });
      if (!this.lastWatch || !equal(watchOptions, this.lastWatch)) {
        this.cancel();
        this.cancelWatch = this.cache.watch(this.lastWatch = watchOptions);
      }
    };
    QueryInfo2.prototype.resetLastWrite = function() {
      this.lastWrite = void 0;
    };
    QueryInfo2.prototype.shouldWrite = function(result2, variables) {
      var lastWrite = this.lastWrite;
      return !(lastWrite && // If cache.evict has been called since the last time we wrote this
      // data into the cache, there's a chance writing this result into
      // the cache will repair what was evicted.
      lastWrite.dmCount === destructiveMethodCounts.get(this.cache) && equal(variables, lastWrite.variables) && equal(result2.data, lastWrite.result.data));
    };
    QueryInfo2.prototype.markResult = function(result2, document, options, cacheWriteBehavior) {
      var _this = this;
      var merger = new DeepMerger();
      var graphQLErrors = isNonEmptyArray(result2.errors) ? result2.errors.slice(0) : [];
      this.reset();
      if ("incremental" in result2 && isNonEmptyArray(result2.incremental)) {
        var mergedData = mergeIncrementalData(this.getDiff().result, result2);
        result2.data = mergedData;
      } else if ("hasNext" in result2 && result2.hasNext) {
        var diff = this.getDiff();
        result2.data = merger.merge(diff.result, result2.data);
      }
      this.graphQLErrors = graphQLErrors;
      if (options.fetchPolicy === "no-cache") {
        this.updateLastDiff({
          result: result2.data,
          complete: true
        }, this.getDiffOptions(options.variables));
      } else if (cacheWriteBehavior !== 0) {
        if (shouldWriteResult(result2, options.errorPolicy)) {
          this.cache.performTransaction(function(cache) {
            if (_this.shouldWrite(result2, options.variables)) {
              cache.writeQuery({
                query: document,
                data: result2.data,
                variables: options.variables,
                overwrite: cacheWriteBehavior === 1
                /* CacheWriteBehavior.OVERWRITE */
              });
              _this.lastWrite = {
                result: result2,
                variables: options.variables,
                dmCount: destructiveMethodCounts.get(_this.cache)
              };
            } else {
              if (_this.lastDiff && _this.lastDiff.diff.complete) {
                result2.data = _this.lastDiff.diff.result;
                return;
              }
            }
            var diffOptions = _this.getDiffOptions(options.variables);
            var diff2 = cache.diff(diffOptions);
            if (!_this.stopped && equal(_this.variables, options.variables)) {
              _this.updateWatch(options.variables);
            }
            _this.updateLastDiff(diff2, diffOptions);
            if (diff2.complete) {
              result2.data = diff2.result;
            }
          });
        } else {
          this.lastWrite = void 0;
        }
      }
    };
    QueryInfo2.prototype.markReady = function() {
      this.networkError = null;
      return this.networkStatus = NetworkStatus.ready;
    };
    QueryInfo2.prototype.markError = function(error) {
      this.networkStatus = NetworkStatus.error;
      this.lastWrite = void 0;
      this.reset();
      if (error.graphQLErrors) {
        this.graphQLErrors = error.graphQLErrors;
      }
      if (error.networkError) {
        this.networkError = error.networkError;
      }
      return error;
    };
    return QueryInfo2;
  }()
);
function shouldWriteResult(result2, errorPolicy) {
  if (errorPolicy === void 0) {
    errorPolicy = "none";
  }
  var ignoreErrors = errorPolicy === "ignore" || errorPolicy === "all";
  var writeWithErrors = !graphQLResultHasError(result2);
  if (!writeWithErrors && ignoreErrors && result2.data) {
    writeWithErrors = true;
  }
  return writeWithErrors;
}

// node_modules/@apollo/client/core/QueryManager.js
var hasOwnProperty7 = Object.prototype.hasOwnProperty;
var IGNORE = /* @__PURE__ */ Object.create(null);
var QueryManager = (
  /** @class */
  function() {
    function QueryManager2(options) {
      var _this = this;
      this.clientAwareness = {};
      this.queries = /* @__PURE__ */ new Map();
      this.fetchCancelFns = /* @__PURE__ */ new Map();
      this.transformCache = new AutoCleanedWeakCache(
        cacheSizes["queryManager.getDocumentInfo"] || 2e3
        /* defaultCacheSizes["queryManager.getDocumentInfo"] */
      );
      this.queryIdCounter = 1;
      this.requestIdCounter = 1;
      this.mutationIdCounter = 1;
      this.inFlightLinkObservables = new Trie(false);
      this.noCacheWarningsByQueryId = /* @__PURE__ */ new Set();
      var defaultDocumentTransform = new DocumentTransform(
        function(document) {
          return _this.cache.transformDocument(document);
        },
        // Allow the apollo cache to manage its own transform caches
        {
          cache: false
        }
      );
      this.cache = options.cache;
      this.link = options.link;
      this.defaultOptions = options.defaultOptions;
      this.queryDeduplication = options.queryDeduplication;
      this.clientAwareness = options.clientAwareness;
      this.localState = options.localState;
      this.ssrMode = options.ssrMode;
      this.assumeImmutableResults = options.assumeImmutableResults;
      this.dataMasking = options.dataMasking;
      var documentTransform = options.documentTransform;
      this.documentTransform = documentTransform ? defaultDocumentTransform.concat(documentTransform).concat(defaultDocumentTransform) : defaultDocumentTransform;
      this.defaultContext = options.defaultContext || /* @__PURE__ */ Object.create(null);
      if (this.onBroadcast = options.onBroadcast) {
        this.mutationStore = /* @__PURE__ */ Object.create(null);
      }
    }
    QueryManager2.prototype.stop = function() {
      var _this = this;
      this.queries.forEach(function(_info, queryId) {
        _this.stopQueryNoBroadcast(queryId);
      });
      this.cancelPendingFetches(newInvariantError(27));
    };
    QueryManager2.prototype.cancelPendingFetches = function(error) {
      this.fetchCancelFns.forEach(function(cancel) {
        return cancel(error);
      });
      this.fetchCancelFns.clear();
    };
    QueryManager2.prototype.mutate = function(_a2) {
      return __awaiter(this, arguments, void 0, function(_b) {
        var mutationId, hasClientExports2, mutationStoreValue, isOptimistic, self2;
        var _c, _d;
        var mutation = _b.mutation, variables = _b.variables, optimisticResponse = _b.optimisticResponse, updateQueries = _b.updateQueries, _e = _b.refetchQueries, refetchQueries = _e === void 0 ? [] : _e, _f = _b.awaitRefetchQueries, awaitRefetchQueries = _f === void 0 ? false : _f, updateWithProxyFn = _b.update, onQueryUpdated = _b.onQueryUpdated, _g = _b.fetchPolicy, fetchPolicy = _g === void 0 ? ((_c = this.defaultOptions.mutate) === null || _c === void 0 ? void 0 : _c.fetchPolicy) || "network-only" : _g, _h = _b.errorPolicy, errorPolicy = _h === void 0 ? ((_d = this.defaultOptions.mutate) === null || _d === void 0 ? void 0 : _d.errorPolicy) || "none" : _h, keepRootFields = _b.keepRootFields, context = _b.context;
        return __generator(this, function(_j) {
          switch (_j.label) {
            case 0:
              invariant2(mutation, 28);
              invariant2(fetchPolicy === "network-only" || fetchPolicy === "no-cache", 29);
              mutationId = this.generateMutationId();
              mutation = this.cache.transformForLink(this.transform(mutation));
              hasClientExports2 = this.getDocumentInfo(mutation).hasClientExports;
              variables = this.getVariables(mutation, variables);
              if (!hasClientExports2) return [3, 2];
              return [4, this.localState.addExportedVariables(mutation, variables, context)];
            case 1:
              variables = _j.sent();
              _j.label = 2;
            case 2:
              mutationStoreValue = this.mutationStore && (this.mutationStore[mutationId] = {
                mutation,
                variables,
                loading: true,
                error: null
              });
              isOptimistic = optimisticResponse && this.markMutationOptimistic(optimisticResponse, {
                mutationId,
                document: mutation,
                variables,
                fetchPolicy,
                errorPolicy,
                context,
                updateQueries,
                update: updateWithProxyFn,
                keepRootFields
              });
              this.broadcastQueries();
              self2 = this;
              return [2, new Promise(function(resolve, reject) {
                return asyncMap(self2.getObservableFromLink(mutation, __assign(__assign({}, context), {
                  optimisticResponse: isOptimistic ? optimisticResponse : void 0
                }), variables, {}, false), function(result2) {
                  if (graphQLResultHasError(result2) && errorPolicy === "none") {
                    throw new ApolloError({
                      graphQLErrors: getGraphQLErrorsFromResult(result2)
                    });
                  }
                  if (mutationStoreValue) {
                    mutationStoreValue.loading = false;
                    mutationStoreValue.error = null;
                  }
                  var storeResult = __assign({}, result2);
                  if (typeof refetchQueries === "function") {
                    refetchQueries = refetchQueries(storeResult);
                  }
                  if (errorPolicy === "ignore" && graphQLResultHasError(storeResult)) {
                    delete storeResult.errors;
                  }
                  return self2.markMutationResult({
                    mutationId,
                    result: storeResult,
                    document: mutation,
                    variables,
                    fetchPolicy,
                    errorPolicy,
                    context,
                    update: updateWithProxyFn,
                    updateQueries,
                    awaitRefetchQueries,
                    refetchQueries,
                    removeOptimistic: isOptimistic ? mutationId : void 0,
                    onQueryUpdated,
                    keepRootFields
                  });
                }).subscribe({
                  next: function(storeResult) {
                    self2.broadcastQueries();
                    if (!("hasNext" in storeResult) || storeResult.hasNext === false) {
                      resolve(__assign(__assign({}, storeResult), {
                        data: self2.maskOperation({
                          document: mutation,
                          data: storeResult.data,
                          fetchPolicy,
                          id: mutationId
                        })
                      }));
                    }
                  },
                  error: function(err) {
                    if (mutationStoreValue) {
                      mutationStoreValue.loading = false;
                      mutationStoreValue.error = err;
                    }
                    if (isOptimistic) {
                      self2.cache.removeOptimistic(mutationId);
                    }
                    self2.broadcastQueries();
                    reject(err instanceof ApolloError ? err : new ApolloError({
                      networkError: err
                    }));
                  }
                });
              })];
          }
        });
      });
    };
    QueryManager2.prototype.markMutationResult = function(mutation, cache) {
      var _this = this;
      if (cache === void 0) {
        cache = this.cache;
      }
      var result2 = mutation.result;
      var cacheWrites = [];
      var skipCache = mutation.fetchPolicy === "no-cache";
      if (!skipCache && shouldWriteResult(result2, mutation.errorPolicy)) {
        if (!isExecutionPatchIncrementalResult(result2)) {
          cacheWrites.push({
            result: result2.data,
            dataId: "ROOT_MUTATION",
            query: mutation.document,
            variables: mutation.variables
          });
        }
        if (isExecutionPatchIncrementalResult(result2) && isNonEmptyArray(result2.incremental)) {
          var diff = cache.diff({
            id: "ROOT_MUTATION",
            // The cache complains if passed a mutation where it expects a
            // query, so we transform mutations and subscriptions to queries
            // (only once, thanks to this.transformCache).
            query: this.getDocumentInfo(mutation.document).asQuery,
            variables: mutation.variables,
            optimistic: false,
            returnPartialData: true
          });
          var mergedData = void 0;
          if (diff.result) {
            mergedData = mergeIncrementalData(diff.result, result2);
          }
          if (typeof mergedData !== "undefined") {
            result2.data = mergedData;
            cacheWrites.push({
              result: mergedData,
              dataId: "ROOT_MUTATION",
              query: mutation.document,
              variables: mutation.variables
            });
          }
        }
        var updateQueries_1 = mutation.updateQueries;
        if (updateQueries_1) {
          this.queries.forEach(function(_a2, queryId) {
            var observableQuery = _a2.observableQuery;
            var queryName = observableQuery && observableQuery.queryName;
            if (!queryName || !hasOwnProperty7.call(updateQueries_1, queryName)) {
              return;
            }
            var updater = updateQueries_1[queryName];
            var _b = _this.queries.get(queryId), document = _b.document, variables = _b.variables;
            var _c = cache.diff({
              query: document,
              variables,
              returnPartialData: true,
              optimistic: false
            }), currentQueryResult = _c.result, complete = _c.complete;
            if (complete && currentQueryResult) {
              var nextQueryResult = updater(currentQueryResult, {
                mutationResult: result2,
                queryName: document && getOperationName(document) || void 0,
                queryVariables: variables
              });
              if (nextQueryResult) {
                cacheWrites.push({
                  result: nextQueryResult,
                  dataId: "ROOT_QUERY",
                  query: document,
                  variables
                });
              }
            }
          });
        }
      }
      if (cacheWrites.length > 0 || (mutation.refetchQueries || "").length > 0 || mutation.update || mutation.onQueryUpdated || mutation.removeOptimistic) {
        var results_1 = [];
        this.refetchQueries({
          updateCache: function(cache2) {
            if (!skipCache) {
              cacheWrites.forEach(function(write) {
                return cache2.write(write);
              });
            }
            var update = mutation.update;
            var isFinalResult = !isExecutionPatchResult(result2) || isExecutionPatchIncrementalResult(result2) && !result2.hasNext;
            if (update) {
              if (!skipCache) {
                var diff2 = cache2.diff({
                  id: "ROOT_MUTATION",
                  // The cache complains if passed a mutation where it expects a
                  // query, so we transform mutations and subscriptions to queries
                  // (only once, thanks to this.transformCache).
                  query: _this.getDocumentInfo(mutation.document).asQuery,
                  variables: mutation.variables,
                  optimistic: false,
                  returnPartialData: true
                });
                if (diff2.complete) {
                  result2 = __assign(__assign({}, result2), {
                    data: diff2.result
                  });
                  if ("incremental" in result2) {
                    delete result2.incremental;
                  }
                  if ("hasNext" in result2) {
                    delete result2.hasNext;
                  }
                }
              }
              if (isFinalResult) {
                update(cache2, result2, {
                  context: mutation.context,
                  variables: mutation.variables
                });
              }
            }
            if (!skipCache && !mutation.keepRootFields && isFinalResult) {
              cache2.modify({
                id: "ROOT_MUTATION",
                fields: function(value, _a2) {
                  var fieldName = _a2.fieldName, DELETE2 = _a2.DELETE;
                  return fieldName === "__typename" ? value : DELETE2;
                }
              });
            }
          },
          include: mutation.refetchQueries,
          // Write the final mutation.result to the root layer of the cache.
          optimistic: false,
          // Remove the corresponding optimistic layer at the same time as we
          // write the final non-optimistic result.
          removeOptimistic: mutation.removeOptimistic,
          // Let the caller of client.mutate optionally determine the refetching
          // behavior for watched queries after the mutation.update function runs.
          // If no onQueryUpdated function was provided for this mutation, pass
          // null instead of undefined to disable the default refetching behavior.
          onQueryUpdated: mutation.onQueryUpdated || null
        }).forEach(function(result3) {
          return results_1.push(result3);
        });
        if (mutation.awaitRefetchQueries || mutation.onQueryUpdated) {
          return Promise.all(results_1).then(function() {
            return result2;
          });
        }
      }
      return Promise.resolve(result2);
    };
    QueryManager2.prototype.markMutationOptimistic = function(optimisticResponse, mutation) {
      var _this = this;
      var data = typeof optimisticResponse === "function" ? optimisticResponse(mutation.variables, {
        IGNORE
      }) : optimisticResponse;
      if (data === IGNORE) {
        return false;
      }
      this.cache.recordOptimisticTransaction(function(cache) {
        try {
          _this.markMutationResult(__assign(__assign({}, mutation), {
            result: {
              data
            }
          }), cache);
        } catch (error) {
          globalThis.__DEV__ !== false && invariant2.error(error);
        }
      }, mutation.mutationId);
      return true;
    };
    QueryManager2.prototype.fetchQuery = function(queryId, options, networkStatus) {
      return this.fetchConcastWithInfo(queryId, options, networkStatus).concast.promise;
    };
    QueryManager2.prototype.getQueryStore = function() {
      var store = /* @__PURE__ */ Object.create(null);
      this.queries.forEach(function(info, queryId) {
        store[queryId] = {
          variables: info.variables,
          networkStatus: info.networkStatus,
          networkError: info.networkError,
          graphQLErrors: info.graphQLErrors
        };
      });
      return store;
    };
    QueryManager2.prototype.resetErrors = function(queryId) {
      var queryInfo = this.queries.get(queryId);
      if (queryInfo) {
        queryInfo.networkError = void 0;
        queryInfo.graphQLErrors = [];
      }
    };
    QueryManager2.prototype.transform = function(document) {
      return this.documentTransform.transformDocument(document);
    };
    QueryManager2.prototype.getDocumentInfo = function(document) {
      var transformCache = this.transformCache;
      if (!transformCache.has(document)) {
        var cacheEntry = {
          // TODO These three calls (hasClientExports, shouldForceResolvers, and
          // usesNonreactiveDirective) are performing independent full traversals
          // of the transformed document. We should consider merging these
          // traversals into a single pass in the future, though the work is
          // cached after the first time.
          hasClientExports: hasClientExports(document),
          hasForcedResolvers: this.localState.shouldForceResolvers(document),
          hasNonreactiveDirective: hasDirectives(["nonreactive"], document),
          nonReactiveQuery: addNonReactiveToNamedFragments(document),
          clientQuery: this.localState.clientQuery(document),
          serverQuery: removeDirectivesFromDocument([{
            name: "client",
            remove: true
          }, {
            name: "connection"
          }, {
            name: "nonreactive"
          }, {
            name: "unmask"
          }], document),
          defaultVars: getDefaultValues(getOperationDefinition(document)),
          // Transform any mutation or subscription operations to query operations
          // so we can read/write them from/to the cache.
          asQuery: __assign(__assign({}, document), {
            definitions: document.definitions.map(function(def) {
              if (def.kind === "OperationDefinition" && def.operation !== "query") {
                return __assign(__assign({}, def), {
                  operation: "query"
                });
              }
              return def;
            })
          })
        };
        transformCache.set(document, cacheEntry);
      }
      return transformCache.get(document);
    };
    QueryManager2.prototype.getVariables = function(document, variables) {
      return __assign(__assign({}, this.getDocumentInfo(document).defaultVars), variables);
    };
    QueryManager2.prototype.watchQuery = function(options) {
      var query = this.transform(options.query);
      options = __assign(__assign({}, options), {
        variables: this.getVariables(query, options.variables)
      });
      if (typeof options.notifyOnNetworkStatusChange === "undefined") {
        options.notifyOnNetworkStatusChange = false;
      }
      var queryInfo = new QueryInfo(this);
      var observable2 = new ObservableQuery({
        queryManager: this,
        queryInfo,
        options
      });
      observable2["lastQuery"] = query;
      this.queries.set(observable2.queryId, queryInfo);
      queryInfo.init({
        document: query,
        observableQuery: observable2,
        variables: observable2.variables
      });
      return observable2;
    };
    QueryManager2.prototype.query = function(options, queryId) {
      var _this = this;
      if (queryId === void 0) {
        queryId = this.generateQueryId();
      }
      invariant2(options.query, 30);
      invariant2(options.query.kind === "Document", 31);
      invariant2(!options.returnPartialData, 32);
      invariant2(!options.pollInterval, 33);
      var query = this.transform(options.query);
      return this.fetchQuery(queryId, __assign(__assign({}, options), {
        query
      })).then(function(result2) {
        return result2 && __assign(__assign({}, result2), {
          data: _this.maskOperation({
            document: query,
            data: result2.data,
            fetchPolicy: options.fetchPolicy,
            id: queryId
          })
        });
      }).finally(function() {
        return _this.stopQuery(queryId);
      });
    };
    QueryManager2.prototype.generateQueryId = function() {
      return String(this.queryIdCounter++);
    };
    QueryManager2.prototype.generateRequestId = function() {
      return this.requestIdCounter++;
    };
    QueryManager2.prototype.generateMutationId = function() {
      return String(this.mutationIdCounter++);
    };
    QueryManager2.prototype.stopQueryInStore = function(queryId) {
      this.stopQueryInStoreNoBroadcast(queryId);
      this.broadcastQueries();
    };
    QueryManager2.prototype.stopQueryInStoreNoBroadcast = function(queryId) {
      var queryInfo = this.queries.get(queryId);
      if (queryInfo) queryInfo.stop();
    };
    QueryManager2.prototype.clearStore = function(options) {
      if (options === void 0) {
        options = {
          discardWatches: true
        };
      }
      this.cancelPendingFetches(newInvariantError(34));
      this.queries.forEach(function(queryInfo) {
        if (queryInfo.observableQuery) {
          queryInfo.networkStatus = NetworkStatus.loading;
        } else {
          queryInfo.stop();
        }
      });
      if (this.mutationStore) {
        this.mutationStore = /* @__PURE__ */ Object.create(null);
      }
      return this.cache.reset(options);
    };
    QueryManager2.prototype.getObservableQueries = function(include) {
      var _this = this;
      if (include === void 0) {
        include = "active";
      }
      var queries = /* @__PURE__ */ new Map();
      var queryNames = /* @__PURE__ */ new Map();
      var queryNamesAndQueryStrings = /* @__PURE__ */ new Map();
      var legacyQueryOptions = /* @__PURE__ */ new Set();
      if (Array.isArray(include)) {
        include.forEach(function(desc) {
          if (typeof desc === "string") {
            queryNames.set(desc, desc);
            queryNamesAndQueryStrings.set(desc, false);
          } else if (isDocumentNode(desc)) {
            var queryString = print2(_this.transform(desc));
            queryNames.set(queryString, getOperationName(desc));
            queryNamesAndQueryStrings.set(queryString, false);
          } else if (isNonNullObject(desc) && desc.query) {
            legacyQueryOptions.add(desc);
          }
        });
      }
      this.queries.forEach(function(_a2, queryId) {
        var oq = _a2.observableQuery, document = _a2.document;
        if (oq) {
          if (include === "all") {
            queries.set(queryId, oq);
            return;
          }
          var queryName = oq.queryName, fetchPolicy = oq.options.fetchPolicy;
          if (fetchPolicy === "standby" || include === "active" && !oq.hasObservers()) {
            return;
          }
          if (include === "active" || queryName && queryNamesAndQueryStrings.has(queryName) || document && queryNamesAndQueryStrings.has(print2(document))) {
            queries.set(queryId, oq);
            if (queryName) queryNamesAndQueryStrings.set(queryName, true);
            if (document) queryNamesAndQueryStrings.set(print2(document), true);
          }
        }
      });
      if (legacyQueryOptions.size) {
        legacyQueryOptions.forEach(function(options) {
          var queryId = makeUniqueId("legacyOneTimeQuery");
          var queryInfo = _this.getQuery(queryId).init({
            document: options.query,
            variables: options.variables
          });
          var oq = new ObservableQuery({
            queryManager: _this,
            queryInfo,
            options: __assign(__assign({}, options), {
              fetchPolicy: "network-only"
            })
          });
          invariant2(oq.queryId === queryId);
          queryInfo.setObservableQuery(oq);
          queries.set(queryId, oq);
        });
      }
      if (globalThis.__DEV__ !== false && queryNamesAndQueryStrings.size) {
        queryNamesAndQueryStrings.forEach(function(included, nameOrQueryString) {
          if (!included) {
            var queryName = queryNames.get(nameOrQueryString);
            if (queryName) {
              globalThis.__DEV__ !== false && invariant2.warn(35, queryName);
            } else {
              globalThis.__DEV__ !== false && invariant2.warn(36);
            }
          }
        });
      }
      return queries;
    };
    QueryManager2.prototype.reFetchObservableQueries = function(includeStandby) {
      var _this = this;
      if (includeStandby === void 0) {
        includeStandby = false;
      }
      var observableQueryPromises = [];
      this.getObservableQueries(includeStandby ? "all" : "active").forEach(function(observableQuery, queryId) {
        var fetchPolicy = observableQuery.options.fetchPolicy;
        observableQuery.resetLastResults();
        if (includeStandby || fetchPolicy !== "standby" && fetchPolicy !== "cache-only") {
          observableQueryPromises.push(observableQuery.refetch());
        }
        _this.getQuery(queryId).setDiff(null);
      });
      this.broadcastQueries();
      return Promise.all(observableQueryPromises);
    };
    QueryManager2.prototype.setObservableQuery = function(observableQuery) {
      this.getQuery(observableQuery.queryId).setObservableQuery(observableQuery);
    };
    QueryManager2.prototype.startGraphQLSubscription = function(options) {
      var _this = this;
      var query = options.query, variables = options.variables;
      var fetchPolicy = options.fetchPolicy, _a2 = options.errorPolicy, errorPolicy = _a2 === void 0 ? "none" : _a2, _b = options.context, context = _b === void 0 ? {} : _b, _c = options.extensions, extensions = _c === void 0 ? {} : _c;
      query = this.transform(query);
      variables = this.getVariables(query, variables);
      var makeObservable = function(variables2) {
        return _this.getObservableFromLink(query, context, variables2, extensions).map(function(result2) {
          if (fetchPolicy !== "no-cache") {
            if (shouldWriteResult(result2, errorPolicy)) {
              _this.cache.write({
                query,
                result: result2.data,
                dataId: "ROOT_SUBSCRIPTION",
                variables: variables2
              });
            }
            _this.broadcastQueries();
          }
          var hasErrors = graphQLResultHasError(result2);
          var hasProtocolErrors = graphQLResultHasProtocolErrors(result2);
          if (hasErrors || hasProtocolErrors) {
            var errors = {};
            if (hasErrors) {
              errors.graphQLErrors = result2.errors;
            }
            if (hasProtocolErrors) {
              errors.protocolErrors = result2.extensions[PROTOCOL_ERRORS_SYMBOL];
            }
            if (errorPolicy === "none" || hasProtocolErrors) {
              throw new ApolloError(errors);
            }
          }
          if (errorPolicy === "ignore") {
            delete result2.errors;
          }
          return result2;
        });
      };
      if (this.getDocumentInfo(query).hasClientExports) {
        var observablePromise_1 = this.localState.addExportedVariables(query, variables, context).then(makeObservable);
        return new Observable2(function(observer) {
          var sub = null;
          observablePromise_1.then(function(observable2) {
            return sub = observable2.subscribe(observer);
          }, observer.error);
          return function() {
            return sub && sub.unsubscribe();
          };
        });
      }
      return makeObservable(variables);
    };
    QueryManager2.prototype.stopQuery = function(queryId) {
      this.stopQueryNoBroadcast(queryId);
      this.broadcastQueries();
    };
    QueryManager2.prototype.stopQueryNoBroadcast = function(queryId) {
      this.stopQueryInStoreNoBroadcast(queryId);
      this.removeQuery(queryId);
    };
    QueryManager2.prototype.removeQuery = function(queryId) {
      this.fetchCancelFns.delete(queryId);
      if (this.queries.has(queryId)) {
        this.getQuery(queryId).stop();
        this.queries.delete(queryId);
      }
    };
    QueryManager2.prototype.broadcastQueries = function() {
      if (this.onBroadcast) this.onBroadcast();
      this.queries.forEach(function(info) {
        return info.notify();
      });
    };
    QueryManager2.prototype.getLocalState = function() {
      return this.localState;
    };
    QueryManager2.prototype.getObservableFromLink = function(query, context, variables, extensions, deduplication) {
      var _this = this;
      var _a2;
      if (deduplication === void 0) {
        deduplication = (_a2 = context === null || context === void 0 ? void 0 : context.queryDeduplication) !== null && _a2 !== void 0 ? _a2 : this.queryDeduplication;
      }
      var observable2;
      var _b = this.getDocumentInfo(query), serverQuery = _b.serverQuery, clientQuery = _b.clientQuery;
      if (serverQuery) {
        var _c = this, inFlightLinkObservables_1 = _c.inFlightLinkObservables, link = _c.link;
        var operation = {
          query: serverQuery,
          variables,
          operationName: getOperationName(serverQuery) || void 0,
          context: this.prepareContext(__assign(__assign({}, context), {
            forceFetch: !deduplication
          })),
          extensions
        };
        context = operation.context;
        if (deduplication) {
          var printedServerQuery_1 = print2(serverQuery);
          var varJson_1 = canonicalStringify(variables);
          var entry = inFlightLinkObservables_1.lookup(printedServerQuery_1, varJson_1);
          observable2 = entry.observable;
          if (!observable2) {
            var concast_1 = new Concast([execute(link, operation)]);
            observable2 = entry.observable = concast_1;
            concast_1.beforeNext(function cb(method, arg) {
              if (method === "next" && "hasNext" in arg && arg.hasNext) {
                concast_1.beforeNext(cb);
              } else {
                inFlightLinkObservables_1.remove(printedServerQuery_1, varJson_1);
              }
            });
          }
        } else {
          observable2 = new Concast([execute(link, operation)]);
        }
      } else {
        observable2 = new Concast([Observable2.of({
          data: {}
        })]);
        context = this.prepareContext(context);
      }
      if (clientQuery) {
        observable2 = asyncMap(observable2, function(result2) {
          return _this.localState.runResolvers({
            document: clientQuery,
            remoteResult: result2,
            context,
            variables
          });
        });
      }
      return observable2;
    };
    QueryManager2.prototype.getResultsFromLink = function(queryInfo, cacheWriteBehavior, options) {
      var requestId = queryInfo.lastRequestId = this.generateRequestId();
      var linkDocument = this.cache.transformForLink(options.query);
      return asyncMap(this.getObservableFromLink(linkDocument, options.context, options.variables), function(result2) {
        var graphQLErrors = getGraphQLErrorsFromResult(result2);
        var hasErrors = graphQLErrors.length > 0;
        var errorPolicy = options.errorPolicy;
        if (requestId >= queryInfo.lastRequestId) {
          if (hasErrors && errorPolicy === "none") {
            throw queryInfo.markError(new ApolloError({
              graphQLErrors
            }));
          }
          queryInfo.markResult(result2, linkDocument, options, cacheWriteBehavior);
          queryInfo.markReady();
        }
        var aqr = {
          data: result2.data,
          loading: false,
          networkStatus: NetworkStatus.ready
        };
        if (hasErrors && errorPolicy === "none") {
          aqr.data = void 0;
        }
        if (hasErrors && errorPolicy !== "ignore") {
          aqr.errors = graphQLErrors;
          aqr.networkStatus = NetworkStatus.error;
        }
        return aqr;
      }, function(networkError) {
        var error = isApolloError(networkError) ? networkError : new ApolloError({
          networkError
        });
        if (requestId >= queryInfo.lastRequestId) {
          queryInfo.markError(error);
        }
        throw error;
      });
    };
    QueryManager2.prototype.fetchConcastWithInfo = function(queryId, options, networkStatus, query) {
      var _this = this;
      if (networkStatus === void 0) {
        networkStatus = NetworkStatus.loading;
      }
      if (query === void 0) {
        query = options.query;
      }
      var variables = this.getVariables(query, options.variables);
      var queryInfo = this.getQuery(queryId);
      var defaults = this.defaultOptions.watchQuery;
      var _a2 = options.fetchPolicy, fetchPolicy = _a2 === void 0 ? defaults && defaults.fetchPolicy || "cache-first" : _a2, _b = options.errorPolicy, errorPolicy = _b === void 0 ? defaults && defaults.errorPolicy || "none" : _b, _c = options.returnPartialData, returnPartialData = _c === void 0 ? false : _c, _d = options.notifyOnNetworkStatusChange, notifyOnNetworkStatusChange = _d === void 0 ? false : _d, _e = options.context, context = _e === void 0 ? {} : _e;
      var normalized = Object.assign({}, options, {
        query,
        variables,
        fetchPolicy,
        errorPolicy,
        returnPartialData,
        notifyOnNetworkStatusChange,
        context
      });
      var fromVariables = function(variables2) {
        normalized.variables = variables2;
        var sourcesWithInfo2 = _this.fetchQueryByPolicy(queryInfo, normalized, networkStatus);
        if (
          // If we're in standby, postpone advancing options.fetchPolicy using
          // applyNextFetchPolicy.
          normalized.fetchPolicy !== "standby" && // The "standby" policy currently returns [] from fetchQueryByPolicy, so
          // this is another way to detect when nothing was done/fetched.
          sourcesWithInfo2.sources.length > 0 && queryInfo.observableQuery
        ) {
          queryInfo.observableQuery["applyNextFetchPolicy"]("after-fetch", options);
        }
        return sourcesWithInfo2;
      };
      var cleanupCancelFn = function() {
        return _this.fetchCancelFns.delete(queryId);
      };
      this.fetchCancelFns.set(queryId, function(reason) {
        cleanupCancelFn();
        setTimeout(function() {
          return concast.cancel(reason);
        });
      });
      var concast, containsDataFromLink;
      if (this.getDocumentInfo(normalized.query).hasClientExports) {
        concast = new Concast(this.localState.addExportedVariables(normalized.query, normalized.variables, normalized.context).then(fromVariables).then(function(sourcesWithInfo2) {
          return sourcesWithInfo2.sources;
        }));
        containsDataFromLink = true;
      } else {
        var sourcesWithInfo = fromVariables(normalized.variables);
        containsDataFromLink = sourcesWithInfo.fromLink;
        concast = new Concast(sourcesWithInfo.sources);
      }
      concast.promise.then(cleanupCancelFn, cleanupCancelFn);
      return {
        concast,
        fromLink: containsDataFromLink
      };
    };
    QueryManager2.prototype.refetchQueries = function(_a2) {
      var _this = this;
      var updateCache = _a2.updateCache, include = _a2.include, _b = _a2.optimistic, optimistic = _b === void 0 ? false : _b, _c = _a2.removeOptimistic, removeOptimistic = _c === void 0 ? optimistic ? makeUniqueId("refetchQueries") : void 0 : _c, onQueryUpdated = _a2.onQueryUpdated;
      var includedQueriesById = /* @__PURE__ */ new Map();
      if (include) {
        this.getObservableQueries(include).forEach(function(oq, queryId) {
          includedQueriesById.set(queryId, {
            oq,
            lastDiff: _this.getQuery(queryId).getDiff()
          });
        });
      }
      var results = /* @__PURE__ */ new Map();
      if (updateCache) {
        this.cache.batch({
          update: updateCache,
          // Since you can perform any combination of cache reads and/or writes in
          // the cache.batch update function, its optimistic option can be either
          // a boolean or a string, representing three distinct modes of
          // operation:
          //
          // * false: read/write only the root layer
          // * true: read/write the topmost layer
          // * string: read/write a fresh optimistic layer with that ID string
          //
          // When typeof optimistic === "string", a new optimistic layer will be
          // temporarily created within cache.batch with that string as its ID. If
          // we then pass that same string as the removeOptimistic option, we can
          // make cache.batch immediately remove the optimistic layer after
          // running the updateCache function, triggering only one broadcast.
          //
          // However, the refetchQueries method accepts only true or false for its
          // optimistic option (not string). We interpret true to mean a temporary
          // optimistic layer should be created, to allow efficiently rolling back
          // the effect of the updateCache function, which involves passing a
          // string instead of true as the optimistic option to cache.batch, when
          // refetchQueries receives optimistic: true.
          //
          // In other words, we are deliberately not supporting the use case of
          // writing to an *existing* optimistic layer (using the refetchQueries
          // updateCache function), since that would potentially interfere with
          // other optimistic updates in progress. Instead, you can read/write
          // only the root layer by passing optimistic: false to refetchQueries,
          // or you can read/write a brand new optimistic layer that will be
          // automatically removed by passing optimistic: true.
          optimistic: optimistic && removeOptimistic || false,
          // The removeOptimistic option can also be provided by itself, even if
          // optimistic === false, to remove some previously-added optimistic
          // layer safely and efficiently, like we do in markMutationResult.
          //
          // If an explicit removeOptimistic string is provided with optimistic:
          // true, the removeOptimistic string will determine the ID of the
          // temporary optimistic layer, in case that ever matters.
          removeOptimistic,
          onWatchUpdated: function(watch, diff, lastDiff) {
            var oq = watch.watcher instanceof QueryInfo && watch.watcher.observableQuery;
            if (oq) {
              if (onQueryUpdated) {
                includedQueriesById.delete(oq.queryId);
                var result2 = onQueryUpdated(oq, diff, lastDiff);
                if (result2 === true) {
                  result2 = oq.refetch();
                }
                if (result2 !== false) {
                  results.set(oq, result2);
                }
                return result2;
              }
              if (onQueryUpdated !== null) {
                includedQueriesById.set(oq.queryId, {
                  oq,
                  lastDiff,
                  diff
                });
              }
            }
          }
        });
      }
      if (includedQueriesById.size) {
        includedQueriesById.forEach(function(_a3, queryId) {
          var oq = _a3.oq, lastDiff = _a3.lastDiff, diff = _a3.diff;
          var result2;
          if (onQueryUpdated) {
            if (!diff) {
              var info = oq["queryInfo"];
              info.reset();
              diff = info.getDiff();
            }
            result2 = onQueryUpdated(oq, diff, lastDiff);
          }
          if (!onQueryUpdated || result2 === true) {
            result2 = oq.refetch();
          }
          if (result2 !== false) {
            results.set(oq, result2);
          }
          if (queryId.indexOf("legacyOneTimeQuery") >= 0) {
            _this.stopQueryNoBroadcast(queryId);
          }
        });
      }
      if (removeOptimistic) {
        this.cache.removeOptimistic(removeOptimistic);
      }
      return results;
    };
    QueryManager2.prototype.maskOperation = function(options) {
      var _a2, _b, _c;
      var document = options.document, data = options.data;
      if (globalThis.__DEV__ !== false) {
        var fetchPolicy = options.fetchPolicy, id = options.id;
        var operationType = (_a2 = getOperationDefinition(document)) === null || _a2 === void 0 ? void 0 : _a2.operation;
        var operationId = ((_b = operationType === null || operationType === void 0 ? void 0 : operationType[0]) !== null && _b !== void 0 ? _b : "o") + id;
        if (this.dataMasking && fetchPolicy === "no-cache" && !isFullyUnmaskedOperation(document) && !this.noCacheWarningsByQueryId.has(operationId)) {
          this.noCacheWarningsByQueryId.add(operationId);
          globalThis.__DEV__ !== false && invariant2.warn(37, (_c = getOperationName(document)) !== null && _c !== void 0 ? _c : "Unnamed ".concat(operationType !== null && operationType !== void 0 ? operationType : "operation"));
        }
      }
      return this.dataMasking ? maskOperation(data, document, this.cache) : data;
    };
    QueryManager2.prototype.maskFragment = function(options) {
      var data = options.data, fragment = options.fragment, fragmentName = options.fragmentName;
      return this.dataMasking ? maskFragment(data, fragment, this.cache, fragmentName) : data;
    };
    QueryManager2.prototype.fetchQueryByPolicy = function(queryInfo, _a2, networkStatus) {
      var _this = this;
      var query = _a2.query, variables = _a2.variables, fetchPolicy = _a2.fetchPolicy, refetchWritePolicy = _a2.refetchWritePolicy, errorPolicy = _a2.errorPolicy, returnPartialData = _a2.returnPartialData, context = _a2.context, notifyOnNetworkStatusChange = _a2.notifyOnNetworkStatusChange;
      var oldNetworkStatus = queryInfo.networkStatus;
      queryInfo.init({
        document: query,
        variables,
        networkStatus
      });
      var readCache = function() {
        return queryInfo.getDiff();
      };
      var resultsFromCache = function(diff2, networkStatus2) {
        if (networkStatus2 === void 0) {
          networkStatus2 = queryInfo.networkStatus || NetworkStatus.loading;
        }
        var data = diff2.result;
        if (globalThis.__DEV__ !== false && !returnPartialData && !equal(data, {})) {
          logMissingFieldErrors(diff2.missing);
        }
        var fromData = function(data2) {
          return Observable2.of(__assign({
            data: data2,
            loading: isNetworkRequestInFlight(networkStatus2),
            networkStatus: networkStatus2
          }, diff2.complete ? null : {
            partial: true
          }));
        };
        if (data && _this.getDocumentInfo(query).hasForcedResolvers) {
          return _this.localState.runResolvers({
            document: query,
            remoteResult: {
              data
            },
            context,
            variables,
            onlyRunForcedResolvers: true
          }).then(function(resolved) {
            return fromData(resolved.data || void 0);
          });
        }
        if (errorPolicy === "none" && networkStatus2 === NetworkStatus.refetch && Array.isArray(diff2.missing)) {
          return fromData(void 0);
        }
        return fromData(data);
      };
      var cacheWriteBehavior = fetchPolicy === "no-cache" ? 0 : networkStatus === NetworkStatus.refetch && refetchWritePolicy !== "merge" ? 1 : 2;
      var resultsFromLink = function() {
        return _this.getResultsFromLink(queryInfo, cacheWriteBehavior, {
          query,
          variables,
          context,
          fetchPolicy,
          errorPolicy
        });
      };
      var shouldNotify = notifyOnNetworkStatusChange && typeof oldNetworkStatus === "number" && oldNetworkStatus !== networkStatus && isNetworkRequestInFlight(networkStatus);
      switch (fetchPolicy) {
        default:
        case "cache-first": {
          var diff = readCache();
          if (diff.complete) {
            return {
              fromLink: false,
              sources: [resultsFromCache(diff, queryInfo.markReady())]
            };
          }
          if (returnPartialData || shouldNotify) {
            return {
              fromLink: true,
              sources: [resultsFromCache(diff), resultsFromLink()]
            };
          }
          return {
            fromLink: true,
            sources: [resultsFromLink()]
          };
        }
        case "cache-and-network": {
          var diff = readCache();
          if (diff.complete || returnPartialData || shouldNotify) {
            return {
              fromLink: true,
              sources: [resultsFromCache(diff), resultsFromLink()]
            };
          }
          return {
            fromLink: true,
            sources: [resultsFromLink()]
          };
        }
        case "cache-only":
          return {
            fromLink: false,
            sources: [resultsFromCache(readCache(), queryInfo.markReady())]
          };
        case "network-only":
          if (shouldNotify) {
            return {
              fromLink: true,
              sources: [resultsFromCache(readCache()), resultsFromLink()]
            };
          }
          return {
            fromLink: true,
            sources: [resultsFromLink()]
          };
        case "no-cache":
          if (shouldNotify) {
            return {
              fromLink: true,
              // Note that queryInfo.getDiff() for no-cache queries does not call
              // cache.diff, but instead returns a { complete: false } stub result
              // when there is no queryInfo.diff already defined.
              sources: [resultsFromCache(queryInfo.getDiff()), resultsFromLink()]
            };
          }
          return {
            fromLink: true,
            sources: [resultsFromLink()]
          };
        case "standby":
          return {
            fromLink: false,
            sources: []
          };
      }
    };
    QueryManager2.prototype.getQuery = function(queryId) {
      if (queryId && !this.queries.has(queryId)) {
        this.queries.set(queryId, new QueryInfo(this, queryId));
      }
      return this.queries.get(queryId);
    };
    QueryManager2.prototype.prepareContext = function(context) {
      if (context === void 0) {
        context = {};
      }
      var newContext = this.localState.prepareContext(context);
      return __assign(__assign(__assign({}, this.defaultContext), newContext), {
        clientAwareness: this.clientAwareness
      });
    };
    return QueryManager2;
  }()
);

// node_modules/@apollo/client/core/LocalState.js
var LocalState = (
  /** @class */
  function() {
    function LocalState2(_a2) {
      var cache = _a2.cache, client = _a2.client, resolvers = _a2.resolvers, fragmentMatcher = _a2.fragmentMatcher;
      this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap();
      this.cache = cache;
      if (client) {
        this.client = client;
      }
      if (resolvers) {
        this.addResolvers(resolvers);
      }
      if (fragmentMatcher) {
        this.setFragmentMatcher(fragmentMatcher);
      }
    }
    LocalState2.prototype.addResolvers = function(resolvers) {
      var _this = this;
      this.resolvers = this.resolvers || {};
      if (Array.isArray(resolvers)) {
        resolvers.forEach(function(resolverGroup) {
          _this.resolvers = mergeDeep(_this.resolvers, resolverGroup);
        });
      } else {
        this.resolvers = mergeDeep(this.resolvers, resolvers);
      }
    };
    LocalState2.prototype.setResolvers = function(resolvers) {
      this.resolvers = {};
      this.addResolvers(resolvers);
    };
    LocalState2.prototype.getResolvers = function() {
      return this.resolvers || {};
    };
    LocalState2.prototype.runResolvers = function(_a2) {
      return __awaiter(this, arguments, void 0, function(_b) {
        var document = _b.document, remoteResult = _b.remoteResult, context = _b.context, variables = _b.variables, _c = _b.onlyRunForcedResolvers, onlyRunForcedResolvers = _c === void 0 ? false : _c;
        return __generator(this, function(_d) {
          if (document) {
            return [2, this.resolveDocument(document, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function(localResult) {
              return __assign(__assign({}, remoteResult), {
                data: localResult.result
              });
            })];
          }
          return [2, remoteResult];
        });
      });
    };
    LocalState2.prototype.setFragmentMatcher = function(fragmentMatcher) {
      this.fragmentMatcher = fragmentMatcher;
    };
    LocalState2.prototype.getFragmentMatcher = function() {
      return this.fragmentMatcher;
    };
    LocalState2.prototype.clientQuery = function(document) {
      if (hasDirectives(["client"], document)) {
        if (this.resolvers) {
          return document;
        }
      }
      return null;
    };
    LocalState2.prototype.serverQuery = function(document) {
      return removeClientSetsFromDocument(document);
    };
    LocalState2.prototype.prepareContext = function(context) {
      var cache = this.cache;
      return __assign(__assign({}, context), {
        cache,
        // Getting an entry's cache key is useful for local state resolvers.
        getCacheKey: function(obj) {
          return cache.identify(obj);
        }
      });
    };
    LocalState2.prototype.addExportedVariables = function(document_1) {
      return __awaiter(this, arguments, void 0, function(document, variables, context) {
        if (variables === void 0) {
          variables = {};
        }
        if (context === void 0) {
          context = {};
        }
        return __generator(this, function(_a2) {
          if (document) {
            return [2, this.resolveDocument(document, this.buildRootValueFromCache(document, variables) || {}, this.prepareContext(context), variables).then(function(data) {
              return __assign(__assign({}, variables), data.exportedVariables);
            })];
          }
          return [2, __assign({}, variables)];
        });
      });
    };
    LocalState2.prototype.shouldForceResolvers = function(document) {
      var forceResolvers = false;
      visit(document, {
        Directive: {
          enter: function(node) {
            if (node.name.value === "client" && node.arguments) {
              forceResolvers = node.arguments.some(function(arg) {
                return arg.name.value === "always" && arg.value.kind === "BooleanValue" && arg.value.value === true;
              });
              if (forceResolvers) {
                return BREAK;
              }
            }
          }
        }
      });
      return forceResolvers;
    };
    LocalState2.prototype.buildRootValueFromCache = function(document, variables) {
      return this.cache.diff({
        query: buildQueryFromSelectionSet(document),
        variables,
        returnPartialData: true,
        optimistic: false
      }).result;
    };
    LocalState2.prototype.resolveDocument = function(document_1, rootValue_1) {
      return __awaiter(this, arguments, void 0, function(document, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
        var mainDefinition, fragments, fragmentMap, selectionsToResolve, definitionOperation, defaultOperationType, _a2, cache, client, execContext, isClientFieldDescendant;
        if (context === void 0) {
          context = {};
        }
        if (variables === void 0) {
          variables = {};
        }
        if (fragmentMatcher === void 0) {
          fragmentMatcher = function() {
            return true;
          };
        }
        if (onlyRunForcedResolvers === void 0) {
          onlyRunForcedResolvers = false;
        }
        return __generator(this, function(_b) {
          mainDefinition = getMainDefinition(document);
          fragments = getFragmentDefinitions(document);
          fragmentMap = createFragmentMap(fragments);
          selectionsToResolve = this.collectSelectionsToResolve(mainDefinition, fragmentMap);
          definitionOperation = mainDefinition.operation;
          defaultOperationType = definitionOperation ? definitionOperation.charAt(0).toUpperCase() + definitionOperation.slice(1) : "Query";
          _a2 = this, cache = _a2.cache, client = _a2.client;
          execContext = {
            fragmentMap,
            context: __assign(__assign({}, context), {
              cache,
              client
            }),
            variables,
            fragmentMatcher,
            defaultOperationType,
            exportedVariables: {},
            selectionsToResolve,
            onlyRunForcedResolvers
          };
          isClientFieldDescendant = false;
          return [2, this.resolveSelectionSet(mainDefinition.selectionSet, isClientFieldDescendant, rootValue, execContext).then(function(result2) {
            return {
              result: result2,
              exportedVariables: execContext.exportedVariables
            };
          })];
        });
      });
    };
    LocalState2.prototype.resolveSelectionSet = function(selectionSet, isClientFieldDescendant, rootValue, execContext) {
      return __awaiter(this, void 0, void 0, function() {
        var fragmentMap, context, variables, resultsToMerge, execute2;
        var _this = this;
        return __generator(this, function(_a2) {
          fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
          resultsToMerge = [rootValue];
          execute2 = function(selection) {
            return __awaiter(_this, void 0, void 0, function() {
              var fragment, typeCondition;
              return __generator(this, function(_a3) {
                if (!isClientFieldDescendant && !execContext.selectionsToResolve.has(selection)) {
                  return [
                    2
                    /*return*/
                  ];
                }
                if (!shouldInclude(selection, variables)) {
                  return [
                    2
                    /*return*/
                  ];
                }
                if (isField(selection)) {
                  return [2, this.resolveField(selection, isClientFieldDescendant, rootValue, execContext).then(function(fieldResult) {
                    var _a4;
                    if (typeof fieldResult !== "undefined") {
                      resultsToMerge.push((_a4 = {}, _a4[resultKeyNameFromField(selection)] = fieldResult, _a4));
                    }
                  })];
                }
                if (isInlineFragment(selection)) {
                  fragment = selection;
                } else {
                  fragment = fragmentMap[selection.name.value];
                  invariant2(fragment, 19, selection.name.value);
                }
                if (fragment && fragment.typeCondition) {
                  typeCondition = fragment.typeCondition.name.value;
                  if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
                    return [2, this.resolveSelectionSet(fragment.selectionSet, isClientFieldDescendant, rootValue, execContext).then(function(fragmentResult) {
                      resultsToMerge.push(fragmentResult);
                    })];
                  }
                }
                return [
                  2
                  /*return*/
                ];
              });
            });
          };
          return [2, Promise.all(selectionSet.selections.map(execute2)).then(function() {
            return mergeDeepArray(resultsToMerge);
          })];
        });
      });
    };
    LocalState2.prototype.resolveField = function(field, isClientFieldDescendant, rootValue, execContext) {
      return __awaiter(this, void 0, void 0, function() {
        var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;
        var _this = this;
        return __generator(this, function(_a2) {
          if (!rootValue) {
            return [2, null];
          }
          variables = execContext.variables;
          fieldName = field.name.value;
          aliasedFieldName = resultKeyNameFromField(field);
          aliasUsed = fieldName !== aliasedFieldName;
          defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
          resultPromise = Promise.resolve(defaultResult);
          if (!execContext.onlyRunForcedResolvers || this.shouldForceResolvers(field)) {
            resolverType = rootValue.__typename || execContext.defaultOperationType;
            resolverMap = this.resolvers && this.resolvers[resolverType];
            if (resolverMap) {
              resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];
              if (resolve) {
                resultPromise = Promise.resolve(
                  // In case the resolve function accesses reactive variables,
                  // set cacheSlot to the current cache instance.
                  cacheSlot.withValue(this.cache, resolve, [rootValue, argumentsObjectFromField(field, variables), execContext.context, {
                    field,
                    fragmentMap: execContext.fragmentMap
                  }])
                );
              }
            }
          }
          return [2, resultPromise.then(function(result2) {
            var _a3, _b;
            if (result2 === void 0) {
              result2 = defaultResult;
            }
            if (field.directives) {
              field.directives.forEach(function(directive) {
                if (directive.name.value === "export" && directive.arguments) {
                  directive.arguments.forEach(function(arg) {
                    if (arg.name.value === "as" && arg.value.kind === "StringValue") {
                      execContext.exportedVariables[arg.value.value] = result2;
                    }
                  });
                }
              });
            }
            if (!field.selectionSet) {
              return result2;
            }
            if (result2 == null) {
              return result2;
            }
            var isClientField = (_b = (_a3 = field.directives) === null || _a3 === void 0 ? void 0 : _a3.some(function(d) {
              return d.name.value === "client";
            })) !== null && _b !== void 0 ? _b : false;
            if (Array.isArray(result2)) {
              return _this.resolveSubSelectedArray(field, isClientFieldDescendant || isClientField, result2, execContext);
            }
            if (field.selectionSet) {
              return _this.resolveSelectionSet(field.selectionSet, isClientFieldDescendant || isClientField, result2, execContext);
            }
          })];
        });
      });
    };
    LocalState2.prototype.resolveSubSelectedArray = function(field, isClientFieldDescendant, result2, execContext) {
      var _this = this;
      return Promise.all(result2.map(function(item) {
        if (item === null) {
          return null;
        }
        if (Array.isArray(item)) {
          return _this.resolveSubSelectedArray(field, isClientFieldDescendant, item, execContext);
        }
        if (field.selectionSet) {
          return _this.resolveSelectionSet(field.selectionSet, isClientFieldDescendant, item, execContext);
        }
      }));
    };
    LocalState2.prototype.collectSelectionsToResolve = function(mainDefinition, fragmentMap) {
      var isSingleASTNode = function(node) {
        return !Array.isArray(node);
      };
      var selectionsToResolveCache = this.selectionsToResolveCache;
      function collectByDefinition(definitionNode) {
        if (!selectionsToResolveCache.has(definitionNode)) {
          var matches_1 = /* @__PURE__ */ new Set();
          selectionsToResolveCache.set(definitionNode, matches_1);
          visit(definitionNode, {
            Directive: function(node, _, __, ___, ancestors) {
              if (node.name.value === "client") {
                ancestors.forEach(function(node2) {
                  if (isSingleASTNode(node2) && isSelectionNode(node2)) {
                    matches_1.add(node2);
                  }
                });
              }
            },
            FragmentSpread: function(spread, _, __, ___, ancestors) {
              var fragment = fragmentMap[spread.name.value];
              invariant2(fragment, 20, spread.name.value);
              var fragmentSelections = collectByDefinition(fragment);
              if (fragmentSelections.size > 0) {
                ancestors.forEach(function(node) {
                  if (isSingleASTNode(node) && isSelectionNode(node)) {
                    matches_1.add(node);
                  }
                });
                matches_1.add(spread);
                fragmentSelections.forEach(function(selection) {
                  matches_1.add(selection);
                });
              }
            }
          });
        }
        return selectionsToResolveCache.get(definitionNode);
      }
      return collectByDefinition(mainDefinition);
    };
    return LocalState2;
  }()
);

// node_modules/@apollo/client/core/ApolloClient.js
var hasSuggestedDevtools = false;
var ApolloClient = (
  /** @class */
  function() {
    function ApolloClient2(options) {
      var _this = this;
      var _a2;
      this.resetStoreCallbacks = [];
      this.clearStoreCallbacks = [];
      if (!options.cache) {
        throw newInvariantError(16);
      }
      var uri = options.uri, credentials = options.credentials, headers = options.headers, cache = options.cache, documentTransform = options.documentTransform, _b = options.ssrMode, ssrMode = _b === void 0 ? false : _b, _c = options.ssrForceFetchDelay, ssrForceFetchDelay = _c === void 0 ? 0 : _c, connectToDevTools = options.connectToDevTools, _d = options.queryDeduplication, queryDeduplication = _d === void 0 ? true : _d, defaultOptions2 = options.defaultOptions, defaultContext = options.defaultContext, _e = options.assumeImmutableResults, assumeImmutableResults = _e === void 0 ? cache.assumeImmutableResults : _e, resolvers = options.resolvers, typeDefs = options.typeDefs, fragmentMatcher = options.fragmentMatcher, clientAwarenessName = options.name, clientAwarenessVersion = options.version, devtools = options.devtools, dataMasking = options.dataMasking;
      var link = options.link;
      if (!link) {
        link = uri ? new HttpLink({
          uri,
          credentials,
          headers
        }) : ApolloLink.empty();
      }
      this.link = link;
      this.cache = cache;
      this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
      this.queryDeduplication = queryDeduplication;
      this.defaultOptions = defaultOptions2 || /* @__PURE__ */ Object.create(null);
      this.typeDefs = typeDefs;
      this.devtoolsConfig = __assign(__assign({}, devtools), {
        enabled: (_a2 = devtools === null || devtools === void 0 ? void 0 : devtools.enabled) !== null && _a2 !== void 0 ? _a2 : connectToDevTools
      });
      if (this.devtoolsConfig.enabled === void 0) {
        this.devtoolsConfig.enabled = globalThis.__DEV__ !== false;
      }
      if (ssrForceFetchDelay) {
        setTimeout(function() {
          return _this.disableNetworkFetches = false;
        }, ssrForceFetchDelay);
      }
      this.watchQuery = this.watchQuery.bind(this);
      this.query = this.query.bind(this);
      this.mutate = this.mutate.bind(this);
      this.watchFragment = this.watchFragment.bind(this);
      this.resetStore = this.resetStore.bind(this);
      this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
      this.version = version;
      this.localState = new LocalState({
        cache,
        client: this,
        resolvers,
        fragmentMatcher
      });
      this.queryManager = new QueryManager({
        cache: this.cache,
        link: this.link,
        defaultOptions: this.defaultOptions,
        defaultContext,
        documentTransform,
        queryDeduplication,
        ssrMode,
        dataMasking: !!dataMasking,
        clientAwareness: {
          name: clientAwarenessName,
          version: clientAwarenessVersion
        },
        localState: this.localState,
        assumeImmutableResults,
        onBroadcast: this.devtoolsConfig.enabled ? function() {
          if (_this.devToolsHookCb) {
            _this.devToolsHookCb({
              action: {},
              state: {
                queries: _this.queryManager.getQueryStore(),
                mutations: _this.queryManager.mutationStore || {}
              },
              dataWithOptimisticResults: _this.cache.extract(true)
            });
          }
        } : void 0
      });
      if (this.devtoolsConfig.enabled) this.connectToDevTools();
    }
    ApolloClient2.prototype.connectToDevTools = function() {
      if (typeof window === "undefined") {
        return;
      }
      var windowWithDevTools = window;
      var devtoolsSymbol = Symbol.for("apollo.devtools");
      (windowWithDevTools[devtoolsSymbol] = windowWithDevTools[devtoolsSymbol] || []).push(this);
      windowWithDevTools.__APOLLO_CLIENT__ = this;
      if (!hasSuggestedDevtools && globalThis.__DEV__ !== false) {
        hasSuggestedDevtools = true;
        if (window.document && window.top === window.self && /^(https?|file):$/.test(window.location.protocol)) {
          setTimeout(function() {
            if (!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
              var nav = window.navigator;
              var ua = nav && nav.userAgent;
              var url = void 0;
              if (typeof ua === "string") {
                if (ua.indexOf("Chrome/") > -1) {
                  url = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm";
                } else if (ua.indexOf("Firefox/") > -1) {
                  url = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/";
                }
              }
              if (url) {
                globalThis.__DEV__ !== false && invariant2.log("Download the Apollo DevTools for a better development experience: %s", url);
              }
            }
          }, 1e4);
        }
      }
    };
    Object.defineProperty(ApolloClient2.prototype, "documentTransform", {
      /**
       * The `DocumentTransform` used to modify GraphQL documents before a request
       * is made. If a custom `DocumentTransform` is not provided, this will be the
       * default document transform.
       */
      get: function() {
        return this.queryManager.documentTransform;
      },
      enumerable: false,
      configurable: true
    });
    ApolloClient2.prototype.stop = function() {
      this.queryManager.stop();
    };
    ApolloClient2.prototype.watchQuery = function(options) {
      if (this.defaultOptions.watchQuery) {
        options = mergeOptions(this.defaultOptions.watchQuery, options);
      }
      if (this.disableNetworkFetches && (options.fetchPolicy === "network-only" || options.fetchPolicy === "cache-and-network")) {
        options = __assign(__assign({}, options), {
          fetchPolicy: "cache-first"
        });
      }
      return this.queryManager.watchQuery(options);
    };
    ApolloClient2.prototype.query = function(options) {
      if (this.defaultOptions.query) {
        options = mergeOptions(this.defaultOptions.query, options);
      }
      invariant2(options.fetchPolicy !== "cache-and-network", 17);
      if (this.disableNetworkFetches && options.fetchPolicy === "network-only") {
        options = __assign(__assign({}, options), {
          fetchPolicy: "cache-first"
        });
      }
      return this.queryManager.query(options);
    };
    ApolloClient2.prototype.mutate = function(options) {
      if (this.defaultOptions.mutate) {
        options = mergeOptions(this.defaultOptions.mutate, options);
      }
      return this.queryManager.mutate(options);
    };
    ApolloClient2.prototype.subscribe = function(options) {
      var _this = this;
      var id = this.queryManager.generateQueryId();
      return this.queryManager.startGraphQLSubscription(options).map(function(result2) {
        return __assign(__assign({}, result2), {
          data: _this.queryManager.maskOperation({
            document: options.query,
            data: result2.data,
            fetchPolicy: options.fetchPolicy,
            id
          })
        });
      });
    };
    ApolloClient2.prototype.readQuery = function(options, optimistic) {
      if (optimistic === void 0) {
        optimistic = false;
      }
      return this.cache.readQuery(options, optimistic);
    };
    ApolloClient2.prototype.watchFragment = function(options) {
      var _a2;
      return this.cache.watchFragment(__assign(__assign({}, options), (_a2 = {}, _a2[Symbol.for("apollo.dataMasking")] = this.queryManager.dataMasking, _a2)));
    };
    ApolloClient2.prototype.readFragment = function(options, optimistic) {
      if (optimistic === void 0) {
        optimistic = false;
      }
      return this.cache.readFragment(options, optimistic);
    };
    ApolloClient2.prototype.writeQuery = function(options) {
      var ref = this.cache.writeQuery(options);
      if (options.broadcast !== false) {
        this.queryManager.broadcastQueries();
      }
      return ref;
    };
    ApolloClient2.prototype.writeFragment = function(options) {
      var ref = this.cache.writeFragment(options);
      if (options.broadcast !== false) {
        this.queryManager.broadcastQueries();
      }
      return ref;
    };
    ApolloClient2.prototype.__actionHookForDevTools = function(cb) {
      this.devToolsHookCb = cb;
    };
    ApolloClient2.prototype.__requestRaw = function(payload) {
      return execute(this.link, payload);
    };
    ApolloClient2.prototype.resetStore = function() {
      var _this = this;
      return Promise.resolve().then(function() {
        return _this.queryManager.clearStore({
          discardWatches: false
        });
      }).then(function() {
        return Promise.all(_this.resetStoreCallbacks.map(function(fn) {
          return fn();
        }));
      }).then(function() {
        return _this.reFetchObservableQueries();
      });
    };
    ApolloClient2.prototype.clearStore = function() {
      var _this = this;
      return Promise.resolve().then(function() {
        return _this.queryManager.clearStore({
          discardWatches: true
        });
      }).then(function() {
        return Promise.all(_this.clearStoreCallbacks.map(function(fn) {
          return fn();
        }));
      });
    };
    ApolloClient2.prototype.onResetStore = function(cb) {
      var _this = this;
      this.resetStoreCallbacks.push(cb);
      return function() {
        _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function(c) {
          return c !== cb;
        });
      };
    };
    ApolloClient2.prototype.onClearStore = function(cb) {
      var _this = this;
      this.clearStoreCallbacks.push(cb);
      return function() {
        _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function(c) {
          return c !== cb;
        });
      };
    };
    ApolloClient2.prototype.reFetchObservableQueries = function(includeStandby) {
      return this.queryManager.reFetchObservableQueries(includeStandby);
    };
    ApolloClient2.prototype.refetchQueries = function(options) {
      var map2 = this.queryManager.refetchQueries(options);
      var queries = [];
      var results = [];
      map2.forEach(function(result3, obsQuery) {
        queries.push(obsQuery);
        results.push(result3);
      });
      var result2 = Promise.all(results);
      result2.queries = queries;
      result2.results = results;
      result2.catch(function(error) {
        globalThis.__DEV__ !== false && invariant2.debug(18, error);
      });
      return result2;
    };
    ApolloClient2.prototype.getObservableQueries = function(include) {
      if (include === void 0) {
        include = "active";
      }
      return this.queryManager.getObservableQueries(include);
    };
    ApolloClient2.prototype.extract = function(optimistic) {
      return this.cache.extract(optimistic);
    };
    ApolloClient2.prototype.restore = function(serializedState) {
      return this.cache.restore(serializedState);
    };
    ApolloClient2.prototype.addResolvers = function(resolvers) {
      this.localState.addResolvers(resolvers);
    };
    ApolloClient2.prototype.setResolvers = function(resolvers) {
      this.localState.setResolvers(resolvers);
    };
    ApolloClient2.prototype.getResolvers = function() {
      return this.localState.getResolvers();
    };
    ApolloClient2.prototype.setLocalStateFragmentMatcher = function(fragmentMatcher) {
      this.localState.setFragmentMatcher(fragmentMatcher);
    };
    ApolloClient2.prototype.setLink = function(newLink) {
      this.link = this.queryManager.link = newLink;
    };
    Object.defineProperty(ApolloClient2.prototype, "defaultContext", {
      get: function() {
        return this.queryManager.defaultContext;
      },
      enumerable: false,
      configurable: true
    });
    return ApolloClient2;
  }()
);
if (globalThis.__DEV__ !== false) {
  ApolloClient.prototype.getMemoryInternals = getApolloClientMemoryInternals;
}

// node_modules/graphql-tag/lib/index.js
var docCache = /* @__PURE__ */ new Map();
var fragmentSourceMap = /* @__PURE__ */ new Map();
var printFragmentWarnings = true;
var experimentalFragmentVariables = false;
function normalize2(string) {
  return string.replace(/[\s,]+/g, " ").trim();
}
function cacheKeyFromLoc(loc) {
  return normalize2(loc.source.body.substring(loc.start, loc.end));
}
function processFragments(ast) {
  var seenKeys = /* @__PURE__ */ new Set();
  var definitions = [];
  ast.definitions.forEach(function(fragmentDefinition) {
    if (fragmentDefinition.kind === "FragmentDefinition") {
      var fragmentName = fragmentDefinition.name.value;
      var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
      var sourceKeySet = fragmentSourceMap.get(fragmentName);
      if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
        if (printFragmentWarnings) {
          console.warn("Warning: fragment with name " + fragmentName + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
        }
      } else if (!sourceKeySet) {
        fragmentSourceMap.set(fragmentName, sourceKeySet = /* @__PURE__ */ new Set());
      }
      sourceKeySet.add(sourceKey);
      if (!seenKeys.has(sourceKey)) {
        seenKeys.add(sourceKey);
        definitions.push(fragmentDefinition);
      }
    } else {
      definitions.push(fragmentDefinition);
    }
  });
  return __assign(__assign({}, ast), {
    definitions
  });
}
function stripLoc(doc) {
  var workSet = new Set(doc.definitions);
  workSet.forEach(function(node) {
    if (node.loc) delete node.loc;
    Object.keys(node).forEach(function(key) {
      var value = node[key];
      if (value && typeof value === "object") {
        workSet.add(value);
      }
    });
  });
  var loc = doc.loc;
  if (loc) {
    delete loc.startToken;
    delete loc.endToken;
  }
  return doc;
}
function parseDocument(source) {
  var cacheKey = normalize2(source);
  if (!docCache.has(cacheKey)) {
    var parsed = parse(source, {
      experimentalFragmentVariables,
      allowLegacyFragmentVariables: experimentalFragmentVariables
    });
    if (!parsed || parsed.kind !== "Document") {
      throw new Error("Not a valid GraphQL document.");
    }
    docCache.set(cacheKey, stripLoc(processFragments(parsed)));
  }
  return docCache.get(cacheKey);
}
function gql(literals) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  if (typeof literals === "string") {
    literals = [literals];
  }
  var result2 = literals[0];
  args.forEach(function(arg, i) {
    if (arg && arg.kind === "Document") {
      result2 += arg.loc.source.body;
    } else {
      result2 += arg;
    }
    result2 += literals[i + 1];
  });
  return parseDocument(result2);
}
function resetCaches() {
  docCache.clear();
  fragmentSourceMap.clear();
}
function disableFragmentWarnings() {
  printFragmentWarnings = false;
}
function enableExperimentalFragmentVariables() {
  experimentalFragmentVariables = true;
}
function disableExperimentalFragmentVariables() {
  experimentalFragmentVariables = false;
}
var extras = {
  gql,
  resetCaches,
  disableFragmentWarnings,
  enableExperimentalFragmentVariables,
  disableExperimentalFragmentVariables
};
(function(gql_1) {
  gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;
})(gql || (gql = {}));
gql["default"] = gql;

// node_modules/@apollo/client/core/index.js
setVerbosity(globalThis.__DEV__ !== false ? "log" : "silent");

// node_modules/apollo-angular/fesm2022/ngApollo.mjs
function fromPromise(promiseFn) {
  return new Observable((subscriber) => {
    promiseFn().then((result2) => {
      if (!subscriber.closed) {
        subscriber.next(result2);
        subscriber.complete();
      }
    }, (error) => {
      if (!subscriber.closed) {
        subscriber.error(error);
      }
    });
    return () => subscriber.unsubscribe();
  });
}
function useMutationLoading(source, enabled) {
  if (!enabled) {
    return source.pipe(map((result2) => __spreadProps(__spreadValues({}, result2), {
      loading: false
    })));
  }
  return source.pipe(startWith({
    loading: true
  }), map((result2) => __spreadProps(__spreadValues({}, result2), {
    loading: !!result2.loading
  })));
}
var ZoneScheduler = class {
  zone;
  constructor(zone) {
    this.zone = zone;
  }
  now = Date.now ? Date.now : () => +/* @__PURE__ */ new Date();
  schedule(work, delay = 0, state) {
    return this.zone.run(() => queueScheduler.schedule(work, delay, state));
  }
};
function fixObservable(obs) {
  obs[observable] = () => obs;
  return obs;
}
function wrapWithZone(obs, ngZone) {
  return obs.pipe(observeOn(new ZoneScheduler(ngZone)));
}
function useInitialLoading(obsQuery) {
  return function useInitialLoadingOperator(source) {
    return new Observable(function useInitialLoadingSubscription(subscriber) {
      const currentResult = obsQuery.getCurrentResult();
      const {
        loading,
        errors,
        error,
        partial,
        data
      } = currentResult;
      const {
        partialRefetch,
        fetchPolicy
      } = obsQuery.options;
      const hasError = errors || error;
      if (partialRefetch && partial && (!data || Object.keys(data).length === 0) && fetchPolicy !== "cache-only" && !loading && !hasError) {
        subscriber.next(__spreadProps(__spreadValues({}, currentResult), {
          loading: true,
          networkStatus: NetworkStatus.loading
        }));
      }
      return source.subscribe(subscriber);
    });
  };
}
var QueryRef = class {
  obsQuery;
  valueChanges;
  queryId;
  constructor(obsQuery, ngZone, options) {
    this.obsQuery = obsQuery;
    const wrapped = wrapWithZone(from(fixObservable(this.obsQuery)), ngZone);
    this.valueChanges = options.useInitialLoading ? wrapped.pipe(useInitialLoading(this.obsQuery)) : wrapped;
    this.queryId = this.obsQuery.queryId;
  }
  // ObservableQuery's methods
  get options() {
    return this.obsQuery.options;
  }
  get variables() {
    return this.obsQuery.variables;
  }
  result() {
    return this.obsQuery.result();
  }
  getCurrentResult() {
    return this.obsQuery.getCurrentResult();
  }
  getLastResult() {
    return this.obsQuery.getLastResult();
  }
  getLastError() {
    return this.obsQuery.getLastError();
  }
  resetLastResults() {
    return this.obsQuery.resetLastResults();
  }
  refetch(variables) {
    return this.obsQuery.refetch(variables);
  }
  fetchMore(fetchMoreOptions) {
    return this.obsQuery.fetchMore(fetchMoreOptions);
  }
  subscribeToMore(options) {
    return this.obsQuery.subscribeToMore(options);
  }
  updateQuery(mapFn) {
    return this.obsQuery.updateQuery(mapFn);
  }
  stopPolling() {
    return this.obsQuery.stopPolling();
  }
  startPolling(pollInterval) {
    return this.obsQuery.startPolling(pollInterval);
  }
  setOptions(opts) {
    return this.obsQuery.setOptions(opts);
  }
  setVariables(variables) {
    return this.obsQuery.setVariables(variables);
  }
};
var APOLLO_FLAGS = new InjectionToken("APOLLO_FLAGS");
var APOLLO_OPTIONS = new InjectionToken("APOLLO_OPTIONS");
var APOLLO_NAMED_OPTIONS = new InjectionToken("APOLLO_NAMED_OPTIONS");
var ApolloBase = class {
  ngZone;
  flags;
  _client;
  useInitialLoading;
  useMutationLoading;
  constructor(ngZone, flags, _client) {
    this.ngZone = ngZone;
    this.flags = flags;
    this._client = _client;
    this.useInitialLoading = flags?.useInitialLoading ?? false;
    this.useMutationLoading = flags?.useMutationLoading ?? false;
  }
  watchQuery(options) {
    return new QueryRef(this.ensureClient().watchQuery(__spreadValues({}, options)), this.ngZone, __spreadValues({
      useInitialLoading: this.useInitialLoading
    }, options));
  }
  query(options) {
    return fromPromise(() => this.ensureClient().query(__spreadValues({}, options)));
  }
  mutate(options) {
    return useMutationLoading(fromPromise(() => this.ensureClient().mutate(__spreadValues({}, options))), options.useMutationLoading ?? this.useMutationLoading);
  }
  watchFragment(options, extra) {
    const obs = from(fixObservable(this.ensureClient().watchFragment(__spreadValues({}, options))));
    return extra && extra.useZone !== true ? obs : wrapWithZone(obs, this.ngZone);
  }
  subscribe(options, extra) {
    const obs = from(fixObservable(this.ensureClient().subscribe(__spreadValues({}, options))));
    return extra && extra.useZone !== true ? obs : wrapWithZone(obs, this.ngZone);
  }
  /**
   * Get an instance of ApolloClient
   */
  get client() {
    return this.ensureClient();
  }
  /**
   * Set a new instance of ApolloClient
   * Remember to clean up the store before setting a new client.
   *
   * @param client ApolloClient instance
   */
  set client(client) {
    if (this._client) {
      throw new Error("Client has been already defined");
    }
    this._client = client;
  }
  ensureClient() {
    this.checkInstance();
    return this._client;
  }
  checkInstance() {
    if (this._client) {
      return true;
    } else {
      throw new Error("Client has not been defined yet");
    }
  }
};
var Apollo = class _Apollo extends ApolloBase {
  map = /* @__PURE__ */ new Map();
  constructor(ngZone, apolloOptions, apolloNamedOptions, flags) {
    super(ngZone, flags);
    if (apolloOptions) {
      this.createDefault(apolloOptions);
    }
    if (apolloNamedOptions && typeof apolloNamedOptions === "object") {
      for (let name in apolloNamedOptions) {
        if (apolloNamedOptions.hasOwnProperty(name)) {
          const options = apolloNamedOptions[name];
          this.create(options, name);
        }
      }
    }
  }
  /**
   * Create an instance of ApolloClient
   * @param options Options required to create ApolloClient
   * @param name client's name
   */
  create(options, name) {
    if (isNamed(name)) {
      this.createNamed(name, options);
    } else {
      this.createDefault(options);
    }
  }
  /**
   * Use a default ApolloClient
   */
  default() {
    return this;
  }
  /**
   * Use a named ApolloClient
   * @param name client's name
   */
  use(name) {
    if (isNamed(name)) {
      return this.map.get(name);
    } else {
      return this.default();
    }
  }
  /**
   * Create a default ApolloClient, same as `apollo.create(options)`
   * @param options ApolloClient's options
   */
  createDefault(options) {
    if (this._client) {
      throw new Error("Apollo has been already created.");
    }
    this.client = this.ngZone.runOutsideAngular(() => new ApolloClient(options));
  }
  /**
   * Create a named ApolloClient, same as `apollo.create(options, name)`
   * @param name client's name
   * @param options ApolloClient's options
   */
  createNamed(name, options) {
    if (this.map.has(name)) {
      throw new Error(`Client ${name} has been already created`);
    }
    this.map.set(name, new ApolloBase(this.ngZone, this.flags, this.ngZone.runOutsideAngular(() => new ApolloClient(options))));
  }
  /**
   * Remember to clean up the store before removing a client
   * @param name client's name
   */
  removeClient(name) {
    if (isNamed(name)) {
      this.map.delete(name);
    } else {
      this._client = void 0;
    }
  }
  static \u0275fac = function Apollo_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Apollo)(\u0275\u0275inject(NgZone), \u0275\u0275inject(APOLLO_OPTIONS, 8), \u0275\u0275inject(APOLLO_NAMED_OPTIONS, 8), \u0275\u0275inject(APOLLO_FLAGS, 8));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Apollo,
    factory: _Apollo.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Apollo, [{
    type: Injectable
  }], () => [{
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [APOLLO_OPTIONS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [APOLLO_NAMED_OPTIONS]
    }, {
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [APOLLO_FLAGS]
    }, {
      type: Optional
    }]
  }], null);
})();
function isNamed(name) {
  return !!name && name !== "default";
}
function provideApollo(optionsFactory, flags = {}) {
  return [Apollo, {
    provide: APOLLO_OPTIONS,
    useFactory: optionsFactory
  }, {
    provide: APOLLO_FLAGS,
    useValue: flags
  }];
}
var Query = class _Query {
  apollo;
  client = "default";
  constructor(apollo) {
    this.apollo = apollo;
  }
  watch(variables, options) {
    return this.apollo.use(this.client).watchQuery(__spreadProps(__spreadValues({}, options), {
      variables,
      query: this.document
    }));
  }
  fetch(variables, options) {
    return this.apollo.use(this.client).query(__spreadProps(__spreadValues({}, options), {
      variables,
      query: this.document
    }));
  }
  static \u0275fac = function Query_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Query)(\u0275\u0275inject(Apollo));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Query,
    factory: _Query.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Query, [{
    type: Injectable
  }], () => [{
    type: Apollo
  }], null);
})();
var Mutation = class _Mutation {
  apollo;
  client = "default";
  constructor(apollo) {
    this.apollo = apollo;
  }
  mutate(variables, options) {
    return this.apollo.use(this.client).mutate(__spreadProps(__spreadValues({}, options), {
      variables,
      mutation: this.document
    }));
  }
  static \u0275fac = function Mutation_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Mutation)(\u0275\u0275inject(Apollo));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Mutation,
    factory: _Mutation.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Mutation, [{
    type: Injectable
  }], () => [{
    type: Apollo
  }], null);
})();
var Subscription2 = class _Subscription {
  apollo;
  client = "default";
  constructor(apollo) {
    this.apollo = apollo;
  }
  subscribe(variables, options, extra) {
    return this.apollo.use(this.client).subscribe(__spreadProps(__spreadValues({}, options), {
      variables,
      query: this.document
    }), extra);
  }
  static \u0275fac = function Subscription_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Subscription)(\u0275\u0275inject(Apollo));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Subscription,
    factory: _Subscription.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Subscription2, [{
    type: Injectable
  }], () => [{
    type: Apollo
  }], null);
})();

export {
  print,
  printer_exports,
  init_printer,
  getOperationAST_exports,
  init_getOperationAST,
  getMainDefinition,
  Observable2 as Observable,
  ApolloLink,
  split,
  InMemoryCache,
  gql,
  Apollo,
  provideApollo
};
//# sourceMappingURL=chunk-7BPDUI7R.js.map
