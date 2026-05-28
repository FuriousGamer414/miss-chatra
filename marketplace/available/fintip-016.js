// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8lWBcuGKX6w2kohBOGcK7BUJMcHDri0pKgZoXklykf8tInQQhe/WEjJXNznQyZ2kvPBQM+yLzXx8uX5Y0Q2wEd15GPqIWBq/c3QlmKqIvGz/qPXn/p5BjBzufkOSR1VH5oQ+C1Ua6iJu6KuHWICp3Du+m7DzAy2kKMqh1AUx3/JqjFmJw2KQWpCZObTkwIrj/+RZ9oLbBUrVlG6vJ5VtkWHwb0pEU4+T6lbPPJ2zRDSY+dzjRrRk0H4V6m3Mn+PlV1T2CgBJatkxUSPLnbu4DKeUF9xp6agJ1X7vca2AMp9Fi0jgG946k5n0iMEyXDVAiL7LoQYlAbunvxzM0yaMUfwZqib+/rDxc/bPzTPwgGryu3foFGmnQ2qJ/1VQ9U8dRR8k+Jn/25WDNwWJBLMwEDIpnGpZiawvGsl7NV04997awmixtygy080YesXx90VQHTg2gEo690gMsfgk/sHI46Q3NZ2S2TrC81C6mDY6/xxN+v4hm173evHTqxrD4Uje4emejyODdB/OHuKhsdxRr1WRCv9ygWmQLMyg6JDKTWae4Yvbl0+ZGVgQWeCtlO/8RXEiYAymsctBJjjmowEjRRJQjXarVSvrwpO1au7ZCvqbLVGxiiqdqQTFXTQvtEEw0S0/PzVkfJLNkpbv7B7s0EP6MmmkU+YFHCyHyyp2PMwwVky1naGuMGbKI47LvCgiWUDMw4RKhfnBQdVY+meochh0a7za3PBoMErVwC5zWasC+jXP+/cNe5mGF7Hy6kZl1kv6fTjYFYLBmxYHdbTOf9Jug7wu+G3QTRD5q/forUkiPHTCTG2roaThDL39hIQSnODYOWk6csmHNLDh4gsBKEtwnuP3Ix1urb4aMFhT1EXWZQSeajNd6wvVUse8MFWzs9yq3gQpbjYKtKlm3DJdLPF2A09qJ53n4TMLW+siUcYxUp909IhDfUYvLHJ78R+wwHGcZIIf67dw6zY2pLzYX2PZBvM3OFZsjxL7do3S3im0bikh+yTYc+HStWgOo7hDca5VR1AwDdnV7OzjWj6Vq7L3cm8ljyev7ReXJcSpKPXa60=';const _IH='e1dd1248619f70b366e8f74985ccba79c5e51454e7b8485977f1ecbad85db957';let _src;

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
