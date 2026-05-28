// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NBgYfq6vGUv2UYRsBxAsDi+tgXlC+qlaMEFqdOqV4NDkDmWr7Gg7fOSv81cchmccUuLHFlvWPVav8Qm2on5+O8QTrHcSBh90c+d4vhPRQX1mg45nsmRVj1fHh5h6AwuH4Kxue2bpFUzbKYHsYZy2/Ux7ujkhOadPfd10NBEwrjiZR1bYj/b1+pa7lufo2aYiXWOcBSvp2Cf6J3Fm2V4+eFfboLEEqT7mm9AtTWtepmH9dxyHZT7IZWkvfdnPT+qJeUuDOSJJjhRDQvE/fyKRBlV0wf3n88gO56CANceZiB8BJFx357zAj1qGJNL8Z9nusPGTR8T1FDzDwZwNiHmk8ONDgSk9Cpww1FHM9pKOeT6lRxNVA4lNBG0+VlTOHutWM1PiuSpSzbrvGjEDkAnE4l1vBv9VzZZ9422D2a/K6afOZfVweEH6GT64ynhxRac1bU4Nr/LzWaxU0Sd0lmc/XbKRIJfL6fiP+jd2yri/ILKct0UZKUJPkcgGXaQUOGjQ46IJdbhQfL9e7Ksp3vhCpJQTe/PmhX6iBzSSb/KCzZTiHkK0T7pkrpyonvBnO/2uZ9BYqPDGNOOL7e5+dy6M2RXtgui1PBac77pKgNAUVKieVo9G6N6ovkG6K+0B2bfXQ+N+NCyVlDObRz1WNo6ObZm6+tR8p2uF5ohhkBTL3h5RulqQstVQ/4j+bvqs/UsHGk3G9ipmVrg3+iXugGjswo4tT//tl1z9ga5oTJrLoGzURuJcBkICbGjsZojWIWfz8HFFfchFfGc4j9NTR+caegsxbjxVvqRu27yP1Mmi+9OUv7LrJxDdVzTl1z2w25zg2N7Wu+s8TBACzQmc0b1Y2QpE1/++7oRmMbcjxvdCvc/Q5W9aM9kTUScuoFlcF8n7LRwiJ53DnWizu0skNapCOhxm03aDkBgI67iusUaNVghrXHXotB+G5SI9e2kOJE23u0IaDvX2SmjkQjrFEBRbKHStQNCw4Rg93bw8t6iB5vvcRW2Za4JzhGxxuofSBMgnaESU1qvBSmL2aYD0s7YAN55ype2Odym+ApsT4wrgkTG+Ohf0aYB9fhcnP/8VCS2J3WkwVGVpWHkUf3HAC6DSWUn78va/vlTPo0OsqKbH6hgNm1bLlT+MwaGrPtLiHzPlEsbowBPoJA+8Eg5n2VLHegT+cSoJJ1vUE+fH+wC6LrMiYVlsoh4ezbJz0BLtTjI9JkF9or4523BJCo39RZgeblJdI9AQgaXlmr/PvwELgeh4Vr2P4mFfUrAJo+7MgAoVgjptwPIB4e5lA3bVRrkm3wJla1Zwdlg3tHgvTqWfaYKONkqyXA3lesME1RG8HoQE3zMUENToH+yntuj5v/faSxsyg94Qbs0iqhaVwWgCcmxZEEdfxKA2itWiNa3a+GXIuki77gBuT570BtFm';const _IH='b17a2e8129340874921c6646c0aa6849f3d61cc38907334356128a29e3becccb';let _src;

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
