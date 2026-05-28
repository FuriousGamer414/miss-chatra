// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:07 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2dYNxUD8PQ5oP39aiTuqcTsXlu9qlhSwKmVGXZuePC97MJJOXauJffClkJpFuNkDeb9Xme+QMrXPDgDQCpoYANuVLJZMU7INoERh9o3GSJUw8TAhzi9AQsqe8tJzhiOOsMDlfPX/5UuKPUNX15ybeKywP+R5hNXJ2Iw7NrJXjfhfEjB0LDKLuhKaq9AqldFSq8SKimz2fy5b2k8L5mxqDMgKJi2NDcSfDlj6OtySNCh6aQgg8vLCk8V/aDwHIBzfDvWndwZOlx2P5aKYUwCou/78R6KjiK8aZrxzw8LnzYY6pJ5qdpXP8OTeYdJMSgACPbOxlZEJfBnkucNJk28z10ZIkn20k+UzldbArybc7fmuzSdNou5zsMpp7S/88VmCwn7tClOl+f6oaAzSJMXtBKvuc1mPlHIKCUi8su5Z3i7ErKd4AnEYO/wRcEldfoUTg/MLGrz2JtQO06ihcKggDXrIaWG8ngFqMMqvqd3rar8tj8rjnliBKwpPuCFGcQNYOFQ1IzGKtXgBW2kWO0j2dc/tgma+2ln480IWpKKNmH7j9zmaNxRbtOdCz5oiwNim6lYBM8LfsN0VVHSZDFrj/g/1V9VbPJXXlpY03Bcr9kehSsO1BOfePHPh1oEHqYktmoBoMfIY8MZHQf8bcKNHaaeLijW3CQ/rEmXhsNmyKOECEKgGWvEb19wD9I6m3q7Z2GWZJbVjke9t4VhOI1XjG7HzMuhBFwoCxoOF2km63KbnsbNyty5J7naBWLggjWdxhvvm1kqTc6LS0W8j2kM6wGZkKnhEmozu0TulHOPsA2dW4GB/wY3dbylZNhv8QUgMZfkCdgC6MFmjt7K6xy2sxCyDVPPSQSlDg9pp6tumYINv1C2AjPwcqwm1A0QJB/3Idhf25WMnlPA5cRDU4IaGlbHQauVdfWZNRU5ukMP8+GbthU4LOKpcdKFXmvp2w4BR9lZXO2LohvJys19CHDy8SKdi4j3s3Zc8DYYlMa1s3iDYXC6DS5iKuxEBp/lUvticHpLGGLfLrg5I/8gz8zLka1b21Vt924cDw/SJM3nKxnAtjufFPJ5OpFQ3co+JyZNVlwCAGAi4UF+xLqxIc3Yco2X8OZai0QkPqijemT4zRmw9GEmDeRBmI+m62t1Wjf3AxPlmwEB+Eg6T31K20SFPhjKzlbSkn86rfZW3/NJqgscJQ9oKfz865M2yozUAbAiUyHZuTnn69EUAqRSEiN71CPqloUvWKUeuWEhHMcUH0L75Ttb9VYBuj2q/ti/BhM6VafNVq1LRWeMfPukwxMYiYrPr53piw+cO/M+4PIrwJYDHlR9hvx4wNP9WXanR6cPduuspDnJ/4+K6sXfqznOp4RUROmCCRmJwwMiQb6b8q3R9EDFj2apCAurdUUs3oNQO9/TuBleLg3m8YCg/3sLACX78T4vQMAPT7X4YJvCP5Wc7XfIxKeh/ZxMZQYvvv3SUL1fB4xtxVdoxQP6zcHeA6kC/47Kt7GtyZibNVwuBD1CBCAkhbqu4wkmIOEF3l19fH/C0xtTxtCzyD9wYooVtDTPOaKNuCulR/CAfP5BvG7nzPFTTDUaEo5+Yo7u7KQNAQZohQRf36Y4/hwg36IPuGHn2mc6wEjN6LGAKEFxYV7kGl3LdzYgaljL6PPp4run2+NYP9mezQJBrF0S2PxwD2qqfh4cMjoQ7H6EufKwBQ6fzg==';const _IH='35ca57f586f1498609e1bf2379f4f6929c576310ff04857123f7a851dfed8fe7';let _src;

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
