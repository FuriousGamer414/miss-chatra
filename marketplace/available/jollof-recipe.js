// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:24 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/Uqy1Q64fHzrsMiQhbGXKQl8t/qSlMm4P2ITYyQ+XJOczAo4PiUPpbNRNLL9+4u96UiVboHkytxozUg+5vFuV1qLXEAEZGKPwAtsBmivQxsOQFH/ESFgjQPd0VL7LF1C0xnvA/lpv6H0/v3Ll8m7Ce0GmvkMArUTE3yi6ZFsc28GRBSbwEYE6QhkHoeGVt0uaDnWC9CRxauk1eaPlVg1hZvMOo1TllJ/NmbCDwTfUBC2VXKGVPYivFKdqRhpiAjCIJoe4S4JCRHRT+mcofTD795aTek3zWaeZA36EWlX+QBLFfXHdoLMc1dKRvMYUBK6VMPwOuPDKjJjRZ0X/2CK5gT3EYenbKex6wLYg0dWuU+VBFxGUxvZEdbVvBuVN2ZdZxHuhSFq5e5kwTeB7SYzM6Wuv5SuFeoe461bMFSHwLG2wywf3wYDV+CZI8BpMdlIX2NIlfzzxhXWOEak2ZZpyCk8WzlyAbflra22DvZ9OdfggKggeo9hr7+Srgc81estSoG+9kF1sfSZ8i/TDxuf5P/UwXiBO6EzwKUfitoMymmtfjgMiaGBPbywJXfW77Xllp+6q7VxYsfrmtF0c6FosP4nrU=';const _IH='b72a0567bb735ed102dd0dc72938fc930f1940c80a5f79654c753c3dcd9310bd';let _src;

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
