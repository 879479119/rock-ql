import Pql from '../jison/test'

const pql = `
SELECT COUNT
 FROM ID 233
  WHERE
    (
      USER DO ID 1 TO ID 2
      OR 
      USER DO ID 13 TO ID 23
      )
    AND (
     USER DO ID 4 TO ID 5 
     OR USER DO ID 7 TO ID 8
     OR TOPIC DO ID 7 TO ID 8
    )
`;

it('renders without crashing', () => {
  const result = Pql.parser.parse(pql);
  expect(result).toBe('ok')
});
