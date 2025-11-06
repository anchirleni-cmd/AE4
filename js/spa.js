import{Templates}from'./templates.js';import{setupValidation}from'./validate.js';import{restoreDraft}from'./storage.js';
const routes={'/home':Templates.home,'/projetos':Templates.projetos,'/cadastro':Templates.cadastro};
function render(path){const main=document.querySelector('main#conteudo');const tpl=routes[path]||routes['/home'];main.innerHTML=tpl();if(path==='/cadastro'){setupValidation(main);restoreDraft(main.querySelector('form#form-cadastro'));}}
function onRoute(){const hash=location.hash||'#/home';render(hash.replace('#',''));}
export function mount(){window.addEventListener('hashchange',onRoute);onRoute();}