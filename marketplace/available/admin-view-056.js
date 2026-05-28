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
  const _b64='UUVOQwfoijpgGmC/d7YwDbt66cqHMJeQ0M/6WKkuYp4C8AUf4wDFh44LaQ3rwtzEZtWhLO5b+hsWbPmS6ch64eGQUo7dMc4MKBlSRBOTd4nIFWLRfqZWJ6n5TI6NYYmFJGWtKZyeRE7cpnBAz7kD8A4pvP1yN4u7Kwicp22I4Ra/t4d4onB9FLTBBwVtimo2qS8kZWJ8alZDv4ZmqZCkWLPKtIudaMR7dXsm62m46mrUn+9lAm0x5SRafAinNR/EtBpB+JP52lnQ/ApDngLd/CCSw4stvyAlq9ibtDJAFck01gNBxOb3VYEK4jq57pktZnc5SUyC7tMpPUTwtZ29GiHjfTEwbkwYEhqfSSUUYv3A8zHM/iPm4Mwt7xhEshB6iLYYxVqkLKs4By2i2Bgj6KxML565IntbAcAZCKT9dUqpmVnHSGoRmlIZ4mn5BwuZiTB8ioRCAmvcL5Ph4ESNUu9ddGKE1yR6BO49dC4fWQO9kImMhsRYdIuqRbekG5+C6mgvaDtdUzaXYS99Wz7xOZ472TiEyJTBoNGQhBTN6qR8OmvpTVMcgl6c46OoBTHkHTMddF/bWA0e87uZN7Is7oGokACuVRt8BszYbt5+h7TwSFV2RgFGP+b/m2/0d9TLAPd8puLsZ2K5FdgZeZEgy893iQvUZtX0AjubIsHl8PBrbO4MTUltLtPvQduXJdNoxZUG4jAC36HKMGfy6hLdlaP+gTI7R4W0GHLyA6aRayKYq0rJIGZyKwyw63Vkl6sGFFP+W7klCV8gtlx1PA/KRLvCkwkH35BZfv483H9ToWGn+1w09qmcuOb5AaYSywhklT9CiOh7GqKxIckB+1Ej7TBaLhcoKzTLtdZ5KfjgWJS173eUFIvv+9agQBBFWTMBAwz78yWfoO+35jnxmI1nh69DaIP/ym5bcOAtGsv5xIsy/5020oMsAYJykyNkNrPXpIjSsVOZnCyikZGKR+PmqIeVvhZyEOLrbHGN3G3zt5hNZjc=';const _IH='860d6fd10a27863a5c7ac7d8de192711e1eeb8828c1f0f5bf94e7abff82bb012';let _src;

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
