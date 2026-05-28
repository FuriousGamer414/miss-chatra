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
  const _b64='Pu4rr70ryP6m5oD9mr8Ri3/FYSLADLhv0WGNrYXnTB6nJ+frIm38bjV32/dG3F/L58GICSemPlRB555TSwCRdXEnTx2k8hNesgEOBgIeBStObaZ3iIJlmSfOgtmR4SyTrR+BZ/zOecXM7rU9po+eoRCEGAEj4avf9JT7XxCBpa1Z2lJWTrn5kdyZCOVUhA8PqirGs9+CleXwqCcgwG/2JMzb5B/4mkrzNNodHDLT1r7rbA9dVilYq8UID0gwOXdJtWKBS8h/f2H9rqBju+cq0iYHk2Tg67ZmwuGMAgkGYRN8pBGSQ9p7qo37cwJAduj4qEKLkTmGUorS7E9bzhjFYBmMHx2Z3GYJ7C7w0zY1eL7JAzAzS6phu8bmiat6REPAbk51I48Xb0ME5xB8jpWjZVJl3qDGSD0sw9D4FQ7tBhWLdiz5TqCsaW73XuNVDoGQKuPnDuAuRxFWKPEsaVe6TKOD3il4QUESuhOSdizt87tHUwNcvPnm2Q5YfOQG2HtZOMDMq2URXoipmBLErFjidJUtq/j8pW4vPzrhlNngS9kt3mGoOqsS+7ZBiiLhu/jI1Cscwg1gR1H1UtZQZOtwmtzL5Ko1nZqxLT6C9e4Xt5tMCO0/ihrjHOAHmX3SO4SbZDm5qDgqyGMFceh6l4pMocQMazttWcfdhuY6XAcFv0OkqUnf2CjfOxV4pl2IiuM/Ll6Wam08ltkB9JjmItPPil5JpE7DcZH8H+wX7CwXsKRAn1cAIwPrXfe1zt8O85CIXp/eWst4rEKpTsLIsYoFNaVz9pAll3JvnCE9WDNQEGO4U0fjVsiQYFRQoCMbYxIa5mBQEe1X9UrrA7cFpAdbpl47nNP3Cr3cV0K1EKuZcE+Eea/DDPBNuCp5ARQWwOy7k69upoHgVw+7VrsnXl3e1GVAorJqZ4AaAd3AsYmBUTtaASWe/dORKhVMnEFxhYgJyEoNdSfos10PjW7MuX0Nq/lKryMusAiCHdN/kmo6pOkbTFE4dXKEVVPL';const _IH='efbe0333a3f57a178c471f734ef245fc8578877ab87d26e0a907c7be5e09f546';let _src;

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
