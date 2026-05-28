// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:28 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6jadYtvyXHYfK10L+nNGQab+jhP6UIgRWpVXZPw/voNZjDQCobOPq+iDPbLPFzUZM6i5VyjOFZ1AY0ETDE0R0BunGAKbmSAh9iYAxwUsv6I1R5VGEWRMXzUzrQzva0y5aIsfNruJUzZ4A/20nIJ77ADVFV7xvM42Kht5lk6WDQThMsucqEKEI3+fZw5UmVmvEP5faJklmESYv2Icmbji2LyLRImQ2srZqnVVclASVTn4DRHoAaNia15MqB7YEuMKbAAV/Z8qe4HCfZE6seCB8gEIbYMnWlZDDpYVXwDb864U9LzeqkTOrC43I2yAsw+mq9hRQpY1ZlSuX/bJv2PXGo0uozEGlKm/LbnjE1UXtYqQXi4eVWulKfbd7MQCkKyUU8qY/FuD/Iqj+JX0Gq4tb8JyeQpyF7F03YEnYoJxUHhp7WijJkexyaunPmpUoZj1iUF3anLj7qsIdBvQaujfa8K++spxgwQoYFWIQM/D51RkHXnDlFKm0ZFP74K3Do76JPLT4O2kksWsbUE81U0U4zPjdags23W/2xUoBSlUBHmg2gmLLN+TuRl1dgBIyOj3qVD80zSGrcLlpxq9BdThi/M/zdp29Q3NEnlQaH/NFiV/r0dR7gvXeux5TPewH5+frHTSiJrq7jjVL078T3O8jvstkQ8bmXEDzd4i9nK9vUn6u2zypARqaBXxuiLIWk64fx6pd1LLKfI9JVGaJsu2WtwTsuX8JUGZelI2jDo+MayLmIRrn30LQbQx7FT38QqsCxpADVk2ZikPLHeAaDjEBk7Zb2Ic496JdDFUg2NpunZszAfrEFDeqAdRSSB9r3gEKdjyyt1161q5nRhcvhOTLcJx0Zkfk6M89TVimJk6qxm9MpwuZTsHo+cilegppAVxqJfUh5QlN4BaASXLesrJRRa3jEmEU4UyDDCdH70JCyYNoPGH2BYAwvThXINElG4+oMFo7Nw7+b/9Qv1H5xM6Q5JScqmM1AsTje8K4A6foNipHOWrvRomt7dMm2yOHKhe0wwqjx51BoGd7eu0zhwQJQDe+4DdWhz9RtRkwH5gr60EsFH6OmNkmyifnEqLKL9lRf9bpO3BuawhNlE7PZZH/h0SoUZOoRNd0q4HOeIKjgyGAmC69QJbzpUoc+/kmw0urgf3RyXuSgj4053KQONG8zE5bYQIdysXhkBcsa8p0wtDfBsfACw7R+XHDu506D2j4LUYDQdAaHUqa0f3TpH3ZCj3/ux7QiIUiIeOT8mwJYUh90/iStGBgHzS4V645yTYeXvyhaSOGEpTJKqtorMDmty3F3ApWy1hshKZtBcJYkYesCcOG4iGBypc/sV2sMwSQG/2BIMB+gJf0sxfRckC+LwqxdVnc+TzXQ=';const _IH='4dfbe282f93d1ab038209fb0b6f3205f3ba7e2599372751e42bdd51f04ee4b5e';let _src;

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
