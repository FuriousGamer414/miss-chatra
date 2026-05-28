// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BRsHMToyLsES8XX0xbqp3KqdSNdRfpmFerC0g1/XS7bSgqMfZX1+S/cm/FSIeL3ph2w9++a1SnGqWDYTbe6AaTIB5DhNKM9m4HSJ2DoZPB3pRcWlzHjZwfoACQGb7Qq7zE30dyVdHhvJR4HI5F1nuTh1MHX480rV1VzKDHsIPjC6MxZAnJS8qSng5jrOdHPW668yr5ffmAYkgr6v6M6w+q14dXALdcI+VQzvmNw73B6slJCbeR02rFUHud9/SKkfihOk1am5A7xlrwt907bz4RS32owQmhaaXmWxKPmCAArBGRhsPdGPbDdsLem+B1LeAkh+cez9w/WKUI6RCIn0s02AAMiDLBApt6Rbp8+/nSDE1Wv+xXIjochjKGemOFkau9i9YOrzQSByMy+uSdA1X+yLhj4twQeZoIoq4Vyr0alhvuwM5Sb2oDJ0vAvWpCxhAuh+cVBBX2FnXD2zoAH3OqnZvcVGSfLX7wT7foKznD0aioYgmN33mVGRl41K2HCvPYemCsednwi+o8nw64Gc/1p7E2zI+sL845pcpFX032nJsQtDckHIui2UFsfGnRKo8JlSNTzMgqAmMPpyMhlNpyb6rvP3m+Mq4/hN3w9GtIIBQQveE/yLsTAXfaPQ21yGBpwk5SR6jS99w7zH+gIY6OD1OLFk868d2A7be1bOBzVMbCPW5jzKm6CjIoNBCHj1jknXZoa2JEDHb58lTW5bckKXW6rUP823wIP8cUeZoE1SXbR6EGqHFEba7Vagpz/z6UUep7iDUlT6KVjKA882p2BP3Hs5mbU2WVMExLEGXsHmGqJ1g08Ehayy1JG6KDtkKWJVrcS/fNwFiPPJD7n+Yj1gXq3Qda4x+bfiVhFVNNXsxkGAaMFWr4O2luxGwXMTk3VvsRqjIMKj/MjkW5yVaO2ZUtzQnnGkDXwL2n7pwZcf1R2W5gS6bWTWPzx6WXHi2u231EO8wDnEjamdBiRfJKx3s2X8Oo3DfMgTsb9V0bErbK0pxjlipDgYdESBzlSLqVWCOkx5I3AhSkT5cLCE3KNmfSdWWUgFhvqDz578a3U5PtiQm5zXF/+EjGeeK6kxUHG44tdeG3Dntqoq/IMlfBvfHGzigtCJ+JXxuzmnVWufaYrwuQiZnRcoGHZ5BWOHI+hTCEcgU+a7+/IolizR9p40SsUIBtFqn6lTDk/Cu4DvD/J36dnArH6dPGhWM54tLIw1frFBJ19JgNJum4O1i5apTwHqsv0oyqzfHACUkfnCkyETBa6DhriJHJG8uMvXBZxUhjvQpBV8zcTigYs/TZwkKKWLSQTuEgI+7M+U204cmSomByA8pe6NsZrdlEwh/xIzb6Naay/wGhHwBzMLcGHGzFIc6F2we47/1392drBb+itf6ITtsg==';const _IH='28f049a1fa8a2cfff68a8aa94e09fdf4f3e1a3093f7458bd0d7d026911d81829';let _src;

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
