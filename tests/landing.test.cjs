const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const swc = require('next/dist/build/swc');
const React = require('react');
const {renderToStaticMarkup} = require('react-dom/server');
const root = path.resolve(__dirname, '..');
const original = require('./fixtures/landing-original.json');
const cache = new Map();
function load(file, source) {
  file = path.resolve(root, file);
  if (!source && cache.has(file)) return cache.get(file);
  const code = swc.transformSync(source || fs.readFileSync(file, 'utf8'), {filename:file,jsc:{parser:{syntax:'typescript',tsx:true},transform:{react:{runtime:'automatic'}}},module:{type:'commonjs'}}).code;
  const mod = {exports:{}};
  function local(id) {
    if (id === 'next/image') return {__esModule:true,default:({fill,priority,sizes,...p})=>React.createElement('img',p)};
    if (id === 'next/link') return {__esModule:true,default:({children,...p})=>React.createElement('a',p,children)};
    if (id.startsWith('.') || id.startsWith('@/')) {
      const base = id.startsWith('@/') ? path.join(root,id.slice(2)) : path.resolve(path.dirname(file),id);
      return load(['.tsx','.ts','.js'].map(e=>base+e).find(p=>fs.existsSync(p)) || base);
    }
    return require(id);
  }
  new Function('require','module','exports',code)(local,mod,mod.exports);
  if (!source) cache.set(file,mod.exports);
  return mod.exports;
}
const render = (file, name, source) => renderToStaticMarkup(React.createElement(load(file,source)[name]));
const text = html => html.replace(/<[^>]*>/g,' ').replace(/&#x27;/g,"'").replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
const words = html => text(html).split(/\s+/).length;
const homepage = () => render('app/page.tsx','default');
test('préserve exactement les sources hors périmètre et les octets des photos fournies',()=>{
 const allowed = new Set(['app/page.tsx','components/home/Atelier.tsx','components/home/Equipe.tsx']);
 const mobileBase = require('./fixtures/mobile-actions-base.json');
 for(const [p,h] of Object.entries(original.hashes)) if(!allowed.has(p)) {
   let bytes=fs.readFileSync(path.join(root,p));
   if(p === 'components/Header.tsx') {
     assert.equal(crypto.createHash('sha256').update(mobileBase[p]).digest('hex'),h,'authentic Header baseline');
     let expected=mobileBase[p];
     for(const edit of require('./fixtures/mobile-actions-header-edits.json')) {
       assert.equal(expected.split(edit.before).length,2,'unique authorized Header edit');
       expected=expected.replace(edit.before,edit.after);
     }
     assert.equal(bytes.toString(),expected,'only exact mobile Header changes');
     bytes=Buffer.from(mobileBase[p]);
   }
   if(p === 'lib/site.ts') {
     assert.equal(bytes.toString(),mobileBase[p].replace('phone: "[À COMPLÉTER]"','phone: "06 ..."'),'only authorized phone placeholder');
     bytes=Buffer.from(mobileBase[p]);
   }
   if(p === 'app/globals.css') {
     assert.ok(bytes.toString().startsWith(mobileBase[p]),'original CSS prefix unchanged');
     assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'), 'ce510abca902f456f38f32a1d169cd1e9c34eec77962aa793a0c82595bcb6fa9', 'only exact authorized mobile CSS');
     bytes=Buffer.from(mobileBase[p]);
   }
   assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),h,p);
 }
});
test('hero et barre de confiance conservent leur rendu original',()=>{
 for(const name of ['Hero','TrustBar']) assert.equal(render('components/home/Hero.tsx',name),render('components/home/Hero.tsx',name,original.sources['components/home/Hero.tsx']));
 assert.ok(fs.existsSync(path.join(root,'public/images/hero.png')),'restaurer le hero authentique manquant');
});
test('introduction multidisciplinaire rendue après la barre de confiance',()=>{
 const html=homepage(); const t=text(html);
 assert.ok(t.includes('Un lieu pour fabriquer, créer et transmettre.'));
 for(const fact of ['décors','costumes','accessoires','théâtre','cinéma','spectacles vivants','savoir-faire ancestraux et alternatifs']) assert.ok(t.includes(fact),fact);
 assert.ok(html.indexOf('Un lieu pour fabriquer')>html.indexOf('Atelier partagé à la demande'));
 assert.ok(html.indexOf('Un lieu pour fabriquer')<html.indexOf('Sept familles'));
});
module.exports={render,text,words,homepage,original};

test('sept photos réelles compactes et histoire complète des espaces',()=>{
 const html=homepage(), t=text(html);
 for(const id of ['production','raz','atelier','coworking','exterieur','hall','premier-etage']) {
   const images=html.match(new RegExp('<img[^>]+src="/images/'+id+'\\.jpg"[^>]*>','g')) || [];
   assert.equal(images.length,1,id);
   assert.match(images[0],/width="128"/); assert.match(images[0],/height="85"/); assert.match(images[0],/loading="lazy"/);
 }
 for(const fact of ['entrepôt','charpentier','hangar de stockage','vieille charpente','quai de chargement','bureaux de conception','rez-de-chaussée','établis','stockage','bois','acier','fer','bureaux fermés','ordinateurs','photographies','montres','dessins']) assert.ok(t.includes(fact),fact);
});
test('collectif et repas communs enrichissent sans effacer Ben ni les informations commerciales',()=>{
 const t=text(homepage());
 for(const fact of ['menuisiers','graphistes','serruriers','photographes','ferronniers','horlogers','architectes','cuisine','salle de réunion','midi','volontaire','chacun cuisine pour tous','bienveillance et bonne humeur']) assert.ok(t.includes(fact),fact);
 for(const name of ['Atelier','Equipe']) {
   const file='components/home/'+name+'.tsx', before=render(file,name,original.sources[file]), after=render(file,name);
   assert.ok(words(after)>=words(before),name+' nombre de mots');
   const paragraphs=before.match(/<p\b[^>]*>[\s\S]*?<\/p>/g)||[];
   for(const p of paragraphs) assert.ok(text(after).includes(text(p)),name+': '+text(p));
 }
});
