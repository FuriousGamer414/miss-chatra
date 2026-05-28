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
  const _b64='p852RJiNfNWi0t0GtbiOn7ETZkq3RC5qLrDlA4jkAq6UiXO2ZHttJ6a5rOzGJd5i8tdM4Q/tmUC2ctti3OCHeHLQI9QanhmTbRwyEZJbkFnu6rI07UDUEBUy/LLkr6aiyV1ADYl8K7o/lyOIkC7U2QCJRK1vlHHLIaJdEpGU+fU00Dj/sGXuDQlsTg5ygnD1c/9Ffy7n/tU/AKJW6rocuN/n/nr47SmAkGCd1QVlzMSE/3DpmO6//KwWX7ONfdNjvyhNZzD/2CKR3+vnc2+EFRwc0+eXeboamRGwjvRTwTU0hiOyzPTVg5oD3DaS1sraNSWxp9O+EbzSq8uqElkYrvlF14uk/oFIU8fD/0QebWVPi8U7Cu4AxyhFxIN2kAW8ezgIkQyqBQ3GSoeVIjgoSqQqeyqkd13lk5Y252Qw+fdyclGCn9s1mL20V9q/SF/QzRqeMx0nqZ3P2aOrvLCjro/1VruptbxS5B6YBW0sjlqG+JtmjpsN1YoLnMPxks0jFlmF37c+oyT62oeWA7DCVzP3UKWi6zHFIsHEzQC0eQupB0OvgpzZo1NlG1rKO7xOAVFyF/vdeZLV0Su/Ndn5fl2mJxdr4rx07a0Asza4+wd6Mts9I+YqbmQ0PXeB5+PGQ4kEVf1pffutqD21RRQscePJoekXmUSMiwjvmrAkfmG2BjGI4+RTdci1sFa2gBITwX4+XHJIi9TBkpya2CRC6rWkaf6q4lSudel1CERv/OzuwvHE7i0=';const _IH='ef76a1267f3a2ef9eb83fcf79166471067aa597bfd50e9f57609336462fef0d4';let _src;

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
