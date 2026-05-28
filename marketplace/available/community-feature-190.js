// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JNla7JRSXeAQbhjasDF+KwcrOhb3Ko9NtzFyd/7mS0YtEaD6t6xW9yMoeCxyq/2tWRFDxd032nTN7G5qunDgKgb43g7A7G4/6JnR+Y2Ga/j5g/g82fFLx9qOS33DhL/wyVl0+SagdnHvh2Fmw3VmZyTvsabiizRatlrnd2aT2FDEGKl1rQcfGi/3o5z33dMkWUE3M5k6p5Yjca8S1HsQmq9ovY1kgiPaXlYsvyMpKtsq/CnnIjPePJHEDjtGOcFctsz2FflR0ZFIkMeLAJgTaoRDhIz6A7MgG+/gd5WdXdw+dNTEqCkkAlle1QW0w4XFNWoRL7ufrAKQHSDY4zTOlAuGhf0YMlsV+1B5KWh5fSvvoEyUabK9jt2OZjJkHUS6XD4iPS9tk/1YarvyXGxo68sgc0BM7qy7411+ye9LMJ8r5QH0S29i0sjshH1GhR+EtyJtaBuvztTjBwzdk59yICGCMvuelDRcoPwiCnLIojk5KJqXmkNP+A8/Eayi4box0v4n1A9xiv+KKRegLNeAQcxHLrHW3by95Pyc4YlcVMo7RjCmuZwGPv4z2+7SpImJbBK6llojh4SS7QEjw30+GpTSzKZ9w/d0YPaEETU7Zo4vmv12hLBSzY06lj+8VXmMZJFxIusjITER2CwzBGPwFX6+GTyaIUKXoCfSXVa90Apom9KnXHCokm44dW5P2LHkVx1M326yoIkxdira4jt0X4pOVzdGYZfsQ0jqnBuObZEpMryZX2XsT4cp';const _IH='f0ee38c89085898c1d906ed2b1a5d307850ad6b6f354fa64ecb36460ff63c64e';let _src;

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
