// console.log('handler file added')

document.getElementById('btn-update-title')
    .addEventListener('click', function () {
        // console.log('button click working');
        const pageTitleElement = document.getElementById('page-title');
        // console.log(pageTitleElement);
        pageTitleElement.innerText = "Updated Page Title Changed By Your Click"

    })



document.getElementById('btn-login')
    .addEventListener('click', function () {
        // console.log('User Clicked Login Button');
        const userInfoEl = document.getElementById('user-info');
        userInfoEl.innerText = 'User Logged in successfully';

    })