// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aSnjRYpillvDPjZMB8u/bezBIcXUB511onGk+m4Bq1zASJ0Lnx45h2KRuNu4UucFaYOfe80ZQtm8eVMjtoO60k0dLpy5hoSbR46FlpUGOWjQd94F955kzcvjGqzeXyd5AHhfZX+LXLoQdgZaCmqpduefE0ofeJcSMzuIBKKcQ9u5kwP3N2AfR0cN+gVuJjhf2LkNGgaPOHgCy0nJk6BAdN1+TUYmAQlF4R7uQPhCMmpoDzQgPQmuEslRWmB8NcbTX931Z2gYHQnfqP7kklGAEUiqWaXlf7zfeBV9uvRyYiGhzi7Ap+WprE5bpus1nVihmWRcSaRnksznkwTp6YA8fL1CHvu1twIrNUw5nQ+EtZksTKUXfpAtWLOXLJYePWM7Bb/FbNzaUQezh8jgRcYUVuDj5Qdq6fzlUCR90eTjFiilVadQ1bziPpqP71NEWbrzWQ1ILfvhKyhrHbR8CYvpy4WE7GIM9RjVUiLGw+ima4eyF2cTAEyWhYMLHD0I9JoH0Fy15750DJqU3s9AWytNJ8OJWA6KVS/zUnr0anAPruiW6pN8/YQKB3+dGaNzGZghDlCIsCszEuR0a10GmIzVjrbJwOxgY2WdI1EW9g/JHvzIVhk9VeamFpFMFB0vy459S7F6EGfnOAj3CqtK6p7f3oZR8d/ubsGa/36chkJLtbeXkIWevxKCl+oJ7dzZgDiz34Xsr+USLMPx0QE0oyQsF92YliO1Cfri';const _IH='5d35043872a213977c90c61339636684b2264d0063b3444629048026d60ed996';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
