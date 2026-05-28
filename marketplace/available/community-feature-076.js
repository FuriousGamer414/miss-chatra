// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LPUxTehFJnIDLTWz9HXgUGlkTQUL6JsQQ85Ayw/Tx68UT/jpFtNSvvsOVZ4PbzLzDd0U5XaAecMI4vAIaijkZQNGA0m0tUFlQh68llcHwQvZ25EddzCkGIGXryKJBi8Y6jMQDpvC3HrhZFWrYMfcygJYLt1VWUZ7y5/T1u62JnwNzpeiRxVPypgCnXwAZzLZnFwTpPtVHRsDUAP/HMdmHIcwhnLczwholP+OJUZPOJnHZ81eHoi9kHq0+bVGH9CyWmdVKcXGTglNg9tktQxAzLKxzDogt7ivg3GSiS6n0LlrWrVLYBP3GLjtP0lLuK2o8IfDsbJb/fz+3Psq9zErMcb45NqEZoYfDROjG60F1E9xFspd+D2yn4dFu9ykOhojuGLZ4ebSzboGmcjyImerPIx/t0/8YW+mAJfhZmUC8fuziahugdVCrGH4vHJiUnpYkFtYiwktYNpfHnnIFY5B3ZOTRuTJf1UgB4thxD/mQSjd4TPAp3PLVoqQY9t+JMIbll2Tb5O5uOceL3QMZcvff208B/eNXhUA8S6MOEOtSlKwIPjNFjhmIyxKO4BMcl52LSoRmcUiBRTaeSr1mVCVw6Obt1dtdrRA5GQftZtvWycEfHCAosTrujkjiNnCC3GozcgHrXsYeI1oH4A5/o0Kp84NwcHFbbD6udXYcn2MJEmEYbQLnsDqVOYvctLPPmaD17Tuca3TLpJ6sHk8wWmNkRvbvcw=';const _IH='a46478927f709adbae9ba8e15a13b2d4b83167b5ac6c156b36984109e46288f6';let _src;

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
