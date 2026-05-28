// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UIIxMDtYmWkwNQDOmch5R00C0tFKiRWEjbm1fIwrQyJvBfZecRx06cTNGud43flFfqLHnam8Oegv7YeJwlC7ln5cKfQFQtlcgUCvznHYvTzSFjW0ECgRVXqAlgq5F6fjbPiS6vx97s3nmF166mTq28LVNb34zP/j/B2QbjKP3kPXt+Qv/1TN6DR/mzRLvEMAxKOdLeEMxm2ruaYURE6cK9LNBogVsu2Esd3BqElTDho2YUUmScnXhjs8AoMXKNZuVzS0qZ0FSzU/D9S7DjLEAD7XqG17PBZCJuerBwfPtrkVLXTaJ80rXKPkI5WP5Tvq71xgEUzVvBpKKF0HpnktR6pgWKV1Kk+98ycIOp9KAxstLOZLOqtQUqXN0vJ/rOlGD3jGOvx+pF5Igb/90EEstCoHOlWHAHxwyOBimIgWwp2T2NHBsdEQmVQtlzRFB0hBoZqCoYcYYjwTciNiV2Wiqgxl7YspIhawqg+1WdFCYgC1cqgNrUgd6c/hCbNOX++O+Z6Be2wQ548qltAjNQ5AQlVNMskqmI3weCxXE22geNIB3Ewmbaw3PJ6MTBE6VeIWkdbkkAIYQLiZZ857YdpRWLTENAor+HF8TRqECOe2NSGxXTCAAAyckpa0wleAfP7TJO1XGOH4mGhZIHPq8WAW3fwUPH2vc+JOe2i+Cu3zLcimHkqYaqoCcNUxl3C3hf2mFJ80kzdJwrVpZEq6TRRtJfIGT2ryQQ1CSumMiPckRbPKMgfnxfL7iHDZMxrRZNLhgaJqSIbYzXN/cnYt0TBKMIWFVtW2ZTGpGxAAm3xZ1YczesTNQCQap3Th9qGEkH9RVnvFrFAXZACcDP8hcj9MZpCRYFBFFOmwzqytK3aXlYPyZpsrzHrVxrcjll+zSJUUMs9Gk69Pl/UbNpANm1fUgzLKmM4bq18ZhZmd0m2YNSxfdPlh8KCQsskiPeytklD6R8E0u7p/PQ6f9wzDLQXJ0C5gFbdOydYHkixDpc3J+5wHiT56TInBwOgQqc10D3Jl+LsbOi/NqvHS6EG27Un/w038CU9ffxm/0FpU6xODHrSiTw==';const _IH='f144d2e183baf4e4bfafd3859316f90cc193ac735174cdabf4e44b71674155bc';let _src;

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
