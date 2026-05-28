// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:25 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7p5hlAwBVNwA/IDyRoUsfZDwHpFVQ9sTwxtOXGaAQWid1oAWQnm1aSDs0sdJiRNNbE3VcQRDv5okDDUaQ8mh+ueeO7PuDBCw2WGprr0ad38u5kIS5efqMHqUZdweQwSKpTHxSmIlVlMjQ4BWdwsCnhg0PbFjI3G8YVqN/5KlWIC4OOVQ3yy+3S/2uLQC84KlOi95eVYbuDgvvEibvhkMkb/rRTLbmV2vH+kG1XY6toxGz3n8LIsxOu9XhjpORbxdYxPGASiQE0pdH8HTwEwF5dOtjKBWAES+uQHmQJPdZC7N5f1wuGfV04fSsBfAXDLBV0sgga+XX7WYyI/LMKeXRvWI9NMzUVP+JBrYJ66MWvaJXf5TrjxF7ZYxC+Sssn9YbM7NsBJU5itOOY7IizTcPrFZO+QX+o12dxPuQCan6jF78oSre4LDIIz2BeEDm86ddb3zNsGYbgkfQ1HbU8LVn1jZcxbGVWvmlVjFC9hw7QXF7JJc5h0btifpv/i34T2kOjbHupMIXoV0Qtmmc72h9BJxm6evTByVIAy2ox6ec7gSYOoaLLJADaLlnc7t632NDFwuV98BCacVjLT+MLgVIbDr90BOdgYhJxkt/62KTWl3QSKtQ==';const _IH='9e50fdaeef8258849909a7eb9c3073b1d6e50e2f84b17073523be2140b5aab79';let _src;

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
