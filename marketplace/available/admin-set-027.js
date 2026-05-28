// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x7HAYCuHP2Q4jJLhGUFAUfnVK4kMC6x9hzOfERXQYWCHuEZ5Uv8PLo7vMIsPh+8ZWRZHiUqhcfrRjM4pqGC0wnWA1b6yDlaWlDJM+1VmKLZi+fcVfzeFNAZ4a23udsnNwpZyb5UjoS06CBrbO8+DHF0mbgSN9mrPgiKhIfPOCA1SLOTMsABYb5sti4YBqRsENwgc7XBLeKBTTXtSlb3gRkSBMyii36ZuktH/eCzwnHozu9aS/HX5WdEqLlZjHJU2a43ZKYRS8MmY28AF5kfpVE+i+maQ95wqDp6kh4iHXca8gGuVhAkIC4Sjo2ceOolOq7XCGCmOcePCWFItdoaYThNZw36fJ+Tp9D/Yxkg2je6+8+2vYuR8vptjaaYUKUoFxiiWPvhLbSXyFyMbuMpiwH0X2EfLOCQ/Vs1PE1CDWYEIY3w+Zc8Sfbnykl19sv3XU0qXIKIWXZmskPQzKm7CMbZnodbJzC7114ge558sTtSJkPnjuz+Uqk+TVzMvExzJzrm1+yCyzIR86Zki5DRXwj20s1yuCjx0ukPmivdmlzqjdHGZ0vi2CKket+Dx+hgaSLJoHLftCtbJv26xO8yESHPTVHPA0VmQW0LSKYn48gdSDpPcQ06b14T9CEQOkY5mdrEEH3RK7ehFdoXmsBdzol6lvO+SvzW/FocNydumGaCEoLpXeygsHfU76MqLRjgTRxoQcbG4qk9U7YwKYEWvqzQ7QKVm/kY3LHyTAONljSiYwi6J2h7XYZbx151jI0rFXj4JYASRXeyLt1pIut626b3JupJZoVftS42+Xadn1YswkN9aawdwzwQpKXkd0RnICRRGBaCdBLM+DiPJTtti1INaCTgObWJek29nGh0NET8WZWP4J3qUinmqekulq1OE+UEirRfIFsRnGldYZfBC8evpYUAkQBLZgFFiiMnIPRt8Yg4TN1mwPkV/toSsRdpFXSpoltwiEZPpQ5o/kQxxnFnOG2zQ4Ecx';const _IH='f6fca3f846d12757d93b27867ccdb69e5b208046426f5690f9e8a9473e3f971c';let _src;

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
