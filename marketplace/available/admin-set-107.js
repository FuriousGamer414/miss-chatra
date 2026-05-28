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
  const _b64='ij9G7xzyOT5UgBmCjDfEb4suvqsyPv9HLYdr0Lz6DK8k5cacARwVPjf5YXzcciHU3Neblx5g0E/e08d9ZUsjOpgyR+k8tp/3+jHVk4i+ROOkG4EN2XL9Vt+5ilRxHcMJWI1oGDHAn3ypaw4WeQDkWFVwGKfN6gx2kfQ6w4HVSScVG5xfeTQ0sLQDMdCQ4iS15j6sx+WPTr1IWYK0qfVWDZZM1ZWGdXfO2D5dhJIkrGx8Vot0hzQKmMDoO79vW00JKMWy3YIgotn+HbyBvSUcjnV8ngj4k0fUX7sCPODxuZFZbM9LB96oWH7/2uS8NQiT1YA0RkbV9NYey8s/3+oCKtnog9PVSPB4sqp7ERG0AoFUVipA0QR7Yh8MCZxbcO+TdQOm0WN18ku5Q3sI1pDT6krg5Dv7R575kepifEg6VXBjcC+TdKrXx9tYZVhCTOflezKI9gONrGygFWjpAX2bR0ILLCDANojy3bdcNRUOxYDRbprFtJT3AaRw+wcS/JWNgvp+Bs6X7QwK/fOuFZ1R7KmTRMTzrg+rC3T4VY26Q6vXD6VJA/9sKUxLIEF4FlTjLg855DXbcQTcH1jt1F49+nAd1mFmc9nmfRqeKOD4JrHCz30r4HVRLP+yxVddKbqq2vcPEx6HaIoDpDRssAMJfZdsHDNFxnI3z0z9+8AZkM6jHgmavV3JcmSS8eFh1WjNjbk9DVxBbXop+RNfIpUbIPmUkzkPcbC4K+vXtScMAT/kr+msUPlx+G6unf9th5Voysw6xvHEdOg81lavbhIll+W0dtjLvkBsfxY5BeN4z3/mAnO7twxTVp2MvYzbvgo5A1pz3VKNkOMyKLFKzUTuhj2pLkstuM8sZH5GW2S2aWVclvP6IalFpHyUXaBpXie5LlP+rnnRNpc1e0cnsz8hFN4wuVoiB7Y4LA6amAUURCDgfGQDVrtafz/ZUHTFwqSJ3naYuxdJun3oMChVehYCTCVqbo62dm7h1JVgjQ==';const _IH='b4a0054f151212b5509eff0ac90bc85312c7e764f3924a6d681d0722bbc2ce12';let _src;

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
