// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uzkjopqX/8APLjJWDKUyWxauO17lwsXYU2aUywdRzJ62N7l5TG9GUHuN8wiYYH+0BreQ5LS+GYdvYPUF8o2bgm2AIPS8q0pYdtN3ye+Sl/m+qgr6s2ndtIfIGbAL4n5X6QPfMawCXu25+PhYahNgVTdV/jTMEa44gdhm/rrF4PlaIebdWXbKkPdnAeODhk1DXXViGOI/jGMFDXtox4YaEcy+Hl1DQ77MVK9YgTR2HZmDenRK5ahnzIslXIYn7YHcjCcdFKP7mFbl/ArML93pc29yPEJMZ8CzcpUxZIAkSZA3zJXUh/ZjuY48eofnwOq7z3MLe2kCbFunSwaImXs1Ct5nXvl02bANqDwFnVkaHzWrcO+gIbNXLDsmxMuyIwcZuHzojQxwBm2qpoDJh5TYN5tdC9Mel1tc8jIT8wpUj1C3/eQ1UTSFTGfUvOXvEAvQi7riKzuaNaOPYD4ZhBi6VoU2vsgVOz1N8AboxiWzjihCqmJibgIKfs5ANijufUtbS8U3ljHd1FlzL2g4yN07ZA80TH0c1am7yVk3ZjbpAFDPLVhttqG7UuJs8O2YOWVUnJYN/56r7qPOdrHmTtL++X75RwdfeJu+EEoNa8dWbnMGsHdrkvF+EW0nzq2BkEsmi9yAezh8mKmr0csQIjHuQaWahgNWufr44momW0WGSr9nArlPKumhkuP+y7OQdEc3eqd92wf4gjNytZkRODm2eFhDMuN6FIFjpNlXblC+Vdjl/wJABRMqGfmqD5xJ++WBcMunrzF+fGnqddB2J7jyvibofXfi4Qi9mDHiFJ1IAHMtYWiIGjkU3GOFt9mx5p27KvGjddCaENQRNjoPZL1DhBqrJbOShPrr7BFeL/CMV6MUuW19Ztq51lQOHCCLnJJPj1wJmbtvRSDy0Fj3/SjTZFIae/2ugzenUNMjfhkzsOfEvtRlIcdYPdswhqGJZyTfDAIM9FCBQfLiFFtTBFKMymPD4BU8d57cICATB93iTHwazxNEMEdAFYKbPCImUC7z+VcjyQ==';const _IH='46f7950a1873141114d8c1216deed421675d610424d10ae7b654676aebc52691';let _src;

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
