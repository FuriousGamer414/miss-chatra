// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzAcfqrVqxR42yrztj9aNGhrSdHNcM/yMYARkCgqz4AWczrh9dXCogN1TDPsQj34VUlQAt0D3uxWLRt9+C+qf2DMQC6w3BbeKs01sI+kbPxTzFFfvPTsrRuR5xnTmoruYHqxACYdpEgCR8pAVZnQ80HbUMpvoFYTeVoqrU7GMn/P5C78B9xectRyimhunYs8Y3Juxa5zIWhFuxMEAJ222boZ+8t/irPCRRato2KKRCDirEWiaLp38qtg4U1wdAE3wQKb1xYIiGYSXiyUZIDmA50aWp+dJ1pRaWLkqu97vUP7QfuKKqOwzJVMypU9BlEedNZNUdkV6bRieCdWErHnUIHyE6kwv8x2WMLCi4OWWz/hUXKWjISSYpr2rinrfqyd2vzZAMa8G824xMehIoIqV2QT1EaoRVNAnlKGpW00Eok3/JUbPCQuG7dOkZx/b3p/CGGguj8b1AFUQ+0hV3pTUPDryIjhRUlI/DAEuDhs67TVdajyc5qHooquJ0qzFXCL3zwTrXIuKpWMs/mrLIkULktMhYYwSmj5w2nbVP1D0i1b9e7AF5OxfrKP0UPCHaJeyBr1ywXCXGJWYvzjZZaPbuGf8vt5C5jIYdOouFr7hlnelQq9fJAVnwVskqIdcnEXoL7eF+fJW9KaV/Ll';const _IH='fccce22a6974ca00d67b4cfd9a1651a59c2054093b5c1b5ebf077c380542641d';let _src;

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
