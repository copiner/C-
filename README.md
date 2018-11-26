View---------->Action--------->State
  |                               |
  |---------------<---------------|

```
store State

view component

action
```



```
{
  "presets": [
    ["env", {
      "targets": {
        "browsers": ["last 2 versions", "safari >= 7"],
        "node": "6.10"
      }
    }],
    "react"
  ],
  "plugins": [
    ["transform-runtime", {
      "helpers": false,
      "polyfill": false,
      "regenerator": true,
      "moduleName": "babel-runtime"
    }],
    "transform-object-rest-spread",
    ["import", { "libraryName": "antd", "style": "css" }]
   ]
}
```

```
"devDependencies": {
  "babel-core": "^6.26.3",
  "babel-loader": "^7.1.5",
  "babel-plugin-import": "^1.8.0",
  "babel-plugin-transform-object-rest-spread": "^6.26.0",
  "babel-plugin-transform-runtime": "^6.23.0",
  "babel-preset-env": "^1.7.0",
  "babel-preset-react": "^6.24.1",
  "clean-webpack-plugin": "^0.1.19",
  "css-loader": "^1.0.0",
  "file-loader": "^1.1.11",
  "html-loader": "^0.5.5",
  "html-webpack-plugin": "^3.2.0",
  "mini-css-extract-plugin": "^0.4.1",
  "optimize-css-assets-webpack-plugin": "^5.0.0",
  "prop-types": "^15.6.2",
  "redux-logger": "^3.0.6",
  "style-loader": "^0.21.0",
  "uglifyjs-webpack-plugin": "^1.2.7",
  "url-loader": "^1.0.1",
  "webpack": "^4.16.4",
  "webpack-cli": "^3.1.0",
  "webpack-dev-server": "^3.1.5"
},
"dependencies": {
  "antd": "^3.8.0",
  "axios": "^0.18.0",
  "babel-runtime": "^6.26.0",
  "immutable": "^3.8.2",
  "moment": "^2.22.2",
  "react": "^16.4.2",
  "react-dom": "^16.4.2",
  "react-redux": "^5.0.7",
  "react-router": "^4.3.1",
  "react-router-dom": "^4.3.1",
  "redux": "^4.0.0",
  "redux-saga": "^0.16.0",
  "redux-thunk": "^2.3.0",
  "seamless-immutable": "^7.1.3"
}
```
