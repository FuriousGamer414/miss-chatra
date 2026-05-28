// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ509DJ+yBYCXum8n/EgGcNWB+ksiK379aSoMyLbl4wFVxoNp0gwlmM9T6nrABro23+reBsp0zu8E6avGLCNzrm0Xd/sXVhqBK1iEMj9hK8EOnI+Aku+JfrxtDInt95ac6Byd38w269c+zlCcwroPmeIo4F+GPCiIH6CdOswXaZ4F7xqLXP+T0fxbmEpcf0bsj7OoK2s7G5bIB0FnIYf+VnFTIDF/wZDOz+RmpdjzckUTR3pP0I1z47CEqHyrrwouIc51nt/T85/ZUqowA8Q31wkFQM4o73YI8/NePIFQme8OE+ZkVOcCgMK/XziKYswLATFGoesfxS24Vkggf/IGdGDAp1FPyQ+5l8kuLIJlCZFEK/VWAyIzVNVQMB7LeKxd9NHUkKPG8QmEffamWj5e/8RkepSalzpORgFE5dXGLfVGqdzxRrLGx8nLM7PF9dq4q9gGVrjwS/QlNC0F4pqjovogr0S2aiZgvr1bpgCozPCYl4tuZhWbx6Ud5OwtEj81877Qu4OSzm+3ee/x/CpR2tEa+zGOsfjgebBPPmoxcp2ZuNf/I9LOtOx19QYWoxoTG7zG0dZQC4NfbwrfNNlsPRUmkwerLQVMwOPu/FuD/q+gpR2BvN+vY/iyZQHoZVD89FFsIazy/rpdnWAvkpeNXTbXuT+OYaak1+8ltvPQs02eE/tZD0yf1PDVeIzwfXhvjxzSD+OalOHLXcgS394W36WBszmlPzAfTSrfa/fIj4z6lPudIMuM';const _IH='87e0a0fcd2df907c5ff0c575954e5e1e05c90d55bf39705f38c59fbb6c0be600';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
