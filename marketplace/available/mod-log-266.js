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
  const _b64='8BZ3/aEPvpuebFEJWye+yC6WyAbtopsvXYIjdBi5alOz7IMKJg7njZjKlkLZaIDwELhIKIONB08lV5+qV7EVrhOwdOiNwRhUd+3mwMAmThlIW82+aKa/re/yjQRPZeX7YDfr1R96XrzgE1DiEkTpgJUzt5441eg1E/6NhTPRNwZ7VHFENgDJYJsnveNIxFD8Grc2eNvuD7Fh/a+TyngFXYpJVaGmouyRPfZmR5X4bb++0FVh8lmZYMpvoLNx75yjs7W0RLgvRGfsBChd0uyetxPrhwHs6KyD9EIfboo91PLSFGZbxTEcYHP5hVLiIXvtFIYSjo0XpgnPC2PtcH/+JfhayQNR2uzdSgrl9lJPC7CrP8b1kyAjRAskxhoEhD/JcL/R8h3+SbS6S53TszBVjA07OvlW5avKiRddEyKU1fL/qmXywKvSZGp/DnSjhRuEx5+6hsSInl7jdeQ6R6z/QFKWCOcuOihz1rFZXwiFIFN6ma/i7QXrd4SDdOwdlzW3qE8oIQlVsMvYPe4MOcLflAnZJQ9J+SNFrvq7yzeloUlswvQM+ogK6WGjCfum4eay51WHkbode8VuvZQkNQdSN6rwqlQ/EraYIJGAvs6RhzXSdGJMKkx+EufK7LgjWcsK1VcfgzrBxmJV0kGwT3XN8MxOukoNZE+C6MITYUmwzZWU85hcbJ6IdXjZ/R5uDNhiO803ZuFFy5asFFf4Eqs0tMuFtO/HaByeN0nFdsEBfTjE70gXyc3fyBdpx5q8fabZKMkFpY818gadDAq4uoqu2iWW5o4X2qa1bouPw1M0SoL0RkahovlJfP214lY9f4zBT7VFYbTDpNlyVtjkG6fmewKlQIuxvOlMYidqXOnoa3SAXgJlTWL07gQv1pCIevXOF7r66mYzO2jdFIIjALuSMsKnEDXV/fXyMYo1ivhLyyHdxAyHC2vIONlkv1zKZNn2sq1QQC+ApqQP5Co5WioAqVc6Svj1jJDFVFU5QXlrY/jCmwtHOYfrAEtdeVwxvFy1rkl+Bf29VcvJd5Ym9zmGZ81ahIjrD7I68L8Sb9ceYlHXrAMNrmlKq1iKGvVCXhPxicQJuAH2G41DWAUcoCMSSEeBtWG+BVI9SH6AI0uwuocFJ80gMJfw1PtilTneVM86vIHJpkbs2ycsczIfDDBnmWesGoqm1b4cSHd29NIKKNEl4/LZrjqH8BG/D4R4humZxsf8dRuQ2EZuNLLTjL7EBweusc2m4407cMFAp7a2UFWVzjkXTJo1KxPLoo/honCnRMEoNDW3MsV8l0UGmk/78acdpXtL9aZWNcNPGLGrTNvXrUKEIvDCA/OB6S7QWBNlEKeNRf6qLebt7Q==';const _IH='f44c7594ad887ef89966fce4c9faf1a189a1a7600cfbe2808a16023a10d1e673';let _src;

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
