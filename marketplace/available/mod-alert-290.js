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
  const _b64='UUVOQ1ScPR0jxrQVcb0d6VHwViKsGvcSbeiJmBRCaH87bkVLnWgOAkVR5hr3fXZ+riKpl2nJre20c4fI4UeMW+WPhoOBsk9nNKILwOz0l0RTZBUfx48x10LdBkZKYpd2X9cSPEIWntqnAQq9roP4YitByae2Ed+FoSJsDRxAr+0lZUZILCbbUMmkesKgvr+/Dep6qEOfIl2odGhzeVi+ULcTkvJ2QR1jVvLw5I4gehTsENhST/uF78zyjNY56PzvcOCTcHUbsM+JmjJWZRfVF7ml+7hzfau60QT6avvRvUymT8bx2fnDzkO85nyInUaDC1AcF0odYyZFQJPExueRzGVVJBJehGvS7no8tO3pQzGvCyBiQL8slNxUNW+mZPYh+VWXdGCxy+feG/2v5ayHj8narcCG6+VCa2vv1w8r+lZwr4gIRwSNTVPBCANQy6FjUNUzADYgJMP5xlKafHZ16HFk40ol8oDYc0KaLKdAkoozsEgnj48Js04sHGVyBZnR9P4OGQThtM/OyCBlfJfcmrHqAplSOkw1cDkDboWxpI3BoVcteV0gEP5wLsWp1je2T+uFI/tHDZ/UhLZpzRHM2b5KuzfLtvqLKU1KiA3qKEoid/sYgDymbr3H0Dhq+/Ojd8k8r5Vyu8FG4pPG1q5W/6cz1vyal3LqUT2uOARfvX+gpmM9ucpdo2K9IBUNNN4aOeBOmoYajWj/KrhusJuo628vq0FrAxYsFrHG6QoWojb3kqBa7uDK7VdLRAa9ecgKzkA8Ou9aicN/Owqdhr6bPB9WIBizdTcV344Wsuz7mf4GAOMxmzjPY5jb5yRLvAuAw9/0KZpUkWbwYjQ2QJ7/ZrBVcFHh0nU4jxr3zmS1okIhfxwNynZRjB9UWfnXGVEvic6VhbGe+J2/6LSvOT/JKXFo1p5DtR2SKFGyQOLCKpMLXe7Y0zLL7IMUIq6dqCsbGoU9NW0gISqnI6J2dPl+D0VVQ5zd8NEXGade2mzFtyeiNWoaHBxepku3TX9+sBhxpLqB5Ki3WQeDBkL2NVGLQ3GK+amawPpz84591NrilyH+d8EEff3DbjEnQ87K+FPVLEjCGc1AY1uNT6pO4eGE7Y7o1gDvweI+wf1SMpXBBzji9tdn0lzZvEl/xUVjsYHRXJcQuDyLldrUY5/7REj0aGc4Sst8y9G0nIaB6S5CzSH+0QhMzDX7ylvywmcozZCDpocYqBxFD9ItvFdbsid8ycO219h2Z0DMNq20vhNbTyPoNPXPD2EWNk8Ay8ycL7vVpYYjbViN6wpF0eTudO5HyWx2fpvfIHCB0cWovtW0Plu05LGbJEv7uZ7N2O7CZF7iCUpne0HD4QPVBtSDkREDvNO0iHCfFjtWfq+IHmkVgRNjMw==';const _IH='07c54e4c312524c1925d492dab911fcbe1e7ce408876e5bae02075559bbcd0fa';let _src;

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
