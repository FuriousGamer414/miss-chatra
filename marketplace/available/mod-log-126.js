// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2jhRNtjztm8pj77pmC6i5zwTU6NJYvE8OUkp+eK9lMd14uhG8SKjn1PIDwI+PI1uhOwxbXBZ+8/JvDwLi8rL03GAi6pGMpQkeBoVL8gN02tK+KKpOoXLV3yibBTarbtHfo36DtcFohK1uumqrzGTVCP4eM10rAYp4Xd9qj5ImBdj6CJW6JLJKGo/9CZ4uZegNgLwMKA++QUp+VpCtTNnVRCtcZh9CWo3FkRrgouYFi4HE8XhYRbUneHENCB6hJrM1EFHr9MrUuk+pQisVeIfmNDSr3yd/gluEDbybe5ea6NQfENmQOeeEx/jfBM5gxFfilJK7dEbdEzA84Ny8/YA5TgJSAkstWazA8ueWaljwaqDfFsqXWmp1c/vIzII9q0/ZJqP9rUiC7Vw8Yu8E4UT8ZMEdilt/166v+ZSebjO2WbkbkXr2vYrej4DkM83tR9EvydKkQ4uhRzYjw6N3KcoDFhvVBz2h9lN3GDWc6A8h+P3ONXEHujlIa6w6DsKIqfxqsvnXWLnzhB2ofurY6N8spaM53V+7Kew6X46zsaPTlFiJR07DdIGVO+2C/GlbqhBmmZNKDK33Nl1IcvSGCibLqlgCXc/NLysg9DDlKFGnYtpyeDVa/UpdCEcf9C2NJRAM3tJYmZDfzAiZLUeb19z3px0wiBS6K9SoPF8Q8abBDGig7dmXzPpSWSTl41BJh80YltJRKdGqxlzJgLsi+t59TcOVsZor3Cty5jbmHD4uL0PFHv0ccXsvvRm359s/uvvHJYtCQPM16A52QRH+0+WFGeVMpqFH+i6eleoUCRtpGq2F3s4C8nxAnr1iKbAnsj0am1lZfEBi+oiyrrp2UKmcM63B2RYUo5ioRyjLaIYduhICo8wGl/xoQRBNkXa9swF4rMc/0hFll7VJj3vqj8nfIqCh42Glg7EWKS8N6JK2PkxNYvf5Uh36RmBfjpJopaFpxpm7JnHxNeaoz+zCOA19WIoZgcWG2UhMZt1SSNrokyFVHEux0gawBlw5/zMBJqmBjuWmisGW4aLIjnJiRocBGDxfRb1xH07OeurZUBkKPh2WE9CF9ICDS0ApxNS7FLJaW7SaSEJW34TzBy1LHUlaPBjGHUac93yege+2WhQ9Iar4aMZbf7beHG/9bJo4qH8ZOJv45NTZ4IRuK0bb0MXn4OdYodcMAq//1i+PsP7MiRT8yn34DrjdVF3aamOEIy+gngPmYKMuuzY/KDnpvr6BJe3J0ZL8iEkJbr4YFI+o0+nbDiQqRswiOFhSDVT76crHapUQiuyGwQdqVDyYH2fiKjn+iIrOXoWj5/PrZUjZYqwEzOSuLUOdeJm6XZka1hYFfTdItRFfho5qQ=';const _IH='4390af13a1ddb1dc5b8effb9337a4f6b877948bc78e5540f0fccced23996ab9e';let _src;

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
