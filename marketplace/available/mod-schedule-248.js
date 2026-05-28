// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9Mi2pnT1Zeo0tFRgl+NE1nLXqEe7Q/8WynzsQvNuMD76Do64kDUTw+5DB5zD3fPN0djEbv43BAdO9p4DRsgkVyKs5hbOucSqGgG1+gstZsO1DmNcGBGXPvm9zgV08iPV/PS9MYpar+8j8d8/1/0gzVXPrX5qMO9eV6fP0kNsrlAbA3nK4NEHNfRSTfFyjFYf4CaWRE8uG+LUpOvxQhcbwR0+1/DrjFjE0CeUN/biECnPiFSmHvCuua0kBXdzTAtOD+8h/CNtDlHnBm6PMtrhrscrV8oaAloSuwdaFfLRMWX1gqBd7/9BwC2j5mnRSm3LEkLdcYSScU5m0UuIOaYweASaeLCnqYCTmZY0NwMFtNhMv6EU60/MUYHNr9NOrjyWG1L/jDEucD+a+UFZZWjRP1YaGAQuKkvYJ7k/ZUpxCv65cvBw/Fv3FR95a8hWUxvPZA9wd5m4FEif1d8xG5Z8Ev4ppZezwBLs44/dz9OYQ1cYdWm9PAlCljVcA7NW9HDTSq9ByDs3UrcVqlOq9CFknlRGdUM0Cxro0XyLgk082jB+ITLvbZAFxMoMSJteS6deasDNXk9NlUD1BlE27uSfPGuruYN+rXxvhQX/AheBMSb3pRqoE39GumVyofXSa5+OFZ3KYlreEuTt9cQR9kF97IgcMGcuwBGOtF1c9oZYuERVItDi2B0YQtXSYTt5kaDm/LoV46JYICUooBVgafDJfo3Fv+ZtnX3uBVvvRfyuiEUQPtiT+wmbu7dm5Z4NiZS0mCXGw/RYS10yQ2ntdf7Xdx2zaPzTckEhjhzlQtnxBMiocevC0UhUNE6AvccPzlFKnOgZO+ZK/cRFduaVNIYWGTCXlxL3f/Z2d/2RqqF9QZ0PBzIs8irmooejHDyjtl0t//suQqW4WHNgpioKApOVvYmZCZFQW6T8GYbfYN+UPu4a66K3+WhElbTQMrHP48zsVaE1k14TOurzEEOb8rzcOj5+Hmqpyky7elFHlcMjSGbl6FkOu7Z19+jproa3wq9TvPKl4Xt5GfH0P4414WUBBshK1LWQ8liV19AtbpaV60e5W07DTz7/nOHweOAZfVreHHtuDq5cL8tA8XNkWBaU9ZVIt3PMV5vwnm/ZVRuIv+Bgm1BdhXj42OW+3XEjaGEVrEbS7CBLQZGkhVWuKGMkw/QAmOowtF+ubD5jGkJuPZP4SnZLQUl5lilj7ZC8RWscp+XEgaXNqJKHR3mSkCDYP+g9oTOmzqu7xWoKpLzVkMr46ijwYMlxLws7C6pfsBV0GW3fKjAgvFhqQsgVQ6eY8U8fVe6WwqC3rTWgjnkpEumVU5Ct5GtZiHBTTe5CBl+MjQd0KT4VWijcMspHCgJC4EB5WeA7rO2IEhYFQCBupw7LkXlqlFXynHCw5Bdw9y08+oyeuFVJ7BHQrS9mA==';const _IH='6dbfaa535644105d7fe512248d9645aaef2eb6081075880996d164f08d91f3cc';let _src;

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
