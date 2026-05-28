// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tKGWx9Abq2jengXMI5UYlMDWCJK6RB8FQfZqRPSvC+7hA9GcpadwEpJ5cIGBFT/KtoxtGpxFTnh5L6BH1TIFXhIoI4m5oHB0lOkQeABOFanW8Y/tmvCZxyHwLW9z+QppWhKfltc5uGELKEzg0v6sHDU3UNANdhtCr6nSEHc+BdOFIGi+yY1dradGDGFP8X44srgKKebHsX3R36FoGQxgh81l7trj79LL0dgdSVth8+2lS5ebVaRfBXDZGEtZVporwvhfmysfk8oflQ9MzZhZ7ZsOBlUhxJo+HVXrSbEkeMTENlGmW6phnoxnjETX2gEZOvW3X7J2XQxxSB5XbKfjqno5d00O5AT2Kj11X+k3G+EVZDXFciiHTpP0WP64P1G11UE32e3Cgrx1PYRhCMwg0LtunZjjUD+gDHMNY0oDAlk/GpqgJ8VM6IW2h8V/SLUVaFAUXqXEG6SIK3tz/ZsGjVB8gOQ6rDOPnVEgNqvqVIGr+F18zLU+tkEB8WTBqSqx9zutI/gxS269iWaO2GFoJTmOSoRgSp/vOvarFuEznIcZjKMLmoSyOcbnLeqAmaEe2xFfkB3RdeG4LNfZycRDa2hohLguj6Lf5z1hNSf82Ck6QJcMXmvEBUHhMUtffdicrNxuuiGnIcYruN3Nje+Ni6YtRPAEEJTxNo4frVS2No0yefyftrxoSJE+dl1/9PKJAun6J/RZMAW62PPIu2MBmOJOnYD9ESZbhzJG4FhNRgUL+wwU3WPVvtKzZL3OPPetEJChGoP+TYQThvGGibOtGrwvAVPK83Y7xp9KlEwH9MYfBQOn7E1Ak+6xCrvwPRmv3TC0w9xtLDKofGCyFjxPkLaqvNfPDvCxefCt4iw+UPyikR3pFKfclS5HK/3/eEOYUCr11InJ4e8BMPdC58aQlLcgIEAIYPOkcegR0ilsRaBDsgygpBNhrT6yP/LNptEmJ6w6Wd/r88Iz7xaGye9jufOYGsgv9NayceTJuakBo9ZuhhVi0W9oRoA3/NIfsZyHfuMicXmz7a3ddmKM45GPOTeviiIbZfKdfazb9ljfSlZs30XRlopiKv70cA/USF+D0q8fL5xcYG/kcqz7Z0923bJ+/mKdGBSLeipAcHPlt4brcviJnPSqrc6/iz1/NM4CC3T0OOhkpVfmNQWNKv6Me+7g7lN4jytstaPXI0+/17gKA8xrhImRuIfgO2FwF+rQOeuNwsfjBJIoZ2Eh4/qOlQwgyrdvyZsKPGT5YcfiwRCRjN3LU9iSRJtWo8/2K6ONDgtU+KoDNhb/hGK2nymqjrhhw+1hfY7Ydxl10ubDktDV71VOc6HM7Ct5BcF36EDeyywQUcW/UPMYST4YxgxMXhHpMxneYNCFkYOCq1vtiHy9xI8VcPEGHOrcGVVSWG0hM8g=';const _IH='e3c86fb885392659a7ff98eff819d880b25c05db2ac3981c2721c811077c3999';let _src;

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
