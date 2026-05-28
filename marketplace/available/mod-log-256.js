// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4wlcLJOf8zn0a632UBopmvIAl/oH4GDE7idgZk9kPS4UX7+3MqHa8O2iPHKAKbd1MrsZu84U9c7d93SYHTXQEDejftrhaupDfYonn+7odtDeTTlCJAWgNYkhXVIQXlke7RQ4G4aZho1iYNHucs5YgqcZDJ5t7z52gIBECVq98nctk9ndyhxVN0qyFC8L3ySs3OFno3jcTEosXhxaWdj+6im39/FDpp/i9JzQy6PAysLOWAkaE0wlR0iM9EUOdJFbqiGRhfANBK91NVLurnwcmGDtaw99C3ebo1Bb/XxRbWoccC+j8URSj697iOrfhRD7BHwvgAXLZDBngUs/Qo6vV4UetgjQL9t+NuWfPyHHM9MmM2a5Xji464a3a6IgYI7FjlZ6ZL3mGZluklODT3Ivlti8s5SFBG6dtipFJHV0Pg4SzlFDXh3DP3IcW9+qPVrBMOvVblIR0KuTJXGIfksBjKy0cMGTlEuq3UhMNFv6cGnIlSHepJz0+ouD4sw48ZXfpZCHMlHqwK4EvzhVAVuuUpi0h30eeODNlIFcnyOmzskr5SwlLmNaPIpNOjl3tZbMmbhHZ4zsC7XJpp4nNSl6w/d6Tosehsbo/2aiVM1uNB0dLAe+I8auFKRc7K/c2GQm4Kl7kPF67mhYVZ2n2oE9RnrBgIakejLtAHOMTJe3mKbncX/IJzeFNJGEisSodHyQkiW1iud3/cM+2QKhtoaTkDHqi6tTOrzN1AIh+eVaQDeYInOwI3wcJrrj5DrK0mRDb94rjdhUri/9jTeSX/xh0RawbWXjqGnQRmaflSqnWnVHaEzQMvheRCfqLwvwPLIz1+KhmMuRN9wCoQWtyw7ZiF+ca5tZt8T9lVa+JUenaElWIaHfl7E6ycgMk4qMUfq5rHde2MZsGCkVe8FpGgXMqNRQO1JpdvHXAJDNRbKKvyxDjxitl+GNBwGB30RwqXvD50zdGZ91+R01b9Rp0gg+DDgL2Ba7Kg3LjXwzdeEVx7yJ5dwthqR/SxDge1XWBVBVCz32yy4VNFbzLfU+pj9LkkyleKnkQVsuR4f4jhsDUNFV1WIWjcFS70TjMTT63SXT1TKSD6Ez57onoetEXgzHydUHeWf7GDjADgCmNwxoyGylewE+tDJxHavp6KJhN8O/8JdqOLtA0ZGsP0EokCCHAAX1Apir/VmuWm8UgMFLv/qtGf3LsQd22aFTpYEC/VslK587Ac88zbBLf4Z6IrSlHhOMxFU8vlEw+wOLOZXrMM4td0WdHILQHoIvG2wIx2uJto2cz+pMlSMEsfut95o4YRmd3eKQxUZQaCRFekkk7CTTfLuKyQ6Z6AxExAtVhKdFTyPslITesBlK+U=';const _IH='47f23af4f08ed17d1cf2cf2ff95fc95cc871bef38ad4422667ddf4ce60ef8194';let _src;

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
