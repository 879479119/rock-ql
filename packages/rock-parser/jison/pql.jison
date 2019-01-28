
/* lexical grammar */
%lex

%x backtickedValue


%%
\s+                       {/* skip whitespace */}
[0-9]+("."[0-9]+)?\b      {return 'NUMBER';}
"RANGE"                   {return 'RANGE';}
"UNTIL"                   {return 'UNTIL';}
"DO"                      {return 'DO';}
"TO"                      {return 'TO';}
"USER"                    {return 'USER';}
"TOPIC"                   {return 'TOPIC';}
"AND"                     {return 'AND';}
"OR"                      {return 'OR';}
"COMMENT"                 {return 'COMMENT';}
"ID"                      {return 'ID';}
"NULL"                    {return 'NULL';}
"WHERE"                   {return 'WHERE';}
"SELECT"                  {return 'SELECT';}
"FROM"                    {return 'FROM';}
","                       {return ',';}
"COUNT"                   {return 'COUNT';}
"TOP"                     {return 'TOP';}
"("                       {return '(';}
")"                       {return ')';}
<<EOF>>                   {return 'EOF';}


\`                                         { this.begin('backtickedValue'); return 'BACKTICK'; }
<backtickedValue>[^`]+                     { return 'VALUE';}
<backtickedValue>\`                        { this.popState(); return 'BACKTICK'; }


/lex


%left 'AND' 'OR'

%start Pql


%% /* language grammar */

Pql
 : SelectStatement EOF                       { console.log('ok'); return $1 }
 ;

SelectStatement
 : 'SELECT' SelectList SourceExpression      { return { type: 'SELECT', selectList: $2, source: $3 } }
 ;

SelectList
 : SelectSpecification                        -> [ $1 ]
 | SelectList ',' SelectSpecification         -> [ ...$1, $3 ]
 ;

SelectSpecification
 : 'COUNT'                                    -> { type: 'COUNT' }
 | 'TOP' 'NUMBER'                             -> { type: 'TOP', value: Number($2) }
 ;


SourceExpression
 : FromClause OptionalSelectConditions        -> { type: 'SOURCE_LIST', source: $1, filters: $2 }
 ;


FromClause
 : 'FROM' SourceReferenceList                 -> $2
 ;

SourceReferenceList
 : SourceReferenceList ',' SourceReference      -> [ ...$1, $3 ]
 | SourceReference                              -> [ $1 ]
 ;

SourceReference
 : 'ID' 'NUMBER' 'COMMENT' BacktickedIdentifier     -> { type: 'SOURCE_NODE', id: $2, comment: $4 }
 | 'ID' 'NUMBER'                                    -> { type: 'SOURCE_NODE', id: $2 }
 ;

BacktickedIdentifier
 : 'BACKTICK' 'VALUE' 'BACKTICK'                    -> $2
 | 'BACKTICK' 'BACKTICK'                            -> ''
 ;


OptionalSelectConditions
 : OptionalWhereClause                        -> $1
 ;


OptionalWhereClause
 :                                            -> null
 | WhereClause                                -> $1
 ;

WhereClause
 : 'WHERE' SearchCondition                    -> { type: 'WHERE', conditions: $2 }
 ;

SearchCondition
 : FilterReferenceList                        -> $1
 | 'NULL'                                     -> null
 ;

IDReference
 : 'ID' 'NUMBER' 'COMMENT' BacktickedIdentifier     -> { type: 'ID_NODE', id: $2, comment: $4 }
 | 'ID' 'NUMBER'                                    -> { type: 'ID_NODE', id: $2 }
 ;

DateReference
 : BacktickedIdentifier                       -> { type: 'DATE', value: $1 }
 ;

TimestampReference
 : 'NUMBER'                                   -> { type: 'TIMESTAMP', value: Number($1) }
 ;

FilterReferenceList
 : AndFilterReferenceList                                               -> $1
 | OrFilterReferenceList                                                -> $1
 | FilterReference                                                      -> { type: 'FILTER_SINGLE', detail: $1 }
 ;


AndFilterReferenceList
 : '(' AndFilterReferenceList ')'                                       -> $2
 | AndFilterReferenceList 'AND' OrFilterReferenceList                   -> { type: 'FILTER_AND', list: [...$1.list, $3] }
 | OrFilterReferenceList 'AND' AndFilterReferenceList                   -> { type: 'FILTER_AND', list: [$1, ...$3.list] }
 | OrFilterReferenceList 'AND' OrFilterReferenceList                    -> { type: 'FILTER_AND', list: [$1, $3] }
 | AndFilterReferenceList 'AND' FilterReference                         -> { type: 'FILTER_AND', list: [...$1.list, $3] }
 | FilterReference 'AND' FilterReference                                -> { type: 'FILTER_AND', list: [$1, $3] }
 | FilterReference 'AND' AndFilterReferenceList                         -> { type: 'FILTER_AND', list: [$1, ...$3.list] }
 | FilterReference 'AND' OrFilterReferenceList                          -> { type: 'FILTER_AND', list: [$1, $3] }
 ;


OrFilterReferenceList
 : '(' OrFilterReferenceList ')'                                        -> $2
 | OrFilterReferenceList 'OR' AndFilterReferenceList                    -> { type: 'FILTER_OR', list: [...$1.list, $3] }
 | AndFilterReferenceList 'OR' OrFilterReferenceList                    -> { type: 'FILTER_OR', list: [$1, ...$3.list] }
 | AndFilterReferenceList 'OR' AndFilterReferenceList                   -> { type: 'FILTER_OR', list: [$1, $3] }
 | OrFilterReferenceList 'OR' FilterReference                           -> { type: 'FILTER_OR', list: [...$1.list, $3] }
 | FilterReference 'OR' FilterReference                                 -> { type: 'FILTER_OR', list: [$1, $3] }
 | FilterReference 'OR' OrFilterReferenceList                           -> { type: 'FILTER_OR', list: [$1, ...$3.list] }
 | FilterReference 'OR' AndFilterReferenceList                          -> { type: 'FILTER_OP', list: [$1, $3] }
 ;

FilterReference
 : TypeAction TimeRange                         -> { type: 'FILTER_NODE', action: $1, range: $2 }
 | TypeAction                                   -> { type: 'FILTER_NODE', action: $1 }
 ;

TypeAction
 : 'USER' ActionReference                       -> { type: 'USER_ACTION', detail: $2 }
 | 'TOPIC' ActionReference                      -> { type: 'TOPIC_ACTION', detail: $2 }
 ;

ActionReference
 : 'DO' IDReference 'TO' IDReference            -> { action: $2, target: $4 }
 | 'DO' IDReference                             -> { action: $2 }
 ;

TimeRange
 : 'RANGE' DateReference 'UNTIL' DateReference                  -> { type: 'RANGE', from: $2, to: $4 }
 | 'RANGE' TimestampReference 'UNTIL' TimestampReference        -> { type: 'RANGE', from: $2, to: $4 }
 ;

