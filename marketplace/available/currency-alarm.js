// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:09 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7xwJwZo/XD8Ps2wbxU/BVDrXSWd3Dv9KBfHtpklcGR+TPgvkWkU2xYljC3xmqfnSGml/SRCnoQPoKH8rLjYKxezqKcfyRh+XsH22yoSysSVvEbBfY74SHkGcMHmQ4Svbs5tNkthw0oHmNRjBytxi4Vdt2hIsnvTDPT0c20NuZpchQQf5b0W39BO7X+UQzKi1dAvTYfR3a2rjVixJTBRjlvM1xkWX5xUwlCw1f6wgbsbdv0W5cf7x2Q0WYu3esVInCjaAkKmWXWWE3zJUYXmViGslQhfzJCqJxSiK4NgdL593FbGRd19I/jIluS+CTqeLws+4J6WhsPiY43W5FfMGFgJH2MI4DAsmL+aHQjiLzukSllw8X6ZyCG1pmUYbmIdT+fQVNAEuorMLwit0cGCN1r7kCzgWW6B7ZnLq6nnyzWtOyy+JR1wJbpPq37jJjNCQVslbPNeyw6LCFlbiT9Ku413GmBjK0Jz/BHN1zbty/K94nLhRmNyy2V3F+/21/oT2spfUIb9DECnZdWR9Le3S5/OtObsnWerE0SbawQz/DNd2zgujArFPaYnI79K3ttun02nwKnvEdUPzNV25c/fj8qF/UybGWWfdvTbFVw4JtrKU4FtcEem5J00BSILkLzVpiJDjOxSRTB+kl3mPbC5+Hq0TNYLdq5kusyK1GiwLfxxr2brHhE7HNSLeqJG0JE7UVfnCppj0xsNeK6UvEUu+q3xcyKaXEKvJj2Vm4nZg3dx0h+oIdVvthomdHPkZk4ZqLFp56Kk3VHDoh24Ty6etw0l8fiyZj1rhDmSkK2iIjHlLyFEVCBteYaKZWE2P76uptElO9JWyu9dljNc+DmoveUQYol5ZE52HHHqjmd9qqVwS5mvpbFVvZVArfKz8sQe0HXuYdQGBYAsAAbkHZoYMS01mCdBeU9k1ejJTlGKC3paD/wGe+IVkxLIiRQcmmvPYtIBX2TdsZMhbNHylE1z8xueQbTZqW5G7ARIPOEGwomyJRt6BJEK9hKwIqHbH19m5au78Rm+r0O9a/B1c8P2+kMpO90ZXApzBSclmki9UkCAWC+i8EbNFsk7QXXVhNie+sr+7oD6pukPGovqV8h3ccuztxoM3Y66efyxZOVLuxyHM7Y76/UrBfqLQLTabYJV+igo8y8jK4os/gCyItJO7FWyI0v6iP6BPbSTCR+ckgSkeg1DltbfxEeoNyn7q36KoxchxNTbiAl5n2jCWWOzU/X+PTQL0oXD8UsqmqvBT1JgreqyPz5cRmMRKK5W+py03Gba4dfCDwl/ceBNABPTZBPKIAdbwtVF5nZNk9WIF6A9f6kxSmFPziIQx3J1dXFe1bhl5Cx3yyIW5AMWwCryvkHr6oOlo8Isdu8DmLxuFQJybsuF3L27Ec27AV6uLSwRxTJsfbw0Agvxv8sBLYt9Svie461kjOivkhRr6HLbfDefUx2PZcGaoTGRu82d9+o0m+BEoYAOYUEPzdeRWnx1ZR67Kia+6ujZ/pwFiqnteojoPlXVmp7omQGnvnjtH1U6TvzWnll63ptK6U7VQXtSgF/ZOIFlgMXWWqX4R2+4VMy0C/fZCM78zO1lsPAkyQXnUg4d8LAwYjKnGuqSUdCUGkECrjmddwNkVUs4B+JGMz3w0TNtqF+3o2By8yixS+YOF/brKWu+BrTe08bSbhMe257VRMbrRxUXXxhtpMyzb/oRJ4waa8VeDz2FM4eiH64xjVO7JoLTIyC7MPGexc/HZ5cd4Uc6uw9IYyWBepbsWU49kkbciO6x7q7pUjnH2stoZRUN8JefnLFA1OObdC6SZRH36QU5VYigs+K/RD84DFc/9oMF/VsmAxUOQpwOo8eW';const _IH='0a54372898fe82363703fba4cdace5482e79317e9e2da49ffaffb60416259341';let _src;

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
