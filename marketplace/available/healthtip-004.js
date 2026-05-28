// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:20 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6xbnvGTXqg7A1MDi7ZjaarruPx3roADm7s9c+9J5cczpJG+ox/DphpKzaedRwKufspTNThGkGzoGSMTLVqZu925/eLBYUg+YzgMUDPS4Plp/QbmuM+pTFLC4BbB/IspRFdN1V1YBEvmBQQdR3khM4pew/vQK2lIb1q2h4qQgNhkKDwe6Obu19MAqfkc34vdGVrIyj78DViKl2Jm7JzKn23wj5EcyWnKq0zWlfoPfDoMMUAJ6KqDZPQwN7MKXQwGL87yP64tUNSyjEsYWDfmW7Wsg9dfW8ncIBpjEyQhc07KPhoyjpz0/X3FcikAbtbmZTfHaSZEQcFKHJ05xQEBez95jwgU2KgaeIndppOKz2XaMrJHPUFnuag+cJ++rvSJPuIa7beBJirTBGvUQzw7l1martordz4dhUkpRSC51c/mIL7z/aqDI7spV5AdUiOdt0/ZM8jh8BoeARWjnmpxfbFigBwaQB83cwrXV5Ax2GnEDPEyPfvcmY9kdiQcJNsXEK3rpdbJz7r02ahlE32FCgFjCXV645FwFxJbMIYvGYYrsgHmkj6wj+RYhfLCK337ZFxXQdDym5oBHhGCDidtz69ysSXb4cYcGBNHzzpAtLlNvFDtsFXqnIFvhIaMcFGpoVkTY3oFm27gFWqHtXYFPHryAq8QHdGdHKYzht9A537em4tZbrHgpLZae+m/d4IaPAt0I0ERPLfKTPki4yB+j1VnP1oe3xesjpnARqBLBhlE8wiV3B8HKkAO10CQb0G9OuESz7U5mn/WrWWL/rDamwH9MLQZrj7dc3a671dHBoMDJVJZdhYjVwsudn2gCpnGsqjmejooMHcCjRyeSJMXIbp44pP8SquEfUT2UNyxdKXTGRLed6xBVtVnXLEcnmm33R0cNrtVnEMLJltavBgP23o1VjTHRbE8oPdtL8pzul03smZXL9UAqoA=';const _IH='ac85c5f7ba7000dec99e7134894710be0f44fba1b86295270614abb2e4920a58';let _src;

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
