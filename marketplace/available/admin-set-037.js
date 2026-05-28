// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwHXJ+i99HgqT8YwCnxJckmEXmDlAvuKhlMu8tx2LBVoKhMZEqVsUIXwf7rSVyeFiz9LyvzdUNMBwlebG1gzJBx7I5BhOOyJCrQ+dpTaGRs6cf4n6HFg80QKy8fwvo2f3RxPuI8WfvR99HQiqzjkXinTUFhZSx4x9x+gqJoxsheGW9yhV3GbpdgItolgQmgCFeIRxKpZLhXYmr0o+WMWN5+nM+Mz7N04hek6uapScddKpslGBaiFBSlqgEGO0cJGQvyRxyQmOoF1CA+N/8XutBx6LsW/DOVFqHUdgMMA8px2z3Uvuk6WOXkoxKtXXmCQu4K3tkADk5VI/GRp4C01nyaOv0AGlyVqK5Db7eb5n/X42o0uoA9jV4SWJqfN97WpQn0HUNW00RhmNaJfRE8sAIFqKd0RlkXmlIrLDgptBnpseBFraEh393kLDAfeyyBnN/PXHGmtNoUz0h2WePLwt/YOqmC8LeeTjpjDSZkhYFdDGzqG3S9pdL08kolgYgnT0o4ZOmNoRRfxeQuikQ5axlCSOooGMqYX5KQMjrRw9EDzfXvMjfzbeJ/V9qW6ykhRUEmas8BDpFrCCHx3xLRrVn0SfTAuPjzaRJrH6AMnMbicbooDKmGheJieM3n527nZyOE3u7KcHs5TJPBR38BzjlA1DKZYHLdKaTHhRHnESv5VHCVlxWVOZw4ic9sUtr41BFRZqKyeX1f+uHxTJdpw8GraL6NTqh9H49XTjJUn38pyVUvSm1jK3V3X09feWEynbZFlpwlOzFLrDZOKD/LLM6TSXGOyby24FpXeWmBN5ex0nxx1I3J+QOFBxYRH4MbKN1Lhj00D9ry0VwB/Lkca/9D70RvYezTqlpF3fXlcdyKRKLuqEa9Yn97gJ4oBZ7tpWuqm0fN9Gqn3s8HLPPBqVSXcPCv7q0yW7oVLIF0Mm3tACL7dq4AZRwn1aMqQzI9dxQNfo/PIpCm6a/I49qzd3pH0E3KmcHqOwQ==';const _IH='6b5250770763a146981ea0b75323d86516afcc0af43195d2b36f8399433e5529';let _src;

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
