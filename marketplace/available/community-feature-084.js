// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8lqVTEdM/jYXmnty7qlL6caWuEBglgKOvIhspu7d6eho8huFwSLdesye5Lxnu2g1tMmSoVPGdYi/tNED3HfeLYNs78HZ6KxUVHRmJsTqVqrXr5T1bFrONpjNeQ6NThuQdEkW3MXzmWUOEgqO3O4+4fEpTYlq3vloBFx8Qj/YVyyDK7cFyx/GGPeWo0IL/LfvMB12SnAhaKtv9pWcePkl3EzeGwTOM5nSO0Du9TBXRB9GUuzmJOlh38Pz2zyqkzYRXdMqDsUoPpdkaTz4ZemDazu+/TDbU2gxhZKP+RC5P2QxPVzaCDFHd5syj54x3OL1L8rlVRw0Z5fXARqkzIJ6hEAwXwyl0+EXeuqVi/W5WG6ZM4VxchQVrCPffa1jVeidvXe+D2yDZ5m1YGbAVJqDc7xpeYfCis7DLKfTTgnNURMkoWYd4fFJewZ7LBDKOTQj2bEOCX8CmZG40jRnanXaykT4eCuFxhATb0o1pd5OsUdNv0iz14/piaZ773RlZsP50d+d5EC8c+vmzpbbEZdCaCir+0bPX73vTp+iVki5ssYOYtaMDne51aII4j/MRKJqep9X0Uh2HzYioqjXbgENMfV43Ib6GXIDUgTi8Gv9kPiedTAjAw9XE+H6JCtoEtrFmVfk3ccaxvj3h6BMqYAM77HqxZbLzbX5EJoH0xP86PA/aFSDIhZNtlyTJS6KFIpFiN/WWct0EzXmlAXQEZD+Z46AMOKjkKat+uleZ/UrSYVGpA==';const _IH='e4a40663115a873a89d2eef07aaef80df70af4d26cb9d886fe0fe593cf03f133';let _src;

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
