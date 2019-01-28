%%


\s                                         { /* skip whitespace */ }
'--'.*                                     { /* skip comments */ }
\d+                                        { return $1 }

'AND'                                      { return 'AND'; }
'OR'                                       { return 'OR'; }
'ASC'                                      { return 'ASC'; }
'FROM'                                     { return 'FROM'; }
'LIMIT'                                    { return 'LIMIT'; }
'NULL'                                     { return 'NULL'; }
'SELECT'                                   { return 'SELECT'; }
'TIMESTAMP'                                { return 'TIMESTAMP'; }
'TO'                                       { return 'TO'; }
'WHERE'                                    { return 'WHERE'; }



%left ';' ','

%start Pql


Pql
 : SelectStatement
 ;

SelectStatement
 : 'SELECT' SelectList SourceExpression
 ;

SelectList
 : SelectSpecification                 -> [ $1 ]
 | SelectList ',' SelectSpecification
 ;

SelectSpecification
 : 'COUNT'
 | 'TOP' 'VALUE'                -> $2
 ;


SourceExpression
 : FromClause OptionalSelectConditions
 ;


FromClause
 : 'FROM' SourceReferenceList
 ;

SourceReferenceList
 : SourceReference
 | SourceReferenceList ',' SourceReference  -> $3
 ;

SourceReference
 : 'ID' 'VALUE'               -> $2
 | 'ID' 'VALUE' 'COMMENT' BacktickedIdentifier


BacktickedIdentifier
 | 'BACKTICK' 'VALUE' 'BACKTICK'  -> $2
 | 'BACKTICK' 'BACKTICK'          -> ''
 ;


OptionalSelectConditions
 : OptionalWhereClause
 ;


OptionalWhereClause
 :
 | WhereClause
 ;

WhereClause
 : 'WHERE' SearchCondition  -> $2
 ;

SearchCondition
 | FilterReferenceList
 | 'NULL'
 ;

IDReference
 : 'ID' 'VALUE'               -> $2
 | 'ID' 'VALUE' 'COMMENT' BacktickedIdentifier
 ;

DateReference
 : BacktickedIdentifier
 ;

TimestampReference
 : 'VALUE'
 ;

FilterReferenceList
 : FilterReferenceList 'AND' FilterReference
 | FilterReferenceList 'OR' FilterReference
 | FilterReference
 ;

FilterReference
 : TypeAction TimeRange
 | TypeAction
 ;

TypeAction
 : Type ActionReference
 ;

Type
 : 'USER'
 | 'TOPIC'
 ;

ActionReference
 : 'DO' IDReference 'TO' IDReference
 | 'DO' IDReference
 ;

TimeRange
 : 'RANGE' DateReference 'UNTIL' DateReference
 | 'RANGE' TimestampReference 'UNTIL' TimestampReference
 ;

