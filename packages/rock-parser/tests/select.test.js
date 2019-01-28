import Pql from '../pql'

const pql = `
SELECT COUNT
 FROM ID 233
  WHERE
    (
      USER DO ID 1 TO ID 2 COMMENT \`你是不是傻报表\` RANGE 123 UNTIL 456
      OR 
      USER DO ID 13 TO ID 23 RANGE \`2134123\` UNTIL \`23432434\`
      )
    AND (
     USER DO ID 4 TO ID 5 
     OR USER DO ID 7 TO ID 8
     OR TOPIC DO ID 7 TO ID 8
     OR ( TOPIC DO ID 7 TO ID 8 AND TOPIC DO ID 7 TO ID 8 )
    )
`;

it('renders without crashing', () => {
  const result = Pql.parser.parse(pql);
   console.info(JSON.stringify(result, null, 2)) //eslint-disable-line
  expect(result).toBe('ok')
});
