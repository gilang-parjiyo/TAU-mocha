# Basic usage mocha js
1. Create describe (test suite).
2. Create it(test cases).
3. Create hook :
    - after
    - before
    - afterEach
    - beforeEach
4. Test feature 
    - only()
    - skip()
    - pending
5. Timeout
    - describe level
    - it level
    - hook level
6. Reporter
    - JSON, dot, SPEC etc.
    ```
    mocha test --reporter dot
    ```
7. How to run test :
    - run all test suite
    ```
    npm test 
    ```
    - run specific test suite
    ```
    npm test .\test\basic.js
    ```

