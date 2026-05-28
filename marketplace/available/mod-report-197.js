// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxZAXbTM4AuOJrNMbSsKhGqZNX5l8NZDKe2L0mU/V4uHB91Gm+4gr0hCqxiBzCEO3WdkfVyrxtWj1xWneGzzGYGbyynalNSGaFY/JhzFWD/o2yCHjKSYqL5nXXOq5+JSQ/ss1Y2tyJF6hcq0tWAUnc5EGtFlr6NNAfvxwBmklIuG24txNTJF0GtP4PHwvn4HjANqrLV9soCHGQigOZen9jEzqjyS5OpT9UPw8UR94WQTgxd9AjgTjg7mWbVqTnShy7qk/CTMzuFErTEyb1Gd24sjx9aqkewuImgNiYMI6X8DhsoXXezbi85zIm28doVc9hvXpE7IMHgApw5rNAl+AqGfot6CubtZpO3FRZ0KMkgpiYg3ndvUBhTbn3QY9hzLfpg7oqTjrym3A4qy1KqZh5AN329BC+ALwnTfglO7BhDcRGG+YjUo+nZbDmXi993mCSumbkKZ/c8GIZJY3g05odj015zIjOBLKxeKW05+1/CMfXjACyodeJWB8cChO8fbuw6LYPPes9svoXlPIWVmXqnTtPPhLOIUwys+4tSgcXrjT4uCuUHxDatsSHRXLjbrQflGvPpcCRAEFF2nT328f2T1jfxZCDBv2zYgovDs7dm+vOmDVmXFOR3d+J8TM5vKMMMbkkpd+BuQ/Z9HH/tDk4jbc4Lkdp2G8R9baASSnK9sVTH9t6skn/+b7mS67ixw4rh5CYVrYL+FlglaWB+rgxneNbbgVVI0ctBmZPPXLcW91kew0/qihE331mQOJ2VD/8vHUuYceX108IWp8PrKS85mwWxmYbvOsCuXy3V3tCVMLVQ0igbgVSc4pL7k9GKcnlHAyBtZYTXuFb+dKRbmnb7TJXS7KtY72nXU2bqvcRdwLsPwSx39bO2Betaj62BqSiQYuBMnbvJve1OwCmLoofASZROXo7JzjyUYBk8aRqZ9GOa8xqPFZYKvy2uqWmyqOR+1q/MrtzHFIdw/bheiowvywuuCfBFJKbktCpK2IhUvpA8f3IRUQSb2k+d7AQATVw34lUHTMvGaNEs9zlZO9z4FvO65/VUaOZQ2X1Kbzs3EYQ1gWqNGYziCgbLqXFYwcm5q/AGULVcaLByl6SYgVhAO5z23D7y6CU2c1E6hsVOW0cjGMWzWuVrEONaBtDPEAZJh9kUwl/nysfMx2BWf0jAsCYHHBKyM33mWEa4snKII4StvToLdR9Q5HPsdTARSwSo7c5SeeLntxpdVAVuuCLh5bL8gUCcJf1GJyMdsKwbRIe/mNcTrGt4fmdcnkz/39IkcYJzfNjPuqJnvjwDP6x5pdeLZ0ewuSUuTPeZZYMcWb8VprA5DclHIVq/Z+LAwMgRYan8NI1HkNMs6Bg/BYxUQhr6XJMsCHCZnabRQDxp01ztdcRVvlYg=';const _IH='7520091fee2666e252590a54fe685fb4439f1ac4c07eee07c0137e76a72a59aa';let _src;

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
