// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3FiX+S01zJx9uANapvXq95kbAazTIFaZ7/vOo7JWMpGJIEXtd/Y4GWpM4rWj9SrM9bvzSu6v4nCCLqYDF2kTVXnd5CdaEApxv0twom3DyUvUKKbkcF4/jbYKVcDV6IEFAETiDK9H3qUEDYs91FqGQgOhkjlkamohpSQEuyBWHCtsVNsyb5OX8GULCGhU4REfiQXHJaG0kaojrl1m5q1s+jElSsczZXMpox9OwD7SJ0Uk0GnHYTczYnhPTDwI4TTLVuElY4vFh7r2y01UAkwihEpylriES6bqq/qDZImvsQ+WQvxoXLHRazOe4gWnuUOh68b9KGksqVf+Z7RnOpyCbSB4wFLE1rHVI6EaBIWgNEi7Ffo/18Jz1/Xb+taXNOJsxTozwYon/LjREw/sgI3QjGAMkOCr4zoU8PjPuFWBwl8L6KyPcWPSce3rVwhRKOpZICS49CAAPJsh/xD4U68bnT97Wr7FxNvzgt5vm7JgjkhcYEWZ1J2FzCiNzf09uiwOyUpcdZpnvPBld6RfhgRy8ESWc95r45hZep5Ro2Wkh/5QTsqPeJydCSGgLrL61KUFHUtPfYSS0ccmUtVcJvjnjc/smviPMaYGS6l+5QhH3v08G62h9cCxifyk+O7Yol9lwY4bsLG6CphtwDHh2/wH9Hb04we8vmIXM6jDJVLeyAa3R+/Nm47+IBQs5ikJPek92v50DYjoAk8pdwI4Ztdq3PemBqo53UtJlkZLv6ysoOXQ9novfzisHx/KPhn77yyVVSsPUKtbdjry5YbeUcTSeNDa0qKtHMLl3SNg3XAY0Quk06GwBAEkd/PxfKy4rUxRyrpBUlm/hwux4/9wP3fJHcJOnNa3f5aE9zhExZ/TQ+8wO4oqrj2bCWjAESEjxLGqetvhgm8BrAJUWHaLaJFELw2f/Z9CIoD7OSjZLF3vcxa3LMUsFqA10k7ZxNPlIeip/kMp92ajTV2KpEK9b7GasLuISHLaSNcMI4Oa/SxcCscn+qC+u9PhJ1jHbptCwKq+q6gmyEsVdhyjNrWN3zc9HqvX9WL7ajsYWVjuChai16HF1H8GTM2c099JF7QeSGpjFNwfEK8Y+o6xZ0Uskts1djkX+PjYh50XOeFFdQcatEKyMOG/3fqMqFwnrtBGEZHFJRCRXMMTk0R7EjDC1b84wV5gyU5QHqkdIImA8l3JLSKaCwaNqyVPKc7uPcxWAeWIRKV1DpeMjDrsdT0rJrtn/ojq2ZYI/DcPhghpXUqNTHoJl6vWrIGRQfpf7fwhKM/s1u5waczUrR6IBCXL2VBzFFNpYGsm20OZl6sW2OiFAGAmCXWbr3mPyvjrjRpCGkd9CLlBs+RKrSEMitEApDmYPOZcDoCW13f9At+Nit9jWem8ucXX6tx8UI=';const _IH='fdd9045f9a1d2ddf9fce49accaad06b946e37dab769e0df909224127a499fae6';let _src;

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
