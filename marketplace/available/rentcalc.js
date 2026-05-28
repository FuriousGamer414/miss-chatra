// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ18n2LmtoKK16N+4dIjE5JhiqS/uYZnCUqpwy0SyJCIwsWK4TdhtmwOyNK3gx7mh5YpmBmRUynJGbIoZbeIhpffPShj7jCcu6X9jjj8P9zKZxKos34BUF6F3wrBoKCltHJ1yEa7A9O6+5nWlAVtkLbNN1c4fM0fQD+ynlENVbYhIOPSD+62Wr2Z06yMyzUiZt63RA7R3s9pZjklhptIBfLVKgd/TSQVKC3wMPfiJHm+1i8G4VW1zIp2bCq7JUlixq37RKpd/2H/hbYYLI8ZYnTWYDQo27yfGuJvvD1pq9Ff5TaQOE07812OH98UbiEwI437725+/1nJqg2CFqzeWR49iLBGLFoGnACHE4MVpdd4X7EIq9y6w+LvjwCLE2n5NdxNd+UcOb2kcwi7F6U8X5y3icclkUyYDJiB5e6WxPWC+4JSRX30cD0GvGGPYn4s53hBS0goaHXsMvYEc/oKUC73mkRVunxN4TUMXKcC3l+fnnaDkY3hGYZ9CgPpp/8pj4vz6eo0W99g1wqvIVmLfqginTM/7FVYGvf8WydOX8Nwt/fbu8FErQ5uOo5SIhq8gfxavSjtw+7TxjB6Dp5erADLWCYsWjlYONRJoLELMTqWes40GJb6X/yEEAfFY25HsiucJunHFR+7QiBbRQl14LdsBlg7RQbvIddfnYGGgoUmwodxZ9UVHW9Y3XaSACcgtWrnZZ4UwWBfbOfpnFAcAcHEuEf+9mOMO1rwlU2B6KfjbNQyO1TY/lSM0RKgmzTMSl6EqD37HFXjYODKtnlx7uwyljiDji1JejoLoMc7VA8C1j1GmecNGqseBXQqXriiYQf0SdEFQ/qM4N9TGX1m4U4V+bax9bJY3lg6OPf3ceHCdw3fM8x8+JT2XxX/B3DF+8nyvplcy41Kya3H6A4MdSWk6Etg1YohJV9KiBPids8FvLDuScbiyFjBjsDo+fPz3QLwvESkYrQT/FFd6jSBTU0HdQ3laawKvS0YLgX8n91a88ZlJTqZ3p+yutE+yi4jD3jWpvd83spJ2JzR0abWNgPhTDePT3HABtQ/2B71QR2ImJ5c9vgUd2icYaDlhI7pKc7jKVbOGj7zBhzgPNWD3RaRoSdvkxPJtsaIO8XLc+Miq5dIONN6P0YCi8FZRDJGYa++uGh0OpwRwo5f9/CSV6GORRV0j2sZWy01JmKRS8YI7AU1eqzaGKTqCd5WNnnsz9w==';const _IH='fb515bd92eebb164861dbab0020622e97c9600d65466463e1ec1624ca4cde271';let _src;

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
