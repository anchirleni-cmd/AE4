import{saveDraft}from'./storage.js';
function clean(v){return(v||'').replace(/\D/g,'')}
function age(d){const t=new Date(),x=new Date(d);if(isNaN(x))return NaN;let a=t.getFullYear()-x.getFullYear();const m=t.getMonth()-x.getMonth();if(m<0||(m===0&&t.getDate()<x.getDate()))a--;return a}
function err(i){i.classList.add('is-invalid');i.setAttribute('aria-invalid','true')}
function ok(i){i.classList.remove('is-invalid');i.removeAttribute('aria-invalid')}
export function setupValidation(root=document){const f=root.querySelector('#form-cadastro');if(!f)return;
function v(i){if(!i.checkValidity()){err(i);return false}if(i.id==='cpf'&&clean(i.value).length!==11){err(i);return false}if(i.id==='telefone'&&clean(i.value).length<10){err(i);return false}if(i.id==='cep'&&clean(i.value).length!==8){err(i);return false}if(i.id==='nascimento'&&(age(i.value)<16||isNaN(age(i.value)))){err(i);return false}ok(i);return true}
f.addEventListener('submit',e=>{e.preventDefault();let okAll=true;f.querySelectorAll('input,select').forEach(el=>{if(!v(el))okAll=false});if(okAll){alert('Cadastro validado!');localStorage.removeItem('cadastro-draft');f.reset()}else{alert('Revise os campos destacados.')}});
f.addEventListener('input',()=>saveDraft(f));f.querySelectorAll('input,select').forEach(el=>el.addEventListener('blur',()=>v(el)));}