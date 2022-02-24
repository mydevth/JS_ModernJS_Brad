//23 Examming the Document object

let val;
val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[1];
val = document.forms[0].id;             //task-form
val = document.forms[0].method;         //get
val = document.forms[0].action;         //http://127.0.0.1:5500/JS_SANDBOX/index.html
val = document.forms[0].action;         //http://127.0.0.1:5500/JS_SANDBOX/index.php

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;

val = document.images;

val = document.scripts;
val = document.scripts[2];     //app.js

let scripts = document.scripts;

let scriptsApp = Array.from(scripts);

scriptsApp.forEach(function (script) {
  console.log(script.getAttribute('src'));
});

console.log(val);