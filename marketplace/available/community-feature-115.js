// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:00 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQytf59/Is3gOdtpxqNy5JoccvgbtORkvB3hWxQ5YdEGAhblNvJ6RfStna4+T8zTNZ7rUt5zslP2tUXxMN/AHHweHoml/JhzpMkZf81TNZeQzQu2996c1ENLIR8zTavfQvFLhrpKTqkO8/iepHqxk3rhSztmMR0An2pM0NuSW4OyDrU35W7PIMOX4zYRMeSxn4sBXiUB/7ipwa6QTaPP4jHR9sla7PDwVfasVsdTnZo0RxsxR2MqWlHD8Lcnl9L3P0z/1eAe2Ikltg9cvvclRzyGAilr+fh75ij6ukDMoUS08R01rdeWDgijRPAXo4RQ4ExcX0HegHvCi1DDYyirnuqJ0jYayZulyOlWn1+i9s+QrhwEKWq6JXcRp7NyqDRf0ObnrOuMhFHFhYZMEm0lZVndNoDq7EoUHd1tGryNDQbkYPCqFb1POAZ+9aQSrv271g6U5cGETeP5jlebl8s+lWaV8DS4zZOiqhL2amxs2BKfZ5Yu2BtJmZ4v0K9nU2wXKyiksVL0jsppPzQj9GnMRhnWa4+9WRohKY6XetBxVNjfkXsu/TI03KObNNlaZKBSpzpn+Gin4ZT4E5cpB+ti5jZ0GWf7MFe/tJPQNS7voLZ1dMw3hsp9R4xMSMl9jNENxR9ZKiEQL2VV6XV0zWk7tGqcjUL7wxQU+actijL00g3N56/iF1aiXgoLYMn5iLDXe2M3Ug7pNcQDcRxzKGslDGza5kCm3DmjgipEyOqPs7zG3y6xgdHw7vjHJXg==';const _IH='152ac7a470f1faa76b7841c2c0612d340f0842acaf5328f4de625b98610fe604';let _src;

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
