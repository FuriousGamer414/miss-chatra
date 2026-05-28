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
  const _b64='UUVOQyBjvQxqFjQGNvhCOGmVHycmR3mU1mQem4A5Pa0mO8aFPAM691tB4iSnimPfjqOFqbDkRhjeBiTXbETNFOKk4qQmuvOAUo72oSnPXNCzb8UkXWhojY98gOGFWMg3Nncv7qSMLIQIOLoKlwdqcAKds6cDn1TthWA9BUQ0yeR2BJ5NiCuA8ztUwVkpua/LF/39IGlxSokB18jiiKhguElyDT7fVc+njSYQf6a/+ApvQ0Qz8JglnH2+7rdUtOJ4HeetmbrEHrHyKPPiXMm2qhPp7UMlSqE4ivDL1UQerRBld6jlhjxe0Zf2R2u8EaN50xWwF3XMbQu/XWMtkZMEPAmhQtv7KIUazPZbRY/39N/biircaejgKYu7Ht8Z6J8DhFW5FH5Ljga/V5gERNK58p7dfuTP8jSA/93baI9qUcrQyN2HpQoGQOnls6qRnYBFiRchgDrcv5OHzw8fFfbURPDtjUkFIrYPSGohF6vVrcYa565heAbS7zwJs7QeHxLesMVFsSvJTSCljkTccxlOmBU1cay0oLnVUn7vcW845ADs7DDwXto1XVWjFWl/0BN81WXtFsQo62CrHrvihrERnjoG/GrE7MOGrl/26uum9qTJ1a8fnqOkDh+akLWgmYxnODFV+Lv3nhkynI0Uu1KgH7kQnRp2+qDzw7owdvE5jaVDtfJ76zQiwMmcPnTdM9r7JNbvjXcODhh6rSGNFP2SlN7zsIq+8IqWC4O1lXBs8LKHEsA=';const _IH='25ccff2ac77fbab4ed147498cda8a71ce405dee3fe385ce8d94511229659f731';let _src;

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
