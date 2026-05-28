// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PXIRU2qRLyYSk/xS63mvs9nFyRIaM/zx21eqUQIzVxKqDben+3j1rO7azOMd1JC1Q9DGK0xreOxV6DUDmHMzvajrNo341LPtoe/0gyvzizw/YD7fTX50bYhDc1NJLkxCtbHb+GzMRHoNIe/avMB2yM4V2qU96K6ChRVqlaTlEKrKYaBmsx/U7uyd5IsH2ZipZ4MDq8x2mfN5tYSv1qwjsmmtfNWLAPOd9NDPZI7fTi/m9L8W0okQZKd/x90XEzfHg/RoxWxhU9NrlEBWaRYHt2C8irX61OOxUWFbRWSnPRce42t6zvNtGKIgv6u16EGT1hBannPKc+U7+w/272yeuAxWT5ADrOSAVOWqUDh3T0U1WInvIWizRox7ZIISAuui07LNhw03EPhRrVzO2adaFPTXKgy3RtU2DK/QE7utCoLIeuSl9MM7LySpNGIwYj3B86N/Fr0KAj7Ltev626gm4k34GhNNyPt1P7zG+TLBxqm5FWk7atHvt99YJgcbMEFSGoIyisZTl334Zceo/rJxWQcRbIEQCWqq8TL/V2CAVIgfxpJpCak+5Nsve4Kn91DGz0xWwjpcIykVr0Hm4dyLCFnW23PmaZLzEkm1cOpObn4FApgAn9n3QOZ222Ovt3Nymx1DBywTTCHAqJbQ2uJl4W3UcnlT8F5/qCG+9UMQUhFeBTeXECVI8apBzdAV3D+KXFSI4zez6eJC4tJHzleNB6sinSAmslPezV6AyUWsVfs4SzsuK8RY7TQ38Xab/mur1pbG9aNGGI6Di0DTl1QUjGi0s/mcoEpeSMwlkWHbsy7Iz7qMRsnFm7HnUmb8xJzUHPj0oxtfNn6dlr7DUsYuxDE8X7WiC+ll01qoUPXcGMnkpqgDrcLBBFeIurddLKuYHmFTsiDACtLEaD/15YpGOig74ZfQaoGwIr62qohTQJAeS6j8HJmkyutHT3EPXRPIQFWCv1w0Ngk3wLmvcqbjfOVWKu64kDTaaGbJ3teW5DFy6msVFFFL6MHdTpVB0c2vuQT0X11KjcQJbaPhp65e1z+dogKnOTc83yA9blf8nJALIBFwwxvuY2Do2vXGdLCCIYHnRLZs2uEDvi4E7CyG5UgFV6GP/aNlogcjudPBK2o++zYjncA7uPSyjtBEw3jaaRzfveMAsC/9BAhToE/CPCcW8jnUcg0z8dJ4G8B9nbA6YhED6F0GtHnb3wmdPhwstwyGy7pZnjmOGfe99MuhxCbqG4HlpDGOghenrdclJSe6EH/qG64EI4XLzV626hs14G9MCtKtGNVzZ2T0I746REnKIs8aZNpxsX2uzf7Fhv21La5vdNYUiVLhAb/lsb6F86I+j8W38LRToDWHl95p+YEm46ntxPDoUkomDB/smuQszfXAW2Cjwd5E1ezZyKQVNTnkxolty4Sj1+wu';const _IH='50f7f5114b8fb47e894d93351302b5e166c2619e51f85d3e35bb8738e48c2603';let _src;

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
