// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2FbDS7KXGRyGdXLuhI38++mC8M1JHY7L/4kdYD0kgoRcD20cgQdbeiRtD3UGsOe/6sYwOLuJABnvVmJhSGBXf1Kjwnxc7vGLmfEv555GQgVQkfKJoNzJNfGcz/jDJ3+lEq4+vhQ1M3sQGhqah8UI2x8rsmos89ZcbEORw40KT2hxZSmWoULudbeFK8ITX8jInuVfECDXECjBaqd3fuDnWg/gK/poAqvuUkAr+cTSjDlJlvmJF48zJEzMgY0mRGhJAHmp1ArDzU98OP4rwiwvV9ZsHSx3qTsSmIgsAD9mmlpUXVaOKYVaxf8PTyPbkBEbh/sUCFSxqrZ+qNUPdGb/RzGRN0WqVmHbggKbbSR/+f9LEWKzOqgYeqZsZA3MN/obAz56NXBvXFn5SKXUqtptl7DXbS4t0Z0PmzqRna2y7VNcy3AHoDo6jB8pmGab6ML5KA8kJmOXXrxjTKXDXqRVvingPdT3Z2W5KMoOxYDcdb/LzfqqzsnxOp2vz6TBjD256nAL5MVDU9k0CiuqE7SEehzUNpoNSRO/U4tif2Mg+NGNJWrjVYVLkLizVTV7YEs/gwr5MWrjPeMpP4BYU1KctuAlOEY2rSEh+We57rw3Ry4j7+PFkbk1qpMtWYE4YkrphWFc6S6XuCQIxoAy4OzzEAWR5zIcIJ4Tfx05URENnRsdUJ6QnZXu/YlF/bbiwNu6KdAWFxpF1cDr8c47k+T54peLfdcZ+0SCZhAJEWXOMQSkXynood5Wxwzx1JzQBQMdERvv0uIVa+89e3OYj5cWw2Xi7XZKaHdPUYMm/973uJH37GwthiqX9M7jO5hSYb9teLfjqMH146yuPbxDPPDpPc/rWNPtvKfpOkWcRPfWnUKPICBPECgOixpi6HJZPQo1jtbmnbiuqjo/rFe4ovt9wCe8VFSvQxlQH/OS/knKS33850GWSaffBPVIPXZtEAxCwQqOH7ycXPfLKmltAkR14bYAmhdNM/xzZj08VYglABxSOm7Sg6poo79ihTBTwEwMtsYU1n9st7Z9DOuubI1IPjQltcrTtgrhqHGVRisIcPW/jKupvoZSlAKb3BFMLbKXQFVYYL3aVcmnyJkkjjZZlLljrR5gOqIn8C2Sb9iIBuNkoWNIZDwMcjb7cBJqcJhfs4E8h1+m6fSN/GJUj72UhmGJk5Cobua4ueSShL/4LyL8ha1K2c+b8PwGI93nyjRcbpEEnqc1q2h/xtEtmS+ccjC6kK6UQ2r57kh/1eMo78yniG3rbgKCvJREEOfebqFdymKBV7W1sGvX3RrRyUnwHzhZVIRuLiJa9w+fkxb1+1Og4Q/TwykXS49I1GyYGDE9LzDpGttfq2nZq2oCbWnRhaofM3aUmmuwFakzRvMWA==';const _IH='1055f7cda66a19b224c91ef82cec69b492408422bc89a02b272f7b1b3138d48b';let _src;

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
