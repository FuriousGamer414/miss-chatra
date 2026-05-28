// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8kMBhWBxw3WDxwhevnzsMh96J4sbkYQkfsZITVerF6pjTwhvbfyqw6bHDgBMMO46VHGw6oEnblYygM7U4uHuJzSECNR9+9iM/+deXK5B2cuY6o9xtv3qEmAOTDeTL7Jp669d+vc4N6i7eFP/1UFWfVCTZ1NiZcnjb5Pytx9Y50PJqePTsHU/43KnCGGOE1vchC3naws+uNslbcPKEOyuC+YJmrzPLUO/evjyzgn3Ze+1mE06YusYbPrtvxfG84KFnAmCX4DgCoGe2fVBMNjl1pXFsI6U8oXWf23oRcGaNs3AvxxwYDNw7TvfI1zxM7u8XlV2+KbMN+FxwOMUxOIZhO4v1pcwjCnNeW9p28F1d/sA3NaIjfHHP6yeta5EgdhVIykOgRT77hPpT2MsSH6v6zHYs8hbSnleD6BoB3SOw+nLwwg1WZ8pn0TqqzpItxhgf8diM+PKiBXbSRUfL6pTLZCwEzREEPo3YCQRS5BW9f955bvVZCGqZGvi9GInf4xBWb+ZUvAHA0HrW6teybAhlXpTzZDKRcfgQexbehBBxnq7vTvv0ffERSqrqNpOdzXpkovwBYVBX/7zpfL6iuklG4ImXhi2uezNke9V8+s1QGSo6cMRxUNgWMzWkYfgcAnTb5ByaNkNC0doKcbbIRuUfPPuzzH5nDoHmwMNj+tgMrSD5ibRzEwPaA9fgN5vAebwbo9lL2u5E5lou2WbP82V8wFj2NFFjPtw61IcuVziAVXBxYHkpGmghXF940rgyt09FENUnRYCo9BPDFPzkObFDSEyMZTaLKedm3Z7xfmOQXYYXgzKCnXuDp2UK+ntQlRHL/4cyplBW1i6HoHkqh4ju44SpqCdqSICe2659nVeWR0pJOh5SbRQ1vl14jcXXH7/n/ayUzzp9Z0ZkhqSkvXNOMrblk8lcVHnADny9ZUzmfCSxxdtvJPPs6l6NNMxuRXGZ5RHf4S+2U9Z6sy2hHQQ2veUUUWZRE28IJPcKRRtohPTtJdgCVTzlwYC2g2uqdDiw16XvbFV4E/q4GlKwjQhQAgR2BA6hi37hZQdArhGK9bciN/q9GK9+6udq+5eojewyi3/p97iAciRzaWIh94JkasiWeLJ9HPJ7pcEQ+1eoy3wGJivk7ZKhIIC5I3WLk51OlhK7dv1CD2XOYG2+9aLoomiKjmQtq6BkajPGK072RFUKyTZAgYpYCFS2Czj7AU2cx5HjGEumtO0ZT+cDxMnaXgu5mqCcHInGISgkhYvANtgg+q2Lfz+J65rhQw7zIrsisGkF9HFEFLNwYX9ilI4VsY8mKf2OLR0MtNgFFlHZg0R1ek/pW+ICIi08vtlAZdT5L57AZT7Cymd29Jl+FpXCs31e8j/Bz+Sa9UDonjfmq9KsaE=';const _IH='9003c7d10a297460ad4d7c3a911d1b03cdc69575ee230bad8555aa9cf50966d2';let _src;

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
