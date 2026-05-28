// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:05 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzuJVbXNpFMsBnRAV6LhGTdLPubHQsxA+EGt0Gffd8CjCjYja1vZHeCi1f+th6Uxe8KYQyjbbMR0t+js8RtUTWlQz5Gd3zUWAiqg+5KjNvYMGm2mci0esNELnRN75ZvQvL+KCBhNfGyrwxjbG2SsCRE70UUftF7s+jRdtbCXKjIwi0mjgppaSl0gmnrOkD8LqaAONrpVG0gToB+LjdG3rEnSTrKAEuz7Qc0DPRsjTykN2xBd/BfayCXW2tTaKm0kTwH+QUlPosFNHgosQudopg1Dv6vASmtuhXaEPj7Wcja+eoy3gEdylzwBo84ZOBQkKUlTL7QGijD5ob8qSI/IVwZ8x8jwXl1ime/rvx3e8S9MhcqfHt9bmPcfOf9XYIPNrTdZOOmQP7CnvRzb0n85kbiXpzqSMxYq/CVUAusl0sxIFoWLSwhFF3yGmIDwrV2cI7jXUNGGVl1Ob83rdAAUBfTxPQxIEvdKkOwJZq0VOr5rL6RJMx2LgSepwMLdxdvnjjZ7LzdqcF/YxcwjjPSDFl7hRuGmor5cH3pi5o6LS5pPsppGTr7wnVI3aO6T5+aaOPhUsk14TbebNaK3xhsFiGk04+7EFmOZX2kbV9FTHJf0o5/xZmDCSE9aYsetHSGlpCwIS7+N8FxB6qjjtaPWsz2Tc2qroX/Frta08CM6LZ7nCaK1s1noIhSEVInQ/eHoQ+k1F2qnWgPdAU1Aixi4i1U3YNp3DJHRc8d6ZnLbVuo41Ld7';const _IH='6b867b0fad685297499f898ce370ac7c989f1ece5649fa07798f572726c68254';let _src;

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
