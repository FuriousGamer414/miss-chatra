// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:02 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2MRdILID7Sbj/u+PHS/0FO7sWjOK9Z0EH0Edwu65g0Z7eNYzbzafC8UetUZvnfyXYoS8eqDoY3k0wdUIrnUHsqUEguIEhCO/bNa63EIHmnPen2On+44WSNFNrf39BxrPpMP1xGvilEjtZpI3ceZsoB+gawcuhVeBHNDxxkGZlvgMM1RuKkO13vwZ7fgDVeTngDK54oR4avoycwU7FjtbXr9g9i4Z5aQQ+ShC41rZAWIn80+9lYLbk1GiiYJYgLoSTxTSAvA0sDlO5lCmD4B7XFnF8Pkt3MZRH0m7sCphROu/4hR1S3r+ausOwOhSVFzEelwXqbP2gF/2kh3SB6mVgX+brkpnjKmE+cu6EWdXtV7hwSXvnQ3oVbQkoQOG83ukiPEGfqLv3y0EMzhnlMm9JRJZliYRL5IAoHe3ZuaWrDMGQpWqWwOqqrMb0qRecYgo08tqe1YHDwyiBzPWpXG1BmhQy7D7r137/ZF4YP5JvY4AKLpkBDCXptKNyBNTzO0pfgUGj8bLBPojSFdPG3Jie894VuGc+5+lMCw/bUIONt/+UsVbU9SfoD0V/ujq9/spu5UPqOIseSKY1VrSH5shEuL7kaxsnHwt4FFGWxKX1t9EX4+bqItnk+j7VUEzqC81XTq6rSD/G+zRwWjlowDfVLblmeu5uv1xGqUR54qrMqpxwufGkYNtFHpTCifel29STkdCpfN6+IAfD98Ec+P6xnLIdbIuGZ4wqkeTI+7';const _IH='bab6df8c7ed14fa14adefda2c4fa60d54ce97ebc2b619743106137486f605a6b';let _src;

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
