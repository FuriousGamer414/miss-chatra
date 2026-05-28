// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:28 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0VmQa3cogUjHfbVlwVljLzdkvE9Us7onBy+ACRGJBzOeZBbgZjWk4Nw4sduDo85dC66yoNy+PgH6I5b/plyGE/RJUF+XDszf1mKB8FhHV6XOJ8wFMkcmTsThXeKHsgCfD2mBNOLTU8DXm8oOAi4tTtVcXAMiD1ZtJp0vSIM4363VbDSQD1R9oVuz3e+/jjT2qosMT+mJFQYrmucaTSTCpg4rfGGDCGhYiXm83/r7MogPyCiWfUo1fgFD5mQ7ogg7SpxZrfAd4R1SxITD2II2CBdKHzg9kbCLbqWrGa8UW6GGAbLjegnbXWWerIMXKv6Djz/OG8hGNAD/9Xbu04Myi5C81rYzc2RlgLbTIZAdYCdB9PgjuhxnxkWEd2Kk9Vvr/4RNV2crYdz3YgoZqfw4XDD1D2KUKokBoPbwUWHrAKXawq1hA344+O2lnzkur2lFrS0exqHu6d2fkqcYv92wzsSDmaR9CIYmLCAaZvlcZDi4fueizhBiJYOijv3GdYdVr92/siNoTFZ5jyp6pOiuxdza3jP5rpF+WHR/hNuDS2wBUEFiZ/Flc2059f0IzR9NoFY+05X3M2k0ilpknmtB10V4qjMN8HroAmRemVEtcjr0NTTJSKGW6VQxnn43hcF+G6MrXqE83IkXh3Q0MclIh5PTfhOprexb8ttVke/7YYjGKRVFsuBpvLz/ELesxS5h88OnvoNlbLUJgEIzsnXjYw1XLcWaLEkqCJl3F/SnYgl/I78xB2dFPDZq8u3PWBuFitlXpom2qD7/+p+TOol+UzsfWpqXjJLpYRi3qWpi9/c/nD/bEtYCP6Kvj9LOhjzdo3YBQSziruOx5VAKqxEFaLBGD8AFBvi2efkkeeWovrc+xOY0zdtuEP74KaC9P1T4vqY7fxdo/3QDsdiPhfYL/zcTZEF133PpgIBLjxOr5ofH1NhLT1tKxrIyf04sz0jaVfi2Hmy7OKFTMMpde79lAlm2UuXNPKiEyo2TJKlxk4tMeqdrtm/WCL99WfqWmqvq3E0Ksew9sfsJ+Ys5jgvkfyuEJ7jrMBC2CKtLD70+wd9iLDds8OVmsE9cCwP/2XZZt+QaAoGXgoCFJ6wiYgHdqsvlkCsVDXA6TLPHN1C5jGtqxxhVkWsr4LTfyonSaVuu2NaDdToTTcZUL5wegxc1LVU/9BOptmKMz9GGLedfm+EYsj1DThvLMtgYDiy9e35ap2MecipKw0tlWoEdWMiOv0jBzTK/k2Vvq2r1BvygCDnXKPekwJEZ3RMOo6xltxNmYEfHILttnOg/+HhebCvDaL5ib5ZGJPcFraCEBNp6/DOH9AMyxhbEulqrty4nzsTPDOiSrbDWYku6JYl/i0zT1c+1ryMy5Gb3HY=';const _IH='478e46874f1a9f2ef6a167e11da8af8c1a704093d8b5f93203fe01db79f24de9';let _src;

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
