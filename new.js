// Variable Assigment

var html = document.documentElement

var body = document.body

var nav = document.querySelector('nav')

var footer = document.querySelector('footer')

var gre = document.querySelectorAll('*')

var wholeSmallCircle = document.querySelector('.small-circle')

var firstImage = document.querySelector('.first-image')

var scrthme = document.getElementById('scrthme')

var documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.scrollHeight, html.clientHeight, html.offsetHeight)

var PageHeight = Math.max(html.clientHeight || 0, window.innerHeight || 0)

var PageWidth = Math.max(html.clientWidth || 0, window.innerWidth || 0)

var siteIframes = document.querySelectorAll('.site-iframe')

var ParentIframesList = document.querySelector('.my-works-list')

var defaultIframe = document.getElementById('default-iframe')

var scrollbarsToggler = document.getElementById('scrollbars-toggler')

var fullscreenToggler = document.getElementById('fullscreen-toggler')

var firstWhatDo = document.querySelector('.what-do-first')

var secondWhatDo = document.querySelector('.what-do-second')

var ParentWorkIDoList = document.querySelector('.my-services-content')

var siteMechFrame = document.querySelectorAll('.site-mech-frame')

var ParentMechFrameList = document.querySelector('.mech-designs-list')

var defaultMechFrame = document.getElementById('default-mech-frame')

var mechPrevious = document.getElementById('mech-previous')
var lefterImage = document.getElementById('lefter-image')

var mechNext = document.getElementById('mech-next')
var righterImage = document.getElementById('righter-image')

var navShowerButton = nav.querySelector('.ham-hammie')

var navItem = nav.querySelector('ul')

// Functions Definitions

function toggleSnav() {
    if (wholeSmallCircle.className == 'small-circle') {
        wholeSmallCircle.className = 'small-circle show'
        setTimeout(function () { html.addEventListener('click', removeSnav) }, 5)
    } else {
        wholeSmallCircle.className = 'small-circle'
        html.removeEventListener('click', removeSnav)
    }
}

function removeSnav() {
    if (wholeSmallCircle.className == 'small-circle show') {
        wholeSmallCircle.className = 'small-circle'
        html.removeEventListener('click', removeSnav)
    }
}

function scrollDownTo(to, duration) {
    if ((documentHeight - to) < PageHeight) {
        to = documentHeight - PageHeight;
    }
    var diff = to - window.pageYOffset;
    var scrollStep = Math.PI / (duration / 10);
    var count = 0, currPos; ajaxe = 1
    var start = window.pageYOffset;
    var scrollInterval = setInterval(function () {
        if (window.pageYOffset != to) {
            count = count + 1;
            if (ajaxe > count) {
                clearInterval(scrollInterval)
            }
            currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
            if (currPos >= to) {
                scroll(0, diff)
                clearInterval(scrollInterval)
            }
            scroll(0, currPos)
            ajaxe = count
        }
        else { clearInterval(scrollInterval); }
    }, 20);
}

function scrollUpTo(to, duration) {
    if ((documentHeight - to) < PageHeight) {
        to = documentHeight - PageHeight;
    }
    var diff = to - window.pageYOffset;
    var scrollStep = Math.PI / (duration / 10);
    var count = 0, currPos; ajaxe = 1
    var start = window.pageYOffset;
    var scrollInterval = setInterval(function () {
        if (window.pageYOffset != to) {
            count = count + 1;
            if (ajaxe > count) {
                clearInterval(scrollInterval)
            }
            currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
            if (currPos <= to) {
                scroll(0, diff)
                clearInterval(scrollInterval)
            }
            scroll(0, currPos)
            ajaxe = count
        }
        else { clearInterval(scrollInterval); }
    }, 20);
}

function transScroll(elID, loc) {
    var dest = document.getElementById(elID);
    if (loc == 'down') {
        scrollDownTo((dest.getBoundingClientRect().top + window.pageYOffset), 500);
    } else {
        scrollUpTo((dest.getBoundingClientRect().top + window.pageYOffset), 500);
    }
}

function contentChanger(linkList, content, idefault, contentnum, listnum) {
    var formerActive

    function changeContent(lister) {

        for (let i = 0; i < content.length; i++) {
            content[i].style.display = 'none';
        }

        idefault.style.display = 'none'

        for (let i = 0; i < content.length; i++) {
            if (content[i].id.slice(contentnum) == lister.id.slice(listnum)) {
                if (formerActive != undefined) {
                    formerActive.classList.remove('active')
                }
                lister.classList.add('active');
                content[i].style.display = 'block';
                formerActive = lister
            }
        }
    }

    function workChangeContent(linkList) {
        linkList.addEventListener('click', function () { changeContent(this) })
    }

    for (let i = 0; i < linkList.length; i++) {
        workChangeContent(linkList[i]);
    }
}

function alFulSccreen(iframeContainDiv) {
    for (let i = 0; i < iframeContainDiv.length; i++) {
        iframeContainDiv[i].firstElementChild.allowFullscreen = 'true';

        if (iframeContainDiv[i].style.display == 'block') {
            iframeContainDiv[i].firstElementChild.requestFullscreen()
        }
    }
}

function alScrollSccreen(iframeContainDiv) {
    for (let i = 0; i < iframeContainDiv.length; i++) {
        if (iframeContainDiv[i].style.display == 'block') {
            if (iframeContainDiv[i].firstElementChild.scrolling == 'yes') {
                iframeContainDiv[i].firstElementChild.scrolling = 'no'
                iframeContainDiv[i].firstElementChild.src = iframeContainDiv[i].firstElementChild.src;
            }
            else {
                iframeContainDiv[i].firstElementChild.scrolling = 'yes';
                iframeContainDiv[i].firstElementChild.src = iframeContainDiv[i].firstElementChild.src;
            }
        }
    }
}

function nextImage(listOfImageContainers) {
    var currNum, images

    for (let i = 0; i < listOfImageContainers.length; i++) {
        if (listOfImageContainers[i].style.display == 'block') {
            images = listOfImageContainers[i].children
            for (let j = 0; j < images.length; j++) {
                if (images[j].classList.contains('active')) {
                    currNum = j
                }
            }
        }
    }

    if (currNum != undefined) {
        images[currNum].classList.remove('active')
        if ((currNum + 1) == images.length) {
            currNum = -1
        }
        images[currNum + 1].classList.add('active')
    }
}

function previousImage(listOfImageContainers) {
    var currNum, images

    for (let i = 0; i < listOfImageContainers.length; i++) {
        if (listOfImageContainers[i].style.display == 'block') {
            images = listOfImageContainers[i].children
            for (let j = 0; j < images.length; j++) {
                if (images[j].classList.contains('active')) {
                    currNum = j
                }
            }
        }
    }

    if (currNum != undefined) {
        images[currNum].classList.remove('active')
        if ((currNum) == 0) {
            currNum = images.length;
        }
        images[currNum - 1].classList.add('active')
    }
}

function makeShowClass(whatClicker, onFeature) {
    for (let i = 0; i < whatClicker.length; i++) {
        whatClicker[i].addEventListener('click', function () { onFeature.parentElement.className = 'show' })
    }
}

function classToggler(clickMe, clickMeClass, changeMe, changeMeClass, special) {
    function worker(clickMe, changeMe, clickMeClass, changeMeClass, special) {
        if (clickMe.classList.contains(clickMeClass)) {
            clickMe.classList.remove(clickMeClass);
            changeMe.classList.remove(changeMeClass);
        }
        else {
            clickMe.classList.add(clickMeClass);
            changeMe.classList.add(changeMeClass);
            if (special == 'onHtmlTouch') {
                setTimeout(function () { html.addEventListener('click', removeBnav) }, 5)
            }
        }
    }

    function removeBnav() {
        clickMe.classList.remove(clickMeClass);
        changeMe.classList.remove(changeMeClass);
        html.removeEventListener('click', removeBnav)
    }


    clickMe.addEventListener('click', function () { worker(clickMe, changeMe, clickMeClass, changeMeClass, special) })
}



// Call of Functions

if (wholeSmallCircle != null) {

    var smallCircle = wholeSmallCircle.querySelector('span')


    smallCircle.addEventListener('click', toggleSnav)
}

if (siteIframes.length != 0) {
    var siteIframesList = ParentIframesList.firstElementChild.children

    contentChanger(siteIframesList, siteIframes, defaultIframe, 7, 6)

    fullscreenToggler.addEventListener('click', function () { alFulSccreen(siteIframes) })

    scrollbarsToggler.addEventListener('click', function () { alScrollSccreen(siteIframes) })
}

if (firstWhatDo != null) {
    var fwDoList = firstWhatDo.firstElementChild.lastElementChild.children

    var fwDoContent = firstWhatDo.lastElementChild.querySelectorAll('.show-infoer')

    var fwDoDefault = firstWhatDo.lastElementChild.querySelector('#show-as-default')

    contentChanger(fwDoList, fwDoContent, fwDoDefault, 8, 8)
}

if (secondWhatDo != null) {
    var sdDoList = secondWhatDo.firstElementChild.lastElementChild.children

    var sdDoContent = secondWhatDo.lastElementChild.querySelectorAll('.show-infoer')

    var sdDoDefault = secondWhatDo.lastElementChild.querySelector('#show-as-default')

    contentChanger(sdDoList, sdDoContent, sdDoDefault, 8, 8)
}

if (siteMechFrame.length != 0) {
    var siteMechFrameList = ParentMechFrameList.firstElementChild.children

    contentChanger(siteMechFrameList, siteMechFrame, defaultMechFrame, 11, 7)

    makeShowClass(siteMechFrameList, defaultMechFrame)

    mechPrevious.addEventListener('click', function () { previousImage(siteMechFrame) })
    lefterImage.addEventListener('click', function () { previousImage(siteMechFrame) })

    mechNext.addEventListener('click', function () { nextImage(siteMechFrame) })
    righterImage.addEventListener('click', function () { nextImage(siteMechFrame) })
}

if (navShowerButton != null) {
    var navShowerSvg = navShowerButton.firstElementChild.firstElementChild

    classToggler(navShowerSvg, 'hide-hammie', navItem, 'show-lis', 'onHtmlTouch')
}

// alert(PageWidth)