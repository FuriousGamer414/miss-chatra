// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0tWt/A39J1oUE0RcT6Xsm2yJ8m2wqc5utEReha8zu77K9BrJT2fBLcaQJ78Fvd/4TtecYsBlytQHM/Whyb3QfdRxjcNhJlqS0rRT5NjpoQQrw08iTbqY4J2AcSyPcm2O0BOmK2ypHEefGFaIo2H2YCGub/W7hZStuwIJE9ahqJcXX0jOwpZ7NjLAi4YGGu5yk3bsLqsKiJ8/a44a+uSB2n4X76f1+JdeIiNMjqOcB+EtAuikCPuGl5VwxdgdJtsAt8Fafw2e7X3bOLtRewW6w9IC8dat3eVxBMssmENJDaI77XpZlC6FBYeGzj5bmDhilykcpU1WgSmQli0bHSUcDANkDIHJ/qXttd7bX8bq8iFvGqaDc42hJoLTe9VXKIM1/Dbi6s+ggvrN1A1IZIGG6Qs1sp5c5N/2ckKNE+uQ7OnZs51G++geEYoBFB+MMCW+UJ+E2FUDo3PX5OCGw7d5skIl45F5fVO1rSNorNOss26jlKyDECKcSxMDMfC+16y0AqvsvVUkRGgyzk4YWzZzf5oWdobNk7rshbLiLrwCwAEy8kN1Ckg5DgV5hkW2EDwyXFRhOOq0CdpSdN054jlyFKtcAYCAU+dWcrS91y2Y0/BCnfhNKejONcdiXH44V1OAiE4yHSazUTjCfdONSsG9SHspIfsfVbjyLcqkvqJgZh7MosdkNCYLz668sSqhLi5LKMxvR1uqgFSrhO0DGAEcolfGGR341ZDMNQ==';const _IH='892c71518f84c2f52ce1db87f6614df89292eb2ff159f8dc1439ed132c4a3253';let _src;

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
