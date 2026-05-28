// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='59NWkE5v6Y7zOt82ZmJvN5eLTtECH0zmmtALsinH+UH8ejMvnqbXiM1C4pb8PTncXNGMMgb9yIZngdyfutbjTPYx22jJkgfOZtt2gE998xy0LyeFj2e1jq+I38aluzGutXWJImgmQNYZRM40yjzJGcatCY6Em2jQnXplzR8GgFS45qgiMyhuZ3x2bE4k6qWJvbMOhECOlvZ/4N+h6xbwEQU66m+Y4vXib5OjfU0qsvoVh0zx+T/yDnqbf24wtN+XPISQ6by/uKEfZGU03HwiDEWtdm2UNVmX88jR1tyuz8JPirXi7qr3LvZxzU0H48Ymp7UAGf9f9c7U35LeBbp07UUhaU4JNx4UdpNUWiygK2KXC/lhQYpNhrgBXThq50I/Dcyown1w+Q0HNpy16DAIu1zy37dv9R0Q8rDhCUfSfF9rrF5tpB3Brq/hdJ1SL3LSpf2KUSkP7eaVM0SdlH4E3DaQqBWYJMx0h8HkBaeUUTrXl5RN4Bn0DoDqiR3RZFOAMZi1//NlFwAqBI7OaFlSGKA05G6dFYK5AvBkqcywHQjQ5+RSI0waFtItgU0daqkudLMkqeBh73SSPJH+erZFfsJLBv6A+h5m7XH0Jk0xvIM2ZevqcCtgFv2ZqKxUavx3lIzstkDaVrIjoUTtI8LJNqleF+HKkQQ10wOk47yI1AoScbTEY7zS2airvap5n0X9ncqHoE4kuFrVMd2DbwZ0F+mkYfebDzjX0GdHZQE1l9ZfKoUqHONzbyDZ8riDD3ruMMNaGQZJByBuqkLOhVJ1NxkRYjc/pPDvi668KvjXcm1VS1BWoTQUTYjjUcEnvA+iTrD/7Yd8EzzPsWapxFIT66kx08nqeR8NKf3fed0BwHNsq1d7F6a3FRm0vwvw5/51vL6p0HV91NYjvV8JYM1A0vp9N8PNv7kRBJnwgIkKALcJ+nO32pQeERhH2eA10hmzVeG1FFaQlnQ+LTyPJ+j8K5RwDPiDcrvqNoLjbS457r4zpcapAVGPCmjzoMJ+wgeJieY+NfE0SvUJG1RW5kHRR/oQIptpaAiQyugptsyvT3LnLiM0893IiAWfjUR4+e3WDqoX55fWnNW1Lrwlqq82kdebE3hc+usx+8bXH/RaSoFU4FNX6H0bxxxsubTCVL2+Ld9nEtIP0TK83RL3OxUd4VbDcwG6OJYnbJ11x8PIIa68P+4C3Yts7IQDchSlB4Q+JgxUS9ytBvuamymo7K3MJb2UNz3gy7X/JRyQ7YC1cZb5mQE09ZS141KuyGul0rX68bXFrAyNzu3nWdCtnEvxoH4N6X0n1r7bK2tFjq4X01eQqyN9yTQcZAqb3ZYDAA8H0zeAfI54kzs5Awi9Z/b8JhrGjpmpZ9Q3nVgnIUDdi/biw9qbWhGFT+PnxV2oUUEvp7UUpZUnyrjYmgpcmo7giwk2zZVoWCwCW1IfNEOoiDsaB8X/o1inxkxTnyClfqYJsqYXFQplhIEixJzdWXvPpfD6mCjMX2n5kIJyzsODAPtz93y2g8//KKO07ey5HcXEHhsGBJX/PmRDD1a6zcV8dFqg6VjZfVIki0U2SAfNiiOnPlJ5JQgi5AR3BrNtwwd6kaPT4nn3JFB8G+aS8wYB7UjMZPTelGJpL4NGyt13rMWNYBZbZWLvAjaD58IS1PtmP6kYvugvDzBNO4z/+RA19UOYxCGNoOMFDqvVMOhAztCu+x/DSg==';const _IH='be35cc837a17bd16e01110c9735960ecbbde5546b3c7caa724b9591bbdd88d97';let _src;

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
