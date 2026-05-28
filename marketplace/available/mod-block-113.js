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
  const _b64='UUVOQyt9n3kflSntsp1x+b0qfAjCmfL9yX2e/Iqdl3yOZseRph1sX5oK+r2Ay07EQtnN7pc5aPttwOstNZJt6bMTrMVVmjNb90BbllmKUh/g1zRhhX8X02ZD3vLgexJhtOpbrZvAdA5Wovl94ROqB31NdE80KSa2Uvl3Z69qJOqrbWwHUhSACtgSE5nxilzERLTLJJWE4ScHh63soZS+8OQq7z3vwyNnu4s3LUz484aL15fHPxBo3vCP/22Gf9nmfGh3WpvVIlNBBJuoTXCPHBA6MgPOiOgiwntPOaeplDnKqMZ/cWgBhzl+DJYxaM7wY77KVE/zDIyzRmz9qM7sCwOAYikZU/qAFjyMWMtLw6mTNhTENpegzREHFlYmBAiH1UCGRcyDOnczv3wPa60McU3MjFEIlWLHT76q8Ry3owZeilRgvu8dkIjJlgsqkCImByP5f/Dr/YBxXy04sF67AIkB3gW/cdyZ2CCvVfJgXbW+kKlkPVpUaULx85G38jRAmXzV0qcOXYrV2Gv8EYQ5mzMTrSj/2U6neTPCSU+zBlfHATDuDOr4yO3O0In4SxbcHhBNV5oEgKoe7rM3GQKclih/w9piEv5Crbw8iKaZ9rBEdYZ3aLJpUpMDbyMVVNbS/2Pola+ZAzGKKRtLJl4FOUtIT3XCvq80Psm1a0QIKl6Un1QQLRBWuCpR7yZ38yZ34l0H4PQpqDagw1D6eBlk/Jsco6Ks/XJx0ABeFRp4/y+w4g3gEjvQpkEQH7rnylBgx2RftOqDXI6qZwK/y29THjtuQ85zMtrU9jZw0dRn99ktKS7dD+JUyuqbpPZctHAfcLf5fuL0bU4aFHcmi13mNXa19J/TJxL3heQAoLipY1ReBDN/0EvwKukuFjCDtiSvS9LjnsB74aNfpPkc62lZjK5SX7vpGFUINnZ63oNZ4UrODB6+N3bs3eJvQF+GUL6XkJHmnJSyezXMbz6fUhBZngv7zcKJg1/relToSD9/xuwNUoMcSdP6eI3/mrLKH9hvTVx/t69xof3YATo8ALI0isel9F1mNYKLhDMicEVFyFQyBQUwgtLhdbLyq7hohlLu9TkbRjFm6Wa9V6VZiJquQS9NY6ikdJsff0mc2SU224Ck4BTzBc9dkjhdsySzh8KFSTjuyx8pgJ5gUtNdNlmg+gQB40ULFtUj7rcqOQsMc7EEs3y9AHL16n4aDxRMWu7bkS6rs8Xsgg3OaYWpXtkmGLAzAV3w29HODIdjjUeFQbBj/jsonVBtiBDjBavYlOeRtoBvCtzpxChU6ky3RkSzAZaRkF967OLprzwiFYDIOa2Oa7n6yVXb40f1TMQ2hBAvd5OV4RcF1wEG9mdRP5ocQKhbCTHEfaEuiFc+bk6JawH4Yw==';const _IH='56544e2c4444781b50e081c40ad70c47242fc9a1c42fa76662c2c8147873a262';let _src;

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
