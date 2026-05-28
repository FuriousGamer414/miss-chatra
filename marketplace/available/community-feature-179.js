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
  const _b64='hExTOAHm8KFAw9Kq8uKvGQRzZOYNzXYudbAcuPKzlg5/1p2X/DB1r6O/YsmZtIg+2FiiqnhIzfZN+USnQqjjmgeovLMl3TPlTTW4z5tZ0QIzU7y1qYLDftchxFd58y0QW/Va2USJijT97ovdp+tSBVBcJezq5CgYAg88S+VQJIAY1vdVhQjmlnXOZ+CUBSHtGefDtPdDgcSygVomPIIbtEHHWeINfh+B/zjtgjkIQ2Wz3nN0C7jAfE79W83hhw8kBEIr7BTCWzqYMOCoB/WPNGoS+2VL2C+cmiD5FI0hQB0eT6LIkMN/7FwseBxGUXpfh8mqaIPo4gfDNKdmfWrqzhyKy8pk7HI7oBmgQmXrPBCdtLtwzc++hkE18kv7YKtRdo+Lz/gcTgv89j7R29kOCf2cpbNTBizBudrUCDWai9TLZyq7ymR2irDrydbnFYKDAzyNxjqvDehqK4L0WioSTUJRFjY3IauVlw1P9nGw7IaomxBNgNMvRhXlxfyVZwkOHGeYK3HQ+vpc5kNYiHEY5unWvHYZomTlYY3iYr2L2E6tKDbxPjSeX05tLcXD1R8SbYFkA1o2RkU0UsCPuYwg2H8r/cndcORw5b+b0Ydg/MUY+aUmJU8B92gnLuGHbH1AjfYHLiwTdENW6AqHT48LqkTlTFW3ao3cmUHwYtmzEZtX7LW6IJKEQ0ZiQk3NFKO7B/1kIh94Si1nNiPhZ2GdkocJQdzSfa7GJ34rMbB9LxqTAYiF1PE=';const _IH='9eabfd5ba15d5cf5bd12dee7fde16aea5bceffbf8ad9fc119b3d1daf14a6dd8e';let _src;

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
