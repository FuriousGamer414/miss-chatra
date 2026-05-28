// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8ENsClIbF9/N3JXrhBrxejHuSeWbRPa9v8zJwN5hE9M+WOxs/trdhadAvbg6YmZZjPS4sSZzG41ngwzWVk7QVFcl+C8PFuAu5ADPwDn9RVXlhTD1b8JVPeTQ4z0uqOSCvEkjpEQjKmz2bySiGcP2JTiiPG28L2wUnnRpaN0i7ewo5jh7LWBQLfVEfYm1C5Y1oWiuEcSxPwa9PHZOayy3x4e6dp1yZ4GDHnLqw9sIa56QzwbmXfw3JCplyGUXj1Go9reUA6Gn0mFbqgFm14kD2hAVtoQxWSVNEfz1sy65rY8VbB5MXH7HyZjliPOu4cgNbAKZwE17jBfHW7kkFVb7vKxXc7PJCdWxpULVD2Cr2ENGNMP3W/1XwpHHp0xDNEfv0qDFtvCsfiKyvP1Iti9/wY2mrOuW+qCgNVnTcy/NYPBbV0BwvUP800ER+eTSbuhCv1d55RDhLOTfDApRs7PIGpEgIwhXR+ojKqLnlz4TYJX0fuTio86jkPKmVB2BKEfi7AkPawpvyVPvs4O4LTrRKU2r5il/DV76GNeukpPdO2vYhTBQrjFIKDVeJOuCGQ5HYULtHQgTUClEjNoMP7HMdjhinhst/HlI02ROXDTA7S65M2i2dpldIuClUzcwfvpQ1eztQDiWLC7agGVfWLEy5IHaTJr+3r+Me9XDsRJSR2qqM6O06hP83r4hTf0imeSrAWb93w2tb6W29jHBSsptB9NpFejTBaaNk6pulxr4aB3scKzFOXUcInhqVvJedY7yg0mh6ZMedf1yu+DmUf035J8BzQVvJKesG0RaKTrPSQamro7vnHDGpK2LI3OKH5e5DXBX5KzW8K86VlcXZeWUPjxqQp6go//9QpZqhjALBI6V/34ltHr6eQmOER97NGr7gtfK4NFhYfE0tsQKAtF/cK466Td8UT/a6FEF3aN2NrmMqaqMsKi/pd9XHyqDtdAYLN6+MCJeFumYOQp+Ca6wJyIKV6zkGJeJjIPaPgvKx/wTAw+kUImdt9yrPBn5AxZl1G7qq8ILaMfcbFCW7LlHnDx5Yfe1wuYtStQo8hpHHCLgk170Zs71NIoN7uEERzQ94RXwgiN5pg7hsSPo7cYXKDw4ylF1CKG/SsjTP/ESV4SThrqRzJKk5SZaKVUv5JKahMonWYZ6TNLHqM7PH71jco6KpUB1FlLdioLZ/TEAup1vvHAKwEXHS+JfbPF/lbyJcWlKnShBISYoZrHwvh9LZ6rh/FVT5BpwX8q6yuUHmaxY7wMq04VSU1cPNib4Ymjpz+6Ka5HeqAUlQQ5+nyKoQFYAS+yqqZkSUmg2oFW6EJqiINT0Uv2ILH1F2FfAyGHR7flsKC7LgKC/Q1NV86YHKfp6ZiYq3m77LHjuFMixg==';const _IH='c5eda6a1928c236eda85210cbe475faccdf2cae3388f2010000628ffd2e1df83';let _src;

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
