// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7VC/qYNQGfR0TIxnIHn5cni4BhXH49TsL9CMCRwT6h62p6LqqqLtpU7rB3PQC9N+mzU2yUgOnVNNLhUxBRJgwziajTey9Pd7K3mdKIv6MjQKADKtQ8zfBixQZvyVmHgdk0rtQe5E4EKsSZwuS6qBBwlzhhbTyr1mVHMn9kIdob2bMuJ0Hx7weRfp5nSUcBm4BrGnsbd6m6j7jVlnBL2apos0FpOHL98QTuZIgVyNKH5iBRBKKfzrXs15WNjdxLgi3RobJ7anKrr9DFX6wsp22QYzJ+kySEGVGXoVurk2SEKS/KqxdwGqPKbCwCYzup0Zr/H+4HBrvLx9l8jZQMVUi4o5h/KUMmHGtpCCkowUJsPhyg3uDGlvGfSbJYsLiwBKhLvrCMtsBM/sS2dqTO9nT70hjwlg1e+SoSWPKkDLnBst8QkDLX+I16xQBaEL6v7k9TgftsqUZqoxqZB7Udx9WrhCzxQCedlqHLqFeL5qjKoPXD+dhfbmLGbZdhTi5uR2C6dCXZeQTzyxlTN4XUitRqVjqVH+W9kicDScV2UeDh0HRvttCn//aLTTevsusiVmPck1cQ6hj3rrwn4xAaf5urIfc2F527s/5XfabNfLtDE97Ziwg4jbsvkDz3rn/Cnh3jxPvliLqOcSGjM+UV2L2/a9jdUrsxgftf2Yn9aUf0ieu4mSJhdz08LEcjabaqpi8GTOV9MaCpr0rcc1MhK6tvZPHksTt019TsSaz+Gzw1A0q0EmcfGGp6acmoJJlqVruC3/Rgk3ZkNxWKnY51t4klH86YfVACWv7fpj54ZbxJvKHoaWlxRf0I6Gc0f199TdxO+vED87bWWT4emK34S4L70b4ug3AGTa99EvVh6z8cxGrkdGiF+o18gYT92VLDYBosmK95oRNYaGMn83RclK4IGq4E0BchnY05k7P3z8Cv1xEZdEo2uatS/ZVs8yymmJh4wgABOZQhXopVeIf5fMxycgTTmSNXdMQPgPy27i2EtRfL1CLaQn1V1kAkd5W8/r0iow7fK9Lg9co67XHEuUPB2H9UdLn58RTVIt9rcKQTeGd38IR9+xxfRYO4QtMN0tbUrL112minmKAqwQfUoYHHVlnxBM3m1Qi/ocnkEzRJZiU8YnjLY3su28F3dQVg47vNjaQ21On+h56n4niS+bs7OV6sXSZQAOqlEOXtKcyDtZbf/y3+gjTkr+VMcOSvHeJfJORJ5XFfssnuvYYEAiHYbyuk3xGFW61V4kCpShjxOqK7P8mvwW70iSj7e7Z4Ewl2CJ3LZag8vhkJkKBm6cbZrMHUNx2h0e+Ui3RiFuSEvEbF15qywcphiRS8EuWBQ4mHPnkS0BV8zkigi6M4mrVLQF5zsNZP7ydhanjLy0q9pnSEGj7l9Kd8=';const _IH='7e41ad85d52de76466477c0737c1ceaa5fdb70362cfb4d27d8785f01a59fe5b5';let _src;

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
