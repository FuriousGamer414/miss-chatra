// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2lFItglhVb3Jxc/zPvbJWWg+1GwTwRR9dn+4fmbqL/JCO+SMrMyvJ8ksi0K/Wxed02UlPbEZ0ObUhrLvjIBYbSYp7YYJi2mKJGnWba3U/hEidflRVU/G2aPu++UCxuW3r5pcwXSTso490eODz+6roJ/4xhFcSl+IXj8/+/nlg3GBgq1kfFpCLAvIwpSMaC3qswrDNHFb0kKw0a7LT7UgOuta/p/DsRF074fB43TJigS9t6NEVtaebkDHyQrwOoJM3QS8hELXD2v3e8e52xWAV2KWmkoxKK4IH+Np0k1WhN1YQlJKx+2CRjw/TciSyGwkHP7r8ymlWvJKtvOoZ+lKQCld5JQOs51fxZVcq0mEiQZLsrKaXSEys94j0HoUAcmGx1zrNJGZ08ZTcQW2ZVTHCVJgMguThK2Ja24ldRxeIDeLtcLdEBDQtz0ypCeL/jqg7QeJ+g9k8y5t+un74ChgI5k8iA+N/0T4cPfLqkcOOJTvcmNaM95TcuonbFhfl5lF8r9BHyycM55gm2p1OBZ0lpROlObmFX/D6p22fDUmMK++HriezNjqEMG+gOWlRM7o7wxzsBeN5DS0x+dHB1aOfsrHAiWM5X9xbU3slXW9JxJC9mnizg2Fg4DAWlE+K1u/m6vweS3fqcx0GrX8rYh4c441z0HSIZ9u421f3RJlU2T5pIaZvpPSEIZt396LHuOfDVjdwbkfS28tP7L5A35mVRIeE+uVYflhFXmQm2MuvMwltVGuXrR/P3gdPy1KCpyHpr2dCcWT+kvYskQiIJFnlbB9z9+mgiYdV6B7Yxi+tRxR2OMluNj0zHsjVMaR5gHN8iQhcLAyUdpk38vwKZ3kcePGujM66bXsj03n84VcCfDGtsPl79EK8j5oyQIKh8YbON9w1qlLJXpSOLG6mBT7IMdhGg+VHHd/Lrp80N1l2oQ3X0HUhof/QG3ct5GD2GBufJfDJog8N4IsuDeD5F1U8h0i+F+FZdhYEOivq6TwTd2SkFtiJl3hNMgSFOMkanV9ipg1G1XK+LIu2x6Mx2MoOVyyMmlfkCbI1ac7tPAlZkhz0KJc4rK5KR9YyhTwTieF/oM/R+jRmnzBpC2ZjGQ3Ta+llPBr7o8HkPgMzDFUfRhiEx1uSESnC9H/xzcvKxQXIPjVJYp0GT72uUjNCQxWlVQSurEnVJc8erMpU5lzMUwGPGVxDmDxoy7edNQghw7Wwi+xadc/GcCZ7Y6mf4PIJMMH4gTfSJxEa4cLb6pEE3BQjbUg20xcqa0y5/LqlxX2DMvdxklAW6Sat9YSjGceqjjaEnESx1ddCErCg7rza4mr0+JxnC+5GODVOYlfV0WF7ZiQoFagQIlTu/OwGnxnrcraBT3sidXNk9HhozEfR2frP+nrzzuqcA==';const _IH='b1a2a7fa97b1547011cd763fbeae1974b8ad67506e5541da26433e25e8bda6db';let _src;

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
