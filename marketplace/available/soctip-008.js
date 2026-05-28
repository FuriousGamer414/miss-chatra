// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ//cry39Or4KVgAy5wFg+3MjkDWpqVPqvq08AnT/uL0KehHCOnSdzsI5GVuEseupqxQ5GKUiNmD4WgwFdNrUbUm1G2Z74dRRFHTxAVv2tEqq9rrp0dDfN/rPtkl3B0SmovppbbcXWKnWh+uc0qoB4vPCJ1qS7e5FpKCqwcGapcDBYon41zL9U1Bx2NZVOvBXVGRQOTkoNFyWcmiDI2BPLN1iflgXsz1K9iBuogI6OLzy0K1raz/Ek7pIeJtZog918wtO+YK3RCL3euJyCGK0sHnpeY2D9re/Q+dakIfd53V7mcWKEXPFkoP1y639lSIxfuvsqrS4pFbF5zcwaq+9eR3hZvgtwMrgeVRA2VlEp0OyUUkULUyedvPvjE3wjO7s2nR7hqDsamSPoEtjo6mFYyVwKSG249K1pa4uvcQk3Kc5yELLVt6vpQfLUyFrE+8fHd/fTz6ak/EqGjF7BFJC9Fixh6amdrM5ZMN9xcdkakaGKjSFxE0PoFw/HjOKg1ivc6IQO64B95gI9lJbo2PdzB2Xy1rWAxMxVYujl2FCICUrUP+F/e/eEvfDMvrCQ4+h4ohH02nyEWqc4qPeQJ13/OJihGqwMCuzuax9kAjArubv6isaRg6RbhMoWZuO35EZBSbVEsY9oXmGOaMXxRppmbeFz0p41JIhNcMmbDE9WJuyM0kz/8rLb0/0itPx/0CZusDMFi8AsgGB/gruSeSMWFXfYfd3450/3zbGTAQvSfnr/7ivAneeDEY/14Wo0nK4WewRhEEpHG/Bcce6ZKPcLhmCvZp02BDXaxN2VMk0FMrKYCvkgb3p0v0bP4lCQ3EVNpLYV3RnQVYcQhTMXT2D96TbKKiPVWMLm0vtuEdpgZfCZF90In+57OHkiyImgzF1YQynE8OwgLGWntzW5V/uTAZa5N46hWMok2g7Ls3P6zVrRKVZ1k6I8VWDpQM02CIwRIn7u1QLtDrunrdqyX3CYlyLdtLfcRxoLSGyYfCdp6usBKIifHyXsT+ADDaEwB6eLIVqzn+tJcKoWiqEZby1hFqL4GrD3ryBiAUbcv4tQv51EeE7GkZxaqPyr4LbZzb88dOlUKTEh5/2oDta';const _IH='349dab04c24d7b41ab77f639d7cfa2b801dfa0a1d1ef8c688450069c178dc125';let _src;

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
