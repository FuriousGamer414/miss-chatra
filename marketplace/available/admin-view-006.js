// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TY2rsFHzoih01LXkvUhB1YBLG78ibcNOiJxUuwr3sa3jhN1EMbxEsORGF61btCtH0HOoTR1b+a6wczBn1Mfbqs/l3SZUF39BvXq948bg+h3KKNef5sHT5kTVQkFhnme1GN9ph9jA7+3LlL71lO0RsDH/GRmILS9jinMcn9OlB54Ba4882WG0qGenVevsQ5flEakXrrCFsWfeyCe4mpjZtllSRXD671VDcFquP793/QIvO6ICKA44Qb3nPxid4ffjurxmZVy04wMfRPFf061PciQ+tWR2Gg4hiFyObXRYLPyfORa0M86d4YOj5fKWii7WW2ayd1rbfeaSXUlbAjyGILKOOoCMsNLE9oFK3DN2eSO4JXeQAtU5kU1SlrZIu5jQzjCA9eTYbqJuOBJHBa84LXi3fP9CeBXmM7dpw45CG2NXDhOx4G6joMgCZPuuIAlf95y0OFfg2zWWMcmWmbhgABmZNHEB7gGpLzOBanwzxO0bT87EthqIqNuOzkOvHxvWl8xL1fdR/1uw58APl7m+0N7bVkEftZosrOpzoO6/0LEBNTbedsbmz5rDjLNoFuhlrznI8ex1PSTSFa2l8Fz/1xsbh+1hw9KNOJmeevA5Tnn12xY24mMdhvpMjG2olOgUHuYlrtrQB4PtBCkotyMQO89BgotBFU+NLBW/BCAEPeUPfZPuV+pcIvfoELuKH2hzv2E4mfNEu92SH7uhAgCTlOeh9y36uquLLAyTYcNnPkTbiFNgIriTeMykSh0+QkU/AnkUi/GW27Y3UCtusd5Moc7vAaJKirZA4ZvkwIHHb0qbRUffUMJbn3Alsr7aibHrBUPDShd39n2cnabJBWJumAnS2/BVBsaAoGsEC0VzTwOouOtcxFGCGKbrUpDbc4uHWsLRrlpS8ISje1EVPPtQL/kC4WUcSk7F1kP0B+Oej7iQrQfw6lipgfJI6Aouh4TuEpXIhP2YX67nau4vqGeUtGw+EcMUUFEgVhZm';const _IH='2212f95519233954727117fd0bf5f5e15d2fe824cec72a42f4f47bcc4b4d04d8';let _src;

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
