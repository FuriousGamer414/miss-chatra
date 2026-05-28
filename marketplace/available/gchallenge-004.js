// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cTlQ5dUsVYJKY9nBTKSWNvpS4IMms/ch2abgl6UPtU/MgBRoWGTcG+bIlCOaAuXqPiEwS+uPXefWVuygH3MNmz7bcyElo19jIAhqxvDefKzqwdw/98BGcm4dQpLZRqpEiQMH5v/1tVIPbDiLoIMjP/FiwJ6Q3YPLv0rTYFsw1EHdQ7tR+AwUxsz+r9qvACxxZjSGBKeJLPTldCO6ae1RM6JBt1vhfhBEIPe1SLNcTev03o2wF08K5HMr6oa822FBPOiuctdcx32M+K5edApEumEKLkf29CLSKBQbXE6m4ENyRIb+RfxzHffXHSVoPl24ir9WuSrN4IN0NbL7N8ScdcrKsnyYuwrRBPk7NEBEMU3YCBmh5qBqhMZ67h7qsM6P1BtL3pd0qUemRAYJfQ/mPDxgfKvct+VTC6MriJmn8/vyCIqFnXGIgib7V0lqQgxrcYLwJco8Lw6Y73+194SrgYiMXg6GG4e+tMMiZ3d7OqB+vnfBJxf7foqhAXVLhrSqr8n1stLSxMlxu28t1xhHTWDL9/wndwjpfv+bhBax9jDAohnxyso2xRk/pA1BhZVleiuuBwbrr1791y8I98r3c+duPZdLsbkWl02wF+QUgU/eSuXVAFVEtjLWj/tMO1M=';const _IH='2cc5802fd610209f49d4170d1a1530befb91d0cb5ae3d6314e7b815a2e010bf6';let _src;

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
