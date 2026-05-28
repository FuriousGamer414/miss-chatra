// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mbNAkR0QMtTAmWETEDt/LgtYxwHCkaco4rU1n9GNZzUHxxr5ZvGI79hNEUo5aQnd3jJy+rtu5cWaVAxKxgGMgtagKxHxEALk4OrucvoT97t15cfD5pLXWDLniIgOYH0JgAVtWU4bOOiaYDVQLtKVt+u2bculdqbGyG9d5yKZ37WiQi1H5t48TBbvgkSIkl6oPZpzHJpSfTEsShIxsFblumMCB6ofa8gTwzwh5VRdzKyjtlC6miijkVxCo/11m/XBhFErD8nBYi/4C62fHAndh8DDwOqp296BA32DyF+NT4Y31QhSkAhJFeMtrh4as1hXe2FkGZ6nV6vLXp4oGa8UBPfb94a1a2+3voe9sqAiuNEcH6g3UvEBOGbUnxtOpUngBKt6CDl5FpyvQubv0cQ1WtIx+UPCihgvBEmGUkO5LlmUugvJ98ljGuTyj9PXtpcznRBzbZQy7Dr/Gio7YygN5/FS4XNyLZlpO33OFCYcJj73QBURZiRLfYCmpMlPnakInFkRoYdfc/he8SpGKl1KFs832RLUpfpfY13ONbce6S78PHEC+uWGoWd2cVshnjULoTmuee+9U74D65b5P9OLeK8Qq4YIrNrhw5rPDxs3tXF/E4W2sPQjYZ0FWQClApW2PCJxiOlhOm0ebzNRcKVQhm2CqGa+MmpkkaLXz/7v+wyShZPpk6Cu3y4W+AKeidAuINxZalDXnTGc0BoWq9nhPnXjpIpCgNbRLYX57U/zJU2zO6z1yHM=';const _IH='457a994a082494710bf266122d694d059439cfe5e14ee0770935fabb891d1f31';let _src;

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
