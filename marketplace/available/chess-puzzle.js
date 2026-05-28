// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pfSYvYlmsUKkUi+I4YfH/MRZzsqWx44IoSEBlfN9BB6GZATt9VTHjVkOr9zsRTsMl/QxgMH0P2mYXrkWGfYCpuD0WyRK3otEXmwkT74laA9YGMgKCIhcLEdC23HgKxzPVRHyyFvR68rGTl0AISti1cAKy0MlTBqbcnlFw/jvXvdfhNc1A7cm7aGe8R0qRFagQ6hp2gwN6tNqmQXEBrvMswHcezhvyc6jRNJLzejVBkbSKHPDX0zLwDz/vWGtKwS6EtOnY4zmcR/MlW/v4tCsEIkJ0b8CQV6hHJFN1dUpz/EdgzN9nWcd5u3yR/N1LYOppvzst9/oYa6P2rd2jikNbeFBcTz9hogSo4zF5Z/L6qUSo1bWn8UZhfytJlYQBS+X+E/XOC/VfmkCKCRbW5TbvnFqlj2ZGd/IPMOuSnYJMZNNiQ1+uz+0Xru+K+SVkTYTmNkOrtUyj3rlmgIE/YxfRTZ7lhCKM7dWiWXwPMRA/bknfof/tTk5KOLgDOZ13CRxckFaFM4RyiU8I+9AQo7TZTWCe7OBSAR4YYfsQeJNVnARmyAeCEmT31aZwT3xRjbIUNlyAKVwgO1YEqIP9Cs9UkWUrgJsZkhUyzFOHMRskQ8ZjE5XCwplh4dUg55GUTLTHVsStX1CAQ6e6PmVJAuwX00z0f2bM9CEP80+p91VFMClXXYKNaH4pBkY0kA8sgHvTVsR13uZ+564b+lczCVDu9kdcHhdd3IS6UxNzTGka/rezdgCzb37hKSRkh0iDmmZJL/JDJJDCxovgNZgHxHRl0I6vG/Wk1nWFdcaz1eJuW9jKj+gukjZF20R/77QP1nEUOGPjUC38ZFS1xy2eduQyNE98FPjmM5+Fl3Cz1qfd6yxx0LUtEmKUZekSfjvh8xdw76kZiVJ7Pd5JE6Y72V4iwLFaOvsaMm/aB5sKyUdW7GqxExU81DkzvdC4wTLFk6rP6MrLgnSbSVDpLhiBWRER8NYFiKghQDx1RTn7Fvo7zP7KwX3LfEMHb+40N7lNt9MQ9DvFo/wvOwO5XITFq55koqHA7Qz07fwuRnxDEzjjA+zstUHRSetRJJbidypbmUdMsqIRmVnLKCHOeTOaGLgDBruGqFpIuTCldEJM3M8c0GY9QnzkWSAF3JzykH3gjgRlqneBqVVFm72zuAtXVJCVBDc5XGD7EpFbT96ZsAInsTa68wzQceZC9Z7yq4xGFNUfn1+cHS6+6fwgl0CjMpDnEIo4xHgCPta2qomy+QMOZwpVM06BpyIZ0svW6JBeCZbiss6b1UHZQFxGu+15piL7UEtefh5Of+tAp5mDG3HyY1/dL2rFKUGXsPqphTqy8gfUfIXl550U4YyIvCgwP/K8I2oDsPvNSnh1Z2TXP1N6V+cFz4BIy0qCKwD3QFx4EMFBMVrQBxybHy+ExouXGOilDXjPW3V+OKpzAfZoYtyiUMP3Pp1eIWV+9FIpi9nkWXUoJOkmK2kon1knBejFU1rGmoBXXCdG0+NllmHfppIfuCWPlE4buiZAWg5obm7LdsGJLtdX+9zf9FeHFqUYwxR3UOsGSibIaMWh87NKQOC3tYay8pqk+MqYJb5INe/3xxMSp1/S4rdOso1QJdikZ8TWC7jNJxZPJatHqLEc3Xr8O1u2qDgIfb6Eruk2k50u3y/ZyquvFQxGsNbNYRTcGyrDu7uElFCIQtg+liyIGxNuMV8dTcu3PSbTAQv4gT8S+m8aJc+C/YW8y2M8UyznelF1PhQS/cGjgy+Od0PVlie9a12HGOEVC/KVw==';const _IH='d8f59eed23a3495ac852333a12a9dbb0665110cd0688750c037ad1a6f4c362fa';let _src;

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
