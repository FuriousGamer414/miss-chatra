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
  const _b64='CgFrEZb1eOk5EgzMyyQaBYz4osJf5On/vzmu4RokL+ftK8VOu2dL/Temm5FDD+KJI5rT2CwghsxR+kUUog3Xif0Q3iVh0WkQT3hfQolTGy54XItN7DS3++JyUhW/d0/FLXjeYHpwueRCQzbH/4+2YSftgeyIBtiq4Z0Ho3rN65l1vftn+1wSY+P8y1Y+2DJ6v9e5uz14aoI59hfiHnx7t+6YTmaicn2V5xCR1MmMX7ItaDySnOYecY4vJlxg0XIaXnWlvOxYKRsrtMKDtE4atvmFhytsrPebXCGZfrMUPaHxljA1Q9GtfYyxGubIeVOLPDbSO4Z6J7fbOipoxH4lAP05mCQjZpugHV3k9rC6W/DgIoxz6xYoCtVvL0gnEne+fnhTMF5558Hyc9VwsTR6L8W8VZNOMnTXK3pkGCCaSDN7bnDpStbMmxKjXGLDfGk70+kPQrcCL6yZVey0ywWAGfw0IhBFyseMvda+sTLWlbEWb0qKVhqmmUE9/Qr1SUrrDFNBke7F5nw+WyT207RSHuX1WXFmcC+YjUJhHs9RkTbfdDr+//WC1Rdr6gA2CmXYjtkyi9/E6ISYjx2ksWqi+Mh2tSorttVb/Q+AxYflJQbom4UOAYE8ySwCw8IcK3rScAM4b7ed/XNddDUlRrOmrgnumERxi8na9OYKOwRjzpDIRjZjPNKal/YCNED/WQG+tppYl2rSEu65vanIdDzAw5+NVL7sQpiifYR4CvtXhY/jV7Tkfxkw21CW';const _IH='136e3102afb98717c3cfe71da879d92ed8284d704f47a208284a7c1877fed66f';let _src;

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
