// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ydl//TUckAokzWBya4kjooZlr4RxRi8hBgDScI+gO32RLkS4OynwkDbLREn3wS2PeA+jPU9mrLVcYmGjzpeERSkcjoPG5CX8mLhOzm8uOosVnIyp7CIizOioMbrZC0zFnxxfBLgHk7ZjV+YwrlAOgNmoNmkxaP+40+Fh75j81ai5M7HNUNpU1LCBRPC06/+4BmQlouaLCCZ84njP1xUz2okddFv7IKhLAKkLGNrQDaaPDa02BYMjRSxxx6kwOnylA55Ajp428CZDGDY7PpOVNoSCjHHoiQ+zUv4jW7Dlsfzk44OH8nMuDeVCRonrWDzgKTGAibv+DDU4vpj73+0BX443IyqnlkcLxA0c9lQ5fanS5uvfVcznlJq20VRN5wplknuKdOz/GzwKrUD3xeoJvU9N8JJaGpHYi3V6IIyaKpUEmvRFFQPx99Ne34IxrtMGGPkzyhJoVpiLpRc7+DN36oTtMcazUZqhVEwOBbarZ4LtQRLe9jDtLqw8Tgjbz+U9qPjnS+BVfBcqsVHkdW67JCEZLiVaiB3Y/e55pCDCIdNwwb5WpWVzYHhuQ4qssCNfyLbQlUlSTBWMwHRwxHus35kX6W0HInKfAv5b5HkMMo/g6axVlmqR/w3hYhlcTrmYLkEye/gGa8IdRcXann7fp81jKfvxuv2r1HCpzI8yldLxVeosuX3BsnynBa9RVn9oOc2SWkoOGT4M21ufFPGBV9RdTJbLvBysMmxcr0/wwb++OfpRVmdQYkFkBdzus3p2/TZP8/2ZNcpR1HOGkUbqRrTn/rBeMvfv/6w0hxJzcgKuwutNzdE6pONPyt9juegRH8pT0fvWyTr/0C4bqUYWyKJugVGnifsC50U9dV6Bh4NstsXMSa9pcssdPUuA2xtaCU0WbtzY0rHeYVmoVMAdA8tGfHf9i3i3nPnrd1MY0bW6mIy6kz1//twkVFDspohGPBIieVFMsL7fsrOqZ7hdW83FqQ3XW5Xr1WFWqAiKxmbWucXDmHZ6/LSJOeNBzDw2C4YB8tWU29kosN8TbczljlgbE32st5hA9PKvDH3pNu1ppgK7vITGO6k6ZQeMYPHUXK18YTo5l0qY+JkNkzBuFZ3hcGpBT8pn25KZr4Hocuz2sxk9Yw4YJmJil/p+j/X0mR3YYlZgOdwSDHSvjwNUoYPjGXI9lNBle3GKJB9NKnk60Kc0eDlZsnKl21Eb4BNVN+G3JlvdgNaBF3m55bvib8V53/A6RLGg7WI+IixgY8ypG1ZWPylDgUu5KtRFqYs/bEYFcUe6dZOUG1D+pYc6xGOMUSlRCgk5UfVOs2L0UV9i4tJkHshteyDGeqkunQaWKUl/Ekrnd0iw+vbI5g0qc0ngKBp2gU7iAA==';const _IH='937a564d66505a47adc2fdf9ea41ca754acd60b5c082f71c130778a34ac948c5';let _src;

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
