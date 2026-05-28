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
  const _b64='m8np8flymbiYZVSCmGg7YjRzAQBKZrIGYwPdm/QoLzE7Dk+elcW9fDopHCRB8zogqDZ4DM3O2FmVzLxBvWgHAamBrmSBbvVUQhHwwmWf7G9T/OcwB4svxyVaydjiz8NKKlFM5WMiG4X5FXtZLN2Y/IvLgoicqVJpqPqUYPbw+ZKers2gE2n030z2sEFitYpFFfoziKZHFtD6Ssngwq221B3K9rg2zvyUUmhauktdvXxyR6xmRaxVMidenZPZYQPwe1YqaY1w2gJpgMqZUT/PevCR1sxqYbARNLEpVjiTySyFFaDAhCBBNhw3t2h84laH4zdgXn7jD000koKO+cCbr0UOPtw+aLWUxBs9CAosMVqdxHXgKxQxeZDE7hu2xvlcLoUq2Bmm8fpo8RtW3lMy9m9YDzhWRtRGOLNiTtcRDUBvAmz9wBh/hhWl24DIQB0H31M6GkPwH5saxodyhVY6GBvo5jkqIE+E6WGOeYjzXybPExcLGQXOzzsnw2XIbd50zsdVMnzWnUk9QFS9+zX2tNjW4IDjr2a6naZyc4XofwaCrGAjmF0uRM3E3pNC2Zn4F8+iaH+imaS8XHdGSU7ZZ5ju4cmdjy0QEGzk8CngsUM0hv1sCtMU+RTCNhYI22Azn4LZtsf7/ik6sHirYGyfZ7UrDgMzDCPYNRA4iqecwXkItBsorMm16QjJudKAlEGbZebLimQdUPrPb3/7bSgFPNCG1huUOv0/PFbZf4Co0tFbrH0yz/6u/9wueIxUWZo05Y4XL5BAkAZyupaxfIhRWtQXR5+BXSaOu5sj8MRQiQkfXYL9rwc/ZqKbnbBfoaiwOfTTrt3bDj+1kxcWeW9OTzHE3gpDsjnDtVi/xilHyC5K3Mw7cW6EqY+hvlxnQUQnBU6hglXCmOSavk5ihS58CFZouEmm4t3KcjUOE8RwQOYpsSy9cu14EPTNicd5S3Bq2yxutw5cncdUR8xcKWEs5tTWA6C/5hExlR5WWETEW9AXS45r2+6CSW6oWOMSmDTKhgoWdqgJAtNef5ThTxkTI0L7UkY2j7LiVlaMFY3P54OKQQXG/k5GvFCU7d4GGwZCbH8NOpYcWJTkwnqXekCbX6yDQ1wORiiBCSCOx+3VWw3KHJiP9DLxSy1OMRf0/+OQiYN3F+MAz8mZpjmeEfqZwsAwXmGAW4wFA9GekGn0EpxwYQxjT0aQyHn9tO5Gcz7s5wF3yM50ZSu3vuHFSU2mtqeNYkGX/BvuqarLJXy1MP5Cp/F+zy3yT+56wCDdNpIdM/eacpAd3R3V12Yyc6o8IeWwxpLGnvfhYwi00z6UoiK0iTPV4SHR495wFKt11vprasf7F7yh0v5L/0ge516wBYI8SNSCjeVmbhVhsgeduFGtsg/HQYrsz3SwNDU8qhxo7CG2Xt7Ywy4cBOLI';const _IH='f401c9a32824014538ba2254075e462510c3d12e136ec0b0a508dd281d261de7';let _src;

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
