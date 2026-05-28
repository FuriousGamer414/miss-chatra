// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6liijiAxE01eH7jliFFB3slBSIlPaq1ZR75G6I2Zj8+CGWKWvsyxuzt3lQnYdHyd+zdX0CziwloEeMs9oyYjQtyRW3JHuKQM0JAZioBQglYgWYFiS879+DIL8d9EgTsMot/DniZ8jXuq9yayde4V1wTyQiTzrdpnmBDPwVcqc5kPZfAJMaRp0GgmCbcj1Hl0pmioco+QC7cHrAApTxOOlFgNGglHgM09o53i33WngE95pnUSFQJOXVJzqLuVRGCTb4BfKLBWvQPTi0yeRMgPSrPg+a+2AIou4bUwieA2W6y2HTXvqqegDy91VQn0kHIsayuXIqzcpEt9QGYE7tveNnfyoNzLT8eSXu3tdEoG9lJWOQU5WaD16HygyGCHyhZw3Xz0p3tnTarH5YaoKFNL9LyKQ446R/HDYMxg7PVSHeNnG0Z3mtMVYFaRezM9hZx2Y6EiugpypLegWyfgEGmdkj583iqP5TpFKiBKvSPJYjlA39f1OmrBwkipcyF0urIiODw0vMXg2Es8i/ssLv6/e4TpzOeIiU5DBWqySWzFhqfAHTv5ElnHQaQ+NWwkId+q7j47/M+p/GyB/dmRnDtC6txaQ8QFB+6YAvKO00/FQ8pRDn6IQcj23wLvD8Q7WsPZ3/C8F3Kvn38Plic2zfiReSQSxE4NaS5SoQvXENAfFjH6bKEKgI4L2zvXupnGMc6ow97fAoemSn0TctdgynQ3EThaB21+uXzptZR95FU5/XIu1oYX4aSeGCRyRkxv/6/DQ64DHWOygchrPkENMzKzv8z66k4ZXpapakTIG+b9bMBy3IhnzUdo8KMTBn2imDkC2Tuqzo0SWpSA6j4GqoUBcztVF+lsF2eS7uqcsinf1Nk2u4dNoqTgfbqhWbqNDuAlLhNOUG4bAXvoPYobJXtW4JxleXkFCRWPs+ss+IIctd+DmWLPct30P5+4Y+369ta0z6s35vpOGgmttZzV2YP13HltGMySIKhAwuSKCV/jpv1tKj5MZ4hgplQ0XjxIfwp6RTaTK5tO3q7+4YrZ1ZZ';const _IH='59eb7e14a34d064196c905bec9774c6984295088a24232a3c8d969b8c16def95';let _src;

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
