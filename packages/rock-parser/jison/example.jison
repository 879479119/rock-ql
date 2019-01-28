/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex

%%
\s+                   /* skip whitespace */
[0-9]+("."[0-9]+)?\b  return 'NUMBER';
"*"                   return '*';
"/"                   return '/';
"-"                   return '-';
"+"                   return '+';
"^"                   return '^';
"("                   return '(';
")"                   return ')';
"PI"                  return 'PI';
"E"                   return 'E';



"RANGE"                   {return 'RANGE';}
"UNTIL"                   {return 'UNTIL';}
"DO"                      {return 'DO';}
"TO"                      {return 'TO';}
"USER"                    {return 'USER';}
"TOPIC"                   {return 'TOPIC';}
"AND"                     {return 'AND';}
"OR"                   {return 'OR';}
"VALUE"                   {return 'VALUE';}
"COMMENT"                   {return 'COMMENT';}
"ID"                   {return 'ID';}
"NULL"                   {return 'NULL';}
"WHERE"                   {return 'WHERE';}
"SELECT"                   {return 'SELECT';}
"FROM"                   {return 'FROM';}
","                   {return ',';}
"COUNT"                   {return 'COUNT';}
"TOP"                   {return 'TOP';}
"`"                   {return 'BACKTICK';}

<<EOF>>               return 'EOF';

/lex

/* operator associations and precedence */

%left '+' '-'
%left '*' '/'
%left '^'
%left UMINUS

%start expressions

%% /* language grammar */

expressions
    : e EOF
        {print($1); return $1;}
    ;

e
    : e '+' e
        {$$ = $1+$3;}
    | NUMBER
        {$$ = Number(yytext);}
    | E
        {$$ = Math.E;}
    | PI
        {$$ = Math.PI;}
    ;



Type
 : 'USER'
 | 'TOPIC'
 ;














 | FilterReference 'OR' FilterReference                                 -> { type: 'FILTER_OR', list: [$1, $3] }


