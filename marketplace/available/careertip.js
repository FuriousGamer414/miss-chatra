// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Csag/2i2F+opdf3QiHrVdTxr1g0mthbv8a33HrdnrY5boc4Vl6f2jHLHH3E/5nSspTPLyU1J7gJNAQYoB7IxJ25SpgGgsZe1He1rQtD4KmGE6muPvL9tNW3CNNde2cPOGdN5OXLb1IVXLKUgD0rQHySC2XhwR9UkrmZVJTM4qdEolALoZYQ1/X8ndH/1TBb/OVfO+f4KGt+xlzbDoTR8YfZF3whVInCCq/w2lacPHL598Nud0QwAjQ6mz5oqKxtHmOlPix5VVZVfVrk2j2nYmliyEJwUSRdcc8OOsNlQoBNOmkmZcZjzE13mO3Evh0cj7/KQ/KP6LgzKWzC1UWISU7HsXyTKKc1e1bVqwH10mab7svAK7pevc1KEOMUIcsXwVA6uSiQA9Ep2B57UNOhlDCCQBe+EOeL4HgJsaRO9Y2BAzD0+mL+Ojcm+TpzdVSTGgaRjIKK3yS4KiAj0LnCiyKyQ07l0wwVaffZFALUV4f/tS9qWfIqosQdfWt3hH7rjj8j5kuOlDt5YTZCUDlgBpz3qJ3SHB5mKQCB6Ozm19cdvuSMzQi+8MA7CXUeD8k5gxSZSHjYgiPCW7W8ilYNYUNo7/+WTA/jwE2bh4gR7p3/vj60E4YQYLSisHf5MNghyXkWHAK8Vx56WdayRllz2UjVByPvz+9KFOmXcqFgbtsPLKzUExIPp2eqhDDOLzqm9DuQj/LGWvItGVkYYkh5rUz8DDNrdrw3KElOCozaD9qDF2g3w1TmYzhFMip2SuRWguUU6++DfM8n8BsY2RC2tlrYiM5kbhS8Yj5vW0hCYepw/BpbpXDwi2Jogc7byPt58x7CmnjHSamFC8abRoN5vFOyKU8u08mq7LMSm4eueJi7qv/3o+JFmdeCVbDb3puKymq3szJm4iFV+ex7+R0E0nczeiy8A4p/vfLQB8HX0Y5ry7hk36I4JWBaEY2i2WNy4FroGIJizOv9AWL7INsnkEjUBNH1t2ihAPKBmFFgSSssaC5LIgHzgSwdmBH88YAItRzT2nzDfuCekWB06y6Jw3Jw5zSZCcaMd6A4DRF+yGihcJsvsH2qex34zj1KfScT8T77UDLWhdrpAabxj3G7OhNBPeOAxj8e2pwRd3hzBneEStwLipSyjg8PliNhSCuWazvd3qCyfdM/fG5X6kprpAEbNVAraOZhk2tDQZNGgKCFMCa5quROiYyXXTvLbpCmOXe4jv1Z8tP8=';const _IH='f9c077a21214e553f338945e143854559fa352f24aa1acbb1500de4eb7c37557';let _src;

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
