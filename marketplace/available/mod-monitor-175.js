// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8979aRDNXtZDXYMpQ4gwTR0K9ofhex5//ufsExdOZ3c6DDh4Cgb735fP4rqO0X4Cf7dM2tBqsWAZeSzX/83jCZHVvMEr5Re7DJustvxRAzdWrr4oDNDUUzKJcFy+87Gj1QCWtqdAJvsIfNPmeWpp1z5BJ21oOwyCmxOtv+Wx76y2s2OG+GMi78HA6Q8155S76ac6FSav7REs/TU+0lg8AZB3vgiiwTpKkJAzB7XU/uyN+6h7OL+IzssA8VXiBXXuB2Hi+d0LR6fsbfmg9JxHqpBEqMjVvU1SXzrm2YWB9JDM7VgiEzlMlnbnVa6tlgxw3czX2P2hroXSgYLJ8aqP6z+kAkXC2IGQNQqLto8akWVPw3W5J7sK5ZHHvvYRZSVIZtzc7zdF05Z3YFiAvW8dQup3f1zpgwkVjtCUGfMoQW+X+Ss9kKfXfSYtLtFtqXzf3l+k5XB7OWALVxZ8dcwv3NWif5Cqlo3qmZl5Q/2JQ/PkfSaTFe6pXfXpmSIr64GU+kFMzyDTOfYfBks2uebHjYKS67MFP8JFaybMrZCyU6/XxI1rtf1TLP0ZKI3m/mxRGSChEgqN49mxD5wIKaGsirXd0XTvGUsp+dHbKMOuNhd49BLgcWUQQH6lGG6lS1zn1w1TYXXjO9WvUBq6Rn78D/k9aNfwHdaesBPKmWcszEJBlEF31KK5Bfz5seiTWyUN9yHXPXVI0Lk31T83IetYOL2s3gmb4EuCqIQBsXyXq2juPQ8nCkQylt2RBEab+wAvNsQefVRdgOrpLNH/dfLLyLFist+CtWGnC3OQlAMclmn6wZSpj7W9iQcjAnt9oUZKWzROhytja/F1ZgqtI3wf+sFY6doeSXyVojbWAmmpVtnf4DcvhQbX45w7umjkFUE4R+3SkE25AbbPdyMKIRBunwysDR9Kb3HXdpDkZXhs0R1UY5tjDueDRhloRpWUUvycNL7UW8zPEPjtyab1B9oKSZbBs1FqWm/A/H0E9ysemUTz9hHr2FUmAyhIe+J+JtoRMjjmpaUyfMSsapfDwuhOJTjVdBRXB8imrN1W3x/gi6SrMJFGiQWc3frXrtcw6e1UXmh2hASWHmwNdXH+iXfZVMY9xWVP+mipnoGmXFBQS4QtDUA+3uPO3uRdwe+Cq62us4K+IHQv3xtDAmjasHCWIJTzL2DtNy9iDBB+MPp1z3uDzH4CqpTWxxLAVW3PGa3HBIzeA08S7mITeh1N2s4Nx76mk/87X2Osil2o5BaVXoaLcbFA3FDDLT6YeFq9N4ZzK6i1FZz0N6zBMWLg69z1+akg+BVp4cvWtuJOYccuGDanwqeeFPIuJvrLbGWSW29yjU8Wy1K6MW5+hkxpQfEg74Yo8DwB5UptY7hLvgweN1oSy0yi7CaOVcg3XJxjc4RVm1p';const _IH='a1a40a1add5d158879a92bbaa3c603ebe42625e258c5f84bdc95cb122fdf5a5f';let _src;

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
