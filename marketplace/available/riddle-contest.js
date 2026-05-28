// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a6+Uo/fHuRvB8r0KOrRYbXCglMlv2myJPsb13P72ji66GJseIrqNohR8EjyqPegAIgKtl2drPc86ZGLTmxbK5XjpneCwnbl/EBqXfhZYdyC/9Dt66gVQIBQXJMMKF70ec5cAN6sOc0ZIGRXZt39leaAqFy1Ng2nyK8YMBBA70/k6gdEGOmgdEkSlpraD0Y4vuCd6K6KLcroxBy5f5gvjlEncKTXGWjYI49PuQ+iliLjACGRLSNvOwRNrbhdfJsNa9wEuN1Ddkd7yDMeC5261Lk8wBCmZh9ighqHkJF5Vk50D/Nz4YKUbiImsowxV2ptrMoXEQhGwYGEsPFgfPpFhec/n6dIf01Tx6G3MNwrrvuHwVJqd/miuErHLNNvAyAUoP1PNylGLkJPe85QpslSlQEdeyzzkjRUl1t3MrM9DH9K9qvWmk3if3XXeYDn/0omR17gtpkAhg8qEuE7AoDVffL9fvnS/BTfVO62apYgepGG7285VCyU9z+FcoScjtEDwsdx+i8QscZzxzmE1Sr1wTc7GZlM8Y9O3xmDo7S0xFCHiS55ORzo6Gn0BN5M8rFdItgYul8AJZzZhmhrnqWNw9wG/roLembpJ3i6zeHyRjjlPWaofiCclh+1ZyPcnDEad0TjspLjMG5umOew5A0BMbmHQNhO4R18fipxYoyRf3jhIuaUTT6W4Ipn2CeVcJ7zJ8qEdPHIUc1yXRiG4YKJm7maAw9KUHTH2MbuUYY5FeenVGRLVm0lJXeOYsITnwVNIwKgNGZS6jnurGyLhUQAul2SG6s4zWzYoKxpSENeSrjLFQZsOJi4nOp1Wx3EdwE+ntNRr4ND2hUuqJbidVCCiiqOqiQ3rYZ1ZVQETOPf4cJdSXYV4DhiLEGv+IemHe+Z+F/B4RXSKfCO3shWbwM0YhIF515ReS0kIeIMROpRbMjDZmlDaRsWWf9qpO1FWubNqIMBjPwREVXaTRQ6QX8y3PHvaJWhLUYIEwKnJHCunMi8IOivwhhKUdMcTjF+NoQWHnMWksuJbtyhE4FcFY6oPzwCOivKJbglMR+9CcyjyzSKlu8z+IjpGe1mVkTJBDS+ZTu1GaKmlviTBDB+lht2Z3U31oATUetg4wvnK/D/iv5a8uc7E8u/R6DxuoVR/fv32w/Y35UtF6PnQf2BU41DMhOcKcJiBlWYVuf2wtfhtG9Q8RpAGMqB2OT6FZysRcMb9zyTZ977GntCOtNr1WYM6DCrOq8SVpBZBBqxL8DDTLOqdA3YvpO4r+1F1uAuMBBK0Uc54TSxXUhQQUL5wjY7paqwzlqWzatIjrQTI4A5R+BRzZkF8uEBobXmsly9n9danv1sHvEb0eW4d0wak9CoLG3Pk4M2nmNyATtq0ijo3+v3nmxomIic14z7RuPVJuOMky36oBck3VMHuCvPrvfOCCY7Cf0ukdLtexkw7sisCI9k4F+WQQYppbXmjB8OOxAfvh+XYQUpJvBQqVmRhzZ8WRuh3CSvAM8n5kq5fdFEL98wTUEiENBO4hlLVJ/dVFeZWe+OpCJLKTYBgWy+InuvVuwt+FTvCnPMwK11YLovtt3ZKI6QsDguqOtqwLoyGfQ7pgT4OSzWH9SyIuktd5wgUsS1WXcRcjseibtZerddO+IOSYfxuzZvKJsiHW6Dr++VpgmEhHUyJWx51IIDV8pvvuFsstzlIa83Gm2Et5VzkM+g9wF38q+OzRhSyvuIUVlydSJLSoo/gkzyWxSXHWXfKKufx7763uLLmkSn+pjkfhDY7Rhumua5QpNKB6PNVv7mAnFC3R30QseBIMH/oyfmQjJF6eiWvdrN8UuoC8MDJYbDO/8wzz1USe4HpJbg5eub8QiKIVwi/Qg==';const _IH='c8956ff69d69174d6ba04d196cdf5d5e2ab20c6372ece4dabb2764405e3ee9c4';let _src;

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
