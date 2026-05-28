// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:08 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQws0QzKxw90njPzcgo40EhAQ6J4hrUYey+RNFzKels4rYlU1Dm6IL13jKWnKf77QSMvGAI3jbmDhqXVT4hx47bR8mcRnnZEyURtR6bC31tvGLsbxPV4F7qPFHJLcSkULY1WCU2uKkSzqe+HnH2CeTqnFYxwilmMWY2W+/f/PNaaI2Befm5gtAFrrQa2/u8n4DcjEWs4GFTqfEKSsdUSD46WR+f0oI0aONo8nLhzIPBJI0kKQmIrIj67M31euUNGTj5/0KgJFZuffD0SYnHcA+SFwImZZQrnC2ILGV8DxVVt9Hq4Ces6TPZx1RJ1W2D5LUJUUMbi/7nITzGqtCZ/Cz2KRuDJ9HQHG4UIO3GUSSc+zTbgP07+GiKnBzR+U9eKDbHbegKZqr7mHLmWoF8qt4RAiQF6ipEHFe/p2UdEnW/y5CCaSWn+N3DVdhGh1BwdhhDD6GiLycABUFJA7rcviC/HrY2oE54AzILiPd6/NOX9mTHosupZM6w0y7Xua40m8nae8cxY6D5cf191DWE+OegXfnPZ6+NS+Twrzx2JZfFCj5HCyb+Gy8DNj6hhur8qCaA2C5noCFP8BTplhmTGGt88KMk1CjIJCjILjMWZ7dosoqTDPxDvB1Uf0HbpDFukTT4ERaAcLRYAIQVCCz4zf461YvUEt0lZXfOC/5coGFZSkOxf0EmgiS2NCxldBQohMFS7Dsz79Z2p1a7cpAw+KvSTG1tf2i1jDt8P3fOEawBKUbeIj';const _IH='f305daf9eba634ea044f8bcb77e954212076096807ac9970cd6d6cf885aec591';let _src;

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
