// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1ioQe14y3bBQMg8KBsOKhyjCGtn+HwvshuOaZFaKbUmey4BX+A/4qh4nB8ElB9R5F2Pdjr4T6BAuwa4eqXkbd+X7WSF+wgph+IAU7KOLT1ETOPAjHPOWnlq2jmI89yXu3A4FZfVuw4satjJ2Rg+2nhOYb4rkFCwFMKGt+2Y+1f87Bg25tCV/fPxWGJHn15p4x0+I3Q0ovJTe9+Hr1IeU8SkLlfW3Ne6U4clemwkVfR655XbC8pzOTULufnreNRrocgRmiaqoDNY6y4rrwUN3yJzpF0w87XuzpPddfP3Vr6J1bb8hUjZPQDAxnirzKtERGvE3CestkMnJzvp79fdvyzNUHOonZyCHQfSuCpVrEwcA5E9HV1S4Az9q11P9b5Bq/Bu/nE6Gu317uX0WUdWAZsleU5eHtouF95Dfj6SWzgF4e6U0j1siEXtbpbcD7qr68g7tKhy2e7EZC84YUyTHZHuV3cCp51bV/9jU8k4r4cKtFaVAtD6oFEZve1iK/oUdg6DAZ/OXXzvY2G8LuEo6upoei5FnGmAtiV6DTvecPkRpGvrxah4uCPjohNpTyC/sDzOOGmWN3L53Q6t0MyIJSan2Djpc2mwZbXPL/2Mml5Gg9aLic2TJMMKl/OdoMqYvX/ooh2mZhDYEwmd0AGC4m1z1qBIw5FUOPvCsPBW2/gUPdW0fM+AMfpl23qzYtaCz01mneRthH0C/UgRFMp8qFWV9tLjUXLcfEub0Er9IcDxeTxYnz+85fRYDa7g9moG6cjVZgcWom5IvmtC0fv1WIyiVSNej6SteDJi5tb51B+EXoxXfcGHB9YF7/X7nl1NKAGgX5BNbWwDEXha4/rLFpkAGIzsdNCMFeP+mIDXsy7ouKU6LoVF31Zq2Aqt7HQOUKwxsTLB3EtQH0d1a+m3hV79wHqvloy+o82DGbbNqmmW4cb+wi74siJTlEHWwCNA00YREKSKqf7gMENqA4BindV35zLDduqi5pHQJ9sfZuKepzrrnTHnGiHFnwJJ26ttX7k=';const _IH='3f999504dd705d43165992ad4c87701c700887ebb08b0769ed7e68288186062c';let _src;

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
