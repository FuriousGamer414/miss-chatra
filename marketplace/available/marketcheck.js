// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:26 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9w4DheKJLNZzjdlBvVjQvzmgdlyAfxuEu8IzN5BA0PNwbIANxF7cP3ec5S9I338T0E1GswhBOSVyWmsHoRSw2wdvkCjtbD/VVS359vKICK3d8iL0bP4/ew2XV4e1I8rf5Q9YUjXzrzou5cYOCGSFoPWmE7OkYU2+e4QKqWgW6OUdBqa18Oz8K2QR/trbZLb/5IQT6ecI766/viyaiQkl0oWPL0c2fFlUcm/T6mUjgYZROVnQYBjVuKB6InzFxgo2rL/0rPQUNOLdW3R0dsHpl0Ee9omGN1zF4xD9A/s5xAN7erl4N3/5GndKVZyKqM4Srkgk9AJIW2ANZ23OjKHoAIUTqtBJ9JhOKxYN8NjKEGvrrh26HCAlUQ7Ze5thueq8EESSZeQM/0N31Si6HIbPpxX1P6ALab/IRhiHODyzczHkYgnfOGvnMvAuYMTDD2ENarH47TKGwqPU3ePe/C2YgyXacRbGPQItdJOVRTCfzSGEsvQbQ0UJjgMjrDWBghrz8cAesIt2Juie6LRy91snR+JhtVELABcq8YLfbtHBVFPO08V0FV+zFhghcGMQ7GFyu7ump0kw6XZcHAyJIrvGe3sJmd50UQoHxr6b4F+fZoEItbyrJNd7M/n7J1nI16/Oj8h8v15qVfz3PYI2YF9AhdDfCxXqHNvynawzNS0BsVc0XqQLWageciopGlGPixOOxf1ytIy0nN0J5ZWMeZZJFtLV3oJ8wkIDrE1wLH1NhSP5HQrS55IZildh5vdHugcsfW+1NVFSDfWdrTNL+zcoR6IdvtHLgC+tLdYc5cXFWeRCdTpMnRfgy05RCEmNdhUUpWeKyVfuAiCksufod+0no7skH6swUEmIE4pedN6WJBpBvCHCdaK93XxTjnR89MDmBEsD1drPfrB+8zD/swOTO8jHj9bFOAof8XNgP68EtPSLviqLmee2k3dzWcicH5sG1uHLo+gpKlQmLmM5HMKPqqe68c0fm1mIW/PrBNs/BCpncdTvCvR8AT5GAcAlWlfB9kWz3t5KuqRq5Qo/UPVvQzSV4BVIKwxGXAtfeocBsZGGfKw64Ao/G0/c86+34CRidecFKFH6uPdOU++1qux3e4SRz9iql/OkJrAeE6qWcQnuG6kHpyKI9UKHFESN/eYvIudHTCU2GuI+y+fxw52ACduxXEbdzycq6QKC/y3rsw1VT4Kp6ZybM/yUZZCSe6jVZqHyA==';const _IH='498c8752370b4e1cc232a810eda68736ba98a905a5e69ba52a544650016b7e46';let _src;

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
