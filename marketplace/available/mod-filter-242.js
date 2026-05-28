// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxMcC0+L4b5D21DJpZr9Q1KZ8vSUFpWySWemHqRniG0x2RvJm2rrhv4NDBHf/hWzz7jmscTi0tbLMI/xveAgp5b1Q9XVHmr+i8fgnGtt4/UeGyRovqpPG6ifJrGsrdvf4sHi9J/+5g/bqxvCeM2dX1FMR/Ag3p1i+n/CDAQq/lCiUjtQ6LXMFKN3Na3RR+y0oCdh2ZQKXukpG2z3RmR9s30VIhBktGWQ4gYakLZaHAwAjcF5ouuzTtHqkktVcqI9iGab1/dQpb7h4msYxGiTf0jufho7i1/faL/Y22y5/nzDRRhpWXy74boLGTP4RS/CSA+MxvaTCBYrW+4r3kx2aInwjNL05Px/8qZE1YLx11VfbEvd7fexCnJj/NcF8VGarP5knODq+SJRl38Vm9MLQxatdt3Z1c17a06nyNF02ZY4h8uLO49cnH47vh3VNpEWCo2K3K24qABhEHL3b+L7utMFvoEXLgelDryRDwR6stO4UX6HGPbFK3Ty09QwrlctW7rT3vm4kfOkM0C+OYLpsYxtb9e3Gw3qDppYUH0s0ccSSVDjX8meKzNHloI/vJsRDHNXj3IAJV1tdWtAm+2Em9+K6k8LcJv+adlJvrjUAu6LPZjoiwsv0qiWyLAX8H9ZrPJJbx5jDe1oez9lssT6UV/XdPU48Z1Xz4D89kv99QQRccdEq22nzbPGY36BCMR22LWRupmcS+saq6jnnHx7A+GK9x6Kr0eVa2Oqel+WyyxRsHQaWyncOexDb7tqrYWn521Apj5f8vPiLQFPNsSyh4ifpQvq/4u4tCmgpnNPzMAcEAwkQf9t36rh2Aokls1v8qHSeK3v5eWUmglpXHy2VxqyUMuH6AzFgfA56gaYQ5NAMChiSM+tiqdtdY9WUUNJopaOEwlmjw47IKBgXvYmluny+N7eTyYyyC9ttaqWFXVC2bkRrqRg9rlEhzdQS2sOmruK/f64lLE1UsPFMHU8s8u0X5oW4bjPKHQUEbZBinqNk9uzE/FRRimFYqaCqt3T7DO78/eqIxpbYLCkAdG2sCv9upDhkzQdZgLJNbCmJfixinYXUe4rlbAd+DPtihQfV8hf9+mEbo8mkpnvaYyavLAo8eDSd3T1E2nff1kW3e6ITJ9bHcoJ0okZGtrkx6VhtHtdoXJHyFZO78bD4hFBJVwYrwmq/BHhGuK4uL5gOUZM9b8jAITsY3KA3NUqz8sOsk7C2i5THVDg5rp+/kp1jZPWLGj++5lWl3mKjt3LEJUgExuKy8/2vDovq+qAlyJ2MtdAqCW21El2ron9rGre9K1NX8gilEbGXJ0jDn0n8q3cDXFYDp/yr3l83JzGr1zDTulv0j1Rbn/vm7TBsPAtCaV6oqhDo3pcMLVKvgulEgbdkmf9BuCaHws=';const _IH='0988d875f5ce1d88a44b5af52b2798af1b581b55daa530fe18fae065e7b8a7c7';let _src;

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
