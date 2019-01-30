## 她
#### 她是谁
+ 是一个visual query-builder
+ 是一个parser + generator
+ DSL代码样例
```sql
SELECT COUNT
 FROM ID 233
  WHERE
    (
      USER DO ID 1 TO ID 2 COMMENT `报表名字` RANGE 123 UNTIL 456
      OR 
      USER DO ID 13 TO ID 23 RANGE `2134123` UNTIL `23432434`
      )
    AND (
     USER DO ID 4 TO ID 5 
     OR USER DO ID 7 TO ID 8
     OR TOPIC DO ID 7 TO ID 8
     OR ( TOPIC DO ID 7 TO ID 8 AND TOPIC DO ID 7 TO ID 8 )
    )
```
