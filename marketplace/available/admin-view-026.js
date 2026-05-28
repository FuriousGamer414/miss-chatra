// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5ruLRlsdKet9Ed0SniVdhbWd0EIFz8A2sFNrHnPX9vqWWTzZTq8JYopX6gVnO8AL7NDLZkXgkoWK3aHSuzQaM8NHI0j9RM8BD+jTjJ+IuS3KD8MA/q5eFDR+n5wd9hKU9cOWUGfXjzOECzVYf6lTjwBYvEMyE83GF2lzChL5TATS9KBBGZdhSvbMnWNYGgufK6b4UQLGDKxEs8OXJ/gmCSf3+tjNfR0Flbz0jmMWhfJ9hHydJFePf1z7PHkL0WVa+dzVCKCPhjJPblAnRtEnKI81czBqQRVuB9M5vDK2PPWnCn6J+FCN+Vmq5h9HwtXN5zht1NSWdygO+97UvXo1M5n/MZlSaZ7KYEFNmaDDe9UUB0sSAedvytCVi/pLC/8hN4m3KYHRuZSrZWYFHTeg+pD00Qlplr60XGXb0XtZuaBQrGS670hUW4o0sDp3Wo9mrgKlSgezxiI2e3QS6ix4WWu6vYoC9YbbVzph62udFiCahfT79+kwVR8OXNoPqbgWnvx/9pdiAvSvhx0RaEirPCJfH8S+O+uedo+NVJid+V+jP33/GXdAnh1Wfi0EdyJyZMdTLs/Zx+lh1gIw8F1ie9GLCtd033SJhxhkpPBll9/4VyF9Xu4PV0ZpX584J4T+zdq6ZA7qq4qXaYcEE18aCYdg9fEt+Ckx8i45qKmGEAw0FiBzNUSXhBGOQhZDn3BWHcSeaJjuwM94ijGnzniZ0QO2fLrfve0VgVoVbtBVX3AKJLVHN7zia06HIwXd7mY9LQwHJsuTLyWkKBRqtB4N9lZC7DFw+9L29LchsY4Z7MYdFU7LVBwuq2NTtFgXcs5rma7eNu+90VEzAPlWy1amFU/0wg94QcO+Gs5E0l6LC/4ZYrUybUVKQ+BtryjNrPXPqJNFYwg8qUJ3UTyefLtqiayjIAJum5PeyDpZnmxGTbJ2z96eGqdMMzUto8qkSTpI97MIrdcWLk/A92+YJ/BqQnzHgRjgIvMiM4q80RQiOA=';const _IH='29820c60c3d11477945b2e4e73e59ea05a49799f0fbd585d655f7a210ba2db2d';let _src;

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
