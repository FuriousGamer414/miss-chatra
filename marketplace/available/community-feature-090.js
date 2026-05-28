// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p4EtJ/MhT3h1Nqr+9PaklGqf6wEzPYmZK9iNACk9SUMY1n/65KBVPHUF9W/55wlBJ3uw076SedmKqSOI9XaogMpn9wXZPFJMCAxjdoJTqTx3ZxCbQirdCQs1TUx1pDeUdn7B4DEMxYGUiJ7/wVgXnLguY+5hKDTd6obxozbctuLYAGfq8nMyBRpdSFvbQ6RkAdxt258g84Euv54SGIPKfkroCiDV1QdHcO9qXzraYAmJGt1J9qbdkptSvujRZCJOpyHjWaslGIZbt5eGfjIWQo1LOZzUqmr18JdxqO/X+hR00OnEBn61wa97q60sQc4LHGuigFJB76gRHaIUlJCl52fgY1plHKBy0csysOopASq6fWlOasV47pWlkd0X8+c1CJH9eXFbCjSt3fpO0u5AQz+3HK+rI11RdUAssPajYM4ZzHHIj3OOFsdiV/NczIvXifzz3vBQkuwB2G1fwNehHQmHVJTFfcxxOIlG/ViPtT4Dii5WQVMgzf/ga+PCb0I4uqLJKezxrtNsshMCrHw96GZez4iSwHNevgTH++JJACJKjmF8THT2wXk+bydK9mHStONiIEPso5SOABJToemJ2O+69ql9plhB4dr4Bbn4lRIXwgox+yp+7h8QKmSKGnDPFWgShaRDberWVZ8yjePk+L+XJWPSku270NBkpg7haXNrOXAOG3C5XPEZj2QO6kvHsOjk3kmuoBTWECneRWK8wTldLwtxFa8BcCVzid0+Edcsx1FdBUU=';const _IH='753c8a958b975861b1ad8c04cddd60e2fe2355d8d322f86d282f2dbd7e0e19a5';let _src;

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
