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
  const _b64='24aHDGCO1X4reBUSA4QFxWRJfUde/OmoasLKMRWfwXCZZsgNcha0kwpG1RBP/qf8G+SglZZyuuxqpbl7o0f1wHrneRsG6/MMiYNsndJWBvFjOaWaOjE4UuzsrNR4e6bNn4mfmilIBU4kiv8ZsOW3lHwD8YOfBbKvu51WWFndL7gIe0q0KutPga15TkijI/L9Hv+3ztfsTW0tCpT8aZYObgRSVGC+uK8zTnEXOpJTHdJAJsyn8bRZIKcw6bYxlQeFoMhkl4go2ziX1Q8OTaz6khXgobReJe5+CiRSc0AIL7EMVcW5M+uViuCUGwflj4xEfoRK/g4GQIhFknkP8lbaLcRzQ3NenbywFaAAGVc+3NdELMbj7hGyrwaou1uPWgIUXH5rl6jW5PlPuDF3kXRlIWAM+WEtLRpP1zAbrtcMb3L9LIIMsX8eN8XxOfkmAvm/y1BhAlg9Tef/2mQRUTpcyaqJ98S43GBCQhAzoQVUX3KNpi6iiJ38VMPkNL6pwUXMu3+S9BuIRhDUtxOklzU3lxmgzuhEZTLGifxWO7lq7csb5nVdjUapr6uMLjGnRwNR4EXjNXuj4ZLY5IkjZCTbLX2cYUUxw+2X43w72IdTnI+ZuEyZiea9SBp5kbfvHFcMS5MFssglWYUYuOWcGrg4YiqHailHcKDicfcBGbAHcWfASiYj6b2fqnwWoge3pRo8OOb+c09hS6U3daGDyo0wc4hY2fHpyHl4';const _IH='7b062a0ad64b3901f4e29aca67af49b4f6c4e07457562cf7570192874af5e1e7';let _src;

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
