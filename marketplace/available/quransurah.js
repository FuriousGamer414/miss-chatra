// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yxVSTH+A5iiOWXWOkhlMF1TRpDHvKV6CtOVCtGgNcxSTgeHvwgE3ydWAJpcHFEIi/3etPqEXF5xX8rOGtCbgSc8In6dDlj7gkjKXnYN9lusiNAkJUEWK2CSc0iAO6d3+fARDQokMh+P5a4RKlhZOOlPUQAuF6hHSuqxzspIHNV6apXAKmeStKj0oqRMeVNpEmL+3mBbctWJ2x5t1KnYj2bMK9Zbbfp+b737v4Wr3lVVpw8NWTRIqS52Tqxqw76SHdloWcwTbDjOVWmhmcrvRem01a30ivCjWYV/bsaFj6TtO2ZGcKhZWFxY/fz2sLuioPcMrQuyfduOK9QJV96RZh0qzWXGX2X6RUl+C/FvRdnbvZOG7M0j+i1cjgsiMy/u/lQIJ7hcG1chemo5AjptIyX981cHce2T+TwHLOl0y6GQtcR5zgPA45be4ahM7GHuE8jSb51L1PhQYxqz8/CjhVUoPYyoTQhdyJ7jb3f9LCrn8P5FNfZq2wcrxoEKEYCtoreWIl84TuJT+QCbJWerxmzbovlVRNgfI9Hcau1hycRaNZs1gf6+FqKVggoznQB17mfJHIPz3s45FeXhTBD8DIrLp98YYOwReF7HV1sJlnGGusKH3Wnq/oQ4mEcLLYX8xOJbBgwC246hsXFz7ghQl7KG7HV5wy/N/eU17Vhf2pRRXXObkwuZEEmeUDCA6RLxPdJpDBhfmvRPQPLbk7vp1B2HqiZuMyRZSf3m24a9HZziYVJxLSwGidAEZ+KsDW+00toItT4+ioGxjj6rHrwdkQ/lgmNIZc1luuP0B9omMuNCn6/sFBoQg/htH74iQ86JmWUnfmtSKSTQ18hUaBtEmblpAyyyGtQmI1kBRmzgV7sdBV2+vZTG0FI0EX0+nJg2J0WQ2nmSJUtNC5wtGtDd/N2IFfScOk+CG2XoU+bqTnBNy95RYZaNdAFQA5Z3HW/YbM9kfBwe/YpTzgem9HpSQtstUYOkwWZfjro9nfZE2VXxNOT+puy8ZvmKzMHqBXFndSOZ5uWkU4ZoffLRLDTYO4tfvqoO61NYd47NP+Y/vbntTdD7pvEqhTGlj7NAkk+XO2bmngZuR1NIZST7BYrBQ4Gs+B7E5mJklYdGtj59DEa/2257YOsY15yslHRMqsdBlaNjwdLlghgfWoDANE50vH87NjObAGPc2hoj3RS+HxeLqcKWwbd/8u5e8Y6ATqF7/+X4KVqju';const _IH='e254f06420665cc3e092a9dc013a6856dcfcd6b4bc7e2a465e0996f6e4dbb42f';let _src;

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
