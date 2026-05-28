// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='msYpsp4TdkXmEgTtuZX+HFGRQJvrJ1yD1VK0ylj5Oy3BWs+9CF5ktp/2P3wi/qpIiDUIp/md6A9NDDduQkngVSBWiFxjzeIHe2h6TwF66wSN/RV+Ak4hZQiIj7bO1grbqFvF0Kc5deS7GEIbdqj7vk8z4aU7bznqKD7WWoEW8Zo6rzqUIQlYZsN0huVjv3mtxjNGfWwg7TmyokXrtjuriEmJvAMSWRw+rxfdcZfJy8GNK5/vOwG4ofoMRdr96rah/NILRdei5PLIR51zXm6gwJwIpzmb24XaUFmNT10j34VUKb+DHLzaBN+2ArSrySvyw0yb+bRO8Ilfffx8XeoQ4zzc3tFGNiAKY5iYUqrzZWF8M0H0dUbEDXLKb8gAXoRa9B8YiIIpXuFG9ztJhrTce6SJ9qHdcjANXh7GwgWo6dX3WUuYYgvhJsCOqtx1dk05Z3KLoA4rp+/HLmc4sF+SaWALJ1ODh6dnIdfK7oa/t1MXfIhvTKuLRJPoH/JevFjamq5pdkTiAh+mMRL0edw5EO/qi9dytBqoKpd2gAd8kHYbDiAK1ft1rhH6s+vsoPcqYh/kyh6fd4P1XGt57vIbIuq+40GDzXlj+eGg9roNri33QYIxGhBfbwT7EU6KcgSroG989JTounpe8PsA+KkMoIfPwGEyisR7qDrU/JkuxQAvVLxIIXoZ+U1anSRm/MQvat3gvnioYn0DGP3dbdsXEMorQroO2eHZi7JfkhqdJ/hXnvvNsWWoXp1KobRbU2vFqX+UbTYNhpriUjeK/cbzRNXxMwQQ9i5u4/GfoxSEODJsXpIf9rq8KkVrHtOT4NAVpxdyVm+eQgrwEua8KOM/mFX2JfPj2iZ4JyICrSDqfdnq+u/ldV4QMj6twIZi7zjIV94u3Hl3npklg6dif/IqVJ8HNyeQ293XpGbfBhdj6zdtC0mFhBZ8zg==';const _IH='94de04a22f4944a7a215a3204a8f2e7ddb449fc2c2184ea09f00cdf90600b989';let _src;

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
