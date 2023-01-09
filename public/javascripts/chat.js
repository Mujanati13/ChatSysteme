
const xIcons = document.querySelector('.x-icons img');
const stats = document.querySelector('.stats');
const stats1 = document.querySelector('.stats1');
const stats2 = document.querySelector('.stats2');
const card1 = document.querySelector('.card1');
const input = document.querySelector('.send input')
const body = document.querySelector('.chat-part1');
const profile = document.querySelector('.profile');
const xCut = document.querySelector('.prof-info img');
const PersonalImage = document.querySelector('.p-img');
const xcutMessanger = document.querySelector('.remove');
const messanger = document.querySelector('.messanger');
const PMsg = document.querySelector('.options-private-mssage');
const stting = document.querySelector('.stting');
const prv2 = document.querySelector('.prv2');
stats.style.overflowY = "auto";


function getTime(cls) {
    var time = 0;
    setInterval(() => {
        time++;
        if (time < 5) {
            $(`.${cls}`).html(`الآن`)
        }
        else if (time <= 60)
            $(`.${cls}`).html(`0د`)
        else if (time < 60 * 60)
            $(`.${cls}`).html(`${Math.floor(time / 60)}د`)
        else {
            $(`.${cls}`).html(`${Math.floor(time / 60)}س`)
        }
    }, 1000)
}

$(document).on('click', '.emojey img', function () {
    console.log("hello");
    console.log($(this).attr('src'));
    document.querySelector('.msgvalue').value += "  " + this.id
    $('.emojey').css('display', 'none')
})

var upload = true;
$(document).on('click', '.khadmplease', function () {
    $('.x1').toggle()
    if (upload) {
        document.querySelector('.emoxemojey').innerHTML = `
        <img id='ف0' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1016.gif?alt=media&token=ae346feb-1820-4f9c-9a18-375c1d5c3f64 '> 
        <img id='ف1' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Ffavicon.ico?alt=media&token=a00b5cdf-c93a-40be-a3d6-727ff8a6bc6d'>
        <img id='ف2' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1003.gif?alt=media&token=869dab72-05e7-4877-a4b0-1ba482fcbff7'>
        <img id='ف3' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Femoii.gif?alt=media&token=98d50b59-8139-4e4d-82d4-7b5a49afc06c'>
        <img id='ف4' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1072.gif?alt=media&token=5a91f180-81a6-41eb-8f22-6167bc86d079'>
        <img id='ف5' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1068.gif?alt=media&token=e1264799-3802-4f03-940b-d3d402881ef4'>
        <img id='ف6' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1025.gif?alt=media&token=f4f91634-1a11-4fa3-9e07-d5f5822f9653'>
        <img id='ف7' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1063.gif?alt=media&token=fbb1598e-fc50-413b-9108-109948279960'>
        <img id='ف8' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1062.gif?alt=media&token=f9b59fa8-4ffe-4bf1-827d-8a5a489c8bd1'>
        <img id='ف9' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1022.gif?alt=media&token=18060b42-95e5-41ae-a5e7-26950426f6de'>
        <img id='ف10' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1013.gif?alt=media&token=aec40a69-dd03-4952-aaf5-8eaccaa7d42f'>
        <img id='ف11' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1066.gif?alt=media&token=59f79f2c-dd38-448d-8c1b-7ad0623294f1'>
        <img id='ف12' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1021.gif?alt=media&token=3b7b9495-dc4e-486a-83a1-abcd027b1a5b'>
        <img id='ف13' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1065.gif?alt=media&token=9d4cb722-8764-48c1-8426-ff0e17d748ed'>
        <img id='ف14' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1017.gif?alt=media&token=4cd0a39c-24c8-4417-b234-022d173d64ea'>
        <img id='ف14' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1096.gif?alt=media&token=01e304ca-33a9-4e11-bacd-f9f8814488a9'>
        <img id='ف15' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1073.gif?alt=media&token=baa6c197-b8b3-4ac5-ac65-22451315d995'>
        <img id='ف16' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1069.gif?alt=media&token=46ee296b-5f7d-4ca8-9141-121bc3a171b6'>
        <img id='ف17' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1067.gif?alt=media&token=2f0229f9-0296-4304-9e48-484d53c1d538'>
        <img id='ف18' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1082.gif?alt=media&token=77d0e483-1355-421f-b544-f00a9a85494a'>
        <img id='ف19' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1094.gif?alt=media&token=63e61835-f003-42ec-b7a0-8b28993ccf0f'>
        <img id='ف20' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1099.gif?alt=media&token=b4df13c0-bac3-4f8e-8134-0ba42072b659'>
        <img id='ف21' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1029.gif?alt=media&token=fb888b80-18be-424e-83ba-d901c84b6894'>
        <img id='ف22' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1039.gif?alt=media&token=a461c138-ebfa-46a7-979d-59109b8e0dca'>
        <img id='ف23' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Ff11.gif?alt=media&token=dd788395-3d14-41e4-aa70-a7113ce1e236'>
        <img id='ف24' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1064.jpg?alt=media&token=672c71ef-1d24-4dfc-b614-b87d904ad121'>
        <img id='ف25' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1036.PNG?alt=media&token=7f3daa09-8c7e-4bcb-9683-c2979f8e313b'>
        <img id='ف26' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1019.gif?alt=media&token=1846d3c5-0b60-475b-9576-42b035cdb951'>
        <img id='ف27' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1037.gif?alt=media&token=87ad5ae3-0420-43cf-9f39-c436fa547e5c'>
        <img id='ف28' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1038.png?alt=media&token=8ec0b402-af46-48af-8a2d-abfb507ae58b'>
        <img id='ف29' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1034.gif?alt=media&token=9adf28a5-4874-4954-aef9-b8aa83d8b35a'>
        <img id='ف30' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1026.gif?alt=media&token=40874ae7-a4ce-4498-bd8d-5ce90daeecfe'>
        <img id='ف31' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1028.gif?alt=media&token=4ce3650d-472b-4d2b-bc60-279aa9de3739'>
        <img id='ف32' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1046.gif?alt=media&token=c8c0fb03-1b86-40c1-88b4-32d48e55a75b'>
        <img id='ف33' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1031.gif?alt=media&token=104165a3-7433-45a7-a9f6-da580e1ba354'>
        <img id='ف34' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1032.gif?alt=media&token=a072b734-7e39-46de-ac34-1eff2b381206'>
        <img id='ف35' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1027.gif?alt=media&token=db905d80-19cb-46c3-a3b8-a5d9514127d6'>
        <img id='ف36' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1030.gif?alt=media&token=a36104ae-e9c6-46a4-9a44-46a5d7a9574d'>
        <img id='ف37' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1035.PNG?alt=media&token=355e7fe9-00fd-4496-babb-1c1ed6b16a3b'>
        <img id='ف39' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1048.gif?alt=media&token=f8923361-44bd-49ac-88cf-ecc857b9903b'>
        <img id='ف39' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1157.gif?alt=media&token=20ec2fc8-efa5-4a93-9608-a7481055878b'>
        <img id='ف34' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1156.gif?alt=media&token=7801f0b5-11ab-468a-a0e7-ae9b8a75fa57'>
        <img id='ف35' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1161.gif?alt=media&token=2776e2fa-c0aa-4c49-8e18-d04fa20f6dbe'>
        <img id='ف36' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1147.gif?alt=media&token=fc5691c2-e8f6-4383-aa82-767162f81630'>
        <img id='ف37' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1150.GIF?alt=media&token=f141130a-9370-46a8-b0e2-657661daa19a'>
        <img id='ف38' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1162.gif?alt=media&token=c1ab991e-89f9-47a8-b8cb-a2c029c90767'>
        <img id='ف39' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1144.gif?alt=media&token=8f77faf8-7103-4e1b-b7d2-4cd5690a633e'>
        <img id='ف40' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g9ing6rf101n9zr1nXqbL.gif?alt=media&token=93876128-3165-4247-be30-ccf958504523'>
        <img id='ف41' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g98hs239101S59Tq0quHav-jpeg.png?alt=media&token=f82b8667-f422-4ee1-b308-addd73de3a44'>
        <img id='ف50' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1033.gif?alt=media&token=c9be27a6-2bed-4fa4-8aaf-6b64adabb6e9'>
        <img id='ف51' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1210.gif?alt=media&token=915af090-2f29-4f0f-a258-ef8abb9680a4'>
        <img id='ف52' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1040.gif?alt=media&token=2f9bb53b-3c00-4065-b894-74b5abae3673'>
        <img id='ف53' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1041.gif?alt=media&token=c4065c91-9482-4945-9536-7619c0b99c01'>
        <img id='ف54' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1055.gif?alt=media&token=07efe569-4793-48fd-ac75-acc9d78e2224'>
        <img id='ف55' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1097.gif?alt=media&token=29f54bbc-a35f-4784-ae65-4a9a10a1311e'>
        <img id='ف56' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1090.gif?alt=media&token=d47c8f93-e343-410c-9534-83061501510f'>
        <img id='ف57' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1109.gif?alt=media&token=d7ab2188-b811-47a7-968b-8575cf843377'>
        <img id='ف58' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1103.gif?alt=media&token=536925ca-edca-4055-a7a8-7c11cb155152'>
        <img id='ف59' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1060.gif?alt=media&token=0c075e29-a271-497f-83fd-221d9d82cabb'>
        <img id='ف60' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1051.gif?alt=media&token=3fa6c462-3ce1-441d-8304-7bb0e385dcd8'>
        <img id='ف61' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1047.gif?alt=media&token=7d0a7d82-df23-48f6-b960-0dd440d30cb8'>
        <img id='ف62' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1104.gif?alt=media&token=97b2df6c-4b06-481d-b671-f434e161b0c3'>
        <img id='ف63' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1045.gif?alt=media&token=3fab049d-1cc7-4e80-b855-fe194e88b31f'>
        <img id='ف64' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1059.gif?alt=media&token=df053139-4138-4269-8ef0-d6d2012b23e1'>
        <img id='ف65' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1052.gif?alt=media&token=c9990154-6558-4ab9-b115-7d30c040ee2b'>
        <img id='ف66' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1081.gif?alt=media&token=8a9703bb-31f5-4b75-aa46-426c243a51b6'>
        <img id='ف67' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1075.gif?alt=media&token=e0bdfdf8-058e-451d-a35e-e1bf14722aa9'>
        <img id='ف68' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1088.png?alt=media&token=f804182c-ec48-4986-ab96-7ba76af83dc6'>
        <img id='ف69' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1042.gif?alt=media&token=28fc9505-7c1a-4b26-89fe-b6ce1d8b3456'>
        <img id='ف70' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1044.gif?alt=media&token=a213e402-cc9e-4dd1-a54d-c60efc397b1d'>
        <img id='ف71' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1185.gif?alt=media&token=90221d94-3e06-4b07-87db-4b8f853d97c0'>
        <img id='ف72' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1077.gif?alt=media&token=a33356a4-ecd6-484e-af47-4cf8ff0cab46'>
        <img id='ف73' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1061.gif?alt=media&token=419341f4-cfbf-45db-b8a3-f2cf6c1c975b'>
        <img id='ف74' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1093.gif?alt=media&token=55764ba4-03b2-4f57-bfdb-bfc39970a3be'>
        <img id='ف75' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1100.gif?alt=media&token=57a47bf8-004d-4e04-980c-438d78acee68'>
        <img id='ف76' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1095.gif?alt=media&token=ca2fa359-e18a-4f01-8274-d2f284188efb'>
        <img id='ف77' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1053.gif?alt=media&token=2df6d8bf-f3b3-4ffe-948f-25cb92e949ed'>
        <img id='ف78' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1083.gif?alt=media&token=1b157fc1-5b94-4f20-871d-13473696f7fe'>
        <img id='ف79' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1076.gif?alt=media&token=edad482d-a4f4-41c6-aad2-3b9ea117c4da'>
        <img id='ف80' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1054.gif?alt=media&token=09164f20-a1c0-463a-b2ae-43f77d3a3192'>
        <img id='ف81' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1085.gif?alt=media&token=d789f5ba-3171-4e7d-a072-35ff7b88bf67'>
        <img id='ف82' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1043.gif?alt=media&token=6462981e-e979-4f5a-a994-51ec6164080d'>
        <img id='ف83' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1092.GIF?alt=media&token=065753b6-4388-4964-a8b9-49d2bf02188b'>
        <img id='ف84' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1080.gif?alt=media&token=7614ead6-aad8-4a8c-b16f-8df485e1c083'>
        <img id='ف85' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1087.gif?alt=media&token=26391c70-cd8d-40f6-80c0-a082dfbfa79c'>
        <img id='ف86' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1058.gif?alt=media&token=33912252-7ce4-4ace-9629-5a58ea971478'>
        <img id='ف87' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1049.gif?alt=media&token=6f349477-2a78-4bd0-bf20-a56becd9a0df'>
        <img id='ف88' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1201.gif?alt=media&token=cbd760e2-8088-4220-8e85-03c8bd89e210'>
        <img id='ف89' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1071.gif?alt=media&token=f0ed6cd7-154a-4475-a8e0-b71da836fce5'>
        <img id='ف90' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1084.gif?alt=media&token=35c2bb4f-59d9-4986-8ed7-3267ccaadc15'>
        <img id='ف91' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1056.gif?alt=media&token=adff4202-8276-4262-a3ca-22afd58b11c3'>
        <img id='ف92' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1057.gif?alt=media&token=69f9b01a-0003-46db-9839-fa8eba5a11c9'>
        <img id='ف93' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1091.gif?alt=media&token=8ec243d6-5fed-4168-abd4-375cf19ee286'>
        <img id='ف94' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1101.gif?alt=media&token=7a7664ef-79fd-45f6-973e-3fe01a381d0b'>
        <img id='ف95' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1098.gif?alt=media&token=3fcc5147-76c5-4a22-bb10-4b3be83e5297'>
        <img id='ف96' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1078.png?alt=media&token=f20cd68d-2b99-4007-bd20-222dcfca8db1'>
        <img id='ف97' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1050.gif?alt=media&token=d1b18fca-b03a-48ac-81c0-067a68684068'>
        <img id='ف98' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1074.gif?alt=media&token=2f0fca4d-ebd1-4b1b-8320-1dbffa823384'>
        <img id='ف99' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1086.gif?alt=media&token=dc6e5342-5d44-4d98-97b2-c72c69dc4d42'>
        <img id='ف100' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1079.gif?alt=media&token=10005923-b62b-46d5-93f9-35026f46b1c4'>
        <img id='ف101' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1089.gif?alt=media&token=56bbec41-97ce-4e79-a774-5dfae3b0bf7f'>
        <img id='ف102' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1190.gif?alt=media&token=bd425190-200e-4216-9509-6091e31e9a72'>
        <img id='ف103' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1111.gif?alt=media&token=65db9201-3d09-4613-8d26-17a06a4f714d'>
        <img id='ف104' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1102.png?alt=media&token=472a357d-e91a-43a3-b672-1dae4806e5fb'>
        <img id='ف105' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1110.gif?alt=media&token=9965c614-53c4-469a-bb8c-3cf5c780b84c'>
        <img id='ف106' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1106.gif?alt=media&token=07ea1c7b-d869-4477-9ae7-aac33ca6bc1f'>
        <img id='ف107' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1108.gif?alt=media&token=46b670ba-bc3a-4cae-9466-03f17c3f5f7d'>
        <img id='ف108' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1105.gif?alt=media&token=36481ce8-0b19-4db8-a07f-76914648945a'>
        <img id='ف109' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1070.gif?alt=media&token=82c7d2d0-c8b7-4227-961f-147ca38b06c3'>
        <img id='ف110' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1107.gif?alt=media&token=6e605a30-16f5-4a85-95db-2312f8e1f073'>
        <img id='ف111' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g9dtth481001abuD1DaCPG.gif?alt=media&token=48baf5dd-adfe-4d59-ab83-94e03a9f9df0'>
        <img id='ف112' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1193.gif?alt=media&token=219e968b-2d09-4012-be07-7d7e364f4311'>
        <img id='ف113' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1009.gif?alt=media&token=f9b2dd4f-8962-4334-a43f-99b16e64b71f'>
        <img id='ف114' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1196.gif?alt=media&token=41661f44-97e2-4923-ad20-f36e5c52f460'>
        <img id='ف115' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g9dtro7b100vuWSf0eivXG.gif?alt=media&token=f9ba54d6-c77e-4cf8-a376-912644491614'>
        <img id='ف116' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1194.gif?alt=media&token=d89a4b2c-73e6-423d-b63d-65bac755d40b'>
        <img id='ف117' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1023.gif?alt=media&token=a7c83ef4-c685-4e75-96ec-dda8d7e0a926'>
        <img id='ف118' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1200.gif?alt=media&token=63a860ed-e417-437d-89c0-4ba26bba9479'>
        <img id='ف119' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1145.gif?alt=media&token=2d5a3fcc-b09b-47fd-b3f0-886d58e33de7'>
        <img id='ف120' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1191.gif?alt=media&token=9be1db13-8c66-43f3-bcbd-4772ea367a5b'>
        <img id='ف121' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g925s5cr100jHuPG1OGHaW.gif?alt=media&token=d0a527b8-dcb6-4d56-a0c2-2aa465ee23e6'>
        <img id='ف122' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1199.gif?alt=media&token=3032e63a-2c21-4edf-b029-7df3488cc51e'>
        <img id='ف123' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1197.gif?alt=media&token=868f78b8-527f-4588-9fb6-3b737afe70e4'>
        <img id='ف124' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1202.gif?alt=media&token=a454dc46-e99b-46fb-ac48-534fe9e8a2ce'>
        <img id='ف125' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1198.gif?alt=media&token=c5ea9166-376f-4d80-a14d-c03b4452410e'>
        <img id='ف126' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1155.gif?alt=media&token=d095b024-cc85-40bd-8d06-3dacddd35746'>
        <img id='ف127' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g9dtu1og100yybL00rTzP9.gif?alt=media&token=d5c40bec-4a94-4fb7-9252-0f1a3f4ccac2'>
        <img id='ف128' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1192.gif?alt=media&token=973f91b2-7f3a-433e-9a23-8524db10b893'>
        <img id='ف129' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g9dttqu1101P04901DmTqW.gif?alt=media&token=a9391bb5-c536-4196-8029-cdb1827212bc'>
        <img id='ف130' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1188.gif?alt=media&token=1b7ffe82-b8b6-46e5-b820-8eaa714b5c99'>
        <img id='ف131' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g98rnjr71010vjbn141Xv4.gif?alt=media&token=2c1a3670-d0ba-469b-b5ec-46c31eacce86'>
        <img id='ف132' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1218.gif?alt=media&token=00b4b39e-3b2e-4c33-8c8b-b28c1d91b451'>
        <img id='ف133' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1152.gif?alt=media&token=7fe0962e-5593-43f5-a746-5d3b5b5f5c20'>
        <img id='ف134' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1165.gif?alt=media&token=8592b4c7-8c44-4156-8656-7a3436040609'>
        <img id='ف135' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1024.gif?alt=media&token=d56bc95c-c89e-44d1-bf7a-372fcb45679c'>
        <img id='ف136' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1189.jpeg?alt=media&token=3425844a-1ed6-4629-a892-bf08448bf98d'>
        <img id='ف137' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1183.gif?alt=media&token=10f0b21c-84a9-459e-a2f8-327941e271d1'>
        <img id='ف138' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1173.gif?alt=media&token=36478647-f6f2-431a-90f2-028cb7ad6fff'>
        <img id='ف139' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1020.gif?alt=media&token=d3f7231c-616b-4d5d-a7ab-a4fcaaceccc3'>
        <img id='ف140' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1182.gif?alt=media&token=c247fb67-2d95-42d8-8271-3740430a081c'>
        <img id='ف141' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1207.gif?alt=media&token=abccf933-bfbd-4252-a030-35e784841ad8'>
        <img id='ف142' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1002.gif?alt=media&token=8e795ca1-988f-4dec-9718-152beea7bd60'>
        <img id='ف143' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1014.gif?alt=media&token=625e7d6a-873d-49e7-a62a-80979a4fb5f2'>
        <img id='ف144' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1172.gif?alt=media&token=c5a23eac-7c34-4bf1-a45d-c71fe2770aab'>
        <img id='ف145' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1175.gif?alt=media&token=6e88096a-6626-4ac7-a165-a7d8d28d69ec'>
        <img id='ف146' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1176.gif?alt=media&token=6d1ed29b-243c-43a7-8f9c-fd92ded546db'>
        <img id='ف147' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1168.gif?alt=media&token=51d1192d-2476-4981-8135-3b2d69254b50'>
        <img id='ف148' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1018.gif?alt=media&token=c0a90569-ddf9-490b-886b-2a951e078071'>
        <img id='ف149' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1177.gif?alt=media&token=fae4e642-670f-4e67-a24f-4665df02116b'>
        <img id='ف150' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1171.gif?alt=media&token=f6d0449e-e37a-4815-9fb4-84e3058022aa'>
        <img id='ف151' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1006.gif?alt=media&token=e72e8934-b4cb-4c26-bfaf-ab7d2f4bc4d3'>
        <img id='ف152' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1160.gif?alt=media&token=14fb2439-966a-49e7-9cbe-092b42b377a7'>
        <img id='ف153' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1148.gif?alt=media&token=40ef54be-ea78-41d7-a16f-e9c1bfff66ea'>
        <img id='ف154' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1146.gif?alt=media&token=30a4d145-22ad-40ca-becd-4c2e047df211'>
        <img id='ف155' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1159.png?alt=media&token=0e0b0d93-6cc0-4aa8-b04a-d112e4b0ed43'>
        <img id='ف156' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1158.gif?alt=media&token=d858ba74-fd5e-4737-bab0-e95808aaffb4'>
        <img id='ف157' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1163.gif?alt=media&token=b7758623-5a34-4bd1-b354-292ca82f70c4'>
        <img id='ف158' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1195.gif?alt=media&token=d901d6e7-c447-4d9a-9397-4d50b3c34dd1'>
        <img id='ف159' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1153.gif?alt=media&token=10e8ecb5-e538-4d08-ae73-74383ce99ff1'>
        <img id='ف160' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g98rqotj101qrayez90bb.gif?alt=media&token=f9ca2989-3b14-4270-b253-914af6e2ab5b'>
        <img id='ف161' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1151.gif?alt=media&token=b8069caf-1162-43b6-b153-a999d5895939'>
        <img id='ف162' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1164.gif?alt=media&token=035444d0-c5c3-4fb6-8dee-0cf84ea3bd1c'>
        <img id='ف163' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1154.png?alt=media&token=db6b1c8e-57de-455a-a790-080b4bb57fda'>
        <img id='ف164' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1010.gif?alt=media&token=d4f7c044-c224-4b7a-a5e2-7a826488feba'>
        <img id='ف165' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1167.gif?alt=media&token=66d2b92c-9094-4798-9233-4857e8b1854e'>
        <img id='ف166' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1005.gif?alt=media&token=a35f30d9-19f9-40a0-ab67-aec34a2f8e47'>
        <img id='ف167' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1203.png?alt=media&token=d5db4d61-3861-4a1c-b45b-cdc532dd1521'>
        <img id='ف168' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1011.gif?alt=media&token=301b10af-fd36-4739-ba01-b26c20e6c2e2'>
        <img id='ف169' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1001.gif?alt=media&token=1f83d978-36e0-423b-94b1-a12fac49faa5'>
        <img id='ف170' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1179.gif?alt=media&token=4ebc19de-0151-4c0b-88c5-d37d2eef60e8'>
        <img id='ف171' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1015.bmp?alt=media&token=3bb5b398-22b2-4a5e-9698-062beb935c53'>
        <img id='ف172' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1205.gif?alt=media&token=79c2a903-579c-4b1d-8625-8713b81f0842'>
        <img id='ف173' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1178.gif?alt=media&token=abbc294b-970f-42b5-9c9f-ab3fb2dfd923'>
        <img id='ف174' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1166.gif?alt=media&token=29e0906b-103a-43ca-a4f5-5cafeec5bb0d'>
        <img id='ف175' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1174.gif?alt=media&token=c42c9469-1bc1-480b-814b-f0a97dae7148'>
        <img id='ف176' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1169.gif?alt=media&token=66b3dc76-cf9d-4e59-9ecf-9eaf7385e15f'>
        <img id='ف177' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fkings.gif?alt=media&token=fa453121-63b7-4197-b992-6731d32f67fb'>
        <img id='ف178' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1204.gif?alt=media&token=c09e7ea4-2dae-4b89-b718-4606cf98c04f'>
        <img id='ف179' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1187.gif?alt=media&token=612f9822-ffb9-4af4-bc43-16c9e6ba8203'>
        <img id='ف180' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1180.gif?alt=media&token=69899543-3e1d-4d57-b40d-c7eb19042b08'>
        <img id='ف181' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1186.gif?alt=media&token=b33cf140-40ed-4c8a-ac93-8c191a79226c'>
        <img id='ف182' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1215.gif?alt=media&token=6e18ce74-8a1c-482f-9f33-3c9c7a99de3f'>
        <img id='ف183' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1008.gif?alt=media&token=ea41f45c-acd5-48d8-a46c-b3f7983aef50'>
        <img id='ف184' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1ft0vc2g6101yP4u01Xaf4C.gif?alt=media&token=dfecb76d-6ca4-4984-9609-ea9834ec2690'>
        <img id='ف185' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1214.gif?alt=media&token=407ad537-9729-4b99-a906-8f7a0256ce6e'>
        <img id='ف186' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1212.gif?alt=media&token=ce16a57e-a3bc-49c8-a31a-bbcefca5ca66'>
        <img id='ف187' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1213.gif?alt=media&token=bcbffe78-b2cb-471e-8369-8a52f7da0d4a'>
        <img id='ف188' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1216.gif?alt=media&token=2a52103b-c6c6-4e3d-84e3-854b56f10fcb'>
        <img id='ف189' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1229.gif?alt=media&token=200e5a4a-0961-4417-a19d-40055c98ed5b'>
        <img id='ف190' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1211.gif?alt=media&token=d5589594-5a11-4401-a296-2c3e2cbd2fc5'>
        <img id='ف191' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1209.gif?alt=media&token=9d8df66c-eb22-4220-907f-03c9c5dfcfd2'>
        <img id='ف192' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1219.gif?alt=media&token=9bde0832-c10a-4921-b7b5-b552fa32933a'>
        <img id='ف193' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1208.gif?alt=media&token=2ac73fea-0ecb-431a-8917-f036451caf2b'>
        <img id='ف194' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1206.gif?alt=media&token=bba5df44-56ea-41ec-b22c-bfd547da2061'>
        <img id='ف195' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1222.gif?alt=media&token=0ab69a4f-4785-44e9-a14c-5ff7455cbd32'>
        <img id='ف196' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1226.gif?alt=media&token=08b9e443-cf41-4f53-8201-a6ec54955b45'>
        <img id='ف197' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1230.gif?alt=media&token=f907eeb4-0317-485a-a6f8-325c43e3ba11'>
        <img id='ف198' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1228.gif?alt=media&token=1ed7af7f-f434-40f4-9e71-67581e024424'>
        <img id='ف199' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1225.gif?alt=media&token=9d5a65b5-00d8-4404-99fd-8e7e0b247517'>
        <img id='ف200' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1220.gif?alt=media&token=faabba19-9c01-4129-8b8d-87ac9d6283f0'>
        <img id='ف201' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1217.gif?alt=media&token=d2327248-eb1b-42d7-beac-d171c8945969'>
        <img id='ف202' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1221.gif?alt=media&token=2fb879ba-22e7-43c0-b1f9-7441ce376fa6'>
        <img id='ف203' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1241.gif?alt=media&token=86826cce-007c-4a1c-97a7-1b054ba8d33d'>
        <img id='ف204' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1124.gif?alt=media&token=ef4df657-94b9-493f-b95d-2e55a4410377'>
        <img id='ف205' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1231.gif?alt=media&token=732b4486-0cc0-4b2f-86d4-da39d2be81d0'>
        <img id='ف206' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1233.gif?alt=media&token=0324d981-5bc0-4307-9bbe-69492b208b93'>
        <img id='ف207' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1234.gif?alt=media&token=d9d07709-d7a8-418e-80a3-24618d2c1256'>
        <img id='ف208' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1133.GIF?alt=media&token=106e636f-c79f-4d10-a8a5-1cd579a0b8d2'>
        <img id='ف209' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1136.gif?alt=media&token=93a7b25e-23db-43c9-b0af-389dda305cef'>
        <img id='ف210' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1239.gif?alt=media&token=6b04e675-2644-41b5-a084-64c957c8e1e9'>
        <img id='ف211' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1243.gif?alt=media&token=fcf2bf73-86c7-4600-858c-da01d67e8dac'>
        <img id='ف212' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1238.gif?alt=media&token=4d52610f-e730-4684-9d12-bcf767458ed5'>
        <img id='ف213' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1129.gif?alt=media&token=2beace75-de38-4ba3-b8d4-d8ba68ffca66'>
        <img id='ف214' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1130.gif?alt=media&token=d755154a-6791-4523-913f-811315bfeb0b'>
        <img id='ف215' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1127.gif?alt=media&token=c10df26c-a69d-4e63-b540-1205fc688385'>
        <img id='ف216' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1223.gif?alt=media&token=2aead6f7-a413-459f-984b-b2bd29a68c0f'>
        <img id='ف217' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1235.gif?alt=media&token=5913ab23-56de-4f0b-ae0d-e3766f5051b3'>
        <img id='ف218' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1236.gif?alt=media&token=a0715386-c44f-4c4d-b8ba-7e2fa86dab7a'>
        <img id='ف219' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1237.png?alt=media&token=e343ec84-1775-4629-b5a9-869153ac1a14'>
        <img id='ف220' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1227.gif?alt=media&token=64e25266-cf86-4fd5-8fc2-75a355361bda'>
        <img id='ف221' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1224.gif?alt=media&token=9ad713ec-d3b3-42b7-996e-c474785cab56'>
        <img id='ف222' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1128.gif?alt=media&token=2ee14434-1558-4bac-9bbb-99f8fdb7ca74'>
        <img id='ف223' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1126.gif?alt=media&token=bddc2bae-23a7-436b-8d17-30fd8a54116a'>
        <img id='ف224' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1143.gif?alt=media&token=826eabe6-7da6-4a44-83b9-5b710d14ec41'>
        <img id='ف225' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1240.gif?alt=media&token=ebda50ad-25a1-48ae-b60e-c151286b4182'>
        <img id='ف226' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1114.GIF?alt=media&token=00f8e55c-a156-4900-a9be-0972d51f267b'>
        <img id='ف227' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1232.gif?alt=media&token=6b7dce86-cdaf-4279-b3ef-55249f710765'>
        <img id='ف228' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1244.gif?alt=media&token=71454a37-24fd-4903-8dce-8ebe81b7f2bb'>
        <img id='ف229' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1115.GIF?alt=media&token=6c6a12ea-f19a-4b42-9b5c-74509a1eabbe'>
        <img id='ف230' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1113.gif?alt=media&token=fb1bd951-5bb4-4d6f-964c-c7760dc574de'>
        <img id='ف231' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1123.gif?alt=media&token=6d7e0231-7cb9-4106-a8b3-6130196bfb24'>
        <img id='ف232' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1116.gif?alt=media&token=6c3ffba8-aad3-4864-88d8-3bc27bd0b7bb'>
        <img id='ف233' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g9l5k202101qruP51HDvfG.gif?alt=media&token=8016cb39-4647-46e5-8ea1-96926258b68b'>
        <img id='ف234' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1131.png?alt=media&token=bf47c3a6-4b01-49a9-98ea-d608aa3bad69'>
        <img id='ف235' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1112.gif?alt=media&token=89920de4-448f-4253-9a66-1b959af03609'>
        <img id='ف235' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1132.gif?alt=media&token=d8d8c093-6c30-4f7b-945d-961bdd5e8d88'>
        <img id='ف236' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1242.gif?alt=media&token=e95b4332-53db-461c-aa5c-9ee6c937d32e'>
        <img id='ف237' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1135.gif?alt=media&token=615aca7d-56e5-48a0-8b9a-d83dd4682a5e'>
        <img id='ف238' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1245.gif?alt=media&token=a8304a7c-1343-423c-8ba6-f9b19c7a4302'>
        <img id='ف239' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1138.gif?alt=media&token=1d7fdce5-d075-4677-8462-59face1890dd'>
        <img id='ف240' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1134.gif?alt=media&token=4794e68b-968c-4f6a-8bf4-c6842ee8eca0'>
        <img id='ف241' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1137.gif?alt=media&token=79943726-4679-4662-988d-c119182221ce'>
        <img id='ف242' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1140.gif?alt=media&token=fad50c8d-1489-4955-87c2-2802bf8ff42b'>
        <img id='ف243' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1246.gif?alt=media&token=1d5978ac-cb7b-4817-b101-21d396352d9c'>
        <img id='ف244' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1141.gif?alt=media&token=b8562088-e6b1-409e-89c9-218b46857112'>
        <img id='ف245' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1142.gif?alt=media&token=58bc534e-4fdc-4b11-8290-625d5cfc3512'>
        <img id='ف246' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1139.gif?alt=media&token=6f3a4a3f-0199-467c-a7a8-18b563277dcd'>
        <img id='ف247' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1250.gif?alt=media&token=ee0d7ba5-a6e8-40dc-91d8-e76bd3e9aef8'>
        <img id='ف248' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1255.gif?alt=media&token=6e31965e-57d9-424c-8508-dc7a9b84d6b5'>
        <img id='ف249' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1254.gif?alt=media&token=6decf022-b880-4516-996e-cd1c8746b303'>
        <img id='ف250' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1247.gif?alt=media&token=42f04901-e7e7-4cbc-9d39-b4a33af2dd2d'>
        <img id='ف251' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1249.gif?alt=media&token=f3f606b1-ff78-4347-a52b-350d11af7bd4'>
        <img id='ف252' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1248.gif?alt=media&token=bc974023-a43c-47fe-8369-8d6bc09f4f6c'>
        <img id='ف253' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Flock.png?alt=media&token=c7d582eb-eee5-4015-89ab-60c9442102c2'>
        <img id='ف254' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1253.jpeg?alt=media&token=31be7bd9-4e0f-4b6d-aeb1-41f34420c125'>
        <img id='ف255' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1251.gif?alt=media&token=d76d417d-575d-4a60-b245-1bf919b6fa98'>
        <img id='ف256' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1252.jpeg?alt=media&token=a210e0d7-a35c-492d-be80-36ca53be3eb8'>
        <img id='ف257' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1258.gif?alt=media&token=a5894ca8-28b5-4ec2-804d-2fde55d1012b'>
        <img id='ف258' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1257.gif?alt=media&token=4c640dc4-e15d-4036-987e-78c552656971'>
        <img id='ف259' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fmic.png?alt=media&token=ab2ff817-6eb4-444a-9352-7aed3ec582c6'>
        <img id='ف260' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1117.GIF?alt=media&token=aa775008-e3ec-40be-8cfc-2dbbab7a51be'>
        <img id='ف261' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1fsej9udg10084uPm15qS8i.gif?alt=media&token=5d1936fd-8e0d-4343-be4b-4b8066908947'>
        <img id='ف262' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1256.gif?alt=media&token=e751175d-9055-49cb-8774-ae727dcb4b5e'>
        <img id='ف263' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1120.png?alt=media&token=8b34a257-814e-4b30-ac4a-906852a1fe9b'>
        <img id='ف264' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1122.gif?alt=media&token=f2b650eb-a207-41a8-8c46-17b37c76ff01'>
        <img id='ف265' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1ekb8jor310.gif?alt=media&token=998601dd-dded-4131-a6ea-ccd22751f6e6'>
        <img id='ف266' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1119.gif?alt=media&token=d5ca6eb5-a107-4b2a-acc0-34f7f119ed1b'>
        <img id='ف267' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1118.gif?alt=media&token=1bd42cf4-2b80-4b5b-9cde-b12365bc5336'>
        <img id='ف268' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1burer85r10.gif?alt=media&token=0663946c-c864-4c93-bfd7-f30855f66230'>
        <img id='ف269' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1eioaf9ei10.gif?alt=media&token=dcfb4c68-d2bd-4205-b60f-cf835c8aa972'>
        <img id='ف270' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1bvvmep2j10.png?alt=media&token=75aff95b-ee0d-40ad-aef7-284d40dce820'>
        <img id='ف271' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fs2.png?alt=media&token=22f8b19b-0e8f-4b8b-9920-a666ff24bcee'>
        <img id='ف272' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fw4.png?alt=media&token=ad750e08-8f45-4d54-8419-df4d6502ac5d'>
        <img id='ف273' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1fsh2bfp3100nyXD41z455y.gif?alt=media&token=afc4a076-4ef0-410a-9779-6baecaf3f37c'>
        <img id='ف274' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1125.gif?alt=media&token=4cf87153-76c1-4697-a6d0-9335e841670e'>
        <img id='ف275' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fs1.png?alt=media&token=0397b0fd-a1a7-4865-986b-a09bace7524f'>
        <img id='ف276' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g867kq2r101zPWv91Cje1n.gif?alt=media&token=ec4e39d2-5244-4629-ab32-735e40e234ac'>
        <img id='ف277' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fs3.png?alt=media&token=f34d2b6e-cc22-416a-9a44-d5c24644b7fe'>
        <img id='ف278' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1ft6dpbvp1008XiCK1iSOzG.gif?alt=media&token=efceed8c-85ab-47e2-9e0b-5429940f6028'>
        <img id='ف279' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fpic.png?alt=media&token=b6ed3094-7599-4f0f-a9fb-0d80b47fd433'>
        <img id='ف280' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g7669rls100WKT4j1GHLra.gif?alt=media&token=55919d52-ba26-42b6-a5f3-b338cc226905'>
        <img id='ف281' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fs0.png?alt=media&token=10f9a682-b2c9-47ac-8f46-1b7038029afa'>
        <img id='ف282' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fprv1.png?alt=media&token=aa93c922-4927-4d63-8665-3f158a136c54'>
        <img id='ف283' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fs4.png?alt=media&token=bda5b4fb-6e42-4b04-b52a-c9cab793ecb8'>
        <img id='ف284' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Froom.png?alt=media&token=7ca3caff-53df-4463-87cc-f340a1cb1057'>
        <img id='ف285' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1burdu33110.gif?alt=media&token=375d03b7-fa6b-47a9-ba43-7772c3337561'>
        <img id='ف286' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1121.gif?alt=media&token=eeb06dd0-61ed-4a34-aa6a-bc7922087eb2'>
    `
        upload = false;
    }
})


$(document).on('click', '.emoxemojey img', function () {
    console.log(this.id);
    var val = document.querySelector('.privateV ').value
    document.querySelector('.privateV ').value += " " + this.id
    $('.emoxemojey ').css('display', 'none')
});

function UpdateTheNewVoiceLine(Orderitms) {
    var children = document.querySelectorAll('.cnl');
    console.log(Orderitms);
    // Orderitms = [ Room1:[1, 1,-1,-1,-1] , Room2:[-1, -1, -1, -1, -1], Room3: null ]
    // current Room By default & get the length of the orderitms
    var i = 0;
    var length = Orderitms.length;
    children.forEach((e, index) => {
        if (length > i) {
            if (Orderitms[i].room == Orderitms[i].room && Orderitms[i].channel == e.id) {
                console.log("update db");
                e.innerHTML = `
                <img style='width: 50px;
                margin-top: -5px;
                height: 48px;
                border-radius: 10px;' src="/upload/${Orderitms[i].img}"></img>
                 <p class="user_name_voice" style="position: absolute;
                 position: absolute;
                 top: 35px;
                 z-index: 10000;
                 display: block;
                 background-color: #00000059;
                 border-radius: 4px;
                 color: white;
                 font-size: 14px;
                 font-weight: 100;
                 font-family: s;
                 padding: 0px 12px 0px 5px;
                 ">${Orderitms[i].name}
                </p>
                `
                i++;
            } else {
                e.innerHTML = `
                <img style='width: 50px;
                margin-top: -5px;
                height: 48px;
                border-radius: 10px;' src="/images/mic2.png"></img>
                `
            }
        } else {
            console.log("update none");
            e.innerHTML = `
            <img style='width: 50px;
            margin-top: -5px;
            height: 48px;
            border-radius: 10px;' src="/images/mic2.png"></img>
            `
        }
    });
}
socket.on('updateVoiceLine', docs => {
    console.log(docs);
    UpdateTheNewVoiceLine(docs);
})

const imgData = [
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1016.gif?alt=media&token=ae346feb-1820-4f9c-9a18-375c1d5c3f64 ',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Ffavicon.ico?alt=media&token=a00b5cdf-c93a-40be-a3d6-727ff8a6bc6d',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1003.gif?alt=media&token=869dab72-05e7-4877-a4b0-1ba482fcbff7',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Femoii.gif?alt=media&token=98d50b59-8139-4e4d-82d4-7b5a49afc06c',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1072.gif?alt=media&token=5a91f180-81a6-41eb-8f22-6167bc86d079',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1068.gif?alt=media&token=e1264799-3802-4f03-940b-d3d402881ef4',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1025.gif?alt=media&token=f4f91634-1a11-4fa3-9e07-d5f5822f9653',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1063.gif?alt=media&token=fbb1598e-fc50-413b-9108-109948279960',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1062.gif?alt=media&token=f9b59fa8-4ffe-4bf1-827d-8a5a489c8bd1',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1022.gif?alt=media&token=18060b42-95e5-41ae-a5e7-26950426f6de',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1013.gif?alt=media&token=aec40a69-dd03-4952-aaf5-8eaccaa7d42f',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1066.gif?alt=media&token=59f79f2c-dd38-448d-8c1b-7ad0623294f1',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1021.gif?alt=media&token=3b7b9495-dc4e-486a-83a1-abcd027b1a5b',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1065.gif?alt=media&token=9d4cb722-8764-48c1-8426-ff0e17d748ed',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1017.gif?alt=media&token=4cd0a39c-24c8-4417-b234-022d173d64ea',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1096.gif?alt=media&token=01e304ca-33a9-4e11-bacd-f9f8814488a9',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1073.gif?alt=media&token=baa6c197-b8b3-4ac5-ac65-22451315d995',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1069.gif?alt=media&token=46ee296b-5f7d-4ca8-9141-121bc3a171b6',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1067.gif?alt=media&token=2f0229f9-0296-4304-9e48-484d53c1d538',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1082.gif?alt=media&token=77d0e483-1355-421f-b544-f00a9a85494a',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1094.gif?alt=media&token=63e61835-f003-42ec-b7a0-8b28993ccf0f',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1099.gif?alt=media&token=b4df13c0-bac3-4f8e-8134-0ba42072b659',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1029.gif?alt=media&token=fb888b80-18be-424e-83ba-d901c84b6894',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1039.gif?alt=media&token=a461c138-ebfa-46a7-979d-59109b8e0dca',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Ff11.gif?alt=media&token=dd788395-3d14-41e4-aa70-a7113ce1e236',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1064.jpg?alt=media&token=672c71ef-1d24-4dfc-b614-b87d904ad121',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1036.PNG?alt=media&token=7f3daa09-8c7e-4bcb-9683-c2979f8e313b',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1019.gif?alt=media&token=1846d3c5-0b60-475b-9576-42b035cdb951',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1037.gif?alt=media&token=87ad5ae3-0420-43cf-9f39-c436fa547e5c',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1038.png?alt=media&token=8ec0b402-af46-48af-8a2d-abfb507ae58b',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1034.gif?alt=media&token=9adf28a5-4874-4954-aef9-b8aa83d8b35a',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1026.gif?alt=media&token=40874ae7-a4ce-4498-bd8d-5ce90daeecfe',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1028.gif?alt=media&token=4ce3650d-472b-4d2b-bc60-279aa9de3739',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1046.gif?alt=media&token=c8c0fb03-1b86-40c1-88b4-32d48e55a75b',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1031.gif?alt=media&token=104165a3-7433-45a7-a9f6-da580e1ba354',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1032.gif?alt=media&token=a072b734-7e39-46de-ac34-1eff2b381206',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1027.gif?alt=media&token=db905d80-19cb-46c3-a3b8-a5d9514127d6',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1030.gif?alt=media&token=a36104ae-e9c6-46a4-9a44-46a5d7a9574d',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1035.PNG?alt=media&token=355e7fe9-00fd-4496-babb-1c1ed6b16a3b',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1048.gif?alt=media&token=f8923361-44bd-49ac-88cf-ecc857b9903b',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1157.gif?alt=media&token=20ec2fc8-efa5-4a93-9608-a7481055878b',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1156.gif?alt=media&token=7801f0b5-11ab-468a-a0e7-ae9b8a75fa57',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1161.gif?alt=media&token=2776e2fa-c0aa-4c49-8e18-d04fa20f6dbe',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1147.gif?alt=media&token=fc5691c2-e8f6-4383-aa82-767162f81630',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1150.GIF?alt=media&token=f141130a-9370-46a8-b0e2-657661daa19a',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1162.gif?alt=media&token=c1ab991e-89f9-47a8-b8cb-a2c029c90767',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1144.gif?alt=media&token=8f77faf8-7103-4e1b-b7d2-4cd5690a633e',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g9ing6rf101n9zr1nXqbL.gif?alt=media&token=93876128-3165-4247-be30-ccf958504523',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g98hs239101S59Tq0quHav-jpeg.png?alt=media&token=f82b8667-f422-4ee1-b308-addd73de3a44',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1149.gif?alt=media&token=a04407a0-5b05-4fec-af30-0f7ade2224f7',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1000.gif?alt=media&token=30701255-e4ab-4769-ab15-df8c2c9fe061',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1012.gif?alt=media&token=599522e4-4899-4748-97a0-1ea3d04077ab',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1181.gif?alt=media&token=cc49186c-1805-4e81-8e79-14d2eff078af',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1170.gif?alt=media&token=8060721a-1f65-46cb-9441-7f0c748aeb5c',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1007.gif?alt=media&token=55bf3de7-d83b-4093-ad7e-da34f4dd5f52',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1004.gif?alt=media&token=9120b649-1778-4549-a242-8174258db0f5',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1184.gif?alt=media&token=29300d59-f4e9-4868-8377-57fc4cc81aaa',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1033.gif?alt=media&token=c9be27a6-2bed-4fa4-8aaf-6b64adabb6e9',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1210.gif?alt=media&token=915af090-2f29-4f0f-a258-ef8abb9680a4',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1040.gif?alt=media&token=2f9bb53b-3c00-4065-b894-74b5abae3673',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1041.gif?alt=media&token=c4065c91-9482-4945-9536-7619c0b99c01',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1055.gif?alt=media&token=07efe569-4793-48fd-ac75-acc9d78e2224',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1097.gif?alt=media&token=29f54bbc-a35f-4784-ae65-4a9a10a1311e',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1090.gif?alt=media&token=d47c8f93-e343-410c-9534-83061501510f',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1109.gif?alt=media&token=d7ab2188-b811-47a7-968b-8575cf843377',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1103.gif?alt=media&token=536925ca-edca-4055-a7a8-7c11cb155152',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1060.gif?alt=media&token=0c075e29-a271-497f-83fd-221d9d82cabb',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1051.gif?alt=media&token=3fa6c462-3ce1-441d-8304-7bb0e385dcd8',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1047.gif?alt=media&token=7d0a7d82-df23-48f6-b960-0dd440d30cb8',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1104.gif?alt=media&token=97b2df6c-4b06-481d-b671-f434e161b0c3',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1045.gif?alt=media&token=3fab049d-1cc7-4e80-b855-fe194e88b31f',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1059.gif?alt=media&token=df053139-4138-4269-8ef0-d6d2012b23e1',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1052.gif?alt=media&token=c9990154-6558-4ab9-b115-7d30c040ee2b',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1081.gif?alt=media&token=8a9703bb-31f5-4b75-aa46-426c243a51b6',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1075.gif?alt=media&token=e0bdfdf8-058e-451d-a35e-e1bf14722aa9',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1088.png?alt=media&token=f804182c-ec48-4986-ab96-7ba76af83dc6',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1042.gif?alt=media&token=28fc9505-7c1a-4b26-89fe-b6ce1d8b3456',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1044.gif?alt=media&token=a213e402-cc9e-4dd1-a54d-c60efc397b1d',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1185.gif?alt=media&token=90221d94-3e06-4b07-87db-4b8f853d97c0',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1077.gif?alt=media&token=a33356a4-ecd6-484e-af47-4cf8ff0cab46',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1061.gif?alt=media&token=419341f4-cfbf-45db-b8a3-f2cf6c1c975b',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1093.gif?alt=media&token=55764ba4-03b2-4f57-bfdb-bfc39970a3be',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1100.gif?alt=media&token=57a47bf8-004d-4e04-980c-438d78acee68',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1095.gif?alt=media&token=ca2fa359-e18a-4f01-8274-d2f284188efb',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1053.gif?alt=media&token=2df6d8bf-f3b3-4ffe-948f-25cb92e949ed',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1083.gif?alt=media&token=1b157fc1-5b94-4f20-871d-13473696f7fe',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1076.gif?alt=media&token=edad482d-a4f4-41c6-aad2-3b9ea117c4da',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1054.gif?alt=media&token=09164f20-a1c0-463a-b2ae-43f77d3a3192',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1085.gif?alt=media&token=d789f5ba-3171-4e7d-a072-35ff7b88bf67',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1043.gif?alt=media&token=6462981e-e979-4f5a-a994-51ec6164080d',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1092.GIF?alt=media&token=065753b6-4388-4964-a8b9-49d2bf02188b',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1080.gif?alt=media&token=7614ead6-aad8-4a8c-b16f-8df485e1c083',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1087.gif?alt=media&token=26391c70-cd8d-40f6-80c0-a082dfbfa79c',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1058.gif?alt=media&token=33912252-7ce4-4ace-9629-5a58ea971478',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1049.gif?alt=media&token=6f349477-2a78-4bd0-bf20-a56becd9a0df',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1201.gif?alt=media&token=cbd760e2-8088-4220-8e85-03c8bd89e210',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1071.gif?alt=media&token=f0ed6cd7-154a-4475-a8e0-b71da836fce5',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1084.gif?alt=media&token=35c2bb4f-59d9-4986-8ed7-3267ccaadc15',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1056.gif?alt=media&token=adff4202-8276-4262-a3ca-22afd58b11c3',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1057.gif?alt=media&token=69f9b01a-0003-46db-9839-fa8eba5a11c9',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1091.gif?alt=media&token=8ec243d6-5fed-4168-abd4-375cf19ee286',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1101.gif?alt=media&token=7a7664ef-79fd-45f6-973e-3fe01a381d0b',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1098.gif?alt=media&token=3fcc5147-76c5-4a22-bb10-4b3be83e5297',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1078.png?alt=media&token=f20cd68d-2b99-4007-bd20-222dcfca8db1',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1050.gif?alt=media&token=d1b18fca-b03a-48ac-81c0-067a68684068',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1074.gif?alt=media&token=2f0fca4d-ebd1-4b1b-8320-1dbffa823384',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1086.gif?alt=media&token=dc6e5342-5d44-4d98-97b2-c72c69dc4d42',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1079.gif?alt=media&token=10005923-b62b-46d5-93f9-35026f46b1c4',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1089.gif?alt=media&token=56bbec41-97ce-4e79-a774-5dfae3b0bf7f',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1190.gif?alt=media&token=bd425190-200e-4216-9509-6091e31e9a72',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1111.gif?alt=media&token=65db9201-3d09-4613-8d26-17a06a4f714d',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1102.png?alt=media&token=472a357d-e91a-43a3-b672-1dae4806e5fb',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1110.gif?alt=media&token=9965c614-53c4-469a-bb8c-3cf5c780b84c',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1106.gif?alt=media&token=07ea1c7b-d869-4477-9ae7-aac33ca6bc1f',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1108.gif?alt=media&token=46b670ba-bc3a-4cae-9466-03f17c3f5f7d',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1105.gif?alt=media&token=36481ce8-0b19-4db8-a07f-76914648945a',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1070.gif?alt=media&token=82c7d2d0-c8b7-4227-961f-147ca38b06c3',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1107.gif?alt=media&token=6e605a30-16f5-4a85-95db-2312f8e1f073',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g9dtth481001abuD1DaCPG.gif?alt=media&token=48baf5dd-adfe-4d59-ab83-94e03a9f9df0',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1193.gif?alt=media&token=219e968b-2d09-4012-be07-7d7e364f4311',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1009.gif?alt=media&token=f9b2dd4f-8962-4334-a43f-99b16e64b71f',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1196.gif?alt=media&token=41661f44-97e2-4923-ad20-f36e5c52f460',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g9dtro7b100vuWSf0eivXG.gif?alt=media&token=f9ba54d6-c77e-4cf8-a376-912644491614',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1194.gif?alt=media&token=d89a4b2c-73e6-423d-b63d-65bac755d40b',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1023.gif?alt=media&token=a7c83ef4-c685-4e75-96ec-dda8d7e0a926',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1200.gif?alt=media&token=63a860ed-e417-437d-89c0-4ba26bba9479',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1145.gif?alt=media&token=2d5a3fcc-b09b-47fd-b3f0-886d58e33de7',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1191.gif?alt=media&token=9be1db13-8c66-43f3-bcbd-4772ea367a5b',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g925s5cr100jHuPG1OGHaW.gif?alt=media&token=d0a527b8-dcb6-4d56-a0c2-2aa465ee23e6',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1199.gif?alt=media&token=3032e63a-2c21-4edf-b029-7df3488cc51e',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1197.gif?alt=media&token=868f78b8-527f-4588-9fb6-3b737afe70e4',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1202.gif?alt=media&token=a454dc46-e99b-46fb-ac48-534fe9e8a2ce',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1198.gif?alt=media&token=c5ea9166-376f-4d80-a14d-c03b4452410e',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1155.gif?alt=media&token=d095b024-cc85-40bd-8d06-3dacddd35746',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g9dtu1og100yybL00rTzP9.gif?alt=media&token=d5c40bec-4a94-4fb7-9252-0f1a3f4ccac2',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1192.gif?alt=media&token=973f91b2-7f3a-433e-9a23-8524db10b893',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g9dttqu1101P04901DmTqW.gif?alt=media&token=a9391bb5-c536-4196-8029-cdb1827212bc',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1188.gif?alt=media&token=1b7ffe82-b8b6-46e5-b820-8eaa714b5c99',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g98rnjr71010vjbn141Xv4.gif?alt=media&token=2c1a3670-d0ba-469b-b5ec-46c31eacce86',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1218.gif?alt=media&token=00b4b39e-3b2e-4c33-8c8b-b28c1d91b451',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1152.gif?alt=media&token=7fe0962e-5593-43f5-a746-5d3b5b5f5c20',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1165.gif?alt=media&token=8592b4c7-8c44-4156-8656-7a3436040609',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1024.gif?alt=media&token=d56bc95c-c89e-44d1-bf7a-372fcb45679c',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1189.jpeg?alt=media&token=3425844a-1ed6-4629-a892-bf08448bf98d',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1183.gif?alt=media&token=10f0b21c-84a9-459e-a2f8-327941e271d1',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1173.gif?alt=media&token=36478647-f6f2-431a-90f2-028cb7ad6fff',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1020.gif?alt=media&token=d3f7231c-616b-4d5d-a7ab-a4fcaaceccc3',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1182.gif?alt=media&token=c247fb67-2d95-42d8-8271-3740430a081c',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1207.gif?alt=media&token=abccf933-bfbd-4252-a030-35e784841ad8',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1002.gif?alt=media&token=8e795ca1-988f-4dec-9718-152beea7bd60',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1014.gif?alt=media&token=625e7d6a-873d-49e7-a62a-80979a4fb5f2',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1172.gif?alt=media&token=c5a23eac-7c34-4bf1-a45d-c71fe2770aab',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1175.gif?alt=media&token=6e88096a-6626-4ac7-a165-a7d8d28d69ec',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1176.gif?alt=media&token=6d1ed29b-243c-43a7-8f9c-fd92ded546db',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1168.gif?alt=media&token=51d1192d-2476-4981-8135-3b2d69254b50',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1018.gif?alt=media&token=c0a90569-ddf9-490b-886b-2a951e078071',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1177.gif?alt=media&token=fae4e642-670f-4e67-a24f-4665df02116b',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1171.gif?alt=media&token=f6d0449e-e37a-4815-9fb4-84e3058022aa',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1006.gif?alt=media&token=e72e8934-b4cb-4c26-bfaf-ab7d2f4bc4d3',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1160.gif?alt=media&token=14fb2439-966a-49e7-9cbe-092b42b377a7',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1148.gif?alt=media&token=40ef54be-ea78-41d7-a16f-e9c1bfff66ea',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1146.gif?alt=media&token=30a4d145-22ad-40ca-becd-4c2e047df211',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1159.png?alt=media&token=0e0b0d93-6cc0-4aa8-b04a-d112e4b0ed43',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1158.gif?alt=media&token=d858ba74-fd5e-4737-bab0-e95808aaffb4',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1163.gif?alt=media&token=b7758623-5a34-4bd1-b354-292ca82f70c4',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1195.gif?alt=media&token=d901d6e7-c447-4d9a-9397-4d50b3c34dd1',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1153.gif?alt=media&token=10e8ecb5-e538-4d08-ae73-74383ce99ff1',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g98rqotj101qrayez90bb.gif?alt=media&token=f9ca2989-3b14-4270-b253-914af6e2ab5b',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1151.gif?alt=media&token=b8069caf-1162-43b6-b153-a999d5895939',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1164.gif?alt=media&token=035444d0-c5c3-4fb6-8dee-0cf84ea3bd1c',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1154.png?alt=media&token=db6b1c8e-57de-455a-a790-080b4bb57fda',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1010.gif?alt=media&token=d4f7c044-c224-4b7a-a5e2-7a826488feba',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1167.gif?alt=media&token=66d2b92c-9094-4798-9233-4857e8b1854e',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1005.gif?alt=media&token=a35f30d9-19f9-40a0-ab67-aec34a2f8e47',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1203.png?alt=media&token=d5db4d61-3861-4a1c-b45b-cdc532dd1521',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1011.gif?alt=media&token=301b10af-fd36-4739-ba01-b26c20e6c2e2',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1001.gif?alt=media&token=1f83d978-36e0-423b-94b1-a12fac49faa5',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1179.gif?alt=media&token=4ebc19de-0151-4c0b-88c5-d37d2eef60e8',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1015.bmp?alt=media&token=3bb5b398-22b2-4a5e-9698-062beb935c53',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1205.gif?alt=media&token=79c2a903-579c-4b1d-8625-8713b81f0842',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1178.gif?alt=media&token=abbc294b-970f-42b5-9c9f-ab3fb2dfd923',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1166.gif?alt=media&token=29e0906b-103a-43ca-a4f5-5cafeec5bb0d',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1174.gif?alt=media&token=c42c9469-1bc1-480b-814b-f0a97dae7148',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1169.gif?alt=media&token=66b3dc76-cf9d-4e59-9ecf-9eaf7385e15f',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fkings.gif?alt=media&token=fa453121-63b7-4197-b992-6731d32f67fb',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1204.gif?alt=media&token=c09e7ea4-2dae-4b89-b718-4606cf98c04f',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1187.gif?alt=media&token=612f9822-ffb9-4af4-bc43-16c9e6ba8203',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1180.gif?alt=media&token=69899543-3e1d-4d57-b40d-c7eb19042b08',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1186.gif?alt=media&token=b33cf140-40ed-4c8a-ac93-8c191a79226c',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1215.gif?alt=media&token=6e18ce74-8a1c-482f-9f33-3c9c7a99de3f',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1008.gif?alt=media&token=ea41f45c-acd5-48d8-a46c-b3f7983aef50',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1ft0vc2g6101yP4u01Xaf4C.gif?alt=media&token=dfecb76d-6ca4-4984-9609-ea9834ec2690',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1214.gif?alt=media&token=407ad537-9729-4b99-a906-8f7a0256ce6e',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1212.gif?alt=media&token=ce16a57e-a3bc-49c8-a31a-bbcefca5ca66',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1213.gif?alt=media&token=bcbffe78-b2cb-471e-8369-8a52f7da0d4a',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1216.gif?alt=media&token=2a52103b-c6c6-4e3d-84e3-854b56f10fcb',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1229.gif?alt=media&token=200e5a4a-0961-4417-a19d-40055c98ed5b',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1211.gif?alt=media&token=d5589594-5a11-4401-a296-2c3e2cbd2fc5',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1209.gif?alt=media&token=9d8df66c-eb22-4220-907f-03c9c5dfcfd2',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1219.gif?alt=media&token=9bde0832-c10a-4921-b7b5-b552fa32933a',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1208.gif?alt=media&token=2ac73fea-0ecb-431a-8917-f036451caf2b',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1206.gif?alt=media&token=bba5df44-56ea-41ec-b22c-bfd547da2061',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1222.gif?alt=media&token=0ab69a4f-4785-44e9-a14c-5ff7455cbd32',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1226.gif?alt=media&token=08b9e443-cf41-4f53-8201-a6ec54955b45',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1230.gif?alt=media&token=f907eeb4-0317-485a-a6f8-325c43e3ba11',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1228.gif?alt=media&token=1ed7af7f-f434-40f4-9e71-67581e024424',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1225.gif?alt=media&token=9d5a65b5-00d8-4404-99fd-8e7e0b247517',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1220.gif?alt=media&token=faabba19-9c01-4129-8b8d-87ac9d6283f0',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1217.gif?alt=media&token=d2327248-eb1b-42d7-beac-d171c8945969',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1221.gif?alt=media&token=2fb879ba-22e7-43c0-b1f9-7441ce376fa6',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1241.gif?alt=media&token=86826cce-007c-4a1c-97a7-1b054ba8d33d',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1124.gif?alt=media&token=ef4df657-94b9-493f-b95d-2e55a4410377',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1231.gif?alt=media&token=732b4486-0cc0-4b2f-86d4-da39d2be81d0',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1233.gif?alt=media&token=0324d981-5bc0-4307-9bbe-69492b208b93',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1234.gif?alt=media&token=d9d07709-d7a8-418e-80a3-24618d2c1256',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1133.GIF?alt=media&token=106e636f-c79f-4d10-a8a5-1cd579a0b8d2',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1136.gif?alt=media&token=93a7b25e-23db-43c9-b0af-389dda305cef',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1239.gif?alt=media&token=6b04e675-2644-41b5-a084-64c957c8e1e9',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1243.gif?alt=media&token=fcf2bf73-86c7-4600-858c-da01d67e8dac',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1238.gif?alt=media&token=4d52610f-e730-4684-9d12-bcf767458ed5',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1129.gif?alt=media&token=2beace75-de38-4ba3-b8d4-d8ba68ffca66',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1130.gif?alt=media&token=d755154a-6791-4523-913f-811315bfeb0b',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1127.gif?alt=media&token=c10df26c-a69d-4e63-b540-1205fc688385',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1223.gif?alt=media&token=2aead6f7-a413-459f-984b-b2bd29a68c0f',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1235.gif?alt=media&token=5913ab23-56de-4f0b-ae0d-e3766f5051b3',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1236.gif?alt=media&token=a0715386-c44f-4c4d-b8ba-7e2fa86dab7a',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1237.png?alt=media&token=e343ec84-1775-4629-b5a9-869153ac1a14',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1227.gif?alt=media&token=64e25266-cf86-4fd5-8fc2-75a355361bda',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1224.gif?alt=media&token=9ad713ec-d3b3-42b7-996e-c474785cab56',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1128.gif?alt=media&token=2ee14434-1558-4bac-9bbb-99f8fdb7ca74',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1126.gif?alt=media&token=bddc2bae-23a7-436b-8d17-30fd8a54116a',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1143.gif?alt=media&token=826eabe6-7da6-4a44-83b9-5b710d14ec41',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1240.gif?alt=media&token=ebda50ad-25a1-48ae-b60e-c151286b4182',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1114.GIF?alt=media&token=00f8e55c-a156-4900-a9be-0972d51f267b',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1232.gif?alt=media&token=6b7dce86-cdaf-4279-b3ef-55249f710765',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1244.gif?alt=media&token=71454a37-24fd-4903-8dce-8ebe81b7f2bb',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1115.GIF?alt=media&token=6c6a12ea-f19a-4b42-9b5c-74509a1eabbe',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1113.gif?alt=media&token=fb1bd951-5bb4-4d6f-964c-c7760dc574de',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1123.gif?alt=media&token=6d7e0231-7cb9-4106-a8b3-6130196bfb24',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1116.gif?alt=media&token=6c3ffba8-aad3-4864-88d8-3bc27bd0b7bb',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g9l5k202101qruP51HDvfG.gif?alt=media&token=8016cb39-4647-46e5-8ea1-96926258b68b',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1131.png?alt=media&token=bf47c3a6-4b01-49a9-98ea-d608aa3bad69',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1112.gif?alt=media&token=89920de4-448f-4253-9a66-1b959af03609',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1132.gif?alt=media&token=d8d8c093-6c30-4f7b-945d-961bdd5e8d88',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1242.gif?alt=media&token=e95b4332-53db-461c-aa5c-9ee6c937d32e',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1135.gif?alt=media&token=615aca7d-56e5-48a0-8b9a-d83dd4682a5e',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1245.gif?alt=media&token=a8304a7c-1343-423c-8ba6-f9b19c7a4302',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1138.gif?alt=media&token=1d7fdce5-d075-4677-8462-59face1890dd',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1134.gif?alt=media&token=4794e68b-968c-4f6a-8bf4-c6842ee8eca0',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1137.gif?alt=media&token=79943726-4679-4662-988d-c119182221ce',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1140.gif?alt=media&token=fad50c8d-1489-4955-87c2-2802bf8ff42b',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1246.gif?alt=media&token=1d5978ac-cb7b-4817-b101-21d396352d9c',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1141.gif?alt=media&token=b8562088-e6b1-409e-89c9-218b46857112',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1142.gif?alt=media&token=58bc534e-4fdc-4b11-8290-625d5cfc3512',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1139.gif?alt=media&token=6f3a4a3f-0199-467c-a7a8-18b563277dcd',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1250.gif?alt=media&token=ee0d7ba5-a6e8-40dc-91d8-e76bd3e9aef8',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1255.gif?alt=media&token=6e31965e-57d9-424c-8508-dc7a9b84d6b5',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1254.gif?alt=media&token=6decf022-b880-4516-996e-cd1c8746b303',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1247.gif?alt=media&token=42f04901-e7e7-4cbc-9d39-b4a33af2dd2d',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1249.gif?alt=media&token=f3f606b1-ff78-4347-a52b-350d11af7bd4',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1248.gif?alt=media&token=bc974023-a43c-47fe-8369-8d6bc09f4f6c',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Flock.png?alt=media&token=c7d582eb-eee5-4015-89ab-60c9442102c2',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1253.jpeg?alt=media&token=31be7bd9-4e0f-4b6d-aeb1-41f34420c125',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1251.gif?alt=media&token=d76d417d-575d-4a60-b245-1bf919b6fa98',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1252.jpeg?alt=media&token=a210e0d7-a35c-492d-be80-36ca53be3eb8',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1258.gif?alt=media&token=a5894ca8-28b5-4ec2-804d-2fde55d1012b',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1257.gif?alt=media&token=4c640dc4-e15d-4036-987e-78c552656971',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fmic.png?alt=media&token=ab2ff817-6eb4-444a-9352-7aed3ec582c6',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1117.GIF?alt=media&token=aa775008-e3ec-40be-8cfc-2dbbab7a51be',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1fsej9udg10084uPm15qS8i.gif?alt=media&token=5d1936fd-8e0d-4343-be4b-4b8066908947',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1256.gif?alt=media&token=e751175d-9055-49cb-8774-ae727dcb4b5e',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1120.png?alt=media&token=8b34a257-814e-4b30-ac4a-906852a1fe9b',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1122.gif?alt=media&token=f2b650eb-a207-41a8-8c46-17b37c76ff01',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1ekb8jor310.gif?alt=media&token=998601dd-dded-4131-a6ea-ccd22751f6e6',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1119.gif?alt=media&token=d5ca6eb5-a107-4b2a-acc0-34f7f119ed1b',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1118.gif?alt=media&token=1bd42cf4-2b80-4b5b-9cde-b12365bc5336',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1burer85r10.gif?alt=media&token=0663946c-c864-4c93-bfd7-f30855f66230',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1eioaf9ei10.gif?alt=media&token=dcfb4c68-d2bd-4205-b60f-cf835c8aa972',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1bvvmep2j10.png?alt=media&token=75aff95b-ee0d-40ad-aef7-284d40dce820',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fs2.png?alt=media&token=22f8b19b-0e8f-4b8b-9920-a666ff24bcee',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fw4.png?alt=media&token=ad750e08-8f45-4d54-8419-df4d6502ac5d',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1fsh2bfp3100nyXD41z455y.gif?alt=media&token=afc4a076-4ef0-410a-9779-6baecaf3f37c',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1125.gif?alt=media&token=4cf87153-76c1-4697-a6d0-9335e841670e',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fs1.png?alt=media&token=0397b0fd-a1a7-4865-986b-a09bace7524f',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g867kq2r101zPWv91Cje1n.gif?alt=media&token=ec4e39d2-5244-4629-ab32-735e40e234ac',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fs3.png?alt=media&token=f34d2b6e-cc22-416a-9a44-d5c24644b7fe',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1ft6dpbvp1008XiCK1iSOzG.gif?alt=media&token=efceed8c-85ab-47e2-9e0b-5429940f6028',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fpic.png?alt=media&token=b6ed3094-7599-4f0f-a9fb-0d80b47fd433',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g7669rls100WKT4j1GHLra.gif?alt=media&token=55919d52-ba26-42b6-a5f3-b338cc226905',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fs0.png?alt=media&token=10f9a682-b2c9-47ac-8f46-1b7038029afa',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fprv1.png?alt=media&token=aa93c922-4927-4d63-8665-3f158a136c54',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fs4.png?alt=media&token=bda5b4fb-6e42-4b04-b52a-c9cab793ecb8',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Froom.png?alt=media&token=7ca3caff-53df-4463-87cc-f340a1cb1057',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1burdu33110.gif?alt=media&token=375d03b7-fa6b-47a9-ba43-7772c3337561',
    'https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1121.gif?alt=media&token=eeb06dd0-61ed-4a34-aa6a-bc7922087eb2',
]

var isJoin = [false]
socket.on('isJoin', (s) => {
    isJoin[0] = true;
    // $('.display-voice').css('display' , 'none');
    // $('.message-chat').css('height' , '88vh')
})

$(window).on('beforeunload', function () {
    socket.close();
});
const Emojey = []

socket.emit('joinBrow', '');
var back = true;

const userData = []
socket.on('storeData', ({ name, id, nikename, img, bio,
    countryImg, currentRoom, countryName, fontColor, nameColor, nameBackground }) => {
    var obj = {
        name: name, id: id, nikename: nikename, img: img, bio: bio, countryImg: countryImg,
        currentRoom: currentRoom, countryName: countryName, fontcolor: fontColor, namecolor: nameColor,
        namebg: nameBackground, voice: -1, channelN: -1
    }
    userData.push(obj)
    start = true;
    getChatLine()
});



socket.on("users", (n) => {
    card1.innerHTML = `<i class="ae fa label label-primary fa-user"></i>${n}`;
});

$(document).on('click', '.close', function () {
    $('.stats').css('display', 'none');
    $(".replay-hanit").css('display', 'none');
})


/* $(document).on("click", ".getIdPmPrime", function () {
    $('stats').css('display' , 'none')
    socket.emit("privateid", { id: this.id });
    var name = $(this).attr('name');
    console.log("nammmmm " + name);
    for (var i = 0; i < dpname.length; i++) {
        if (dpname[i] == name) {
            console.log("Match");
            nbmsg -= 1
        }
    }
    if (nbmsg < 0) {
        nbmsg = 0
    }
    if (nbmsg == 0) {
        $('.prv2').css('color', 'white')
        $('.prv2').html(`الخاص<i class="ae fa label label-primary fa-commenting"></i>`)
    }
    $('.prv2').html(`الخاص${nbmsg}<i class="ae fa label label-primary fa-commenting"></i>`)
    const div = document.createElement('div');
    var id = this.id
    const profile = document.querySelector('.profile');
    profile.style.display = "none";
    socket.emit('getChat', id);
    socket.on('resChat', ({ docs, name, socket , img }) => {
        var div = document.createElement('div');

        messanger.innerHTML = `
        <div class="messanger-header" id="${socket}" value="${socket}" name="${name}">
        <div class="messanger-infos">
        <div class="image-m">
            <img style="width: 20px;" src="/upload/${img}" alt="" srcset="">
        </div>
        <div class="name-m">${name}</div>
        </div>
        <div class="messanger-infos">
        <div class="more-messanger">
            <i class="btn-info fr border fa fa-expand"></i>
        </div>
        <div class="remove">
            <i class="minix btn-danger phide fr border fa fa-minus"></i>
        </div>
        </div>
        </div>
        <div class="messanger-msg-text" id='${id}' style="overflow-y:auto;">
        </div>
        <div class="typing">
            <div class="circl circl1" ></div>
            <div class="circl circl2" ></div>
            <div class="circl circl3" ></div>
        </div>
        <div class="emoxemojey" >
           
        </div>
        <div class="messanger-send-actions vv">
            <span class="btn-success fa fa-phone callx" style="margin-right:3px;margin-top:2px;border-radius: 2px;"></span>
            <label style="margin-right:3px;margin-top:2px;border-radius: 2px;width: 35px;
            height: 30px;
            padding: 5px 0px;
            text-align: center;background-color: #b31f30;
            color: white;" for="${name}"><i class="fr fa fa-share-alt sndfile fl btn btn-primary"></i></label>
            <input  value="${name}" id="${name}" name="${id}" type="file" style="margin-right:-34px;width:0px;margin-top:2px;border-radius: 2px;;position:relative;right:17px;" title="" class="fr fa fa-share-alt sndfile fl btn-primary" />&nbsp;&nbsp;&nbsp;&nbsp;
            <img role="button" class="fl nosel emobox2 khadmplease" style="padding:5px;width:34px;height: 34px;" src="/images/icons.gif"> 
            <input id="${name}" name="${id}" class="privateV keypressEn" type="text" placeholder="أكتب رسالة هنا"> 
            <button value="${name}" id="${name}" name="${id}" class="sendPmsg"><i class="fa fa-send sndpm fl btn btn-primary"></i></button>
        </div>
    `;
        for (var i = 0; i < docs.length; i++) {
            var time = Math.floor(docs[i].timen / 60);
            console.log(time);
            div.innerHTML += `
                <div>
                <div class="massanger-msg">
                <div class="img-messanger">
                    <img style="width: 52px;
                    border-radius: 4px;
                    height: 48px;" src="/upload/${docs[i].img}" alt="">
                </div>
                <div class="mgs-info-messanger">
                    <div class="messanger-name">${docs[i].user1}</div>
                    <div class="messanger-text">${docs[i].msg}</div>
                </div><span style="
                position: relative;
                font-weight: 600;
                opacity: 0.5;
                position: relative;
                top: 1px; 
                " class="time1582 time-welcome">
                    ${Math.floor((docs[i].timen / 60) / 60)}د
                </span>
                </div>
                </div>
            `;
        }
        document.querySelector('.messanger-msg-text').innerHTML = '';
        document.querySelector('.messanger-msg-text').append(div);
        messanger.style.display = "block";
        profile.style.dispaly = "none"; 
        document.querySelector('.private-stats').style.display = "none";
    })
});
 */

$(document).on("click", ".private-msg", function () {
    $('stats').css('display', 'none')
    // socket.emit("privateid", { id: this.id });
    var name = $(this).attr('name');
    // for nofifications controls
    for (var i = 0; i < dpname.length; i++) {
        if (dpname[i] == name) {
            console.log("Match");
            nbmsg -= 1
        }
    }
    if (nbmsg < 0) {
        nbmsg = 0
    }
    $('.prv2').html(`الخاص${nbmsg}<i class="ae fa label label-primary fa-commenting"></i>`)
    if (nbmsg == 0) {
        $('.prv2').css('color', 'white')
        $('.prv2').html(`الخاص<i class="ae fa label label-primary fa-commenting"></i>`)
    }

    const div = document.createElement('div');
    var id = this.id
    const profile = document.querySelector('.profile');
    profile.style.display = "none";
    socket.emit('getChatP', id);
    socket.on('resChatP', ({ docs, name, socket, img, id }) => {
        var div = document.createElement('div');

        messanger.innerHTML = `
        <div class="messanger-header" id="${id}" value="${id}" name="${name}">
        <div class="messanger-infos">
        <div class="image-m">
            <img style="width: 20px;" src="/upload/${img}" alt="" srcset="">
        </div>
        <div class="name-m">${name}</div>
        </div>
        <div class="messanger-infos">
        <div class="more-messanger">
            <i class="btn-info fr border fa fa-expand"></i>
        </div>
        <div class="remove">
            <i class="minix btn-danger phide fr border fa fa-minus"></i>
        </div>
        </div>
        </div>

        <div class="messanger-msg-text" id='${id}' style="overflow-y:auto;">
        <div class="messanger-msg-text-new" style="overflow-y:auto;">
            
        </div>
        </div>
        
        <div class="typing">
            <div class="circl circl1" ></div>
            <div class="circl circl2" ></div>
            <div class="circl circl3" ></div>
        </div>
        <div class="emoxemojey x1">
           
        </div>
        <div class="messanger-send-actions vv">
            <span id="${id}" class="btn-success fa fa-phone callx makeCall" style="margin-right:3px;margin-top:2px;border-radius: 2px;"></span>
            <label style="margin-right:3px;margin-top:2px;border-radius: 2px;width: 35px;
            height: 30px;
            padding: 5px 0px;
            text-align: center;background-color: #b31f30;
            color: white;" for="${name}"><i class="fr fa fa-share-alt sndfile fl btn btn-primary"></i></label>
            <input  value="${name}" id="${name}" name="${id}" type="file" style="margin-right:-34px;width:0px;margin-top:2px;border-radius: 2px;;position:relative;right:17px;" title="" class="fr fa fa-share-alt sndfile fl btn-primary" />&nbsp;&nbsp;&nbsp;&nbsp;
            <img role="button" class="fl nosel emobox2 khadmplease" style="padding:5px;width:34px;height: 34px;" src="/images/icons.gif"> 
            <input id="${name}" name="${id}" class="privateV keypressEn" type="text" placeholder="أكتب رسالة هنا"> 
            <button value="${name}" id="${name}" name="${id}" class="sendPmsg"><i class="fa fa-send sndpm fl  btn-primary"></i></button>
        </div>
    `;
        for (var i = 0; i < docs.length; i++) {
            var time = Math.floor(docs[i].timen / 60);
            console.log(time);
            div.innerHTML += `
                <div>
                <div class="massanger-msg">
                <div class="img-messanger">
                    <img style="width: 52px;
                    border-radius: 4px;
                    height: 48px;" src="/upload/${docs[i].img}" alt="">
                </div>
                <div class="mgs-info-messanger">
                    <div class="messanger-name">${docs[i].user1}</div>
                    <div class="messanger-text">${docs[i].msg}</div>
                </div><span style="
                position: relative;
                font-weight: 600;
                opacity: 0.5;
                position: relative;
                top: 1px; 
                " class="time1582 time-welcome">
                    ${Math.floor((docs[i].timen / 60) / 60)}د
                </span>
                </div>
                </div>
            `;
        }
        document.querySelector('.messanger-msg-text').innerHTML = '';
        document.querySelector('.messanger-msg-text').append(div);
        messanger.setAttribute('id', id)
        messanger.style.display = "block";
        profile.style.dispaly = "none";
        document.querySelector('.private-stats').style.display = "none";
    })
});

socket.on('resChatUP', ({ docs, name, socket, img, id }) => {
    var div = document.createElement('div');
    messanger.innerHTML = `
    <div class="messanger-header" id="${socket}" value="${socket}" name="${name}">
        <div class="messanger-infos">
            <div class="image-m">
                <img style="width: 20px;" src="/upload/${img}" alt="" srcset="">
            </div>
            <div class="name-m">${name}</div>
        </div>
        <div class="messanger-infos">
            <div class="more-messanger">
                <i class="btn-info fr border fa fa-expand"></i>
            </div>
            <div class="remove">
                <i class="minix btn-danger phide fr border fa fa-minus"></i>
            </div>
        </div>
    </div>

    <div class="messanger-msg-text" id='${id}' style="overflow-y:auto;">
    <div class="messanger-msg-text-new" style="overflow-y:auto;">
            
            </div>
    </div>

    <div class="typing">
        <div class="circl circl1" ></div>
        <div class="circl circl2" ></div>
        <div class="circl circl3" ></div>
    </div>

    <div class="emoxemojey x1" ></div>
    <div class="messanger-send-actions vv">
        <span id="${id}" class="btn-success fa fa-phone callx makeCall" style="margin-right:3px;margin-top:2px;border-radius: 2px;"></span>
        <label style="margin-right:3px;margin-top:2px;border-radius: 2px;width: 35px;
        height: 30px;
        padding: 5px 0px;
        text-align: center;background-color: #b31f30;
        color: white;" for="${name}"><i class="fr fa fa-share-alt sndfile fl btn btn-primary"></i></label>
        <input  value="${name}" id="${name}" name="${id}" type="file" style="margin-right:-34px;width:0px;margin-top:2px;border-radius: 2px;;position:relative;right:17px;" title="" class="fr fa fa-share-alt sndfile fl btn-primary" />&nbsp;&nbsp;&nbsp;&nbsp;
        <img role="button" class="fl nosel emobox2 khadmplease" style="padding:5px;width:34px;height: 34px;" src="/images/icons.gif"> 
        <input id="${name}" name="${id}" class="privateV keypressEn" type="text" placeholder="أكتب رسالة هنا"> 
        <button value="${name}" id="${name}" name="${id}" class="sendPmsg"><i class="fa fa-send sndpm fl  btn-primary"></i></button>
    </div>
`;
    for (var i = 0; i < docs.length; i++) {
        var time = Math.floor(docs[i].timen / 60);
        console.log(time);
        div.innerHTML += `
            <div>
            <div class="massanger-msg">
            <div class="img-messanger">
                <img style="width: 52px;
                border-radius: 4px;
                height: 48px;" src="/upload/${docs[i].img}" alt="">
            </div>
            <div class="mgs-info-messanger">
                <div class="messanger-name">${docs[i].user1}</div>
                <div class="messanger-text">${docs[i].msg}</div>
            </div><span style="
            position: relative;
            font-weight: 600;
            opacity: 0.5;
            position: relative;
            top: 1px; 
            " class="time1582 time-welcome">
                ${Math.floor((docs[i].timen / 60) / 60)}د
            </span>
            </div>
            </div>
        `;
    }
    document.querySelector('.messanger-msg-text').innerHTML = '';
    document.querySelector('.messanger-msg-text').append(div);
    messanger.setAttribute('id', id)
})




$(document).on("click", ".active-users-info , .all-infos , .p-img , .messanger-infos", function () {
    $('.stats').css('display', 'none')
    socket.emit("privateid", { id: this.id });
    console.log(this.id);
    var name = $(this).attr('name')
    console.log(name + " exite");
    var idSocket = $(this).attr('data-value')
    console.log("socket id is " + idSocket);
    const profile = document.querySelector('.profile');
    const div = document.createElement('div');
    socket.emit("getLiks", name);
    socket.on('sendLiks', ({ likes, clasment, docs, room, username, socketid, roomImg }) => {
        console.log(docs);
        profile.innerHTML = `
            <div class="prof-info">
                <div style="display: flex;">
                <img style="height=18px; width:18px" src="/upload/${docs.img}"><div class="title-profile">${docs.user_name}</div>
                </div>
                <div class="cute-profile-style">
                    <i class="fa fa-times cut-profile"></i>
                </div>
            </div>
            <div>
                <img style="width: 100%;
                height: 167px;
                margin-top: 0px;
                object-fit: contain;
                position: absolute;
                object-fit: cover;
                z-index: -1;
                filter: blur(2px);" src="/upload/${docs.img}" alt="" srcset="">
                <img style="width: 100%;height: 167px;margin-top: 0px;object-fit: contain;" src="/upload/${docs.img}" alt="" srcset="">
            </div>
            <p style="margin-left:10px; text-align: center;margin-top: 5px;"><span
                style="font-weight:600;text-align: center;opacity: 0.8;">(${docs.auth})</span></p>
            <div class="profile-options">
                <div style="display: flex;>
                    <img style="height=24px; width:24px" src="/upload/favicon.ico"><div class="roomStyslecountry"> <img style="width:25px;height:15px;"  src="flag/${docs.country}"><p style="margin-left: 2px;"> ${docs.counryNN}</p></div>
                </div>
                <div style="cursor:pointer;" id='${room}' class="roomNumberStysle"><img style="width: 19px;height: 20px;position: relative;top: 3px;" src="/upload/favicon.ico" alt="" srcset="">
                 ${room}
                 </div>
            </div>
            <div class="profile-options profile-options1">
                <div id="${socketid}" name="${docs.user_name}" class="sendPMU" ><i class="fl fa fa-comment  btn upm borderg"></i>الخاص</div>
                <div id="${socketid}" name="${docs.user_name}" class="sendAlert"><i class="fl fa fa-envelope-o btn unot borderg"></i> تنبيه</div>
                <div class="addLikesfun addLikesfunsss" id="${docs.user_id}" style="color: red;"> <i class="fl fa fa-heart btn ulike borderg"></i> ${(docs.likes > 1000 ? docs.likes / 1000 + "k" : docs.likes)}</div>
                <div style="color: red;"><i class="fl fa fa-ban btn ukick borderg"></i> تجاهل</div>
                <!--
                <div><i class="fl fa fa-microphone-slash  btn uml borderg"></i> سحب المايك</div>
                <div><i class="fl fa fa-microphone-slash  btn umm borderg"></i> كتم المايك</div>
                <div><i class="fl fa fa-microphone  btn uma borderg"></i> السماح</div>
                <div class="giftclick" style="color: blue;"><i class="fl fa fa-diamond btn ugift borderg"></i> <p class="gift" style="display:none"></p> إرسال هدية</div>
                <div class="serach0" id="${name}"><i class="fl fa fa-search btn uh borderg"></i> كشف النكات</div>
                <div class="ubnr" style="color: pink;"><i class="fl fa fa-star btn ubnr borderg"> </i>  <p class="binr" style="display:none"></p> البنر</div>
                <div class="remove-image-admin" id="${name}"><i class="fl fa fa-ban btn udelpic borderg"></i> حدف صورة</div>
                <div class="leaveRoom" id="${idSocket}" name="${name}" style="color:purple ;"><i class="fl fa fa-user-times btn urkick borderg"></i> طرد من الغرفة</div>
                <div class="upclassemnt" style="color: green; " id="${name}"><i class="fl fa fa-star btn umod borderg"></i> ترقية الى مراقب</div>
                <div class="ejection" id='${this.id}' style="color: red;"><i class="fl fa fa-ban btn ukick borderg"></i> طرد</div>
                <div class="band-user" id='${name}' style="color: red;"><i class="fl fa fa-ban btn ukick borderg"></i> باند</div>
                <div style="color: red;"><i class="fl fa fa-ban btn ukick borderg"></i> تجاهل</div>
            </div>
            <div class="display-name" style="width: 100%;height:50px;border:0.5px solid rgba(0, 0, 0, 0.251)">
                <span style="cursor:pointer;" class="change-name-admin" id="${name}">تغيير</span><i class="btn btn-primary u-nickc fr fa fa-save"></i><input class="name-admin" type="text" value="${name}"><span>الزغرفة</span>
            </div>
            <div class="display-like">
                <span>اللايكات</span><input type="number" class="likesValue" value="${likes}"> <button id="${name}" class="likesUpdate">حفظ</button>
            </div>
            <div class="display-group">
                <p>المجموعات</p>
                <input type="text" name="" id="" placeholder="البحث في الصلاحيات"><br>
                <select class="clasment-Admin" >

                </select>
                <p>المدة بالأيام</p>
                <input value="0" class="clasment-day" type="number"> <button id='${name}' class="addClasment-admin">حفظ</button>
            </div>
            <div class="display-room">
                <p>الغرف</p>
                <input type="text">
                <select class="roomSelected">ل<br>
                </select>
                <p>كلمة المرور (إختياري)</p>
                <input type="password"> <button class="changRoom">نقل</button>
            </div>
            -->
    `;
        profile.style.display = "block";
        /* socket.emit('getRoom', 'dd');
        socket.on('backRoom', (docs) => {
            if (document.querySelector('.roomSelected') != null) {
                for (var i = 0; i < docs.length; i++) {
                    document.querySelector('.roomSelected').innerHTML += `
                    <option value="${docs[i].room_name}">${docs[i].room_name}</option>
                `
                }
            }
        }) */
        /* if (document.querySelector('.clasment-Admin')) {
            for (var i = 0; i < clasment.length; i++) {
                document.querySelector('.clasment-Admin').innerHTML += `
                <option value="${clasment[i].clasment_name}">${clasment[i].clasment_name}</option>
            `
            }
        } */
    });
});

var state = true;
$(document).on('click', '.ubnr', function () {
    console.log('click bsdouf');
    if (document.querySelector('.binr').style.display === "none") {
        $('.binr').css('display', "block");
        socket.emit('getemojey', 'gg');
        socket.on('sendemojeyback', (docs) => {
            var div = document.createElement('div');
            div.style.width = '100%';
            if (state) {
                state = false;
                for (var i = 0; i < docs.length; i++) {
                    div.innerHTML += `
                    <img src="/Gift/${docs[i]}">
                    `;
                }
                document.querySelector('.binr').appendChild(div);
            }
        });
    } else {
        $('.binr').css('display', "none");
    }
})

var stategift = true;
$(document).on('click', '.giftclick', function () {
    console.log('click bsdouf');
    if (document.querySelector('.gift').style.display === "none") {
        $('.gift').css('display', "block");
        socket.emit('getgift', 'gg');
        socket.on('sendgiftback', (docs) => {
            var div = document.createElement('div');
            div.style.width = '100%';
            if (stategift) {
                stategift = false;
                for (var i = 0; i < docs.length; i++) {
                    div.innerHTML += `
                    <img src="/Gift/${docs[i]}">
                    `;
                }
                document.querySelector('.gift').appendChild(div);
            }
        });
    } else {
        $('.gift').css('display', "none");
    }
})

$(document).on('click', ".cut-profile", function () {
    profile.style.display = "none";
})




$(document).on('click', '.sendPMU', function () {
    var id = this.id
    var name = $(this).attr('name');
    const profile = document.querySelector('.profile');
    const messanger = document.querySelector('.messanger');
    const div = document.createElement('div');
    profile.style.display = "none";
    socket.emit('getChatP', (id));
    socket.on('resChatP', ({ docs, img }) => {
        var div = document.createElement('div');
        for (var i = 0; i < docs.length; i++) {
            console.log(docs);
            var time = Math.floor(docs[i].timen / 60);
            console.log(time / 60);
            div.innerHTML += `
                <div>
                <div class="massanger-msg">
                <div class="img-messanger">
                    <img style="width: 52px;
                    border-radius: 4px;
                    height: 46px;" src="/upload/${docs[i].img}" alt="">
                </div>
                <div class="mgs-info-messanger">
                    <div class="messanger-name">${docs[i].user1}</div>
                    <div class="messanger-text">${docs[i].msg}</div>
                </div><span style="
                position: relative;
                font-weight: 600;
                opacity: 0.5;
                position: relative;
                top: 1px;
                " class="time1582 time-welcome">
                ${Math.floor((docs[i].timen / 60) / 60)}د
                </span>
                </div>
                </div>
            `;
        }

        messanger.setAttribute('id', id);

        messanger.innerHTML = `
        <div class="messanger-header" value="${id}" id="${id}" name="${name}"> 
            <div class="messanger-infos">
                <div class="image-m">
                    <img style="width: 20px;" src="/upload/${img}" alt="" srcset="">
                </div>
                <div class="name-m">${name}</div>
            </div>
            <div class="messanger-infos">
                <div class="more-messanger">
                    <i class="btn-info fr border fa fa-expand"></i>
                </div>
                <div class="remove">
                    <i class="minix btn-danger phide fr border fa fa-minus"></i>
                </div>
            </div>
        </div>

        <div class="messanger-msg-text" id='${id}' style="overflow-y:auto;">
          
        </div>
        <div class="add-new-one"><div>
        <div class="typing">
            <div class="circl circl1" ></div>
            <div class="circl circl2" ></div>
            <div class="circl circl3" ></div>
        </div>
        <div class="emoxemojey x1"></div>
        <div class="messanger-send-actions vv">
            <span id="${id}" class="btn-success fa fa-phone callx makeCall" style="margin-right:3px;margin-top:2px;border-radius: 2px;"></span>
            <label style="margin-right:3px;margin-top:2px;border-radius: 2px;width: 35px;
            height: 30px;
            padding: 5px 0px;
            text-align: center;background-color: #b31f30;
            color: white;" for="${name}"><i class="fr fa fa-share-alt sndfile fl btn btn-primary"></i></label>
            <input  value="${name}" id="${name}" name="${id}" type="file" style="margin-right:-34px;width:0px;margin-top:2px;border-radius: 2px;;position:relative;right:17px;" title="" class="fr fa fa-share-alt sndfile fl btn-primary" />&nbsp;&nbsp;&nbsp;&nbsp;
            <img role="button" class="fl nosel emobox2 khadmplease" style="padding:5px;width:34px;height: 34px;" src="/images/icons.gif"> 
            <input id="${name}" name="${id}" class="privateV keypressEn" type="text" placeholder="أكتب رسالة هنا"> 
            <button value="${name}" id="${name}" name="${id}" class="sendPmsg"><i class="fa fa-send sndpm fl  btn-primary"></i></button>
        </div>
    `;
        document.querySelector('.messanger-msg-text').innerHTML = '';
        document.querySelector('.messanger-msg-text').append(div);
        messanger.style.display = "block";

    });
});



$(document).on('click', '.loading-call i', function () {
    // delete the call from db
    console.log("dellllllllll");
    var id = document.querySelector('.messanger-msg-text').id
    socket.emit('deleteCall', id)
    $('.user-call').remove()
    iscalling[0] = false;
    isAccepted[0] = false;
    stema[0].getTracks().forEach(function (track) {
        track.stop();
    });
});


$(document).on('click', '.ref', function () {
    // delete the call
    var id = document.querySelector('.messanger-msg-text').id
    console.log(id);
    socket.emit('deleteCall', id)
    $('.user-call-request').html('تم قطع الاتصال')
    $('.user-call-request').css('border', 'none')
    iscalling[0] = false;
    isAccepted[0] = false;
})

socket.on('UpdateCallStats', () => {
    $('.user-call').remove()
    $('.user-call-request').html('تم قطع الاتصال')
    $('.user-call-request').css('border', 'none')
    iscalling[0] = false;
    isAccepted[0] = false;
    stema[0].getTracks().forEach(function (track) {
        track.stop();
    });
    document.querySelector('messanger').style.display = 'none';
})

$(document).on('click', '.acc', function () {
    // accept the call
    var id = document.querySelector('.messanger-msg-text').id
    var dii = `
    <div class="massanger-msg">
    <div class="user-call">
    <div class="call-infos">
    <img width="24px" src="/upload/${userData[0].img}" alt="">
    <p class="name-call">${userData[0].name}</p>
    </div>
        <div class="loading-call">
        <i class="fa fa-phone callx"></i>
        <p class="stats-call">متصل</p>
        </div>
        </div>
    </div>
    `
    socket.emit('confirmeCall', { id: id, div: dii });
    isAccepted[0] = true;
    mainFunctionClient(1000, id);
});

socket.on('confirmeCall', (div) => {
    $('.user-call').html(div)
    isAccepted[0] = true;
})

socket.on('confirmeCallUser', ({ name, img }) => {
    var div = `
        <div class="massanger-msg">
        <div class="user-call">
        <div class="call-infos">
        <img width="24px" src="/upload/${img}" alt="">
        <p class="name-call">${name}</p>
        </div>
            <div class="loading-call">
            <i class="fa fa-phone callx"></i>
            <p class="stats-call">متصل</p>
            </div>
            </div>
        </div>
        `
    $('.user-call-request').html(div)
    isAccepted[0] = true;
})

$(document).on('click', '.makeCall', function () {
    var div = document.createElement('div');
    if (iscalling[0] == false) {
        var dii = `
        <div class="user-call-request">
            <p class="ref"><i class="fa fa-phone callx"></i> رفض</p>
            <p class="acc"><i class="fa fa-phone callx"></i> قبول</p>
            <p>يتم الاتصال بك</p>
        </div>
    `
        socket.emit('makeCall', { id: this.id, name: userData[0].name, img: userData[0].img, div: dii });
        var idd = document.querySelector('.messanger').id
        mainFunctionClient(1000, idd);
        socket.on('makeCall', ({ img, name }) => {
            div.innerHTML = `
            <div class="massanger-msg">
                <div class="user-call">
                <div class="call-infos">
                <img width="24px" src="/upload/${img}" alt="">
                <p class="name-call">${name}</p>
                </div>
                    <div class="loading-call">
                    <i class="fa fa-phone callx"></i>
                    <p class="stats-call">.. يتم الاتصال</p>
                    </div>
                </div>
            </div>
            `
            socket.on('sendPmsg', { text: div, id: this.id })
            document.querySelector('.messanger-msg-text').appendChild(div);
        });
    }
});

var iscalling = [false]
var isAccepted = [false]

socket.on("updateCalling", (t) => {
    console.log("isTrue");
    iscalling[0] = true
})



$(document).on('click', '.sendAlert', function () {
    var id = $(this).attr('id');
    var name = $(this).attr('name');
    const profile = document.querySelector('.profile');
    const messanger = document.querySelector('.alert');
    const div = document.createElement('div');
    messanger.innerHTML = `
        <div class="alert-header">
            <div class="alert-header-part">
            <p style="
            background-color: #004a6e;
            ">تنبيه<i class="mini fa fa-comments modal-title"></i></p> 
            <div class="close-alert"><i class="fa fa-times"></i> </div>
            </div>
            <div class="messanger-send-actionss" style="margin-top: 50px;">
                <input style="
                width: 95%;
                height: 79px;
                position: relative;
                bottom: 44px;
                left: 5px;
                text-align: end;
                font-size: 15.5px;
                font-weight: 600;
                "  name="${id}" id="${name}" class="privateVs" type="text"> <br> <button style="
                border: none;
                position: relative;
                bottom: 30px;
                left: 64%;
                width: 90px;
                height: 31px;
                border-radius: 2px;
                font-weight: 600;
                font-size: 15.5px;
                letter-spacing: 1px;
                background-color: #004a6e;
                color: white;
                border-radius: 5px;
                " name="${id}" id="${name}" class="sendAlertmsg"><i class="fa fa-send"></i>ارسال</button>
            </div>
        </div>
    `;
    messanger.style.display = "block";
    messanger.setAttribute('id', id)
});

$(document).on('click', '.sendAlertmsg', function () {
    var id = $(this).attr('name');
    var msg = $('.privateVs').val();
    socket.emit('sendAlertTo', { id, msg });
    setTimeout(() => {
        $('.alert ').css('display', 'none');
    }, 500)
});

$(document).on('click', '.alert-msg', function () {
    $('.alert-msg ').css('display', 'none');
})

$(document).on('click', '.close-alert', function () {
    $('.alert ').css('display', 'none');
});

$('.msg').on('click', () => {
    $(".replay-hanit").css('display', 'none');
})

socket.on('backAlert', ({ msg, name, img }) => {
    $('.alert-msg').css('display', 'block');
    document.querySelector('.imghh').setAttribute('src', `/upload/${img}`)
    $('p.alert-inner').html(msg);
    document.querySelector('p.namehhh').innerHTML = name
})

xcutMessanger.addEventListener('click', () => {
    messanger.style.display = "none";
})

if (profile.style.display === "block") {
}

$(document).on('click', ".remove", function () {
    console.log('cc');
    profile.style.display = "none";
    messanger.style.display = "none";
    profile.style.display = "none"
    var id = document.querySelector('.messanger-msg-text').id
    if (iscalling[0])
        socket.emit('deleteCall', id)
})




input.addEventListener('input', () => {
    stats.style.display = "none";
})

$(document).on("keyup", "input.online-person-search", function () {
    const persononline = document.querySelector('.online-list');
    const roomsonline = document.querySelector('.rooms-online');
    socket.emit("sendmeusersSearch", $(this).val());
    socket.on("adduserSearch", ({ docs, id }) => {
        if (docs[0].user_id != undefined) {
            stats.style.display = "block";
            console.log(docs.length);
            var start = true;
            var color = '';
            persononline.innerHTML = "";
            for (var i = 0; i < docs.length; i++) {
                /* if (docs[i].comm == "yes")
                    color = "red" */
                console.log(docs[i].name);
                persononline.innerHTML += `
                <div id='${docs[i].room_name}' class="person-online person-online-new">
                    <div class="line-color" id='${docs[i].user_id}' style="background-color:${docs[i].statscolor}"></div>
                    <div class="all-infos active-users-info" data-value="${docs[i].user_id}" name="${docs[i].name}" id='${docs[i].user_id}'>
                        <img id="${docs[i].name}" class="img-target img-pnline-list" src="/upload/${docs[i].img}" alt="" srcset="">
                        <div class="all-infos-personal">
                        <p class="online-name-list"><span style="background-color:${docs[i].namebg};color:${docs[i].namecolor}" >${docs[i].namkename}</span></p>
                        <p class="bio-online-list">${docs[i].stats}</p>
                        </div>
                    </div>
                    <div class="drapo-content">
                        <img class="drapo-national2" src="flag/${docs[i].country}" style="width:20px;">
                        <p class="drapo-number">#55</p>
                    </div>
                </div>
            `;
            };
            socket.emit('getCuurentUserRoom', 'd');
            socket.on('backcurrentRoomUsers', (docs) => {
                roomsonline.innerHTML = "";
                $('.online-by-room').html('المتواجدين في الدردشة')
                for (var i = 0; i < docs.length; i++) {
                    roomsonline.innerHTML += `
            <div id='${docs[i].room_name}' class="person-online person-online-new">
            <div class="line-color" id='${docs[i].user_id}' style="background-color:${docs[i].statscolor}"></div>
            <div class="all-infos active-users-info" data-value="${docs[i].user_id}" name="${docs[i].user_name}" id='${docs[i].user_id}'>
                <img id="${docs[i].user_name}" class="img-target img-pnline-list" src="/upload/${docs[i].img}" alt="" srcset="">
                <div class="all-infos-personal">
                <p class="online-name-list"><span style="background-color:${docs[i].namebg};color:${docs[i].namecolor}" >${docs[i].nikename}</span></p>
                <p class="bio-online-list">${docs[i].stats}</p>
                </div>
            </div>
            <div class="drapo-content">
                <img class="drapo-national2" src="flag/${docs[i].country}" style="width:20px;">
                <p class="drapo-number">#55</p>
            </div>
        </div>
                `;
                }
            })
        } else {
            stats1.style.display = "none";
            return RunCard1();
        }
    });
})


function UpdateCard1() {
    const persononline = document.querySelector('.online-list');
    const roomsonline = document.querySelector('.rooms-online');
    socket.emit("sendmeusers", "dd");
    socket.on("adduser", ({ docs, id, }) => {
        console.log(docs.length);
        persononline.innerHTML = "";
        for (var i = 0; i < docs.length; i++) {
            console.log(docs[i].name);
            persononline.innerHTML += `
            <div id='${docs[i].room_name}' class="person-online person-online-new">
            <div class="line-color" id='${docs[i].user_id}' style="background-color:${docs[i].statscolor}"></div>
            <div class="all-infos active-users-info" data-value="${docs[i].user_id}" name="${docs[i].name}" id='${docs[i].user_id}'>
                <img id="${docs[i].name}" class="img-target img-pnline-list" src="/upload/${docs[i].img}" alt="" srcset="">
                <div class="all-infos-personal">
                <p class="online-name-list"><span style="background-color:${docs[i].namebg};color:${docs[i].namecolor}" >${docs[i].namkename}</span></p>
                <p class="bio-online-list">${docs[i].stats}</p>
                </div>
            </div>
            <div class="drapo-content">
                <img class="drapo-national2" src="flag/${docs[i].country}" style="width:20px;">
                <p class="drapo-number">#55</p>
            </div>
        </div>
            `;
        };
        socket.emit('getCuurentUserRoom', 'd');
        socket.on('backcurrentRoomUsers', (docs) => {
            RunCard1()
            roomsonline.innerHTML = "";
            for (var i = 0; i < docs.length; i++) {
                roomsonline.innerHTML += `
                <div id='${docs[i].room_name}' class="person-online person-online-new">
                <div class="line-color" id='${docs[i].user_id}' style="background-color:${docs[i].statscolor}"></div>
                <div class="all-infos active-users-info" data-value="${docs[i].user_id}" name="${docs[i].name}" id='${docs[i].user_id}'>
                    <img id="${docs[i].name}" class="img-target img-pnline-list" src="/upload/${docs[i].img}" alt="" srcset="">
                    <div class="all-infos-personal">
                    <p class="online-name-list"><span style="background-color:${docs[i].namebg};color:${docs[i].namecolor}" >${docs[i].nikename}</span></p>  	
                    <p class="bio-online-list">${docs[i].stats}</p>
                    </div>
                </div>
                <div class="drapo-content">
                    <img class="drapo-national2" src="flag/${docs[i].country}" style="width:20px;">
                    <p class="drapo-number">#55</p>
                </div>
            </div>
                `;
            }
        })
    });
}

RunCard1()

function RunCard1() {
    socket.emit('getCuurentUserRoom', 'd');
    $('.stats').css('display', 'none');
    $('.private-stats').css('display', 'none');
    $('.createroom-stats').css('display', 'none');
    $('.hanit-stats').css('display', 'none')
    if (stats1.style.display === "none") {
        stats1.innerHTML = `
    <div class="x-icons">
    <p class="title">
        المتواجدين
    </p>
    <div class="close">
    <i  class="label label-danger border nosel fa fa-close fr"></i>
    </div>
    </div>
    <div class="search">
    <input class="online-person-search" type="search" placeholder="البحث">
    </div>
    <div class="online-list"></div>
    <p class="online-by-room" style=""> </p> 
    <div class="rooms-online" style="margin-top:1px;"></div>
    `
        const persononline = document.querySelector('.online-list');
        const roomsonline = document.querySelector('.rooms-online');
        socket.emit("sendmeusers", "dd");
        socket.on("adduser", ({ docs, id, }) => {
            if (docs[0].user_id != undefined) {
                stats.style.display = "block";
                console.log(docs.length);
                var start = true;
                var color = '';
                persononline.innerHTML = "";
                for (var i = 0; i < docs.length; i++) {
                    console.log(docs[i].name);
                    persononline.innerHTML += `
                    <div id='${docs[i].room_name}' class="person-online person-online-new" id='${docs[i].room_name}'>
                        <div class="line-color" id='${docs[i].user_id}' style="background-color:${docs[i].statscolor}"></div>
                        <div class="all-infos active-users-info" data-value="${docs[i].user_id}" name="${docs[i].name}" id='${docs[i].user_id}'>
                            <img id="${docs[i].name}" class="img-target img-pnline-list" src="/upload/${docs[i].img}" alt="" srcset="">
                            <div class="all-infos-personal">
                            <p class="online-name-list"><span style="background-color:${docs[i].namebg};color:${docs[i].namecolor}" >${docs[i].namkename}</span></p>
                            <p class="bio-online-list">${docs[i].stats}</p>
                            </div>
                        </div>
                        <div class="drapo-content">
                            <img class="drapo-national2" src="flag/${docs[i].country}" style="width:20px;">
                            <p class="drapo-number">#55</p>
                        </div>
                    </div>
                `;
                };
                socket.emit('getCuurentUserRoom', 'd');
                socket.on('backcurrentRoomUsers', (docs) => {
                    roomsonline.innerHTML = "";
                    $('.online-by-room').html('المتواجدين في الدردشة')
                    for (var i = 0; i < docs.length; i++) {
                        roomsonline.innerHTML += `
                <div id='${docs[i].room_name}' class="person-online person-online-new">
                <div class="line-color" id='${docs[i].user_id}' style="background-color:${docs[i].statscolor}"></div>
                <div class="all-infos active-users-info" data-value="${docs[i].user_id}" name="${docs[i].user_name}" id='${docs[i].user_id}'>
                    <img id="${docs[i].user_name}" class="img-target img-pnline-list" src="/upload/${docs[i].img}" alt="" srcset="">
                    <div class="all-infos-personal">
                    <p class="online-name-list"><span style="background-color:${docs[i].namebg};color:${docs[i].namecolor}" >${docs[i].nikename}</span></p>
                    <p class="bio-online-list">${docs[i].stats}</p>
                    </div>
                </div>
                <div class="drapo-content">
                    <img class="drapo-national2" src="flag/${docs[i].country}" style="width:20px;">
                    <p class="drapo-number">#55</p>
                </div>
            </div>
                    `;
                    }
                })
            } else {
                stats1.style.display = "none";
                return RunCard1();
            }
        });
    }
    else
        stats1.style.display = "none";
}


function RunCardIprovedOne() {

    socket.emit('getCuurentUserRoom', 'd');
    stats1.innerHTML = `
    <div class="x-icons">
    <p class="title">
        المتواجدين
    </p>
    <div class="close">
    <i  class="label label-danger border nosel fa fa-close fr"></i>
    </div>
    </div>
    <div class="search">
    <input class="online-person-search" type="search" placeholder="البحث">
    </div>
    <div class="online-list"></div>
    <p class="online-by-room" style=""> </p> 
    <div class="rooms-online" style="margin-top:1px;"></div>
    `
    const persononline = document.querySelector('.online-list');
    const roomsonline = document.querySelector('.rooms-online');
    socket.emit("sendmeusersNo", "dd");
    socket.on("adduserNo", ({ docs, id }) => {
        if (docs[0].user_id != undefined) {
            persononline.innerHTML = "";
            for (var i = 0; i < docs.length; i++) {
                console.log(docs[i].name);
                persononline.innerHTML += `
                    <div id='${room_name}' class="person-online person-online-new">
                        <div class="line-color" id='${docs[i].user_id}' style="background-color:${docs[i].statscolor}"></div>
                        <div class="all-infos active-users-info" data-value="${docs[i].user_id}" name="${docs[i].name}" id='${docs[i].user_id}'>
                            <img id="${docs[i].name}" class="img-target img-pnline-list" src="/upload/${docs[i].img}" alt="" srcset="">
                            <div class="all-infos-personal">
                            <p class="online-name-list"><span style="background-color:${docs[i].namebg};color:${docs[i].namecolor}" >${docs[i].namkename}</span></p>
                            <p class="bio-online-list">${docs[i].stats}</p>
                            </div>
                        </div>
                        <div class="drapo-content">
                            <img class="drapo-national2" src="flag/${docs[i].country}" style="width:20px;">
                            <p class="drapo-number">#55</p>
                        </div>
                    </div>
                `;
            };
            socket.emit('getCuurentUserRoom', 'd');
            socket.on('backcurrentRoomUsers', (docs) => {
                roomsonline.innerHTML = "";
                $('.online-by-room').html('المتواجدين في الدردشة')
                for (var i = 0; i < docs.length; i++) {
                    roomsonline.innerHTML += `
                <divid='${docs[i].room_name}' class="person-online person-online-new">
                <div class="line-color" id='${docs[i].user_id}' style="background-color:${docs[i].statscolor}"></div>
                <div class="all-infos active-users-info" data-value="${docs[i].user_id}" name="${docs[i].user_name}" id='${docs[i].user_id}'>
                    <img id="${docs[i].user_name}" class="img-target img-pnline-list" src="/upload/${docs[i].img}" alt="" srcset="">
                    <div class="all-infos-personal">
                    <p class="online-name-list"><span style="background-color:${docs[i].namebg};color:${docs[i].namecolor}" >${docs[i].nikename}</span></p>
                    <p class="bio-online-list">${docs[i].stats}</p>
                    </div>
                </div>
                <div class="drapo-content">
                    <img class="drapo-national2" src="flag/${docs[i].country}" style="width:20px;">
                    <p class="drapo-number">#55</p>
                </div>
            </div>
                    `;
                }
            })
        }
    });
}


$(document).on('click', '.card1', function () {
    // RunCard1();
    $('.private-stats').css('display', 'none');
    $('.hanit-stats').css('display', 'none');
    $('.createroom-stats').css('display', 'none');
    $('.stting-card').css('display', 'none');
    $('.stats1').css('display', 'block')
});


socket.on('openCard10', () => {
    setTimeout(() => {
        // RunCard1();
    }, 500)
});

const persononline = document.querySelector('.online-list');
$('.btn1 , .btn2 , .btn3').css('cursor', 'pointer')
$('.btn1 , .btn2 , .btn3').css('pointerEvents', 'painted')

window.addEventListener('load', function () {
    setTimeout(() => {
        RunCard1()
        socket.emit('joinBrow', '');
    }, 500)
})

var allinfos = document.querySelectorAll('img.img-target');
allinfos.forEach(e => {
    e.addEventListener('click', (e) => {
        console.log(e.id);
    })
});

var sttingcard = document.querySelector('.stting-card');

var title = document.querySelector('.title');
var div = document.createElement('div');
socket.on("reName", ({ nike, comm, name, auth, username, docs, docs1 }) => {
    var stats0;
    var stats1;
    if (comm == 'no' || comm == 0) {
        stats0 = false;
    } else {
        stats0 = true;
    }
    if (docs.notification == 'no' || docs.notification == 0) {
        stats1 = false;
    } else {
        stats1 = true;
    }
    console.log("open stting card");
    title.innerHTML = "الاعدادات"
    document.querySelector('.stting-card').innerHTML = `
            <div class="x-icons">
            <p class="title stting-titlesls" id="${username}">
                الضبط
            </p>
            <div class="close">
            <i  class="label label-danger border nosel fa fa-close fr"></i>
            </div>
            </div>
            <div class="stting-content" style="padding: 0px 1px;">
            <div class="title1">الاسم</div>
            <input value="${nike}" class="edite-save-person-info-name stting sttingv" type="text">
            <div class="title1">الحالة</div>
            <input value="${auth}" class="edite-save-person-info-stats stting sttingv" type="text">
            <div class="card-stting">
            <div>لون الاسم</div>
            <input value="${docs.nameColor}" class="stting namecolor" type="color" name="" id="">
            </div>
            <div class="card-stting">
            <div>لون الخلفية</div>
            <input value="${docs.namebg}" class="stting  bck-setting" type="color" name="" id="">
            </div>
            <div class="card-stting ">
            <div>لون الخط</div>
            <input value="${docs.fontColor}" color-setting class="stting sttingb" type="color" name="" id="">
            </div>
            <div class="edite-save-person-info save">
            حفظ
            </div>
            <div class="sizefont">
            <select name="" id="">
                <option disabled value="">100% حجم الخط</option>
                <option  value="">100% حجم الخط</option>
                <option  value="">120% حجم الخط</option>
                <option  value="">150% حجم الخط</option>
            </select>
            </div>
            <div class="imgchange">
                <label for="file-upload" class="custom-file-upload">
                <i class="fa fa-cloud-upload"></i> تغيير الصورة
                </label>
                <input id="file-upload" class="file-upload" type="file" name="file" accept="image/*"/>
            </div>
            <div id="${name}" class="imgremove image-remove-personal">
            حدف صورة
            </div>
            <div class="eniblec" style="display:flex;justify-content:center">
            ${(stats0 ? '<i style="position:relative;right:80px;" class="fa fl fa-check ccchecked"></i>' : '<i style="display:none;position:relative;right:80px;" class="fa fl fa-check ccchecked"></i>')}  تعطيل المحادثة 
            </div>
            ${(docs1[0].classment == 'admin' ? `
            <div class="controle" style="display:flex;justify-content:center">
                <i style="position: fixed;right: 22%;" class='fl fa fa-star'></i>لوحة التحكم 
            </div>
            ` : '')}
            <div class="enibleno" style="display:flex;justify-content:center">
            ${(stats1 ? '<i style="position:relative;right:80px;" class="fa fl fa-check ccchecked2"></i>' : '<i style="display:none;position:relative;right:80px;" class="fa fl fa-check ccchecked2"></i>')} تعطيل التنبيهات
            </div>
            <div class="logout logout-person">
            تسجيل الخروج
            </div>
        </div>
        `;
})

$(document).on('click', '.controle', function () {
    console.log("click");
    socket.emit('vToken',);
    socket.on('sendToken', (token) => {
        window.open(`/Cp/${token}`, '_blank').focus();
    })
})
var hanit = true;
$(document).on('click', '.hanit-show-icons', function () {
    if (hanit) {
        document.querySelector('.icons-hanitss').style.display = "block";
        document.querySelector('.icons-hanitss').innerHTML =
            `
<img id='ف0' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1016.gif?alt=media&token=ae346feb-1820-4f9c-9a18-375c1d5c3f64 '> 
<img id='ف1' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Ffavicon.ico?alt=media&token=a00b5cdf-c93a-40be-a3d6-727ff8a6bc6d'>
<img id='ف2' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1003.gif?alt=media&token=869dab72-05e7-4877-a4b0-1ba482fcbff7'>
<img id='ف3' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Femoii.gif?alt=media&token=98d50b59-8139-4e4d-82d4-7b5a49afc06c'>
<img id='ف4' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1072.gif?alt=media&token=5a91f180-81a6-41eb-8f22-6167bc86d079'>
<img id='ف5' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1068.gif?alt=media&token=e1264799-3802-4f03-940b-d3d402881ef4'>
<img id='ف6' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1025.gif?alt=media&token=f4f91634-1a11-4fa3-9e07-d5f5822f9653'>
<img id='ف7' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1063.gif?alt=media&token=fbb1598e-fc50-413b-9108-109948279960'>
<img id='ف8' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1062.gif?alt=media&token=f9b59fa8-4ffe-4bf1-827d-8a5a489c8bd1'>
<img id='ف9' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1022.gif?alt=media&token=18060b42-95e5-41ae-a5e7-26950426f6de'>
<img id='ف10' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1013.gif?alt=media&token=aec40a69-dd03-4952-aaf5-8eaccaa7d42f'>
<img id='ف11' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1066.gif?alt=media&token=59f79f2c-dd38-448d-8c1b-7ad0623294f1'>
<img id='ف12' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1021.gif?alt=media&token=3b7b9495-dc4e-486a-83a1-abcd027b1a5b'>
<img id='ف13' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1065.gif?alt=media&token=9d4cb722-8764-48c1-8426-ff0e17d748ed'>
<img id='ف14' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1017.gif?alt=media&token=4cd0a39c-24c8-4417-b234-022d173d64ea'>
<img id='ف14' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1096.gif?alt=media&token=01e304ca-33a9-4e11-bacd-f9f8814488a9'>
<img id='ف15' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1073.gif?alt=media&token=baa6c197-b8b3-4ac5-ac65-22451315d995'>
<img id='ف16' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1069.gif?alt=media&token=46ee296b-5f7d-4ca8-9141-121bc3a171b6'>
<img id='ف17' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1067.gif?alt=media&token=2f0229f9-0296-4304-9e48-484d53c1d538'>
<img id='ف18' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1082.gif?alt=media&token=77d0e483-1355-421f-b544-f00a9a85494a'>
<img id='ف19' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1094.gif?alt=media&token=63e61835-f003-42ec-b7a0-8b28993ccf0f'>
<img id='ف20' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1099.gif?alt=media&token=b4df13c0-bac3-4f8e-8134-0ba42072b659'>
<img id='ف21' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1029.gif?alt=media&token=fb888b80-18be-424e-83ba-d901c84b6894'>
<img id='ف22' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1039.gif?alt=media&token=a461c138-ebfa-46a7-979d-59109b8e0dca'>
<img id='ف23' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Ff11.gif?alt=media&token=dd788395-3d14-41e4-aa70-a7113ce1e236'>
<img id='ف24' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1064.jpg?alt=media&token=672c71ef-1d24-4dfc-b614-b87d904ad121'>
<img id='ف25' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1036.PNG?alt=media&token=7f3daa09-8c7e-4bcb-9683-c2979f8e313b'>
<img id='ف26' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1019.gif?alt=media&token=1846d3c5-0b60-475b-9576-42b035cdb951'>
<img id='ف27' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1037.gif?alt=media&token=87ad5ae3-0420-43cf-9f39-c436fa547e5c'>
<img id='ف28' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1038.png?alt=media&token=8ec0b402-af46-48af-8a2d-abfb507ae58b'>
<img id='ف29' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1034.gif?alt=media&token=9adf28a5-4874-4954-aef9-b8aa83d8b35a'>
<img id='ف30' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1026.gif?alt=media&token=40874ae7-a4ce-4498-bd8d-5ce90daeecfe'>
<img id='ف31' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1028.gif?alt=media&token=4ce3650d-472b-4d2b-bc60-279aa9de3739'>
<img id='ف32' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1046.gif?alt=media&token=c8c0fb03-1b86-40c1-88b4-32d48e55a75b'>
<img id='ف33' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1031.gif?alt=media&token=104165a3-7433-45a7-a9f6-da580e1ba354'>
<img id='ف34' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1032.gif?alt=media&token=a072b734-7e39-46de-ac34-1eff2b381206'>
<img id='ف35' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1027.gif?alt=media&token=db905d80-19cb-46c3-a3b8-a5d9514127d6'>
<img id='ف36' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1030.gif?alt=media&token=a36104ae-e9c6-46a4-9a44-46a5d7a9574d'>
<img id='ف37' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1035.PNG?alt=media&token=355e7fe9-00fd-4496-babb-1c1ed6b16a3b'>
<img id='ف39' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1048.gif?alt=media&token=f8923361-44bd-49ac-88cf-ecc857b9903b'>
<img id='ف39' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1157.gif?alt=media&token=20ec2fc8-efa5-4a93-9608-a7481055878b'>
<img id='ف34' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1156.gif?alt=media&token=7801f0b5-11ab-468a-a0e7-ae9b8a75fa57'>
<img id='ف35' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1161.gif?alt=media&token=2776e2fa-c0aa-4c49-8e18-d04fa20f6dbe'>
<img id='ف36' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1147.gif?alt=media&token=fc5691c2-e8f6-4383-aa82-767162f81630'>
<img id='ف37' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1150.GIF?alt=media&token=f141130a-9370-46a8-b0e2-657661daa19a'>
<img id='ف38' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1162.gif?alt=media&token=c1ab991e-89f9-47a8-b8cb-a2c029c90767'>
<img id='ف39' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1144.gif?alt=media&token=8f77faf8-7103-4e1b-b7d2-4cd5690a633e'>
<img id='ف40' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g9ing6rf101n9zr1nXqbL.gif?alt=media&token=93876128-3165-4247-be30-ccf958504523'>
<img id='ف41' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g98hs239101S59Tq0quHav-jpeg.png?alt=media&token=f82b8667-f422-4ee1-b308-addd73de3a44'>
<img id='ف4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZValt=media&token=a04407a0-5b05-4fec-af30-0f7ade2224f7'>
<img id='ف4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZValt=media&token=30701255-e4ab-4769-ab15-df8c2c9fe061'>
<img id='ف4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZValt=media&token=599522e4-4899-4748-97a0-1ea3d04077ab'>
<img id='ف4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZValt=media&token=cc49186c-1805-4e81-8e79-14d2eff078af'>
<img id='ف4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZValt=media&token=8060721a-1f65-46cb-9441-7f0c748aeb5c'>
<img id='ف4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZValt=media&token=55bf3de7-d83b-4093-ad7e-da34f4dd5f52'>
<img id='ف4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZValt=media&token=9120b649-1778-4549-a242-8174258db0f5'>
<img id='ف4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZValt=media&token=29300d59-f4e9-4868-8377-57fc4cc81aaa'>
<img id='ف50' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1033.gif?alt=media&token=c9be27a6-2bed-4fa4-8aaf-6b64adabb6e9'>
<img id='ف51' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1210.gif?alt=media&token=915af090-2f29-4f0f-a258-ef8abb9680a4'>
<img id='ف52' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1040.gif?alt=media&token=2f9bb53b-3c00-4065-b894-74b5abae3673'>
<img id='ف53' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1041.gif?alt=media&token=c4065c91-9482-4945-9536-7619c0b99c01'>
<img id='ف54' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1055.gif?alt=media&token=07efe569-4793-48fd-ac75-acc9d78e2224'>
<img id='ف55' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1097.gif?alt=media&token=29f54bbc-a35f-4784-ae65-4a9a10a1311e'>
<img id='ف56' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1090.gif?alt=media&token=d47c8f93-e343-410c-9534-83061501510f'>
<img id='ف57' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1109.gif?alt=media&token=d7ab2188-b811-47a7-968b-8575cf843377'>
<img id='ف58' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1103.gif?alt=media&token=536925ca-edca-4055-a7a8-7c11cb155152'>
<img id='ف59' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1060.gif?alt=media&token=0c075e29-a271-497f-83fd-221d9d82cabb'>
<img id='ف60' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1051.gif?alt=media&token=3fa6c462-3ce1-441d-8304-7bb0e385dcd8'>
<img id='ف61' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1047.gif?alt=media&token=7d0a7d82-df23-48f6-b960-0dd440d30cb8'>
<img id='ف62' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1104.gif?alt=media&token=97b2df6c-4b06-481d-b671-f434e161b0c3'>
<img id='ف63' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1045.gif?alt=media&token=3fab049d-1cc7-4e80-b855-fe194e88b31f'>
<img id='ف64' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1059.gif?alt=media&token=df053139-4138-4269-8ef0-d6d2012b23e1'>
<img id='ف65' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1052.gif?alt=media&token=c9990154-6558-4ab9-b115-7d30c040ee2b'>
<img id='ف66' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1081.gif?alt=media&token=8a9703bb-31f5-4b75-aa46-426c243a51b6'>
<img id='ف67' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1075.gif?alt=media&token=e0bdfdf8-058e-451d-a35e-e1bf14722aa9'>
<img id='ف68' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1088.png?alt=media&token=f804182c-ec48-4986-ab96-7ba76af83dc6'>
<img id='ف69' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1042.gif?alt=media&token=28fc9505-7c1a-4b26-89fe-b6ce1d8b3456'>
<img id='ف70' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1044.gif?alt=media&token=a213e402-cc9e-4dd1-a54d-c60efc397b1d'>
<img id='ف71' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1185.gif?alt=media&token=90221d94-3e06-4b07-87db-4b8f853d97c0'>
<img id='ف72' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1077.gif?alt=media&token=a33356a4-ecd6-484e-af47-4cf8ff0cab46'>
<img id='ف73' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1061.gif?alt=media&token=419341f4-cfbf-45db-b8a3-f2cf6c1c975b'>
<img id='ف74' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1093.gif?alt=media&token=55764ba4-03b2-4f57-bfdb-bfc39970a3be'>
<img id='ف75' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1100.gif?alt=media&token=57a47bf8-004d-4e04-980c-438d78acee68'>
<img id='ف76' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1095.gif?alt=media&token=ca2fa359-e18a-4f01-8274-d2f284188efb'>
<img id='ف77' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1053.gif?alt=media&token=2df6d8bf-f3b3-4ffe-948f-25cb92e949ed'>
<img id='ف78' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1083.gif?alt=media&token=1b157fc1-5b94-4f20-871d-13473696f7fe'>
<img id='ف79' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1076.gif?alt=media&token=edad482d-a4f4-41c6-aad2-3b9ea117c4da'>
<img id='ف80' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1054.gif?alt=media&token=09164f20-a1c0-463a-b2ae-43f77d3a3192'>
<img id='ف81' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1085.gif?alt=media&token=d789f5ba-3171-4e7d-a072-35ff7b88bf67'>
<img id='ف82' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1043.gif?alt=media&token=6462981e-e979-4f5a-a994-51ec6164080d'>
<img id='ف83' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1092.GIF?alt=media&token=065753b6-4388-4964-a8b9-49d2bf02188b'>
<img id='ف84' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1080.gif?alt=media&token=7614ead6-aad8-4a8c-b16f-8df485e1c083'>
<img id='ف85' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1087.gif?alt=media&token=26391c70-cd8d-40f6-80c0-a082dfbfa79c'>
<img id='ف86' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1058.gif?alt=media&token=33912252-7ce4-4ace-9629-5a58ea971478'>
<img id='ف87' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1049.gif?alt=media&token=6f349477-2a78-4bd0-bf20-a56becd9a0df'>
<img id='ف88' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1201.gif?alt=media&token=cbd760e2-8088-4220-8e85-03c8bd89e210'>
<img id='ف89' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1071.gif?alt=media&token=f0ed6cd7-154a-4475-a8e0-b71da836fce5'>
<img id='ف90' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1084.gif?alt=media&token=35c2bb4f-59d9-4986-8ed7-3267ccaadc15'>
<img id='ف91' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1056.gif?alt=media&token=adff4202-8276-4262-a3ca-22afd58b11c3'>
<img id='ف92' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1057.gif?alt=media&token=69f9b01a-0003-46db-9839-fa8eba5a11c9'>
<img id='ف93' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1091.gif?alt=media&token=8ec243d6-5fed-4168-abd4-375cf19ee286'>
<img id='ف94' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1101.gif?alt=media&token=7a7664ef-79fd-45f6-973e-3fe01a381d0b'>
<img id='ف95' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1098.gif?alt=media&token=3fcc5147-76c5-4a22-bb10-4b3be83e5297'>
<img id='ف96' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1078.png?alt=media&token=f20cd68d-2b99-4007-bd20-222dcfca8db1'>
<img id='ف97' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1050.gif?alt=media&token=d1b18fca-b03a-48ac-81c0-067a68684068'>
<img id='ف98' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1074.gif?alt=media&token=2f0fca4d-ebd1-4b1b-8320-1dbffa823384'>
<img id='ف99' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1086.gif?alt=media&token=dc6e5342-5d44-4d98-97b2-c72c69dc4d42'>
<img id='ف100' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1079.gif?alt=media&token=10005923-b62b-46d5-93f9-35026f46b1c4'>
<img id='ف101' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1089.gif?alt=media&token=56bbec41-97ce-4e79-a774-5dfae3b0bf7f'>
<img id='ف102' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1190.gif?alt=media&token=bd425190-200e-4216-9509-6091e31e9a72'>
<img id='ف103' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1111.gif?alt=media&token=65db9201-3d09-4613-8d26-17a06a4f714d'>
<img id='ف104' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1102.png?alt=media&token=472a357d-e91a-43a3-b672-1dae4806e5fb'>
<img id='ف105' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1110.gif?alt=media&token=9965c614-53c4-469a-bb8c-3cf5c780b84c'>
<img id='ف106' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1106.gif?alt=media&token=07ea1c7b-d869-4477-9ae7-aac33ca6bc1f'>
<img id='ف107' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1108.gif?alt=media&token=46b670ba-bc3a-4cae-9466-03f17c3f5f7d'>
<img id='ف108' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1105.gif?alt=media&token=36481ce8-0b19-4db8-a07f-76914648945a'>
<img id='ف109' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1070.gif?alt=media&token=82c7d2d0-c8b7-4227-961f-147ca38b06c3'>
<img id='ف110' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1107.gif?alt=media&token=6e605a30-16f5-4a85-95db-2312f8e1f073'>
<img id='ف111' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g9dtth481001abuD1DaCPG.gif?alt=media&token=48baf5dd-adfe-4d59-ab83-94e03a9f9df0'>
<img id='ف112' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1193.gif?alt=media&token=219e968b-2d09-4012-be07-7d7e364f4311'>
<img id='ف113' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1009.gif?alt=media&token=f9b2dd4f-8962-4334-a43f-99b16e64b71f'>
<img id='ف114' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1196.gif?alt=media&token=41661f44-97e2-4923-ad20-f36e5c52f460'>
<img id='ف115' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g9dtro7b100vuWSf0eivXG.gif?alt=media&token=f9ba54d6-c77e-4cf8-a376-912644491614'>
<img id='ف116' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1194.gif?alt=media&token=d89a4b2c-73e6-423d-b63d-65bac755d40b'>
<img id='ف117' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1023.gif?alt=media&token=a7c83ef4-c685-4e75-96ec-dda8d7e0a926'>
<img id='ف118' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1200.gif?alt=media&token=63a860ed-e417-437d-89c0-4ba26bba9479'>
<img id='ف119' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1145.gif?alt=media&token=2d5a3fcc-b09b-47fd-b3f0-886d58e33de7'>
<img id='ف120' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1191.gif?alt=media&token=9be1db13-8c66-43f3-bcbd-4772ea367a5b'>
<img id='ف121' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g925s5cr100jHuPG1OGHaW.gif?alt=media&token=d0a527b8-dcb6-4d56-a0c2-2aa465ee23e6'>
<img id='ف122' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1199.gif?alt=media&token=3032e63a-2c21-4edf-b029-7df3488cc51e'>
<img id='ف123' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1197.gif?alt=media&token=868f78b8-527f-4588-9fb6-3b737afe70e4'>
<img id='ف124' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1202.gif?alt=media&token=a454dc46-e99b-46fb-ac48-534fe9e8a2ce'>
<img id='ف125' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1198.gif?alt=media&token=c5ea9166-376f-4d80-a14d-c03b4452410e'>
<img id='ف126' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1155.gif?alt=media&token=d095b024-cc85-40bd-8d06-3dacddd35746'>
<img id='ف127' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g9dtu1og100yybL00rTzP9.gif?alt=media&token=d5c40bec-4a94-4fb7-9252-0f1a3f4ccac2'>
<img id='ف128' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1192.gif?alt=media&token=973f91b2-7f3a-433e-9a23-8524db10b893'>
<img id='ف129' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g9dttqu1101P04901DmTqW.gif?alt=media&token=a9391bb5-c536-4196-8029-cdb1827212bc'>
<img id='ف130' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1188.gif?alt=media&token=1b7ffe82-b8b6-46e5-b820-8eaa714b5c99'>
<img id='ف131' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g98rnjr71010vjbn141Xv4.gif?alt=media&token=2c1a3670-d0ba-469b-b5ec-46c31eacce86'>
<img id='ف132' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1218.gif?alt=media&token=00b4b39e-3b2e-4c33-8c8b-b28c1d91b451'>
<img id='ف133' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1152.gif?alt=media&token=7fe0962e-5593-43f5-a746-5d3b5b5f5c20'>
<img id='ف134' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1165.gif?alt=media&token=8592b4c7-8c44-4156-8656-7a3436040609'>
<img id='ف135' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1024.gif?alt=media&token=d56bc95c-c89e-44d1-bf7a-372fcb45679c'>
<img id='ف136' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1189.jpeg?alt=media&token=3425844a-1ed6-4629-a892-bf08448bf98d'>
<img id='ف137' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1183.gif?alt=media&token=10f0b21c-84a9-459e-a2f8-327941e271d1'>
<img id='ف138' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1173.gif?alt=media&token=36478647-f6f2-431a-90f2-028cb7ad6fff'>
<img id='ف139' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1020.gif?alt=media&token=d3f7231c-616b-4d5d-a7ab-a4fcaaceccc3'>
<img id='ف140' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1182.gif?alt=media&token=c247fb67-2d95-42d8-8271-3740430a081c'>
<img id='ف141' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1207.gif?alt=media&token=abccf933-bfbd-4252-a030-35e784841ad8'>
<img id='ف142' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1002.gif?alt=media&token=8e795ca1-988f-4dec-9718-152beea7bd60'>
<img id='ف143' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1014.gif?alt=media&token=625e7d6a-873d-49e7-a62a-80979a4fb5f2'>
<img id='ف144' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1172.gif?alt=media&token=c5a23eac-7c34-4bf1-a45d-c71fe2770aab'>
<img id='ف145' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1175.gif?alt=media&token=6e88096a-6626-4ac7-a165-a7d8d28d69ec'>
<img id='ف146' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1176.gif?alt=media&token=6d1ed29b-243c-43a7-8f9c-fd92ded546db'>
<img id='ف147' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1168.gif?alt=media&token=51d1192d-2476-4981-8135-3b2d69254b50'>
<img id='ف148' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1018.gif?alt=media&token=c0a90569-ddf9-490b-886b-2a951e078071'>
<img id='ف149' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1177.gif?alt=media&token=fae4e642-670f-4e67-a24f-4665df02116b'>
<img id='ف150' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1171.gif?alt=media&token=f6d0449e-e37a-4815-9fb4-84e3058022aa'>
<img id='ف151' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1006.gif?alt=media&token=e72e8934-b4cb-4c26-bfaf-ab7d2f4bc4d3'>
<img id='ف152' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1160.gif?alt=media&token=14fb2439-966a-49e7-9cbe-092b42b377a7'>
<img id='ف153' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1148.gif?alt=media&token=40ef54be-ea78-41d7-a16f-e9c1bfff66ea'>
<img id='ف154' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1146.gif?alt=media&token=30a4d145-22ad-40ca-becd-4c2e047df211'>
<img id='ف155' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1159.png?alt=media&token=0e0b0d93-6cc0-4aa8-b04a-d112e4b0ed43'>
<img id='ف156' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1158.gif?alt=media&token=d858ba74-fd5e-4737-bab0-e95808aaffb4'>
<img id='ف157' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1163.gif?alt=media&token=b7758623-5a34-4bd1-b354-292ca82f70c4'>
<img id='ف158' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1195.gif?alt=media&token=d901d6e7-c447-4d9a-9397-4d50b3c34dd1'>
<img id='ف159' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1153.gif?alt=media&token=10e8ecb5-e538-4d08-ae73-74383ce99ff1'>
<img id='ف160' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g98rqotj101qrayez90bb.gif?alt=media&token=f9ca2989-3b14-4270-b253-914af6e2ab5b'>
<img id='ف161' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1151.gif?alt=media&token=b8069caf-1162-43b6-b153-a999d5895939'>
<img id='ف162' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1164.gif?alt=media&token=035444d0-c5c3-4fb6-8dee-0cf84ea3bd1c'>
<img id='ف163' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1154.png?alt=media&token=db6b1c8e-57de-455a-a790-080b4bb57fda'>
<img id='ف164' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1010.gif?alt=media&token=d4f7c044-c224-4b7a-a5e2-7a826488feba'>
<img id='ف165' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1167.gif?alt=media&token=66d2b92c-9094-4798-9233-4857e8b1854e'>
<img id='ف166' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1005.gif?alt=media&token=a35f30d9-19f9-40a0-ab67-aec34a2f8e47'>
<img id='ف167' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1203.png?alt=media&token=d5db4d61-3861-4a1c-b45b-cdc532dd1521'>
<img id='ف168' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1011.gif?alt=media&token=301b10af-fd36-4739-ba01-b26c20e6c2e2'>
<img id='ف169' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1001.gif?alt=media&token=1f83d978-36e0-423b-94b1-a12fac49faa5'>
<img id='ف170' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1179.gif?alt=media&token=4ebc19de-0151-4c0b-88c5-d37d2eef60e8'>
<img id='ف171' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1015.bmp?alt=media&token=3bb5b398-22b2-4a5e-9698-062beb935c53'>
<img id='ف172' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1205.gif?alt=media&token=79c2a903-579c-4b1d-8625-8713b81f0842'>
<img id='ف173' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1178.gif?alt=media&token=abbc294b-970f-42b5-9c9f-ab3fb2dfd923'>
<img id='ف174' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1166.gif?alt=media&token=29e0906b-103a-43ca-a4f5-5cafeec5bb0d'>
<img id='ف175' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1174.gif?alt=media&token=c42c9469-1bc1-480b-814b-f0a97dae7148'>
<img id='ف176' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1169.gif?alt=media&token=66b3dc76-cf9d-4e59-9ecf-9eaf7385e15f'>
<img id='ف177' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fkings.gif?alt=media&token=fa453121-63b7-4197-b992-6731d32f67fb'>
<img id='ف178' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1204.gif?alt=media&token=c09e7ea4-2dae-4b89-b718-4606cf98c04f'>
<img id='ف179' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1187.gif?alt=media&token=612f9822-ffb9-4af4-bc43-16c9e6ba8203'>
<img id='ف180' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1180.gif?alt=media&token=69899543-3e1d-4d57-b40d-c7eb19042b08'>
<img id='ف181' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1186.gif?alt=media&token=b33cf140-40ed-4c8a-ac93-8c191a79226c'>
<img id='ف182' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1215.gif?alt=media&token=6e18ce74-8a1c-482f-9f33-3c9c7a99de3f'>
<img id='ف183' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1008.gif?alt=media&token=ea41f45c-acd5-48d8-a46c-b3f7983aef50'>
<img id='ف184' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1ft0vc2g6101yP4u01Xaf4C.gif?alt=media&token=dfecb76d-6ca4-4984-9609-ea9834ec2690'>
<img id='ف185' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1214.gif?alt=media&token=407ad537-9729-4b99-a906-8f7a0256ce6e'>
<img id='ف186' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1212.gif?alt=media&token=ce16a57e-a3bc-49c8-a31a-bbcefca5ca66'>
<img id='ف187' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1213.gif?alt=media&token=bcbffe78-b2cb-471e-8369-8a52f7da0d4a'>
<img id='ف188' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1216.gif?alt=media&token=2a52103b-c6c6-4e3d-84e3-854b56f10fcb'>
<img id='ف189' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1229.gif?alt=media&token=200e5a4a-0961-4417-a19d-40055c98ed5b'>
<img id='ف190' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1211.gif?alt=media&token=d5589594-5a11-4401-a296-2c3e2cbd2fc5'>
<img id='ف191' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1209.gif?alt=media&token=9d8df66c-eb22-4220-907f-03c9c5dfcfd2'>
<img id='ف192' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1219.gif?alt=media&token=9bde0832-c10a-4921-b7b5-b552fa32933a'>
<img id='ف193' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1208.gif?alt=media&token=2ac73fea-0ecb-431a-8917-f036451caf2b'>
<img id='ف194' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1206.gif?alt=media&token=bba5df44-56ea-41ec-b22c-bfd547da2061'>
<img id='ف195' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1222.gif?alt=media&token=0ab69a4f-4785-44e9-a14c-5ff7455cbd32'>
<img id='ف196' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1226.gif?alt=media&token=08b9e443-cf41-4f53-8201-a6ec54955b45'>
<img id='ف197' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1230.gif?alt=media&token=f907eeb4-0317-485a-a6f8-325c43e3ba11'>
<img id='ف198' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1228.gif?alt=media&token=1ed7af7f-f434-40f4-9e71-67581e024424'>
<img id='ف199' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1225.gif?alt=media&token=9d5a65b5-00d8-4404-99fd-8e7e0b247517'>
<img id='ف200' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1220.gif?alt=media&token=faabba19-9c01-4129-8b8d-87ac9d6283f0'>
<img id='ف201' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1217.gif?alt=media&token=d2327248-eb1b-42d7-beac-d171c8945969'>
<img id='ف202' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1221.gif?alt=media&token=2fb879ba-22e7-43c0-b1f9-7441ce376fa6'>
<img id='ف203' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1241.gif?alt=media&token=86826cce-007c-4a1c-97a7-1b054ba8d33d'>
<img id='ف204' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1124.gif?alt=media&token=ef4df657-94b9-493f-b95d-2e55a4410377'>
<img id='ف205' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1231.gif?alt=media&token=732b4486-0cc0-4b2f-86d4-da39d2be81d0'>
<img id='ف206' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1233.gif?alt=media&token=0324d981-5bc0-4307-9bbe-69492b208b93'>
<img id='ف207' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1234.gif?alt=media&token=d9d07709-d7a8-418e-80a3-24618d2c1256'>
<img id='ف208' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1133.GIF?alt=media&token=106e636f-c79f-4d10-a8a5-1cd579a0b8d2'>
<img id='ف209' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1136.gif?alt=media&token=93a7b25e-23db-43c9-b0af-389dda305cef'>
<img id='ف210' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1239.gif?alt=media&token=6b04e675-2644-41b5-a084-64c957c8e1e9'>
<img id='ف211' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1243.gif?alt=media&token=fcf2bf73-86c7-4600-858c-da01d67e8dac'>
<img id='ف212' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1238.gif?alt=media&token=4d52610f-e730-4684-9d12-bcf767458ed5'>
<img id='ف213' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1129.gif?alt=media&token=2beace75-de38-4ba3-b8d4-d8ba68ffca66'>
<img id='ف214' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1130.gif?alt=media&token=d755154a-6791-4523-913f-811315bfeb0b'>
<img id='ف215' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1127.gif?alt=media&token=c10df26c-a69d-4e63-b540-1205fc688385'>
<img id='ف216' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1223.gif?alt=media&token=2aead6f7-a413-459f-984b-b2bd29a68c0f'>
<img id='ف217' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1235.gif?alt=media&token=5913ab23-56de-4f0b-ae0d-e3766f5051b3'>
<img id='ف218' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1236.gif?alt=media&token=a0715386-c44f-4c4d-b8ba-7e2fa86dab7a'>
<img id='ف219' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1237.png?alt=media&token=e343ec84-1775-4629-b5a9-869153ac1a14'>
<img id='ف220' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1227.gif?alt=media&token=64e25266-cf86-4fd5-8fc2-75a355361bda'>
<img id='ف221' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1224.gif?alt=media&token=9ad713ec-d3b3-42b7-996e-c474785cab56'>
<img id='ف222' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1128.gif?alt=media&token=2ee14434-1558-4bac-9bbb-99f8fdb7ca74'>
<img id='ف223' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1126.gif?alt=media&token=bddc2bae-23a7-436b-8d17-30fd8a54116a'>
<img id='ف224' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1143.gif?alt=media&token=826eabe6-7da6-4a44-83b9-5b710d14ec41'>
<img id='ف225' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1240.gif?alt=media&token=ebda50ad-25a1-48ae-b60e-c151286b4182'>
<img id='ف226' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1114.GIF?alt=media&token=00f8e55c-a156-4900-a9be-0972d51f267b'>
<img id='ف227' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1232.gif?alt=media&token=6b7dce86-cdaf-4279-b3ef-55249f710765'>
<img id='ف228' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1244.gif?alt=media&token=71454a37-24fd-4903-8dce-8ebe81b7f2bb'>
<img id='ف229' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1115.GIF?alt=media&token=6c6a12ea-f19a-4b42-9b5c-74509a1eabbe'>
<img id='ف230' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1113.gif?alt=media&token=fb1bd951-5bb4-4d6f-964c-c7760dc574de'>
<img id='ف231' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1123.gif?alt=media&token=6d7e0231-7cb9-4106-a8b3-6130196bfb24'>
<img id='ف232' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1116.gif?alt=media&token=6c3ffba8-aad3-4864-88d8-3bc27bd0b7bb'>
<img id='ف233' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g9l5k202101qruP51HDvfG.gif?alt=media&token=8016cb39-4647-46e5-8ea1-96926258b68b'>
<img id='ف234' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1131.png?alt=media&token=bf47c3a6-4b01-49a9-98ea-d608aa3bad69'>
<img id='ف235' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1112.gif?alt=media&token=89920de4-448f-4253-9a66-1b959af03609'>
<img id='ف235' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1132.gif?alt=media&token=d8d8c093-6c30-4f7b-945d-961bdd5e8d88'>
<img id='ف236' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1242.gif?alt=media&token=e95b4332-53db-461c-aa5c-9ee6c937d32e'>
<img id='ف237' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1135.gif?alt=media&token=615aca7d-56e5-48a0-8b9a-d83dd4682a5e'>
<img id='ف238' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1245.gif?alt=media&token=a8304a7c-1343-423c-8ba6-f9b19c7a4302'>
<img id='ف239' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1138.gif?alt=media&token=1d7fdce5-d075-4677-8462-59face1890dd'>
<img id='ف240' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1134.gif?alt=media&token=4794e68b-968c-4f6a-8bf4-c6842ee8eca0'>
<img id='ف241' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1137.gif?alt=media&token=79943726-4679-4662-988d-c119182221ce'>
<img id='ف242' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1140.gif?alt=media&token=fad50c8d-1489-4955-87c2-2802bf8ff42b'>
<img id='ف243' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1246.gif?alt=media&token=1d5978ac-cb7b-4817-b101-21d396352d9c'>
<img id='ف244' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1141.gif?alt=media&token=b8562088-e6b1-409e-89c9-218b46857112'>
<img id='ف245' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1142.gif?alt=media&token=58bc534e-4fdc-4b11-8290-625d5cfc3512'>
<img id='ف246' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1139.gif?alt=media&token=6f3a4a3f-0199-467c-a7a8-18b563277dcd'>
<img id='ف247' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1250.gif?alt=media&token=ee0d7ba5-a6e8-40dc-91d8-e76bd3e9aef8'>
<img id='ف248' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1255.gif?alt=media&token=6e31965e-57d9-424c-8508-dc7a9b84d6b5'>
<img id='ف249' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1254.gif?alt=media&token=6decf022-b880-4516-996e-cd1c8746b303'>
<img id='ف250' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1247.gif?alt=media&token=42f04901-e7e7-4cbc-9d39-b4a33af2dd2d'>
<img id='ف251' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1249.gif?alt=media&token=f3f606b1-ff78-4347-a52b-350d11af7bd4'>
<img id='ف252' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1248.gif?alt=media&token=bc974023-a43c-47fe-8369-8d6bc09f4f6c'>
<img id='ف253' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Flock.png?alt=media&token=c7d582eb-eee5-4015-89ab-60c9442102c2'>
<img id='ف254' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1253.jpeg?alt=media&token=31be7bd9-4e0f-4b6d-aeb1-41f34420c125'>
<img id='ف255' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1251.gif?alt=media&token=d76d417d-575d-4a60-b245-1bf919b6fa98'>
<img id='ف256' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1252.jpeg?alt=media&token=a210e0d7-a35c-492d-be80-36ca53be3eb8'>
<img id='ف257' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1258.gif?alt=media&token=a5894ca8-28b5-4ec2-804d-2fde55d1012b'>
<img id='ف258' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1257.gif?alt=media&token=4c640dc4-e15d-4036-987e-78c552656971'>
<img id='ف259' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fmic.png?alt=media&token=ab2ff817-6eb4-444a-9352-7aed3ec582c6'>
<img id='ف260' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1117.GIF?alt=media&token=aa775008-e3ec-40be-8cfc-2dbbab7a51be'>
<img id='ف261' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1fsej9udg10084uPm15qS8i.gif?alt=media&token=5d1936fd-8e0d-4343-be4b-4b8066908947'>
<img id='ف262' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1256.gif?alt=media&token=e751175d-9055-49cb-8774-ae727dcb4b5e'>
<img id='ف263' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1120.png?alt=media&token=8b34a257-814e-4b30-ac4a-906852a1fe9b'>
<img id='ف264' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1122.gif?alt=media&token=f2b650eb-a207-41a8-8c46-17b37c76ff01'>
<img id='ف265' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1ekb8jor310.gif?alt=media&token=998601dd-dded-4131-a6ea-ccd22751f6e6'>
<img id='ف266' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1119.gif?alt=media&token=d5ca6eb5-a107-4b2a-acc0-34f7f119ed1b'>
<img id='ف267' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1118.gif?alt=media&token=1bd42cf4-2b80-4b5b-9cde-b12365bc5336'>
<img id='ف268' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1burer85r10.gif?alt=media&token=0663946c-c864-4c93-bfd7-f30855f66230'>
<img id='ف269' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1eioaf9ei10.gif?alt=media&token=dcfb4c68-d2bd-4205-b60f-cf835c8aa972'>
<img id='ف270' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1bvvmep2j10.png?alt=media&token=75aff95b-ee0d-40ad-aef7-284d40dce820'>
<img id='ف271' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fs2.png?alt=media&token=22f8b19b-0e8f-4b8b-9920-a666ff24bcee'>
<img id='ف272' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fw4.png?alt=media&token=ad750e08-8f45-4d54-8419-df4d6502ac5d'>
<img id='ف273' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1fsh2bfp3100nyXD41z455y.gif?alt=media&token=afc4a076-4ef0-410a-9779-6baecaf3f37c'>
<img id='ف274' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1125.gif?alt=media&token=4cf87153-76c1-4697-a6d0-9335e841670e'>
<img id='ف275' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fs1.png?alt=media&token=0397b0fd-a1a7-4865-986b-a09bace7524f'>
<img id='ف276' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g867kq2r101zPWv91Cje1n.gif?alt=media&token=ec4e39d2-5244-4629-ab32-735e40e234ac'>
<img id='ف277' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fs3.png?alt=media&token=f34d2b6e-cc22-416a-9a44-d5c24644b7fe'>
<img id='ف278' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1ft6dpbvp1008XiCK1iSOzG.gif?alt=media&token=efceed8c-85ab-47e2-9e0b-5429940f6028'>
<img id='ف279' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fpic.png?alt=media&token=b6ed3094-7599-4f0f-a9fb-0d80b47fd433'>
<img id='ف280' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g7669rls100WKT4j1GHLra.gif?alt=media&token=55919d52-ba26-42b6-a5f3-b338cc226905'>
<img id='ف281' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fs0.png?alt=media&token=10f9a682-b2c9-47ac-8f46-1b7038029afa'>
<img id='ف282' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fprv1.png?alt=media&token=aa93c922-4927-4d63-8665-3f158a136c54'>
<img id='ف283' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fs4.png?alt=media&token=bda5b4fb-6e42-4b04-b52a-c9cab793ecb8'>
<img id='ف284' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Froom.png?alt=media&token=7ca3caff-53df-4463-87cc-f340a1cb1057'>
<img id='ف285' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1burdu33110.gif?alt=media&token=375d03b7-fa6b-47a9-ba43-7772c3337561'>
<img id='ف286' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1121.gif?alt=media&token=eeb06dd0-61ed-4a34-aa6a-bc7922087eb2'>
`
        hanit = false;
    } else {
        if (document.querySelector('.icons-hanitss').style.display === "block")
            document.querySelector('.icons-hanitss').style.display = "none";
        else
            document.querySelector('.icons-hanitss').style.display = "block";
    }
});

var emojey = true;
$(document).on('click', '.emobox', function () {
    if (emojey) {
        $('.emojey').toggle();
        document.querySelector('.emojey').innerHTML = `
        <img id='ف0' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1016.gif?alt=media&token=ae346feb-1820-4f9c-9a18-375c1d5c3f64 '> 
        <img id='ف1' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Ffavicon.ico?alt=media&token=a00b5cdf-c93a-40be-a3d6-727ff8a6bc6d'>
        <img id='ف2' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1003.gif?alt=media&token=869dab72-05e7-4877-a4b0-1ba482fcbff7'>
        <img id='ف3' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Femoii.gif?alt=media&token=98d50b59-8139-4e4d-82d4-7b5a49afc06c'>
        <img id='ف4' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1072.gif?alt=media&token=5a91f180-81a6-41eb-8f22-6167bc86d079'>
        <img id='ف5' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1068.gif?alt=media&token=e1264799-3802-4f03-940b-d3d402881ef4'>
        <img id='ف6' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1025.gif?alt=media&token=f4f91634-1a11-4fa3-9e07-d5f5822f9653'>
        <img id='ف7' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1063.gif?alt=media&token=fbb1598e-fc50-413b-9108-109948279960'>
        <img id='ف8' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1062.gif?alt=media&token=f9b59fa8-4ffe-4bf1-827d-8a5a489c8bd1'>
        <img id='ف9' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1022.gif?alt=media&token=18060b42-95e5-41ae-a5e7-26950426f6de'>
        <img id='ف10' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1013.gif?alt=media&token=aec40a69-dd03-4952-aaf5-8eaccaa7d42f'>
        <img id='ف11' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1066.gif?alt=media&token=59f79f2c-dd38-448d-8c1b-7ad0623294f1'>
        <img id='ف12' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1021.gif?alt=media&token=3b7b9495-dc4e-486a-83a1-abcd027b1a5b'>
        <img id='ف13' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1065.gif?alt=media&token=9d4cb722-8764-48c1-8426-ff0e17d748ed'>
        <img id='ف14' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1017.gif?alt=media&token=4cd0a39c-24c8-4417-b234-022d173d64ea'>
        <img id='ف14' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1096.gif?alt=media&token=01e304ca-33a9-4e11-bacd-f9f8814488a9'>
        <img id='ف15' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1073.gif?alt=media&token=baa6c197-b8b3-4ac5-ac65-22451315d995'>
        <img id='ف16' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1069.gif?alt=media&token=46ee296b-5f7d-4ca8-9141-121bc3a171b6'>
        <img id='ف17' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1067.gif?alt=media&token=2f0229f9-0296-4304-9e48-484d53c1d538'>
        <img id='ف18' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1082.gif?alt=media&token=77d0e483-1355-421f-b544-f00a9a85494a'>
        <img id='ف19' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1094.gif?alt=media&token=63e61835-f003-42ec-b7a0-8b28993ccf0f'>
        <img id='ف20' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1099.gif?alt=media&token=b4df13c0-bac3-4f8e-8134-0ba42072b659'>
        <img id='ف21' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1029.gif?alt=media&token=fb888b80-18be-424e-83ba-d901c84b6894'>
        <img id='ف22' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1039.gif?alt=media&token=a461c138-ebfa-46a7-979d-59109b8e0dca'>
        <img id='ف23' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Ff11.gif?alt=media&token=dd788395-3d14-41e4-aa70-a7113ce1e236'>
        <img id='ف24' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1064.jpg?alt=media&token=672c71ef-1d24-4dfc-b614-b87d904ad121'>
        <img id='ف25' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1036.PNG?alt=media&token=7f3daa09-8c7e-4bcb-9683-c2979f8e313b'>
        <img id='ف26' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1019.gif?alt=media&token=1846d3c5-0b60-475b-9576-42b035cdb951'>
        <img id='ف27' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1037.gif?alt=media&token=87ad5ae3-0420-43cf-9f39-c436fa547e5c'>
        <img id='ف28' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1038.png?alt=media&token=8ec0b402-af46-48af-8a2d-abfb507ae58b'>
        <img id='ف29' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1034.gif?alt=media&token=9adf28a5-4874-4954-aef9-b8aa83d8b35a'>
        <img id='ف30' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1026.gif?alt=media&token=40874ae7-a4ce-4498-bd8d-5ce90daeecfe'>
        <img id='ف31' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1028.gif?alt=media&token=4ce3650d-472b-4d2b-bc60-279aa9de3739'>
        <img id='ف32' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1046.gif?alt=media&token=c8c0fb03-1b86-40c1-88b4-32d48e55a75b'>
        <img id='ف33' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1031.gif?alt=media&token=104165a3-7433-45a7-a9f6-da580e1ba354'>
        <img id='ف34' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1032.gif?alt=media&token=a072b734-7e39-46de-ac34-1eff2b381206'>
        <img id='ف35' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1027.gif?alt=media&token=db905d80-19cb-46c3-a3b8-a5d9514127d6'>
        <img id='ف36' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1030.gif?alt=media&token=a36104ae-e9c6-46a4-9a44-46a5d7a9574d'>
        <img id='ف37' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1035.PNG?alt=media&token=355e7fe9-00fd-4496-babb-1c1ed6b16a3b'>
        <img id='ف39' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1048.gif?alt=media&token=f8923361-44bd-49ac-88cf-ecc857b9903b'>
        <img id='ف39' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1157.gif?alt=media&token=20ec2fc8-efa5-4a93-9608-a7481055878b'>
        <img id='ف34' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1156.gif?alt=media&token=7801f0b5-11ab-468a-a0e7-ae9b8a75fa57'>
        <img id='ف35' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1161.gif?alt=media&token=2776e2fa-c0aa-4c49-8e18-d04fa20f6dbe'>
        <img id='ف36' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1147.gif?alt=media&token=fc5691c2-e8f6-4383-aa82-767162f81630'>
        <img id='ف37' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1150.GIF?alt=media&token=f141130a-9370-46a8-b0e2-657661daa19a'>
        <img id='ف38' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1162.gif?alt=media&token=c1ab991e-89f9-47a8-b8cb-a2c029c90767'>
        <img id='ف39' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1144.gif?alt=media&token=8f77faf8-7103-4e1b-b7d2-4cd5690a633e'>
        <img id='ف40' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g9ing6rf101n9zr1nXqbL.gif?alt=media&token=93876128-3165-4247-be30-ccf958504523'>
        <img id='ف41' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g98hs239101S59Tq0quHav-jpeg.png?alt=media&token=f82b8667-f422-4ee1-b308-addd73de3a44'>
        <img id='ف4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZValt=media&token=a04407a0-5b05-4fec-af30-0f7ade2224f7'>
        <img id='ف4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZValt=media&token=30701255-e4ab-4769-ab15-df8c2c9fe061'>
        <img id='ف4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZValt=media&token=599522e4-4899-4748-97a0-1ea3d04077ab'>
        <img id='ف4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZValt=media&token=cc49186c-1805-4e81-8e79-14d2eff078af'>
        <img id='ف4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZValt=media&token=8060721a-1f65-46cb-9441-7f0c748aeb5c'>
        <img id='ف4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZValt=media&token=55bf3de7-d83b-4093-ad7e-da34f4dd5f52'>
        <img id='ف4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZValt=media&token=9120b649-1778-4549-a242-8174258db0f5'>
        <img id='ف4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZValt=media&token=29300d59-f4e9-4868-8377-57fc4cc81aaa'>
        <img id='ف50' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1033.gif?alt=media&token=c9be27a6-2bed-4fa4-8aaf-6b64adabb6e9'>
        <img id='ف51' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1210.gif?alt=media&token=915af090-2f29-4f0f-a258-ef8abb9680a4'>
        <img id='ف52' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1040.gif?alt=media&token=2f9bb53b-3c00-4065-b894-74b5abae3673'>
        <img id='ف53' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1041.gif?alt=media&token=c4065c91-9482-4945-9536-7619c0b99c01'>
        <img id='ف54' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1055.gif?alt=media&token=07efe569-4793-48fd-ac75-acc9d78e2224'>
        <img id='ف55' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1097.gif?alt=media&token=29f54bbc-a35f-4784-ae65-4a9a10a1311e'>
        <img id='ف56' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1090.gif?alt=media&token=d47c8f93-e343-410c-9534-83061501510f'>
        <img id='ف57' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1109.gif?alt=media&token=d7ab2188-b811-47a7-968b-8575cf843377'>
        <img id='ف58' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1103.gif?alt=media&token=536925ca-edca-4055-a7a8-7c11cb155152'>
        <img id='ف59' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1060.gif?alt=media&token=0c075e29-a271-497f-83fd-221d9d82cabb'>
        <img id='ف60' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1051.gif?alt=media&token=3fa6c462-3ce1-441d-8304-7bb0e385dcd8'>
        <img id='ف61' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1047.gif?alt=media&token=7d0a7d82-df23-48f6-b960-0dd440d30cb8'>
        <img id='ف62' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1104.gif?alt=media&token=97b2df6c-4b06-481d-b671-f434e161b0c3'>
        <img id='ف63' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1045.gif?alt=media&token=3fab049d-1cc7-4e80-b855-fe194e88b31f'>
        <img id='ف64' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1059.gif?alt=media&token=df053139-4138-4269-8ef0-d6d2012b23e1'>
        <img id='ف65' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1052.gif?alt=media&token=c9990154-6558-4ab9-b115-7d30c040ee2b'>
        <img id='ف66' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1081.gif?alt=media&token=8a9703bb-31f5-4b75-aa46-426c243a51b6'>
        <img id='ف67' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1075.gif?alt=media&token=e0bdfdf8-058e-451d-a35e-e1bf14722aa9'>
        <img id='ف68' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1088.png?alt=media&token=f804182c-ec48-4986-ab96-7ba76af83dc6'>
        <img id='ف69' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1042.gif?alt=media&token=28fc9505-7c1a-4b26-89fe-b6ce1d8b3456'>
        <img id='ف70' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1044.gif?alt=media&token=a213e402-cc9e-4dd1-a54d-c60efc397b1d'>
        <img id='ف71' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1185.gif?alt=media&token=90221d94-3e06-4b07-87db-4b8f853d97c0'>
        <img id='ف72' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1077.gif?alt=media&token=a33356a4-ecd6-484e-af47-4cf8ff0cab46'>
        <img id='ف73' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1061.gif?alt=media&token=419341f4-cfbf-45db-b8a3-f2cf6c1c975b'>
        <img id='ف74' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1093.gif?alt=media&token=55764ba4-03b2-4f57-bfdb-bfc39970a3be'>
        <img id='ف75' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1100.gif?alt=media&token=57a47bf8-004d-4e04-980c-438d78acee68'>
        <img id='ف76' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1095.gif?alt=media&token=ca2fa359-e18a-4f01-8274-d2f284188efb'>
        <img id='ف77' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1053.gif?alt=media&token=2df6d8bf-f3b3-4ffe-948f-25cb92e949ed'>
        <img id='ف78' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1083.gif?alt=media&token=1b157fc1-5b94-4f20-871d-13473696f7fe'>
        <img id='ف79' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1076.gif?alt=media&token=edad482d-a4f4-41c6-aad2-3b9ea117c4da'>
        <img id='ف80' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1054.gif?alt=media&token=09164f20-a1c0-463a-b2ae-43f77d3a3192'>
        <img id='ف81' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1085.gif?alt=media&token=d789f5ba-3171-4e7d-a072-35ff7b88bf67'>
        <img id='ف82' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1043.gif?alt=media&token=6462981e-e979-4f5a-a994-51ec6164080d'>
        <img id='ف83' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1092.GIF?alt=media&token=065753b6-4388-4964-a8b9-49d2bf02188b'>
        <img id='ف84' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1080.gif?alt=media&token=7614ead6-aad8-4a8c-b16f-8df485e1c083'>
        <img id='ف85' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1087.gif?alt=media&token=26391c70-cd8d-40f6-80c0-a082dfbfa79c'>
        <img id='ف86' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1058.gif?alt=media&token=33912252-7ce4-4ace-9629-5a58ea971478'>
        <img id='ف87' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1049.gif?alt=media&token=6f349477-2a78-4bd0-bf20-a56becd9a0df'>
        <img id='ف88' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1201.gif?alt=media&token=cbd760e2-8088-4220-8e85-03c8bd89e210'>
        <img id='ف89' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1071.gif?alt=media&token=f0ed6cd7-154a-4475-a8e0-b71da836fce5'>
        <img id='ف90' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1084.gif?alt=media&token=35c2bb4f-59d9-4986-8ed7-3267ccaadc15'>
        <img id='ف91' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1056.gif?alt=media&token=adff4202-8276-4262-a3ca-22afd58b11c3'>
        <img id='ف92' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1057.gif?alt=media&token=69f9b01a-0003-46db-9839-fa8eba5a11c9'>
        <img id='ف93' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1091.gif?alt=media&token=8ec243d6-5fed-4168-abd4-375cf19ee286'>
        <img id='ف94' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1101.gif?alt=media&token=7a7664ef-79fd-45f6-973e-3fe01a381d0b'>
        <img id='ف95' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1098.gif?alt=media&token=3fcc5147-76c5-4a22-bb10-4b3be83e5297'>
        <img id='ف96' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1078.png?alt=media&token=f20cd68d-2b99-4007-bd20-222dcfca8db1'>
        <img id='ف97' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1050.gif?alt=media&token=d1b18fca-b03a-48ac-81c0-067a68684068'>
        <img id='ف98' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1074.gif?alt=media&token=2f0fca4d-ebd1-4b1b-8320-1dbffa823384'>
        <img id='ف99' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1086.gif?alt=media&token=dc6e5342-5d44-4d98-97b2-c72c69dc4d42'>
        <img id='ف100' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1079.gif?alt=media&token=10005923-b62b-46d5-93f9-35026f46b1c4'>
        <img id='ف101' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1089.gif?alt=media&token=56bbec41-97ce-4e79-a774-5dfae3b0bf7f'>
        <img id='ف102' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1190.gif?alt=media&token=bd425190-200e-4216-9509-6091e31e9a72'>
        <img id='ف103' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1111.gif?alt=media&token=65db9201-3d09-4613-8d26-17a06a4f714d'>
        <img id='ف104' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1102.png?alt=media&token=472a357d-e91a-43a3-b672-1dae4806e5fb'>
        <img id='ف105' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1110.gif?alt=media&token=9965c614-53c4-469a-bb8c-3cf5c780b84c'>
        <img id='ف106' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1106.gif?alt=media&token=07ea1c7b-d869-4477-9ae7-aac33ca6bc1f'>
        <img id='ف107' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1108.gif?alt=media&token=46b670ba-bc3a-4cae-9466-03f17c3f5f7d'>
        <img id='ف108' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1105.gif?alt=media&token=36481ce8-0b19-4db8-a07f-76914648945a'>
        <img id='ف109' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1070.gif?alt=media&token=82c7d2d0-c8b7-4227-961f-147ca38b06c3'>
        <img id='ف110' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1107.gif?alt=media&token=6e605a30-16f5-4a85-95db-2312f8e1f073'>
        <img id='ف111' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g9dtth481001abuD1DaCPG.gif?alt=media&token=48baf5dd-adfe-4d59-ab83-94e03a9f9df0'>
        <img id='ف112' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1193.gif?alt=media&token=219e968b-2d09-4012-be07-7d7e364f4311'>
        <img id='ف113' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1009.gif?alt=media&token=f9b2dd4f-8962-4334-a43f-99b16e64b71f'>
        <img id='ف114' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1196.gif?alt=media&token=41661f44-97e2-4923-ad20-f36e5c52f460'>
        <img id='ف115' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g9dtro7b100vuWSf0eivXG.gif?alt=media&token=f9ba54d6-c77e-4cf8-a376-912644491614'>
        <img id='ف116' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1194.gif?alt=media&token=d89a4b2c-73e6-423d-b63d-65bac755d40b'>
        <img id='ف117' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1023.gif?alt=media&token=a7c83ef4-c685-4e75-96ec-dda8d7e0a926'>
        <img id='ف118' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1200.gif?alt=media&token=63a860ed-e417-437d-89c0-4ba26bba9479'>
        <img id='ف119' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1145.gif?alt=media&token=2d5a3fcc-b09b-47fd-b3f0-886d58e33de7'>
        <img id='ف120' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1191.gif?alt=media&token=9be1db13-8c66-43f3-bcbd-4772ea367a5b'>
        <img id='ف121' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g925s5cr100jHuPG1OGHaW.gif?alt=media&token=d0a527b8-dcb6-4d56-a0c2-2aa465ee23e6'>
        <img id='ف122' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1199.gif?alt=media&token=3032e63a-2c21-4edf-b029-7df3488cc51e'>
        <img id='ف123' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1197.gif?alt=media&token=868f78b8-527f-4588-9fb6-3b737afe70e4'>
        <img id='ف124' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1202.gif?alt=media&token=a454dc46-e99b-46fb-ac48-534fe9e8a2ce'>
        <img id='ف125' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1198.gif?alt=media&token=c5ea9166-376f-4d80-a14d-c03b4452410e'>
        <img id='ف126' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1155.gif?alt=media&token=d095b024-cc85-40bd-8d06-3dacddd35746'>
        <img id='ف127' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g9dtu1og100yybL00rTzP9.gif?alt=media&token=d5c40bec-4a94-4fb7-9252-0f1a3f4ccac2'>
        <img id='ف128' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1192.gif?alt=media&token=973f91b2-7f3a-433e-9a23-8524db10b893'>
        <img id='ف129' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g9dttqu1101P04901DmTqW.gif?alt=media&token=a9391bb5-c536-4196-8029-cdb1827212bc'>
        <img id='ف130' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1188.gif?alt=media&token=1b7ffe82-b8b6-46e5-b820-8eaa714b5c99'>
        <img id='ف131' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g98rnjr71010vjbn141Xv4.gif?alt=media&token=2c1a3670-d0ba-469b-b5ec-46c31eacce86'>
        <img id='ف132' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1218.gif?alt=media&token=00b4b39e-3b2e-4c33-8c8b-b28c1d91b451'>
        <img id='ف133' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1152.gif?alt=media&token=7fe0962e-5593-43f5-a746-5d3b5b5f5c20'>
        <img id='ف134' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1165.gif?alt=media&token=8592b4c7-8c44-4156-8656-7a3436040609'>
        <img id='ف135' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1024.gif?alt=media&token=d56bc95c-c89e-44d1-bf7a-372fcb45679c'>
        <img id='ف136' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1189.jpeg?alt=media&token=3425844a-1ed6-4629-a892-bf08448bf98d'>
        <img id='ف137' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1183.gif?alt=media&token=10f0b21c-84a9-459e-a2f8-327941e271d1'>
        <img id='ف138' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1173.gif?alt=media&token=36478647-f6f2-431a-90f2-028cb7ad6fff'>
        <img id='ف139' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1020.gif?alt=media&token=d3f7231c-616b-4d5d-a7ab-a4fcaaceccc3'>
        <img id='ف140' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1182.gif?alt=media&token=c247fb67-2d95-42d8-8271-3740430a081c'>
        <img id='ف141' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1207.gif?alt=media&token=abccf933-bfbd-4252-a030-35e784841ad8'>
        <img id='ف142' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1002.gif?alt=media&token=8e795ca1-988f-4dec-9718-152beea7bd60'>
        <img id='ف143' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1014.gif?alt=media&token=625e7d6a-873d-49e7-a62a-80979a4fb5f2'>
        <img id='ف144' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1172.gif?alt=media&token=c5a23eac-7c34-4bf1-a45d-c71fe2770aab'>
        <img id='ف145' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1175.gif?alt=media&token=6e88096a-6626-4ac7-a165-a7d8d28d69ec'>
        <img id='ف146' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1176.gif?alt=media&token=6d1ed29b-243c-43a7-8f9c-fd92ded546db'>
        <img id='ف147' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1168.gif?alt=media&token=51d1192d-2476-4981-8135-3b2d69254b50'>
        <img id='ف148' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1018.gif?alt=media&token=c0a90569-ddf9-490b-886b-2a951e078071'>
        <img id='ف149' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1177.gif?alt=media&token=fae4e642-670f-4e67-a24f-4665df02116b'>
        <img id='ف150' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1171.gif?alt=media&token=f6d0449e-e37a-4815-9fb4-84e3058022aa'>
        <img id='ف151' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1006.gif?alt=media&token=e72e8934-b4cb-4c26-bfaf-ab7d2f4bc4d3'>
        <img id='ف152' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1160.gif?alt=media&token=14fb2439-966a-49e7-9cbe-092b42b377a7'>
        <img id='ف153' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1148.gif?alt=media&token=40ef54be-ea78-41d7-a16f-e9c1bfff66ea'>
        <img id='ف154' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1146.gif?alt=media&token=30a4d145-22ad-40ca-becd-4c2e047df211'>
        <img id='ف155' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1159.png?alt=media&token=0e0b0d93-6cc0-4aa8-b04a-d112e4b0ed43'>
        <img id='ف156' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1158.gif?alt=media&token=d858ba74-fd5e-4737-bab0-e95808aaffb4'>
        <img id='ف157' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1163.gif?alt=media&token=b7758623-5a34-4bd1-b354-292ca82f70c4'>
        <img id='ف158' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1195.gif?alt=media&token=d901d6e7-c447-4d9a-9397-4d50b3c34dd1'>
        <img id='ف159' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1153.gif?alt=media&token=10e8ecb5-e538-4d08-ae73-74383ce99ff1'>
        <img id='ف160' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g98rqotj101qrayez90bb.gif?alt=media&token=f9ca2989-3b14-4270-b253-914af6e2ab5b'>
        <img id='ف161' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1151.gif?alt=media&token=b8069caf-1162-43b6-b153-a999d5895939'>
        <img id='ف162' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1164.gif?alt=media&token=035444d0-c5c3-4fb6-8dee-0cf84ea3bd1c'>
        <img id='ف163' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1154.png?alt=media&token=db6b1c8e-57de-455a-a790-080b4bb57fda'>
        <img id='ف164' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1010.gif?alt=media&token=d4f7c044-c224-4b7a-a5e2-7a826488feba'>
        <img id='ف165' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1167.gif?alt=media&token=66d2b92c-9094-4798-9233-4857e8b1854e'>
        <img id='ف166' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1005.gif?alt=media&token=a35f30d9-19f9-40a0-ab67-aec34a2f8e47'>
        <img id='ف167' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1203.png?alt=media&token=d5db4d61-3861-4a1c-b45b-cdc532dd1521'>
        <img id='ف168' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1011.gif?alt=media&token=301b10af-fd36-4739-ba01-b26c20e6c2e2'>
        <img id='ف169' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1001.gif?alt=media&token=1f83d978-36e0-423b-94b1-a12fac49faa5'>
        <img id='ف170' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1179.gif?alt=media&token=4ebc19de-0151-4c0b-88c5-d37d2eef60e8'>
        <img id='ف171' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1015.bmp?alt=media&token=3bb5b398-22b2-4a5e-9698-062beb935c53'>
        <img id='ف172' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1205.gif?alt=media&token=79c2a903-579c-4b1d-8625-8713b81f0842'>
        <img id='ف173' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1178.gif?alt=media&token=abbc294b-970f-42b5-9c9f-ab3fb2dfd923'>
        <img id='ف174' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1166.gif?alt=media&token=29e0906b-103a-43ca-a4f5-5cafeec5bb0d'>
        <img id='ف175' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1174.gif?alt=media&token=c42c9469-1bc1-480b-814b-f0a97dae7148'>
        <img id='ف176' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1169.gif?alt=media&token=66b3dc76-cf9d-4e59-9ecf-9eaf7385e15f'>
        <img id='ف177' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fkings.gif?alt=media&token=fa453121-63b7-4197-b992-6731d32f67fb'>
        <img id='ف178' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1204.gif?alt=media&token=c09e7ea4-2dae-4b89-b718-4606cf98c04f'>
        <img id='ف179' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1187.gif?alt=media&token=612f9822-ffb9-4af4-bc43-16c9e6ba8203'>
        <img id='ف180' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1180.gif?alt=media&token=69899543-3e1d-4d57-b40d-c7eb19042b08'>
        <img id='ف181' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1186.gif?alt=media&token=b33cf140-40ed-4c8a-ac93-8c191a79226c'>
        <img id='ف182' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1215.gif?alt=media&token=6e18ce74-8a1c-482f-9f33-3c9c7a99de3f'>
        <img id='ف183' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1008.gif?alt=media&token=ea41f45c-acd5-48d8-a46c-b3f7983aef50'>
        <img id='ف184' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1ft0vc2g6101yP4u01Xaf4C.gif?alt=media&token=dfecb76d-6ca4-4984-9609-ea9834ec2690'>
        <img id='ف185' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1214.gif?alt=media&token=407ad537-9729-4b99-a906-8f7a0256ce6e'>
        <img id='ف186' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1212.gif?alt=media&token=ce16a57e-a3bc-49c8-a31a-bbcefca5ca66'>
        <img id='ف187' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1213.gif?alt=media&token=bcbffe78-b2cb-471e-8369-8a52f7da0d4a'>
        <img id='ف188' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1216.gif?alt=media&token=2a52103b-c6c6-4e3d-84e3-854b56f10fcb'>
        <img id='ف189' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1229.gif?alt=media&token=200e5a4a-0961-4417-a19d-40055c98ed5b'>
        <img id='ف190' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1211.gif?alt=media&token=d5589594-5a11-4401-a296-2c3e2cbd2fc5'>
        <img id='ف191' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1209.gif?alt=media&token=9d8df66c-eb22-4220-907f-03c9c5dfcfd2'>
        <img id='ف192' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1219.gif?alt=media&token=9bde0832-c10a-4921-b7b5-b552fa32933a'>
        <img id='ف193' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1208.gif?alt=media&token=2ac73fea-0ecb-431a-8917-f036451caf2b'>
        <img id='ف194' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1206.gif?alt=media&token=bba5df44-56ea-41ec-b22c-bfd547da2061'>
        <img id='ف195' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1222.gif?alt=media&token=0ab69a4f-4785-44e9-a14c-5ff7455cbd32'>
        <img id='ف196' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1226.gif?alt=media&token=08b9e443-cf41-4f53-8201-a6ec54955b45'>
        <img id='ف197' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1230.gif?alt=media&token=f907eeb4-0317-485a-a6f8-325c43e3ba11'>
        <img id='ف198' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1228.gif?alt=media&token=1ed7af7f-f434-40f4-9e71-67581e024424'>
        <img id='ف199' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1225.gif?alt=media&token=9d5a65b5-00d8-4404-99fd-8e7e0b247517'>
        <img id='ف200' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1220.gif?alt=media&token=faabba19-9c01-4129-8b8d-87ac9d6283f0'>
        <img id='ف201' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1217.gif?alt=media&token=d2327248-eb1b-42d7-beac-d171c8945969'>
        <img id='ف202' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1221.gif?alt=media&token=2fb879ba-22e7-43c0-b1f9-7441ce376fa6'>
        <img id='ف203' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1241.gif?alt=media&token=86826cce-007c-4a1c-97a7-1b054ba8d33d'>
        <img id='ف204' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1124.gif?alt=media&token=ef4df657-94b9-493f-b95d-2e55a4410377'>
        <img id='ف205' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1231.gif?alt=media&token=732b4486-0cc0-4b2f-86d4-da39d2be81d0'>
        <img id='ف206' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1233.gif?alt=media&token=0324d981-5bc0-4307-9bbe-69492b208b93'>
        <img id='ف207' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1234.gif?alt=media&token=d9d07709-d7a8-418e-80a3-24618d2c1256'>
        <img id='ف208' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1133.GIF?alt=media&token=106e636f-c79f-4d10-a8a5-1cd579a0b8d2'>
        <img id='ف209' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1136.gif?alt=media&token=93a7b25e-23db-43c9-b0af-389dda305cef'>
        <img id='ف210' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1239.gif?alt=media&token=6b04e675-2644-41b5-a084-64c957c8e1e9'>
        <img id='ف211' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1243.gif?alt=media&token=fcf2bf73-86c7-4600-858c-da01d67e8dac'>
        <img id='ف212' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1238.gif?alt=media&token=4d52610f-e730-4684-9d12-bcf767458ed5'>
        <img id='ف213' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1129.gif?alt=media&token=2beace75-de38-4ba3-b8d4-d8ba68ffca66'>
        <img id='ف214' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1130.gif?alt=media&token=d755154a-6791-4523-913f-811315bfeb0b'>
        <img id='ف215' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1127.gif?alt=media&token=c10df26c-a69d-4e63-b540-1205fc688385'>
        <img id='ف216' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1223.gif?alt=media&token=2aead6f7-a413-459f-984b-b2bd29a68c0f'>
        <img id='ف217' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1235.gif?alt=media&token=5913ab23-56de-4f0b-ae0d-e3766f5051b3'>
        <img id='ف218' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1236.gif?alt=media&token=a0715386-c44f-4c4d-b8ba-7e2fa86dab7a'>
        <img id='ف219' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1237.png?alt=media&token=e343ec84-1775-4629-b5a9-869153ac1a14'>
        <img id='ف220' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1227.gif?alt=media&token=64e25266-cf86-4fd5-8fc2-75a355361bda'>
        <img id='ف221' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1224.gif?alt=media&token=9ad713ec-d3b3-42b7-996e-c474785cab56'>
        <img id='ف222' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1128.gif?alt=media&token=2ee14434-1558-4bac-9bbb-99f8fdb7ca74'>
        <img id='ف223' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1126.gif?alt=media&token=bddc2bae-23a7-436b-8d17-30fd8a54116a'>
        <img id='ف224' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1143.gif?alt=media&token=826eabe6-7da6-4a44-83b9-5b710d14ec41'>
        <img id='ف225' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1240.gif?alt=media&token=ebda50ad-25a1-48ae-b60e-c151286b4182'>
        <img id='ف226' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1114.GIF?alt=media&token=00f8e55c-a156-4900-a9be-0972d51f267b'>
        <img id='ف227' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1232.gif?alt=media&token=6b7dce86-cdaf-4279-b3ef-55249f710765'>
        <img id='ف228' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1244.gif?alt=media&token=71454a37-24fd-4903-8dce-8ebe81b7f2bb'>
        <img id='ف229' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1115.GIF?alt=media&token=6c6a12ea-f19a-4b42-9b5c-74509a1eabbe'>
        <img id='ف230' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1113.gif?alt=media&token=fb1bd951-5bb4-4d6f-964c-c7760dc574de'>
        <img id='ف231' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1123.gif?alt=media&token=6d7e0231-7cb9-4106-a8b3-6130196bfb24'>
        <img id='ف232' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1116.gif?alt=media&token=6c3ffba8-aad3-4864-88d8-3bc27bd0b7bb'>
        <img id='ف233' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g9l5k202101qruP51HDvfG.gif?alt=media&token=8016cb39-4647-46e5-8ea1-96926258b68b'>
        <img id='ف234' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1131.png?alt=media&token=bf47c3a6-4b01-49a9-98ea-d608aa3bad69'>
        <img id='ف235' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1112.gif?alt=media&token=89920de4-448f-4253-9a66-1b959af03609'>
        <img id='ف235' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1132.gif?alt=media&token=d8d8c093-6c30-4f7b-945d-961bdd5e8d88'>
        <img id='ف236' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1242.gif?alt=media&token=e95b4332-53db-461c-aa5c-9ee6c937d32e'>
        <img id='ف237' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1135.gif?alt=media&token=615aca7d-56e5-48a0-8b9a-d83dd4682a5e'>
        <img id='ف238' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1245.gif?alt=media&token=a8304a7c-1343-423c-8ba6-f9b19c7a4302'>
        <img id='ف239' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1138.gif?alt=media&token=1d7fdce5-d075-4677-8462-59face1890dd'>
        <img id='ف240' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1134.gif?alt=media&token=4794e68b-968c-4f6a-8bf4-c6842ee8eca0'>
        <img id='ف241' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1137.gif?alt=media&token=79943726-4679-4662-988d-c119182221ce'>
        <img id='ف242' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1140.gif?alt=media&token=fad50c8d-1489-4955-87c2-2802bf8ff42b'>
        <img id='ف243' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1246.gif?alt=media&token=1d5978ac-cb7b-4817-b101-21d396352d9c'>
        <img id='ف244' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1141.gif?alt=media&token=b8562088-e6b1-409e-89c9-218b46857112'>
        <img id='ف245' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1142.gif?alt=media&token=58bc534e-4fdc-4b11-8290-625d5cfc3512'>
        <img id='ف246' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1139.gif?alt=media&token=6f3a4a3f-0199-467c-a7a8-18b563277dcd'>
        <img id='ف247' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1250.gif?alt=media&token=ee0d7ba5-a6e8-40dc-91d8-e76bd3e9aef8'>
        <img id='ف248' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1255.gif?alt=media&token=6e31965e-57d9-424c-8508-dc7a9b84d6b5'>
        <img id='ف249' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1254.gif?alt=media&token=6decf022-b880-4516-996e-cd1c8746b303'>
        <img id='ف250' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1247.gif?alt=media&token=42f04901-e7e7-4cbc-9d39-b4a33af2dd2d'>
        <img id='ف251' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1249.gif?alt=media&token=f3f606b1-ff78-4347-a52b-350d11af7bd4'>
        <img id='ف252' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1248.gif?alt=media&token=bc974023-a43c-47fe-8369-8d6bc09f4f6c'>
        <img id='ف253' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Flock.png?alt=media&token=c7d582eb-eee5-4015-89ab-60c9442102c2'>
        <img id='ف254' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1253.jpeg?alt=media&token=31be7bd9-4e0f-4b6d-aeb1-41f34420c125'>
        <img id='ف255' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1251.gif?alt=media&token=d76d417d-575d-4a60-b245-1bf919b6fa98'>
        <img id='ف256' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1252.jpeg?alt=media&token=a210e0d7-a35c-492d-be80-36ca53be3eb8'>
        <img id='ف257' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1258.gif?alt=media&token=a5894ca8-28b5-4ec2-804d-2fde55d1012b'>
        <img id='ف258' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1257.gif?alt=media&token=4c640dc4-e15d-4036-987e-78c552656971'>
        <img id='ف259' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fmic.png?alt=media&token=ab2ff817-6eb4-444a-9352-7aed3ec582c6'>
        <img id='ف260' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1117.GIF?alt=media&token=aa775008-e3ec-40be-8cfc-2dbbab7a51be'>
        <img id='ف261' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1fsej9udg10084uPm15qS8i.gif?alt=media&token=5d1936fd-8e0d-4343-be4b-4b8066908947'>
        <img id='ف262' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1256.gif?alt=media&token=e751175d-9055-49cb-8774-ae727dcb4b5e'>
        <img id='ف263' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1120.png?alt=media&token=8b34a257-814e-4b30-ac4a-906852a1fe9b'>
        <img id='ف264' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1122.gif?alt=media&token=f2b650eb-a207-41a8-8c46-17b37c76ff01'>
        <img id='ف265' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1ekb8jor310.gif?alt=media&token=998601dd-dded-4131-a6ea-ccd22751f6e6'>
        <img id='ف266' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1119.gif?alt=media&token=d5ca6eb5-a107-4b2a-acc0-34f7f119ed1b'>
        <img id='ف267' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1118.gif?alt=media&token=1bd42cf4-2b80-4b5b-9cde-b12365bc5336'>
        <img id='ف268' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1burer85r10.gif?alt=media&token=0663946c-c864-4c93-bfd7-f30855f66230'>
        <img id='ف269' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1eioaf9ei10.gif?alt=media&token=dcfb4c68-d2bd-4205-b60f-cf835c8aa972'>
        <img id='ف270' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1bvvmep2j10.png?alt=media&token=75aff95b-ee0d-40ad-aef7-284d40dce820'>
        <img id='ف271' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fs2.png?alt=media&token=22f8b19b-0e8f-4b8b-9920-a666ff24bcee'>
        <img id='ف272' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fw4.png?alt=media&token=ad750e08-8f45-4d54-8419-df4d6502ac5d'>
        <img id='ف273' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1fsh2bfp3100nyXD41z455y.gif?alt=media&token=afc4a076-4ef0-410a-9779-6baecaf3f37c'>
        <img id='ف274' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1125.gif?alt=media&token=4cf87153-76c1-4697-a6d0-9335e841670e'>
        <img id='ف275' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fs1.png?alt=media&token=0397b0fd-a1a7-4865-986b-a09bace7524f'>
        <img id='ف276' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g867kq2r101zPWv91Cje1n.gif?alt=media&token=ec4e39d2-5244-4629-ab32-735e40e234ac'>
        <img id='ف277' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fs3.png?alt=media&token=f34d2b6e-cc22-416a-9a44-d5c24644b7fe'>
        <img id='ف278' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1ft6dpbvp1008XiCK1iSOzG.gif?alt=media&token=efceed8c-85ab-47e2-9e0b-5429940f6028'>
        <img id='ف279' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fpic.png?alt=media&token=b6ed3094-7599-4f0f-a9fb-0d80b47fd433'>
        <img id='ف280' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g7669rls100WKT4j1GHLra.gif?alt=media&token=55919d52-ba26-42b6-a5f3-b338cc226905'>
        <img id='ف281' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fs0.png?alt=media&token=10f9a682-b2c9-47ac-8f46-1b7038029afa'>
        <img id='ف282' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fprv1.png?alt=media&token=aa93c922-4927-4d63-8665-3f158a136c54'>
        <img id='ف283' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fs4.png?alt=media&token=bda5b4fb-6e42-4b04-b52a-c9cab793ecb8'>
        <img id='ف284' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Froom.png?alt=media&token=7ca3caff-53df-4463-87cc-f340a1cb1057'>
        <img id='ف285' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1burdu33110.gif?alt=media&token=375d03b7-fa6b-47a9-ba43-7772c3337561'>
        <img id='ف286' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1121.gif?alt=media&token=eeb06dd0-61ed-4a34-aa6a-bc7922087eb2'>
    `
        emojey = false
    } else {
        $('.emojey').toggle();
    }
});


$(document).on('click', '.stting', function () {
    $('.private-stats').css('display', 'none');
    $('.hanit-stats').css('display', 'none');
    $('.createroom-stats').css('display', 'none');
    $('.stats1').css('display', 'none');
    var sttingcard = document.querySelector('.stting-card');
    sttingcard.style.display = "block";
})


/* PersonalImage.addEventListener('click', () => {
    profile.style.display = "block";
    stats.style.display = "none";
    console.log("sl");
}) */

var chatmsg = document.querySelector('.message-chat');
var clickmsg = 0;

document.querySelector('input.msgvalue').addEventListener('keyup', function (e) {
    // chanegColorstats(userData[0].id, "green");
    timeLine = 0
    if (e.keyCode === 13) {
        scrollToBottom()
        // chanegColorstats(userData[0].id, "green");
        timeLine = 0
        var val = $('input.msgvalue').val();
        if (val.length > 0) {
            chanegColorstats(userData[0].id, "green");
            // timeLine = 0;
            var index = ''
            const div = document.createElement("div");
            div.setAttribute("class", "msg");
            div.setAttribute("id", `ss${userData[0].id}`);
            div.style.backgroundColor = "#fafafa";
            var id = Math.floor(Math.random() * 1000000000000000)
            if (val.includes('ف')) {
                open = true;
                var myArray = val.split(" ");
                var resultArray = []
                for (var i = 0; i < myArray.length; i++) {
                    var resText = myArray[i].replace('ف', '')
                    if (myArray[i].includes('ف') && Number(resText)) {
                        var index = myArray[i].replace('ف', '');
                        var imgss = `<img style='width:22px' src='${imgData[index]}'>`;
                        resultArray.push(imgss);
                        continue

                    } resultArray.push(myArray[i])

                }
                var msg = resultArray.join(" ").toString();
                div.innerHTML = `
                <div id="${userData[0].id}" class="all-infos" value="${userData[0].id}" name="${userData[0].name}">
                    <img id="${userData[0].id}" value="${userData[0].id}" name="${name}" class="p-img" src="/upload/${userData[0].img}" style="width:55px ;object-fit: cover;" alt="" srcset="">
                </div>
                <div class="msg-content" style="background-color:#fafafa;">
                <div style="min-width: 150px;max-width: 160px;" class="sender-msg-name"><span style="background-color:${userData[0].namebg};color:${userData[0].namecolor};">${userData[0].nikename}</span></div>
                <div class="msg-content-sender" style="width:auto;color:${userData[0].fontcolor};"> ${msg} </div>
                </div>
                <div class="time"><!--<button value=${userData[0].id}  class="btn-remove-msg">حدف</button> --> <span class="${userData[0].id}"></span></div>
              `;
                if (open)
                    messagechat.appendChild(div);
                msgvalue.value = ""
            } else {
                div.innerHTML = `
            <div id="${userData[0].id}" class="all-infos" value="${userData[0].id}" name="${userData[0].name}">
                <img id="${userData[0].id}" value="${userData[0].id}" name="${userData[0].name}" class="p-img" src="/upload/${userData[0].img}" style="width:55px ;object-fit: cover;" alt="" srcset="">
            </div>
            <div class="msg-content" style="background-color:#fafafa;">
                <div style="min-width: 150px;max-width: 160px;" class="sender-msg-name"><span style="background-color:${userData[0].namebg};color:${userData[0].namecolor};">${userData[0].nikename}</span></div>
                <div class="msg-content-sender" style="width:auto;color:${userData[0].fontcolor};"> ${val} </div>
            </div>
            <div class="time"><!--<button value=${userData[0].id}  class="btn-remove-msg">حدف</button> --> <span class="${id}"></span></div>
          `;
                messagechat.appendChild(div);
                msgvalue.value = ""
            }
            getTime(id);
            socket.emit('sendmsg', {
                text: val,
                nikename: userData[0].nikename,
                name: userData[0].name,
                img: userData[0].img,
                room: userData[0].currentRoom,
                fontcolor: userData[0].fontcolor,
                namebg: userData[0].namebg,
                namecolor: userData[0].namecolor,
            });
        }
    }
});
function scrollToBottom() {
    console.log("down");
    const messages = document.querySelector('.message-chat');
    const messagesid = document.querySelector('.message-chat').scrollHeight;
    messages.scrollTop += messagesid.scrollHeight;
    $(".message-chat").animate({ scrollTop: 20000000 }, "slow");
}

$(document).on('click', '.sendmsg', function () {
    scrollToBottom()
    // chanegColorstats(userData[0].id, "green");
    timeLine = 0
    var val = $('input.msgvalue').val();
    if (val.length > 0) {
        chanegColorstats(userData[0].id, "green");
        // timeLine = 0;
        var index = ''
        const div = document.createElement("div");
        div.setAttribute("class", "msg");
        div.setAttribute("id", `ss${userData[0].id}`);
        div.style.backgroundColor = "#fafafa";
        var id = Math.floor(Math.random() * 1000000000000000)
        if (val.includes('ف')) {
            open = true;
            var myArray = val.split(" ");
            var resultArray = []
            for (var i = 0; i < myArray.length; i++) {
                var resText = myArray[i].replace('ف', '')
                if (myArray[i].includes('ف') && Number(resText)) {
                    var index = myArray[i].replace('ف', '');
                    var imgss = `<img style='width:22px' src='${imgData[index]}'>`;
                    resultArray.push(imgss);
                    continue

                } resultArray.push(myArray[i])

            }
            var msg = resultArray.join(" ").toString();
            div.innerHTML = `
                <div id="${userData[0].id}" class="all-infos" value="${userData[0].id}" name="${userData[0].name}">
                    <img id="${userData[0].id}" value="${userData[0].id}" name="${name}" class="p-img" src="/upload/${userData[0].img}" style="width:55px ;object-fit: cover;" alt="" srcset="">
                </div>
                <div class="msg-content" style="background-color:#fafafa;">
                <div style="min-width: 150px;max-width: 160px;" class="sender-msg-name"><span style="background-color:${userData[0].namebg};color:${userData[0].namecolor};">${userData[0].nikename}</span></div>
                <div class="msg-content-sender" style="width:auto;color:${userData[0].fontcolor};"> ${msg} </div>
                </div>
                <div class="time"><!--<button value=${userData[0].id}  class="btn-remove-msg">حدف</button> --> <span class="${userData[0].id}"></span></div>
              `;
            if (open)
                messagechat.appendChild(div);
            msgvalue.value = ""
        } else {
            div.innerHTML = `
            <div id="${userData[0].id}" class="all-infos" value="${userData[0].id}" name="${userData[0].name}">
                <img id="${userData[0].id}" value="${userData[0].id}" name="${userData[0].name}" class="p-img" src="/upload/${userData[0].img}" style="width:55px ;object-fit: cover;" alt="" srcset="">
            </div>
            <div class="msg-content" style="background-color:#fafafa;">
                <div style="min-width: 150px;max-width: 160px;" class="sender-msg-name"><span style="background-color:${userData[0].namebg};color:${userData[0].namecolor};">${userData[0].nikename}</span></div>
                <div class="msg-content-sender" style="width:auto;color:${userData[0].fontcolor};"> ${val} </div>
            </div>
            <div class="time"><!--<button value=${userData[0].id}  class="btn-remove-msg">حدف</button> --> <span class="${id}"></span></div>
          `;
            messagechat.appendChild(div);
            msgvalue.value = ""
        }
        getTime(id);
        socket.emit('sendmsg', {
            text: val,
            nikename: userData[0].nikename,
            name: userData[0].name,
            img: userData[0].img,
            room: userData[0].currentRoom,
            fontcolor: userData[0].fontcolor,
            namebg: userData[0].namebg,
            namecolor: userData[0].namecolor,
        });
    }
})

const msgvalue = document.querySelector('.msgvalue');
const sendmsg = document.querySelector('.sendmsg');
const messagechat = document.querySelector('.message-chat');

/* if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // true for mobile device
    sendmsg.addEventListener('touchend', (e) => {
        // chanegColorstats(userData[0].id, "green");
        timeLine = 0
        var val = $('input.msgvalue').val();
        e.preventDefault();
        console.log("touched");
        if (msgvalue.value.length > 0) {
            socket.emit("sendmsg", {
                text: val,
                nikename: userData[0].nikename,
                name: userData[0].name,
                img: userData[0].img,
                room: userData[0].currentRoom,
                fontcolor: userData[0].fontcolor,
                namebg: userData[0].namebg,
                namecolor: userData[0].namecolor,
            })
        }
    });

} else {
    // false for not mobile device
    sendmsg.addEventListener('click', (e) => {
        // chanegColorstats(userData[0].id, "green");
        timeLine = 0
        e.preventDefault();
        var val = $('input.msgvalue').val();
        console.log("touched");
        if (msgvalue.value.length > 0) {
            socket.emit("sendmsg", {
                text: val,
                nikename: userData[0].nikename,
                name: userData[0].name,
                img: userData[0].img,
                room: userData[0].currentRoom,
                fontcolor: userData[0].fontcolor,
                namebg: userData[0].namebg,
                namecolor: userData[0].namecolor,
            })
        }
    });
} */


var open;
socket.on("msgback", ({ idsocket, text, name, id, imgs, namecolor, fontbg, fontcolor, nikename }) => {
    open = true;
    chanegColorstats(idsocket, "green");
    $(".message-chat").animate({ scrollTop: 20000000 }, "slow");


    // timeLine = 0;
    var index = ''
    const div = document.createElement("div");
    div.setAttribute("class", "msg");
    div.setAttribute("id", `ss${id}`);
    console.log(id);
    div.style.backgroundColor = "#fafafa";
    if (text.includes('ف')) {
        open = true;
        var myArray = text.split(" ");
        var resultArray = []
        for (var i = 0; i < myArray.length; i++) {
            var resText = myArray[i].replace('ف', '')
            if (myArray[i].includes('ف') && Number(resText)) {
                var index = myArray[i].replace('ف', '');
                var imgss = `<img style='width:22px' src='${imgData[index]}'>`;
                resultArray.push(imgss);
                continue

            } resultArray.push(myArray[i])

        }
        var msg = resultArray.join(" ").toString();
        div.innerHTML = `
            <div id="${idsocket}" class="all-infos" value="${idsocket}" name="${name}">
                <img id="${idsocket}" value="${idsocket}" name="${name}" class="p-img" src="/upload/${imgs}" style="width:55px ;object-fit: cover;" alt="" srcset="">
            </div>
            <div class="msg-content" style="background-color:#fafafa;">
                <div style="min-width: 150px;max-width: 160px;" class="sender-msg-name"><span style="background-color:${fontbg};color:${namecolor};">${nikename}</span></div>
                <div class="msg-content-sender" style="width:auto;color:${fontcolor};"> ${msg} </div>
            </div>
            <div class="time"><!--<button value=${id}  class="btn-remove-msg">حدف</button> --> <span class="${id}"></span></div>
          `;
        if (open)
            messagechat.appendChild(div);
    } else {
        div.innerHTML = `
        <div id="${idsocket}" class="all-infos" value="${idsocket}" name="${name}">
            <img id="${idsocket}" value="${idsocket}" name="${name}" class="p-img" src="/upload/${imgs}" style="width:55px ;object-fit: cover;" alt="" srcset="">
        </div>
        <div class="msg-content" style="background-color:#fafafa;">
            <div style="min-width: 150px;max-width: 160px;" class="sender-msg-name"><span style="background-color:${fontbg};color:${namecolor};">${nikename}</span></div>
            <div class="msg-content-sender" style="width:auto;color:${fontcolor};"> ${text} </div>
        </div>
        <div class="time"><!--<button value=${id}  class="btn-remove-msg">حدف</button> --> <span class="${id}"></span></div>
      `;
        messagechat.appendChild(div);
    }
    getTime(id);
});

socket.on('welcomeMsg', ({ msg, rand }) => {
    console.log(rand);
    const div = document.createElement("div");
    div.setAttribute("class", "msg");
    div.style.backgroundColor = "#e6ecfa";
    div.innerHTML = `
        <div class="p-img"></div>
        <div class="msg-content" style="width:98%;width: 98%;
        display: flex;
        align-items: center;justify-content: space-between;">
           <div>
            <div class="welcome-name-dd">الترحيب</div>
            <div class="welcome-msg-boot" style="width:100%"> ${msg} </div>
           </div>
           <div class="time-welcome"> <span class="time${rand}"></span> </div>
        </div>
    `;
    messagechat.appendChild(div);
    getTime1(rand);
    msgvalue.value = ""
});

function getTime1(id) {
    var time = 0;
    var element = document.querySelector(`.time${id}`)
    setInterval(() => {
        time++;
        if (time < 5) {
            element.innerHTML = `الآن`
        }
        else if (time <= 60)
            element.innerHTML = `0د`
        else if (time < 60 * 60)
            element.innerHTML = `${Math.floor(time / 60)}د`
        else {
            element.innerHTML = `${Math.floor(time / 60)}س`
        }
    }, 1000)
}


socket.on('leaveRoom', ({ msg, name, id, socket, img }) => {
    const div = document.createElement("div");
    div.setAttribute("class", "msg");
    div.style.backgroundColor = "#faf0e6";
    div.innerHTML = `
        <img class="p-img" id="${socket}" value="${socket}" name="${name}" src="/upload/${img}" style="width:55px ;" alt="" srcset="">
        <div class="msg-content" style="width:100%;background-color:#faf0e6;">
            <div style="margin-bottom:4px;" class="leave-room-namex">${name}</div>
            هدا المستخدم قد دخل <span style="cursor:pointer;" id='${msg}' class="msg-string-leave" > ${msg} </span> 
        </div><span class="time${id} time-welcome"></span>
    `;
    messagechat.appendChild(div);
    msgvalue.value = ""
    getTime1(id)
});

$(document).on('click', '.msg-string-leave , .roomNumberStysle', function () {
    if (userData[0].cuurentRoom != this.id) {
        socket.emit("roomid", {
            id: this.id
        });
    }
    userData[0].cuurentRoom = this.id
})

socket.on('JoinRoom', ({ msg, name }) => {
    const div = document.createElement("div");
    div.setAttribute("class", "msg");
    div.style.backgroundColor = "#faf0e6";
    div.innerHTML = `
        <img class="p-img" src="/emojey/favicon.ico" style="width:55px ;" alt="" srcset="">
        <div class="msg-content" style="width:100%;background-color:#faf0e6;">
            <div style="margin-bottom:4px;" class="leave-room-namex">${name}</div>
            هدا المستخدم قد دخل <span style="cursor:pointer; id="${id}" class="msg-string-leave" > ${msg} </span> 
        </div>
    `;
    messagechat.appendChild(div);
    msgvalue.value = ""
});

socket.on('leaveRoomIt', ({ msg, name, socket, img }) => {
    const div = document.createElement("div");
    div.setAttribute("class", "msg");
    div.style.backgroundColor = "#faf0e6";
    div.innerHTML = `
        <img class="p-img" value="${socket}" name="${name}" id="${socket}" src="/upload/${img}" style="width:55px ;" alt="" srcset="">
        <div class="msg-content" style="width:100%;background-color:#faf0e6;">
            <div style="margin-bottom:4px;" class="leave-room-namex">${name}</div>
            <div class="msg-string-leave-it" > ( هذا المستخدم غادر الغرفه )  </div> 
        </div>
    `;
    messagechat.appendChild(div);
    msgvalue.value = ""
});


socket.on('EnterRoomIt', ({ msg, name }) => {
    const div = document.createElement("div");
    div.setAttribute("class", "msg");
    div.style.backgroundColor = "#faf0e6";
    div.innerHTML = `
        <img class="p-img" src="/emojey/favicon.ico" style="width:55px ;" alt="" srcset="">
        <div class="msg-content" style="width:100%;background-color:#faf0e6;">
            <div style="margin-bottom:4px;" class="leave-room-namex">${name}</div>
            هدا المستخدم قد دخل <span style="cursor:pointer; id="${id}" class="msg-string-leave" > ${msg} </span> 
        </div>
    `;
    messagechat.appendChild(div);
    msgvalue.value = ""
});

function getLikes(id) {
    socket.emit('getliks', id);
    socket.on('backlike', ({ like }) => {
        return like;
    })
}

const alhanit = document.querySelector('.alhanit');

$(document).on('click', '.alhanit', function () {
    $('.alhanit').html(
        `
        <i class="fa label label-primary fa-commenting"></i>
        الحائط
        `
    )
    $('.alhanit').css('color', 'white')
    $('.stats').css('display', 'none');
    $('.private-stats').css('display', 'none');
    $('.stats1').css('display', 'none');
    $('.createroom-stats').css('display', 'none');
    const hanitstats = document.querySelector('.hanit-stats');
    if (hanitstats.style.display === "none") {
        hanitstats.style.display = "block";
    } else {
        hanitstats.style.display = "none"
    }
})

socket.emit('get-hanit-msg', '');
socket.on('sendHaniFiletViaBrowser', ({ name, msg, socket, msg_id, img }) => {
    console.log(img);
    var div = document.createElement('div')
    div.innerHTML = `
    <div class="post-hanit"> 
    <div class="infos-users-oline hanit-msg-border">
        <img  name="${name}" class="hanit-img" src="/upload/${img}" alt="" srcset="">
        <div class="hanit-msg-mini">
            <p class="hanit-ame">${name}</p>
            <p class="hanit-boi"> ${msg} </p>
        </div>
    </div>
    <div style="position: relative;
    left: 59px;
    font-weight: 600;
    font-size: 13px;
    opacity: 0.6;
    " class="timen"><!-- --></div>
    <div class="feedbackh">
        <div style="" class="fcard1 fcard12" id="${msg_id}">
            <i class="fa fa-heart"></i>0
        </div>
        <div class="fcard2" id="${msg_id}">
            <i class="fa fa-comments"></i>0
        </div>
    </div>
    </div>
    `;
    $('.hanit-msg').prepend(div);
});

socket.on("updateComments", ({ id, length }) => {
    var card = document.querySelector(`.fcard2${id}`);
    card.innerHTML = `<i class="fa fa-comments"></i>${length}`
})

socket.on('back-hanit-msg', ({ docs, socket }) => {
    document.querySelector('.hanit-msg').innerHTML = ''
    for (var i = 0; i < docs.length; i++) {
        document.querySelector('.hanit-msg').innerHTML += `
        <div class="post-hanit"> 
        <div class="infos-users-oline hanit-msg-border">
            <img  name="${docs[i].mag_creator}" class="hanit-img" src="/upload/${docs[i].img}" alt="" srcset="">
            <div class="hanit-msg-mini">
                <p class="hanit-ame">${docs[i].mag_creator}</p>
                <p class="hanit-boi"> ${docs[i].mag_content} </p>
            </div>
        </div>
        <div style="position: relative;
        left: 59px;
        font-weight: 600;
        font-size: 13px;
        opacity: 0.6;
        " class="timen"><!-- ${(Math.floor(docs[i].time / 60) > 60 ? Math.floor(docs[i].time / 3600) + 'س' : Math.floor(docs[i].time / 60) + 'د')} --></div>
        <div class="feedbackh">
        <div class="fcard1 fcard12" id="${docs[i].msg_id}">
            <i class="fa fa-heart"></i>${docs[i].likes}
        </div>
        <div class="fcard2 fcard2${docs[i].msg_id}" id="${docs[i].msg_id}">
            <i class="fa fa-comments"></i>${docs[i].comments}
        </div>
        </div>
        </div>
        `;
    }
})

const btnsendhanit = document.getElementById("btn-send-hanit");
btnsendhanit.addEventListener("click", () => {
    timeLine = 0
    chanegColorstats(userData[0].id, "green")
    timeLine = 0
    var val = document.querySelector('.value-hanit');
    console.log("source " + val.value);
    socket.emit("hanitmsg", ({ text: val.value }));
    val.value = ""
});

$(document).on('keyup', 'input.value-hanit', function (e) {
    if (e.keyCode === 13) {
        timeLine = 0
        chanegColorstats(userData[0].id, "green")
        var val = document.querySelector('.value-hanit');
        console.log("source " + val.value);
        socket.emit("hanitmsg", ({ text: val.value }));
        val.value = ""
    }
});


socket.on("hanitFileBack", ({ text, name, socket, img }) => {
    chanegColorstats(socket, "green");
    // timeLine = 0;
    document.querySelectorAll('.name-prv-msg-notifivation').forEach((e) => { MyDoubl.push(e.id) });
    const hanit = document.querySelector('.hanit-msg');
    const div = document.createElement('div');
    console.log(name);
    if (true) {
        setTimeout(() => {
            /*   div.innerHTML = `
      <div class="post-hanit">
          <div class="infos-users-oline hanit-msg-border">
              <img id="${socket}" name="${name}" class="hanit-img" src="/upload/${img}" alt="" srcset="">
              <div class="hanit-msg-mini">
                  <p class="hanit-ame">${name}</p>
                  <div class="hanit-img-background">
                      <p class="hanit-boi"> <img style="width: 150px;" src='/upload/${text}'> </p>
                  </div>
              </div>
          </div>
          <div>
              <div>
                  <i class="fa fa-heart"></i>
              </div>
              <div>
                  <i class="fa fa-comments"></i>
              </div>
          </div>
      </div>
      `;
              hanit.appendChild(div); */
        }, 700)
    }
})
var hanitnotify = 1;
socket.on('notifayHnait', () => {
    if (document.querySelector('.hanit-stats').style.display === "none") {
        $('.alhanit').html(
            `
            <i class="fa label label-primary fa-commenting"></i>
            الحائط
            `+ hanitnotify++
        )
        $('.alhanit').css('color', '#f8a103')
    }
});

var arrbacktrue = [false]
var open2;
socket.on("hanitMsgBack", ({ text, name, id, img }) => {
    open2 = true;
    chanegColorstats(id, "green");
    var staats = true;
    socket.emit('getNotifactionahnit', '')
    const hanit = document.querySelector('.hanit-msg');
    const div = document.createElement('div');

    var resultArray = []
    var myArray = text.split(" ");
    resultArray = []
    myArray = text.split(" ");
    staats = false;
    for (var i = 0; i < myArray.length; i++) {
        var resText = myArray[i].replace('ف', '')
        if (myArray[i].includes('ف') && Number(resText)) {
            var index = myArray[i].replace('ف', '');
            var img = `<img style="width:20px" src="${imgData[index]}">`;
            resultArray.push(img);
            continue
        }
        resultArray.push(myArray[i])
    }


    function getId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);

        return (match && match[2].length === 11)
            ? match[2]
            : null;
    }
    var randomInt = Math.floor(Math.random() * 419280);
    var result = ''
    var msg = resultArray.join(" ").toString();
    var iframeMarkup = ''
    var Yvideo = false
    var msg = resultArray.join(" ").toString()
    if (getId(msg)) {
        Yvideo = true;
        const videoId = getId(msg);
        iframeMarkup = '<iframe width="215" src="//www.youtube.com/embed/'
            + videoId + '" frameborder="0" allowfullscreen></iframe>';
    }
    if (open2) {
        if (Yvideo) {
            result = iframeMarkup
            console.log("youtube");
            arrbacktrue[0] = true;
            console.log(iframeMarkup);
            socket.emit('sendhanitpost', { msg: iframeMarkup, name: name, id: randomInt, img: img });
        } else {
            result = msg
            console.log("msg ss");
            console.log(text);
            arrbacktrue[0] = true;
            socket.emit('sendhanitpost', { name: name, id: randomInt, text: msg, msg, img: img });
        }
        open2 = false;
    }
});

socket.on('sendHanimsgViaBrowser', ({ name, msg, img, id }) => {
    if (arrbacktrue[0]) {
        arrbacktrue[0] = false;
        var div = document.createElement('div');
        console.log(msg);
        div.innerHTML = `
    <div class="post-hanit">
        <div class="infos-users-oline hanit-msg-border">
            <img class="hanit-img" src="/upload/${img}" alt="" srcset="">
            <div class="hanit-msg-mini">
                <p class="hanit-ame">${name}</p>
                <p class="hanit-boi"> ${msg} </p>
            </div>
        </div>
        <div style="position: relative;
        left: 59px;
        font-weight: 600;
        font-size: 13px;
        opacity: 0.6;
        " class="timen"></div>
        <div class="feedbackh">
        <div style="" class="fcard1 fcard12" id="${id}">
            <i class="fa fa-heart"></i>
        </div>
        <div class="fcard2" id="${id}" name="">
            <i class="fa fa-comments"></i>
        </div>
    </div>
    </div>
`;
        $('.hanit-msg').prepend(div);
    }
})


$(document).on('click', '.post-hanit', function () {
    $('.icons-hanitss').css("display", "none");
})
$(document).on('click', '.close', function () {
    $('.icons-hanitss').css("display", "none");
})



const rooms = document.querySelector('.rooms-onclick');
const createroomstats = document.querySelector('.createroom-stats');
$(document).on('click', '.rooms-onclick', function () {
    $('.stats').css('display', 'none');
    $('.private-stats').css('display', 'none');
    $('.stats1').css('display', 'none');
    $('.hanit-stats').css('display', 'none');
    if (createroomstats.style.display === "none") {
        $('.createroom-stats').css('display', 'block');
        socket.emit('refrechRooms', 'd')
    } else {
        createroomstats.style.display = "none"
    }
});

const createroombtn = document.querySelector('.createroombtn');
createroombtn.addEventListener('click', () => {
    const roomsinput = document.querySelector('.modal-body');
    if (roomsinput.style.display == "none") {
        roomsinput.style.display = "block";
        $('.stats').css('display', 'none')
    } else {
        roomsinput.style.display = "none";
    }
});

socket.on('userOrder', ({ id, newRoom }) => {
    ChangeRoomName(id, newRoom);
    setMore(userData[0].currentRoom);
});


socket.on("rooms", ({ docs }) => {
    var rooms = document.querySelector('.rooms');
    rooms.innerHTML = "";
    for (var i = 0; i < docs.length; i++) {
        const div = document.createElement('div');
        div.innerHTML = `
            <div id="${docs[i].room_name}" class="infos-users-oline rooms-r gettheid"><img class="imgRoom" src="/upload/${docs[i].img}" alt="" srcset="">
                <div class="room-infos">
                    <p class="room-name">${docs[i].room_name}</p>
                    <p class="room-boi">${docs[i].description}</p>
                </div>
                <div style="width:70px;background-color: #d9534f;
                color: white;
                text-align: center;
                border-radius: 2px;">
                    ${docs[i].length}/40 <i class="corner fa fa-user label uc fa-microphone label-danger"></i>
                </div>
            </div>
        `;
        rooms.appendChild(div);
    }
})

const messangermsgtext = document.querySelector('.messanger-msg-text');
messangermsgtext.addEventListener('click', () => {
    stats.style.display = "none";
})


$(document).on('click', '.gettheid', function () {
    $('.online-by-room').css('display', 'block');
    messangermsgtext.innerHTML = "";
    if (userData[0].currentRoom != this.id) {
        socket.emit("roomid", { id: this.id });
        if (userData[0].voice != -1) {
            console.log("niiiiiii send remove");
            var id = userData[0].voice
            socket.emit('voiceHtml', {
                data: `
            <img src="/images/mic2.png"></img>
            `
                , room: userData[0].currentRoom, id
            })
            $(`.voice-chanel${id}`).html(`<img src="/images/mic2.png"></img>`);
            userStatus.online = false;
            joinChannel = true;
            socket.emit("userInformation", userStatus);
        }
    }
    userData[0].currentRoom = this.id
    document.querySelector('.msgvalue').style.backgroundColor = null;
});

socket.on('voiceChatChannel', ({ data, id }) => {
    $(`.voice-chanel${id}`).html(data);
})

socket.on('discoVoice', () => {
    socket.emit('voiceHtml', {
        data: `<img src="/images/mic2.png"></img>`,
        room: userData[0].currentRoom, id
    })
})

$(document).on("click", ".x-icons img", function () {
    console.log("img x");
    stats.style.display = "none";
    $('.createroom-stats').css("display", "none");
    $('.hanit-stats').css("display", "none");
})


const sendPmsg = document.querySelector('.sendPmsg');

$(document).on('keyup', 'input.privateV', function () {
    console.log("send typing");
    socket.emit('typing', this.id);
    console.log(this.id);
});

socket.on('typingOn', () => {
    console.log("visible");
    $('.typing').css('display', 'block');
    $('.typing').css('display', 'flex');
    $('.typing').css('justifyContent', 'center');
})



var open3;
var div = document.createElement('div');
$(document).on("click", ".sendPmsg", function () {
    socket.emit('changeStats', 'green')
    timeLine = 0
    var id = Math.floor(Math.random() * 10000000000000)
    $('.typing').css('display', 'none');
    console.log("send " + $(this).attr('name'));
    const privateV = document.querySelector('.privateV');
    if (privateV.value.length > 0) {
        console.log(privateV.value);
        socket.emit("sendPmsg", { text: privateV.value, id: $(this).attr('name') })
        const messangermsgtext = document.querySelector('.messanger-msg-text');
        socket.emit("getusername", "")
        socket.on("username0", ({ username, id }) => {
            window.localStorage.setItem("usersss", username)
            window.localStorage.setItem("idsstime", id)
        });
        /* privateV.value.includes('ف') */
        if (true) {
            open = true;
            var myArray = privateV.value.split(" ");
            var resultArray = []
            for (var i = 0; i < myArray.length; i++) {
                var resText = myArray[i].replace('ف', '')
                if (myArray[i].includes('ف') && Number(resText)) {
                    var index = myArray[i].replace('ف', '');
                    var imgs = `<img style='width:22px' src="${imgData[index]}">`;
                    resultArray.push(imgs);
                    continue

                } resultArray.push(myArray[i])
            }
            var msg = resultArray.join(" ").toString();
            const msgContent = []
            var msgsContent = ""
            socket.emit('sendToRVB', { name: userData[0].name, img: userData[0].img, text: privateV.value, id: $(this).attr('name') })
            // div.setAttribute("class", id)
            var div = document.createElement('div')
            div.innerHTML = `            
                <div class="massanger-msg">
                    <div class="img-messanger">
                        <img style="width: 52px;
                        border-radius: 4px;
                        height: 48px;" src="/upload/${userData[0].img}" alt="">
                    </div>
                    <div class="mgs-info-messanger">
                        <div class="messanger-name">${userData[0].name}</div>
                        <div class="messanger-text">${msg}</div>
                    </div>
                    <span style="
                        position: relative;
                        font-weight: 600;
                        opacity: 0.5;
                        position: relative;
                        top: 1px; 
                        " class="time1582 time-welcome time${id}">
                    </span>
                </div>
                 `;
            if (privateV.value.length != 0) {
                document.querySelector('.messanger-msg-text').appendChild(div);
                privateV.value = ""
                getTime1(id)
                scrollToBottom2()
                scrollToBottom();
            }
            scrollToBottom2()
            scrollToBottom();
        }
    }
});

var open1;
var open4;
socket.on("sendToRVBs", ({ name, text, img, id }) => {
    console.log("one");
    open1 = true;
    open4 = true;
    if (text.includes('ف')) {
        var myArray = text.split(" ");
        var resultArray = []
        for (var i = 0; i < myArray.length; i++) {
            var resText = myArray[i].replace('ف', '')
            if (myArray[i].includes('ف') && Number(resText)) {
                var index = myArray[i].replace('ف', '');
                var imgs = `<img style='width:22px' src="${imgData[index]}">`;
                resultArray.push(imgs);
                continue

            } resultArray.push(myArray[i])
        }
        var msg = resultArray.join(" ").toString();
        var msgsContent = ""
        if (document.querySelector('.messanger').style.display === "block" && document.querySelector('.messanger').id == id) {
            console.log("heeeeeeeeeeeeeeeeeeeee");
            msgsContent = `            
        <div class="massanger-msg">
            <div class="img-messanger">
                <img style="width: 52px;
                border-radius: 4px;
                height: 48px;" src="/upload/${img}" alt="">
            </div>
            <div class="mgs-info-messanger">
                <div class="messanger-name">${name}</div>
                <div class="messanger-text">${msg}</div>
            </div>
            <span style="
                position: relative;
                font-weight: 600;
                opacity: 0.5;
                position: relative;
                top: 1px; 
                " class="time1582 time-welcome time${id}">
            </span>
        </div>
    `;
            if (text.length != 0) {
                document.querySelector('.messanger-msg-text').innerHTML += msgsContent;
                document.querySelector('.privateV').value = ""
                getTime1(id)
                if (nbmsg > 0) {
                    nbmsg--;
                }
                $('.prv2').html(`الخاص${nbmsg}<i class="ae fa label label-primary fa-commenting"></i>`)
                $('.prv2').css('color', '#f8a103')
                if (nbmsg <= 0) {
                    nbmsg = 0
                    $('.prv2').css('color', 'white')
                    $('.prv2').html(`الخاص<i class="ae fa label label-primary fa-commenting"></i>`)
                    scrollToBottom2()
                    scrollToBottom();
                }
            }
        }
    } else {
        const privateV = document.querySelector('.privateV');
        console.log("sendndnndn");
        console.log(id);
        var msgsContent = ""
        if (document.querySelector('.messanger').style.display === "block" && document.querySelector('.messanger').id == id) {
            console.log("heeeeeeeeeeeeeeeeeeeee");
            msgsContent = `            
        <div class="massanger-msg">
            <div class="img-messanger">
                <img style="width: 52px;
                border-radius: 4px;
                height: 48px;" src="/upload/${img}" alt="">
            </div>
            <div class="mgs-info-messanger">
                <div class="messanger-name">${name}</div>
                <div class="messanger-text">${text}</div>
            </div>
            <span style="
                position: relative;
                font-weight: 600;
                opacity: 0.5;
                position: relative;
                top: 1px; 
                " class="time1582 time-welcome time${id}">
            </span>
        </div>
        `;
            if (text.length != 0) {
                document.querySelector('.messanger-msg-text').innerHTML += msgsContent;
                privateV.value = ""
                getTime1(id)
                if (nbmsg > 0) {
                    nbmsg--;
                }
                $('.prv2').html(`الخاص${nbmsg}<i class="ae fa label label-primary fa-commenting"></i>`)
                $('.prv2').css('color', '#f8a103')
                if (nbmsg <= 0) {
                    nbmsg = 0
                    $('.prv2').css('color', 'white')
                    $('.prv2').html(`الخاص<i class="ae fa label label-primary fa-commenting"></i>`)
                    scrollToBottom2()
                    scrollToBottom();
                }
            }
        }
    }
})

$(document).on('keyup', 'input.privateV', function (e) {
    const privateV = document.querySelector('.keypressEn');
    if (e.keyCode === 13) {
        socket.emit('changeStats', 'green')
        timeLine = 0
        var id = Math.floor(Math.random() * 10000000000000)
        $('.typing').css('display', 'none');
        console.log("send " + $(this).attr('name'));
        if (privateV.value.length > 0) {
            console.log(privateV.value);
            socket.emit("sendPmsg", { text: privateV.value, id: $(this).attr('name') })
            const messangermsgtext = document.querySelector('.messanger-msg-text');
            socket.emit("getusername", "")
            socket.on("username0", ({ username, id }) => {
                window.localStorage.setItem("usersss", username)
                window.localStorage.setItem("idsstime", id)
            });/* privateV.value.includes('ف') */
            if (privateV.value.includes('ف')) {
                open = true;
                var myArray = privateV.value.split(" ");
                var resultArray = []
                for (var i = 0; i < myArray.length; i++) {
                    var resText = myArray[i].replace('ف', '')
                    if (myArray[i].includes('ف') && Number(resText)) {
                        var index = myArray[i].replace('ف', '');
                        var imgs = `<img style='width:22px' src="${imgData[index]}">`;
                        resultArray.push(imgs);
                        continue

                    } resultArray.push(myArray[i])
                }
                var msg = resultArray.join(" ").toString();
                const msgContent = []
                var msgsContent = ""
                socket.emit('sendToRVB', { name: userData[0].name, img: userData[0].img, text: privateV.value, id: $(this).attr('name') })
                // div.setAttribute("class", id)
                var div = document.createElement('div')
                div.innerHTML = `            
                    <div class="massanger-msg">
                        <div class="img-messanger">
                            <img style="width: 52px;
                            border-radius: 4px;
                            height: 48px;" src="/upload/${userData[0].img}" alt="">
                        </div>
                        <div class="mgs-info-messanger">
                            <div class="messanger-name">${userData[0].name}</div>
                            <div class="messanger-text">${msg}</div>
                        </div>
                        <span style="
                            position: relative;
                            font-weight: 600;
                            opacity: 0.5;
                            position: relative;
                            top: 1px; 
                            " class="time1582 time-welcome time${id}">
                        </span>
                    </div>
                     `;
                if (privateV.value.length != 0) {
                    document.querySelector('.messanger-msg-text').appendChild(div);
                    privateV.value = ""
                    getTime1(id)
                    scrollToBottom2()
                    scrollToBottom();
                }
                scrollToBottom2()
                scrollToBottom();
            } else {

                const msgContent = []
                var msgsContent = ""
                socket.emit('getPrvInfos', '');
                socket.on('getPrvinfos', ({ name, img }) => {

                    socket.emit('sendToRVB', { name, img, text: privateV.value, id: $(this).attr('name') })
                    // div.setAttribute("class", id)
                    var div = document.createElement('div')
                    div.innerHTML = `            
                        <div class="massanger-msg">
                            <div class="img-messanger">
                                <img style="width: 52px;
                                border-radius: 4px;
                                height: 48px;" src="/upload/${img}" alt="">
                            </div>
                            <div class="mgs-info-messanger">
                                <div class="messanger-name">${name}</div>
                                <div class="messanger-text">${privateV.value}</div>
                            </div>
                            <span style="
                                position: relative;
                                font-weight: 600;
                                opacity: 0.5;
                                position: relative;
                                top: 1px; 
                                " class="time1582 time-welcome time${id}">
                            </span>
                        </div>
                    `;
                    if (privateV.value.length != 0) {
                        document.querySelector('.messanger-msg-text').appendChild(div)
                        privateV.value = ""
                        getTime1(id)
                        scrollToBottom2()
                        scrollToBottom();
                    }
                });

                scrollToBottom2()
                scrollToBottom();

            }
        }
    }
})

var dpname = []
var nbmsg = 0
var MyDoubl = []
socket.on("reponsePmsg", ({ text, name, source, dist, img }) => {
    chanegColorstats(source, "green")
    var resultArray1 = []
    const privates = document.getElementById('private');
    const div = document.createElement('div');
    var n = 1;
    dpname.push(name);
    var myArray = text.split(" ");
    var resultArray = []
    for (var i = 0; i < myArray.length; i++) {
        var resText = myArray[i].replace('ف', '')
        if (myArray[i].includes('ف') && Number(resText)) {
            var index = myArray[i].replace('ف', '');
            var imgqq = `<img style='width:22px' src="${imgData[index]}">`;
            resultArray.push(imgqq);
            continue

        } resultArray.push(myArray[i])

    }
    var msg = resultArray.join(" ").toString();
    document.querySelectorAll('.name-prv-msg-notifivation').forEach((e) => { MyDoubl.push(e.id) });
    if (MyDoubl.includes(name) == false) {
        setTimeout(() => {
            console.log("result array" + msg);
            div.setAttribute('id', `${name}statsprv`);
            div.setAttribute('class', `${name}statsprv`);
            div.innerHTML = `
            <div id="${source}" name='${name}' class="private-msg getIdPM"><img style="width: 52px;
            border-radius: 4px;
            height: 48px;" id="${source}" name='${name}' class="getIdPmPrime" src="/upload/${img}" alt="" srcset="">
            <div style="width:237px;margin-left:5px">
            <p id='${name}' class="name-prv-msg-notifivation" style="opacitiy="0.5">${name}</p>
            <p id='${name}' class="boi msg-hand s${source}ssshell">${msg}</p>
            </div>
            <div id="${name}" style="z-index:200;cursor:pointer;" class="drapo noti-private-msg" ><i class="label border mini label-danger fr fa fa-times"></i> حدف  </div>
            </div> 
        `;
            privates.appendChild(div);

        }, 0);
    } else {
        setTimeout(() => {
            document.querySelector(`.s${name}ssshell`).innerHTML = `${msg}`
        }, 50)
    }

    //-----------------------------------------------------------------------------------------
    setTimeout(() => {
        socket.emit('sendChat', ({ msg: msg, user1: name, source: source, dist: dist, img: img }))
    }, 0)

    if (document.querySelector('.messanger').style.display == "block" && document.querySelector('.messanger').id == source) {
        console.log(document.querySelector('.messanger').id + " " + dist);
        if (text == 'إتصال') {
            // update the UI
            socket.emit('getChatP', source);
            var divs = document.createElement('div');
            divs.innerHTML = `
            <div class="user-call-request">
                <p class="ref"><i class="fa fa-phone callx"></i> رفض</p>
                <p class="acc"><i class="fa fa-phone callx"></i> قبول</p>
                <p>يتم الاتصال بك</p>
             </div>
            `
            document.querySelector('.messanger-msg-text').append(divs)
        }
    } else {
        console.log("Nooooo " + document.querySelector('.messanger').id + " " + source);
        $('.prv2').html(`الخاص${nbmsg += 1}<i class="ae fa label label-primary fa-commenting"></i>`)
        $('.prv2').css('color', '#f8a103')
        if (nbmsg == 0) {
            $('.prv2').css('color', 'white')
            $('.prv2').html(`الخاص<i class="ae fa label label-primary fa-commenting"></i>`)
        }
    }

});

socket.on("reponseFile", ({ text, name, source, dist, type, photo }) => {
    chanegColorstats(source, "green")
    const privates = document.getElementById('private');
    const div = document.createElement('div');
    dpname.push(name);
    var sip = type.split('.')
    console.log(sip[1]);
    console.log(text);
    var img = ''
    if (sip[1] == "jpg" || sip[1] == "JPG" || sip[1] == "png" || sip[1] == "PNG" || sip[1] == "gif" || sip[1] == "GIF") {
        img = `<img style="max-height: 200px;max-width: 240px;" style="min-width=20px;" src="/upload/${text}">`;
    } else if (sip[1] == "mp4") {
        img = `<video width="320" height="240" controls>
                     <source src="/upload/${text}" type="video/mp4"></source>
                </video>`
    }
    console.log("img isssssssssssss " + img);
    socket.emit('sendChat', ({ msg: img, user1: name, source: source, dist: dist }));
    document.querySelectorAll('.name-prv-msg-notifivation').forEach((e) => { MyDoubl.push(e.id) });
    setTimeout(() => {
        if (MyDoubl.includes(name) == false) {
            div.setAttribute('id', `${name}statsprv`);
            div.setAttribute('class', `${name}statsprv`);
            div.innerHTML = `
        <div id="${source}" name='${name}' class="private-msg getIdPM"><img width: 52px;
        border-radius: 4px;
        height: 48px; id="${source}" name='${name}' class="getIdPmPrime" src="/upload/${photo}" alt="" srcset="">
        <div style="width:237px;margin-left:5px">
        <p id='${name}' class="name-prv-msg-notifivation" style="opacitiy="0.5">${name}</p>
        <p id='${name}' class="boi msg-hand s${source}sss">صورة</p>
         </div>
        <div id="${name}" style="z-index:200;cursor:pointer;" class="drapo noti-private-msg" ><i class="label border mini label-danger fr fa fa-times"></i> حدف  </div>
        </div> 
    `;
            privates.appendChild(div);
        } else {
            document.querySelector(`.s${source}ssshell`).innerHTML = `صورة`
        }
        console.log("img is " + img);
        console.log(img);
    })
    if (document.querySelector('.msg-pro-di').style.display === "block" && document.querySelector('.messanger-header').id == dist && source == document.querySelector('.messanger-header').id) {
    } else {
        $('.prv2').html(`الخاص${nbmsg += 1}<i class="ae fa label label-primary fa-commenting"></i>`)
        $('.prv2').css('color', '#f8a103')
        if (nbmsg == 0) {
            $('.prv2').css('color', 'white')
            $('.prv2').html(`الخاص<i class="ae fa label label-primary fa-commenting"></i>`)
        }
    }
});


$(document).on('click', '.noti-private-msg', function () {
    if (nbmsg > 0) {
        nbmsg = -1
    }
    if (nbmsg == 0) {
        $('.prv2').css('color', 'white')
        $('.prv2').html(`الخاص<i class="ae fa label label-primary fa-commenting"></i>`)
    }
    var id = this.id + "statsprv";
    var stats = document.getElementById(id);
    const privates = document.getElementById('private');
    privates.removeChild(stats);
});


$(document).on('click', '.prv2', function () {
    $('.stats').css('display', 'none');
    $('.hanit-stats').css('display', 'none');
    $('.stats1').css('display', 'none');
    $('.createroom-stats').css('display', 'none');
    const pst = document.querySelector('.private-stats');
    if (pst.style.display === "none") {
        stats.style.display = "none";
        pst.style.display = "block"
    } else {
        pst.style.display = "none";
    }
})


$(document).on("click", ".getIdPM", function () {
    var id = document.querySelector('.getIdPM').id;
    if (messanger.style.dispaly == "none") {
        messanger.style.dispaly = "block"
    } else {
        messanger.style.dispaly = "none"
    }
})


$(document).on('change', 'input.file-upload', function (event) {
    var formData = new FormData();
    // Append file information to it
    console.log(this.files[0]);
    formData.append('file', this.files[0]);
    var name = this.files[0].name
    $.ajax({
        url: 'users/imgupload',
        type: 'POST',
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function ({ msg }) {
            socket.emit("updatePersonalImg", name)
            userData[0].img = name;
        }
    });
})

socket.on("changeImgB", ({ id, name }) => {
    console.log(name);
    ChangeImg(id, name)
})

$(document).on('click', '.edite-save-person-info', function () {
    var name = $('.edite-save-person-info-name').val();
    var stats = $('.edite-save-person-info-stats').val();
    var namecolor = $('.namecolor').val()
    var username = document.querySelector('.stting-titlesls').id
    var bcs = $('.bck-setting').val();
    var cs = $('.sttingb').val();
    console.log(bcs + " " + cs + " " + name + " " + namecolor + " " + stats);
    socket.emit("updateInfos", { username: username, nikename: name, auth: stats, namecolor: namecolor, bcs: bcs, cs: cs })
    userData[0].fontcolor = cs;
    userData[0].namebg = bcs;
    userData[0].namecolor = namecolor;
});

$(document).on('click', '.image-remove-personal', function () {
    var name = this.id
    console.log(name);
    $.ajax({
        type: "get",
        url: "users/removeImage",
        data: `name=${name}`,
        dataType: "json",
        success: function ({ msg }) {
            alert(msg);
        }
    });
})


$(document).on('click', '.logout-person', function () {
    $.ajax({
        type: "get",
        url: "users/logout",
        dataType: "json",
        success: function ({ msg }) {
            alert(msg);
        }
    });
})

$(document).on('click', '.emobox', function () {

});


function openStream() {
    const config = { audio: true, video: false };
    return navigator.mediaDevices.getUserMedia(config);
}


function playStream(stream) {
    var audio = $('<audio autoplay />').appendTo('body');
    audio[0].srcObject = stream;
}


$(document).on('click', '.voice-chanel1', function () {

});


$(document).on('click', '.hide-x-search', function () {
    $('.search01').css('display', "none");
})

$(document).on('click', ".serach0", function () {
    if (document.querySelector('.search01').style.display === "none")
        $('.search01').css('display', "block")
    else
        $('.search01').css('display', "none")

    var username = $(this).attr('id');
    console.log(username);
    console.log("search911");
    var search01 = document.querySelector('.search01');
    var table = document.createElement('table');
    $.ajax({
        type: "get",
        url: "users/findRecord",
        data: `username=${username}`,
        dataType: "json",
        success: function ({ docs }) {
            search01.innerHTML = `
                <div class="hide-x-search" style="color:red;text-align:end;">x</div>
            `
            table.innerHTML = `
            <tr>
                <th>الحالة</th>
                <th>العضو</th>
                <th>الزغرفة</th>
                <th>الآ بي</th>
                <th>الدولة</th>
                <th>الجهاز</th>
                <th>المصدر</th>
                <th>الدعوة</th>
                <th>الوقت</th>
            </tr>
            <tr>
                <td>${docs.stats}</th>
                <td>${docs.momber}</th>
                <td>${docs.style}</th>
                <td>${docs.ip}</th>
                <td>${docs.national}</th>
                <td>${docs.device}</th>
                <td>${docs.source}</th>
                <td>${docs.invation}</th>
                <td>${docs.time}</th>
            </tr>
            `;
            search01.appendChild(table);
        }
    });
});

$(document).on('click', ".upclassemnt", function () {
    var name = this.id;
    $.ajax({
        type: "get",
        url: "users/upclassmnet",
        data: `username=${name}`,
        dataType: "json",
        success: function ({ msg }) {
            console.log("add clasment");
            $('.upclassemnt').css('backgroundColor', 'orange');
        }
    });
})
$(document).on('click', '.leaveRoom', function () {
    var idSocket = this.id;
    var name = $(this).attr('name');
    socket.emit("leaveRoom", { name, idSocket });
    socket.on('leaveRoomAdmin', (name) => {
        const div = document.createElement("div");
        div.setAttribute("class", "msg");
        div.style.backgroundColor = "#e6ecfa";
        div.innerHTML = `
            <img class="p-img" src="/emojey/favicon.ico" style="width:55px ;" alt="" srcset="">
            <div class="msg-content" style="width:100%;">
                <div style="font-weight:600;" class="">${name}</div>
                <div class="msg-string" style="width:100px;text-align:center ;background-color:black;color:white;">  طرد من الغرفة </div>
            </div>
        `;
        messagechat.appendChild(div);
        msgvalue.value = ""
        $('.leaveRoom').css('backgroundColor', 'orange');
    })
})

$(document).on('click', '.remove-image-admin', function () {
    var name = this.id;
    $.ajax({
        type: "get",
        url: "users/removeImage-admin",
        data: `username=${name}`,
        dataType: "json",
        success: function ({ msg }) {
            $('.remove-image-admin').css('backgroundColor', msg);
        }
    });
});


$(document).on('click', '.change-name-admin', function () {
    var name = $('.name-admin').val();
    var username = this.id;
    $.ajax({
        type: "get",
        url: "users/updateName",
        data: `name=${name}&username=${username}`,
        dataType: "json",
        success: function ({ msg }) {
            alert(msg)
        },
        error: function ({ msg }) {
            alert('هد الاسم موجود بالفعل جرب إسم أخر')
        }
    });
});


/* $(document).on('click', '.likesUpdate', function () {
    var val = $('.likesValue').val();
    var username = this.id;
    $.ajax({
        type: "get",
        url: "users/UpdateLikes",
        data: `like=${val}&username=${username}`,
        dataType: "json",
        success: function ({ msg }) {
            alert(msg)
        }
    });
});
 */
$(document).on('click', '.addClasment-admin', function () {
    var day = $('.clasment-day').val();
    var select = document.querySelector('.clasment-Admin').value
    console.log(select);
    var username = this.id;
    $.ajax({
        type: "get",
        url: "users/addClasment",
        data: `day=${day}&clasment=${select}&username=${username}`,
        dataType: "json",
        success: function ({ msg }) {
            alert(msg);
        }
    });
});

$(document).on('click', '.changRoom', function () {
    var RoomName = $('.roomSelected').val()
    socket.emit('changeRoom', RoomName);
    socket.on('changeRoom', ({ msg, name }) => {
        const div = document.createElement("div");
        div.setAttribute("class", "msg");
        div.style.backgroundColor = "#e6ecfa";
        div.innerHTML = `
            <img class="p-img" src="/emojey/favicon.ico" style="width:55px ;" alt="" srcset="">
            <div class="msg-content" style="width:100%;">
                <div style="font-weight:600;" class="">${name}</div>
                <div class="msg-string" style="width:100px;text-align:center ;background-color:black;color:white;"> ${msg} </div>
            </div>
        `;
        messagechat.appendChild(div);
        msgvalue.value = ""
    })
})


$(document).on('click', '.band-user', function () {
    var name = this.id;
    $.ajax({
        type: "get",
        url: "/users/addBlock",
        data: `username=${name}`,
        dataType: "json",
        success: function ({ msg }) {
            alert(msg);
            $('.band-user').css('backgroundColor', 'orange');
        }
    });
})

$(document).on('click', '.ejection', function () {
    var id = this.id;
    socket.emit('ejection', id);
});

socket.on('ejection', (d) => {
    back = false;
    alert('قد تم طردك من الموقع')
    location.reload();

    socket.close();
});

socket.on('ejections', (d) => {
    back = false;
    location.reload();
    socket.close();
});



$(".messanger-msg-text").animate({ scrollTop: 20000000 }, "slow");
function scrollToBottom2() {
    const messages = document.querySelector('.messanger-msg-text');
    const messagesid = document.querySelector('.messanger-msg-text');
    messages.scrollTop += messagesid.scrollHeight;
}

$(".msg-hanit-replay").animate({ scrollTop: 20000000 }, "slow");
function scrollToBottom3() {
    const messages = document.querySelector('.msg-hanit-replay');
    const messagesid = document.querySelector('.msg-hanit-replay');
    messages.scrollTop += messagesid.scrollHeight;
}

scrollToBottom();
setInterval(scrollToBottom3, 500);

var username = window.localStorage.getItem("userLogin").toString()
var p = window.localStorage.getItem("pwsLogin").toString()

document.querySelector('.namel').value = username.replace(/"/g, '')
document.querySelector('.pwsl').value = p.replace(/"/g, '')

// var nik = window.localStorage.getItem("nikename")
//document.querySelector('.nakename').value = nik.toString().replace(/"/g, '')

$(document).on('click', '.message-chat', function () {
    $('.icons-hanitss').css('display', 'none');
    $('.emojey').css('display', 'none');
    $('.profile').css('display', 'none');
});



$(document).on('click', '.logout-person', function () {
    back = false
    location.reload();
});

$(document).on('click', '.symbols', function () {
    msgvalue.style.backgroundColor = '#929292';
    socket.emit("leaveroomitsellf", "")
    userData[0].currentRoom = ''
    $('.online-by-room').css('display', 'none');
    userStatus.online = false;
    socket.emit("userInformation", userStatus);
});



$(document).on('click', '.part1-header', function () {
    if (back)
        location.reload(true);
})


window.onbeforeunload = function () {
    if ($('.layer1').css('display') == 'block') {
        if (back)
            return 'هل تريد حقا المغادرة';
    }
    setTimeout(() => {
        back = false;
        window.location.reload()
    }, 1000)
};

window.addEventListener('offline', () => {
    back = false;
    location.reload = '/';
});



var fixmeTop = $('.display-voice').offset().top;

$(window).scroll(function () {

    var currentScroll = $(window).scrollTop();

    if (currentScroll >= fixmeTop) {
        $('.display-voice').css({
            position: 'fixed',
            top: '0',
            left: '0'
        });
    } else {
        $('.display-voiceال').css({
            position: 'static'
        });
    }
});

$(document).on('click ', '.eyes-click ', function () {
    $(this).toggleClass('eyes');
});




$(document).on('click', '.eyes-click', function () {
    $('.eyes-click').toggleClass('eyes');
});

socket.on("refrechpage", () => {
    back = false;
    location.reload();

});

socket.on('testMssagerDisplay', (id) => {
    if (document.querySelector('.msg-pro-di').style.display === "block" && document.querySelector('.msg-pro-di').id == id) {
        console.log("it's the same online");
    }
})

var isColorRed = false;
$(document).on('click', '.enibleno', function () {
    if (document.querySelector('.ccchecked2').style.display === "none") {
        socket.emit('changeStats', "red");
        $('.ccchecked2').css('display', 'block');
        isColorRed = true;
        socket.emit('displeN', '')
    } else {
        socket.emit('changeStatsRed', "green");
        $('.ccchecked2').css('display', 'none');
        isColorRed = false;
        socket.emit('enbileN', '')
    }
});
$(document).on('click', '.eniblec', function () {
    if (document.querySelector('.ccchecked').style.display === "none") {
        $('.ccchecked').css('display', 'block');
        socket.emit('displeC', '')
    } else {
        $('.ccchecked').css('display', 'none');
        socket.emit('enbileC', '')
    }
});

/* start size */

function onKeyboardOnOff(isOpen) {
    if (isOpen) {
        /*  $('.footer-section').css('position', 'flex');
         $('.footer-section').css('zIndex', '1000');
         $('.footer-section').css('height', '40px');
         $('.footer-section').css('padding', '2px');
         $('.footer-section').css('bottom', '0px');
         $('.send-msg-field').css('position', 'flex');
         $('.send-msg-field').css('bottom', 'px');
         $('.display-voice div').css('width', '50px')
         $('.display-voice').css('height', '53px') */
    } else {
        /*  $('.messanger-msg-text').css('height', '245px');
         $('messanger').css('height', '335px')
         $('.footer-section').css('position', 'relative');
         $('.footer-section').css('bottom', '0px');
         $('.send-msg-field').css('position', 'relative');
         $('.send-msg-field').css('bottom', '0px'); */
    }
}
/* 
var originalPotion = false;
$(document).ready(function () {
    if (originalPotion === false) originalPotion = $(window).width() + $(window).height();
});

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/windows phone/i.test(userAgent)) {
        return "winphone";
    }
    if (/android/i.test(userAgent)) {
        return "android";
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "ios";
    }

    return "";
}

function applyAfterResize() {

    if (getMobileOperatingSystem() != 'ios') {
        if (originalPotion !== false) {
            var wasWithKeyboard = $('body').hasClass('view-withKeyboard');
            var nowWithKeyboard = false;

            var diff = Math.abs(originalPotion - ($(window).width() + $(window).height()));
            if (diff > 100) nowWithKeyboard = true;

            $('body').toggleClass('view-withKeyboard', nowWithKeyboard);
            if (wasWithKeyboard != nowWithKeyboard) {
                onKeyboardOnOff(nowWithKeyboard);
            }
        }
    }
}
 */
/* end size */
/* $(document).on('focus blur', '', function (e) {
    var $obj = $(this);
    var nowWithKeyboard = (e.type == 'focusin');
    $('body').toggleClass('view-withKeyboard', nowWithKeyboard);
    onKeyboardOnOff(nowWithKeyboard);
});

$(window).on('resize orientationchange', function () {
    applyAfterResize();
}); */



$(document).on('change', '.file-input', function () {
    timeLine = 0
    // chanegColorstats(userData[0].id , "green")
    var formData = new FormData();
    // Append file information to it
    console.log(this.files[0]);
    var s = this.files[0].name;
    formData.append('file', this.files[0]);
    $.ajax({
        url: 'users/imgupload3',
        type: 'POST',
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function ({ msg }) {
            // socket.emit('updateHanit', '')
            // socket.emit('updateStatscolor', '')
        }
    });
    socket.emit("hanitfile", ({ text: s }));
});

$(document).on('change', 'input.sndfile', function (event) {
    var formData = new FormData();
    // Append file information to it
    console.log(this.files[0]);
    var s = this.files[0].name;
    formData.append('file', this.files[0]);
    $.ajax({
        url: 'users/imgupload2',
        type: 'POST',
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function ({ msg }) {
        }
    });
    socket.emit("sendPfile", { name: s, id: $(this).attr('name'), type: s, photo: userData[0].img })
    setTimeout(() => {
        socket.emit("updateChatMsgPrivate", "")
        socket.emit('getChat', $(this).attr('name'));
        socket.emit('getChatP', $(this).attr('name'));
        scrollToBottom2
    }, 2550)
})

$(document).on('click', '.cute-room-creation', function () {
    $('.modal-body').css('display', "none");
});


$(document).on('click', '.rmake', function () {
    var img = document.querySelector('.room-img').getAttribute('src');
    var img1 = img.split('/')
    var img2 = img1[2]

    console.log(img);
    var rtopic = $('.rtopic').val();
    var rabout = $('.rabout').val();
    var rwelcome = $('.rwelcome').val();
    var rlike = $('.rlike').val();
    var rpwd = $('.rpwd').val();
    var rmax = $('.rmax').val();
    var rdel = $('.rdel').val();
    var broadcast = $('.broadcast').val();
    $.ajax({
        type: "get",
        url: "users/createRoom2",
        data: `rtopic=${rtopic}&rabout=${rabout}&rwelcome=${rwelcome}&
        rlike=${rlike}&rpwd=${rpwd}&rmax=${rmax}&rdel=${rdel}&
        broadcast=${broadcast}&img=${img2}`,
        dataType: "json",
        success: function ({ msg }) {
            console.log(msg);
            $('#ops').html(msg)
            setTimeout(() => {
                $('.modal-body').css('display', 'none');
            }, 1500)
        }
    });
})


/* $(document).on('click', '.hanit-msg', function () {
    $('.icons-hanit').css('display', 'none');
}); */

$(document).on('click', '.icons-hanitss img , .icons-hanitss span', function () {
    console.log(this.id);
    var v = document.querySelector('.value-hanit')
    v.value += " " + this.id
    $('.icons-hanitss').css('display', 'none')
});

$(document).on('click', '.fcard1', function (event) {
    var id = this.id
    socket.emit('addHanitLikes', id);
    $(this).removeClass('fcard1');
});

socket.on('updateHanitLike', ({ likes, id }) => {
    document.getElementById(`${id}`).innerHTML = `<i class="fa fa-heart"></i> ${likes}`;
})

$(document).on('click', '.emox-icons-repl-hanit img , .emox-icons-repl-hanit span', function () {
    var id = this.id;
    document.querySelector('.rep-hn-msg').value += " " + id;
    $('.emox-icons-repl-hanit').css('display', 'none');
})

var upload1 = true;
$(document).on('click', '.emo-rep-hanit', function () {
    $('.emox-icons-repl-hanit').toggle();
    if (upload1) {
        document.querySelector('.emox-icons-repl-hanit').innerHTML = `
        <img id='ف0' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1016.gif?alt=media&token=ae346feb-1820-4f9c-9a18-375c1d5c3f64 '> 
        <img id='ف1' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Ffavicon.ico?alt=media&token=a00b5cdf-c93a-40be-a3d6-727ff8a6bc6d'>
        <img id='ف2' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1003.gif?alt=media&token=869dab72-05e7-4877-a4b0-1ba482fcbff7'>
        <img id='ف3' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Femoii.gif?alt=media&token=98d50b59-8139-4e4d-82d4-7b5a49afc06c'>
        <img id='ف4' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1072.gif?alt=media&token=5a91f180-81a6-41eb-8f22-6167bc86d079'>
        <img id='ف5' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1068.gif?alt=media&token=e1264799-3802-4f03-940b-d3d402881ef4'>
        <img id='ف6' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1025.gif?alt=media&token=f4f91634-1a11-4fa3-9e07-d5f5822f9653'>
        <img id='ف7' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1063.gif?alt=media&token=fbb1598e-fc50-413b-9108-109948279960'>
        <img id='ف8' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1062.gif?alt=media&token=f9b59fa8-4ffe-4bf1-827d-8a5a489c8bd1'>
        <img id='ف9' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1022.gif?alt=media&token=18060b42-95e5-41ae-a5e7-26950426f6de'>
        <img id='ف10' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1013.gif?alt=media&token=aec40a69-dd03-4952-aaf5-8eaccaa7d42f'>
        <img id='ف11' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1066.gif?alt=media&token=59f79f2c-dd38-448d-8c1b-7ad0623294f1'>
        <img id='ف12' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1021.gif?alt=media&token=3b7b9495-dc4e-486a-83a1-abcd027b1a5b'>
        <img id='ف13' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1065.gif?alt=media&token=9d4cb722-8764-48c1-8426-ff0e17d748ed'>
        <img id='ف14' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1017.gif?alt=media&token=4cd0a39c-24c8-4417-b234-022d173d64ea'>
        <img id='ف14' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1096.gif?alt=media&token=01e304ca-33a9-4e11-bacd-f9f8814488a9'>
        <img id='ف15' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1073.gif?alt=media&token=baa6c197-b8b3-4ac5-ac65-22451315d995'>
        <img id='ف16' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1069.gif?alt=media&token=46ee296b-5f7d-4ca8-9141-121bc3a171b6'>
        <img id='ف17' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1067.gif?alt=media&token=2f0229f9-0296-4304-9e48-484d53c1d538'>
        <img id='ف18' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1082.gif?alt=media&token=77d0e483-1355-421f-b544-f00a9a85494a'>
        <img id='ف19' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1094.gif?alt=media&token=63e61835-f003-42ec-b7a0-8b28993ccf0f'>
        <img id='ف20' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1099.gif?alt=media&token=b4df13c0-bac3-4f8e-8134-0ba42072b659'>
        <img id='ف21' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1029.gif?alt=media&token=fb888b80-18be-424e-83ba-d901c84b6894'>
        <img id='ف22' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1039.gif?alt=media&token=a461c138-ebfa-46a7-979d-59109b8e0dca'>
        <img id='ف23' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Ff11.gif?alt=media&token=dd788395-3d14-41e4-aa70-a7113ce1e236'>
        <img id='ف24' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1064.jpg?alt=media&token=672c71ef-1d24-4dfc-b614-b87d904ad121'>
        <img id='ف25' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1036.PNG?alt=media&token=7f3daa09-8c7e-4bcb-9683-c2979f8e313b'>
        <img id='ف26' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1019.gif?alt=media&token=1846d3c5-0b60-475b-9576-42b035cdb951'>
        <img id='ف27' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1037.gif?alt=media&token=87ad5ae3-0420-43cf-9f39-c436fa547e5c'>
        <img id='ف28' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1038.png?alt=media&token=8ec0b402-af46-48af-8a2d-abfb507ae58b'>
        <img id='ف29' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1034.gif?alt=media&token=9adf28a5-4874-4954-aef9-b8aa83d8b35a'>
        <img id='ف30' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1026.gif?alt=media&token=40874ae7-a4ce-4498-bd8d-5ce90daeecfe'>
        <img id='ف31' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1028.gif?alt=media&token=4ce3650d-472b-4d2b-bc60-279aa9de3739'>
        <img id='ف32' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1046.gif?alt=media&token=c8c0fb03-1b86-40c1-88b4-32d48e55a75b'>
        <img id='ف33' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1031.gif?alt=media&token=104165a3-7433-45a7-a9f6-da580e1ba354'>
        <img id='ف34' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1032.gif?alt=media&token=a072b734-7e39-46de-ac34-1eff2b381206'>
        <img id='ف35' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1027.gif?alt=media&token=db905d80-19cb-46c3-a3b8-a5d9514127d6'>
        <img id='ف36' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1030.gif?alt=media&token=a36104ae-e9c6-46a4-9a44-46a5d7a9574d'>
        <img id='ف37' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1035.PNG?alt=media&token=355e7fe9-00fd-4496-babb-1c1ed6b16a3b'>
        <img id='ف39' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1048.gif?alt=media&token=f8923361-44bd-49ac-88cf-ecc857b9903b'>
        <img id='ف39' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1157.gif?alt=media&token=20ec2fc8-efa5-4a93-9608-a7481055878b'>
        <img id='ف34' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1156.gif?alt=media&token=7801f0b5-11ab-468a-a0e7-ae9b8a75fa57'>
        <img id='ف35' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1161.gif?alt=media&token=2776e2fa-c0aa-4c49-8e18-d04fa20f6dbe'>
        <img id='ف36' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1147.gif?alt=media&token=fc5691c2-e8f6-4383-aa82-767162f81630'>
        <img id='ف37' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1150.GIF?alt=media&token=f141130a-9370-46a8-b0e2-657661daa19a'>
        <img id='ف38' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1162.gif?alt=media&token=c1ab991e-89f9-47a8-b8cb-a2c029c90767'>
        <img id='ف39' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1144.gif?alt=media&token=8f77faf8-7103-4e1b-b7d2-4cd5690a633e'>
        <img id='ف40' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g9ing6rf101n9zr1nXqbL.gif?alt=media&token=93876128-3165-4247-be30-ccf958504523'>
        <img id='ف41' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g98hs239101S59Tq0quHav-jpeg.png?alt=media&token=f82b8667-f422-4ee1-b308-addd73de3a44'>
        <img id='ف50' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1033.gif?alt=media&token=c9be27a6-2bed-4fa4-8aaf-6b64adabb6e9'>
        <img id='ف51' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1210.gif?alt=media&token=915af090-2f29-4f0f-a258-ef8abb9680a4'>
        <img id='ف52' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1040.gif?alt=media&token=2f9bb53b-3c00-4065-b894-74b5abae3673'>
        <img id='ف53' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1041.gif?alt=media&token=c4065c91-9482-4945-9536-7619c0b99c01'>
        <img id='ف54' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1055.gif?alt=media&token=07efe569-4793-48fd-ac75-acc9d78e2224'>
        <img id='ف55' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1097.gif?alt=media&token=29f54bbc-a35f-4784-ae65-4a9a10a1311e'>
        <img id='ف56' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1090.gif?alt=media&token=d47c8f93-e343-410c-9534-83061501510f'>
        <img id='ف57' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1109.gif?alt=media&token=d7ab2188-b811-47a7-968b-8575cf843377'>
        <img id='ف58' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1103.gif?alt=media&token=536925ca-edca-4055-a7a8-7c11cb155152'>
        <img id='ف59' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1060.gif?alt=media&token=0c075e29-a271-497f-83fd-221d9d82cabb'>
        <img id='ف60' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1051.gif?alt=media&token=3fa6c462-3ce1-441d-8304-7bb0e385dcd8'>
        <img id='ف61' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1047.gif?alt=media&token=7d0a7d82-df23-48f6-b960-0dd440d30cb8'>
        <img id='ف62' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1104.gif?alt=media&token=97b2df6c-4b06-481d-b671-f434e161b0c3'>
        <img id='ف63' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1045.gif?alt=media&token=3fab049d-1cc7-4e80-b855-fe194e88b31f'>
        <img id='ف64' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1059.gif?alt=media&token=df053139-4138-4269-8ef0-d6d2012b23e1'>
        <img id='ف65' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1052.gif?alt=media&token=c9990154-6558-4ab9-b115-7d30c040ee2b'>
        <img id='ف66' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1081.gif?alt=media&token=8a9703bb-31f5-4b75-aa46-426c243a51b6'>
        <img id='ف67' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1075.gif?alt=media&token=e0bdfdf8-058e-451d-a35e-e1bf14722aa9'>
        <img id='ف68' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1088.png?alt=media&token=f804182c-ec48-4986-ab96-7ba76af83dc6'>
        <img id='ف69' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1042.gif?alt=media&token=28fc9505-7c1a-4b26-89fe-b6ce1d8b3456'>
        <img id='ف70' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1044.gif?alt=media&token=a213e402-cc9e-4dd1-a54d-c60efc397b1d'>
        <img id='ف71' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1185.gif?alt=media&token=90221d94-3e06-4b07-87db-4b8f853d97c0'>
        <img id='ف72' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1077.gif?alt=media&token=a33356a4-ecd6-484e-af47-4cf8ff0cab46'>
        <img id='ف73' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1061.gif?alt=media&token=419341f4-cfbf-45db-b8a3-f2cf6c1c975b'>
        <img id='ف74' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1093.gif?alt=media&token=55764ba4-03b2-4f57-bfdb-bfc39970a3be'>
        <img id='ف75' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1100.gif?alt=media&token=57a47bf8-004d-4e04-980c-438d78acee68'>
        <img id='ف76' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1095.gif?alt=media&token=ca2fa359-e18a-4f01-8274-d2f284188efb'>
        <img id='ف77' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1053.gif?alt=media&token=2df6d8bf-f3b3-4ffe-948f-25cb92e949ed'>
        <img id='ف78' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1083.gif?alt=media&token=1b157fc1-5b94-4f20-871d-13473696f7fe'>
        <img id='ف79' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1076.gif?alt=media&token=edad482d-a4f4-41c6-aad2-3b9ea117c4da'>
        <img id='ف80' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1054.gif?alt=media&token=09164f20-a1c0-463a-b2ae-43f77d3a3192'>
        <img id='ف81' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1085.gif?alt=media&token=d789f5ba-3171-4e7d-a072-35ff7b88bf67'>
        <img id='ف82' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1043.gif?alt=media&token=6462981e-e979-4f5a-a994-51ec6164080d'>
        <img id='ف83' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1092.GIF?alt=media&token=065753b6-4388-4964-a8b9-49d2bf02188b'>
        <img id='ف84' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1080.gif?alt=media&token=7614ead6-aad8-4a8c-b16f-8df485e1c083'>
        <img id='ف85' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1087.gif?alt=media&token=26391c70-cd8d-40f6-80c0-a082dfbfa79c'>
        <img id='ف86' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1058.gif?alt=media&token=33912252-7ce4-4ace-9629-5a58ea971478'>
        <img id='ف87' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1049.gif?alt=media&token=6f349477-2a78-4bd0-bf20-a56becd9a0df'>
        <img id='ف88' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1201.gif?alt=media&token=cbd760e2-8088-4220-8e85-03c8bd89e210'>
        <img id='ف89' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1071.gif?alt=media&token=f0ed6cd7-154a-4475-a8e0-b71da836fce5'>
        <img id='ف90' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1084.gif?alt=media&token=35c2bb4f-59d9-4986-8ed7-3267ccaadc15'>
        <img id='ف91' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1056.gif?alt=media&token=adff4202-8276-4262-a3ca-22afd58b11c3'>
        <img id='ف92' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1057.gif?alt=media&token=69f9b01a-0003-46db-9839-fa8eba5a11c9'>
        <img id='ف93' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1091.gif?alt=media&token=8ec243d6-5fed-4168-abd4-375cf19ee286'>
        <img id='ف94' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1101.gif?alt=media&token=7a7664ef-79fd-45f6-973e-3fe01a381d0b'>
        <img id='ف95' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1098.gif?alt=media&token=3fcc5147-76c5-4a22-bb10-4b3be83e5297'>
        <img id='ف96' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1078.png?alt=media&token=f20cd68d-2b99-4007-bd20-222dcfca8db1'>
        <img id='ف97' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1050.gif?alt=media&token=d1b18fca-b03a-48ac-81c0-067a68684068'>
        <img id='ف98' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1074.gif?alt=media&token=2f0fca4d-ebd1-4b1b-8320-1dbffa823384'>
        <img id='ف99' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1086.gif?alt=media&token=dc6e5342-5d44-4d98-97b2-c72c69dc4d42'>
        <img id='ف100' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1079.gif?alt=media&token=10005923-b62b-46d5-93f9-35026f46b1c4'>
        <img id='ف101' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1089.gif?alt=media&token=56bbec41-97ce-4e79-a774-5dfae3b0bf7f'>
        <img id='ف102' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1190.gif?alt=media&token=bd425190-200e-4216-9509-6091e31e9a72'>
        <img id='ف103' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1111.gif?alt=media&token=65db9201-3d09-4613-8d26-17a06a4f714d'>
        <img id='ف104' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1102.png?alt=media&token=472a357d-e91a-43a3-b672-1dae4806e5fb'>
        <img id='ف105' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1110.gif?alt=media&token=9965c614-53c4-469a-bb8c-3cf5c780b84c'>
        <img id='ف106' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1106.gif?alt=media&token=07ea1c7b-d869-4477-9ae7-aac33ca6bc1f'>
        <img id='ف107' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1108.gif?alt=media&token=46b670ba-bc3a-4cae-9466-03f17c3f5f7d'>
        <img id='ف108' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1105.gif?alt=media&token=36481ce8-0b19-4db8-a07f-76914648945a'>
        <img id='ف109' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1070.gif?alt=media&token=82c7d2d0-c8b7-4227-961f-147ca38b06c3'>
        <img id='ف110' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1107.gif?alt=media&token=6e605a30-16f5-4a85-95db-2312f8e1f073'>
        <img id='ف111' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g9dtth481001abuD1DaCPG.gif?alt=media&token=48baf5dd-adfe-4d59-ab83-94e03a9f9df0'>
        <img id='ف112' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1193.gif?alt=media&token=219e968b-2d09-4012-be07-7d7e364f4311'>
        <img id='ف113' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1009.gif?alt=media&token=f9b2dd4f-8962-4334-a43f-99b16e64b71f'>
        <img id='ف114' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1196.gif?alt=media&token=41661f44-97e2-4923-ad20-f36e5c52f460'>
        <img id='ف115' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g9dtro7b100vuWSf0eivXG.gif?alt=media&token=f9ba54d6-c77e-4cf8-a376-912644491614'>
        <img id='ف116' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1194.gif?alt=media&token=d89a4b2c-73e6-423d-b63d-65bac755d40b'>
        <img id='ف117' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1023.gif?alt=media&token=a7c83ef4-c685-4e75-96ec-dda8d7e0a926'>
        <img id='ف118' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1200.gif?alt=media&token=63a860ed-e417-437d-89c0-4ba26bba9479'>
        <img id='ف119' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1145.gif?alt=media&token=2d5a3fcc-b09b-47fd-b3f0-886d58e33de7'>
        <img id='ف120' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1191.gif?alt=media&token=9be1db13-8c66-43f3-bcbd-4772ea367a5b'>
        <img id='ف121' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g925s5cr100jHuPG1OGHaW.gif?alt=media&token=d0a527b8-dcb6-4d56-a0c2-2aa465ee23e6'>
        <img id='ف122' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1199.gif?alt=media&token=3032e63a-2c21-4edf-b029-7df3488cc51e'>
        <img id='ف123' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1197.gif?alt=media&token=868f78b8-527f-4588-9fb6-3b737afe70e4'>
        <img id='ف124' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1202.gif?alt=media&token=a454dc46-e99b-46fb-ac48-534fe9e8a2ce'>
        <img id='ف125' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1198.gif?alt=media&token=c5ea9166-376f-4d80-a14d-c03b4452410e'>
        <img id='ف126' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1155.gif?alt=media&token=d095b024-cc85-40bd-8d06-3dacddd35746'>
        <img id='ف127' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g9dtu1og100yybL00rTzP9.gif?alt=media&token=d5c40bec-4a94-4fb7-9252-0f1a3f4ccac2'>
        <img id='ف128' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1192.gif?alt=media&token=973f91b2-7f3a-433e-9a23-8524db10b893'>
        <img id='ف129' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g9dttqu1101P04901DmTqW.gif?alt=media&token=a9391bb5-c536-4196-8029-cdb1827212bc'>
        <img id='ف130' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1188.gif?alt=media&token=1b7ffe82-b8b6-46e5-b820-8eaa714b5c99'>
        <img id='ف131' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g98rnjr71010vjbn141Xv4.gif?alt=media&token=2c1a3670-d0ba-469b-b5ec-46c31eacce86'>
        <img id='ف132' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1218.gif?alt=media&token=00b4b39e-3b2e-4c33-8c8b-b28c1d91b451'>
        <img id='ف133' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1152.gif?alt=media&token=7fe0962e-5593-43f5-a746-5d3b5b5f5c20'>
        <img id='ف134' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1165.gif?alt=media&token=8592b4c7-8c44-4156-8656-7a3436040609'>
        <img id='ف135' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1024.gif?alt=media&token=d56bc95c-c89e-44d1-bf7a-372fcb45679c'>
        <img id='ف136' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1189.jpeg?alt=media&token=3425844a-1ed6-4629-a892-bf08448bf98d'>
        <img id='ف137' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1183.gif?alt=media&token=10f0b21c-84a9-459e-a2f8-327941e271d1'>
        <img id='ف138' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1173.gif?alt=media&token=36478647-f6f2-431a-90f2-028cb7ad6fff'>
        <img id='ف139' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1020.gif?alt=media&token=d3f7231c-616b-4d5d-a7ab-a4fcaaceccc3'>
        <img id='ف140' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1182.gif?alt=media&token=c247fb67-2d95-42d8-8271-3740430a081c'>
        <img id='ف141' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1207.gif?alt=media&token=abccf933-bfbd-4252-a030-35e784841ad8'>
        <img id='ف142' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1002.gif?alt=media&token=8e795ca1-988f-4dec-9718-152beea7bd60'>
        <img id='ف143' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1014.gif?alt=media&token=625e7d6a-873d-49e7-a62a-80979a4fb5f2'>
        <img id='ف144' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1172.gif?alt=media&token=c5a23eac-7c34-4bf1-a45d-c71fe2770aab'>
        <img id='ف145' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1175.gif?alt=media&token=6e88096a-6626-4ac7-a165-a7d8d28d69ec'>
        <img id='ف146' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1176.gif?alt=media&token=6d1ed29b-243c-43a7-8f9c-fd92ded546db'>
        <img id='ف147' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1168.gif?alt=media&token=51d1192d-2476-4981-8135-3b2d69254b50'>
        <img id='ف148' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1018.gif?alt=media&token=c0a90569-ddf9-490b-886b-2a951e078071'>
        <img id='ف149' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1177.gif?alt=media&token=fae4e642-670f-4e67-a24f-4665df02116b'>
        <img id='ف150' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1171.gif?alt=media&token=f6d0449e-e37a-4815-9fb4-84e3058022aa'>
        <img id='ف151' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1006.gif?alt=media&token=e72e8934-b4cb-4c26-bfaf-ab7d2f4bc4d3'>
        <img id='ف152' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1160.gif?alt=media&token=14fb2439-966a-49e7-9cbe-092b42b377a7'>
        <img id='ف153' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1148.gif?alt=media&token=40ef54be-ea78-41d7-a16f-e9c1bfff66ea'>
        <img id='ف154' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1146.gif?alt=media&token=30a4d145-22ad-40ca-becd-4c2e047df211'>
        <img id='ف155' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1159.png?alt=media&token=0e0b0d93-6cc0-4aa8-b04a-d112e4b0ed43'>
        <img id='ف156' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1158.gif?alt=media&token=d858ba74-fd5e-4737-bab0-e95808aaffb4'>
        <img id='ف157' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1163.gif?alt=media&token=b7758623-5a34-4bd1-b354-292ca82f70c4'>
        <img id='ف158' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1195.gif?alt=media&token=d901d6e7-c447-4d9a-9397-4d50b3c34dd1'>
        <img id='ف159' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1153.gif?alt=media&token=10e8ecb5-e538-4d08-ae73-74383ce99ff1'>
        <img id='ف160' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g98rqotj101qrayez90bb.gif?alt=media&token=f9ca2989-3b14-4270-b253-914af6e2ab5b'>
        <img id='ف161' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1151.gif?alt=media&token=b8069caf-1162-43b6-b153-a999d5895939'>
        <img id='ف162' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1164.gif?alt=media&token=035444d0-c5c3-4fb6-8dee-0cf84ea3bd1c'>
        <img id='ف163' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1154.png?alt=media&token=db6b1c8e-57de-455a-a790-080b4bb57fda'>
        <img id='ف164' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1010.gif?alt=media&token=d4f7c044-c224-4b7a-a5e2-7a826488feba'>
        <img id='ف165' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1167.gif?alt=media&token=66d2b92c-9094-4798-9233-4857e8b1854e'>
        <img id='ف166' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1005.gif?alt=media&token=a35f30d9-19f9-40a0-ab67-aec34a2f8e47'>
        <img id='ف167' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1203.png?alt=media&token=d5db4d61-3861-4a1c-b45b-cdc532dd1521'>
        <img id='ف168' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1011.gif?alt=media&token=301b10af-fd36-4739-ba01-b26c20e6c2e2'>
        <img id='ف169' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1001.gif?alt=media&token=1f83d978-36e0-423b-94b1-a12fac49faa5'>
        <img id='ف170' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1179.gif?alt=media&token=4ebc19de-0151-4c0b-88c5-d37d2eef60e8'>
        <img id='ف171' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1015.bmp?alt=media&token=3bb5b398-22b2-4a5e-9698-062beb935c53'>
        <img id='ف172' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1205.gif?alt=media&token=79c2a903-579c-4b1d-8625-8713b81f0842'>
        <img id='ف173' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1178.gif?alt=media&token=abbc294b-970f-42b5-9c9f-ab3fb2dfd923'>
        <img id='ف174' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1166.gif?alt=media&token=29e0906b-103a-43ca-a4f5-5cafeec5bb0d'>
        <img id='ف175' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1174.gif?alt=media&token=c42c9469-1bc1-480b-814b-f0a97dae7148'>
        <img id='ف176' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1169.gif?alt=media&token=66b3dc76-cf9d-4e59-9ecf-9eaf7385e15f'>
        <img id='ف177' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fkings.gif?alt=media&token=fa453121-63b7-4197-b992-6731d32f67fb'>
        <img id='ف178' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1204.gif?alt=media&token=c09e7ea4-2dae-4b89-b718-4606cf98c04f'>
        <img id='ف179' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1187.gif?alt=media&token=612f9822-ffb9-4af4-bc43-16c9e6ba8203'>
        <img id='ف180' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1180.gif?alt=media&token=69899543-3e1d-4d57-b40d-c7eb19042b08'>
        <img id='ف181' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1186.gif?alt=media&token=b33cf140-40ed-4c8a-ac93-8c191a79226c'>
        <img id='ف182' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1215.gif?alt=media&token=6e18ce74-8a1c-482f-9f33-3c9c7a99de3f'>
        <img id='ف183' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1008.gif?alt=media&token=ea41f45c-acd5-48d8-a46c-b3f7983aef50'>
        <img id='ف184' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1ft0vc2g6101yP4u01Xaf4C.gif?alt=media&token=dfecb76d-6ca4-4984-9609-ea9834ec2690'>
        <img id='ف185' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1214.gif?alt=media&token=407ad537-9729-4b99-a906-8f7a0256ce6e'>
        <img id='ف186' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1212.gif?alt=media&token=ce16a57e-a3bc-49c8-a31a-bbcefca5ca66'>
        <img id='ف187' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1213.gif?alt=media&token=bcbffe78-b2cb-471e-8369-8a52f7da0d4a'>
        <img id='ف188' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1216.gif?alt=media&token=2a52103b-c6c6-4e3d-84e3-854b56f10fcb'>
        <img id='ف189' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1229.gif?alt=media&token=200e5a4a-0961-4417-a19d-40055c98ed5b'>
        <img id='ف190' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1211.gif?alt=media&token=d5589594-5a11-4401-a296-2c3e2cbd2fc5'>
        <img id='ف191' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1209.gif?alt=media&token=9d8df66c-eb22-4220-907f-03c9c5dfcfd2'>
        <img id='ف192' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1219.gif?alt=media&token=9bde0832-c10a-4921-b7b5-b552fa32933a'>
        <img id='ف193' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1208.gif?alt=media&token=2ac73fea-0ecb-431a-8917-f036451caf2b'>
        <img id='ف194' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1206.gif?alt=media&token=bba5df44-56ea-41ec-b22c-bfd547da2061'>
        <img id='ف195' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1222.gif?alt=media&token=0ab69a4f-4785-44e9-a14c-5ff7455cbd32'>
        <img id='ف196' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1226.gif?alt=media&token=08b9e443-cf41-4f53-8201-a6ec54955b45'>
        <img id='ف197' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1230.gif?alt=media&token=f907eeb4-0317-485a-a6f8-325c43e3ba11'>
        <img id='ف198' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1228.gif?alt=media&token=1ed7af7f-f434-40f4-9e71-67581e024424'>
        <img id='ف199' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1225.gif?alt=media&token=9d5a65b5-00d8-4404-99fd-8e7e0b247517'>
        <img id='ف200' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1220.gif?alt=media&token=faabba19-9c01-4129-8b8d-87ac9d6283f0'>
        <img id='ف201' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1217.gif?alt=media&token=d2327248-eb1b-42d7-beac-d171c8945969'>
        <img id='ف202' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1221.gif?alt=media&token=2fb879ba-22e7-43c0-b1f9-7441ce376fa6'>
        <img id='ف203' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1241.gif?alt=media&token=86826cce-007c-4a1c-97a7-1b054ba8d33d'>
        <img id='ف204' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1124.gif?alt=media&token=ef4df657-94b9-493f-b95d-2e55a4410377'>
        <img id='ف205' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1231.gif?alt=media&token=732b4486-0cc0-4b2f-86d4-da39d2be81d0'>
        <img id='ف206' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1233.gif?alt=media&token=0324d981-5bc0-4307-9bbe-69492b208b93'>
        <img id='ف207' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1234.gif?alt=media&token=d9d07709-d7a8-418e-80a3-24618d2c1256'>
        <img id='ف208' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1133.GIF?alt=media&token=106e636f-c79f-4d10-a8a5-1cd579a0b8d2'>
        <img id='ف209' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1136.gif?alt=media&token=93a7b25e-23db-43c9-b0af-389dda305cef'>
        <img id='ف210' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1239.gif?alt=media&token=6b04e675-2644-41b5-a084-64c957c8e1e9'>
        <img id='ف211' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1243.gif?alt=media&token=fcf2bf73-86c7-4600-858c-da01d67e8dac'>
        <img id='ف212' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1238.gif?alt=media&token=4d52610f-e730-4684-9d12-bcf767458ed5'>
        <img id='ف213' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1129.gif?alt=media&token=2beace75-de38-4ba3-b8d4-d8ba68ffca66'>
        <img id='ف214' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1130.gif?alt=media&token=d755154a-6791-4523-913f-811315bfeb0b'>
        <img id='ف215' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1127.gif?alt=media&token=c10df26c-a69d-4e63-b540-1205fc688385'>
        <img id='ف216' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1223.gif?alt=media&token=2aead6f7-a413-459f-984b-b2bd29a68c0f'>
        <img id='ف217' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1235.gif?alt=media&token=5913ab23-56de-4f0b-ae0d-e3766f5051b3'>
        <img id='ف218' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1236.gif?alt=media&token=a0715386-c44f-4c4d-b8ba-7e2fa86dab7a'>
        <img id='ف219' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1237.png?alt=media&token=e343ec84-1775-4629-b5a9-869153ac1a14'>
        <img id='ف220' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1227.gif?alt=media&token=64e25266-cf86-4fd5-8fc2-75a355361bda'>
        <img id='ف221' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1224.gif?alt=media&token=9ad713ec-d3b3-42b7-996e-c474785cab56'>
        <img id='ف222' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1128.gif?alt=media&token=2ee14434-1558-4bac-9bbb-99f8fdb7ca74'>
        <img id='ف223' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1126.gif?alt=media&token=bddc2bae-23a7-436b-8d17-30fd8a54116a'>
        <img id='ف224' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1143.gif?alt=media&token=826eabe6-7da6-4a44-83b9-5b710d14ec41'>
        <img id='ف225' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1240.gif?alt=media&token=ebda50ad-25a1-48ae-b60e-c151286b4182'>
        <img id='ف226' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1114.GIF?alt=media&token=00f8e55c-a156-4900-a9be-0972d51f267b'>
        <img id='ف227' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1232.gif?alt=media&token=6b7dce86-cdaf-4279-b3ef-55249f710765'>
        <img id='ف228' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1244.gif?alt=media&token=71454a37-24fd-4903-8dce-8ebe81b7f2bb'>
        <img id='ف229' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1115.GIF?alt=media&token=6c6a12ea-f19a-4b42-9b5c-74509a1eabbe'>
        <img id='ف230' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1113.gif?alt=media&token=fb1bd951-5bb4-4d6f-964c-c7760dc574de'>
        <img id='ف231' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1123.gif?alt=media&token=6d7e0231-7cb9-4106-a8b3-6130196bfb24'>
        <img id='ف232' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1116.gif?alt=media&token=6c3ffba8-aad3-4864-88d8-3bc27bd0b7bb'>
        <img id='ف233' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g9l5k202101qruP51HDvfG.gif?alt=media&token=8016cb39-4647-46e5-8ea1-96926258b68b'>
        <img id='ف234' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1131.png?alt=media&token=bf47c3a6-4b01-49a9-98ea-d608aa3bad69'>
        <img id='ف235' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1112.gif?alt=media&token=89920de4-448f-4253-9a66-1b959af03609'>
        <img id='ف235' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1132.gif?alt=media&token=d8d8c093-6c30-4f7b-945d-961bdd5e8d88'>
        <img id='ف236' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1242.gif?alt=media&token=e95b4332-53db-461c-aa5c-9ee6c937d32e'>
        <img id='ف237' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1135.gif?alt=media&token=615aca7d-56e5-48a0-8b9a-d83dd4682a5e'>
        <img id='ف238' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1245.gif?alt=media&token=a8304a7c-1343-423c-8ba6-f9b19c7a4302'>
        <img id='ف239' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1138.gif?alt=media&token=1d7fdce5-d075-4677-8462-59face1890dd'>
        <img id='ف240' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1134.gif?alt=media&token=4794e68b-968c-4f6a-8bf4-c6842ee8eca0'>
        <img id='ف241' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1137.gif?alt=media&token=79943726-4679-4662-988d-c119182221ce'>
        <img id='ف242' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1140.gif?alt=media&token=fad50c8d-1489-4955-87c2-2802bf8ff42b'>
        <img id='ف243' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1246.gif?alt=media&token=1d5978ac-cb7b-4817-b101-21d396352d9c'>
        <img id='ف244' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1141.gif?alt=media&token=b8562088-e6b1-409e-89c9-218b46857112'>
        <img id='ف245' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1142.gif?alt=media&token=58bc534e-4fdc-4b11-8290-625d5cfc3512'>
        <img id='ف246' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1139.gif?alt=media&token=6f3a4a3f-0199-467c-a7a8-18b563277dcd'>
        <img id='ف247' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1250.gif?alt=media&token=ee0d7ba5-a6e8-40dc-91d8-e76bd3e9aef8'>
        <img id='ف248' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1255.gif?alt=media&token=6e31965e-57d9-424c-8508-dc7a9b84d6b5'>
        <img id='ف249' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1254.gif?alt=media&token=6decf022-b880-4516-996e-cd1c8746b303'>
        <img id='ف250' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1247.gif?alt=media&token=42f04901-e7e7-4cbc-9d39-b4a33af2dd2d'>
        <img id='ف251' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1249.gif?alt=media&token=f3f606b1-ff78-4347-a52b-350d11af7bd4'>
        <img id='ف252' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1248.gif?alt=media&token=bc974023-a43c-47fe-8369-8d6bc09f4f6c'>
        <img id='ف253' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Flock.png?alt=media&token=c7d582eb-eee5-4015-89ab-60c9442102c2'>
        <img id='ف254' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1253.jpeg?alt=media&token=31be7bd9-4e0f-4b6d-aeb1-41f34420c125'>
        <img id='ف255' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1251.gif?alt=media&token=d76d417d-575d-4a60-b245-1bf919b6fa98'>
        <img id='ف256' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1252.jpeg?alt=media&token=a210e0d7-a35c-492d-be80-36ca53be3eb8'>
        <img id='ف257' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1258.gif?alt=media&token=a5894ca8-28b5-4ec2-804d-2fde55d1012b'>
        <img id='ف258' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1257.gif?alt=media&token=4c640dc4-e15d-4036-987e-78c552656971'>
        <img id='ف259' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fmic.png?alt=media&token=ab2ff817-6eb4-444a-9352-7aed3ec582c6'>
        <img id='ف260' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1117.GIF?alt=media&token=aa775008-e3ec-40be-8cfc-2dbbab7a51be'>
        <img id='ف261' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1fsej9udg10084uPm15qS8i.gif?alt=media&token=5d1936fd-8e0d-4343-be4b-4b8066908947'>
        <img id='ف262' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1256.gif?alt=media&token=e751175d-9055-49cb-8774-ae727dcb4b5e'>
        <img id='ف263' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1120.png?alt=media&token=8b34a257-814e-4b30-ac4a-906852a1fe9b'>
        <img id='ف264' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1122.gif?alt=media&token=f2b650eb-a207-41a8-8c46-17b37c76ff01'>
        <img id='ف265' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1ekb8jor310.gif?alt=media&token=998601dd-dded-4131-a6ea-ccd22751f6e6'>
        <img id='ف266' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1119.gif?alt=media&token=d5ca6eb5-a107-4b2a-acc0-34f7f119ed1b'>
        <img id='ف267' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1118.gif?alt=media&token=1bd42cf4-2b80-4b5b-9cde-b12365bc5336'>
        <img id='ف268' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1burer85r10.gif?alt=media&token=0663946c-c864-4c93-bfd7-f30855f66230'>
        <img id='ف269' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1eioaf9ei10.gif?alt=media&token=dcfb4c68-d2bd-4205-b60f-cf835c8aa972'>
        <img id='ف270' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1bvvmep2j10.png?alt=media&token=75aff95b-ee0d-40ad-aef7-284d40dce820'>
        <img id='ف271' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fs2.png?alt=media&token=22f8b19b-0e8f-4b8b-9920-a666ff24bcee'>
        <img id='ف272' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fw4.png?alt=media&token=ad750e08-8f45-4d54-8419-df4d6502ac5d'>
        <img id='ف273' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1fsh2bfp3100nyXD41z455y.gif?alt=media&token=afc4a076-4ef0-410a-9779-6baecaf3f37c'>
        <img id='ف274' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1125.gif?alt=media&token=4cf87153-76c1-4697-a6d0-9335e841670e'>
        <img id='ف275' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fs1.png?alt=media&token=0397b0fd-a1a7-4865-986b-a09bace7524f'>
        <img id='ف276' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g867kq2r101zPWv91Cje1n.gif?alt=media&token=ec4e39d2-5244-4629-ab32-735e40e234ac'>
        <img id='ف277' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fs3.png?alt=media&token=f34d2b6e-cc22-416a-9a44-d5c24644b7fe'>
        <img id='ف278' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1ft6dpbvp1008XiCK1iSOzG.gif?alt=media&token=efceed8c-85ab-47e2-9e0b-5429940f6028'>
        <img id='ف279' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fpic.png?alt=media&token=b6ed3094-7599-4f0f-a9fb-0d80b47fd433'>
        <img id='ف280' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1g7669rls100WKT4j1GHLra.gif?alt=media&token=55919d52-ba26-42b6-a5f3-b338cc226905'>
        <img id='ف281' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fs0.png?alt=media&token=10f9a682-b2c9-47ac-8f46-1b7038029afa'>
        <img id='ف282' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fprv1.png?alt=media&token=aa93c922-4927-4d63-8665-3f158a136c54'>
        <img id='ف283' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fs4.png?alt=media&token=bda5b4fb-6e42-4b04-b52a-c9cab793ecb8'>
        <img id='ف284' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Froom.png?alt=media&token=7ca3caff-53df-4463-87cc-f340a1cb1057'>
        <img id='ف285' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fz1burdu33110.gif?alt=media&token=375d03b7-fa6b-47a9-ba43-7772c3337561'>
        <img id='ف286' src='https://firebasestorage.googleapis.com/v0/b/image-8525a.appspot.com/o/emojey%2Fl68fiu8x_1121.gif?alt=media&token=eeb06dd0-61ed-4a34-aa6a-bc7922087eb2'>
    `
        upload1 = false;
    }
})

$(document).on('click', '.replay-hanit', function () {
    if (document.querySelector('.icons-hanit-repeated')) {
        document.querySelector('.icons-hanit-repeated').style.display = "none"
    }
});

$(document).on('click', '.close-rep-hanit', function () {
    $('.replay-hanit').css('display', 'none');
    $('.emox-icons-repl-hanit').css('display', 'none');
});


$(document).on('click', '.fcard2', function () {
    var id = this.id;
    var div = document.querySelector('.replay-hanit');
    div.innerHTML = `
        <div class="title-hanit">
        <p>التعليقات <i class="fa fa-comments"></i></p>
        <div class="close-rep-hanit" style="background-color: #77777769;border-radius: 5px;cursor: pointer;"><i class="fa fa-times"></i></div>
        </div>
        <div class="msg-hanit">
        <div class="img-re">
            <img style="width:60px;position: relative;
            " src="/emojey/favicon.ico" alt="" srcset="">
        </div>
        <p class="msg-content-hant"></p>
        </div>
        <div class="msg-hanit-replay">
        </div>
        <div class="send-rep">
        <div class="emo-rep-hanit">
            <img style="width : 25px" src="/images/icons.gif" alt="">
        </div>
        <input type="text" class="rep-hn-msg">
        <button id="${id}" name='${id}' class="btn-send-replay-hanit"><i class="fa fa-send sndpm fl btn-primary"></i></button>
        </div>
    `;
    div.style.display = "block";
    socket.emit('getHanitComment', id);
    socket.on('reComment', ({ docs, docs1 }) => {
        console.log(docs);
        var msghanit = document.querySelector('.msg-hanit-replay');
        msghanit.innerHTML = ''
        for (var i = 0; i < docs.length; i++) {
            var div = document.createElement('div');
            div.setAttribute('id', `${docs[i].feed_back_id}feedss`)

            div.innerHTML += `
            <div class="rep-infos" >
            <div class="img-rep">
            <img style="width:50px" src="/upload/${docs[i].img}" alt="" srcset="">
            </div>
            <div class="msg-rep-feed">
           <div class="rep-in">
            <p>${docs[i].name}</p>
            <p>${docs[i].comment}</p>
           </div>
            <div class="rep-options" style="display:flex;color: white;display: flex;
            color: white;
            position: relative;
            top: 22px;">
                <div class="addLikeRe" name="${docs1[0].msg_id}" id="${docs[i].feed_back_id}" style="width: 29px;
                background-color: #d9534f;
                height: 18px;
                text-align: center;
                text-align: center;"><i class="fa fa-heart"></i>${docs[i].likes}</div>
                <div class="deleteRe" id="${docs[i].feed_back_id}" style="width: 20px;
                background-color: #113233;
                height: 18px;
                text-align: center;
                text-align: center;"><i class="fa fa-times"></i></div>
            </div>
            </div>
        </div>
        `; msghanit.appendChild(div);
        };
        console.log(docs1[0].mag_content);
        var dd = docs1[0].mag_content;
        var ss = ''
        if (dd.search('<iframe') >= 0) {
            ss = "مقطع فيديو"
            console.log("viidd");
        } else if (dd.search('<img') >= 0) {
            ss = " صورة "
            console.log("viidd");
        } else if (dd.search('<video') >= 0) {
            ss = " فيديو "
            console.log("viidd");
        }
        else {
            ss = docs1[0].mag_content
            console.log("elsssssssssssssss");
        }
        $('.img-re').html(`
            <img style="width: 52px;
            height: 46px;" src="upload/${docs1[0].img}" >
        `)
        $('.msg-content-hant').html(ss);
    });
});

$(document).on('click', '.btn-send-replay-hanit', function () {
    var resultArray = []
    var vals = $('.rep-hn-msg').val();
    var id = this.id;
    var myArray = vals.split(" ");
    for (var i = 0; i < myArray.length; i++) {
        var resText = myArray[i].replace('ف', '')
        if (myArray[i].includes('ف') && Number(resText)) {
            var index = myArray[i].replace('ف', '');
            var imgss = `<img style="width:22px" src="${imgData[index]}">`;
            resultArray.push(imgss);
            continue

        } resultArray.push(myArray[i])

    }
    var val = resultArray.join(" ").toString();
    socket.emit('addComment', { val, id });
    $('.rep-hn-msg').val("");
    setTimeout(() => {
        socket.emit('getHanitComment', id);
    }, 1000)
});

$(document).on('click', '.deleteRe', function () {
    var id = this.id;
    socket.emit('deleteCooment', id);
    var itme = document.getElementById(`${id}feedss`);
    var msghanit = document.querySelector('.msg-hanit-replay');
    msghanit.removeChild(itme);
});

$(document).on('click', '.msg-hanit-replay', function () {
    $('.emox-icons-repl-hanit').css('display', 'none')
});


$(document).on('click', '.addLikeRe', function () {
    var id = this.id
    var name = $(this).attr('name')
    socket.emit('addLikesRep', id)
    setTimeout(() => {
        socket.emit('getHanitComment', name);
    }, 1000)
});



$(document).on('click', '.hanit-msg-border', function () {
    $('.replay-hanit').css('display', 'none');
});

$(document).on('click', '.messanger-msg-text', function () {
    $('.emoxemojey').css('display', 'none')
});

/* $(document).on('click', '.remove', function () {
    $('.messanger').css('display', 'none')
    profile.style.dispaly = "none"
}); */


$(document).on('change', 'input.room-img', function () {
    var formData = new FormData();
    console.log(this.files[0]);
    var s = this.files[0].name;
    formData.append('file', this.files[0]);
    $.ajax({
        url: 'users/imgupload4',
        type: 'POST',
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function ({ msg }) {
            socket.on('updateStatscolor', '')
            $('.image-cader-room').html(`<img class="room-img" style="width:80px;height:55px;object-fit: cover;" src="/upload/${s}">`)
        }
    });
});

$(document).on('click', '.without-img-room', function () {
    $('.image-cader-room').html(`
    <input class="room-img" style="width: 80px;
    height: 54px;" id="room-image" type="file" name="" id="">
    `)
})


/* window.addEventListener('load', function () {
    socket.emit('getImojey', '')
    $('.emoxemojey').css('display', 'block')
    socket.on('backEmojey', ({ img }) => {
        for (var i = 0; i < img.length; i++) {
            document.querySelector('.emojey').innerHTML += `
                <img src="/emojey/${img[i]}" title="${i}" id="ف${i}">
            `
        }
    })
}) */


$(document).on('click', '.message-chat', function () {
    $('.stats').css("display", 'none');
})


socket.on('chekcMessanger', ({ docs, name, socket, img, id }) => {
    console.log("closed " + id + " " + document.querySelector('.messanger').id) // insert into messagnger
    if (document.querySelector('.messanger').style.display === "block" && document.querySelector('.messanger').id == id) {
        var div = document.createElement('div');

        for (var i = 0; i < docs.length; i++) {
            var time = Math.floor(docs[i].timen / 60);
            console.log(time);
            div.innerHTML += `
                <div>
                <div class="massanger-msg">
                <div class="img-messanger">
                    <img style="width: 52px;
                    border-radius: 4px;
                    height: 48px;" src="/upload/${docs[i].img}" alt="">
                </div>
                <div class="mgs-info-messanger">
                    <div class="messanger-name">${docs[i].user1}</div>
                    <div class="messanger-text">${docs[i].msg}</div>
                </div><span style="
                position: relative;
                font-weight: 600;
                opacity: 0.5;
                position: relative;
                top: 1px; 
                " class="time1582 time-welcome">
                    ${Math.floor((docs[i].timen / 60) / 60)}د
                </span>
                </div>
                </div>
            `;
        }
        document.querySelector('.messanger-msg-text').innerHTML = '';
        document.querySelector('.messanger-msg-text').append(div);
        console.log(id + " " + document.querySelector('.messanger').id) // insert into messagnger
        if (nbmsg > 0) {
            nbmsg--;
        }
        $('.prv2').html(`الخاص${nbmsg}<i class="ae fa label label-primary fa-commenting"></i>`)
        $('.prv2').css('color', '#f8a103')
        if (nbmsg <= 0) {
            nbmsg = 0
            $('.prv2').css('color', 'white')
            $('.prv2').html(`الخاص<i class="ae fa label label-primary fa-commenting"></i>`)
        }
    }
    scrollToBottom2()
})

/* var statscolor = 0;
setInterval(()=>{
    statscolor++;
    if(statscolor == 60){
        socket.emit('changeGreen' , 'ss')
    }
} , 2000) */


$(document).on('click', '.addLikesfun', function () {
    var id = this.id;
    socket.emit('addLikes', id);
})

socket.on('updateLikeslive', ({ likes, id, name, img }) => {
    if (profile.style.display == "block") {
        $(`.addLikesfunsss`).html('<i class="fl fa fa-heart btn ulike borderg"></i>' + (likes > 1000 ? likes / 1000 + "k" : likes))
        $(`.addLikesfunsss`).removeClass('addLikesfun')
    }

})

socket.on('updateLikesliveNo', ({ likes, id, name, img }) => {
    $('.alert-msg').css('display', 'block');
    document.querySelector('.imghh').setAttribute('src', `/upload/${img}`)
    $('p.alert-inner').html("ارسل لك إعجاب");
    document.querySelector('p.namehhh').innerHTML = name
});

socket.on('closePrivatemsg', ({ msg }) => {
    $('.alert-msg').css('display', 'block');
    $('p.alert-inner').html(`${msg}`);
    $('p.alert-inner').css('marginTop', '10px');
})


socket.on('socketInternetProblemsUnind', () => {
    if (confirm('هناك مشكلة في التعرف على المعلومات الشخصية, هل تريد تحديث الصفحة ؟ ')) {
        back = false;
    } else {

    }
})



function ChangeNikename(userId, nikename) {
    document.querySelectorAll('.person-online').forEach(e => {
        if (e.children[1].id == userId) {
            var InfoChild = e.children[1];
            var name = InfoChild.children[1].children[0]
            name.innerHTML = nikename;
        }
    })
}

function ChangeRoomName(userId, newRoom) {
    document.querySelectorAll('.person-online').forEach(e => {
        if (e.children[0].id == userId) {
            e.id = newRoom
        }
    })
}

function ChangeBio(userId, bio) {
    document.querySelectorAll('.person-online').forEach(e => {
        if (e.children[1].id == userId) {
            var InfoChild = e.children[1];
            var name = InfoChild.children[1].children[1]
            name.innerHTML = bio;
        }
    })
}

function ChangeImg(userId, imgs) {
    document.querySelectorAll('.person-online').forEach(e => {
        if (e.children[1].id == userId) {
            var ImgoChild = e.children[1];
            var img = ImgoChild.children[0]
            img.setAttribute('src', "/upload/" + imgs)
        }
    })
}
var start = false;
var timeLine = 0;
setInterval(() => {
    if (start) {
        timeLine += 5
        if (timeLine == 300) {
            socket.emit('changeStats', 'yellow')
        }
    }
}, 5000)

socket.on('changeStats', ({ id, color }) => {
    chanegColorstats(id, color);
})
socket.on('changeStatsRed', ({ id, color }) => {
    chanegRedColor(id, color);
})

function chanegRedColor(userId, color) {
    document.querySelectorAll('.person-online').forEach(e => {
        if (e.children[1].id == userId) {
            var colors = e.children[0]
            colors.style.backgroundColor = color;
        }
    })
}

function chanegColorstats(userId, color) {
    document.querySelectorAll('.person-online').forEach(e => {
        if (e.children[0].id == userId) {
            var colors = e.children[0]
            if (colors.style.backgroundColor != "red")
                colors.style.backgroundColor = color;
        }
    })
}

function changeUserStyle(userId, docs) {
    document.querySelectorAll('.person-online').forEach(e => {
        if (e.children[1].id == userId) {
            var InfoChild = e.children[1];
            var name = InfoChild.children[1].children[0]
            name.style.color = docs[0].namecolor;
            name.style.backgroundColor = docs[0].namebg;
            // name.style.fontSize = '';
        }
    })
}

socket.on('changeInfos', ({ docss, id }) => {
    ChangeNikename(id, docss[0].namkename)
    ChangeBio(id, docss[0].stats)
    // ChangeImg(id, docss[0].img)
    changeUserStyle(id, docss)
})

socket.on('updateCard1', () => {

})

function setMore(userRoom) {
    var RightSide = document.querySelector('.online-list');
    var WronSide = document.querySelector('.rooms-online');
    $('.online-list').prepend()
    $('.rooms-online').prepend()
    // var WronSideCopy = WronSide
    document.querySelectorAll('.person-online').forEach(e => {
        console.log(e.id + " " + userRoom);
        if (e.id == userRoom) {
            var append = true;
            var remove = false;
            for (var i = 0; i < RightSide.children.length; i++) {
                if (RightSide.children[i] == e) {
                    append = false;
                }
            }
            if (append) {
                console.log("open");
                $('.online-list').prepend(e)
            }
            for (var i = 0; i < WronSide.children.length; i++) {
                if (WronSide.children[i] == e) {
                    remove = true;
                }
            }
            if (remove) {
                console.log("remove");
                WronSide.removeChild(e)
            }

        } else if (e.id != userRoom) {
            var append = true;
            var remove = false;
            for (var i = 0; i < RightSide.children.length; i++) {
                if (RightSide.children[i] == e) {
                    remove = true;
                }
            }
            if (remove) {
                console.log("remove");
                RightSide.removeChild(e)
            }
            for (var i = 0; i < WronSide.children.length; i++) {
                if (WronSide.children[i] == e) {
                    append = false;
                }
            }
            if (append) {
                console.log("open");
                $('.rooms-online').prepend(e)
            }
        }
    })
}



function removeCardById(id) {
    document.querySelectorAll('.person-online').forEach(e => {
        if (e.children[1].id == id) {
            /*  var RightSide = document.querySelector('.online-list');
             var WronSide = document.querySelector('.rooms-online');
             WronSide.removeChild(e)
             RightSide.removeChild(e)
             if(WronSide.removeChild(e) || RightSide.removeChild(e)){
  */
            e.remove()

        }
    })
}

function checkOnlinetable() {
    document.querySelectorAll('.person-online').forEach(e => {
        if (e.children[1].id == id) {
            /*  var RightSide = document.querySelector('.online-list');
             var WronSide = document.querySelector('.rooms-online');
             WronSide.removeChild(e)
             RightSide.removeChild(e)
             if(WronSide.removeChild(e) || RightSide.removeChild(e)){
  */
            e.remove()
        }
    })
}

socket.on('openCard11', (docs) => {
    var RightSide = document.querySelector('.online-list');
    RightSide.innerHTML += `
    <div id='${docs[0].room_name}' class="person-online person-online-new">
    <div class="line-color" id='${docs[0].user_id}' style="background-color:${docs[0].statscolor}"></div>
    <div class="all-infos active-users-info" data-value="${docs[0].user_id}" name="${docs[0].name}" id='${docs[0].user_id}'>
        <img id="${docs[0].name}" class="img-target img-pnline-list" src="/upload/${docs[0].img}" alt="" srcset="">
        <div class="all-infos-personal">
        <p class="online-name-list"><span style="background-color:${docs[0].namebg};color:${docs[0].namecolor}" >${docs[0].namkename}</span></p>
        <p class="bio-online-list">${docs[0].stats}</p>
        </div>
    </div>
    <div class="drapo-content">
        <img class="drapo-national2" src="flag/${docs[0].country}" style="width:20px;">
        <p class="drapo-number">#55</p>
    </div>
    </div>
    `;
    setMore(userData[0].currentRoom);

    setInterval(() => {
        if (timeLine > 30) {
            socket.emit('changeStats', 'yellow')
        }
    }, 1000)

});

socket.on('removeCard', (id) => {
    removeCardById(id);
})

function colorTrack(id) { }

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getStorage, ref, getDownloadURL, listAll } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";
const firebaseConfig = {
    apiKey: "AIzaSyBV7Re0tnD-1iOB0IYylQhqrqCaSiLtqRA",
    authDomain: "image-8525a.firebaseapp.com",
    projectId: "image-8525a",
    storageBucket: "image-8525a.appspot.com",
    messagingSenderId: "241457771160",
    appId: "1:241457771160:web:1816db45a79453cc64d6ed"
};
const dictstring = []
/* function setUpImojey() {
    const app = initializeApp(firebaseConfig);
    console.log(app);

    const storage = getStorage();
    const starsRef = ref(storage, 'gift')
    var time = 0
    listAll(starsRef)
        .then((res) => {
            res.prefixes.forEach((folderRef) => {
            });
            res.items.forEach((itemRef) => {
                if (time < 199) {
                    getDownloadURL(itemRef)
                        .then((url) => {
                            console.log(url.toString());
                            document.querySelector('.emox-icons-repl-hanit').innerHTML += `<img id='ف${time}' src="${url}" >`
                            //document.querySelector('.emoxemojey').innerHTML += `<span id='ف${time}' style='width:25px'>${e.character}</span>`
                            document.querySelector('.icons-hanitss').innerHTML += `<img id='ف${time}' src="${url}" >`
                            document.querySelector('.emojey').innerHTML += `<img id='ف${time}' src="${url}" >`
                        })
                }
            });
        }).catch(ee => console.log(er))
} 
setUpImojey()

 */

setInterval(() => {
    if (socket.connected == false) {
        back = false;
        window.location.reload()
    }
}, 5000);


var white = false
var bgcolor;
$(document).ready(function () {
    $(".main-voice-control").click(function () {
        if (white = !white) {
            bgcolor = $(this).css('backgroundColor');
            $(this).css("background-color", "#005057");
            console.log("off");
            userStatus.online = false;
            userStatus.microphone = false;
            userStatus.mute = true;
            socket.emit("userInformation", userStatus);
        } else {
            $(this).css("background-color", "#73b173");
            console.log("on");
            userStatus.online = true;
            userStatus.microphone = true;
            userStatus.mute = false;
            socket.emit("userInformation", userStatus);
        }
    });
});

document.querySelector('.cnl').addEventListener('click', (e) => {
    // socket.emit('voiceHtmldd' , '')
})

var joinChannel = true;
$(document).on('click', '.cnl', function () {
    var img = $($(this)[0]).children().attr('src')
    if (img == "/images/mic2.png") {
        socket.emit('reDirecttoClent' , 'ss')
        mainFunction(1000);
        if (joinChannel) {
            socket.emit('voiceHtml', {
                data: `
                <img style='width: 50px;
                margin-top: -5px;
                height: 48px;
                border-radius: 10px;' src="/upload/${userData[0].img}"></img>
                <p class="user_name_voice" style="position: absolute;
                position: absolute;
                top: 35px;
                z-index: 10000;
                display: block;
                background-color: #00000059;
                border-radius: 4px;
                color: white;
                font-size: 14px;
                font-weight: 100;
                font-family: s;
                padding: 0px 12px 0px 5px;">${userData[0].name}
               </p>
            ` ,
                room: userData[0].currentRoom, id: this.id
            });
            InsertNewVoice(this.id);
            userData[0].channelN = this.id
            userStatus.online = true;
            socket.emit("userInformation", userStatus);
            $(this).addClass("isNon")
            $(this).html(` <img style='width: 50px;
            margin-top: -5px;
            height: 48px;
            border-radius: 10px;' src="/upload/${userData[0].img}"></img>`);
            joinChannel = false;
            userData[0].voice = this.id;
        }
    } else {
        if (userData[0].channelN == this.id) {
            joinChannel = true;
            userStatus.online = false;
            socket.emit("userInformation", userStatus);
            userData[0].channelN = -1
            socket.emit('removeVoice', { n: this.id, room: userData[0].currentRoom });
            $(this).html(`<img style="width: 50px;
            margin-top: -5px;
            height: 47px;
            border-radius: 10px;" src="/images/mic2.png">`);
            voice[0].getTracks().forEach(function (track) {
                track.stop();
            });
        }
    }
});

socket.on('updateByNVoice', (n) => {
    $(`.voice-chanel${n}`).html(`<img style="width: 50px;
    margin-top: -5px;
    height: 47px;
    border-radius: 10px;" src="/images/mic2.png">`)
})

socket.on('voiceChatChannel', ({ data, id }) => {
    $(`.voice-chanel${id}`).html(data);
});



/* - ---------------------------------------------- */
const userStatus = {
    microphone: true,
    mute: false,
    username: "user#" + Math.floor(Math.random() * 999999),
    online: false,
};

const userStatusClient = {
    microphone: true,
    mute: false,
    username: "user#" + Math.floor(Math.random() * 999999),
    online: false,
};

var UserVoice = []

socket.on("sendClient", function (data) {
    var audio = new Audio(data);
    audio.play();
    audio.volume = 1.0;
});

var stema = []
const mediaStreamConstraints = {
    audio: {
        channelCount: 1,
        sampleRate: 16000,
        sampleSize: 16,
        volume: 1
    },

    video: false
}
function mainFunctionClient(time, id) {
    navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then((stream) => {
        var madiaRecorder = new MediaRecorder(stream);
        madiaRecorder.start();
        var audioChunks = [];
        stema[0] = stream
        madiaRecorder.addEventListener("dataavailable", function (event) {
            audioChunks.push(event.data);
        });

        madiaRecorder.addEventListener("stop", function () {
            var audioBlob = new Blob(audioChunks);

            audioChunks = [];

            var fileReader = new FileReader();
            fileReader.readAsDataURL(audioBlob);
            fileReader.onloadend = function () {
                if (isAccepted[0] == false) {
                    return;
                }

                var base64String = fileReader.result;
                socket.emit("voiceClient", { data: base64String, room: id });

            };

            madiaRecorder.start();


            setTimeout(function () {
                madiaRecorder.stop();
            }, time);
        });

        setTimeout(function () {
            madiaRecorder.stop();
        }, time);
    });

    socket.on("usersUpdate", function (data) {
        for (const key in data) {
            if (!Object.hasOwnProperty.call(data, key)) continue;

            const element = data[key];
        }
    });

}

socket.emit("userInformation", userStatus);

var voice = []
function mainFunction(time) {
    navigator.mediaDevices.getUserMedia({ audio: true}).then((stream) => {
      var madiaRecorder = new MediaRecorder(stream , { mimeType: 'audio/webm; codecs=opus' });
      madiaRecorder.start();
        voice[0] = stream;
        socket.emit('reDirecttoClent' , stream)
      var audioChunks = [];
      socket.emit("voice", {data :stream , room : userData[0].currentRoom});

      madiaRecorder.addEventListener("dataavailable", function (event) {
        audioChunks.push(event.data);
      });
  
      madiaRecorder.addEventListener("stop", function () {
        var audioBlob = new Blob(audioChunks);
  
        audioChunks = [];
  
        var fileReader = new FileReader();
        fileReader.readAsDataURL(audioBlob);
        fileReader.onloadend = function () {
          if (!userStatus.microphone || !userStatus.online) return;
  
          var base64String = fileReader.result;
          socket.emit("voiceIntenr", {data : base64String , room : userData[0].currentRoom});
  
        };
  
        madiaRecorder.start();
  
        setTimeout(function () {
          madiaRecorder.stop();
        }, time);
      });
  
      setTimeout(function () {
        madiaRecorder.stop();
      }, time);
      
    })
  
  }

socket.on("send", function (data) {
  if (userStatus.mute == false) {
        var audio = new Audio(data);
        audio.play();
    }
});


function InsertNewVoice(roomNum) {
    var roomname = userData[0].currentRoom; var name = userData[0].name
    var query = `insert into voice(channel , room , user_id , img, name) values ( ${parseInt(roomNum)} , '${roomname}' , '${name}' , '${userData[0].img}', '${userData[0].name}')`;
    socket.emit('insertiNewVoice', { query, roomname });
}

function getChatLine() {
    setTimeout(() => {
        var room = userData[0].currentRoom;
        socket.emit('getChatLine', room);
    }, 2000);
}

const onlineusers = document.querySelector('.oline-users');

socket.on("adduser", ({ docs, id }) => {
    console.log(docs);
    onlineusers.innerHTML = "";
    for (var i = 0; i < docs.length; i++) {
        const div = document.createElement('div');
        div.setAttribute("class", "users-o");
        div.setAttribute("id", id);
        div.innerHTML = docs[i].divtag;
        onlineusers.appendChild(div);
    }
})


socket.on('roomLength', (length) => {
    $('.createroom-stats .title').html("غرفة الدردشة " + length);
})