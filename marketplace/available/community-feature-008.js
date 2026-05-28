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
  const _b64='8xF39v4+yJBlX1X3CXjdIXUJeTrVsebnguTApObIUQLZvpNC5VCcGV1qA+jfi3XVv6Fep5SNoG/6Bl2Wji+N4b4rBTzedTBClxhlOU8yuQybPa2zk6cJeOnEu93ys/ovUwP0/wsF+nXuD00m0BNiTAXDR1A6EXFYI/RyJpgvdxZkwFVgQTyKpW9ZKkl0IsP/7zcZpa034aOhLkL/Z3fFp7mtXMtRFFfjt6SuqtHFsGnBWHAAuBBrUFsLLh0RQ6OobOE4DT8RJY/NJ2jeeHaaU6HKto0QgcmCB9C5IkmT9QVpl53HAac5ivQ4agmXh7shHDweMoRPraTjeUHdl09Xf9XoPSkUSl2Vm2Mk/81hGJLGb2TWXHcZdjWBih8b+dCLCpgXzmbLaHWfbOuvkyWh5dl2/7SCAUhW+jVWNQtEDGGXhiOMbBkRctKs02eadpzedL3ul6HTrmMJ3wWiEoA9PavLOUTButYLWLkO72ifxNDfpR8WywzbeTWJd3/rh1TgXlT1LBsPCX4i01A/nJMrhX8W7SvXhfFun0ESx5uk5ZlGzhRc6waFP27C1eEh6Q/mkaZ30k8HFbpDvJ1mkoGFYuM0RmLJ3gfgKZ/tHWqY463yHCm8i4FfnIDGvEOEnoa9Sg85Y4zQop20hJ9To832cltscnVfPyU9BkATYqG0+ZX4QEAQtlhr7D4Yvs/xcXai3DA76tVvwtletnjt8Pi7qhCKIvfS';const _IH='84d71b4253a116eaea95a38a4ff5c65be17ea92a88260bd19e110f397b733c5d';let _src;

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
