// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DkbBwo+icXfe+26ILz5Y/Ewt4DKLreViWLvxto5PutQZKQXlvgJ0Izi8V7myBTN2iQEVZVTNqs5vx4VL4Ikia55LsVMEhJdRXcnCq3kwlwp70pyXqHMwoW10ewvIg97reFLksA1JKEiV6rFGgvRkDTxek3Y1BlwfjyY1fNi+qrJgQ3+WMEHgd0wESmf5s/zDGBpKVPGPuOztR13ppQ1kOMto2PMIEI1fYeg1ylhIWwUPcLDoNstuISLuoJRNS3JWZ1+CRxJm9Z6HV7pGfPxQjjEsCGaVCfNRAk7W9F/a7SiDczyQgDM7qdj8dixdqn5vhqNAT43+THwI0eJ2duHrtyInFMJZiPdD2qA6uC9sMhhbC0fT218dN5wUzMuWxKE55H1UsM/bvbMuSOlHdBgA9qz8KCgW9LMFAOXg8b+IeWb/KhxVADZxl7RuYd1CUl5gk8rkKRosk5+8hwOUDOQUb6X/llDcZmJyerHgKF1O2QpRCYvN6gebhWZXQ+anjfCnNqIlEM9H+HHdHHb1+eUX73tEDdQLjHn/21eQpjvoLvxmZteNxk5o6E1/cTeU5FkEsTZQlAZ7QUHinx3lAR6yvjLPGWaJWaIVUn64IaoSRPJm8PAyb8p82uur61pITOKBBEwbzfW4LTgpXoAufdp+hCQmXdyuHm+azZXVIUEENtPXCBzRPOhClfKA8ZFfKLfaaxQTjoXmlghAWXXlZlEoLNdsRJeWhPzpe5sEm/1ixJi2uPT0Ogg=';const _IH='35631fb932684e710462b5a57bfe4cfef2c562feeda232e6e0eb41eb09dd76af';let _src;

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
