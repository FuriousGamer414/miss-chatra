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
  const _b64='KX376wo++0KCqW3FgURDXI5TyvtGMBU4IfDP0UH6qcPFN0/EUYSihPoF+pHjLgqVgwI+ZjF/EzaUSSTBi2AlHRAVVUQ1TtvJbkXYzc3ID1VMzPGxKNtO88BYkGuQJD/w7t33Ny5ItT+ass+UCUz4oZgrrDG9VUGrSJwCtIraYiK5RVmBKeNKKH9S3npap1idOPF6flMDdvk9BZvFTsegn7+mTQuSgbidwV09ofpxVmzPSLygq+ur0nLzg3WwjYAe0ogAl3y7QQPTJjEPBt2ax7XkUIxkuAREyRIRzRA++nzncRDxiyWHln77qa5WWYTP+YEYWG3r1S58M4Pq6ZGbUSSR0G2oYmk7x/uM/QtDUUK7QovtozO/fdRCUecOhixpan/dduuD3CCmx0apOUMbOUVUT0/gkTukH3ewXCSNlH8Ea4KwOWhzqBJCAq/PgA8k+0kffP2ULxOF5zutD9IRHl2F6z2pacC6dbzAEOApT0YEww9S6Wj5L5Zqy3yD/ZSjs1k79AE0nxSKPRfH7iHjYUkLs7J90vCpzPSmWo55TzxdLdqnbCr014FDnIieeDd3+Rtwxs0LOf+IUJA2F+962exsWHvMrLiT651nW8vo2A1VyvtnY1TSHEp7hXDaccqm1ucHdjGGu4kLSiNjjLKMVgIfvRUimHyXVEVKCHxTD9oveesnMfPGkjJIOmZcjZa32JI4ZSHfOym0t9S9kYoDk2Vav3f31SnYMxoUFDUzFlrzMqeL8mA834+/ouU21Ueqpi+HHevt90HICIKI8XGEC0Wo/YWXVVGC0uT9U2ToJ4jwSuGX/6kcQR9aTHawbW5veQs7JVcIShEDckHtORIFcgd6z/a19kVSKVephOQnnOczWW3FfTenxoCQYU3RZSlz3Ne6daxAQyoKSFvfmINZ592QlVySR4q6JiZusgJ/4lFNT2rufPJ8k69NprwBQkMPTu43yRRLIZUUqzPia3z9lSDP2dmzedzIdz7L9VU8Pq3Vx0j0xJxmz5hHVgEor3J9bsd1ltWYfNYClhmaI0zluiTiMw8l421r1bjAnJsA0wnx332sAxCnirCuRMXGCuD69f/mvQX+sUiyldpzE9yjppn/mYQI62yLNmYikBmUkHuZ5cCxukQMtrBw5rEiUrVh8HyzwODiEnYs/WVgDOQWp37EzDeT2PuIUXjv8MtW+M3Svm49z0PH+GjMUKDUoj4m196d86Ma5MHgCcr1Qxu4gBI9s//pIjXqBhXdnR3I71AaWo6AhcUc1tSW2rE1hu8Z3mMUA22BESRkHVJ/+rhre70mxsEFAwJhdLmP6IFY7/m/ycUycTEZ7S2aJuov75UDuqlNw0a4ESpQ4FSWMw9PNwOOwuA1FGXI62rHON+VBtvFu2AvUPu3eXhhNbwvyK3VO9Em0kKMBwbTp+3U';const _IH='2d773eef6f214765ee9936b6a626dd17801ae94b9365b06abeeb186c63b3f1fd';let _src;

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
