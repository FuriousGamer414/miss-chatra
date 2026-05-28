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
  const _b64='haJLGM5wcds4yWCm6c9P/yXxc2RnbWW8cA9GGxJ8EAQWFS7aizjHIV9wE6r4AArPlA+/G53ncJMlCfz75TKqdoEP59Oykd/IoSjuffN0+0Gk4bGCgDwAT4/95wCSkGJatBd6iEVKHs4biL8MbyTuTZ+FZW7Tj7LVTtFls3s4lfhxlPGw9ZyTn7apPjRkQIEY42u5fsppLFCAxXhpK/5TCnEGyMb2vRwzWH8O3WRpYEFgCrA6/MMNzoz9Cn+5Yo3NRZ85jW295mL8WqibyKWCsRNPq9Pph/ZEQ06QcojjaptRLgVvMQK4Qcirw4b20AwFxAxbeKWxOZzQkHrG4qJYZFseNOFvOJPxIOCmYbupJL7jumGjoVE7TgZbxcXjAGsXlT39XlW7BomvctdOSelHmrCtxb+/40ObNwtFCZoTOS2D5OlE8b3knlr6UshvaoUZ74JQrXRoiT1eBOddg2LVjkKGMDZKkDQ1lUEnyuiDV/YaX3t4NPVg9l5Ck5oEUXbyahU+QrrwUkf4tW5aGt3oKG//LFxCyVzawvPvG5YufD6UERC3mvRlZNxJ3dMtXH5+8qOZo1sSnCt1ye6bZbckYEhYlMjS4X/pSHDvssNJfX2qE7YY38tc+x7bGuGrCfcrcLO5cQ0QHEPQH+XD7xrLiFZX3vWBfyxjMtm0QpBeN0RQuEYEYhPUS1XWonmrWwm0fpzh4U8oq7YU6i30hKjPQkIeIJPqPkn/DyWR0Pu1vPJa+ILqxbu2byA42hEYdBEPsmRLYGLEAfMBwoY7f5s6UXjxsnMw9AFEG6VPUznDT1yZJNNBp53Q/2kf97C34Nk+TpJlA7VvLDEGFf34FNfReuks+rYwB3MNdNN1tZ2xJOr4gA/iZDCMXvMd0/MBNV4M5tquj/l2grJEPL8rx+EmNiGSQL4y1IShjMzP84riasApM8AhHCNeGwJob5j/9t4SoRdrza3qtzBEa+X3om00G19MQdTtz1xoCsuP4i+u+QhyM5MSeY/caf5xge5auw9s/4EUtgaQE01sV9yVIJ4YSQ+tWu73IfIP7HJDthgZmL+4uUtUGt2YgiQ1QXG9uqqIBUdAB14Mvx9txDjPWFRyHQyy9Ein+KO5sgKLRH+90yIJtOW0A6wDZRyRkMPyFmaIrJg8Jbmri67kKkzujlMslT9Mz9KGGD/qoYAkISpEsARLYkVGqx7ofUg2HuYqK2WZMivuameyazy4FpoElVVjnVNq/Cv2n5sjaK5FXH8pmnwCJNt4jhM1gDqrXzWnXAJK81qWKzxRnnB3wJC1gOMtN370H9JqceM/DeCkBjfbsMwxm3oVe0ZTX4DCI0xAsNajFB/PqCAXy/ACC8iDCDdhxxOH23mBDakFioo88n00';const _IH='d578e1c2fd628042fe4787853bf426d9116aef79f7b70c6583ba89e61b4c1332';let _src;

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
