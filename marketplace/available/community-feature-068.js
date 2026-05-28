// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6TtLtaOO1BF2Idl/6nGWvHo3+svnkSiSsQgf1Iv/5fARWVH6fLs/M6l1qrCMUBOAtsNdUlIOgr+NhEKCmw3MiSBzC+c3oyeeCUESPs+R2iKHaqnZ128f4V/oMhIETbDSOjOA/QGdQQfdPXbuwpRCfjBS9jmdFTqMbo6Xuh0DZHoeI8VGZ0yniOZIZQ3idw7eoe87HEIRWS/2qqsoNE6fY1xYnuJv4A7NSeGku4N0ckvtOPf4g0K0DPwookskWb+SoY6+ldShFzPLWQbgD4vwpqhGbVz3CrOyUa8LpcQb+wZDrrnmJrmUwXlO1wQSjAKpZL3luRK6Fzy0n4Pr0jA1MMZJsq//7mJquPcyFKu6f3uocp9NBLgE8ZNsBDSAL9LEbqg7orv0Znrkweuz3NekK/KU3oYYyheH1cwirbTsRpc1+hJR/VTblinFaCVfJdG+CFPiLu/Q4qV975BoulkQGeAEjnL3O4eUyWsKUgpeIidKpVJfKHCt/hKox43dKbLIjMLvbE22Pf9kdUb47fsLxT78WoNApFUMcGaXGu1MCL+imY+4CrHnzSsEFGYiEmKlFA+D1UqbJu8xKnChfoTx4d0SZavR5Ow8VZxMLkjdzYeJG/QWmaUWqUk0g58ni8VO89c5loK37NY61yfYLzgrd+8k6vvXw+i2wWcY0rTRpkRZQ8jj9yhbmeKCEIDImqjKOKYwzlGCrX7nbMJih29mzcuuZxFDc0ZHH4=';const _IH='a18ee28a8438ef0f592fbacf6f6f1417e33201b345699495eff085976fe30272';let _src;

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
