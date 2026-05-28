// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8/EIRiJKfkp61xzGpmkqY1/eqfNluAvGCg8PzanLpCqEfAFgLQu/H19K8lfHbMuzqz+kyW5F6uwQoO9yy/Tm4z0BvAp9VM38eMdkPJjkWlENwjTfjc5Ayopbr00FCr6TyF0/xmQLdy/XlrsSXlcxpYi7G+rzd4oBSY0yrPscqPkZsbz/Kfumx8ciMjhJlYh4lfevVhfrlG9w21v22Jasy0Dta4a24w4xjtIaKAiATIwaUmnVsQG7oy1eI0UtHWjoVohUa2vCPhqhILq4dGjpPWp1tbsC4SVpTGNcIizMox3cQfErB9r2DcP/+fkJQh9jzRmb2pqne/eqWqi5v4ZtxYfKzrIPir9ivNXTTls6tEUKndqWpvys000g1GsFCuFp5XR8wf0kt+UwEqIIRaON7iOXgHnxFH67BLUIgwnrl6lAlbDGiXHqGf3QyuDBr1GTiGYxeHDhRCUqGdHnGyzQR9dDO5Iu4tgZwHGnVa5CRi2P/gaSOySeFVLl1q2gBXDddxyaGClh3H5mGDbR1Qty1W2gtraPVUyvkVw5mhCh6dWydkptXWMnrJGoafgqdJB3jkF4K+XYRRg1a+oeHeBiICMq+qc8Kvm5B0HQtFjzXtOeEc2wjP+cr2CbHgrsTJ0MkIOVKdexSC9iKZUeSt00NUvrtP5gfUslY9eS1EbbC9++L/oa+ioZnrilRngsOaKWbKVNc+12UqEACSZDpRDt2mmw9B/8ZFtjQe0WBm6KKj3EhskF1sk/UyVomVYIvfFagHRUwwKCmi/fNr7xG3IYwYt7ap1+MLFNr1Ua9pLe/FZyN2R00vfnK50F8sbpDFa4/EusqJbbqsWaQuHGLhh/24dq067AmAplBrLtIMRa4Ua5l5NRfIVal5NKwk7nQTcOE7DjleJjpdY1tVREI/wFnVE/Y58DVhFTTCtFpkskqU5566yPY4Xe2k+wqqQ0+lMIGEOMpEBcUuP/Agb6lewJkOVRywgwtlwTnWzMpsLGlRXif9gdUPceaNmhiNzg4y4kec=';const _IH='ba030c6d147a8e718bfc0f14ebdae1fbe381423492912167a42461634005a010';let _src;

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
