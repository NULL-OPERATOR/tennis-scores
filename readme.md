# TENNIS TEST TES :palm_tree:
##### scoring for a tennis game with redux.

scores a *game* (not set or match), also runs on node 8.9.0

[tennis rules][1]


clone & setup
```
$ git clone [repo]
$ cd tennis-scores
$ npm i
```

to run the dev server on default http://localhost:8080/
```
$ npm start
```

to run the tests
```
$ npm test
```

build and run the node server on default http://localhost:3000/
```
$ npm build
$ node server
```



- node: v8.9.0
- express: v4.16.2  
- react: v16.0.0  
- redux: v3.7.2  
- webpack: v3.8.1  

things I can't find:
- naming conventions for containers??
- is a component that returns null a bad idea?
- mapping components in containers? or have a separate component?
- App.js in containers or components?
- where to put tests
- as long as it's pure, the reducer is the best place for logic?


[1]: https://www.thoughtco.com/simple-introduction-to-tennis-scoring-for-beginners-3207375
