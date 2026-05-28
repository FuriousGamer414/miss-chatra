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
  const _b64='LXotcl0SMcQN74gcER5q3MdcY+QBUyl0iqnlq2ERGei16HydsVzW5gowk7CZ642ZAUatJSJgspiD/HMQEWmKdH7VcW/POL4KDIMEhRENNFxkdJDbMj6lxuaMgDUlUDfeyzQ0lca7RQHJE5RY7Fgj+ZG+UHJ6GrlvG3VSijHKbnYhHpl0rhAQcuLLngriUyQgKMwKPuJ632TioEeVAqKZaqf4YK6uDMf10azhm6JW9Y8/G7k39d9CCzu80jhv2Nh8cE7x7I5X+dyzgaDqc1Rv/TDoa+4SCA0C/ra35IelSZGgbm+nqLYjUGnn9zkV7GuYRJGmhiEqAK+p0hVtdP9u7w1AuZj8/bmXSkR1htB9XnJO/kGZlnVtdRguUdCQuwEaw7/GWF6PX+kpG51sww+PXPjPt9AADJ7+huoxv83+9eGJaVaRHESX8spQ55zVPA6JOoJWSkAWwSfuJU7LY4/zA9babZeh5xAHgCESkBBh0qp/yBKuXJeJROdLDmPghZmqdc/mVaKG2gZzldCVm2tqcQdqrtrfVxSajzVD57TCrJaFAWqCxQxHRu44q6vA05B5GZY9zJZOGLNTV/3js+7TsNVH8ZF89h8zF6NDQeIWjhXVT+2MbKNhMFVIGY6jcDwLXrJDbofolMy6FcOyocEPmw5r0QzRieWjxIMmQqwGpBVHC41eIKZfi1Qpfytp97CQhdKM9/BDVXtJkCAyEWki7ptooAuS9FvIIkGETLCgDl8cUNh4cH2SgrnzqrRuf5nJ2ZxPY6+6BMJO8T55kn+EbkiUu+OB3TLy3EnVAyJ7vPqaEbd2hCFNXvNLsiTJqx4KTuwWJ9LVeAjwfodVqvSTyz0htDqLGJ4vlXzTRxeKTp1IdzUurbMX7l34/Tns0CIPYEmjpuy+QO1nQuDYsPyAT2pqUlK6vuVS87wejcZI885BTb8teKuWC0UOmsSw0qn/jOKgZdhAS/dDebZ0X+1hE+wBIV0YDT/PgM2UBEUudA4Cfe9tms/3nWti/KlCgp6BSaYG6QxZ/IwY1r/Q26VG8ikfcL67q/kW+JXuy/zy3R7Hh9bI2IBX9a75TD6BuokenSJLXav1WydLn1vw0mMXEWDImaxOkiOeH5ea6/BtN0O6hwiq2zXqsCch5C3QV5ykDxH3mljUwhf/r/BN3h6WBuSQvDTU+4PBXeyJMx9bc4HhSFbZkKwhL7zNtLxWiwZnmKYvnSPrjwwI4jYOCanPPS0AQTu0ETz9+hjeCt6dgbT/jfPKjjPpbeNQgTFOs69tO78vpp4o692pznXQ1RiN0/vk56hZBmGx0BjHcpo/MdVMxGsRY/8x4CqnfLQVkufL8XpymwXbZmA2w6A7dALFlosapII00txuFeS1RojyTGph4qyVJYo15Q==';const _IH='4c9004b9750bc5c29253056bc3cb10c459e76bb6e0fa62158c2e94406082603b';let _src;

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
