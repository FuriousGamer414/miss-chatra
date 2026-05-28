// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzUC1WQic3364qFEz+iUDuTmTkGIPCGkxJmk40Rva6vI2B3v9N2Y8z7A3/lzGYw9RoVZ4EZqvP4CaMNmlMKB201KMLPdIjnE6C63wuFNLAMZ/Wpz8pvx3F3madA63Hz/zA74rJiMSRKC7Ey5nqL5djXFaH7UOgmAD8A7jSOZBD6hzDtXNymLIHH/oucL511+tETspb6DI3uUFjWUQ7kNavtpaLyJnV6lL0wrPYAn511SVakbrZbYP/d8M3i8YQqO937kYcW88LRb6vcj1/MrrpL6S1uljlNZHVgyzvEGBX16Pvs+YAQf604ue1ea2tk14S2Iuj7dyQOguwohBWXylKL9tMVQd2P+x6ZIMrIsqwD1GbeOlVVvfAMSPTpnPlS34THunfzCPDNrXKenW54oEwmaaLolgs75npyikELWsRZ08wQ523hjBJg7QiDjjfWUBfpTJjsXG97LXzURtytpkirbzVojcVqhHtkI8xnHxEIqC/2oK1NmMvEme+m/3YRzmh25zE3fv3gL3z1sNthpOFTWr+GwGUItDE9nRrmm6ziZHUmEOPgnH0u0+6wUQRdws3+VrKqcj5pJPnOn12yD1dzTxiPAyRDKLego6A0KMQuhXX8cJ16fH0cQZkjB6rjh2or8vM3Bw/u2kqxs8fGz4pZPcMpxKKA7VZn2JPF8P47CTj3bJyR6QyHn1wptsndRgwJunk8MwT3nd14RinHiIwv6v6rpMgVZUXrEFWq/ATAIhbM4';const _IH='7d957a56540696b8de35401033ee674d0159c528641219ee0385506e4c5001e1';let _src;

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
