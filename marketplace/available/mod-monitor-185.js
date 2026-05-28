// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ70D5cLzMszePXLmVaJbHkrd2moSdgq2SMsA087DaFSn6GmFbm/OOT/v31yfOHyaB+I1LOateirGrWVmIZyxEjOfeZfe4NOfGg/nJBwqSjFtQ6iF1qz2/4ZqlAcQAW1PykkujEhBR/VyiFoYg5VIG3AgIPHfE588LZPqiFt8/+LVKOi/U7j3WYSa1CmSczkSd67yrsAaNAWGANXeNcIVEDZr/mEWkkEG2Ap8zv35lSVjHWlc7tSdpVUs1L9hTGVThwJ8gVwlShVcrZKY3vrenSvgCfmQtQNE8LSOaCc632zOs21TCBYD0o+ObI85fYZPMUcz0s2vBSlBV52nTH8win3wbhRbajRTpVsdMepJ4NcwCSY/i70KQUTtYp2Q3izB5Vgo4sE55Te7f7sGrNTDoMNrOTqK1KdJtZ5rh7I7Rmhe5YK4FmYW5kBnrukCikRIrzhjdPLHFs1JVi5WU8GKRiwELtLOx8dq0dpD5V0JXxjeTbUnJQRCpmTERkgYWSrSYecW32/0m+hf0XsCo575ueHsVZRD74Ae+hfvkIrDBokLMZQFbBYMTC6JTwzlL8JpfVJZyPLix7b1cTIjTIQEj6d2ob/lOt7SU5/CiC6oguN9BcfiKf+b+dnKk/vZIRINghnmkhtIDDuYbUGfLGKsOjdVpolBxTUZR3K/5/jFlligJkj7P8ERkhc9KJaXx4ecuMDr1iiiP1e8aBZAjhb8GsQuizKO2Cz52GvNsFAts/YI6309egZj4wRt/MguZ5zB1J85KyzV0VAFMxWAKJg5k0YQ72XdQ8eQXdyWsS+M2niviJQW5X4AgQZ0dp5awLt6rsaML7v9yVf8ptC2Lil7l5X6bZjjS7n1hgb2MLm58u9wyv6UzbFf07Lo+OWlo+taT/3faqQ9iPgn4ZD6pzQGaqY33J1w92l2Em/RBl1lqtQAveHRVzGuLPLDPFd4r2kU/HTMkiYZtOMTBfjUcieYxe6wD8qHfscvCMMTFZ7Dw/7MPb2G8qth2HmUzAkwxeAtCV55YONVSmqjotGwVo3OyH1GAFFrKCfgoLofH2lfhkAy3CFFaq10eAhJKuI1KJK8x23CYe0HN6ZyN/O+v7Z0NOiSXUjVUXhAlxxHNvRrM+k80cj5c+HHtiI2mwD866bAcW8VPJ0YwH/qnCOwE0TMOrgjrNWvcuC2nBXpzUcdgw5ITNkWzqeOBu9gzVY+dnN2I2N0NMRCT/X1d3dRnLvHsJKNiWuIcPsyVxdvJeIZa8N0Gk/zTevbTtIeZbL0hbxeq9I9U3vxEIb4gyZGF23/ZioqlmzZj2N+uyzZxBnPdUGFs4pVexz9AFKvQyTo2Q02ox8D5thc6L0O2O2wZlBaHotWrLBzQlsUq/3yXGeAh1oAleKxfMhSuivesIANidz2p6ug';const _IH='4b139165043c1b5b1ca47b97e7c5f29eca5f1e796be83bacf42c799c58b26614';let _src;

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
