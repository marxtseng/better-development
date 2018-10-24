import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { solarizedlight } from "react-syntax-highlighter/styles/prism";

const ESLintSample = () => {
  const codeString = `  const human = {
    gender: 'male',
    age: 20,
    blood: 'A'
  };
  
  console.log('human["gender"] :', human['gender']);

  console.log('human.gender :', human.gender);
  
  const { gender } = human;

  console.log('gender :', gender);`;

  return (
    <SyntaxHighlighter language="javascript" style={solarizedlight}>
      {codeString}
    </SyntaxHighlighter>
  );
};

const ESLintConfig = () => {
  const codeString = `  {
    "extends": ["airbnb", "prettier"],
    "parser": "babel-eslint",
    "plugins": ["react", "jsx-a11y", "import", "prettier"],
    "rules": {
      "prettier/prettier": "error",
      "react/jsx-filename-extension": "off",
      "camelcase": "off",
      "no-undef": "off",
      "object-curly-newline": "off"
    }
  }`;

  return (
    <SyntaxHighlighter language="javascript" style={solarizedlight}>
      {codeString}
    </SyntaxHighlighter>
  );
};

const PrettierConfig = () => {
  const codeString = `  {
    "singleQuote": true,
    "trailingComma": "all"
  }`;

  return (
    <SyntaxHighlighter language="javascript" style={solarizedlight}>
      {codeString}
    </SyntaxHighlighter>
  );
};

const GulpSample = () => {
  const codeString = `  var gulp = require('gulp');
  var pug = require('gulp-pug');
  var less = require('gulp-less');
  var minifyCSS = require('gulp-csso');
  var concat = require('gulp-concat');
  var sourcemaps = require('gulp-sourcemaps');
  
  gulp.task('html', function(){
    return gulp.src('client/templates/*.pug')
      .pipe(pug())
      .pipe(gulp.dest('build/html'))
  });
  
  gulp.task('css', function(){
    return gulp.src('client/templates/*.less')
      .pipe(less())
      .pipe(minifyCSS())
      .pipe(gulp.dest('build/css'))
  });
  
  gulp.task('js', function(){
    return gulp.src('client/javascript/*.js')
      .pipe(sourcemaps.init())
      .pipe(concat('app.min.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('build/js'))
  });
  
  gulp.task('default', [ 'html', 'css', 'js' ]);`;

  return (
    <SyntaxHighlighter language="javascript" style={solarizedlight}>
      {codeString}
    </SyntaxHighlighter>
  );
};

const NginxConfig = () => {
  const codeString = `  server {
    listen       80;
    server_name  classroom.marxtseng.io;
    return 301 https://$host$request_uri;
  }
  
  server {
    listen       443 ssl;
    server_name  classroom.marxtseng.io;
  
    ssl_certificate      /usr/local/etc/nginx/ssl/server.crt;
    ssl_certificate_key  /usr/local/etc/nginx/ssl/server.key;
  
    ssl_session_cache    shared:SSL:1m;
    ssl_session_timeout  5m;
  
    ssl_ciphers  HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers  on;
  
    location / {
      proxy_pass http://127.0.0.1:3000;
      proxy_http_version 1.1;
      proxy_set_header 'Access-Control-Allow-Origin' '*';
      proxy_set_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, PUT, DELETE';
      proxy_set_header 'Access-Control-Allow-Headers' 'X-Requested-With, Accept, Content-Type, Origin';
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-for $proxy_add_x_forwarded_for;
      proxy_set_header Connection 'upgrade';
      proxy_set_header Host $host;
      proxy_cache_bypass $http_upgrade;
      proxy_set_header 'Access-Token' $http_access_token;
    }
  }`;

  return (
    <SyntaxHighlighter language="javascript" style={solarizedlight}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default {};
export { ESLintSample, ESLintConfig, PrettierConfig, GulpSample, NginxConfig };
