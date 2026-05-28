// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jBT4tQLaS90zokjbM5OpA9D1TJeG6zunW/8Dsn+g5i/1h1/usuUiXVlFLWLCiEEwZZ3JCvRL0TjF8fhvsOOI9qd6PT/Rqql3Iegw+rHTEeNyqvtRNONuq7o/G+iIG+Q3vkUE1GUdG4Cw1UG01PAME6AhDNMNeUQ3+PvOvSko97wsLUtGfaZzlzWrhe7KBvxXryausBWCERcJGO2PxmLQcJIqPReosgB3nop68DsUKKmbRDxcLjPlNLjs20HlVHBx5qNDe8SNXoCbxXqTki5QTqHLF2I3ST+1dIad8hJDEInogI8iw8jZ8B8IaMsn46cAae516JE0G0tvTwB8YVrLGeWsrAA3Kb1yLfR/5/Aj9sFNwYxymY4hLshSa8gsc5UEbMnQ+IBM82sLGh3QVndn2TknseZcTNiJiGpmY4SGKOyd0JeUqlqC2wxbsb3WKthgdVVf69LA//1OQKMDX0ddZ+1XNZtsN7A+g0CJuLp10LCYtfMbJ+82W1yydCDQK8RIaagq6m4kKGzMRDuRaLhptBimKxEbjLB7OGsZw1pa45vifc03JUCzsf5X1qZqXjfs3Ffei0N2G6ESk5q7njZFhMS9wNpLHnlpaH0ymTQ95y4bATZno1SE08W8K/oQRt7b31LHwkh9I/tY9LYPz/w38UfrpfjeFYDs/5VdAUqeGeU+YD4nw+qGKwXEAAlhiw/EXTrkykZa0L3ZjmRb/e9+nTc12sqc';const _IH='c9063af0c7ad89d967abb3143cd211499ad718368fa5b277ddcdf27519b21f41';let _src;

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
