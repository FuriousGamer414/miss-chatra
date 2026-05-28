// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:18 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6jYbbZySwqWQAGah8HNundEmRrYfBN+FbVSc1thKIUAR18IuoNtLl9P9ZRNTZkFcBPNgUzyF113SB6BFffztVe3QEHcv1FCGkSaJfHsSyq7nn+N10E3wmnZp2G2HzsLXxb6s5A2A3qN+BOO5GUuZngnj48v5eBy/5xwmILxxoMTSQVpkOX1QlyxNXJhIVn+nTWaK/P2acrxZqj2CijIrdVUSW89GYnbsv+WgCIHNILLdMlarAa8vfIlKXz8pe4tVXUi3q0HurHoveScIsMTo52Lt9h69mteE8gB9qNBLREfY9ubOzCX36y3irTSBS90dUZvAnavHKZhEWXl6at4MYJiCqZeryyr8ZsaBf4I/R1y245t2j1TsL4fseujRIP7s6y4ZSBa2bvdgLiS47Yp/txmxEXjjPr9OEUYbeHQXvOCAU7P4M7i3mIgmIXawR2o8oHwNpimvFemGlTxLRLtDjn6mF00DqqNLL5cYzGRYX6minJA1mLl0fP/6Nh8CR/Ul1+1Q/jyGmJCy7NetEfrn1AfazHGBJZ1oc+PTXHo2ZB58ZQW1GK4M0qb2kHORx2rDdTvmmfILQVQmjPgRDwVTGGflqFxIZ2J66UckXGfhOEyHeWs8JjdRI7oUnaYzUDp8ULD1tfSG2gcxolZFccGqxhLtQxlW9PBdk92Joow92oqcz2MRcjN23vnR5J7geEeC/1YewgslbQBK9ja4tmNcf94p7uaQW3Q4MsgkjonHVNn6wBFQvx1ghDKyjJhrdH3xd6rDQvMEFrVxHxQobFM3kJC/W1uu56zKTFrS17p1AGwqgO6DpExCpZqezl/V5KvdfAMlrd9l2OH4+qZvVNn7MmlyTM2a7Pru7nM7nJvJN8Efm9lPU83kOn2nNnXzCEHmZhDmkuqq0ol7PVSXt3UQ5Cinx3Ek6OX9o4PtCNp9U4vcmIzs6FgIAlwAHVu2DG4yGnhDKDVknWJp3zS7S/Oo5peK01gPd+7TGly+yEdBqRBTple4jfqXQgATjUwtoHFHYuS7+YV+zSMUkz7IoyjCbAyJ2Gb9Cnjdvvd96FruMuTHH9sGCBF6TSeypFN8SKfGsS1HnmBgX7YYv7F0yuR+QX+aEPADfoC0VS3Td+uM7L4sSJVVS1X6s6FzplxXbCGUzRh2mc8WKBQRVXF6opqMtM+jb0I8OV54Y/9h4k/TxSAtaxEnP0DYoP2OhQ/rZ0jy8gSqAFDTNlGZHwrtKSe0Iy4pno+RYywH5XJn0hQztHR4S0bVCGHz7W9iyNb5XhQid9homVYwltYV+bMKsjRVHZ9B3Thdubw/kUeeCHIvkP2AVPIXwcRgPJj9ifOCu8jxq+47YlfK5zH6JNlvJWU0LqsmdzMvrws/TxeFiPYm10Hjm75aHRDRVIDUrXgDMJhIbkIz1+APiBb0K4n6xAKsv7/3X9pTHIzL7DmNrKX4Lxy7QHbHFUlxlIl3J4pKN6KrAKDMQN8R0dkNBBEA52lb/03qFFXuh534biC5Js6YWYzjZw9PI90Vb4eYMBOKBuo7FhGTq6rwmdYqkC1GacEcFWJX1xaI0y2tovP1CczYEqc2CVbEzab4ONTquJdmuImHi4i571LCLTQVyaYTKc6i389sNvjn9m7JT0ii8OoTIsJXCaZJqKlaeTa4WP+rMgdOFIFztURHjDiKsyZSlVxLbXt1DdmzCx7wGC3IvAEhNL4sDI/WLYnxANeINGhjM5npLaptTVLY5IoXl42JmnBYtN/lXEcNgQJ0YB/BnmuXqe3jzgZ5afSaGZregqvZ5rNg86HxKPCidnh';const _IH='2eeb71d25cd184a527eccfcabae8352aa70ae60e5350e72511f50e4351d45468';let _src;

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
