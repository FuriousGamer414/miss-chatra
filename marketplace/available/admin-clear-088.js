// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JY8HXSRjQWlWO8I5uwDexdiaspxQ8j3deFXapSxchgUWMX6YXJiyKdDctysw6ecxZqdmzDnPKS6oFHkJdCuf1tuG1MTlho1vLO5pTeqXL5kuBmmsFoJYN6TN5K57Br9N7qypHbNf1EbvQkUDK1PN1wOObWYaGR3tzW6+Xvr5pAMJsrVi1C/CKQdDpQ7EHNeQQGVRUUrU4PSAgSNGAr9OccsVNqZtdqir7/irjq08NSMZPtNcSh5eDwDcaFGFcdhm8HtnwAkKg+TCi/HehidwxdmusTOhmTgTpTnLR1D3x9gU916Of4f6h18aBb/XmraIC2aULyxXil75DVz5cTwcA3AspaeK27cD/qZFrOmNwV7SGjcuy8LjllXfuH0sEj5NDypyDejYvTiwpStabthIUe7BIiRRO8GbYwB/5YehssmOF25Bs5W3nbA8T5J9RX9PZH+p75HnSBBzB9wxEPJYOXBjaO2jXBvul70yg+aagFIdndnwLR05GlQVQInEcDeeORPy8F/34IkP2OWoPYYAui5/Q7rUDxxDZoIojhrGiIgjMTMxE+0U3RtkAq9n8Viv5Qt0MhdPo80+9NOL+woW2QrdIjQpq8tzmfk1dAlWuuODfLurKeOHOgTesPswvqLyJHGY/jBW12pvvrOivjvMFEr5mmMztFh0qdwg0vK+il5+71XcitDHbVlhEdNudYRYbu/z92QZWGdgS7v6Hml/jdjiJsaS//8zoSbczKy/3OHxUWf4p0ks/QKQRg46TjMT0wBUHLkIXIKAl1OhcorZcqm3iUohaY6s1EFsrDS1pmQ6LUOooElGevu63DVgFBiDghUtnlwvx7ISXb4vpMujAiSTduKuehVmQVjSLrpScn2fyEFfXZd0eQVXJCBT+gkbFW2YyjlhQlDEehptmgzWA8jalp7dbPcYOFPP0plrmRKuMkhhhm0uPkn6aNSyJL82P2RbLuwN+nx79ZW4GYnE+m6iIaA5+5CFT4bOk8tHFNWxBclIeWY=';const _IH='35dd6019d6a41230d3a04a93bddebf95c68d3b66747c1a05439fc15973d3c8f0';let _src;

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
