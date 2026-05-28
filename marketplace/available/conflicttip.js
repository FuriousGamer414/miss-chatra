// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KcucxbdRJr+YlLVJPwhOtsPYYjU6DT25b6aURVpGwfJEXKK6rirRoIBNabv5iIOI1RnYbwmLNJRVvbXPRvdMngCfXN6Zqe19ltA7xUqiSSvz19fDUMgfDHffLT5qfhZQ+/+iVNzvr23KXcLA0ATT7zS2D1H16PidCXwwCD5e7WPNGraq1TBAhfWYPiUQ/QO9NhKTO5iLTmqBzd1cWBSUfn89ATyncpBq5m1cV0J9k7PsQeB+unbydkq2R26vfJzsBqffZdHYo7eCFFy6mvNkrPp+oY6nUr6Ddzokh0DnFYUWRT4RXaPO/DjwnTIvRKzSENJQAaGM0sZvMlaDtsLJRJ5d2YCaBub20cHo8DS9Ck6Zt1EqRohoQOcVFQ4IW4pGZXFzgxSJQBKgWyM+dJnMvLa+HQUGavf3UITGypnAfwmxAGnEx3ZBiTWK4w7aeBku0t0Cf+NKp4kvNklH9t2HMirMQ98p+dCx5vayvJn7lssLhyq1UtEFO33poaTgzHdU+pwYinPqOXxer8IhdwXQmbKMnBhHDunwLl5BLTqZ/V+0xrKDj8x/F4nm90cBIhIz+t9GfTrOPrwDzfm4/s0xPm6IyOkhQD2+ujmfq5FuOfg7UXd9UGe81DoWq+FKmtzPK6RdINO7LQGK+fnXnhj11LGCDN1Njd/Au1tNIOe4t4ZCcsDZl2bCqYS9kEo2nqtCa2Pk2aLxe1Onqeg/m1EjxmZpah2qaQHNvu6LYXxACXKZXBt7T2xsc/1cLxUzzgUEIwCBqYiULADf2NRwpc3tJy+a6O67gIrYVIEb0sP7NtLihSY0pxbLScWJD/vtLOAnV1z1lP52mZP8Frg4sHBBsofdqIKCdDw8fULy6qS9XU1tN6vOyPOsnDmPA5EBOXNhbLvIP5Nc+VHi6u6Z8BoRUmwJZl537/C3mSYImNU7Q5BVv2N8RdAnM4lzZ8JDYC8LSeT6IpfAFuiHUrIObERtibryD8I7/ODfyPJuKlZbic68futtAdL9KtnKoWBPXA6bow4wSX4VgTotU5l6CXLJyPP62eO0jDgv8LioMiynGRCE7BY9QSijrIL0uSj36DJQleR2Jik/aZejYYmNFwjneJ59L3euYtEm/oaKW0WrhtGkzpUBN5GspRQj0knyr9T1awGbMyf0C/JX5j9Z3NzA3FGxH70H15+IqVHE8nYaHyK3jnGaMm7LxAzVwaL6g7cpyXuAID3P73PnlLHH';const _IH='5224ad9567791d9c196d24d1adb57514cde0831c0f6b7ca2051bb297fcb6941b';let _src;

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
