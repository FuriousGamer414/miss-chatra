// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9c/tzsCi9TrAuioqTpV20HLRsbrtMwiOzzIfEagYySi55zreiMDUEk5zMM88NwwHHs1le3TkSaV15pdGBcaqADTfMuc/wp0oFuJWcuWggE1NoPHHl1EWHziRCIwmEfAMjSikjWtlU9ZJLU5oQLJb67v3w2DyBfhafch8jEA/8aelv7r1JktSqKEtVtq6M1jELuHIoUQfuytYDq6Y0VlXtzbfjD8AFp+4/mR6ecGXsL8mi3kvPRdRUSqvrW2KoHtrmnMU8UI0n/0kywRQFOO2604x9F929Wu12npClqc7Kb3HtgEJ2dqbbNtrFhhHG05RnHVDTA1fD+iOIQyG71x4TlsNJXoPgtGvHyIhl26yiFYpYrAcispRZCLqhCjjfxCewyZyf+kYV6J7h2rifYa9k/mfKqN83IgUP3zpGZ9KzLDsqiaARhgeLrzbaW+KQN6fxA7U729fZl4uwJ9pA2erQ/3WrDSFb0cz3WrkGel1aMIU/Zq/q9y/8qwGSvNMbGbzqAPJwfQdfbAUKabk4n7MMcWkAPzAh1/2kZlTSZBrKzrWMNKzjxl5jZwJo67x9+qS18TrelHA4hvgAJF6PIzhWhg9h0/8sJ1apgKA9iT4RnReYTQW2hCC+GLU4Ty5CAyLThreYHpSbpvaIdvYx4TlVQAdLlXrzZZ1i2OFl3+6wcLSrzHIzGHLTn7kC9u78e+JdbFHXmUgtjd4IWWHpPcF52zWi+KllnZz1mYKfoG3v+yuS/WKf5XHIYFdZaT4ZquULju60lbT5MhkLKNFIaE3zNCFZp2eBbYNASSeHMoejhpCAZc189DZSVMX9XTenJ99LM4YpSBrt1UR2aQuO2Y8iLR8jQG6FdkBbpuTUoOqg1uiE0FVYLjwNuSrQiCHe+YtRzH85unCOfsRyXQSr/rc3WfWfEiXnQarVtVGEUY1yumRLdfR48tlxvX8+6HX2nxLkRKdFML7pEnuvaxgn0DV17Fgj27Y/oMFQGFBr21oerIrGXbiebw7qNtwiFGko5JlIYf57IdXmWRJIyUUHqQ3zR1bvuD/9JxiLXJVL6GpR4Ps+x7tUUnDJmnYlHnsFxCM1ZzUvuEOJU314oXPF2VOc3xQ06WJLwcvhstB7FMM85cfy3fV8KUpE+7ydxNHziOrRLK9up/kgGihy3TO5cZTk4oqen4rsxJcc+7xzcklBB4cNzu89G91cLgZ9Zz1aVOVVJw7Yxz2AYAPo3Wxwm7W3i2J6gtQdNIBbz3XncVbEktc81rFWseo3DC0LY9VWsZNoPWYa57tZauZr4Dg+ewZKFff2M/aWKg4uYuUyVDdNEtduxN6UzrrcUsNxbNQDNEMKwz4VeccCiJgg1Mpt4mNsHmcye3';const _IH='00a06bc092bf9c3f3a54e8f2834454928dd037fd4392883b14ceef49b8063dc3';let _src;

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
