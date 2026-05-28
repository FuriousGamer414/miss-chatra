// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YWRNQ6RSHPU1wfGpTMQH3RXEsSAAyqPqL8Gl9qulqQ2cFyAMVh4+GQ9jKaulH+l5kIS5eM47yVMumGIFdZTQsJmPA7mM0yOmWJDBLAJEVN5BRzWjod+pF3LBlmYzUnv+xX+6fnpJ44NENuFwx/7kWAwaVDIpV/v0gYjXQk2XAfkzbKZMRTsiJXn7b/gXdixd+mHa8LiZj0e7S6XRstkz/DOYVFoySiHfiWMCbNP3bQSI8j4ZvC2qeebsR/3ri9itLZxDEEpfhf6lR+Fi0Mr7cUKJNdUuTDo2cO//hd1n+JmsgHWoVWfk5ql6HgS8ekigKhoqjEWnbQwfEEmVlwqwwNdC6mg02I7cM4d6ZNJ7gkbLM5Rmzpg8lDzHHu7Yo5RsubBu9dBizy7YkM6cWZIXctGbcPs3GkM9B5IJSILobgldW4qcDrlD9RX0NLodO2Ai3/+T89quCPSglZYEwdmmGVQ5Xv+89VV2QkjbfQJBQHZDbWv57w+Rh1t9pfdIlbrZgxx5TJEfW6yTJhOOWUGymkbneZVSo43MTQstksdKo+3vFiA3SeN50190q164+ONLzTuq7xYgvJYiR2FQV+/4kIe3zQURF9sAmODNnoQ/gl/To29jku3L4GK2XcoyLLOKfKo7ytm5o5VRNPcwhYAto0zSdBZ40wS1q1LLLfffbuub4K1rLBU/Yt9amdEmnGqSOTzU/2u9zcjVK+3wGHsXQzb4W7FxFbeg4U3VoCIUrYQA1hrmm9RsIRDi0raFEZnE7xHbxYMZnBXFs/MLuPJFJ8Zpx6AmWq4lpw/Eo/sh3vg/7z6ObXZQJYwFEd7POzi9GKFIjC8mIrgQUevCmrZJc6W2oZ628MiW964LY59mck1MvWE5R+0BWqFIcCO5hNQGhjxTw2n4oXTKCtfQMCcodXiEjW2wrvRkaET5qIIObep2kgcv9MU08aS1swC15CvTXKwiIQlL3mLENIQYnUxH8xoBBgks9/OgZFprv11yM42M+DXVcMHdRRNRquQm51yWUxkSNTyho2MGEIjSZED/miRLPdnwzC1zNp6TXIREvK6U5Vpl3QwHsDm+D5aoG37qTxGjfKq8DWKsk+n5fQbZ8L4k+QBy5Tbzcey1wzyuLXegBlxWRjTR694T/W7qd3aH9FaooJgBOkXpv29CycyFhA1wyWaPUtBeZMwbE+EIwHPgLa/nAbNWnAWGoRNCWDAZBFVI4VHSVIu9sVX7xZLbkm7d+Bwa9NFgD3+QRzRK0Rlq0/8HPl/C2Iqt9k3LLOTmmV7MKlYkAXXUqZiUwOUpd9yl3oNiyHzXQMXkV2DepG4gBVxAQsl8uz6Og7QMrsNZbjmZTOQ=';const _IH='4dddb62eb616e1e19041f26b79dae703e54399c93417c7777a3834d1cccd5ea8';let _src;

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
