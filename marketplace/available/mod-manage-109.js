// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2FlfYSlJv9dF/o7C39AWDpB+tKsxsG/Bh7E3b3/V+trwhCUsAADBp1nSLuP7IuHkGulOuo7QV1a/+lhlK6w0oY4CjUT6/0bAlBYLHG5RsepV3g+JYYlZTxi6Bez6fycftVcD7dGw6xzMYMrTONFFSloYvr9sRMLg/Bz8mLRsySmGAEdrefxH/D1tY8+xVdIMh+r8/Ubo/EDUM/sOBvb2sCn2HKinhRmvAhRjXWTxCJx/D8BznET6Bxktk8xQWUPJnqtwVKT8PJEtaq6VIq3ik/Rif3qojKG0hpSn432FdlPA2+WsAeC7N9ppfjjMPqvMxRYK0gYf/OVBa7xB4mWSekM+o6bsLmSO+6tH+e2D5tv7RtDUpRhW8gaEa8p6c2snCsIWgvIw/3CN0eqOgmVBqxgg1v1kcznUS7mJYFm5HWbhwpJy9HJ77FDSN6B0nJ1LKJVoLGcOVsNUPPjGUHX5kMVJZC1HiMXOgpvms6CNgjFjv5rB+iy9LsrKurQpRrtX009Wu/QiSm5W7dsk6qBv8ibTpRvxUeNJq33FYp5T4ff12BSMHFaRhPyMiimQUehTMK94WumUZJYVFzT4OPFMByrMpRSqw9pY82Q90/Ez4js5t1XoL6u2kWEtXsqsmyUBu/pSclZNj69zr7ELqrVq3pgVYxnPRINEhD3Bt6f+7KRBCf4gNcA0UcvFswwiECOWyvb8bVM10yq7A31uJIwHu5sta3/ses7vqXNKzgEQYoFBOb4fK7C3fRzKJ0D6JUkw4R5QVFpjNUuR4J8gPb0WMP6YF5VIRi1BffMNfARMg2yH97NwI8WUeYgGgyZ65f5gURR6fXWySpgazA6jO4ejSmN5dk9gRATiPgSBifuxYOy7wiizZXnL7Y2klvpOcqYdb+Fr9odc+OVKMR+a9lsdTgDQUN5kw9sdb1Vhg1r3IE2TUzY5RDgAbBdrahifwQnYxiAa4FupBOt0GH/pcWk7CRcOUAsX76iXurBU278oJAxeSUbXWWNZaRao1MoTwHnxtrb6xyEAqXi2esFaqR2LVqL9nNIh4zb09oNoFmKnP/jNVVcHynRopLBM3dGzpkKrpgWo6HruQZobnrZ3jCUF3/GhG1/38bFKKfQUYcmrSnzPOnTlHuBtRsbTgkKQhfOCWlNMzCwIyMRLDUCa60thKIqxsvTRDb5A1oc+R60j5iD0Ijr7vS15zSsbWHgzwUNe5ZxTRJkOc/6x/C4nonbytwWKHWI2h57mHfdTbnLvEVkrtiHDKreN944HgUQ4irMHtJuZCZ9B74iDwWE1yx5QIk7RPRE4N/YzCOnbp+ORJHPmOwsEOOxF1VbsO8/gHxqMqoEHaBizvJmz3CADdJMKAt6hgFOrZTJlSaVEeJysXKy/OreB6fsH74=';const _IH='e93e2f7bd5092cb0ca9efc4f731ed993cd07d317207e8a30533dbcbc5d63513d';let _src;

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
