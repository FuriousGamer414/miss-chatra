// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P0F8Q/dMfA382ZvBw56xT3BMwSfNDDc1WUwwMJOmCnBqQy5qR4L0H4zsakoodxtU74ExvOqqmHLS/ggWf2zLLX4M0EJiw3/ThN8o4Zwf8vu68vk8WdN7/D/j7HQAB+WyNmRBVHAcF5yzhQpBE0rcC7R6AnlytqbcsYnuEefDZoml8gg84F6bKQ4NZE+1IJha1J4f8BJhUMwWZi44+ljPha+H3dZBUOz8PjvEUGRP/HcVP50FSx/ELuNuQugX0cK81dT16D12M4UmVUEm/3huWz8xskirauyCx9qzp+NAlmiGvq9Ebhv7TCjC7uinodyTS/DzZOaJrciMYe3j3gmxKVFQcEJRRfelXuxSs/Ddhx5YDeSC/po2iz/r4RczOnDf5qxTOiDkpJdOvAYBge4OUdCC78drVKvjfqthwxVl6unkl7+VKqNhoSe8XKdI4P6sbrO8dy+2t9teYB72UbtVwMxZXX4WwlXiwymEEdZKn/vFXaBUpfECpe/8m+mDlwS26IqUL5rXZKcqBvGPQrln452ac7jE9H2mwHskTUc1EaHo/6xQj/SZyh4qbFeczJ8KomXXcJ6Vp+Y9uJ20zDY7iiM2boV9RwKxQL862+6d0q5uw5QRAG2SsoNDMMUPg094qA7radLITDRJMzvIQJjL7FQ4XDu139KaikPhhBSv2X2rccJ39De5yE8tlPXfbNyCKq2T4MoMDvb3mHyMsxCx4k0myHS4ZtCMF8KfRKqYSfR3gY/hEJII0y7Qd4tF3Jkk8mtE2RMoDBDtTYRPVzZMYqVwQmcV2epP78mMwwTtnQxKPgh6N2fLZu8QIMf3qWrwBjt/jZG/tb9Tgl7waKdJsFTCuKVIu1TSHVVy9bDDI4jPVRUF2Y3nxOHLGmAs1EC+j71QAYhsHZBuZiPvs9OuBRCYc3qHHUs4VQYZSiZcOCscYJX9rcGvpi2YiaJxwWW/7+ilyW5pxXsBoCWfVw93eAS38xyb64CgI1hd5iNbbktcf3ue2NPLcUEnwNrpIDarb7SIEzHoA88=';const _IH='3d2b4879df7c396f7a50dd933fd6e9d00feb04b12f6595d02fd5d29104287a41';let _src;

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
