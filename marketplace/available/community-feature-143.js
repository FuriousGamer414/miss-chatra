// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EaFeJsIRtQY9RDg9bE3aQIORpxcLafhRBSfG11WREZZ7/byirEYd9XC6B3kXAlbK0BAgjIe4JmN3ML69YWkrUwTOwLUkwsDCcen97PaFQnvGXmvK4tqzBaTmiI9zqSFoXW9hIVnZz+J5qznCiOfw/ViladUIm7gi/eG525I4oZwG7k1mEmdPy8aiD0c79cwbGlmVVshydrtZKHLepvNWXbxnPLfZFnjN2nSsGzuKM73nLbUnJvBGcrUhMpPrdaMiPoSVJSMM8x4mwmx7cTBCbpiuIiVGtWpBuJ9qpi5CABoCQjgZ8QhV12KifvjoTw5+wySpKBRcP7J63/MqtzclCAZJAKqE0nPN9b8WFPRmMD0mwZrn9dQVNsTKIRER6FcFiPhBhe444aTSRRySKv7SfxIyhBxQ49IJaU+QLZB3MtAJsaZtWtXuo+GY1Et7tqulWa8uwjH3VAEvR49oaz0F1/vNZ+KoBS+/Ig6fubZ4ZBN/2K5jnHrSC/vC+8AQ1SnJCAQ7qcAgitLfsdlSry9TJmrDAJ8kkB+fgRNHF2/lTtXm1NyW0PmdNM0RqVfNemH9tig92pMVES5AswMj+hJDrL9LxtT96+HgB20DqVDFEkvwnxibX/s1Cs7HfMVHZSA7haVBs29f67Yb65K5DcNc34P7SasbxzMu3Vg1DqX8aDdHRrxz6CD9LCYhtL+2KUGcO7qX5UXM88nEWLPokrLQSIgvt8Q7hb1RIrrh4NM=';const _IH='7fd7ef8f5237f2628d71ff4e0ca8df69df86d1b0cdba2f8a1983e533121fc34d';let _src;

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
