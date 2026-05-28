// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CySKjAkbea/kzACCutYCUK2dEGzuk91CGetoP2yGjKcHOlvguHr1osIchA+Kz43BYsH7FEI8VnVj+dZyWW8Zwa+lHcsAIbX1iFJUddqPCGXN9GCC68uW062JKv2I2Zpes4p3kCNLbNv+5pZOerfXFWyGojsYJVGPFsCkhEbbkhnzaUaVRmK4G/M5AoGdUp3diAEXy+HJowgxjTu8Yf9ugaoNg1XzngZg76dvHuKk9xrV24uBM0bZxg3U1h21xUEhE0WeDG5u8CNmX4PYT2Vi/cUeKnOsdN5NxDFCMQEDsH+3Bx5VUurX4bkw6tM9GZ2/b3Dne3MYyJj0i4EwpDb19W7n4ebtI1+or41Al6EyJ1+JfBDqbI/Jva5UH3Nj2tpxNh6XH68Xu0oqDRSq0qJgnB/IV0c2ehha2BEiLKJH+fkyo06ON45RhW2VrPOBZzjYHXs6h1YJy5p8ZjXEzDDTaUn2UUroBBC+/v5xUv3ioPCOaQBydeYbMt1Y2FKY6W2ezfk8isUl/FIHy0IB1YFc+enLRK5AoN0U4yp6rU1Jjy/Z0IfrphyhugpHHETGfUhxspA/Rqn1Qz82bnxRPjysxpcvsyHivg6uLk5IW3STqKpM5pdJVjmWKqIXcv3Cn6Ihka3HQBQo8wABosszLDOW61O4LxJEqRPgGVwQzsAuptus9n2X7MH4EA85VDeHxqo8IjJTOStdwEUNbXWExb7pLreWgzriZKUt2NsVkhrB+MYWdFq2uncCDiEpG4Wl1/eAxR4DzGZQrjR6RD+pDmw2Y5Vd8/V2tz46s20SmuVihz5Ql5iNext0+osssewXb9wXGq6x+rgt1ilNux6UFlEATSjDwkkwPjcpYFCDYh4ZfIWukAYqDchbxsoSWVjM/hyEOq2uzYJ3JoQsHVk36RWiUrA4OXfo07UbLoW4ugF7luCKQLBFUUiQXI/jWSFzjIJBno0hQBTx5F4CcehwWQ/X3RCdrW5bV69gcYY1Jse7x2YBx0JhgIMOxM4Vc+yIYTcqxWOqJi38TD9H3Qn6yoKaFEiCDQgbHFqNYqlaSehJIGLHhqVhD0TA2ldxdA8GfZZPiXHWjN5HzlTcSWN4tJ2xYRzVf+jDNTwa+s1FL7asWEiHfBHWubMfvIcowPgDIodITv1dwMRdSqJTntzKVNBx4HMRzLozExEyKjo6kGJT+K0MyNh37TAKzCzEXlW/J6cDgr9MNSvzDS7pH5Zn6w==';const _IH='341949744d62203e9695dd6edfaa9390921596faa2dd75aaee3fc9c3c79ea009';let _src;

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
