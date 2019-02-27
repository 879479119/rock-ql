/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var pql = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,7],$V1=[1,8],$V2=[10,16],$V3=[1,21],$V4=[1,28],$V5=[1,30],$V6=[1,31],$V7=[5,10,26],$V8=[1,34],$V9=[1,35],$Va=[1,36],$Vb=[1,37],$Vc=[1,38],$Vd=[1,39],$Ve=[5,37,38,39],$Vf=[1,46],$Vg=[1,71],$Vh=[1,72],$Vi=[5,37,38,39,47],$Vj=[1,74],$Vk=[5,37,38,39,48],$Vl=[5,10,26,37,38,39,46,47,48],$Vm=[5,37,38,39,46,47];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"Pql":3,"SelectStatement":4,"EOF":5,"SELECT":6,"SelectList":7,"SourceExpression":8,"SelectSpecification":9,",":10,"COUNT":11,"TOP":12,"NUMBER":13,"FromClause":14,"OptionalSelectConditions":15,"FROM":16,"SourceReferenceList":17,"SourceReference":18,"ID":19,"COMMENT":20,"BacktickedIdentifier":21,"BACKTICK":22,"VALUE":23,"OptionalWhereClause":24,"WhereClause":25,"WHERE":26,"SearchCondition":27,"FilterReferenceList":28,"NULL":29,"IDReference":30,"DateReference":31,"TimestampReference":32,"AndFilterReferenceList":33,"OrFilterReferenceList":34,"FilterReference":35,"(":36,")":37,"AND":38,"OR":39,"TypeAction":40,"TimeRange":41,"USER":42,"ActionReference":43,"TOPIC":44,"DO":45,"TO":46,"RANGE":47,"UNTIL":48,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"SELECT",10:",",11:"COUNT",12:"TOP",13:"NUMBER",16:"FROM",19:"ID",20:"COMMENT",22:"BACKTICK",23:"VALUE",26:"WHERE",29:"NULL",36:"(",37:")",38:"AND",39:"OR",42:"USER",44:"TOPIC",45:"DO",46:"TO",47:"RANGE",48:"UNTIL"},
productions_: [0,[3,2],[4,3],[7,1],[7,3],[9,1],[9,2],[8,2],[14,2],[17,3],[17,1],[18,4],[18,2],[21,3],[21,2],[15,1],[24,0],[24,1],[25,2],[27,1],[27,1],[30,4],[30,2],[31,1],[32,1],[28,1],[28,1],[28,1],[33,3],[33,3],[33,3],[33,3],[33,3],[33,3],[33,3],[33,3],[34,3],[34,3],[34,3],[34,3],[34,3],[34,3],[34,3],[34,3],[35,2],[35,1],[40,2],[40,2],[43,4],[43,2],[41,4],[41,4]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 console.log('ok'); return $$[$0-1] 
break;
case 2:
 return { type: 'SELECT', selectList: $$[$0-1], source: $$[$0] } 
break;
case 3: case 10:
this.$ = [ $$[$0] ];
break;
case 4: case 9:
this.$ = [ ...$$[$0-2], $$[$0] ];
break;
case 5:
this.$ = { type: 'COUNT' };
break;
case 6:
this.$ = { type: 'TOP', value: Number($$[$0]) };
break;
case 7:
this.$ = { type: 'SOURCE_LIST', source: $$[$0-1], filters: $$[$0] };
break;
case 8: case 15: case 17: case 19: case 25: case 26:
this.$ = $$[$0];
break;
case 11:
this.$ = { type: 'SOURCE_NODE', id: $$[$0-2], comment: $$[$0] };
break;
case 12:
this.$ = { type: 'SOURCE_NODE', id: $$[$0] };
break;
case 13: case 28: case 36:
this.$ = $$[$0-1];
break;
case 14:
this.$ = '';
break;
case 16: case 20:
this.$ = null;
break;
case 18:
this.$ = { type: 'WHERE', conditions: $$[$0] };
break;
case 21:
this.$ = { type: 'ID_NODE', id: $$[$0-2], comment: $$[$0] };
break;
case 22:
this.$ = { type: 'ID_NODE', id: $$[$0] };
break;
case 23:
this.$ = { type: 'DATE', value: $$[$0] };
break;
case 24:
this.$ = { type: 'TIMESTAMP', value: Number($$[$0]) };
break;
case 27:
this.$ = { type: 'FILTER_SINGLE', detail: $$[$0] };
break;
case 29: case 32:
this.$ = { type: 'FILTER_AND', list: [...$$[$0-2].list, $$[$0]] };
break;
case 30: case 34:
this.$ = { type: 'FILTER_AND', list: [$$[$0-2], ...$$[$0].list] };
break;
case 31: case 33: case 35:
this.$ = { type: 'FILTER_AND', list: [$$[$0-2], $$[$0]] };
break;
case 37: case 40:
this.$ = { type: 'FILTER_OR', list: [...$$[$0-2].list, $$[$0]] };
break;
case 38: case 42:
this.$ = { type: 'FILTER_OR', list: [$$[$0-2], ...$$[$0].list] };
break;
case 39: case 41:
this.$ = { type: 'FILTER_OR', list: [$$[$0-2], $$[$0]] };
break;
case 43:
this.$ = { type: 'FILTER_OP', list: [$$[$0-2], $$[$0]] };
break;
case 44:
this.$ = { type: 'FILTER_NODE', action: $$[$0-1], range: $$[$0] };
break;
case 45:
this.$ = { type: 'FILTER_NODE', action: $$[$0] };
break;
case 46:
this.$ = { type: 'USER_ACTION', detail: $$[$0] };
break;
case 47:
this.$ = { type: 'TOPIC_ACTION', detail: $$[$0] };
break;
case 48:
this.$ = { action: $$[$0-2], target: $$[$0] };
break;
case 49:
this.$ = { action: $$[$0] };
break;
case 50: case 51:
this.$ = { type: 'RANGE', from: $$[$0-2], to: $$[$0] };
break;
}
},
table: [{3:1,4:2,6:[1,3]},{1:[3]},{5:[1,4]},{7:5,9:6,11:$V0,12:$V1},{1:[2,1]},{8:9,10:[1,10],14:11,16:[1,12]},o($V2,[2,3]),o($V2,[2,5]),{13:[1,13]},{5:[2,2]},{9:14,11:$V0,12:$V1},{5:[2,16],15:15,24:16,25:17,26:[1,18]},{17:19,18:20,19:$V3},o($V2,[2,6]),o($V2,[2,4]),{5:[2,7]},{5:[2,15]},{5:[2,17]},{27:22,28:23,29:[1,24],33:25,34:26,35:27,36:$V4,40:29,42:$V5,44:$V6},o([5,26],[2,8],{10:[1,32]}),o($V7,[2,10]),{13:[1,33]},{5:[2,18]},{5:[2,19]},{5:[2,20]},{5:[2,25],38:$V8,39:$V9},{5:[2,26],38:$Va,39:$Vb},{5:[2,27],38:$Vc,39:$Vd},{33:40,34:41,35:42,36:$V4,40:29,42:$V5,44:$V6},o($Ve,[2,45],{41:43,47:[1,44]}),{43:45,45:$Vf},{43:47,45:$Vf},{18:48,19:$V3},o($V7,[2,12],{20:[1,49]}),{33:52,34:50,35:51,36:$V4,40:29,42:$V5,44:$V6},{33:54,34:53,35:42,36:$V4,40:29,42:$V5,44:$V6},{33:55,34:56,35:42,36:$V4,40:29,42:$V5,44:$V6},{33:57,34:59,35:58,36:$V4,40:29,42:$V5,44:$V6},{33:61,34:62,35:60,36:$V4,40:29,42:$V5,44:$V6},{33:65,34:64,35:63,36:$V4,40:29,42:$V5,44:$V6},{37:[1,66],38:$V8,39:$V9},{37:[1,67],38:$Va,39:$Vb},{38:$Vc,39:$Vd},o($Ve,[2,44]),{13:$Vg,21:70,22:$Vh,31:68,32:69},o($Vi,[2,46]),{19:$Vj,30:73},o($Vi,[2,47]),o($V7,[2,9]),{21:75,22:$Vh},o($Ve,[2,29]),o($Ve,[2,32]),{38:$V8,39:$V9},o($Ve,[2,38]),o($Ve,[2,39]),o($Ve,[2,30]),o($Ve,[2,31]),o($Ve,[2,37]),o($Ve,[2,40]),{38:$Va,39:$Vb},o($Ve,[2,33]),o($Ve,[2,34]),o($Ve,[2,35]),o($Ve,[2,41]),o($Ve,[2,42]),o($Ve,[2,43]),o($Ve,[2,28]),o($Ve,[2,36]),{48:[1,76]},{48:[1,77]},o($Vk,[2,23]),o($Vk,[2,24]),{22:[1,79],23:[1,78]},o($Vi,[2,49],{46:[1,80]}),{13:[1,81]},o($V7,[2,11]),{21:70,22:$Vh,31:82},{13:$Vg,32:83},{22:[1,84]},o($Vl,[2,14]),{19:$Vj,30:85},o($Vm,[2,22],{20:[1,86]}),o($Ve,[2,50]),o($Ve,[2,51]),o($Vl,[2,13]),o($Vi,[2,48]),{21:87,22:$Vh},o($Vm,[2,21])],
defaultActions: {4:[2,1],9:[2,2],15:[2,7],16:[2,15],17:[2,17],22:[2,18],23:[2,19],24:[2,20]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 13;
break;
case 2:return 47;
break;
case 3:return 48;
break;
case 4:return 45;
break;
case 5:return 46;
break;
case 6:return 42;
break;
case 7:return 44;
break;
case 8:return 38;
break;
case 9:return 39;
break;
case 10:return 20;
break;
case 11:return 19;
break;
case 12:return 29;
break;
case 13:return 26;
break;
case 14:return 6;
break;
case 15:return 16;
break;
case 16:return 10;
break;
case 17:return 11;
break;
case 18:return 12;
break;
case 19:return 36;
break;
case 20:return 37;
break;
case 21:return 5;
break;
case 22: this.begin('backtickedValue'); return 22; 
break;
case 23: return 23;
break;
case 24: this.popState(); return 22; 
break;
}
},
rules: [/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:RANGE\b)/,/^(?:UNTIL\b)/,/^(?:DO\b)/,/^(?:TO\b)/,/^(?:USER\b)/,/^(?:TOPIC\b)/,/^(?:AND\b)/,/^(?:OR\b)/,/^(?:COMMENT\b)/,/^(?:ID\b)/,/^(?:NULL\b)/,/^(?:WHERE\b)/,/^(?:SELECT\b)/,/^(?:FROM\b)/,/^(?:,)/,/^(?:COUNT\b)/,/^(?:TOP\b)/,/^(?:\()/,/^(?:\))/,/^(?:$)/,/^(?:`)/,/^(?:[^`]+)/,/^(?:`)/],
conditions: {"backtickedValue":{"rules":[23,24],"inclusive":false},"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = pql;
exports.Parser = pql.Parser;
exports.parse = function () { return pql.parse.apply(pql, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}