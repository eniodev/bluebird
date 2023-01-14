    function createTwitterModal() {
        const twitterModal = document.createElement('div');
        twitterModal.classList.add('twtModal');
        document.body.appendChild(twitterModal);
    }

    createTwitterModal();

    function createTwtTextBox() {
        const twtTexBox = document.createElement('div');
        const twitterModal = document.querySelector('.twtModal');
        twtTexBox.classList.add('twtTextBox');

        const textBoxElements = `
        <textarea class='twtTextArea' >
        Seriously, if unless you want an absolutely positioned element, don't use one. And you almost never need an absolute element, since DOM is based off of HTML (v2) which is based on free-flowing text.
        </textarea>
        
        <button class='twtBtn'>tweet</button>
        
        `;

        twtTexBox.innerHTML = textBoxElements;


        twitterModal.appendChild(twtTexBox);
    }

    createTwtTextBox();

    
    function createDropMenu() {
            const dropMenu = document.createElement('div');
            dropMenu.classList.add('twtDropMenu');
            document.body.appendChild(dropMenu);
        }

        createDropMenu();

    function createTwitterBtn() {
        const dropMenu = document.querySelector('.twtDropMenu');
        const twitterBtn = document.createElement('a');

        const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><rect width="24" height="24" fill="none"></rect><path d="M128,88c0-22,18.5-40.3,40.5-40a40,40,0,0,1,36.2,24H240l-32.3,32.3A127.9,127.9,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,88,48Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>'

        twitterBtn.classList.add('twitterBtn');
        
        twitterBtn.setAttribute('target', '_blank');
        twitterBtn.setAttribute('rel', 'nofollow noopener');
        twitterBtn.setAttribute('aria-label', 'share as tweet');
        twitterBtn.innerHTML = `${svg}&nbsp;tweet`;


        dropMenu.appendChild(twitterBtn);
    }

    createTwitterBtn();

    function createTweetWithCommentBtn() {
        const dropMenu = document.querySelector('.twtDropMenu');
        const TweetWithCommentBtn = document.createElement('a');
        const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><rect width="24" height="24" fill="none"></rect><circle cx="116" cy="140" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path d="M32,224l139.5-23.2a7.9,7.9,0,0,0,6.1-5.1L200,136,120,56,60.3,78.4a8.1,8.1,0,0,0-5.1,6.2Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M200,136l26.3-26.3a8,8,0,0,0,0-11.4L157.7,29.7a8,8,0,0,0-11.4,0L120,56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="32" y1="224" x2="99" y2="157" fill="none" stroke="#currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>';
        TweetWithCommentBtn.classList.add('twtWithComment');
        TweetWithCommentBtn.innerHTML = `${svg}&nbsp;add comment`;
        dropMenu.appendChild(TweetWithCommentBtn);
    }

    createTweetWithCommentBtn();

   


const twitterBtn = document.querySelector('.twitterBtn');
const dropMenu = document.querySelector('.twtDropMenu');
const TweetWithCommentBtn = document.querySelector('.twtWithComment');
let twtDropMenu;

 

function blueBird(e, selection) {

    
    dropMenu.addEventListener('click', () => {
        const URL = location.href;
        twitterBtn.href = `https://twitter.com/intent/tweet?hashtags=bluebird&url=${URL}&text=${selection}`;
    })
    

    TweetWithCommentBtn.addEventListener('click', () => {
        const twtModal = document.querySelector('.twtModal');
        const twtBtn = document.querySelector('.twtBtn');
        const twtTextArea = document.querySelector('.twtTextArea');
        twtModal.classList.add('active');

        twtModal.addEventListener('click', () => {
            twtModal.classList.remove('active');
        })

            


    })

    dropMenu.classList.add('active');
    dropMenu.style.top = e.pageY + 'px';
    dropMenu.style.left = e.pageX + 'px';
    twtDropMenu = setTimeout(function(){hideDropMenu()}, 4000);
}


function hideDropMenu() {
    dropMenu.classList.remove('active');
}


// Event Listener 

document.addEventListener('mouseup', (e) => {
    dropMenu.classList.remove('active');

    if(!document.getSelection().anchorNode.parentElement){return;}
        clearTimeout(twtDropMenu);
        
        const selection = document.getSelection().toString();
        selection.length > 0 && selection.length < 281 
        && blueBird(e, selection); 
        
    
})




