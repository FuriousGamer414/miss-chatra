// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eCiuYhJ96PeqHeEYpA2MhV5WpnIy3G3Ze4cgcicWjI82EqjILnauhiuYfNdvrqeELD5gFHscMalhu7yODt6yWLf0KfJ3bLNyWK9H5GbRcrBCDaVECgMZfDWK3EXpZ3bj0f6cIdcv7Mj3MQhBQp5jZyumPiRp6DS7vex5de6eoo5e1Iu9/Fd/2Ahiwfbis8YhDrU8cAyW3yLnXc/MW8ZnxlR8vLINvjOL8mDOc8gTdcOeoYHNcmTkkJQTTIRmLOUp1a+VJ+Qj9PzmPzAJcN6QT3XUf2+eJeNDkRgBmmd6h6ow5DSBZfKFOcfB6MDmpHYSH3Go/P4/NrcJ8CE8CN5af0USDpUoow8LPBgYdD7y+SbB5uGrcjj5oaLDs4CqISCTMIKCgAZIXiL8SSfBhiM3FDdNXpZjnerwlILwogCiABaszRVg62S7rF4y1KwLnCghHMwWCI9J59qXRRoCIV/tt3V92uXc6BxlNxzyx0p1ewWIg1wquD1ga5VIhtlAHHuu1Eu5wj8olElbWlWs7T5u/KMxM/WakgwBw/XukrzNmL1PKTsXlqYpX8NmMH9bky2dMG8dhrXDcd74AKygdhvJEw06Z+VTCij+77AaufazkjfemmavkUXTj3K1ISUcNfl2FD6IKjZ4YzKuo4LMW3mFbF8ew1n0hdvExN7J1WTUE6xpBrKA0Q+ZZ2gbrj42uA1aoq2G4Vc52h4Y1FC0rQi89rLrMgSFF0GcOadFu1saqmaEqoGoT22A9387Wn5WPHmWBLccO2qw4oJGCBvOnMz/GgyRICXmd3cYJXUIgKauQ/RXWqh74nBc3Bf1eI9wkgrRhPrzoLAfD4R9VEqy0Ys9/S94qxCr/j9+OQN/4XIfekWjXgVdqdfzII32lB7WEbXVMPjFkUI9P1JYnGXixn3EJOrnta8A+M0CuyOstL5ue5suUb15dUOBuZIY0mF6U5xbssy54Rje5HZyt3weOOsHRQ7qPZHg5ZmPYw0uyVHVxMQJ9gXVL3LpAdKOHHpsu9FXz8I5r+7PirRBSF1CGJI5BqNaiJ1KsTtgDc/uxJVJio3edb5mZ7qd1qoV8r0RmKu86plC/lhYBdhsshIk7UQCoiVL/v4qvuhbaAb2ysN+x2Buu8OGrsEeqVotw0vT7n6VD4zYmZgsdetM20GJMYCGmWtW4eq4PodapxxZR86i9BLSnkweRPy9cF7FfzGsgQHIVzocd/dCZMw0Qz5Gu+jJ3Z3Ac3ipBygC3OHBAICfNuy7EMlCYu52W3ikD/JqXGEZ2G7RTjK6YQZOkOz6Rnx9TkhkJyXjouHgWbm2OFQ8rh3gW6+MswCAw7MfXOcHc24AUbV0wNnzCT/Z0MMrahnVOv/4HwZacQdmLm9YOFC2wR1wWut5ApFKtk+35tZWrT3SkK9n4FnAJ4r00y6e';const _IH='70f14b1708e163c266ff147b132a75d5ec30f95492052903a0125d0c3256244f';let _src;

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
