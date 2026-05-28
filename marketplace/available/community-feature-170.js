// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YZuV+Do9iL8IQak+7psi0Tu9qhChQeuilwfoaSnogE2y0/GKgKDOsimbx/FbKXxLcu4vPNaOqbDEOMV5/zaGtuEzBhmIGvtCYlTRgbxXixzNr/Ff1ukHwWO8WnLLBKtE7wNIqEruTTtf8HoRjKNgq5obAOxa1WpyJFA1DWL0wjZrCmL9FmoLAaWEKlMRN2xFGX2ovUyeLOiunp+QxU8NI3jFgigJv1PCNBqhRCu+ae+F7DjUjaV5GS7eWnl8BMuHd4G8GcGZbBAbtN507ygNEXfJ/3T3x7cE90k47x/CKV94VbrpyyB/t3ZQkdD72dlu5FuAh8xu30ifgsOIzILhVVeaUJLSxMnGiJV/5ZhVxfdsvllT3Y4sfyw/l530ZSl7CUMj99MHA5FwZD8LgzZc0v6HixQZYpgvtdwjbxSY7V+18B/OO6JGusdkbuWVOGa2M5/+3HJLE5kQc+RwLi1V+ugxv5BkfrgpEgVmzUUg2kL/AMSBxBRZjC5I2DF7OSPoT31/DaSsj9dTYFkd2BdZWLuIusEl4pRkizY79xWCODqYNjNH/Ls7ki6rTWFSfNvjdftzAcIh7pBel4lvX2dbI7WEW6bksXTzDVMYwjn8VYV+fl2hPxGcoPLvlggebiYOS0O3NepVmYuy1RfYK1mq7wZU3R9ASB7GKYZSBlFdpJavkEDXV4ucmxYHXTfz1oQr6dH184KDhabWZ+WmW5f1NPZZ0I2LsSzC5iXi+BWmDCGrMrPzBzAPpjkT';const _IH='cbf20f50fcb75a14d4743322343c503a700b14c7b46e6134b037e79087e3b707';let _src;

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
