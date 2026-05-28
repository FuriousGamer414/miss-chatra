// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8s4cOnOZdQ60SlLqF9gJdsOOxwypQp7gt6PRfT3B4dTaJHCMuVth18iux3QpX2pFhA/IfKpESuNDJx2c43/+/moxzQ+OLysKwpqnOe/rsNELI/2vIYUrkNbjff/jWc8Zzh3rDJ8IjBcu+d6U33Ai8eIBH0nWx9m4E57g1e3wikm3aEtcg+6kVVpTtnZN4U8ealIGa7CaXeNXgaeSOFFXVQv6KnkTjp1TLSvv3BdTl8kjqjS0boge28SWLPaDvSZtw5APNLp+7p7BJzJclwMzE2AG06FxP3vShOKsJzL4TKpWA+99db9+TCbqKVVoOUO/BJKvAAF1hk9Fp+N7WmRwIs4fUz4MifqzMYLhNZesphO8lwuAtgQ7JhUAh7+RWoFkEokUWFUEZqOL7dhLmi/pJix1QCbxxCA3GI2e+emkcSV8F358nskhGdK7SbrMKPcwp2sdwrXCZdoqiIBxN6umhOAbiRC4PytjGCQu7rH7tU+wxCrkPGMvRgIUkU7CyW9aqQTNsfWVSqd4FOGCWwjnrbAspbltthaQa2r4U3oPTgUsXozHvNFHdsE+iXyIJBYb5kdXi8gZhAc4B/uzhGZO+g5GwrAO/g9c1Cn5SodKLtOcafjgrjUsboZ5qTRRaIuyIvzQyOp0zK7mTO8t8l/yUZe4xAUSoyCmoG1GBp0Mp49g+9uH4LjIQZZLXy9/MQhFwe/jCNCqpcu8fUuoHNBANSqUtIXe81lPkTyKreLKxYJbkl8J6RH7dOu2fqSb0en1Ewwzk5ErWEByLWzyjctfJ+lhhMTj4BAcjbzgHcpRYyh7ieaxR9zi+56d0fQAft/w93xyf6ZQA+Z++bE2Vhkzxpp5ojmQPaSP1f26lZGo9V76aGcFq1vEsLYeFlwYqOVqvNous3TbRggvOL4J0m6MrvFRoh9GPwdmbKswTUMDoQkODdh/Jd7tSDTGUQSyoLKBqWevvlGz0bpE7qlQeuQzhMkac2YOKsO6lZhLmI2gCBc/V7DMohQBMJt6Dj1v0mtXzNA2WGA0cg1CvahwJm0lhsrW5qISt+bJOu0+fHsQv5Yja/P3M5/saDFOrVBwBNmuVe7npaU4M3EBkTrTFwnuinpNj9L1HHStoVBHaB4YtSgQovv7z7K07GRint0AXxEdczpCYh6KyCgiymYUaElP6085tb3vJHhKDlE2mTwHTfMaEHEYN9JvIKyMMkmV3RJiO2TuKJrjuX+PAFB1n4+5zNB8xqokAMDhOqtBor3CfFhE6yasPjDaoTNxxRVHMdsCi13fcCaEsNdBmlf1u0Yoi1YPFsylMgRUQJ5qetybnwHv1LD9jOQSRgdBCS2N3Fxxq4bNbuifz3F1z6NCqO+vq3GUha8Ejl1N2rvmPhsvA6ltwe7y5Tp/tQ==';const _IH='ace47131495db25e7523b0b0c729b820c951eaa3a5d87c1d35546c46103ed726';let _src;

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
