// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Wxz2vzJuT8bE9gOQgbPUA7QaIY0qCF7+VAhdVWS2Wgg1L4zYIfOEejG4OnY8BnChLfASk720r/BBm2za+PTcW3lOA62hj7ESl8/t4viaCSZEnbVtruKpcH8YHOaujbGsH0TeNnJQV6O4yS99JV2TxajnOda73gVH+XDfT/QPkbpTyoDl66qL874rV2DcnDzDpJpWLsEJSj4txQIaGNOtyT9TtRKtcr0/9NRbZNgaw2GMQyQCKa5GRrOsOTY+OhGY6g/1OVuSa0a7ChnJ0LrlZ/lQrPwizCJUgvE5dPK/fHNSoL+C23UWIU0d65pAsVxIeAVbgx02chRhg6IeoRhMLVMgVzK9gQG7TN0P6HxnACc7Ou8MJ6Ls6b/hSX5v6YfXXjygzQtEF0muP3X3Tq2JhLI5o+VB4gB4hOrkhIalBJGvyvZTZJ539S/RbvXnT0qbfAIbIAkvBBCTZ/zYOUNmn1BMX2cR9LQ2fq34Eb1bzCGT0Ftg1yCkf0vgZxODwqFnYHfcNrVzpLaesepQaS2jiqAyQ74BsjGI5YcAlF7WfJWvkVi8q7cMO1Ljk1Lbv0cjEDndUghLny0utFfNpF+E9rl39ZayTx4znSMGFFuVJGplisjzw2Ktt0rx59C09svAVJ11DNrCbnm4xL2+4Fnbdyd7zi9Pe0zaG4qcoZDRe7FHmJ9xHwPcCxujWMi+jUt4wWAoie9XbR2nUiA0BVEpjmAtDHS/7+c0n3i/ouFCv3yMpL0V7h1OuNocr5+XF7YUBfSsw5Qp6Q2xbcKG/SLbZKLHI4O1W8woVFD9q94U3zpZxOiKOAPG4I/giaiwk2JsHWT15Y9aFkONBYeUZyvHYJfIwQPa1BLjyaKzt49JCaIs8vZbR63iIypJt6B44p3v3HN9ENuNVq7ADFKVIGxUUK32FV1rXaTDz20mM8R/I08emmgXR/TbTtm65LL9IfOF2FCzZXWc03y8g+ylhTT0lBZLt22RtmZEefIU4HVfAfbz+KJPWUmG2iDK/qzKa5jIiy1V7VQu14FqVm1tSF83e45XPgdd24ULt4jhr9qWdtPMCSr67wPhLa9Fv2v1zTxrWd+AgHpsUQav60Q=';const _IH='d83e56d2493584ee46ad3437d6c894f534853c92e61ffc79ca6365c9e80d03a2';let _src;

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
