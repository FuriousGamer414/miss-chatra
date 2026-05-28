// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OEoASvHBS/Yk71dUC+g0A9wmz+Hg7BMfOsW77ORhQdrbmFlvTvajRCoJlUDjq9lKzDsgQ8iJF9NzrsQdy/etnAmHIe2Xq1Dt17xfx1qzUdtIJhBF/Tz89w4U7cQJwbmTzsJFNoORJYWN93+QZQG+g5ASRl4QaJkjp8CkHQPbIaw1foIFZ8oP03fiVWP1g3mr4Dkn1NYKY82yxNxhuPnw6XMx6BHwrQSPInDgRSBKWxzxHcofdLmaqekPAGm7nqbxvQ7VblvgjiOM/6kElKwLCqHr6dFwZX+G1Fe7Bfc0UlD3lHPbt5jytpP7eOU9O0bu8jl4bLRUHILD4wq3FQEpRD1VDKc03zl7d/6+UQJ+OWJxXQcbwuBpB9yNxtX2pT46my1mmIaJmXZIHM+xKtzymiGxPdC1Fg968Re3a9BrQSxQRS/r2+Ak43sg2YU5kHrN/LD34u3ODwTyT2YHVibCvqU7vzDiFqD4rAjE3QFs3oA5Mxain1uv47R0fTFyhH8jDNP7VzC+kbeci7CAbpF9r4WNawsng7PIQ6frfB+kBGwC14r1kh3Z/Div9QgGdmO7vmpH4vw3hLnk1aTNWZerEkudRThmnMah2iuxe2kCfSutMucA5j0Ld60llJ6ICiTqMtLluxtd6+pShzAf2JBLZ6qZjkTsKyXE2lIpje4O6g+xp0WuGysOOOlc+j2qpqv8+wH4YNQmkmghzVoePJLiw3xnz+avuuNzb09K11mr+3TC0ZJnhQBn1cmVZhz0TXRn24p4LKiNGXfdPO6xsIs6hcMXaFSsLjg9zzKV0ZSH+ymuA+GYZb8iatrQzeweZCJrRq4Yb+Ai/p4GMNsAgJ6iOKnIMew4ZKG0DJ0wbKtH1USmB/czf5WC+/YWmyiHPY0YwUv7cdOBbEhS14XgFa2XhIqxW5rv5vWOzFyoMXwZsJAqah6EuqQtwxn+1NNrntqM/0jfD97E72itSsfcN0saUkIS7vdH8jZteYIpej3MRNu2I1W1rZIlXkUhfGNcrtMIUiJc2Q==';const _IH='c1c6cafdd2c910c01aa2820403aba2c0b3d1f558b0af8b5a29640f8793989cdb';let _src;

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
