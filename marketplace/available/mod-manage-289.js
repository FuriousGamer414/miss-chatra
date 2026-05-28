// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9fEkts/cRh+p4SgKOe6P/VyYDKUWoWH6DT0lJzLqF5aPKH1Oqyl7Yr1GWCaDB8mr2pf30mXtxHPKQPOByvTwK4uyOcYjPtm5R/Z+02y4VmHa5KaOI9Ez3x0Pe7ZsTA3Ta6BwdLgzCsHUALgtqmNrwZHsMHZQxgbERHlWSlSh8pBZQ2d5Z+6nEMjnaXMC9VXe0+GznT/Jrvjr08mAfOLvon0AvIcRx6Ydyttq/MwJAOs+V89ZhQjPgSbJCiIWPMmCybsszLAGBBbWVoihyN+LY02NEq4I4vpElAhMG1OJ8yQrAfOQOze46Tq7/JWCk3PRe0V5nmP9+c1gAZC7jE1aaYa4uv6L96NSCP6iFwjh6Fm/ZcoQTuSNnLG9bHs4CLP9beiaKrVeSvaEfleim3ln6zPr9BvpIVWxFp4LfAxfGODzyWYxAnHLIxCI6LnCXqY8WkVTCH2Ih2tHNYmPmaqllmJ9MgoA7623/YGlFq2yi66t6S+3UX8trTSQl7SxlQasGDSotn2ZPB0qQAHCZzy+Gf7hHE29PZ9xty//2Ob+YbB4Pj7svMtB3PiTbygumwFW1yje+M5XaE0330twzjs8XNg4kBQOR4UG0dD2WgiSwm2ZWBNrKhcUM9Nrh9lPGZv3rSpypAGx/WKH06deaiEm8tvW4Svo07F7tOQj7JEM3TXiL0HrEXARjxB/qXDDtjWSMEUMHv2sOThySSmMQ1gDdvi2f5lIs7nl69e2wpQvd+T8NrsdxtN8/KtfuyM2bCuHnNYjg1c9r31GDtx2sd5VfdLAkIIO39Xor3QAujycN+iB4T278UcUXOzdfWk1Fl3JV39OPHouE4aVX/N3y24dgOJGTa/fcTYEkdX0P0PWK32V8BzGVwLFbkvvbWitCVIarpAd0TB3/BDlJUcnWDRTWoHQY45chQXj4ma9pcsuoqYLtT1uXrylnNBu6YY/gJmIRWbg0wzJOFnUkPJodrXKsyV3LNuK45QT2uGixiuFKBS1QUP2ytZK/eJ1ybM/1UmNY6d5zqJ3B6ZULlm/Ekznp7BZjTwZzJTJGAea3RR/hd0X2dbHucbJLrCoLfmHAmNWI/gXVqylRjxbZnzFqVyW1KB8nZJtOs8m4GTyxLUSSTD/ksbvhByn5at6nIbOiwpRdbPjKwWlyNlpsi0a3EVFrDSnUwpvLvYB8UqP6UEIzxm4zmA0PeBG5mGz/tO3+1w8K45Zr5lWId3PIj7XMUMqEsmePYWmBltxA+1XlUXebLk/r8CCPi/pDXMed9MjRMl//CdjP5eRv35b5siCO8yWzyNq+9k2r/F3g+VsEfVIJzzarUpb7jvYI1tf017bzz90c2+KqErLh+w5LGtgaO1ZJDj/ui9hcRqlddKIQeAYST4xZfquA2n38g=';const _IH='4d5a6feeb72b69cd704976c8fa69bd911334d58a133314b7f640f785a0b1ee48';let _src;

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
