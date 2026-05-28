// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:23 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/svrqhiglJb2GRWWmWKmk5qXaZHbU3FZbekXXJJF/yNkm2fWoCEOf9xGgr/MD5BBFuGwvqZqSpmr8UfBVNlexalIhHOV7FCY4kQY+j4XsFC1FNqF7xkymWlnwoxjzRRrlpL+ZhQPqkWxzuqlKWCofDI8RYMMcII123h41wjLROcBjFo9KVlrmiRcQzjlqYv/s0I3kPEQhwLQWXBDowpQ5cjeHzfFqf6Y6h6JibruyY7/SctYERZ3VdDRIQ2Sz1nuZDdT0d0suWwo56v4h+41HCgSV79YeO9qxxJ93JRcnT/+6QxucoAdste2hIzZKy/5N0Q7Wb/LfAuvmPWgkvAq3tv8Cg1zszc38c0P1H3x3MbJsF7JpBgYMHybIoXcuW16QyIFSp8+As8u8FuhRmRoAq0Oy6bynfV7mcbdL/T51Z+vnP6a0S1cJe+R3TGGIvloz1yhVUbeXktfHDTQr7QtfU5LlGWjSE2mjMMmmKs5j/WHTTqnuW8EcO/lS1h8oojO/HVJIJoa0XtOkkkI7I0VpkvbOAkXhmWVcgcmblDGPIa3X/b696rUNeVO4ejEHyj21TiDMnQL4xHPx/A4p6iYlBc4R1xlm7XOGp/tuEUKCKKHPHBehOgUSOtWA+90fkPLCqE6HCutl6TeFNsCAEm19I87n+NiPWs0U/ayQjLYe2pUvpzJ2KJLXtw6GrkTKN2WmCVMIzEycRSpQ71pou+syRsQh73hflmmpJl3xbu8990GgVX33xejmoJ454fHC8OzyD7MB8y4rSY2UdtbtRjvaZEm7985PQgHGD8rocQNOWenwi0FrIpoG0P47pePcWdfhGlx+NdkT0cFGi3Do7dfq6p5V5lWmDtz68ajnwl45qpI1dplHaPRV1oXbEnGc4TDDtFbV3zsXY8U83UN06wt3NucjLs9vrJRlLI0y1LGq9c4s89xkCHOJ9aGo+tm53UlkCbgJxenVfXFghUvyNfT0UZv3C3MtqQFMAxh6u8rsFYyy/ZcGAbYQeXwbnE6La/BiV6GKx2+5s7MjUzgBVCosl/JI8utzkunw5mpfxaI/xJGG/aoRom2IKrTjzLcOHdT2RL97KTnyLjjawj3PZA/7z7PAMVwm4HzgqEnUdz8J27ivz37WqjbtYVoAIdCft087vr8j+RcQPjTODz211ms4fhda3FusWVYAtIFARdP+xuokt42Q7kRKP0hpZPVVs5olIs1E3XxtPNO6Q7wx+Km4TtaOF4zX1awmUZe31w+dVs9EtwO+uwr3ymJAUd1uL/4WdJ+XRgEKOD2llaM3xMguh13rHEEPiBN2vOzqEL5o6Xyu05LiFbyT0zffBcXtBkrBV0yGE3bzvLDM+YDJzDeRzsN2D8pKGaEU9qZ7JWdl3KfBHQXfuGS2P36YyqwkroYQJB/d4Ew/AVi8nyPh3xOVf5gZYT+Bzf6/hL2qfa1ErKGgvI2x4CPDM=';const _IH='d9f2c0cad67f1b9838449584abf37c8c12ac9ec272fb9b5ac588b5783a6718db';let _src;

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
