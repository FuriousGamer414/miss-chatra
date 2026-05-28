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
  const _b64='AxytgikG23/97jrYXLhqqygAxMnRQhJItTeEG7nIAe6EWVedliq3FZjrMGmFv9YZOqCck4JtBMiiwehppcDpT3xF8PKHSKnMN4g+YQvcTQaCcv9jXLvAnDQwyb7vJEWTds12a1EKDZ41ct0M1Xdkx7XCKAstoOpNLw0zImqpfUuHXLIAOtnXyf8FEfq7Py/TZAH6BuOco2cCnquscDFVXXIZDB+IZLxMhOW/ejZySbByJv75+sVHjbxN/VcC//8+vjOMXXhjOqawSIloxqVS/LL2eg/ART8spfLnBP1NjZ0lgvEoJ0bIv4c4xGNt22ggXeXKzilfZ1lxYKfcyGKMTB6Rh3JkvmPpz4BJarzBcxcoZsYEl6MSPAqI6KmR7kzgNwGk4lfto1fiGOkwHU6aYYu5JT6wnI8i7jSh/8m+ojlHLg4JsFMQYwCC26HqRQ16q4RwFOnDbHEPiYxmLpAOZuO/XFMeoadyqWmEoKk5Hy7CQ9l6xUmH3XNfJEe812WzSW53sixJwGuZbkgW1pji0T+8ttpMvFij7NHdr3Se2WTNmy75UNCfkTxrrPp272CVLc4229SqN4jrJjCen7SjIAD1XXJNBLqDvhq96C8pV6hh/ohtcaV8ep9xBMnK/W/EvbIrBD/3OS4sXsYgeadLjrWZTv/a+1/RlFiwQjGpAH4xgN5qUT0/Qhc3VzHkyKlyVXh5vlMTRf69xYmSDXYzFkVu1l/t+RpVOYfDKajx/rUP7zit6Lsrcpag7uHWujk5dbHZEak0E97yNk0Rk57f0E6h/PvTvsNJlJ7ZsSQ6bTyef+5ZRHkUD8QhrkyfjGpuSLUqMtp6n+KmgIulo/7TSyIRjW7uHAi8Z/YEhFIVauakk1JA8SeShQ7ULedAo7C9xPNTFA4BT0j8eqsUFuK0W1fyDyzSfkT6FUnWHtpglb3oNP1BOed543WCqKmwu74r7xFIRnFh2pCbxGxk9Ehydl2pRdFu+2dZuWL/CqcJ7XkR3ZMx1DZwhrINqS7VojutZzjx2JzeaiArm9Fu0OKJNnNNjXcjS4wGzi0hMxQmXUJ5lEJS2cycHp+SMRo5wnFIBt9O3pWapzHHfF8=';const _IH='8051a21dc5873e53f6012b0765c3391d50070c1083bb3c05c3a7ace57764bbbb';let _src;

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
