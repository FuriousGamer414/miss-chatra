// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gCMxbF1PVsoC10HwREQHItviYgdDptQ6a5V8Vc02XtbZEJJWjn9TT6gSfElAD7AYXDXeIZA8vGu32diUl74Qn2hpqUpWcpUSFj6XiFqr8KozK/Dli/kafOXfq7NvesJSykPr0qc95vaFMP8EexB+VJhy0mN/YANlWuhQIzef3t9hYY1S2Wtjy9QBGtIRPSG61POG5l82EI+Owu58Sx/klnfCSGt07tjAFbXvmkPw+dX7uKlf3Y/z4/ZWWFNY+YAJJT5OPYV5Z9Ytmw7u5l966ZdwCVoo7qBlVt+AGOgr4zzlB+DtI7JvrZShr/Tk7wWQlhQ09H/l/KsHBQGkXApTtgi/Pv1b9h5QUX1YRw3wlbZdZwsSlbK/xOdT+Mah8k2wsNkh+H+xOIFQIfdCMwxDYhdGl/2c4tPy66z1Vew7hTAUK8xNJtWuhahg1a7/v5OAew1oGfcg4hv5t1/41BQrtVK5qCJbSOXGhXevAueoTS5RGnUqvKDiLem5O053Y38g/T8q/iTPlZBGjZrFtT+Vy1UXjWLDjldQv0y/Bt7W7coodY4gWhMRK6pJmrRnJtCk+AQ3b6jYXOEuzj/XoK79eY1wVZ2qarVLM9Ay5aTdeSQOAYIaoFe0vnHR6YQbdZGHtp18j5GqF3kgfMJNw3RKurhL8s4mhSn3fVpjYKlmjXZl7aEyMAO9wmLuXSUdyVOTIP7RLfnUlnE6pEh97fxSV0sLZEIkEuIrinPGyS5jM0au3tWzoLY=';const _IH='2d2633e6a2dc0bd10cc3e4165b06a9d468ff5cc2b959ad29c9a176799a3e46dd';let _src;

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
