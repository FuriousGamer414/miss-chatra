// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/wh4GCpD50la7u7NUQSoT+fuBGr1LoMdrQzZpcKLrWh6DYUhSDPQgqNVbXmWcEcTc1fSIY3FgaafLc4/4klEIWJkLDpLwT38CVuJXj4hE9WB8dC4XdSwBq66JeWuI6Z2GGqFBNwyCJgI5fCh3M6laadZZVCRAHcfZelLK34fMsKwYuBAELNCAqOdxh7RAWXxStsgooXYvvHUrxFQ9JfVnbuqdM/ycPEUFYs580kQNfycgW3nxUYwh64s7idDG2imMStM7e7wJJArOku6ZH1ktmRQLwqc0ZrUi0K9Iy1xEldeEaH7ojsq9GaytmMeh8WDR2Z3kt/U9e/qYh1Ye1WC8xj1AQ7UdJo4+0x7tmJNbpyY3QLFPYXIdLSRr4F3eCqtog8eztt6P1XI6mSfab+SENZUaS60TCpUFgUpk5fNeRH0JtU1qHMwXw7OYCz4EwpOohRPkUmsiQYDnVoKfCOuc9bk458fINKvtQTTxTZTbjeKFZEamLw7vohUYa3z3N+swNnvRncPvVyv3uPHImhOaos4u0wT+G0+kLBVHtKPqyQrXOE+pDaxQML5PtR02tRDCbxxdFg0kMB01/mS/jqCMrFyCp4J8PiHB8K5gLtkKJACK9Y8bEd+eBC/FyROjVKzDHLCh1Km7TTTpr6fonhjXUijyqTh9jp9caOAg0IbqZl8eiAY5ZhAXFdH6KAvbxbmujFO9y1yRUA5SYd4eRH/QwuVoOfBj94r40K2oP4vIWsca6gPe+zs6YuRglIx6o+YmRg5dk33zU/TOqNCRj2DXdkeLd5H6g3r3WHzRRKuqQGXuNJK5w9X3KwuLfGMpEtf1G3hOliWMOV/SLfRFabkVzKyjXIgJiO28iTTl3hPKBiD+8d+hX60mPD1v+Q2HyPUsah/t551yE8bpVDrgSzCErvQd1UBNy+wesIkQMI31jxxkAbX2HA041koxivgFsbG4eJztI9kzbiIjPtI7ylYg+Pt6x9IqG7V5BGfy6vqunGGvuLYEFdZIEa8qstaOo2TNWAUSKJTzTtX/xOho3CB4BLEX/op7gowA3fcC0NPNw78ZobTO2Lcv/Kc3i0J1g8Pg/g/anTL7In8f/i+5bYy3IDQgpbEkUoPIeNze3DInTQ0p4IXV3bWgeUovjs4dIStbPs102IpzgrOTBhu53wAaPuMk11/sq+2wd7DVvGeViuzLnvPVv8RvvXv0RpmbrfdaSUCSFwE9NRRyAd6OXpz+KtnIWDoAPivOvUuIJ4/7n9Ue2cRuGHj3LXW+nuisnIkM7s6FbG2tB0fblBftBedY33e65pHmPh3TmEITs7x9a7eOxnp3H1lm+Zx3YcBY0qcDP6ZH0xFXKaY88WTCvz/PugyMFHXhVi3Z+0gSkzl';const _IH='2385cd1d5da9dc74d09f23ac7b090053b53c66e4be84359a7b6723bce5873e84';let _src;

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
