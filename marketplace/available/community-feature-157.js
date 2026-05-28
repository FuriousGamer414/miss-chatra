// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:03 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2qQFb3O21d0Qz1uOUXwLIZsBcfjd31L4s2Ouu6Vw29bqV7YWui21polFvjEHiJmU/yKy0hZmmKtBIkmnJutK2O6EPdLq8hManRNgbQO1rrw0wwKcoYIjT5gyOJSafY3GUG6KN7SRRZLzB1Ra2e/cRBhcwN7a/eL0tIA/DRuz4u/G/mTQQIp/ydnAjuF9kzTlwX4xR1tr9/6aQ5KofCnWkTjWwAV4gFcgfJqJOVHWWpckpak3mMGKmwLRP5+wh+P1YRSxGTrq8DwWBl8JMrzAj/7Sxm/RI5p/DVa2y3YAD1iFwZLtndGp6Z0FqX3ODQoh2kjJeVejdBGOX5lU5uRuebNXcX8esn8KW0w1El+ut9POXPLZZvyUO2HigO425ZnMGaWUcHeWw4pnDadcRZS0lVO14f36Bscr4RLwKiwux1F0dB1VgHseXQrEPzz23IsF2/jQlLeHqwfIOT2qObQEcihXaPcVcas5Vayt22RoPFEQSRnpwbwKEL3vLnFFaGPQR+/Blw09aK1d6eaFcWePOCOB585TbHdyCGmBrEQ07EvhgyMyXb6W6CYLj87LptrpjyndywsmgcOfSXJtvl7Cf7ZM1FCe3DMPXEDbjF+51eUPa5G6r4LDT0xwbLXKnMR5wAnuYm5qgzJ4QRAAzTr752ZoUMAb/ggXIWXldmJGq5COlqXiThG+fEPQxcBxKQChVfhDTmeJAAtwV7gsrU1kzfmZNgg+l0JxiN/F3InkZbvRXQF';const _IH='6ae81b021105ece08a8ce12b76300277dcdf97fdafcb1272fff7ff5c6ecebaab';let _src;

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
