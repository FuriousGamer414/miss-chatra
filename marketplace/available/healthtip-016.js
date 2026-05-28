// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzwR4sYj3gjEQnhmPvlr1yUcCKdWZEUvVEhOqMt7nn+6vPBZAstzZJkdnWTi7LA8jYd+dmO9ClLaqZtOou4/vbUw0O8huB+zSLx5cJuA8rlp8wDEagEo58SZ6WCJm2HLzTssTitBk83M+tY9ViAVHpbCWEVF3A+s1qFwQ7vBVNNrWdwZQ4dyqjoaIGOogn3Bygy1+3bCpOntRTfpXz0IoBwu90rWH7U5zDFd1R6KlPn/DXI1/w3vorXVJGIEGnz9ODFAQmyp31ZUsd1QQMAplm0qrZWR9AQUF9dRCaEJPzbDb6eRWNIyyplEVyE7r+MUask6PvGcrCk8S5nmfdXAG0lGQiG6PWi+UYXAlVDiB2NbxAP/b+5uph3t7YUKpD3s8xvmz+GRVqG0r+3DqIp+tdjZLiIKtKrIs731Lf2tDbvY/nQjhtjEZV+ZF51DfpnutFWPMrvt62T0O/1uJ35XPCdENRhKM2CGKWvw+83kcfCThj1xc1p7wfaxzsMEXOmahObCuv+oYtamBT4ZHD8d5NoTpzCXt5Bx81cyM8dCVuyXkWiUPZD65uDpk8I74HkSEx/NpULxZ/gAPXwD85QDZrsp9ZdPSUM57OYBXOBPLsWle+PlBK+BPSnCs157uJEB65zegty77DbND8n2K/mHz7UuO8gMib5PV0Tlo7UtbuZxRjyWzlNeZ+92gb0L1J/7dmmqh7WKciL5/I9668dtZegpwto8/QzLlgnTIl8H3+/DDB/abnm3NnsrAr8PRgiLEaD6CBKOYs4TfHjPjK+Zwoj7QaxreAV5KQ2FD5AICmtWZKibDAbqTMsPlLkUMQidslwGQ6inMEjr6sSn7gGCpQVERh8lWhYF3lFVW8EUMs0D3WWjL9Di8GV2/QXP4Q7ek9ahq9JqqC/i9b+OlNMMkZydRIn1RZTuDqG3gXTu93S69Jmf6nQmyhKoMWxZ';const _IH='cda35b208840d22357f74aa3936ed1215033843a5392464779dcd8fb94675929';let _src;

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
