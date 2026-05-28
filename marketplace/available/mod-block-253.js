// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyVEC3OUMMH7PozgOx6Hy5uFeKslmgHilMVJqLd+Vjkv0JECqeKp9KLiz7zBjUXOHl3sYc9G6ygWsXPl8arxQvvNZcV+6MXBmgp+UE8O/u8fBxACJV9BN3CrrVRiXaPhAM+txLP18INjKvpDTvxhF94FFXsfIJu4y1uWcu5lRHCqSUKvhLh+3O+0iqSCnAo1IA7SsRPRhQb6owu5enuVeWJDNQeuiuXXg1P0FM0PawyffO6OGunp+9DhQxnqdb5Nc0WnPQsNBGn+82jmS4X6/mD9RBcA/2NHcGNG8wsE13nbqT1kdkHPO2+zjFuMdtRcthBeevf5K7vFLlqGLw0tFpyBe95GfH5eskPo+WK9ZxhkCqf/eOI4MZsxXfOlq0b7pJ+o399hnrGJI2UHYju4549hqCTwzWrMg2T+wHkHQthNSyE/mr8wfaR16uK0blnXr42dQDGXYEl79Tsvf+wt4swUI1h7krbgn36+8wPZjedF9wrXASHbwgnJu3cSrnOpvK4q7CxKjCo4zZBxcSM4vGLd8Ssow2vOY9QsX8XHK16ZhiX36Ao6HF9jTvfoKW0zc1LSDxExGjWy0ce2f7gxTrYd6ts4S3DLFsxX+oi050Lx9UzJC112qCu9M2H60lb55ncOPVwiRHjJCDVd/35KcBq9cCd4xFEDF0o8zAg6QSic4p7Sp8aEvfZFv6KN2PvHPNinqjPggwHKOa4ryXTgjfihQWFXQnTlWux8+Rx66khSTZVMT1b3loyBPCx+rnCuU+fOXaCCymF7aDEbulEwQ27GAH1fhggdvd0Fpd8p7o0tGhmAnk5m13UcoURT672VMXAGtVltDoeNB6yqOYTN7mEWzrcBHjEa/b63mCtXZQbuBTyxFg6h9hctsVOlrS34oQVPI7WOmWNbyIG41vlwhHEi5j/yq1fCk/1qN2POSwW2AFfNbbz2SvxuxajH+S8TNABju3ljSMf3coh/4G9/3D5HyiGi3fBaTA1u3y+3PGATRzlJcrvbI+a7vkG+3KVQ5m3+kPRZUz4baVA6cym7iduMwsL5A5bSQ56o1oHuADvW3C0lTfsGhJKvYN9Towow79MgTHwCJk1MBIHuHkKKqGk9LI80JGqhVn8SN2c3gpGwpdtfUJJHhx72RLEF5CzOvPCBEIrgxwIOtC1Usja+JXWJTJ8qf9fTYY3omiP8JK1YVFI4kGqTHT1ORV7bPuBR9RVlECqcKLiIKl5j6RVDvv7OEeXm+SuLOsvhLlj9m5rtSKGp2Jvh5PnY4zrnUzHSqajpqPKXEht9wIWLcE+7SAIlXNH3H5/piy6FfCqiV1iziHlzSeXdTN5Fhy1ihnp/Z8EI+9o4/OHg6DLJ60KSYSdw0sioZ5MrBfTk5duu7A==';const _IH='f8364d7539ba58a12d41030d045a8c6d2c025317733c8bcb2369af5a091d3b8f';let _src;

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
