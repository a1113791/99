// 外層 for 迴圈
for(let i = 2 ; i < 10 ; i++){
    // 創造一個新的 div 元素
    let tableWrap = document.createElement('div') ;
    // 將該 div 元素貼上 table 標籤
    tableWrap.setAttribute('class','table') ;
    // 透過樣板字串生成小標
    let viewContent = `<h2 class="table-title">${i}</h2>` ;

    // 內層 for 迴圈
    for(let j = 1 ; j < 10 ; j++){
      // 透過樣板字串生成算式
        viewContent += `<p>${i} x ${j} = ${i*j}</p>` ;
    }

    // 將生成的內容置入 div 元素中
    tableWrap.innerHTML = viewContent ;

    // 將 div 元素加到 .container 元素最後面（不會取代原本的內容）
    document.querySelector('.container').appendChild(tableWrap) ;
}