import"./assets/styles-2a69ba04.js";const s=document.querySelector(".feedback-form"),m="feedback-form-state";let a="",e="";const r=JSON.parse(localStorage.getItem(m));r&&(s.elements.email.value=r.email||"",s.elements.message.value=r.message||"");s.addEventListener("input",o);const t={};function o(l){a=l.currentTarget.elements.email.value.trim(),e=l.currentTarget.elements.message.value.trim(),a===""&&delete t.email,e===""&&delete t.message,a&&(t.email=a),e&&(t.message=e),localStorage.setItem(m,JSON.stringify(t))}s.addEventListener("submit",l=>{if(l.preventDefault(),e==="")return alert("Please enter a message");console.log({email:a,message:e}),localStorage.clear(),s.reset()});
//# sourceMappingURL=commonHelpers2.js.map
