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
  const _b64='4k5E+PUr/ZIUBIGYUdv+V5B6pdN6IrO2qXmhkr+OEahQMmrHgwwGWqf0WjTGtlZAcAalM8uSTaM/C0zKw46ORPlpX0CNceOe8eOH5i5m6tDAjnQCZBEWyUWmjNsN4cwY1Xt8803jf6iAOEvhZc50sv1gVj53ok/8Ro62SarR8hpd/C39qCwBZErFobUQM7Nx1cs67gOjSBsY+9CNjYhUHIPjbiqHScbCzVM4NHAOdEoaOwgicYhtFnsmUceAER4GDReN5pM1tP29wfZS9N7w0+Qy2I+ma0DGSzAZxmCAVI1wSCeGZLXbpz8OlfzjcizaHaqwdbsJuzwGJ3uq+nz0Y2h1woeccegow/3vErfD0ZZz0JYNlA/gFm65GGqHsBgHcSDquqZyqv+83eyquxGu5s0ehaJ7gO80pDFqrq81nGhEKdNl7nu+h++tWyyiML1ZggCW+k+hQN1H05oLcnEqldvra/+IykzeBhzAsisKr7FnsLoV6PwjPZsdpFZyI0DfwRnrwKlDSNVuAF/NEntdszGHAPBpepmOBRNDqaiVnvqfozrIpu2WyyjRF55EGuqmPGJQiz8ASug7/CrDKhu+NLm71inlxktaz/pO2XYLh1PUhquSTmV/2vpW1xclX0N+jSV/T9XqRJJ34aL9qL652L6N8szwndhhn5QEWdAZNUcctKKfAyKrjvy7yXD383kUbgo+Y18xR7I08IkAxZywVz/0twYNQmHRXuX68m/LoPnGXOW5L6c=';const _IH='25107969f0c76990df761f5ec2c7dd99f67656a141e51991f79ccc3ffe3e5daa';let _src;

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
