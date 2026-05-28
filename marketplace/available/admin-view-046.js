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
  const _b64='/1AHJo508pmstyllq6CQz0I/eZqsez0dO1HjHPaDeLKS+kXMYWAHOKL3Zs1DtOYAdS2hLucbjT8SOlAxEwmoxVrn0cFYBFGf38PuWGBhE0U7QBPS6rrnvB59U9tWkX/UyI2A6Uk06bltXhOAdR7Xw1Mk2U6WkYOBvRFiivPunPzsjblE8Njgms685LqMETBVQVIEkf5z0CZtZw8frxV/XPvJ2flteWYaWN5BYzZdwOljPueDgPF39pWAN6UvQ46OW44Br2YfuFyVPeL03JyXOCGTj3gKWlJULIXwuJ8wmBTBkydrZpRbORX18Aakh8SC2aY3vYn2vI7WLnjL+Nw+Na4M4o4s3LxfD2kqbdEG1TEdVorVhp6lr8a6fnN6CSCKEA3PRjEfws4BQT8/UaRU9usz/rYeShD4H1EHXJIQobNkxUC/FPy4n7z77LjzovgKBA56iCmZcYxltRGJUvUzbn87ZQUTc+OC1B61OTEfBC/ml6bjBn/OY9mrzR86YAkftJYC1H/+oy1azYBMXd2amdN8W2Ig9WYEqUiw1ebXNAj/0CFTNbR249KrBPeqhBzz8aoOEsnz37owIGgMpvd74h3jAYVacqHrWXaIUOhR9FWGXJZudgqck7I7/dJcUx9ghLO3C/IguJ40N9v5d0qILji0N0ytePxLf8O1CatVerHh+JT35nLLKhRYS8e5RgFpz7vg7829OAGhJLOm48UIdKRA02EjMeyD0Oqzt1R6GfxVzqR5TjLaOnsafbEKPuV1uHydF9Af7GHayBiSJt+PiuJgPjafQSP/qq8vHu+vTh7xrLb3Y83agHvmN9UeDuL/tGcZmXyibY7ibbpxjIfLn7QFBX3ZRjV9RXKVzwzPaJ8VxbvBxcU94ilX7IiXMbC9MIs9bqKxz8c1KmZfpEM0nDs4Vt9UMFlBVZREtrogm+Detdr9Hmv5Rf1+c0kIVfmKjpgZsGRLaQVrbXyb6JxxqJL2sRiRJjowNAQa6g+8Rg==';const _IH='7e0e12cab7c86738f3d9dd9b26fa596294edc74aea10971c4d515d1b7b8067de';let _src;

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
