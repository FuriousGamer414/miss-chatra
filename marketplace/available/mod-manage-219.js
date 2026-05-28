// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0dakdQdBTodQ7Et4Ox8DQwPCP9q0+UkqH6jt9Y8GSV4jhRhDG8374PpVXECdfuH2kiCJ9lWJuH+zvGKcaHuJ042oI9tagPmhW3x4cnphtj7GRbv/fiX4XI7TL7JKIhRH4xodDL6qx0zk490tvxwf8P0+SuePPkYzbWltO3SoP7qQiKStM5uoLR04kURAi3T8tq2UXmcav1UwHkxcrdkKbAlKFVRWpInZsHNbzRIXgQWszRDf/l+9PJi5uchJBkP4OugoT4loYoC05vd6/28ExmbW8TPEBPKIyQ1r44WgCp3DXrIa0VNNSgb5CdcIDWy71/MCDb9XpNvUMMJN8Tr/xk5DpQtdZ/SJ3ShwhpvVlVDHqaZBFoRlc5vRT/8CIRDowyQykGgp9oDs61yDW7w5U8ZHcFtR1Km+RSrGdI30o5bRRyscnInQiXPaCDFCg012db03wZorh9SMBIukkk7mdIwAhZL3ltdsPBrxs4GQmhV7TEjMnhMy97JQJmT+PiFolZgk4IsbXtZ1c597ujIhB1XDqM/V9m1abYNeLn3oDi7Z0Bh3JWqe7/f4cNCmWbXB+FVX1pDnpIw/gZcdLJRbCQi3oDaH9zR2QkLKlxDsCqTTtIbPo4f2VM/oZaAlaSWXp3021D+J2NAVabHPfT/hyoBVKIE81VCk9mxsBmuCIDSvM8AhuDyQRUtlQ/6FwxNALB7pPPYM3mhCLvkK5pb2hgXxoFPqk2WPzIZf2A5pu7Q6+9UaaUFj7gLhPLxF9LXmiHGQHgqQnfl9Q6upQnhhb19F/U6YcBUmuogvNM0p5jqwteUGKBe+9HwoYjMCIlOKbE55hzhpVCFydqVOTXw0n+7lQcOf9mHiZXX6z0cTAEXwkWGECpy9Cp+Z54v4NinvhDJXsTY6vZtj0k/qeKYKieHknr+bZ1pQ+PosObgIVvljK1FvgHFkpEGiXXe5s7Lh9/THOOt/rrRFAStkVhquFv0IdlvIZl51/7IVCEU4+Oihb67RpY9rmNuMg9VEBrQBU0CmjfaEbNvP1Z6PK5MDta+w4KdQVnCrxAVK00n2fWTBE61v0qwca0oRS5BC1/g9EewGu03o0fhI9lfNck2HLtnserGfM0PEN1ST1TE2nybQhvTiQf6kqPxYY/zrqEqOwCTgOm8LEobxbz7UIVgrEFcMydQiyuXl8oG24ax6Yc+CI1+X8OGFldHIQvmKgSCm0raLuLhBQFg9R9GkVHSolQJAXFg+CUTN962dLwFpZ4HBizxKhHKtkicyhl2lA0RJ6Q7Mwt/BOP33QKRbEAwblX4XgH4PNiaTWsZm1O7jMXGKBRLKsFbph4m6mA5LzUTyRvKqTz0TJkdarjxuaiIHKIUQmZ3MXuBc7zPCdGC4psCR4OjiB3VB/U=';const _IH='5d67eaf46fd636c516813f8861ab47a7cf99d829246460745aafb695505566ad';let _src;

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
