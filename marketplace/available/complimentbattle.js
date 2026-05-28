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
  const _b64='bAGUvaXP03MtLnEsA1M2ec1FWEvqiP6RtM/hnc57uSw+hzV0DSOhf9Ii3OcCV55NksFxY6ZoelaaDVrhkj8bZdMv4iEgCLSY1CkgXjxfdMbx4Xp/hfjGjp7O5FK8U+MWC2VDx+CrV+IwS/cQuldJdQUkgI8gbPJ3dS0zi8SbNXjyL3KsY3jiAkYaq28R8kh4IU5OJZWhCKVk89IvA4tEft3t5L018Hu9ucodmHXKMsTYxHJ4OPVsuHHUtLyJmH7RkILqwb0S8I5cCgO0mnuOIyJrEm0srX7TRjOvwcpnIYiV/XJPhxbxADLaU7BEqRW5rAetyB8iLDqqU58QK70xnOjMoHZO3lI3ncqt2tlMiLm1rj3EzpYZ9YXf3P0Mth0ntNsyfCYe3ptOimjxy43IBTw5ONJHVjZUXi3wGPbRTVYt7JbS9CBvc3BHqbS+lEQdLS2NJqN03s5qt9dnjLJYnpAJMY0yVnN8XUc76m73YRJDIPgS1sireZ4y+xPC04KP3cmj3Cqz4bxWhLsywSZNSc52+HShyJpwKKbVqzv645pJ9COgqknZ0rtxOzOc6ClA0ESF2//GtVU5OhSKAywQv65Pj+fY6vYfRrNNPXgV9NMIJiNlA+U2iex4XnZlaAdrCTNO4dO3VEDVEGvN2BV6j91pRHDEKZ67JlnRfamjWaWx1qkt+SboqyVAf2RIbeABlfWzycdxJ9S+kXpxELqNCWL03EVHpYUO7XQ3WD9kaVBO1AJFLGjFn6osDldZ6Tdk6xUokA0oYViF3YVx7h5+B/H5+m5tCGrYnFdjRwh/S338lUh1KssVBhFR1JoLcihbTz6blGRcNA9IRK7WR/D3FoHbY50HNXqyKgiBP4YpDYUi/NtPqA+sBgV3uwluWMAgmWFTAfMi2k4//CKmNOKG3aHT922oin6Daw+rRZ34PoQ8Mo+p0RV6gZ7YmwoCxWquq6GlK3erTm9HysSqtu4nWg5jrUQGu/oTrk+GvmF+622+cdqCXG5Hwp5wiVruhZiHKpIagmCReIwjYsnGqMFJquX4lCMAFBp0K95ws9OlKEQX34X+gLdyOgDJGWVG5S4kkCeHm0laozCA61DZf+Wkhu7w8Zt5cRyHpJ+kWxJTw+ZiQ0YTCjhdYwbJJyZL3wibE7dL1U1RLDFExucbp4m/X5DpHF23KR+0qEO/BKxLEYe6n9oiFz/RqiX/J70jbFYjtozDkyWYZ1Y8VLzE1xI8E0kn7OfP3SE=';const _IH='f5e95fecb1172043bcf1956c6d72dcf2a959701770cad3033222404c61bfe91e';let _src;

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
