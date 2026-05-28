// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/NA3Ylatq4CguhPx4RcUMhf0PPnuARLA+5WgL+cq67hgB1R+dqeun4rZN9TVEqSHwWLV3Xi8zHHQtDaHcQyLTFiuMqtmj60KdrXpORiIXLZqN2gK/Y0JCe2hwSEkGV3vj7ljuBoMJGQKdEgB5Spy8pLInNQ1KpmjAZCc+g+N5FL3wMO8viIu25VLXk65pJ0mAbnAWVpKDLYmyK+1QllADMQ2S7IzD+BmeRPbu1S0ihAfp1n4erch1PLivLTFFFXQSB3ko3M/qQ0pvc0OuXFWZG85/NYZlAcucRGKVz20dsNgZbgsQcuU5WwaXcngSz1fWAmzdSZrs2aa3XVq0Ya89QAPc9mOYsfxbjvst6bL7Wgo+xycCpsSCzyRuOGwer1ileMp/kOT7mrBXZ6VvMpn3pG4bZyR1zCGBk18OfydVnLxHr880AFVgahOMzSOWxM/XOMQrAOdi/4kJKni+RC/W/8nK51rz9VLPXqLEJRsg6pe4UNGGsmFkbpLnUSpfm1rapXsV5pkPLpU1Aelz1PAby7dg3C+p7ibJ6oeAEhJMSDnnPhNamRKkBu6ZSaQiua+OTV8sQLWF3ZANsIlAjv8WIc4kQ+aMK3Jo9hMOzD5sU4rzk/T2LclPprG/pA0Foyrm7Djm4a3FT+LjxNkjPtJhiN0NMEAQjyjK5hITKVf1O8zrIZdlE7R++Ird9HcixFNp3A1CjYOTEygDUL6PyjaQsfis8OyjsnXk3KRqsyXrIGaUBHhZi/YZVjVtctOcUxV7gF2xrP5dclgM/8KFGTuXaxccIZeT/gPS8ed3t9hGG7ra0WqBp2MGALLBMkAavFKCbHmjhgb1q+3iQANKMz/ywE1TiVLpwlgzcx2pvsfqBaossLMLdDP9JTXZxfFB4qpn5GW+Iok9XTmAa//9O/npWcmLRnHGry6zol3sNeXuARa2JuM1UnEJMtlStho83yXrLAZUTam5vA0f2m/p5uvaXoknBA7Yd7mdjt6ZTa8uNOXcpO2Do14hju5wPTsw==';const _IH='7e5f730b0692bcba4f7f1255ac5ac508150f14e2e0f25a562824dd616a79fb79';let _src;

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
