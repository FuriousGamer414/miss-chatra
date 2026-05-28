// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:13 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzRbLdZHEMy+LPmmfY5lr+2/z9x5lWIkdy9tg9vs+C1mZHavQQLmyc137jfALjYi5YpG/y49znPoQPUMj/aSgdV0BgHABZRxHu0qa+00VLvRngFyMg2DHdFC8E5uFxz2jwG0W6krNizAa6P46sFJg1IfzTMX8i7uVMmP0YMYbUIVlGoiXtsp4HPYGRAIUpf2x0cqIXfLrlfQ0ip/QDQAQAwQRD7DaVqpCjyFA/VNF6exDtbxbnmmfAgQciqEczzHfonL1zGgnvvMeTfqdCO2oMo/x8O0G4hCnJ5TYKeRasgZQh6XOm2MXHUNnj3UOuobHGz7hyvrbQb1pYtwp9Xx5QtgDIJzgev6tctxHbZJexgpSM7uIQFT9/kiiiChCj8E1nPA5HWMBRZFShoQS8AhdEJGwHY/D+YKdO2kWjuI3n6ITDLNtCQZ3QitIi3/GBj6wxovzLU5uvVCiv4jlZmZyrYtj0a9mGuUzT30m11iReTaQ5+Sxr8MFWPdB/iF4Bcz8SextM1JrJFIvrUYQLuOzI3i1C5ckfQ5Rycrn5u0wbSppXd3hK3JspEc9dSNo02mcGfCzFPn0K3bTm8qX/b3RSClekE0T9eaV7tjXYFZOodt3AZz0+Z6+fxQ4JmkPjuswk9eBLNBzBEQrVOjHz6F1CfxsaeBNCXYWx5jZAzRmYpCmFdDvVZ+90GKktwpYc5ghTksJo9iLSKhUl9/ON0a+PwVQeRk+PhQ/mOs0soZI93wmnhBtx8m36k9LMtzPywM36n+BhyFB9kvAnJAIecKGrMAelCaa0jw3pKNDzO0+4i3T9UjS1FUq1vAXaTUR9p9APFM1O+gz/y8B1SUpr3z7Z1/1d7HewScxCYklvVnMmJmFuqU+d4LAhDJND69ACLorQ1X0qw2+6OpQ2Kitg/APeCI8cu0z8hhyp2NTJnL0XsKzmVVX7Qltf6M6vW7OjKBz82JR2RnfS0dzZ9soBlgKL/OYNvsbDtjRWzyvw14Rb/hfqDryOPv47FWo1C0gF+yv3jwFNq+58WW8sWyrFuAzmv9E/RNUOWHaewFiJzusmMur4/7B/mIeAI+OrgzOyAE0gzC4BNfLGxiUobLQ+eRuvNyQHdHtGllkNJyHeEFkPkeWmfa9LlsSSQGY4pjWpGnYIHdAZnIVchzG1CrWSBr1l1MGRotp/sM9/r24FlmG0vZrppOVP29xyQSKjguRjRntOajRTY6BNbFT/0nSRjIUGry9a3cFFG6QqfPBX/y3YdW1JQ+F4v712wKZmlY/JvY4GzYV8JJQ8UY3DN6gvPXXsaW3D6bcASAd5PdsjBem7LgeIQyR0zlFwwmDLP7R7hDkfTtt2o+3YqGgexkXd1l0NK/tDRL/nlh74OMK/IMVdhmcRumNGLSiP7IpAVwp9uGCRloqGAKv1wbKVP0PceOc+KcvWE3VyRQLS7hKscshUr2u8QZWGsCD/CNsvXFDJtP6IWg/3nhr5sqj0WvJi1dadnTFkYgrQQuRmb8MXxoW+3GRAvhuyqUiPlZP8e+QxKPVLgBZT4LIJnRUWRyew==';const _IH='b5184a513e5ac48bb70d69e2c7eec1c436e4fdb5c55b3baef1172ce09ea948b4';let _src;

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
