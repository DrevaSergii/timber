"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const fs_1=require("fs"),postcss=require("postcss"),longhand=require("postcss-merge-longhand"),sorting=require("postcss-sorting");class default_1{constructor(s){this.options=s,this.plugins=[longhand,sorting(this.options.sort)]}clean(s){return new Promise((e,t)=>{fs_1.promises.readFile(s.from,{encoding:"utf8"}).then(e=>postcss(this.plugins).process(e,s)).then(({css:e})=>fs_1.promises.writeFile(s.to||s.from,e)).then(()=>e()).catch(s=>t(s))})}}exports.default=default_1;