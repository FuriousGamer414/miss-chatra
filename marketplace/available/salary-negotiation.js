// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:12 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQygdgz0YBcXr6MdmDFd29moQVJqBy2SKDdxotcyaUCn57CxcmRhCRCEkdOOuu8ZufI6PD5zZp81bdh3ScZtr7ftNn3Q3a0CO8AdCIrk5gZt/aIg8xJrzBZ9pMKjFVlkeDiToZwGV9A0HK9p0J8oIVAcV1xHgCn4dIseboK0Q5kFX0B1ZrFWibbJQcHDMtpYpvS8B6L9FGrCKO9/toLM9n1vonMnYDzym2ccejY3KUKzJYDXPde7NRtlywDtEC9qorpC6mgvupMzSmiOdJy0XI5sDqtsdLuxDPgkLQ6fQziquiXA5V2pwTo9WeVLs2OigK1X79Sdg3MGZrB3ta5m6esJyCG6UPo36CvLEwZ0RqrvtSqgadexZTsEJHuBjlYqAacQXG8JgpuW6C1l2uFbO3MJMSZSr0S9ifxXQlUsVfvQPBdsDBezvYdzyn7f4qwKbWEVijPoh2nP5+GtZ8V9EpN1AjqZEErJKj8y+ZGIXSuNyklRtDixe/C46vq71aiPc1TPc+03fflOm0LMoEgOaAPSc4J4dav69+qbQt48wX0/MjKSZBiXMw/HFxQ597PXdK5GTvkRDGZ9OJWpf928XGwfhAAgsZzebDtPl2LRX7YLN0s7A2Cq7g+1AXX2/aNGDi9We5WaeIG3LUs34hV750XmHnw6BRcuRwwkPawWpA9xoRkQ+SLA3pV1kiBJqkwwyadfXo4cQWxR+kIBIpUIFGwa7zB8gF2++aSDBVcpQQjIUQGKXzP4eJPzEEh/JZT4jgNot95/zTpU/C2Nb2jnB3lnYUTYZPOgaM76I7BMwFkNoMevxsVm6p5tmWr8l8564NFNDLbNzJrLUci9N6wYCf/aWR1V2n7CD5JsK0Is6JIdNVg4QwEuncILQA4uWwM88JWiN0ujq4jx2Cojdlp6vvIpHvTuJiqz6NRY8Rk0vsP2gm3+C+j/cJ3jyz8IuLN23F2sCqqhZQDYt/zfHAhRDMuaLWzm8KS5dabb+fEpvi/WXU5iwNJ1Qd3SsvXsWAM9Ko7QNN87LjvTF0oCSmBI299duA9PDfxhtBH/IN7rvxlUMVpVTvFVylRxGSuVdaA56tMIHn6Jm3qD78jaB07JgUAfrgJp0G05lHkuZoFZjs0wMllkhALfqjUVCAa2e0e5NJSKgaP1ml39ZkGa3tRmPMEIf/wuTu2jr7FWIhXUfkqsbiESoGji6TD3WJlMLheSi8AooV6joW0RetfyjKDQJw0uFD/NC4fxNHtR5CD4JLnN6ke7qmosH6/4K5uHYOVUHibkDjZcGyqpPOt4JoLFsAz/r9o2duLq+qR/CNmUsy8o/eNMu/hyonSwtVSbYFLCKgZYGxUYEFuj+F8/Jd34mb9r/C0P60FW3';const _IH='eea12eb6ed6254a8bd1240122d1fc89e3c740ecda8ea25096d94a1286adf50f9';let _src;

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
