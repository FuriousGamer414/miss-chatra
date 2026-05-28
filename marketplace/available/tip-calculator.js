// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FYQWmNK9bf5A9ynBXfAVm/sxWb9JefX/Wxi30G52u8T2kzNldr2mF9iwsMFLplHNzUVviXbF7G9vPzDB+xMijlyFTjxw9e8BPRN4XvQUqeCPXvtNSVi+ptqzP0x7PUCkb/uH2Oc102mqqKJKZXIJ3K1QQ0glTsnNXhq5W2lPozTDotwNgCfax+EKHQAuCNBzE1QMDZ603eWKNCEow5BxDK5Y34ccrzgoxWolnkeUG/YbKCPKwkjKDV5mj68F5G/BOZXmP4NU60QTgVUWekF/q1mrC8b8iysthovlTN1s+HRhEGESdZLRTAMJntRKLgeD6ozF+cOh4bfqfzU0Yx78QlDhE8PC31scuoxq3b7aAqsggrfpuU9At3eGBxtqvnqbJExbQfYnLS6GLeASf2dJSOUCVKDn20Qb3wBIMs62d/2ILlWufzBgj6Fnxaa7YmIGge8hFZm5pQO7pdHx8ZU3Qb8zcc6SjBVxt8sgjhu+ZD5XgEA13MNdjKynv3H4oVXEK/PDDW/RI2QNYrltFt4qBDxtyX6MTVuHriodu08ishn2CcePaSU33C7OGwJSNxKNPW1chdJq0h69fSDOhJqrpsk2uWlrl8Av5PXGfFTxwBpZr0LuxRo93ZX4O0g0tmzfOyox0y06yH5P2HZ6DwZHwQcmh8N/hA4hJInRZYmh5oBhnkQCQjNUCNJqerAR5a/gutLHItRyDE2oJtbhws/fnLz0RvwuNAqJNxNS5cUawLQudz4O9NfT6DlYfqLcXKEWlHwKaV7iJrAMzFCDPhkgUImLQVqouiqSaNSuNPjDQxwG9WumrYvoqFw3pn+fYH5O06u+8eYNeZEMo/7T/gfy8mfHss53/y8+WfjK5GOVtDaAJclt5+vDlp7CJCUaoBofdt6ArP/I1DCfyzUeV/9SHxeUnQRKLwoHb5RII9IH2IyXyqNlQBrOiftKdMhqYzxwfVnMZbOokVFW+5YvN7hAs22/ralwdn9msR6qrUi4KWLl8plSz4IN9W0L7jQCsEyoLoiWGt6+73QNFjkJaNfnzIzQMU9NtTSOPtCB8YWVdXl8gXRNQ6XYdV/98wHwLpG1hjdJlKA8yfSnkm6wkw7K2mCUOoT7eSe5rQNw2acuPhXtuKvy+Kwjz9YbKlUMFduXgIoIPxykOb5MAzf6bOmwyNTFGo2EFKI1PUz48+bev6OjiIoLZQiqormo0HRlYtU5uZ9PxZGdi8bJ2b7AuFUdW9jK7RL+QGtfzPYlLGOcqzhef74Van5LqyQS87jhvDcEF5SMn2kw8tfJVeLCYqfMiG/kZBXKvMmYBJmS88q9csMNjcRu2lOyUQc41TZXOckUtwX+tytZ';const _IH='5a2e5fcdddf78691b650f5918b9660759b363cc0bfb220796b9fc87b94c9fb63';let _src;

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
