"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const postcss=require("postcss");class Controller{constructor(e){this.name=e}isNodeExist(e,s){return e.some(e=>e.prop===s)}reducer(e,s){return this.isNodeExist(e,s.prop)||e.push(s),e}cleanRule(e){return e.nodes=e.nodes.reduceRight((e,s)=>this.reducer(e,s),[]),e}clean(e){return e.nodes=e.nodes.map(e=>this.cleanRule(e)),e}export(){return postcss.plugin(this.name,()=>e=>this.clean(e))}}module.exports=new Controller("discard-duplicates").export();