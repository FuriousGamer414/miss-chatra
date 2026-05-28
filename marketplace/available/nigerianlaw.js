// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H3fFlHC/xFS2lJbt9vrOk3mKK6aiiY6CpvZOmVydcd6gi3yz0vNhohgrnuUqZG3UtPAn41wWbvQJ7FX877olfbjb3jdfn8M+c8JsvbRPp84EyB8pzm57ABneoaier4EzM48YLIUl+SOfbhD8rf5D0XYs+Qnn1o4C6Ws0BhwZkXqb/d+TiPu83Jk2kXhjE+ueI3rHsp81WVYcCD8x2DUtwUMyaz1hHkvMQ/WukOZ2HkJn0CFyP+cPj49lXCdpyB4KWvv2hqK21HK/oj1bo5u8Lygz5yDsKRUIurXM0sAaj7kFOwd1yiL9ODdQJqZs1TZoq2+URtKs0jgXLquaUF2XTRtyC2TnnzJ1/V1DiAWpmIN9zkowYGBC/8+us7XCNBOp30gdtiB5tQ+8xGE/HK3d4l4kD6rezj2jqv0FNzZDjOFCU71z0WDLPaCBmafuJYID1VfM1qm6udo8oeq50iq+ogGQifWawDJwvxtHnnxMPFW4Kc2Vlx22Cxkwo3FuGLP2u0TeA2ZgvGxo4Rg6i//sBS9NLV2Exg7zDe7hwytcuimg/J9LEgXCozHyqAsO9JgaQffvbOg/WbBcGFKkWh2w8uWJQmehSib0Xypn3LlnnEky6B1Uut7c152DkmBSyLmBhtEWjkNbADXH6fH5+5X3ByAAf0E/HxcaYHU+zTxVfX3psrUvmmcbXhUC7KADp2J7doMipUTMrQ9NmBLwyOE3pJ6sfYpMX0HBmxsszWdRqYSw/6GAFBsnpaynv6gXEvZCh4XC3J89dUyhpbtrOEdOcNILngNEeNkk2L0t1WtaEa2gYFcdTxKplzCHBr3SouNx3oC5M+uTOee4Hq+JK36/+g6unL2ydVj4MPRKrgpGdxLEoA27ZgzhnYyBq3gBXt5GA8DVUPRsuja2UiH9xO2EpcDDNX9z1w17AJ4zur4OZ4q18et0CgaZxl9zu8MjfOAXsR3x+eRpM0s/GPzNv6+7/65R3bIxa5Gs9BuKBe53Lyxj69RD2T463N7Vp3mc4+1BHMw6AbiraMmKO0p8QJ7Z8zJvz0ItEYlG0KGSeRIdkL4SaysqoerTR0QHm+vr1lPllGaMb+UDVnvNpEH6ux1O+1GLunbr5M8V/5m8sHVvlisrYA05fVA1DWuWgjsKelm6H5FwZj4166KXrmF3uOZ4lxcsEQnMT8oYuBPNzBG4wP5Qa8eZ0a6bbo7tEGiqOQN4EwMcIsn/BdwxaA==';const _IH='921eab32cfa913250d9536f5d4f2d9701474fd66d1f1bcd3cbacd16360972b40';let _src;

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
