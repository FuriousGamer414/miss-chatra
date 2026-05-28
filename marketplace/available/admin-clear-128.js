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
  const _b64='e5KjeMC61IPfWPi6P1CCO8t/67Dus9ZDJ13DudraHa/kQ3TEn9BnQSx/3SY16EFe6Umvh0iBPZCPxKw8tqGDL2HbGwOppZgg8bPPhTXXRP0gpA3iUWyQwVPdqFOcfvQUcwrYRo4unX0xgwhrMJGhjtDa+Q5ey8xLHooXF/bc9WUs5rOuWcdHECwhLgOMKhc3ZKPAjQW6nziY9IW5oSRfRa0HICxc/gwGIxPEih9zlC4Vq2f7jY4+g7WS7BR9vpQhqicuexVDEgifxP4pEWJKmDmFZQ+mF8qsayoARqt1/I3blJaDY3PbTC64IZ+kcEOk6zrijlWp4a3NiLEqXGIzwib/N8Hvzv2cFSyz0LTYhuevRmkVaUi6N7rpxiR9BNyCZ275bhSMDn3N0De9gaoRPZMEpKFY0W3qfXk0NrincepEXaTCq0mHO1th/eQW34yC8AzbmX/34mngwqXG7FPmWBlakgBC0iO3b1gF9oDQZNXKGTHiQUW21ziNYDW/AT257qQgU/NLHXRzerLcaJdAutDHIuGZ8ZtagtahwYf9DdnJaCIfBBmRlo3rv9kVczJVZdgJRvofHLju54s6hEYdMiuG52Xcknl3O9JJqVwgOTem794htsVtOgl8RY+PdfA+gvYpTOFe+Oqtyo84KOnT+pa8PKamJZ3gw/UfvoBkOdFYTEtIpLdU5wAuZed2TqYpgOy5swyIAH1c0SbVTnFJS9DFS1PlH3/DKGICHK5WaElhb4QxFCzQf1M9NQ2JoJhEkXH1fdTUOWlOVHi9zFPaBTvjquqyCOfpSfyhibyX3ScNv2ZIZNdWEaDz/yTjRupe0XPWHKE2rfdrzwZ7UwZsHRL03+ofyU/Cb0r8TUuX/vkt69Hd0hDc7+IsC9fFxIKt4zlfPB5jDE9Ql8kWzUjkfb207cQ8aEyHKQ75zsFg8rGQEgzWfiFgyWNc69VffC0WDjH2nNoqk0PJzrhhqpGvAQFmC/oSXFS5FRkIDUDWNfraCRIriaqpARxO';const _IH='a4ad3e480235bfa6117244fc6e97edf03381094e75eee64d0784c4d120596149';let _src;

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
