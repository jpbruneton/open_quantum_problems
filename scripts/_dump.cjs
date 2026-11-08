const path=require("path");const fs=require("fs");const vm=require("vm");const {transformSync}=require("next/dist/build/swc");
const root=path.resolve(__dirname,"..");const cache=new Map();
function loadApp(rel){const fn=path.resolve(root,rel);if(cache.has(fn))return cache.get(fn).exports;let src=fs.readFileSync(fn,"utf8");const {code}=transformSync(src,{filename:fn,jsc:{parser:{syntax:"ecmascript",jsx:true},target:"es2020",transform:{react:{runtime:"automatic"}}},module:{type:"commonjs"}});const m={exports:{}};cache.set(fn,m);const req=id=>{if(!id.startsWith("."))return require(id);const t=path.resolve(path.dirname(fn),id.endsWith(".js")?id:id+".js");return loadApp(path.relative(root,t).split(path.sep).join("/"));};vm.runInThisContext(`(function(module,exports,require){${code}\n})`,{filename:fn})(m,m.exports,req);return m.exports;}
const {ALL_PROBLEMS}=loadApp("app/data/problems.js");
const out=process.argv[2];fs.mkdirSync(out,{recursive:true});
for (const cat of [...new Set(ALL_PROBLEMS.map(p=>p.cat))]){
 let s="";
 for(const p of ALL_PROBLEMS.filter(p=>p.cat===cat&&!p.archive)){
  s+=`\n\n### ${p.id} [${p.status||"open"}] [${p.horizon}] ${p.title}\nSTATEMENT: ${p.statement}\nCONTEXT: ${p.context||""}\nREFS: ${(p.references||[]).map(r=>r.label).join(" | ")}\n`;
 }
 fs.writeFileSync(`${out}/cat-${cat}.txt`,s);
}
