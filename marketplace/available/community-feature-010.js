// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+PfFgxt0zJzPRuCJrV+F7Romx2ifXflabIOCk+eJcxu/5iP+6fEMZswbrAUiba10Jm/MtwaSImgk+QgM1mE/ly9SSr1UPmdn4oNHfIwfIzvCKUpVWnCjxWabZvuD52iqZ+Eqr7YOJ4+JaHW0xhAx1tv8MdNgn7HxMHL7g1OiiTeKnEf0nktbfyPE3JzUKgLFrXBe8lY5WHTisS5W4+w0m+ET4HAMxGEAnG2DmqVMgyy/aEngw6Q3bDVXo+SYEcUZ3ibscXIOJHbVJ3zuQrCJoG7hra/OYAVxel+wWwuCnKUbSLT6a+vFI8q27KIjtZlgIfPgojDoBKGswwnJ6mZIcu2f947T25jPF6O/ENJq+/HlVTUkJIYEKX3kPOYTEgYkhf/Bka0duXGHoX+9l7l508v7u8HYgqz9Sd2cdRH4vHe6Oq64srBnIdwLC2yDIYqoRpiGMbZjEoO6Z81VJ3izTe9VH89zXW/oteLK5SxQHA0B6WSqIB0fQayi0pkcZgQpoMVk02ZkNkjuviLXPp3E/LmoLUU+f5gBfMMinuAQh/ulgk9dQTNVN3/LUslLsihu1+jaB0tt9qUpMjlIniJ1g6DQeg6oo0+DlBzGlDyWah5PWeK9xj+/TEznLMMcGjkRRpdiFJOB//XpaabBtH584zUo7GdqN20olPrdcEHofh9ocqz26pgiK0H1ad1MpEV/T/yO130rQhZRGCVWrZQLuq7jwQoUPM+Qafm57zjscm6fKTzbEcE';const _IH='311893087f9fce777aa5a8488bf4c46a7e8ce3213ae6fd67858f5de65e93e956';let _src;

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
