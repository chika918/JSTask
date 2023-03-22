//JS課題
//問1：try catchを使ってエラー文をコンソールに表示させる
try{
    let array = [0,1,2,3,4];
    for(let i = 0; i <= 5; i++){
        console.log(array2[i]);
    }
} catch(e){
    //エラーが発生したら実行される
    console.log("エラーを検知しました（問1）");
} finally{
    //エラーに関係なく必ず実行
    console.log("必ず実行（問1）");
}

//問2：throw
try{
    let array = [0,1,2,3,4];

    //該当する場合強制でエラーを発生する
    if (array.length === 5){
        throw('エラーが発生しました')
    }

    //上記以外の場合は処理が実行される
    for(let i = 0; i <= 5; i++){
        console.log(array[i]);
    }

} catch(e){
    //エラーが発生したら実行される
    console.log(e);
} finally{
    //エラーに関係なく必ず実行
    console.log("必ず実行（問2）");
}

//問3　例外処理
try {
    throw new ReferenceError("指定した変数・関数は存在しません。");
    console.log(array2(実行れされない));
} catch (e) {

    if (e instanceof ReferenceError){
        console.log(e.message);
        e = new SyntaxError("構文間違いです。");
    }

    if (e instanceof SyntaxError){
        console.log(e.message);
        e = new TypeError("タイプエラーです。");
    };

    if (e instanceof TypeError){
        console.log(e.message);
    }

} finally {
    console.log("エラーで表示されませんでした(問3)")
}

//問4
/* 
console.log("A");
setTimeout(function(){
    console.log("B");
  }, 3000);
console.log("C");
*/

//下記に修正
//setTimeoutはawaitできない →　promiseでラップ
function callB() {
    return new Promise(function(resolve){
      setTimeout(function(){resolve("B")}, 3000)
    })
}

async function myAsync() {
    console.log("A");
    console.log(await callB());
    console.log("C");
}
myAsync();
