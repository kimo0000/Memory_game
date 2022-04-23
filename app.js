document.querySelector('.btn_start').onclick = function() {

    let yourName = prompt('What is your name !');

    if(yourName == null || yourName == '') {

         document.querySelector('.name span').innerHTML = 'unknow';

    } else {

         document.querySelector('.name span').innerHTML = yourName;

    }

    document.querySelector('.btn_control').remove();

    //document.querySelector('.infinit').play();
}

let duration = 1000; // milliseconds

let blockContainer = document.querySelector('.game_block_container');

let  blocks = Array.from(blockContainer.children);
//console.log(blocks);

//let orderBlock = Array.from(Array(blocks.length).keys());
let orderBlock = [...Array(blocks.length).keys()];

//console.log(orderBlock);
desordreBlock(orderBlock);
//console.log(orderBlock);

blocks.forEach((block, index) => {

    block.style.order = orderBlock[index];

    block.addEventListener('click', () => {

        flipped(block);

       let AllFlippedBlock = blocks.filter(blockFltered => blockFltered.classList.contains('flipped'));
    
        if(AllFlippedBlock.length === 2) {

            stopClicking();
            
            matchBlock(AllFlippedBlock[0], AllFlippedBlock[1]);
            
        } else {
            return false;
        }
    })


})

function stopClicking() {
      blockContainer.classList.add('no_click');

    setTimeout(() => {
      blockContainer.classList.remove('no_click');
    }, duration);

}

function matchBlock(firstBlock, secondBlock) {

    let triesElement = document.querySelector('.trie span');

    if(firstBlock.dataset.type == secondBlock.dataset.type) {

        firstBlock.classList.remove('flipped');
        secondBlock.classList.remove('flipped');

        firstBlock.classList.add('has_match');
        secondBlock.classList.add('has_match');

        document.querySelector('.success').play();

    } else {

        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

        setTimeout(() => {

           firstBlock.classList.remove('flipped');
           secondBlock.classList.remove('flipped');

        }, duration);

        document.querySelector('.failed').play();

    }

}


function flipped(selectedBlock) {

     selectedBlock.classList.add('flipped');

}


function desordreBlock(array) {

    let current = array.length,
        temp,
        random;

while(current > 0) {

   random = Math.floor(Math.random() * current);
   current--;

   temp = array[current];
   //console.log(temp);
   //console.log(array[current]);
   //console.log(array[random])
   array[current] = array[random];
   array[random] = temp;
 }  

   return array;

}