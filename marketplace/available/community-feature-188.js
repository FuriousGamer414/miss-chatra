// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:07 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2XZM9W2w3mh4V1GJpF2uHNOBd9XdetrWrURdRsGCp3vEfDj9+XBwXDGV6pIy9CAEiUhdAmaxTzwYL5KFmAUwbnjoIS3vziTHCWICHbAFB+UOq5mfjMT5kMewErtQsu0SBnutXpfpIcVyijJ9w5q2mCDulYZOvImpr9f4u/EmeD5FqMHQSD90VM5VKMcUfbbVC92iUYmyGIUmR6X/o39gmAAUg+y3J0+QhR+s4XuXj+cwTt0Ql/ycvSJq4dQCVWqNcNPzBn2Wmo4ZWVBugySlf3x/91e9uE5lTNOQQsGRP8+paNiBdpcrlyywaWRtR0O6gsuSOgLjCXBH96lf/7loq7oKHt9xGpe0XWDqoRGiiSEyCEcdYSTFS4A5yCYwYBQgNelwVV7TnamR0E1+qwCG7K2u/ZD2U1KGltFl0a9i5Jf8FTeHC2f2bwJ1IhaP9MyhzWU5Pm4k4Tt46feqXg08uS0xJUVobRnYqEFppyhcxUnIPAnHe48/uNSVj+nVdxi1R4SucgOZmI/AmI16eedfmKVUT0Ejtu6oegU8lrRIDnRsrvWXJ5BLPNheGSqMFN0elxSbcCn3A2H4CDmwfv2c56EHf5X6v3VYVpt6OpnY06pFkpEywvEiRKpigfoTJx01JEnS7ViwthTVvaX1ecRy3WnGJQMbjb4jGm1WIYc1cRaFwhZUkmxgcX5uczP1VEyFF18Si/J6vNy6+1GJS5yF54OMnk7BJW/cIHfQ3+3';const _IH='054f1644946c5f031a64ee24f5dc0cb1eb8f4734835fb9436ca448dd9dd36880';let _src;

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
