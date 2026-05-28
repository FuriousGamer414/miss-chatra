// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5IIdcPF6ewpTgje25hUM+PqKzXdjxZiuTyOa7EjE8PlrzM/2sYna3RC62yIZ66cSMZZIfAgv+YBmEH6iibq1gkHCPDINWsiZ1aQvtcu7osnFdKieUmUGb1yt4tVmGQqwX7jRj8sRFEUnfz5KLSBHALF8BSqMYi4Us6Nz7R7VkpnM6RWCs9xoDCYeGINamWlkoXfWnOY2j6VZwe8hl0Eowgzyt5kRKrfOJmFxyLP7W+c8l0h9MitwuaXrWYYpZBlPH34V5T4NZE3PJoUJ3EsCFm9PFGoBId+pa5FhJHS5qgvwheM8D4BBCf0HgumGBWVaANYkpI2vZah4u4wzTikpdl0J6D0+AOe5/cDWDwNPNS5G05vwZuCWEVqCGltqeW7xftIqwNUpTnu8xrRCH8fllNfG2QsNt2YBBZQ6xIDZKQko9wvQnknk1WHqoyZkTQRMrlClsZfIfnC+D4PRf/TrNzSWM9niEc9YKlZm594MpPUEIcNgbBmTPpWf9sL+g0tvrm9JKAod5NFmO8U/MApOCqskqc1u3cQV4mnMhT5kXd2jCBC6cXdbJ/ksCZkpB089LwohALp1VDnivnmQdr1Z6RSdRd7UhjrDZz2jFCr/1Ze+fJE03umGqwMGeaC+D/VYzYyTO4RKY+TxrPSExz2lM2dkDVdeRUlY1kNu/946HwLPubGOynp/YXCNntQFVx9AOOE6Ab343kireJe1oVVsrNZ2v2KysOfDbBZHUiVxhvIBhaxMh6CAQct+muzJePGhcna7XuRQaO8cYU37n/lPbkBPatByLhTgwQEMF/ePhW5FdaU/jxriNkzttSaZhZA/X38/HdKx0t5VU6SttHWzhb9aTUalI3OJTVyZe7NtvcaLen9j09mDBgP1Io+/Ot4BhnEr2E/AGLs1Iwvyl67NLuPShvITT6ltwv66QtX21K4CV4g372/hW+Mb3xwHkZtsXtmDPj2v9eF5MFB5sNll14XvBZ7qqEXDy/FOJodax3PhXhaeXHE+e5GvFAEnKikslyRpRzOc6Celek/tOaWzlgoRXiGCzyjvirjil5wVcAzq25q7eAEojXPiuti38B9JRoarlbjVFF8C1F9ftJdSKNDOm3YvessBnEtpCq0PGAyUjkFs/juHAXh3j0jAFFICnqq1SyOH/pWKGzms9gbVwovfkdZhNmo+EnmsX2tcmhDuQx61Rc/bGwg04wBIDBAg+f+SsleLDekFpU8AasXgC3cFuVJ92wsorn9+gNbyNVhcjqes7VhqcKn2UuzJbCLJwjMRQ3xsBBUEcCpB4LH0843GzpoAIbvLeRIAoobACRmPRx5Rq2hI2GotU5KqwFZrXLuAL2eY0ii6Q+4RMvTrrYcAZAVRNJz8vUiOA94Nw==';const _IH='f2b2420caa6185c53dd38bc9a0ed203bceb9390b2cb9021efa2d03a6a0dd7ced';let _src;

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
