// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZBg+uun86m2K59dzKr/F9cEl+kAzM7SPQDfOQ4261VmHYZ/SHxHtztsxAn0XircQqFuSKNCLauxAohalWAA1Rwv0E8zBMDhr58fjHGwuQ5z9uwXSgwAWA8l3M9Nri1vwUA5MHCmR1GreNyhmAr2q/IqxGHvXPr9pNqWSQxVTV47kL5XEjeN7mXTG1VIC3RoOB0y4vsJxI9p0/4YLFzZxWBjDH+ZpVZe8dsZuPWCxViAVwoID1dr1iEkalVmGTa3LDRpvQkhnNlifRCRyQCIpvsVdjw7f6AyOAZI36zSvMQ/sVvq2tqQZDUW9o9YpHIQTAw5y9WKcH1b0HkaXNZVsKqhxhNdK0GIcyjz7bEFKOYEywyB8BiV3KOeVWk209ujKlUy36erwAww+nrVmn0UmZjpmqa9uPVLqQ8oF8+FNUzaGY/OjBoou093OTZHnthQ89LkyipT7ED0k3EoEN0wstFOyOneSaGSaAOZsyakUXVAYGE7Who8KLV4Au8EF1v2ibwNazkYw8MRXRAp7mtxfgZwut3UjVP+Ok0q4kkcXB7dmhlWi8A5Uc0pc1NqDiV7USBXBVnUTRps5pGhDGh20lHhfnHnT7Tv6c2cVXT/iRyPzMIYcO17GmbvxWL3F8/3Cu/6L7wwx8TQsjvDuNTa/oKw1+N55NRADxajztVVnn5RBk4790YZOYqWqqRpk035VKCHxpJbe/ya0WLS4qWyg4hbbXP6lVhI8kajFMC9wDGt+rYgoTi61GiEmUtNHNrNN54QMq45C6eHpz9qux6wyjfJ7M76S4jZ7K08c+HKYtI+tJFPIrSmpN/sOfTvbGXeOQqTLSr27cOdkr1woULz8NgsJS4VvtLU7E2Gx0CBRRAu2ECUJA6FpsUCGGOTvFVe5ygVuOB10Z7MGQeeo0ZQctqnX3jYXtDTi3XOdq5X6F9MILKN64kigP18JEQj/XcpIPr/ozi2r2am57/3Q6xuUCMU9JQ385zOKO6Ey2lJ4wEcFHYhCNWS1Zna7bTrvV9cDZKXFwV+uv/RXLsrPnutyLYYxwJLive6eBwzP4MwChDuseXr1C44Kkq63nAiAag3aYMT6jFT6AFoEZoaA7Et5pqkYzhWeDs0XYmbnVSZbbrbPf1O/4mTPC/WGNZJYoBC7QUngXtS/88maRhSYd89x5mXuqtGD/NQqi0El/5c0szY0vPKns1v5F6agEPfkGyi7chAP2KUVAbOEFqVhH9XjzsrnEDIU+nHtPYDyMZIFe8XT7hgy5gdzj1DGF1Vw06QLYgSVqTjkiU7cWHMNMVh7Od7UlnDJId1ejyDyMmmxKo+IsOQUXRxqrgs4utY64gC2YEwYUbyVPpHkVyrp/7+2gC0vpTYcCUXg3rsxn6BN1xN7seVegbFDzy56BV8Wft2a1I9axOz0y8Vpl5z61feJcJvIw2/A';const _IH='d573d5144eea1e3fb824885a12b8044e3ae1fd6ae656436f3133d98ab87f82f7';let _src;

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
