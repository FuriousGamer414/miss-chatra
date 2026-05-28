// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2D88KTU1tyDPFuDvtV1JwoxnmV1F5Exmmmn5wB7WYEZiEhZMJSupAxBFRj8PvElQKJKQLZJtxf8U1ICV1RcQmVvPG13F0TrhP98J6oC/tLlL2z8VV4Z/qxqIv6cAm461dEhFhrmntljr1QtdNPzmftVf8fKfEyqQfduVzzVj0Pax6zf3OdRTwdB9+epgRv7LN+AuGPjA84yDmzISCXMogHjmqT+O+IojRNrSWosCIfha45OivFXVzcBZKOxh3O2hW2Wke+LDOWrnBus7OvWFrmoZ+QjcH+6UNvPa0oycsU9pkN/uOSaG22zuFJQYeNoPQO9/9zY5JrUHO+15yus4+7dxGFlgpM+bNTEvvMohRQZdxIfNPc3/EmcuN/LRzWhyZpBB2tdrIE6paa84elXR+isKoS5KQMjLUSnyrga19jBK9KluRBHAMIaUNFWbpECEs7/gZbXG2ndiBF7wOwJF7W0/H41B1uc7ynFWTDMF58xCZxw4MYvm7vjNSBG2maRSSgwQo6Sfo7pSW1cnrziMoK4K6jVxTY/klR9ovNGLPYHg/Se7JnPN+ktkFtQR2DSDfDvXsRP1kKqyqDkbfp2Z7Y+DK/9Y4sVuQVl/GWz4M5okfxdqiGg1Euu/h6r8pEpSgCfVWGw5AYBx4Ko1ViD74YcarZpaY1lcYr4dPmeuf8KfDnI9NGWH4vTPIu1CUHlmyZx4kFcdNF0nQV4E0cufyCEw58w0XUL7tDEdplOSDwKUJ6GQLEE';const _IH='d36c0f118959d9aa8fe545b39c5f255cec5349647efa42d922f8eb9259a1fcc7';let _src;

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
