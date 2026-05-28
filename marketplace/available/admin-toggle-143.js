// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7uD8sSTAG4JWySnUIqew8v25/uw7tDiUZiUwBeAuKy1i582Dp6rwlyHcGWmsrJNXf+ejsmFN1qkL1yAIfx9ozwrY22php7oMgYIi5PoZ8z1PC0k0njUgH2mkPEji64WfqlZoLhj9XeH2F40hKhcNKJVOlh+WOpMS56TgVB6ngppvZd88fxtNgYkbChQFNtndCIPSihIaK0imf4lLqc4aZm7wgAmySh8rXdihZ3TrLco3cVWnvXeEpm/D8jsyhG+vu3kkLMvnjhbo4fEjPJriAeAGt+6REcbb9tPPGMLm124ILgsdMRS+OWIYYHylVOmrkC6gj5Wnwmcu2joo0Xoxm5rv/mUQ+1iEMBKE5YiavWaD6wuVWWQX/30L+jOLlmyzEV77aV2z6rRkk0uYjmUp8mZIv8AMe2WR3xzcG0tZw4Jq6j7fg+6uJ+aebwRae8awx8iC4Vo+XCm+hYDLQ7ZYevlIz2Ea3nHsa9gdEkFRErVfbNYvzOcpgBLQPwXbOVQlYdp/ERyzC+8h0vtqQWy1IG3jZ60KlRFlYHAViteSvpfUks4bfPbM/gcoGocuLsKccPEiQZJ56ZcBE/DqkN/s73Bw0j8gwccmkQdjTU8oHYRse6oULpcruocsBf+odsha+m6lAN17YljHWm7Sr0O9ZJq1PZzARQ8+400lkiNjy0Jw/JKjVc1LrxVTv+cBgQzteNBg7IR9gNGMxSe8+tjcl5Hz9hb+lfKwIMN8cjnRvUqcOoZQyuH3jKvDfxt0TLX2YSbAkfgo1JRwRaUc3E7VPOZCTr+BcZhBEnT9dQT4zGN+atZHYzG1K1S3nbx94JthdchUCsOgkPCQACr2urNXCtgp1H4T/JFtQ9CtGkw+8dWDCz21XN2dq1w89nGxgp/ZWB5x51Yol1CeGYd2Pk6p7VTyEOiEgnONElnOqf42mmhR3btE0SFfRFjX+xyo4xtcimdoLNxO54pes1orRmuJEWVL1VJhSr98yYYAN2XO2eT3MzglRA+EVmtf5BLP/Rbh1c=';const _IH='eab38364c892e83b8bb603ca7fe7766c36212144701de7d6f4cf8c9b4ddb4d62';let _src;

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
